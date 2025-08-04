import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import fs from 'fs';
import path from 'path';
import 'simple-svelte-autocomplete';
import 'lodash.shuffle';
import Stream from 'stream';
import http from 'http';
import Url from 'url';
import https from 'https';
import zlib from 'zlib';

function noop$2() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop$2;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);
const escaped$1 = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped$1[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true && boolean_attributes.has(name) ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* node_modules/fa-svelte/src/Icon.svelte generated by Svelte v3.46.2 */

const css$5 = {
	code: ".fa-svelte.svelte-1d15yci{width:1em;height:1em;overflow:visible;display:inline-block}",
	map: "{\"version\":3,\"file\":\"Icon.svelte\",\"sources\":[\"Icon.svelte\"],\"sourcesContent\":[\"<svg\\r\\n  aria-hidden=\\\"true\\\"\\r\\n  class=\\\"{classes}\\\"\\r\\n  role=\\\"img\\\"\\r\\n  xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n  viewBox=\\\"{viewBox}\\\"\\r\\n>\\r\\n  <path fill=\\\"currentColor\\\" d=\\\"{path}\\\" />\\r\\n</svg>\\r\\n<script>\\r\\n  export let icon;\\r\\n\\r\\n  let path = [];\\r\\n  let classes = \\\"\\\";\\r\\n  let viewBox = \\\"\\\";\\r\\n\\r\\n  $: viewBox = \\\"0 0 \\\" + icon.icon[0] + \\\" \\\" + icon.icon[1];\\r\\n\\r\\n  $: classes = \\\"fa-svelte \\\" + ($$props.class ? $$props.class : \\\"\\\");\\r\\n\\r\\n  $: path = icon.icon[4];\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .fa-svelte {\\r\\n    width: 1em;\\r\\n    height: 1em;\\r\\n    overflow: visible;\\r\\n    display: inline-block;\\r\\n  }\\r\\n</style>\"],\"names\":[],\"mappings\":\"AAwBE,UAAU,eAAC,CAAC,AACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,OAAO,CACjB,OAAO,CAAE,YAAY,AACvB,CAAC\"}"
};

const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { icon } = $$props;
	let path = [];
	let classes = "";
	let viewBox = "";
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	$$result.css.add(css$5);
	viewBox = "0 0 " + icon.icon[0] + " " + icon.icon[1];
	classes = "fa-svelte " + ($$props.class ? $$props.class : "");
	path = icon.icon[4];
	return `<svg aria-hidden="${"true"}" class="${escape(null_to_empty(classes)) + " svelte-1d15yci"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("viewBox", viewBox, 0)}><path fill="${"currentColor"}"${add_attribute("d", path, 0)}></path></svg>`;
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$1(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire$1(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire$1 () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var faVolumeUp = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'volume-up';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f028';
var svgPathData = 'M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faVolumeUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faVolumeUp$1 = faVolumeUp;

var faVolumeMute = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'volume-mute';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f6a9';
var svgPathData = 'M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faVolumeMute = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faVolumeMute$1 = faVolumeMute;

var faPlay = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'play';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f04b';
var svgPathData = 'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPlay = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faPlay$1 = faPlay;

var faPause = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'pause';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f04c';
var svgPathData = 'M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPause = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faPause$1 = faPause;

var faCog = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'cog';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f013';
var svgPathData = 'M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCog = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faCog$1 = faCog;

var faHome = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'home';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f015';
var svgPathData = 'M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faHome = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faHome$1 = faHome;

var faDonate = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'donate';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f4b9';
var svgPathData = 'M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faDonate = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faDonate$1 = faDonate;

var faCloudDownloadAlt = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'cloud-download-alt';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f381';
var svgPathData = 'M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCloudDownloadAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faCloudDownloadAlt$1 = faCloudDownloadAlt;

var faDice = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'dice';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f522';
var svgPathData = 'M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faDice = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faDice$1 = faDice;

var faPhotoVideo = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'photo-video';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f87c';
var svgPathData = 'M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPhotoVideo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faPhotoVideo$1 = faPhotoVideo;

var faImage = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'image';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f03e';
var svgPathData = 'M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faImage = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faImage$1 = faImage;

var faVideo = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'video';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f03d';
var svgPathData = 'M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faVideo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faVideo$1 = faVideo;

var faStar$2 = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'star';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f005';
var svgPathData = 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faStar$3 = faStar$2;

var faStar = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'far';
var iconName = 'star';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f005';
var svgPathData = 'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faStar$1 = faStar;

var faSearch = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'search';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f002';
var svgPathData = 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSearch = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faSearch$1 = faSearch;

var faSync = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'sync';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f021';
var svgPathData = 'M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSync = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faSync$1 = faSync;

var faSpinner = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'spinner';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f110';
var svgPathData = 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSpinner = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faSpinner$1 = faSpinner;

var faPlusCircle = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'plus-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f055';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPlusCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faPlusCircle$1 = faPlusCircle;

var faEye = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'eye';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f06e';
var svgPathData = 'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faEye = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faEye$1 = faEye;

var faMobileAlt = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'mobile-alt';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f3cd';
var svgPathData = 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faMobileAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faMobileAlt$1 = faMobileAlt;

var faDesktop = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'desktop';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f108';
var svgPathData = 'M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faDesktop = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faDesktop$1 = faDesktop;

var faTimes = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faTimes$1 = faTimes;

const subscriber_queue$1 = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable$1(value, start = noop$2) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue$1.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue$1.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue$1.length; i += 2) {
                        subscriber_queue$1[i][0](subscriber_queue$1[i + 1]);
                    }
                    subscriber_queue$1.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$2) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || noop$2;
        }
        run(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const store = (key, initialValue) => {
  const { subscribe, set } = writable$1(initialValue);

  return {
    subscribe,
    set,
    useLocalStorage: (defaultValue) => {
      {
        return;
      }
    },
  };
};

const autoplay = store();
const autoplayinterval = store();
const scrollspeed = store();
const imageVideo = store();
const portraitLandscape = store();
const favorite = store();
const over18 = store();
const prefetch = store();
const prefetchNum = store();
const numCols = store();
const hires = store();
const lores = store();
const muted = store();
const layout = store();
const oldreddit = store();
const multireddit = store();

/* src/components/Settings.svelte generated by Svelte v3.46.2 */

const css$4 = {
	code: ".settingspanel.svelte-abj757.svelte-abj757{position:fixed;background-color:black;left:25%;top:25%;width:50%;height:50%;border-radius:5px;border:1px solid white;padding:1rem;display:none;grid-template-rows:[head-start] 2.5rem [head-end contents-start] 2fr [contents-end]}.settingspanel.showSettings.svelte-abj757.svelte-abj757{display:grid;grid-gap:1rem}.settingspanel.svelte-abj757 .contents.svelte-abj757{grid-row:contents;display:grid;grid-template-columns:1fr 2fr;overflow:hidden;user-select:none}.settingspanel.svelte-abj757 .contents .nav.svelte-abj757{font-size:1.1rem;display:grid;grid-auto-rows:max-content;grid-gap:5px;align-items:center;justify-items:center;grid-auto-flow:row}.settingspanel.svelte-abj757 .contents .nav .active.svelte-abj757{background-color:rgba(255, 255, 255, 0.2);border-bottom:3px solid white}.settingspanel.svelte-abj757 .contents .nav div.svelte-abj757{padding:0.5rem 1rem;border-bottom:3px solid rgba(0, 0, 0, 0);width:100%;height:100%;cursor:pointer}@media not all and (pointer: coarse){.settingspanel.svelte-abj757 .contents .nav div.svelte-abj757:hover{background-color:rgba(255, 255, 255, 0.2);border-bottom:3px solid white}}.settingspanel.svelte-abj757 .contents .options.svelte-abj757{background-color:rgba(0, 0, 0, 0);border-left:1px solid white;overflow:auto}.settingspanel.svelte-abj757 .contents .options .option.svelte-abj757{display:none;padding:0rem 1rem}.settingspanel.svelte-abj757 .contents .options .option .item.svelte-abj757{padding:0.5rem;margin:0.5rem 0}.settingspanel.svelte-abj757 .contents .options .option .item .text.svelte-abj757{margin-right:10px}.settingspanel.svelte-abj757 .contents .options .option .item .key.svelte-abj757{color:#f9ab00;margin:0 4px;border:1px solid #f9ab00;border-radius:3px;padding:4px 5px}.settingspanel.svelte-abj757 .contents .options .option .item .input input.svelte-abj757{border:1px solid white;background-color:rgba(0, 0, 0, 0);color:white;padding:5px;width:100px}.settingspanel.svelte-abj757 .contents .options .option .item .button.svelte-abj757{border:1px solid white;margin:0 5px;padding:5px;border-radius:3px;cursor:pointer}@media not all and (pointer: coarse){.settingspanel.svelte-abj757 .contents .options .option .item .button.svelte-abj757:hover{background-color:white;color:black}}.settingspanel.svelte-abj757 .contents .options .active.svelte-abj757{display:block}.settingspanel.svelte-abj757 .close.svelte-abj757{position:absolute;top:1rem;color:rgba(255, 255, 255, 0.6);cursor:pointer;right:1rem}@media not all and (pointer: coarse){.settingspanel.svelte-abj757 .close.svelte-abj757:hover{color:white}}.settingspanel.svelte-abj757 .head.svelte-abj757{font-size:1.5rem;align-self:center}.settingspanel.svelte-abj757 .head.svelte-abj757 svg{position:relative;top:3px;margin-right:10px}@media(max-width: 1600px){.settingspanel.svelte-abj757.svelte-abj757{width:80%;left:10%}}@media(max-width: 1000px){.settingspanel.svelte-abj757.svelte-abj757{width:90%;left:5%}}@media(max-width: 800px){.settingspanel.svelte-abj757 .contents.svelte-abj757{grid-template-rows:3rem auto;grid-template-columns:unset}.settingspanel.svelte-abj757 .contents .nav.svelte-abj757{grid-auto-flow:column;grid-auto-rows:unset;grid-auto-columns:max-content}.settingspanel.svelte-abj757 .contents .options.svelte-abj757{border-left-width:0px;border-top:1px solid white}.settingspanel.svelte-abj757 .contents .options .option.svelte-abj757{padding:0}}.tooltip.svelte-abj757.svelte-abj757{position:relative;z-index:2;cursor:pointer}.tooltip.svelte-abj757.svelte-abj757:before{position:absolute;bottom:120%;left:50%;margin-bottom:5px;margin-left:-30px;padding:5px 4px;width:max-content;border-radius:3px;background-color:black;color:#fff;background-color:rgba(255, 255, 255, 0.9);color:black;content:attr(data-tooltip);text-align:center;font-size:0.8rem;line-height:1.2}.tooltip.svelte-abj757.svelte-abj757:after{position:absolute;bottom:120%;left:50%;margin-left:-5px;width:0;border-top:5px solid rgba(255, 255, 255, 0.9);border-right:5px solid transparent;border-left:5px solid transparent;content:\" \";font-size:0;line-height:0}.tooltip.svelte-abj757.svelte-abj757:before,.tooltip.svelte-abj757.svelte-abj757:after{visibility:hidden;opacity:0;pointer-events:none}.tooltip.svelte-abj757.svelte-abj757:hover:before,.tooltip.svelte-abj757.svelte-abj757:hover:after{visibility:visible;opacity:1}",
	map: "{\"version\":3,\"file\":\"Settings.svelte\",\"sources\":[\"Settings.svelte\"],\"sourcesContent\":[\"<script>\\n  import Icon from \\\"fa-svelte/src/Icon.svelte\\\";\\n  import { faCog as faSettings } from \\\"@fortawesome/free-solid-svg-icons/faCog\\\";\\n  import { faTimes as faClose } from \\\"@fortawesome/free-solid-svg-icons/faTimes\\\";\\n\\n  export let showSettings;\\n\\n  import {\\n    autoplayinterval,\\n    scrollspeed,\\n    prefetch,\\n    prefetchNum,\\n    numCols,\\n    hires,\\n    lores,\\n    oldreddit,\\n    imageVideo,\\n    portraitLandscape,\\n    muted\\n  } from \\\"../_prefs\\\";\\n  autoplayinterval.useLocalStorage(3);\\n  scrollspeed.useLocalStorage(2);\\n  prefetch.useLocalStorage(true);\\n  prefetchNum.useLocalStorage(50);\\n  numCols.useLocalStorage(3);\\n  hires.useLocalStorage(false);\\n  lores.useLocalStorage(false);\\n  oldreddit.useLocalStorage(false);\\n  imageVideo.useLocalStorage(0);\\n  portraitLandscape.useLocalStorage(0);\\n  muted.useLocalStorage(true);\\n\\n  function hideSettings() {\\n    showSettings = false;\\n  }\\n\\n  let activeTab = 1;\\n\\n  let _autoplayinterval = $autoplayinterval;\\n  let _scrollspeed = $scrollspeed;\\n  let _hires = $hires;\\n  let _lores = $lores;\\n  let _oldreddit = $oldreddit;\\n  let _prefetch = $prefetch;\\n  let _prefetchNum = $prefetchNum;\\n  let _numCols = $numCols;\\n  let _muted = $muted;\\n  let _imageVideo = $imageVideo;\\n  let _portraitLandscape = $portraitLandscape;\\n\\n  let imagesVideoStates = [\\n    \\\"Both images and videos\\\",\\n    \\\"Videos only\\\",\\n    \\\"Images only\\\"\\n  ];\\n  let portraitLandscapeStates = [\\n    \\\"Both landscape and portrait\\\",\\n    \\\"Portrait only\\\",\\n    \\\"Landscape only\\\"\\n  ];\\n\\n  $: {\\n    let i = Math.round(_autoplayinterval);\\n    if (i) {\\n      autoplayinterval.set(i);\\n    }\\n\\n    let j = Math.round(_scrollspeed);\\n    if (j >= 20) {\\n      scrollspeed.set(10);\\n    } else {\\n      scrollspeed.set(j);\\n    }\\n\\n    let k = Math.round(_prefetchNum);\\n    if (k) {\\n      prefetchNum.set(k);\\n    }\\n\\n    let l = Math.round(_numCols);\\n    if (l) {\\n      numCols.set(l);\\n    }\\n  }\\n\\n  function toggleOldReddit() {\\n    _oldreddit = !_oldreddit;\\n\\n    oldreddit.set(_oldreddit);\\n  }\\n\\n  function toggleImageVideo() {\\n    _imageVideo = _imageVideo + 1;\\n\\n    if (_imageVideo == 3) {\\n      _imageVideo = 0;\\n    }\\n\\n    imageVideo.set(_imageVideo);\\n  }\\n  function togglePortraitLandscape() {\\n    _portraitLandscape = _portraitLandscape + 1;\\n\\n    if (_portraitLandscape == 3) {\\n      _portraitLandscape = 0;\\n    }\\n\\n    portraitLandscape.set(_portraitLandscape);\\n  }\\n\\n  function toggleHiRes() {\\n    _hires = !_hires;\\n\\n    hires.set(_hires);\\n  }\\n\\n  function toggleLoRes() {\\n    _lores = !_lores;\\n\\n    lores.set(_lores);\\n  }\\n\\n  function togglePrefetch() {\\n    _prefetch = !_prefetch;\\n\\n    prefetch.set(_prefetch);\\n  }\\n\\n  function toggleMuted() {\\n    _muted = !_muted;\\n\\n    muted.set(_muted);\\n  }\\n</script>\\n\\n<div class=\\\"settingspanel\\\" class:showSettings=\\\"{showSettings}\\\"><div class=\\\"head\\\"><Icon icon=\\\"{faSettings}\\\"></Icon>Settings</div><div class=\\\"close\\\" on:click=\\\"{hideSettings}\\\"><Icon icon=\\\"{faClose}\\\"></Icon></div><div class=\\\"contents\\\"><div class=\\\"nav\\\"><div class:active=\\\"{activeTab == 1}\\\" on:click=\\\"{function(){activeTab = 1}}\\\">General</div><div class:active=\\\"{activeTab == 2}\\\" on:click=\\\"{function(){activeTab = 2}}\\\">Keybindings</div></div><div class=\\\"options\\\"><div class=\\\"option\\\" class:active=\\\"{activeTab == 1}\\\"><!--p autoplay on/off--><!--p download files--><!--p nsfw on/off--><div class=\\\"item\\\"><span class=\\\"text\\\">Autoplay time (seconds)</span><span class=\\\"input\\\"><input type=\\\"number\\\" bind:value=\\\"{_autoplayinterval}\\\"></span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Scroll speed (0-20)</span><span class=\\\"input\\\"><input type=\\\"number\\\" bind:value=\\\"{_scrollspeed}\\\"></span></div><!--.item--><!--  span Favorite--><!--    span--><!--      span.button Mark all--><!--      span.button Unmark all--><!--      span.button Unmark all (all subreddits)--><div class=\\\"item\\\"><span class=\\\"tooltip\\\" data-tooltip=\\\"Preload media in the background\\\">Prefetch media</span><span><span class=\\\"button\\\" on:click=\\\"{togglePrefetch}\\\">{_prefetch ? \\\"Prefetch is on\\\" : \\\"Prefetch is off\\\"}</span></span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Prefetch items</span><span class=\\\"input\\\"><input type=\\\"number\\\" bind:value=\\\"{_prefetchNum}\\\"></span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Number of columns in grid mode</span><span class=\\\"input\\\"><input type=\\\"number\\\" bind:value=\\\"{_numCols}\\\"></span></div><div class=\\\"item\\\"><span class=\\\"tooltip\\\" data-tooltip=\\\"Sound on/off\\\">Sound</span><span><span class=\\\"button\\\" on:click=\\\"{toggleMuted}\\\">{_muted ? \\\"Sound is off\\\" : \\\"Sound is on\\\"}</span></span></div><div class=\\\"item\\\"><span class=\\\"text tooltip\\\" data-tooltip=\\\"Choose what type of image to display\\\">Display image resolution</span><span><span class=\\\"button\\\" on:click=\\\"{toggleHiRes}\\\">{_hires ? \\\"Original (slow)\\\" : \\\"Optimized (fast)\\\"}</span></span></div><div class=\\\"item\\\"><span class=\\\"text tooltip\\\" data-tooltip=\\\"Choose what type of video to display\\\">Display video resolution</span><span><span class=\\\"button\\\" on:click=\\\"{toggleLoRes}\\\">{_lores ? \\\"Prefer lo-res (fast)\\\": \\\"Original (slow)\\\"}</span></span></div><div class=\\\"item\\\"><span class=\\\"text tooltip\\\" data-tooltip=\\\"Choose whether to go to reddit.com or old.reddit.com\\\">reddit.com link handling</span><span><span class=\\\"button\\\" on:click=\\\"{toggleOldReddit}\\\">{_oldreddit ? \\\"old.reddit.com\\\" : \\\"reddit.com (New)\\\"}</span></span></div><div class=\\\"item\\\"><span class=\\\"text tooltip\\\" data-tooltip=\\\"Choose whether to show videos only, images only or both\\\">Display images/videos/both</span><span><span class=\\\"button\\\" on:click=\\\"{toggleImageVideo}\\\">{imagesVideoStates[_imageVideo]}</span></span></div><div class=\\\"item\\\"><span class=\\\"text tooltip\\\" data-tooltip=\\\"Choose whether to show portrait only, landscape only or both\\\">Display portrait/landscape/both</span><span><span class=\\\"button\\\" on:click=\\\"{togglePortraitLandscape}\\\">{portraitLandscapeStates[_portraitLandscape]}</span></span></div><!--p remove duplicates--><!--p aggressive caching (thumb vs preview)--></div><div class=\\\"option\\\" class:active=\\\"{activeTab == 2}\\\"><div class=\\\"item\\\"><span class=\\\"text\\\">Play / Pause</span><span class=\\\"key\\\">q</span><span class=\\\"key\\\">p</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Next item</span><span class=\\\"key\\\">Space</span><span class=\\\"key\\\">Right</span><span class=\\\"key\\\">d</span><span class=\\\"key\\\">j</span><span class=\\\"key\\\">Page-down</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Previous item</span><span class=\\\"key\\\">Left</span><span class=\\\"key\\\">a</span><span class=\\\"key\\\">k</span><span class=\\\"key\\\">Page-up</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Next item in the album</span><span class=\\\"key\\\">Up</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Previous item in the album</span><span class=\\\"key\\\">Down</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Hide UI / Controls</span><span class=\\\"key\\\">h</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Toggle favorite</span><span class=\\\"key\\\">x</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Toggle Sound</span><span class=\\\"key\\\">s</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Remove all favorites</span><span class=\\\"key\\\">Shift + x</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Remove all favorites (across all subreddits)</span><span class=\\\"key\\\">Ctrl + Shift + x</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Filter</span><span class=\\\"key\\\">/</span><span class=\\\"key\\\">f</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Open reddit (old.reddit.com)</span><span class=\\\"key\\\">o</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Open reddit</span><span class=\\\"key\\\">r</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Open high-res</span><span class=\\\"key\\\">i</span></div><div class=\\\"item\\\"><span class=\\\"text\\\">Add to multireddit</span><span class=\\\"key\\\">m</span></div></div></div></div></div>\\n\\n<style lang=\\\"sass\\\">.settingspanel {\\n  position: fixed;\\n  background-color: black;\\n  left: 25%;\\n  top: 25%;\\n  width: 50%;\\n  height: 50%;\\n  border-radius: 5px;\\n  border: 1px solid white;\\n  padding: 1rem;\\n  display: none;\\n  grid-template-rows: [head-start] 2.5rem [head-end contents-start] 2fr [contents-end];\\n}\\n.settingspanel.showSettings {\\n  display: grid;\\n  grid-gap: 1rem;\\n}\\n.settingspanel .contents {\\n  grid-row: contents;\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  overflow: hidden;\\n  user-select: none;\\n}\\n.settingspanel .contents .nav {\\n  font-size: 1.1rem;\\n  display: grid;\\n  grid-auto-rows: max-content;\\n  grid-gap: 5px;\\n  align-items: center;\\n  justify-items: center;\\n  grid-auto-flow: row;\\n}\\n.settingspanel .contents .nav .active {\\n  background-color: rgba(255, 255, 255, 0.2);\\n  border-bottom: 3px solid white;\\n}\\n.settingspanel .contents .nav div {\\n  padding: 0.5rem 1rem;\\n  border-bottom: 3px solid rgba(0, 0, 0, 0);\\n  width: 100%;\\n  height: 100%;\\n  cursor: pointer;\\n}\\n@media not all and (pointer: coarse) {\\n  .settingspanel .contents .nav div:hover {\\n    background-color: rgba(255, 255, 255, 0.2);\\n    border-bottom: 3px solid white;\\n  }\\n}\\n.settingspanel .contents .options {\\n  background-color: rgba(0, 0, 0, 0);\\n  border-left: 1px solid white;\\n  overflow: auto;\\n}\\n.settingspanel .contents .options .option {\\n  display: none;\\n  padding: 0rem 1rem;\\n}\\n.settingspanel .contents .options .option .item {\\n  padding: 0.5rem;\\n  margin: 0.5rem 0;\\n}\\n.settingspanel .contents .options .option .item .text {\\n  margin-right: 10px;\\n}\\n.settingspanel .contents .options .option .item .key {\\n  color: #f9ab00;\\n  margin: 0 4px;\\n  border: 1px solid #f9ab00;\\n  border-radius: 3px;\\n  padding: 4px 5px;\\n}\\n.settingspanel .contents .options .option .item .input input {\\n  border: 1px solid white;\\n  background-color: rgba(0, 0, 0, 0);\\n  color: white;\\n  padding: 5px;\\n  width: 100px;\\n}\\n.settingspanel .contents .options .option .item .button {\\n  border: 1px solid white;\\n  margin: 0 5px;\\n  padding: 5px;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n@media not all and (pointer: coarse) {\\n  .settingspanel .contents .options .option .item .button:hover {\\n    background-color: white;\\n    color: black;\\n  }\\n}\\n.settingspanel .contents .options .active {\\n  display: block;\\n}\\n.settingspanel .close {\\n  position: absolute;\\n  top: 1rem;\\n  color: rgba(255, 255, 255, 0.6);\\n  cursor: pointer;\\n  right: 1rem;\\n}\\n@media not all and (pointer: coarse) {\\n  .settingspanel .close:hover {\\n    color: white;\\n  }\\n}\\n.settingspanel .head {\\n  font-size: 1.5rem;\\n  align-self: center;\\n}\\n.settingspanel .head :global(svg) {\\n  position: relative;\\n  top: 3px;\\n  margin-right: 10px;\\n}\\n@media (max-width: 1600px) {\\n  .settingspanel {\\n    width: 80%;\\n    left: 10%;\\n  }\\n}\\n@media (max-width: 1000px) {\\n  .settingspanel {\\n    width: 90%;\\n    left: 5%;\\n  }\\n}\\n@media (max-width: 800px) {\\n  .settingspanel .contents {\\n    grid-template-rows: 3rem auto;\\n    grid-template-columns: unset;\\n  }\\n  .settingspanel .contents .nav {\\n    grid-auto-flow: column;\\n    grid-auto-rows: unset;\\n    grid-auto-columns: max-content;\\n  }\\n  .settingspanel .contents .options {\\n    border-left-width: 0px;\\n    border-top: 1px solid white;\\n  }\\n  .settingspanel .contents .options .option {\\n    padding: 0;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  z-index: 2;\\n  cursor: pointer;\\n}\\n\\n.ttbefore, .tooltip.bottom:before, .tooltip:before {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-bottom: 5px;\\n  margin-left: -30px;\\n  padding: 5px 4px;\\n  width: max-content;\\n  border-radius: 3px;\\n  background-color: black;\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  color: black;\\n  content: attr(data-tooltip);\\n  text-align: center;\\n  font-size: 0.8rem;\\n  line-height: 1.2;\\n}\\n\\n.ttafter, .tooltip.bottom:after, .tooltip:after {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -5px;\\n  width: 0;\\n  border-top: 5px solid rgba(255, 255, 255, 0.9);\\n  border-right: 5px solid transparent;\\n  border-left: 5px solid transparent;\\n  content: \\\" \\\";\\n  font-size: 0;\\n  line-height: 0;\\n}\\n\\n.tooltip:before, .tooltip:after {\\n  visibility: hidden;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.tooltip.bottom:before {\\n  bottom: -170%;\\n}\\n.tooltip.bottom:after {\\n  bottom: -40%;\\n  border-bottom: 5px solid rgba(255, 255, 255, 0.9);\\n  border-top: 5px solid transparent;\\n}\\n.tooltip:hover:before, .tooltip:hover:after {\\n  visibility: visible;\\n  opacity: 1;\\n}</style>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $portraitLandscape, $$unsubscribe_portraitLandscape;
	let $imageVideo, $$unsubscribe_imageVideo;
	let $muted, $$unsubscribe_muted;
	let $numCols, $$unsubscribe_numCols;
	let $prefetchNum, $$unsubscribe_prefetchNum;
	let $prefetch, $$unsubscribe_prefetch;
	let $oldreddit, $$unsubscribe_oldreddit;
	let $lores, $$unsubscribe_lores;
	let $hires, $$unsubscribe_hires;
	let $scrollspeed, $$unsubscribe_scrollspeed;
	let $autoplayinterval, $$unsubscribe_autoplayinterval;
	$$unsubscribe_portraitLandscape = subscribe(portraitLandscape, value => $portraitLandscape = value);
	$$unsubscribe_imageVideo = subscribe(imageVideo, value => $imageVideo = value);
	$$unsubscribe_muted = subscribe(muted, value => $muted = value);
	$$unsubscribe_numCols = subscribe(numCols, value => $numCols = value);
	$$unsubscribe_prefetchNum = subscribe(prefetchNum, value => $prefetchNum = value);
	$$unsubscribe_prefetch = subscribe(prefetch, value => $prefetch = value);
	$$unsubscribe_oldreddit = subscribe(oldreddit, value => $oldreddit = value);
	$$unsubscribe_lores = subscribe(lores, value => $lores = value);
	$$unsubscribe_hires = subscribe(hires, value => $hires = value);
	$$unsubscribe_scrollspeed = subscribe(scrollspeed, value => $scrollspeed = value);
	$$unsubscribe_autoplayinterval = subscribe(autoplayinterval, value => $autoplayinterval = value);
	let { showSettings } = $$props;
	autoplayinterval.useLocalStorage(3);
	scrollspeed.useLocalStorage(2);
	prefetch.useLocalStorage(true);
	prefetchNum.useLocalStorage(50);
	numCols.useLocalStorage(3);
	hires.useLocalStorage(false);
	lores.useLocalStorage(false);
	oldreddit.useLocalStorage(false);
	imageVideo.useLocalStorage(0);
	portraitLandscape.useLocalStorage(0);
	muted.useLocalStorage(true);
	let _autoplayinterval = $autoplayinterval;
	let _scrollspeed = $scrollspeed;
	let _hires = $hires;
	let _lores = $lores;
	let _oldreddit = $oldreddit;
	let _prefetch = $prefetch;
	let _prefetchNum = $prefetchNum;
	let _numCols = $numCols;
	let _muted = $muted;
	let _imageVideo = $imageVideo;
	let _portraitLandscape = $portraitLandscape;
	let imagesVideoStates = ["Both images and videos", "Videos only", "Images only"];
	let portraitLandscapeStates = ["Both landscape and portrait", "Portrait only", "Landscape only"];

	if ($$props.showSettings === void 0 && $$bindings.showSettings && showSettings !== void 0) $$bindings.showSettings(showSettings);
	$$result.css.add(css$4);

	{
		{
			let i = Math.round(_autoplayinterval);

			if (i) {
				autoplayinterval.set(i);
			}

			let j = Math.round(_scrollspeed);

			if (j >= 20) {
				scrollspeed.set(10);
			} else {
				scrollspeed.set(j);
			}

			let k = Math.round(_prefetchNum);

			if (k) {
				prefetchNum.set(k);
			}

			let l = Math.round(_numCols);

			if (l) {
				numCols.set(l);
			}
		}
	}

	$$unsubscribe_portraitLandscape();
	$$unsubscribe_imageVideo();
	$$unsubscribe_muted();
	$$unsubscribe_numCols();
	$$unsubscribe_prefetchNum();
	$$unsubscribe_prefetch();
	$$unsubscribe_oldreddit();
	$$unsubscribe_lores();
	$$unsubscribe_hires();
	$$unsubscribe_scrollspeed();
	$$unsubscribe_autoplayinterval();
	return `<div class="${["settingspanel svelte-abj757", showSettings ? "showSettings" : ""].join(' ').trim()}"><div class="${"head svelte-abj757"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faCog$1.faCog }, {}, {})}Settings</div><div class="${"close svelte-abj757"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faTimes$1.faTimes }, {}, {})}</div><div class="${"contents svelte-abj757"}"><div class="${"nav svelte-abj757"}"><div class="${["svelte-abj757", "active" ].join(' ').trim()}">General</div><div class="${["svelte-abj757", ""].join(' ').trim()}">Keybindings</div></div><div class="${"options svelte-abj757"}"><div class="${["option svelte-abj757", "active" ].join(' ').trim()}"><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Autoplay time (seconds)</span><span class="${"input"}"><input type="${"number"}" class="${"svelte-abj757"}"${add_attribute("value", _autoplayinterval, 0)}></span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Scroll speed (0-20)</span><span class="${"input"}"><input type="${"number"}" class="${"svelte-abj757"}"${add_attribute("value", _scrollspeed, 0)}></span></div><div class="${"item svelte-abj757"}"><span class="${"tooltip svelte-abj757"}" data-tooltip="${"Preload media in the background"}">Prefetch media</span><span><span class="${"button svelte-abj757"}">${escape(_prefetch ? "Prefetch is on" : "Prefetch is off")}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Prefetch items</span><span class="${"input"}"><input type="${"number"}" class="${"svelte-abj757"}"${add_attribute("value", _prefetchNum, 0)}></span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Number of columns in grid mode</span><span class="${"input"}"><input type="${"number"}" class="${"svelte-abj757"}"${add_attribute("value", _numCols, 0)}></span></div><div class="${"item svelte-abj757"}"><span class="${"tooltip svelte-abj757"}" data-tooltip="${"Sound on/off"}">Sound</span><span><span class="${"button svelte-abj757"}">${escape(_muted ? "Sound is off" : "Sound is on")}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text tooltip svelte-abj757"}" data-tooltip="${"Choose what type of image to display"}">Display image resolution</span><span><span class="${"button svelte-abj757"}">${escape(_hires ? "Original (slow)" : "Optimized (fast)")}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text tooltip svelte-abj757"}" data-tooltip="${"Choose what type of video to display"}">Display video resolution</span><span><span class="${"button svelte-abj757"}">${escape(_lores ? "Prefer lo-res (fast)" : "Original (slow)")}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text tooltip svelte-abj757"}" data-tooltip="${"Choose whether to go to reddit.com or old.reddit.com"}">reddit.com link handling</span><span><span class="${"button svelte-abj757"}">${escape(_oldreddit ? "old.reddit.com" : "reddit.com (New)")}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text tooltip svelte-abj757"}" data-tooltip="${"Choose whether to show videos only, images only or both"}">Display images/videos/both</span><span><span class="${"button svelte-abj757"}">${escape(imagesVideoStates[_imageVideo])}</span></span></div><div class="${"item svelte-abj757"}"><span class="${"text tooltip svelte-abj757"}" data-tooltip="${"Choose whether to show portrait only, landscape only or both"}">Display portrait/landscape/both</span><span><span class="${"button svelte-abj757"}">${escape(portraitLandscapeStates[_portraitLandscape])}</span></span></div></div><div class="${["option svelte-abj757", ""].join(' ').trim()}"><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Play / Pause</span><span class="${"key svelte-abj757"}">q</span><span class="${"key svelte-abj757"}">p</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Next item</span><span class="${"key svelte-abj757"}">Space</span><span class="${"key svelte-abj757"}">Right</span><span class="${"key svelte-abj757"}">d</span><span class="${"key svelte-abj757"}">j</span><span class="${"key svelte-abj757"}">Page-down</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Previous item</span><span class="${"key svelte-abj757"}">Left</span><span class="${"key svelte-abj757"}">a</span><span class="${"key svelte-abj757"}">k</span><span class="${"key svelte-abj757"}">Page-up</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Next item in the album</span><span class="${"key svelte-abj757"}">Up</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Previous item in the album</span><span class="${"key svelte-abj757"}">Down</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Hide UI / Controls</span><span class="${"key svelte-abj757"}">h</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Toggle favorite</span><span class="${"key svelte-abj757"}">x</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Toggle Sound</span><span class="${"key svelte-abj757"}">s</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Remove all favorites</span><span class="${"key svelte-abj757"}">Shift + x</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Remove all favorites (across all subreddits)</span><span class="${"key svelte-abj757"}">Ctrl + Shift + x</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Filter</span><span class="${"key svelte-abj757"}">/</span><span class="${"key svelte-abj757"}">f</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Open reddit (old.reddit.com)</span><span class="${"key svelte-abj757"}">o</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Open reddit</span><span class="${"key svelte-abj757"}">r</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Open high-res</span><span class="${"key svelte-abj757"}">i</span></div><div class="${"item svelte-abj757"}"><span class="${"text svelte-abj757"}">Add to multireddit</span><span class="${"key svelte-abj757"}">m</span></div></div></div></div></div>`;
});

const CONTEXT_KEY = {};

/* src/routes/_layout.svelte generated by Svelte v3.46.2 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${slots.default ? slots.default({}) : ``}`;
});

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Layout
});

/* src/node_modules/@sapper/internal/error.svelte generated by Svelte v3.46.2 */

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { error } = $$props;
	let { status } = $$props;
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);

	return `<h1>${escape(status)}</h1>

<p>${escape(error.message)}</p>

${``}`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.46.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => {
			return `${error
			? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
			: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`;
		}
	})}`;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function page_store(value) {
    const store = writable$1(value);
    let ready = true;
    function notify() {
        ready = true;
        store.update(val => val);
    }
    function set(new_value) {
        ready = false;
        store.set(new_value);
    }
    function subscribe(run) {
        let old_value;
        return store.subscribe((new_value) => {
            if (old_value === undefined || (ready && new_value !== old_value)) {
                run(old_value = new_value);
            }
        });
    }
    return { notify, set, subscribe };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
const stores = {
    page: page_store({}),
    preloading: writable$1(null),
    session: writable$1(initial_data && initial_data.session)
};
stores.session.subscribe((value) => __awaiter$1(void 0, void 0, void 0, function* () {
    return;
}));

const stores$1 = () => getContext(CONTEXT_KEY);

/* Formatted */
var Orientation;
(function (Orientation) {
    Orientation["Normal"] = "normal";
    Orientation["Portrait"] = "portrait";
    Orientation["Landscape"] = "landscape";
})(Orientation || (Orientation = {}));

function queryp(query) {
    return Object.entries(query).map(([key, val]) => `${key}=${val}`).join("&");
}
async function format_tumblr_post(post) {
    let imgs = { default: '', hires: '', album: [] };
    let vids = {};
    let dims = { width: 0, height: 0 };
    let is_video = false;
    let is_image = false;
    let url = post.post_url;
    if (post.type === "photo" && post.photos && post.photos.length > 0) {
        is_image = true;
        const originalPhoto = post.photos[0].original_size;
        imgs = {
            default: originalPhoto.url,
            hires: originalPhoto.url,
            album: post.photos.map(photo => ({
                default: photo.original_size.url,
                hires: photo.original_size.url,
                is_image: true,
                is_video: false,
                preview: {
                    vid: {},
                    img: {
                        hires: photo.original_size.url,
                        default: photo.original_size.url,
                        album: [],
                    },
                },
            })),
        };
        dims = { width: originalPhoto.width, height: originalPhoto.height };
        url = originalPhoto.url;
    }
    else if (post.type === "video" && post.video_url) {
        is_video = true;
        vids = {
            mp4: post.video_url,
            lores: post.video_url, // Assuming lores can be the same for now
        };
        // Try to get dimensions from player if available
        if (post.player && post.player.length > 0) {
            // This is a simplification, as embed code might not directly give dims
            // For now, we'll just use a placeholder or try to parse from embed_code if possible
            // For a real implementation, you'd need to parse the embed_code or fetch video metadata
            dims = { width: post.player[0].width, height: post.player[0].width * (9 / 16) }; // Assuming 16:9 aspect ratio
        }
        url = post.video_url;
    }
    let orientation = Orientation.Normal;
    if (dims.width && dims.height) {
        if ((dims.width / dims.height) <= 0.7) {
            orientation = Orientation.Portrait;
        }
        else if ((dims.width / dims.height) >= 1.7) {
            orientation = Orientation.Landscape;
        }
    }
    return {
        id: String(post.id),
        author: post.blog_name,
        authorp: `u/${post.blog_name}`,
        title: post.title || post.summary || "(no title)",
        thumbnail: is_image ? imgs.default : undefined,
        subreddit: post.blog_name,
        subredditp: `t/${post.blog_name}`,
        permalink: post.post_url,
        over18: false,
        is_video: is_video,
        is_image: is_image,
        is_album: is_image && imgs.album && imgs.album.length > 1,
        favorite: false,
        url: url,
        dims: dims,
        orientation: orientation,
        preview: { vid: vids, img: imgs },
    };
}
async function get_tumblr_posts(url) {
    try {
        const res = await fetch(url);
        console.log("[get_tumblr_posts] Raw Response Object:", res);
        const data = await res.json();
        console.log("[get_tumblr_posts] Raw API Data:", data);
        console.log("[get_tumblr_posts] Raw API Data.response:", data.response);
        if (data.meta.status !== 200) {
            console.error("[get_tumblr_posts]: API error", data.meta.msg);
            return {
                posts: [],
                after: null,
                res: { ok: false, res: data.meta.msg },
            };
        }
        const rawPosts = data.response.posts;
        console.log("[get_tumblr_posts] Raw Posts Array:", rawPosts);
        rawPosts.forEach(post => console.log("[get_tumblr_posts] Post Type:", post.type));
        const formattedPosts = await Promise.all(rawPosts.map(post => format_tumblr_post(post)));
        // Filter for only image and video posts for now, similar to redditpx
        const filteredPosts = formattedPosts.filter((post) => post.is_image || post.is_video);
        // Tumblr API uses 'offset' for pagination, not 'after'.
        // We'll return the next offset based on the number of posts returned.
        // This assumes the API returns a 'limit' number of posts per request.
        const nextOffset = data.response.posts.length > 0 ? (parseInt(url.match(/offset=(\d+)/)?.[1] || "0") + data.response.posts.length) : null;
        return {
            posts: filteredPosts,
            after: nextOffset,
            res: { ok: true, res },
        };
    }
    catch (error) {
        console.error("[get_tumblr_posts]: error", error);
        return {
            posts: [],
            after: null,
            res: { ok: false, res: error },
        };
    }
}

function noop$1() { }

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    const {subscribe, pipe} = writable(value, start);
    return { subscribe, pipe };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop$1) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        value = new_value;
        if (stop) { // store is ready
            const run_queue = !subscriber_queue.length;
            for (let i = 0; i < subscribers.length; i += 1) {
                const s = subscribers[i];
                s[1]();
                subscriber_queue.push(s, value);
            }
            if (run_queue) {
                for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                }
                subscriber_queue.length = 0;
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$1) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop$1;
        }
        if(value !== undefined) {
            run(value);
        }
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    function pipe(...operators) {
        return operators.reduce((src, operator) => operator(src, value), this);
    }
    return { set, update, subscribe, pipe };
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce$1;

/**
 *  debounce
 *
 *  Based on lodash options:
 *
 *  @param {number} [wait=0] The number of milliseconds to delay.
 *  @param {Object} [options={}] The options object.
 *  @param {boolean} [options.leading=false]
 *   Specify invoking on the leading edge of the timeout.
 *  @param {number} [options.maxWait]
 *   The maximum time `func` is allowed to be delayed before it's invoked.
 *  @param {boolean} [options.trailing=true]
 *   Specify invoking on the trailing edge of the timeout.
 *  @returns {{subscribe, pipe, cancel, flush}}
*/

function debounce(wait, options) {

    return src => {
        let debounced = debounce_1((v,set) => set(v), wait, options);
        let {cancel, flush} = debounced;
        let {subscribe, pipe}= readable(undefined, set => {
            let unsub = src.subscribe(v => debounced(v,set));
            return () => {
                unsub();
                cancel();
            }
        });
        return {subscribe, pipe, cancel, flush}
    }

}

/**
 *  throttle
 *
 *  Uses debounce with maxWait set (as does lodash)
 *
 *  @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 *  @param {Object} [options={}] The options object.
 *  @param {boolean} [options.leading=true]
 *   Specify invoking on the leading edge of the timeout.
 *  @param {boolean} [options.trailing=true]
 *   Specify invoking on the trailing edge of the timeout.
 *  @returns {{subscribe, pipe, cancel, flush}}
*/
function throttle(wait, options) {
    return debounce(wait, {
        ...options,
        'maxWait': wait,
    });
}

/**
 * startWith
 *
 * @param value
 * @returns {function({subscribe, pipe}): {subscribe, pipe}} Readable operator
 */
function startWith(value) {

    return ({subscribe, pipe}) => {

        return {
            subscribe(run, invalidate) {
                run(value);
                return subscribe(run, invalidate);
            },
            pipe(...operators) {
                return operators.reduce((src, operator) => operator(src), this);
            }
        };

    }

}

/* src/components/FullscreenLayout.svelte generated by Svelte v3.46.2 */

const css$3 = {
	code: ".hide-cursor.svelte-1a8m49b.svelte-1a8m49b{cursor:none}.hide.svelte-1a8m49b.svelte-1a8m49b{display:none !important}.wrapper.svelte-1a8m49b.svelte-1a8m49b{height:100vh;display:grid;justify-items:center;align-items:center}.wrapper.svelte-1a8m49b .hero.svelte-1a8m49b{height:100vh;width:100vw;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.wrapper.svelte-1a8m49b .hero .title.svelte-1a8m49b{z-index:10;position:absolute;left:1rem;top:0;background-color:rgba(0, 0, 0, 0.4);color:#fafafa;font-size:1.5rem;max-width:77%;padding:1rem;border-radius:3px}.wrapper.svelte-1a8m49b .hero .settings.svelte-1a8m49b{z-index:10;position:absolute;top:0;right:0;color:#fafafa;font-size:1rem;padding:1.5rem 2rem}.wrapper.svelte-1a8m49b .hero .main-media-container.svelte-1a8m49b{flex-grow:1;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.wrapper.svelte-1a8m49b .hero .main-media-container img.svelte-1a8m49b,.wrapper.svelte-1a8m49b .hero .main-media-container video.svelte-1a8m49b{max-width:100%;max-height:100%;object-fit:contain}.wrapper.svelte-1a8m49b .hero .goto.svelte-1a8m49b{user-select:none;z-index:5;position:absolute;background-color:rgba(0, 0, 0, 0.6);bottom:0;display:grid;grid-row-gap:5px;padding:1rem 11rem;border-radius:3px;color:#fafafa;width:100%;grid-template-columns:repeat(auto-fill, minmax(32px, 1fr))}.wrapper.svelte-1a8m49b .hero .goto.tinygoto.svelte-1a8m49b{grid-template-rows:auto 1fr;grid-template-columns:1fr}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .btnwrapper.svelte-1a8m49b{grid-template-columns:repeat(auto-fill, minmax(32px, 1fr));display:grid}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper.svelte-1a8m49b{grid-template-columns:repeat(auto-fit, minmax(1rem, auto));grid-auto-columns:max-content;display:grid;grid-gap:0.2rem}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.svelte-1a8m49b{border-bottom:3px solid rgba(255, 255, 255, 0.3);height:1rem;cursor:pointer}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.svelte-1a8m49b:hover{border-bottom:3px solid white !important}}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.currnum.svelte-1a8m49b{border-bottom:3px solid white !important}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.currnum.album.svelte-1a8m49b{border-bottom:3px dotted white !important}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.favorite.svelte-1a8m49b{border-bottom:3px solid #fbbc04}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .nums.over18.svelte-1a8m49b{border-bottom:3px solid #ea4335}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper p.svelte-1a8m49b{display:none}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .numswrapper .reload.svelte-1a8m49b{grid-column:span 2}.wrapper.svelte-1a8m49b .hero .goto .btnwrapper.svelte-1a8m49b,.wrapper.svelte-1a8m49b .hero .goto .numswrapper.svelte-1a8m49b{display:contents}.wrapper.svelte-1a8m49b .hero .goto .btnwrapper .reload.svelte-1a8m49b{bottom:-1px}.wrapper.svelte-1a8m49b .hero .goto .numswrapper .displayinfo.svelte-1a8m49b{grid-column:span 1;font-size:0.8rem;margin-top:2px}.wrapper.svelte-1a8m49b .hero .goto .numswrapper .displayinfo p.svelte-1a8m49b{margin:0;text-align:center}.wrapper.svelte-1a8m49b .hero .goto .btn.svelte-1a8m49b{text-align:center;padding-top:2px;color:rgba(255, 255, 255, 0.3)}.wrapper.svelte-1a8m49b .hero .goto .btn.reload.svelte-1a8m49b{cursor:pointer}.wrapper.svelte-1a8m49b .hero .goto .btn.reload.loaderror.svelte-1a8m49b{color:#ea4335}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto .btn.reload.svelte-1a8m49b:hover{color:white}}.wrapper.svelte-1a8m49b .hero .goto .btn.deepsearch.svelte-1a8m49b{grid-column:span 4;bottom:2px;cursor:pointer;justify-self:center}.wrapper.svelte-1a8m49b .hero .goto .btn.deepsearch:hover p.svelte-1a8m49b{color:white;border:1px solid white}.wrapper.svelte-1a8m49b .hero .goto .btn.deepsearch p.svelte-1a8m49b{margin:0;font-size:0.9rem;color:#b3b3b3;border:1px solid #b3b3b3;border-radius:3px;padding:0 1rem}.wrapper.svelte-1a8m49b .hero .goto .btn.over18wrapper.svelte-1a8m49b{cursor:pointer;grid-column:span 2;justify-self:center}.wrapper.svelte-1a8m49b .hero .goto .btn.over18wrapper.over18 p.svelte-1a8m49b{border:1px solid rgba(255, 255, 255, 0.3);color:rgba(255, 255, 255, 0.3)}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto .btn.over18wrapper.over18 p.svelte-1a8m49b:hover{border:1px solid rgba(255, 255, 255, 0.6);color:rgba(255, 255, 255, 0.6)}}.wrapper.svelte-1a8m49b .hero .goto .btn.over18wrapper p.svelte-1a8m49b{font-size:0.9rem;border:1px solid #ea4335;border-radius:3px;color:#ea4335;margin:0;width:58px;font-family:\"Roboto Condensed\", sans-serif;position:relative;top:-1px}.wrapper.svelte-1a8m49b .hero .goto .btn.imagevideo.svelte-1a8m49b{cursor:pointer;font-size:1.4rem;bottom:2px;color:white}.wrapper.svelte-1a8m49b .hero .goto .btn.muted.svelte-1a8m49b{cursor:pointer;font-size:1.4rem;bottom:2px;color:white}.wrapper.svelte-1a8m49b .hero .goto .btn.portraitlandscape.svelte-1a8m49b{cursor:pointer;font-size:1.4rem;bottom:2px;color:white}.wrapper.svelte-1a8m49b .hero .goto .btn.portraitlandscape.svelte-1a8m49b .landscape{transform:rotate(270deg)}.wrapper.svelte-1a8m49b .hero .goto .btn.dice.svelte-1a8m49b{cursor:pointer;font-size:1.4rem;bottom:2px;color:white}.wrapper.svelte-1a8m49b .hero .goto .btn.download.svelte-1a8m49b{cursor:default;font-size:1.4rem;bottom:2px}.wrapper.svelte-1a8m49b .hero .goto .btn.download.dlready.svelte-1a8m49b{color:rgba(251, 188, 4, 0.9);cursor:pointer}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto .btn.download.dlready.svelte-1a8m49b:hover{color:#f9ab00}}.wrapper.svelte-1a8m49b .hero .goto .btn.playpause.svelte-1a8m49b{cursor:pointer;top:1px}.wrapper.svelte-1a8m49b .hero .goto .btn.playpause.play.svelte-1a8m49b{color:white}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto .btn.playpause.svelte-1a8m49b:hover{color:white}}.wrapper.svelte-1a8m49b .hero .goto .btn.filter.svelte-1a8m49b{cursor:pointer;top:1px}@media not all and (pointer: coarse){.wrapper.svelte-1a8m49b .hero .goto .btn.filter.svelte-1a8m49b:hover{color:white}}.wrapper.svelte-1a8m49b .hero .goto .btn.filter.filter.filterExpanded.svelte-1a8m49b{grid-column:span 3;top:-2px}.wrapper.svelte-1a8m49b .hero .goto .btn.filter.filter.filterExpanded input.svelte-1a8m49b{width:85%;margin-left:0px;padding-left:5px;padding-right:5px;border:1px solid rgba(255, 255, 255, 0.6);background-color:rgba(0, 0, 0, 0);color:white}.wrapper.svelte-1a8m49b .hero .goto span.svelte-1a8m49b{position:relative}.wrapper.svelte-1a8m49b .hero .goto span.favorite p.small.svelte-1a8m49b{border-bottom:3px solid #e37400 !important;color:#fbbc04}.wrapper.svelte-1a8m49b .hero .goto span.favorite img.small.svelte-1a8m49b{border-color:#e37400 !important}.wrapper.svelte-1a8m49b .hero .goto span.over18 p.small.svelte-1a8m49b{color:#ea4335;border-bottom:3px solid #ea4335}.wrapper.svelte-1a8m49b .hero .goto span.over18 img.small.svelte-1a8m49b{border-color:#ea4335}.wrapper.svelte-1a8m49b .hero .goto span p.small.svelte-1a8m49b{margin:0 2px;text-align:center;cursor:pointer;border-bottom:3px solid rgba(0, 0, 0, 0)}.wrapper.svelte-1a8m49b .hero .goto span p.small.curr.svelte-1a8m49b{background-color:rgba(255, 255, 255, 0.2);border-bottom:3px solid white !important}.wrapper.svelte-1a8m49b .hero .goto span p.small.curr.album.svelte-1a8m49b{border-bottom:3px dashed white !important}.wrapper.svelte-1a8m49b .hero .goto span img.small.svelte-1a8m49b{z-index:10;width:0px;opacity:0;position:absolute;bottom:35px;border:2px solid white;background-color:#4d4d4d;min-width:100px;pointer-events:none;object-fit:cover}.wrapper.svelte-1a8m49b .hero .goto span:hover p.small.svelte-1a8m49b{background-color:rgba(255, 255, 255, 0.1);border-bottom:3px solid white !important}.wrapper.svelte-1a8m49b .hero .goto span:hover img.svelte-1a8m49b{width:auto;height:100px;opacity:1}.wrapper.svelte-1a8m49b .hero .video.svelte-1a8m49b{height:100vh;width:100vw;object-fit:contain}@media(max-width: 1000px){.wrapper.svelte-1a8m49b .hero .goto.svelte-1a8m49b{padding:1rem 11rem 1rem 1rem}}@media(max-width: 800px){.wrapper.svelte-1a8m49b .hero .goto.svelte-1a8m49b{padding:1rem}.wrapper.svelte-1a8m49b .hero .goto.tinygoto .nums.svelte-1a8m49b{height:0.1rem !important}.wrapper.svelte-1a8m49b .hero .goto img.small.svelte-1a8m49b{display:none}}.tooltip.svelte-1a8m49b.svelte-1a8m49b{position:relative;z-index:2;cursor:pointer}.tooltip.bottom.svelte-1a8m49b.svelte-1a8m49b:before,.tooltip.svelte-1a8m49b.svelte-1a8m49b:before{position:absolute;bottom:120%;left:50%;margin-bottom:5px;margin-left:-30px;padding:5px 4px;width:max-content;border-radius:3px;background-color:black;color:#fff;background-color:rgba(255, 255, 255, 0.9);color:black;content:attr(data-tooltip);text-align:center;font-size:0.8rem;line-height:1.2}.tooltip.bottom.svelte-1a8m49b.svelte-1a8m49b:after,.tooltip.svelte-1a8m49b.svelte-1a8m49b:after{position:absolute;bottom:120%;left:50%;margin-left:-5px;width:0;border-top:5px solid rgba(255, 255, 255, 0.9);border-right:5px solid transparent;border-left:5px solid transparent;content:\" \";font-size:0;line-height:0}.tooltip.svelte-1a8m49b.svelte-1a8m49b:before,.tooltip.svelte-1a8m49b.svelte-1a8m49b:after{visibility:hidden;opacity:0;pointer-events:none}.tooltip.bottom.svelte-1a8m49b.svelte-1a8m49b:before{bottom:-170%}.tooltip.bottom.svelte-1a8m49b.svelte-1a8m49b:after{bottom:-40%;border-bottom:5px solid rgba(255, 255, 255, 0.9);border-top:5px solid transparent}.tooltip.svelte-1a8m49b.svelte-1a8m49b:hover:before,.tooltip.svelte-1a8m49b.svelte-1a8m49b:hover:after{visibility:visible;opacity:1}",
	map: "{\"version\":3,\"file\":\"FullscreenLayout.svelte\",\"sources\":[\"FullscreenLayout.svelte\"],\"sourcesContent\":[\"<script>\\n  import Icon from \\\"fa-svelte/src/Icon.svelte\\\";\\n  import { faVolumeUp as faSoundOn } from \\\"@fortawesome/free-solid-svg-icons/faVolumeUp\\\";\\n  import { faVolumeMute as faSoundOff } from \\\"@fortawesome/free-solid-svg-icons/faVolumeMute\\\";\\n  import { faPlay } from \\\"@fortawesome/free-solid-svg-icons/faPlay\\\";\\n  import { faPause } from \\\"@fortawesome/free-solid-svg-icons/faPause\\\";\\n  import { faCog as faSettings } from \\\"@fortawesome/free-solid-svg-icons/faCog\\\";\\n  import { faHome } from \\\"@fortawesome/free-solid-svg-icons/faHome\\\";\\n  import { faDonate } from \\\"@fortawesome/free-solid-svg-icons/faDonate\\\";\\n  import { faExpandAlt as faExpand } from \\\"@fortawesome/free-solid-svg-icons/faExpandAlt\\\";\\n  import { faCloudDownloadAlt as faDownload } from \\\"@fortawesome/free-solid-svg-icons/faCloudDownloadAlt\\\";\\n  import { faDice } from \\\"@fortawesome/free-solid-svg-icons/faDice\\\";\\n  import { faPhotoVideo as faImageVideo } from \\\"@fortawesome/free-solid-svg-icons/faPhotoVideo\\\";\\n  import { faImage } from \\\"@fortawesome/free-solid-svg-icons/faImage\\\";\\n  import { faVideo } from \\\"@fortawesome/free-solid-svg-icons/faVideo\\\";\\n  import { faStar as faFav } from \\\"@fortawesome/free-solid-svg-icons/faStar\\\";\\n  import { faStar as faUnFav } from \\\"@fortawesome/free-regular-svg-icons/faStar\\\";\\n  import { faSearch } from \\\"@fortawesome/free-solid-svg-icons/faSearch\\\";\\n  import { faSync } from \\\"@fortawesome/free-solid-svg-icons/faSync\\\";\\n  import { faSpinner } from \\\"@fortawesome/free-solid-svg-icons/faSpinner\\\";\\n  import { faPlusCircle } from \\\"@fortawesome/free-solid-svg-icons/faPlusCircle\\\";\\n  import { faMinusCircle } from \\\"@fortawesome/free-solid-svg-icons/faMinusCircle\\\";\\n  import { faEye as faShow } from \\\"@fortawesome/free-solid-svg-icons/faEye\\\";\\n  import { faEyeSlash as faHide } from \\\"@fortawesome/free-solid-svg-icons/faEyeSlash\\\";\\n  import { faTh as faColumns } from \\\"@fortawesome/free-solid-svg-icons/faTh\\\";\\n  import { faExpandArrowsAlt as faFullscreen } from \\\"@fortawesome/free-solid-svg-icons/faExpandArrowsAlt\\\";\\n\\n  import { faMobileAlt as faPortrait } from \\\"@fortawesome/free-solid-svg-icons/faMobileAlt\\\";\\n  import { faDesktop as faLandscape } from \\\"@fortawesome/free-solid-svg-icons/faDesktop\\\";\\n\\n  import AutoComplete from \\\"simple-svelte-autocomplete\\\";\\n\\n  import Settings from \\\"./Settings.svelte\\\";\\n\\n  import { onMount, tick } from \\\"svelte\\\";\\n  import { goto as ahref } from \\\"@sapper/app\\\";\\n\\n  import shuffle from \\\"lodash.shuffle\\\";\\n\\n  import { get_tumblr_posts, queryp } from \\\"../_tumblr_utils.ts\\\";\\n\\n  \\n\\n  import { writable, throttle, startWith } from \\\"svelte-pipeable-store\\\";\\n\\n  import {\\n    autoplay,\\n    autoplayinterval,\\n    imageVideo,\\n    portraitLandscape,\\n    favorite,\\n    over18,\\n    prefetch,\\n    prefetchNum,\\n    hires,\\n    lores,\\n    muted,\\n    layout,\\n    multireddit,\\n    oldreddit\\n  } from \\\"../_prefs\\\";\\n  autoplay.useLocalStorage(false);\\n  autoplayinterval.useLocalStorage(3);\\n  imageVideo.useLocalStorage(0);\\n  portraitLandscape.useLocalStorage(0);\\n  favorite.useLocalStorage({});\\n  over18.useLocalStorage(1);\\n  multireddit.useLocalStorage({});\\n  prefetch.useLocalStorage(true);\\n  prefetchNum.useLocalStorage(50);\\n  hires.useLocalStorage(false);\\n  lores.useLocalStorage(true);\\n  oldreddit.useLocalStorage(false);\\n  muted.useLocalStorage(true);\\n  layout.useLocalStorage(0);\\n\\n  export let params, slugstr;\\n  export let posts;\\n  export let after;\\n  export let res;\\n  export let mode = \\\"tumblr\\\";\\n\\n  console.log(\\\"Posts from API:\\\", posts);\\n\\n  let data;\\n  let displayposts = [];\\n  console.log(\\\"Display Posts (initial):\\\", displayposts);\\n  let uiVisible = false;\\n  let hideCursor = true;\\n  let hideCursorTimerId = 0;\\n  let titleVisible = true;\\n  let numFavorite;\\n  let tinygoto;\\n  let title;\\n  let albumindex = 0;\\n\\n  $: {\\n    if (currpost.is_album) {\\n      title = `(${albumindex + 1}/${currpost.preview.img.album.length}) ${\\n        currpost.title\\n      }`;\\n    } else {\\n      title = currpost.title;\\n    }\\n  }\\n\\n  let blogIdentifier;\\n\\n  $: blogIdentifier = slugstr;\\n\\n  $: {\\n    if ($gotoElWidth > 1000) {\\n      // padding on both sides\\n      let numGotoControlsInOneRow = ($gotoElWidth - 154 * 2) / 32;\\n      let numGotoControlsRows =\\n        (displayposts.length + 5) / numGotoControlsInOneRow;\\n      tinygoto = numGotoControlsRows > 3;\\n    } else if ($gotoElWidth > 800) {\\n      // padding on right side\\n      let numGotoControlsInOneRow = ($gotoElWidth - (154 + 14)) / 32;\\n      let numGotoControlsRows =\\n        (displayposts.length + 5) / numGotoControlsInOneRow;\\n      tinygoto = numGotoControlsRows > 3;\\n    } else {\\n      // no padding\\n      let numGotoControlsInOneRow = ($gotoElWidth - (14 + 14)) / 32;\\n      let numGotoControlsRows =\\n        (displayposts.length + 5) / numGotoControlsInOneRow;\\n      tinygoto = numGotoControlsRows > 3;\\n    }\\n  }\\n\\n  // 1440 is to set numCols to 3. Setting to `0` would mean we start with 1 col, and then quickly update to 3 on desktop.\\n  const _gotoElWidth = writable(1440);\\n  const gotoElWidth = _gotoElWidth.pipe(throttle(500), startWith(1440));\\n\\n  $: loadError = res && !res.res.ok;\\n  let loading = false;\\n  let reloadstr = \\\"Load more\\\";\\n  let navigation = false;\\n\\n  let imageVideoStr = \\\"\\\";\\n  let portraitLandscapeStr = \\\"\\\";\\n  let downloadstr = \\\"\\\";\\n  let autoplaystr = \\\"\\\";\\n  let over18str = \\\"\\\";\\n  let deepsearchstr = \\\"\\\"; // Declare deepsearchstr\\n  \\n  let showhidestr = \\\"Show (h)\\\";\\n  let mutedstr = \\\"Sound Off\\\";\\n\\n  let autoplaytimer;\\n\\n  let filterRef;\\n  let filterExpanded = false;\\n  let filterValue = \\\"\\\";\\n  let subredditSearchValue = \\\"\\\"; // Declare subredditSearchValue\\n\\n  let showSettings = false;\\n\\n  let currpost = { title: \\\"Loading ..\\\" };\\n  let nexturls = [];\\n\\n  let index = 0;\\n\\n  async function loadMore() {\\n    if (!after) return;\\n\\n    loading = true;\\n    reloadstr = \\\"Loading ..\\\";\\n\\n    let newposts;\\n\\n    if (mode === \\\"tumblr\\\") {\\n      ({\\n        posts: newposts,\\n        after,\\n        ...res\\n      } = await get_tumblr_posts(\\n        `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF&offset=${after}&${queryp(params)}`\\n      ));\\n    }\\n\\n    console.log(\\\"API Response (res object):\\\", res);\\n    console.log(posts);\\n\\n    // load `favorite` from localstorage\\n    for (let p of newposts) {\\n      p[\\\"favorite\\\"] = !!(($favorite || {})[p.url]?.favorite);\\n    }\\n\\n    // Combine `posts` and `newposts` and remove duplicates from multiple network requests\\n    posts = [...posts, ...newposts].reduce(\\n      (r, i) => (!r.some((j) => i.id === j.id) ? [...r, i] : r),\\n      []\\n    );\\n    console.log(\\\"Before dedupe: \\\", posts.length);\\n\\n    // Remove duplicates, based on `url`\\n    posts = posts.filter((v, i, a) => a.findIndex((t) => t.url == v.url) === i);\\n\\n    console.log(\\\"After dedupe/Total loaded: \\\", posts.length);\\n\\n    loading = false;\\n    reloadstr = \\\"Load more\\\";\\n  }\\n\\n  onMount(async () => {\\n    console.log(\\\"Posts on mount:\\\", posts);\\n    console.log(\\\"Display Posts on mount:\\\", displayposts);\\n    loadMore(); // Call loadMore on mount\\n    // Start autoplay by default\\n    if ($autoplay) {\\n      startAutoPlay();\\n    }\\n  });\\n\\n  function startAutoPlay() {\\n    //console.log('START')\\n    autoplaytimer = setInterval(() => {\\n      // If `autoplay` is off and it is a video, the video will progress by itself via on:ended\\n      if ($autoplay && currpost.is_image) {\\n        //console.log('---- iNEXT')\\n        next();\\n      } else if (!$autoplay && currpost.is_video) {\\n        //console.log('---- vNEXT')\\n        next();\\n      }\\n    }, $autoplayinterval * 1000);\\n\\n    autoplay.set(true);\\n  }\\n\\n  async function prev() {\\n    if (currpost.is_album && albumindex > 0) {\\n      albumPrev();\\n    } else {\\n      itemPrev();\\n      await tick(); // Ensure currpost is updated\\n      if (currpost.is_album) {\\n        albumindex = currpost.preview.img.album.length - 1;\\n      }\\n    }\\n  }\\n\\n  async function next() {\\n    if (currpost.is_album && !isEndOfAlbum()) {\\n      albumNext();\\n    } else {\\n      itemNext();\\n      await tick(); // Ensure currpost is updated\\n    }\\n  }\\n\\n  function stopAutoPlay() {\\n    //console.log('STOP')\\n    clearInterval(autoplaytimer);\\n    autoplay.set(false);\\n  }\\n\\n  function stopAndStartAutoPlay() {\\n    stopAutoPlay();\\n\\n    startAutoPlay();\\n  }\\n\\n  function toggleAutoPlay() {\\n    if ($autoplay) {\\n      stopAutoPlay();\\n    } else {\\n      startAutoPlay();\\n    }\\n  }\\n\\n  function toggleImageVideo() {\\n    $imageVideo = $imageVideo + 1;\\n\\n    if ($imageVideo == 3) {\\n      $imageVideo = 0;\\n    }\\n  }\\n\\n  function uniqBy(a, key) {\\n    var seen = {};\\n    return a.filter(function(item) {\\n        var k = key(item);\\n        return seen.hasOwnProperty(k) ? false : (seen[k] = true);\\n    })\\n  }\\n\\n  function toggleMuted() {\\n    $muted = !$muted;\\n  }\\n\\n  function togglePortraitLandscape() {\\n    $portraitLandscape = $portraitLandscape + 1;\\n\\n    if ($portraitLandscape == 3) {\\n      $portraitLandscape = 0;\\n    }\\n  }\\n\\n  let renderVideo = true;\\n\\n  // Some operations like fav/unfav causes video to re-render\\n  // since we're changing post.favorite. This should help skip it\\n  let skipRenderVideo = false;\\n\\n  $: {\\n    if (!skipRenderVideo) reMountVideo(currpost.preview);\\n    skipRenderVideo = false;\\n  }\\n\\n  function reMountVideo() {\\n    renderVideo = false;\\n    setTimeout(() => (renderVideo = true), 0);\\n  }\\n\\n  $: {\\n    // Subreddit search\\n    if (subredditSearchValue) {\\n      //subredditSearchVisible = false;\\n      //ahref(`/r/${subredditSearchValue}`);\\n      //subredditSearchValue = \\\"\\\";\\n      //subredditSearchValueRaw = \\\"\\\";\\n      jumpToSubReddit(subredditSearchValue);\\n    }\\n  }\\n\\n  $: {\\n    numFavorite = displayposts.filter((item) => item.favorite == true).length;\\n\\n    if (!numFavorite) {\\n      downloadstr = `Nothing to download`;\\n    } else if (numFavorite == 1) {\\n      downloadstr = `Download ${numFavorite} file`;\\n    } else {\\n      downloadstr = `Download ${numFavorite} files`;\\n    }\\n    autoplaystr = `Autoplay is ${$autoplay ? \\\"on\\\" : \\\"off\\\"}`;\\n    deepsearchstr = `Search for ${filterValue}`;\\n\\n    mutedstr = `Sound ${$muted ? \\\"off\\\" : \\\"on\\\"}`;\\n\\n    if ($over18 == 0) {\\n      over18str = \\\"nsfw off\\\";\\n    } else if ($over18 == 1) {\\n      over18str = \\\"nsfw on\\\";\\n    } else if ($over18 == 2) {\\n      over18str = \\\"nsfw only\\\";\\n    }\\n\\n    if ($imageVideo == 0) {\\n      imageVideoStr = \\\"Show both image and video\\\";\\n    } else if ($imageVideo == 1) {\\n      imageVideoStr = \\\"Show videos only\\\";\\n    } else if ($imageVideo == 2) {\\n      imageVideoStr = \\\"Show images only\\\";\\n    }\\n\\n    if ($portraitLandscape == 0) {\\n      portraitLandscapeStr = \\\"Show all media\\\";\\n    } else if ($portraitLandscape == 1) {\\n      portraitLandscapeStr = \\\"Show only portrait media\\\";\\n    } else if ($portraitLandscape == 2) {\\n      portraitLandscapeStr = \\\"Show only landscape media\\\";\\n    }\\n  }\\n\\n  $: {\\n    if (displayposts[index]) {\\n      currpost = JSON.parse(JSON.stringify(displayposts[index]));\\n\\n      let _nexturls = [];\\n\\n      _nexturls = [\\n        currpost,\\n        ...displayposts.slice(index + 1, index + $prefetchNum + 1)\\n      ];\\n\\n      nexturls = _nexturls\\n        .map(function (item) {\\n          if (item.is_album) {\\n            return item.preview.img.album.slice(\\n              albumindex,\\n              albumindex + $prefetchNum + 1\\n            );\\n          } else {\\n            return item;\\n          }\\n        })\\n        .flat();\\n\\n      console.log(nexturls);\\n      nexturls = uniqBy(nexturls, () => (item) => item.preview.img.default);\\n    } else if (filterValue) {\\n      // We're here because user filtered the list\\n\\n      // Unfortunately the filtered list is smaller than the current index\\n      // set index to last item\\n      if (displayposts.length > 0) {\\n        console.log(\\\"setting index from \\\", index, \\\" to \\\", displayposts.length);\\n        index = displayposts.length - 1;\\n        console.log(\\\"loading more ..\\\");\\n        loadMore();\\n      } else {\\n        // nothing was filtered\\n        index = 0;\\n        currpost = {\\n          title: \\\"Nothing to show. Try changing filters or tweak/update URL.\\\"\\n        };\\n      }\\n    } else {\\n      if (res && res.res.ok) {\\n        // No media found\\n        currpost = {\\n          title: \\\"Nothing to show. Try changing filters or tweak/update URL.\\\"\\n        };\\n      } else if (res && !res.res.ok) {\\n        // Invalid subreddit\\n        currpost = { title: \\\"Error\\\" };\\n      } else {\\n        // Default\\n        currpost = { title: \\\"Loading ..\\\" };\\n      }\\n\\n      nexturls = [];\\n    }\\n  }\\n\\n  $: {\\n    let tmp = [];\\n\\n    if ($over18 == 0) {\\n      tmp = posts.filter((item) => item.over18 == false);\\n    } else if ($over18 == 1) {\\n      tmp = posts;\\n    } else if ($over18 == 2) {\\n      tmp = posts.filter((item) => item.over18 == true);\\n    }\\n\\n    if (filterValue) {\\n      skipRenderVideo = true;\\n      tmp = tmp.filter((item) =>\\n        item.title.toLowerCase().includes(filterValue.toLowerCase())\\n      );\\n    }\\n\\n    // Filter only videos\\n    if ($imageVideo == 1) {\\n      tmp = tmp.filter((item) => item.is_video);\\n    }\\n    // Filter only images\\n    else if ($imageVideo == 2) {\\n      tmp = tmp.filter((item) => item.is_image);\\n    }\\n\\n    if ($portraitLandscape == 1) {\\n      tmp = tmp.filter((item) => item.dims.width / item.dims.height <= 1.2);\\n    } else if ($portraitLandscape == 2) {\\n      tmp = tmp.filter((item) => item.dims.width / item.dims.height > 1.2);\\n    }\\n\\n    displayposts = tmp;\\n  }\\n\\n  function goto(i) {\\n    albumindex = 0;\\n    index = i;\\n\\n    let itemNum = displayposts.length - index;\\n\\n    // If autoplay is on and we're jumping to 2 or 3, we must load\\n    if ((itemNum == 2 || itemNum == 3) && $autoplay) {\\n      console.log(\\\"[goto-to-2/3]: loading ..\\\");\\n      loadMore();\\n    }\\n\\n    // Last item\\n    if (itemNum === 1) {\\n      console.log(\\\"[goto-to-lastitem]: loading ..\\\");\\n      loadMore();\\n    }\\n\\n    if ($autoplay) stopAndStartAutoPlay();\\n  }\\n\\n  function videoended() {\\n    itemNext();\\n  }\\n\\n  function itemNext() {\\n    albumindex = 0; // Always reset album index to 0 when moving to a new post\\n    let itemNum = displayposts.length - 1 - index;\\n\\n    // Last item, dont go past the last item\\n    if (itemNum <= 1) {\\n      index = displayposts.length - 1;\\n\\n      console.log(\\\"[lastitem, autoplay+filter?]: loading more ..\\\");\\n      // Reached last item, possibly by autoplay + filter\\n      loadMore();\\n\\n      return;\\n    }\\n\\n    // Auto trigger on the last 4th item\\n    if (itemNum === 4 || itemNum === 3) {\\n      console.log(\\\"[4th last item, normal]: loading more ..\\\");\\n      loadMore();\\n    }\\n\\n    // If we're at 3rd/2nd last item with a filter, the user\\n    // possibly just filtered the list and ended up here.\\n    // trigger a load more. We dont want to do it always since\\n    // we normally trigger loadmore @3rd last item. Always doing it\\n    // Would end up with 2 requests to reddit.com\\n    if (itemNum === 2 && filterValue) {\\n      console.log(\\\"[2nd last item, filtering?]: loading more ..\\\");\\n      loadMore();\\n    }\\n\\n    index += 1;\\n\\n    if ($autoplay) stopAndStartAutoPlay();\\n  }\\n\\n  async function itemPrev() {\\n    if (index === 0) return;\\n    index -= 1;\\n\\n    albumindex = 0; // Always reset album index to 0 when moving to a new post\\n\\n    await tick(); // Ensure currpost is updated before accessing its properties\\n\\n    if (displayposts.length - index === 3) {\\n      loadMore();\\n    }\\n    if ($autoplay) stopAndStartAutoPlay();\\n  }\\n\\n  function toggleFullscreen() {\\n    var elem = document.body;\\n    if (\\n      document.fullscreenElement || // alternative standard method\\n      document.mozFullScreenElement ||\\n      document.webkitFullscreenElement ||\\n      document.msFullscreenElement\\n    ) {\\n      // current working methods\\n      if (document.exitFullscreen) {\\n        document.exitFullscreen();\\n      } else if (document.msExitFullscreen) {\\n        document.msExitFullscreen();\\n      } else if (document.mozCancelFullScreen) {\\n        document.mozCancelFullScreen();\\n      } else if (document.webkitExitFullscreen) {\\n        document.webkitExitFullscreen();\\n      }\\n      if (!uiVisible) {\\n        toggleUIVisiblity();\\n      }\\n    } else {\\n      if (elem.requestFullscreen) {\\n        elem.requestFullscreen();\\n      } else if (elem.msRequestFullscreen) {\\n        elem.msRequestFullscreen();\\n      } else if (elem.mozRequestFullScreen) {\\n        elem.mozRequestFullScreen();\\n      } else if (elem.webkitRequestFullscreen) {\\n        elem.webkitRequestFullscreen();\\n      }\\n      if (uiVisible) {\\n        toggleUIVisiblity();\\n      }\\n    }\\n  }\\n\\n  function onVideoPlayerClicked(ev) {\\n    const r = document.getElementById('videoplayerid').getBoundingClientRect();\\n    const x = ev.offsetX / r.width;\\n    const activePart = 1/5;\\n\\n    if (x < activePart) {\\n      itemPrev();\\n    } else if (x > (1-activePart)) {\\n      itemNext();\\n    }\\n  }\\n\\n  function toggleHideCursor() {\\n    hideCursor = false;\\n    if (hideCursorTimerId) {\\n      clearTimeout(hideCursorTimerId);\\n    }\\n    hideCursorTimerId = setTimeout(() => {\\n      hideCursorTimerId = 0;\\n      hideCursor = true;\\n    }, 3000);\\n  }\\n\\n  function toggleTitleVisibility() {\\n    titleVisible = !titleVisible;\\n  }\\n\\n  function toggleUIVisiblity() {\\n    uiVisible = !uiVisible;\\n\\n    showhidestr = uiVisible ? \\\"Hide (h)\\\" : \\\"Show (h)\\\";\\n\\n    if (hideCursorTimerId) {\\n      clearTimeout(hideCursorTimerId);\\n      hideCursorTimerId = 0;\\n    }\\n\\n    if (!uiVisible) {\\n      hideCursor = true;\\n    } else {\\n      hideCursor = false;\\n    }\\n  }\\n\\n  function toggleSettings() {\\n    showSettings = !showSettings;\\n  }\\n\\n  function gotoDeepSearch() {\\n    let prefix = \\\"\\\";\\n    if (slugstr) {\\n      prefix = `/r/${subreddit}`;\\n    } else {\\n      prefix = ``;\\n    }\\n\\n    navigation = true;\\n    ahref(\\n      `${prefix}/search?q=${filterValue}&restrict_sr=on&include_over_18=on&sort=relevant&t=all`\\n    );\\n  }\\n\\n  function hideSettings() {\\n    showSettings = false;\\n  }\\n\\n  \\n\\n  async function expandFilter() {\\n    filterExpanded = true;\\n\\n    await tick();\\n\\n    // Focus the input if we just opened it\\n    if (filterExpanded) filterRef.querySelector(\\\"input\\\").focus();\\n  }\\n\\n  async function toggleFilter() {\\n    filterExpanded = !filterExpanded;\\n\\n    await tick();\\n    // Focus the input if we just opened it\\n    if (filterExpanded) filterRef.querySelector(\\\"input\\\").focus();\\n  }\\n\\n  async function downloadFiles() {\\n    window.open(\\\"/download\\\", \\\"_blank\\\");\\n  }\\n\\n  async function shuffleFiles() {\\n    displayposts = shuffle(displayposts);\\n  }\\n\\n  function openMedia() {\\n    window.open(currpost.url, \\\"_blank\\\");\\n  }\\n\\n  \\n\\n  function copySrcToClipboard() {\\n    let text;\\n    if (\\n      currpost.url.startsWith(\\\"https://v.redd.it/\\\") ||\\n      currpost.url.includes(\\\"redgifs.com\\\")\\n    ) {\\n      text = currpost.preview.vid.mp4;\\n    } else if (currpost.is_image && !currpost.is_album) {\\n      text = currpost.url;\\n    } else if (currpost.is_video) {\\n      text = currpost.url;\\n    } else if (currpost.is_album) {\\n      if (currpost.preview.img.album[albumindex].is_video) {\\n        text = currpost.preview.img.album[albumindex].hires;\\n      } else {\\n        text = currpost.preview.img.album[albumindex].hires;\\n      }\\n    }\\n\\n    navigator.clipboard\\n      .writeText(text)\\n      .then(() => console.log(`Copied: ${text}`));\\n  }\\n\\n  function toggleOver18() {\\n    $over18 = $over18 + 1;\\n\\n    if ($over18 == 3) {\\n      $over18 = 0;\\n    }\\n    over18.set($over18);\\n  }\\n\\n  function removeAllFavorite(removeAllFromLocalStorage) {\\n    skipRenderVideo = true;\\n\\n    for (const [i, post] of displayposts.entries()) {\\n      // For reactivity\\n      displayposts[i].favorite = false;\\n\\n      // If removeAllFromLocalStorage is true, then we'll remove everythign in one shot\\n      // no need to do it one by one\\n      if (removeAllFromLocalStorage == false) {\\n        // Localstorage\\n        $favorite[post.url] = undefined;\\n        $favorite = JSON.parse(JSON.stringify($favorite));\\n\\n        favorite.set($favorite);\\n      }\\n    }\\n\\n    if (removeAllFromLocalStorage) {\\n      favorite.set({});\\n    }\\n  }\\n  function toggleFavorite() {\\n    skipRenderVideo = true;\\n    displayposts[index].favorite = !displayposts[index].favorite;\\n\\n    let url = displayposts[index].url;\\n    $favorite[url] = undefined;\\n    $favorite = JSON.parse(JSON.stringify($favorite));\\n    $favorite[url] = displayposts[index];\\n    favorite.set($favorite);\\n  }\\n\\n  function albumPrev() {\\n    if (!currpost.is_album) return;\\n    albumindex -= 1;\\n    if ($autoplay) stopAndStartAutoPlay();\\n  }\\n\\n  function isEndOfAlbum() {\\n    return albumindex == currpost.preview.img.album.length - 1;\\n  }\\n\\n  function isStartOfAlbum() {\\n    return albumindex == 0;\\n  }\\n\\n  function albumNext() {\\n    if (!currpost.is_album) return;\\n\\n    if (isEndOfAlbum()) {\\n      albumindex = 0;\\n    } else {\\n      albumindex += 1;\\n    }\\n\\n    if ($autoplay) stopAndStartAutoPlay();\\n  }\\n\\n  function wheel(event) {\\n    if (event.deltaY > 0) {\\n      next();\\n    } else if (event.deltaY < 0) {\\n      prev();\\n    }\\n  }\\n\\n  function keydown(event) {\\n    // up\\n    if (event.keyCode == 38) {\\n      next();\\n    }\\n\\n    // down\\n    if (event.keyCode == 40) {\\n      prev();\\n    }\\n\\n    // s\\n    if (event.keyCode == 83) {\\n      toggleMuted();\\n    }\\n\\n    // q, p\\n    if (event.keyCode == 81 || event.keyCode == 80) {\\n      toggleAutoPlay();\\n    }\\n\\n    // f\\n    if (event.keyCode == 70 && !event.ctrlKey) {\\n      toggleFullscreen();\\n    }\\n\\n    // slash, f\\n    if (event.keyCode == 191) {\\n      expandFilter();\\n      // We need this, otherwise filter box will have '/' because of autofocus\\n      event.preventDefault();\\n    }\\n\\n    // x\\n    if (event.keyCode == 88) {\\n      if (event.shiftKey) {\\n        removeAllFavorite(event.ctrlKey); // if ctrl+shift+x is remove everything from localstorage\\n      } else {\\n        toggleFavorite();\\n      }\\n    }\\n\\n    if (event.ctrlKey) {\\n      return;\\n    }\\n\\n    // i\\n    if (event.keyCode == 73) {\\n      openMedia();\\n    }\\n\\n    // h\\n    if (event.keyCode == 72) {\\n      toggleUIVisiblity();\\n    }\\n\\n    // t\\n    if (event.keyCode == 84) {\\n      toggleTitleVisibility();\\n    }\\n\\n    // v\\n    if (event.keyCode == 118) {\\n      toggleImageVideo();\\n    }\\n\\n    // c\\n    if (event.keyCode == 67) {\\n      copySrcToClipboard();\\n    }\\n\\n    const n = event.keyCode - 48;\\n    if (n >= 0 && n <= 3) {\\n      const video = document.getElementById('videoplayerid');\\n      video.currentTime = n * video.duration / 4;\\n    }\\n\\n    // Left Arrow, a, k, Page-up\\n    if (\\n      event.keyCode == 37 ||\\n      event.keyCode == 65 ||\\n      event.keyCode == 75 ||\\n      event.keyCode == 33\\n    ) {\\n      if (event.shiftKey) {\\n        const video = document.getElementById('videoplayerid');\\n        video.currentTime -= 5;\\n      } else {\\n        itemPrev();\\n      }\\n    }\\n    // Right Arrow, d, j, Space, Page-down\\n    else if (\\n      event.keyCode == 39 ||\\n      event.keyCode == 68 ||\\n      event.keyCode == 74 ||\\n      event.keyCode == 32 ||\\n      event.keyCode == 34\\n    ) {\\n      if (event.shiftKey) {\\n        const video = document.getElementById('videoplayerid');\\n        video.currentTime += 5;\\n      } else {\\n        itemNext();\\n      }\\n    }\\n  }\\n</script>\\n\\n<svelte:window on:keydown={keydown} on:wheel={wheel} />\\n<svelte:head>\\n  <title>tumblrpx - {slugstr ? `t/${slugstr}` : \\\"tumblr.com\\\"}</title>\\n</svelte:head>\\n\\n<div class=\\\"wrapper\\\" class:hide-cursor=\\\"{hideCursor}\\\">\\n  <div class=\\\"hero\\\">\\n    <div class=\\\"title\\\" class:hide=\\\"{!uiVisible || !titleVisible}\\\" class:favorite=\\\"{currpost.favorite}\\\">\\n      {#if displayposts.length}\\n        <span class=\\\"fav\\\" on:click|stopPropagation|preventDefault=\\\"{toggleFavorite}\\\">\\n          <Icon icon=\\\"{currpost.favorite ? faFav : faUnFav}\\\"></Icon>\\n        </span>\\n      {/if}\\n      {#if currpost.dims}\\n        {title} ({currpost.dims.width}x{currpost.dims.height})\\n      {:else}\\n        {title}\\n      {/if}\\n      {#if currpost.subreddit}\\n        <div class=\\\"subreddit\\\">\\n          <p class=\\\"subredditp\\\">{currpost.subredditp}</p>\\n          <p class=\\\"user\\\">{currpost.authorp}</p>\\n        </div>\\n      {/if}\\n    </div>\\n    <div class=\\\"settings\\\">\\n      <a class=\\\"donate\\\" href=\\\"https://ko-fi.com/redditpx\\\" target=\\\"_blank\\\" class:hide=\\\"{currpost.favorite == false}\\\">\\n        <span class=\\\"btn tooltip bottom donate\\\" data-tooltip=\\\"Donate\\\">\\n          <Icon icon=\\\"{faDonate}\\\"></Icon>\\n        </span>\\n      </a>\\n      <a class=\\\"home\\\" rel=\\\"prefetch\\\" href=\\\"/home\\\" class:hide=\\\"{uiVisible == false}\\\">\\n        <span class=\\\"btn tooltip bottom\\\" data-tooltip=\\\"Home\\\">\\n          <Icon icon=\\\"{faHome}\\\"></Icon>\\n        </span>\\n      </a>\\n      <span class=\\\"btn cog\\\" on:click=\\\"{toggleSettings}\\\" class:showSettings=\\\"{showSettings}\\\" class:hide=\\\"{uiVisible == false}\\\">\\n        <Icon icon=\\\"{faSettings}\\\"></Icon>\\n      </span>\\n      <div class=\\\"div\\\" class:hide=\\\"{uiVisible == false}\\\">\\n        <Settings bind:showSettings></Settings>\\n      </div>\\n    </div>\\n    <div class=\\\"main-media-container\\\">\\n      {#if currpost.is_image && !currpost.is_album}\\n        <img src=\\\"{currpost.preview.img.default}\\\" alt=\\\"{currpost.title}\\\" style=\\\"max-width: 100%; max-height: 100vh; object-fit: contain;\\\">\\n      {:else if currpost.is_video && renderVideo}\\n        <video class=\\\"video\\\" autoplay loop=\\\"{!$autoplay}\\\" playsinline muted=\\\"{$muted}\\\" on:ended=\\\"{videoended}\\\" on:dblclick=\\\"{toggleFullscreen}\\\" class:hide-cursor=\\\"{hideCursor}\\\" on:mousemove=\\\"{toggleHideCursor}\\\" id=\\\"videoplayerid\\\" on:click=\\\"{onVideoPlayerClicked}\\\">\\n          {#if $lores}\\n            <source src=\\\"{currpost.preview.vid.lores}\\\">\\n          {:else}\\n            {#if currpost.preview.vid.webm}\\n              <source src=\\\"{currpost.preview.vid.webm}\\\">\\n            {/if}\\n            {#if currpost.preview.vid.mp4}\\n              <source src=\\\"{currpost.preview.vid.mp4}\\\">\\n            {/if}\\n          {/if}\\n        </video>\\n      {:else if currpost.is_album}\\n        {#if currpost.preview.img.album[albumindex].is_video}\\n          <video class=\\\"video\\\" autoplay loop=\\\"{!$autoplay}\\\" playsinline muted=\\\"{$muted}\\\" on:ended=\\\"{videoended}\\\" on:dblclick=\\\"{toggleFullscreen}\\\" class:hide-cursor=\\\"{hideCursor}\\\" on:mousemove=\\\"{toggleHideCursor}\\\" on:click=\\\"{onVideoPlayerClicked}\\\">\\n            <source src=\\\"{currpost.preview.img.album[albumindex].hires}\\\">\\n          </video>\\n        {:else}\\n          <img src=\\\"{currpost.preview.img.album[albumindex].default}\\\" alt=\\\"{currpost.title}\\\" style=\\\"max-width: 100%; max-height: 100vh; object-fit: contain;\\\">\\n        {/if}\\n      {/if}\\n    </div>\\n    \\n    {#if displayposts.length || posts.length}\\n      <div class=\\\"goto\\\" class:tinygoto=\\\"{tinygoto}\\\" class:hide=\\\"{uiVisible == false}\\\" bind:clientWidth=\\\"{$_gotoElWidth}\\\">\\n        <div class=\\\"btnwrapper\\\">\\n          <span class=\\\"btn playpause tooltip\\\"\\n            data-tooltip=\\\"{autoplaystr}\\\"\\n            class:play=\\\"{$autoplay}\\\"\\n            on:click=\\\"{toggleAutoPlay}\\\"\\n          >\\n            <Icon icon=\\\"{$autoplay ? faPause : faPlay}\\\"></Icon>\\n          </span>\\n          <span class=\\\"btn download tooltip\\\"\\n            on:click=\\\"{downloadFiles}\\\"\\n            data-tooltip=\\\"{downloadstr}\\\"\\n            class:dlready=\\\"{numFavorite}\\\"\\n          >\\n            <Icon icon=\\\"{faDownload}\\\"></Icon>\\n          </span>\\n          <span class=\\\"btn dice tooltip\\\"\\n            on:click=\\\"{shuffleFiles}\\\"\\n            data-tooltip=\\\"Shuffle\\\"\\n          >\\n            <Icon icon=\\\"{faDice}\\\"></Icon>\\n          </span>\\n          <span class=\\\"btn portraitlandscape tooltip\\\"\\n            on:click=\\\"{togglePortraitLandscape}\\\"\\n            data-tooltip=\\\"{portraitLandscapeStr}\\\"\\n            class:active=\\\"{$portraitLandscape}\\\"\\n          >\\n            {#if $portraitLandscape == 0}\\n              <Icon icon=\\\"{faLandscape}\\\"></Icon>\\n            {:else if $portraitLandscape == 1}\\n              <Icon icon=\\\"{faPortrait}\\\"></Icon>\\n            {:else if $portraitLandscape == 2}\\n              <Icon class=\\\"landscape\\\" icon=\\\"{faPortrait}\\\"></Icon>\\n            {/if}\\n          </span>\\n          <span class=\\\"btn imagevideo tooltip\\\"\\n            data-tooltip=\\\"{imageVideoStr}\\\"\\n            on:click=\\\"{toggleImageVideo}\\\"\\n          >\\n            {#if $imageVideo == 0}\\n              <Icon icon=\\\"{faImageVideo}\\\"></Icon>\\n            {:else if $imageVideo == 1}\\n              <Icon icon=\\\"{faVideo}\\\"></Icon>\\n            {:else if $imageVideo == 2}\\n              <Icon icon=\\\"{faImage}\\\"></Icon>\\n            {/if}\\n          </span>\\n          <span class=\\\"btn muted tooltip\\\"\\n            data-tooltip=\\\"{mutedstr}\\\"\\n            on:click=\\\"{toggleMuted}\\\"\\n          >\\n            <Icon icon=\\\"{$muted ? faSoundOff : faSoundOn}\\\"></Icon>\\n          </span>\\n          {#if tinygoto}\\n            <span class=\\\"btn reload tooltip\\\" data-tooltip=\\\"{reloadstr}\\\" on:click=\\\"{loadMore}\\\" class:loaderror=\\\"{loadError}\\\">\\n              {#if loading}\\n                <Icon icon=\\\"{faSpinner}\\\"></Icon>\\n              {:else}\\n                <Icon icon=\\\"{faSync}\\\"></Icon>\\n              {/if}\\n            </span>\\n          {/if}\\n          <span class=\\\"btn over18wrapper tooltip\\\"\\n            data-tooltip=\\\"{over18str}\\\"\\n            class:over18=\\\"{!$over18}\\\"\\n            on:click=\\\"{toggleOver18}\\\"\\n          >\\n            <p>{over18str}</p>\\n          </span>\\n          <span class=\\\"btn filter tooltip\\\"\\n            class:filterExpanded=\\\"{filterExpanded}\\\"\\n            on:click=\\\"{toggleFilter}\\\"\\n            data-tooltip=\\\"Filter ( / )\\\"\\n            bind:this=\\\"{filterRef}\\\"\\n            class:dlready=\\\"{numFavorite}\\\"\\n          >\\n            {#if filterExpanded}\\n              <input bind:value=\\\"{filterValue}\\\" on:click|stopPropagation on:keydown|stopPropagation type=\\\"text\\\">\\n            {:else}\\n              <Icon icon=\\\"{faSearch}\\\"></Icon>\\n            {/if}\\n          </span>\\n          {#if filterValue}\\n            <span class=\\\"btn deepsearch tooltip\\\" data-tooltip=\\\"{deepsearchstr}\\\" on:click=\\\"{gotoDeepSearch}\\\">\\n              <p>deep search 🠒</p>\\n            </span>\\n          {/if}\\n        </div>\\n        <div class=\\\"numswrapper\\\">\\n          {#each displayposts as post, i (post.id + post.url)}\\n            <span class=\\\"nums\\\"\\n              class:currnum=\\\"{index === i}\\\"\\n              class:album=\\\"{currpost.is_album}\\\"\\n              class:favorite=\\\"{displayposts[i].favorite}\\\"\\n              class:over18=\\\"{displayposts[i].over18}\\\"\\n              on:click=\\\"{function(){goto(i)}}\\\"\\n            >\\n              <img class=\\\"small\\\" alt=\\\"{displayposts[i].title}\\\" src=\\\"{displayposts[i].thumbnail}\\\">\\n              <p class=\\\"small\\\" class:curr=\\\"{index === i}\\\" class:album=\\\"{currpost.is_album}\\\">{i+1}</p>\\n            </span>\\n          {/each}\\n          {#if !tinygoto}\\n            <span class=\\\"displayinfo\\\" class:filterExpanded=\\\"{filterValue}\\\">\\n              <p>{displayposts.length}/{posts.length}</p>\\n            </span>\\n            <span class=\\\"btn reload tooltip\\\" data-tooltip=\\\"{reloadstr}\\\" on:click=\\\"{loadMore}\\\" class:loaderror=\\\"{loadError}\\\">\\n              {#if loading}\\n                <Icon icon=\\\"{faSpinner}\\\"></Icon>\\n              {:else}\\n                <Icon icon=\\\"{faSync}\\\"></Icon>\\n              {/if}\\n            </span>\\n          {/if}\\n        </div>\\n      </div>\\n    {/if}\\n  </div>\\n</div>\\n{#if $prefetch}\\n  <div class=\\\"prefetch\\\">\\n    {#each nexturls as nexturl (nexturl.preview.img.default)}\\n      {#if $hires}\\n        {#if nexturl.is_album}\\n          <img alt=\\\"prefetch-hires\\\" src=\\\"{nexturl.preview.img.album[0].hires}\\\">\\n        {:else}\\n          <img alt=\\\"prefetch-hires\\\" src=\\\"{nexturl.url}\\\">\\n        {/if}\\n      {:else}\\n        {#if nexturl.is_album}\\n          <img alt=\\\"prefetch\\\" src=\\\"{nexturl.preview.img.album[0].default}\\\">\\n        {:else if nexturl.preview}\\n          <img alt=\\\"prefetch\\\" src=\\\"{nexturl.preview.img.default}\\\">\\n        {:else}\\n          <img alt=\\\"prefetch\\\" src=\\\"{nexturl.default}\\\">\\n        {/if}\\n      {/if}\\n      {#if nexturl.is_video}\\n        <video playsinline autoplay loop muted>\\n          {#if $lores}\\n            <source src=\\\"{nexturl.preview.vid.lores}\\\">\\n          {:else}\\n            {#if nexturl.preview}\\n              {#if nexturl.preview.vid.webm}\\n                <source src=\\\"{nexturl.preview.vid.webm}\\\">\\n              {/if}\\n              {#if nexturl.preview.vid.mp4}\\n                <source src=\\\"{nexturl.preview.vid.mp4}\\\">\\n              {/if}\\n            {:else}\\n              <source src=\\\"{nexturl.default}\\\">\\n            {/if}\\n          {/if}\\n        </video>\\n      {/if}\\n    {/each}\\n  </div>\\n{/if}\\n\\n<style lang=\\\"sass\\\">.hide-cursor {\\n  cursor: none;\\n}\\n\\n.hide {\\n  display: none !important;\\n}\\n\\n.wrapper {\\n  height: 100vh;\\n  display: grid;\\n  justify-items: center;\\n  align-items: center;\\n}\\n.wrapper .hero {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.wrapper .hero .title {\\n  z-index: 10;\\n  position: absolute;\\n  left: 1rem;\\n  top: 0;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  color: #fafafa;\\n  font-size: 1.5rem;\\n  max-width: 77%;\\n  padding: 1rem;\\n  border-radius: 3px;\\n}\\n.wrapper .hero .settings {\\n  z-index: 10;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  color: #fafafa;\\n  font-size: 1rem;\\n  padding: 1.5rem 2rem;\\n}\\n.wrapper .hero .main-media-container {\\n  flex-grow: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n}\\n.wrapper .hero .main-media-container img, .wrapper .hero .main-media-container video {\\n  max-width: 100%;\\n  max-height: 100%;\\n  object-fit: contain;\\n}\\n.wrapper .hero .goto {\\n  user-select: none;\\n  z-index: 5;\\n  position: absolute;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  bottom: 0;\\n  display: grid;\\n  grid-row-gap: 5px;\\n  padding: 1rem 11rem;\\n  border-radius: 3px;\\n  color: #fafafa;\\n  width: 100%;\\n  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));\\n}\\n.wrapper .hero .goto.tinygoto {\\n  grid-template-rows: auto 1fr;\\n  grid-template-columns: 1fr;\\n}\\n.wrapper .hero .goto.tinygoto .btnwrapper {\\n  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));\\n  display: grid;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper {\\n  grid-template-columns: repeat(auto-fit, minmax(1rem, auto));\\n  grid-auto-columns: max-content;\\n  display: grid;\\n  grid-gap: 0.2rem;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .nums {\\n  border-bottom: 3px solid rgba(255, 255, 255, 0.3);\\n  height: 1rem;\\n  cursor: pointer;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto.tinygoto .numswrapper .nums:hover {\\n    border-bottom: 3px solid white !important;\\n  }\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .nums.currnum {\\n  border-bottom: 3px solid white !important;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .nums.currnum.album {\\n  border-bottom: 3px dotted white !important;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .nums.favorite {\\n  border-bottom: 3px solid #fbbc04;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .nums.over18 {\\n  border-bottom: 3px solid #ea4335;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper p {\\n  display: none;\\n}\\n.wrapper .hero .goto.tinygoto .numswrapper .reload {\\n  grid-column: span 2;\\n}\\n.wrapper .hero .goto .btnwrapper, .wrapper .hero .goto .numswrapper {\\n  display: contents;\\n}\\n.wrapper .hero .goto .btnwrapper .reload {\\n  bottom: -1px;\\n}\\n.wrapper .hero .goto .numswrapper .displayinfo {\\n  grid-column: span 1;\\n  font-size: 0.8rem;\\n  margin-top: 2px;\\n}\\n.wrapper .hero .goto .numswrapper .displayinfo p {\\n  margin: 0;\\n  text-align: center;\\n}\\n.wrapper .hero .goto .btn {\\n  text-align: center;\\n  padding-top: 2px;\\n  color: rgba(255, 255, 255, 0.3);\\n}\\n.wrapper .hero .goto .btn.reload {\\n  cursor: pointer;\\n}\\n.wrapper .hero .goto .btn.reload.loaderror {\\n  color: #ea4335;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto .btn.reload:hover {\\n    color: white;\\n  }\\n}\\n.wrapper .hero .goto .btn.deepsearch {\\n  grid-column: span 4;\\n  bottom: 2px;\\n  cursor: pointer;\\n  justify-self: center;\\n}\\n.wrapper .hero .goto .btn.deepsearch:hover p {\\n  color: white;\\n  border: 1px solid white;\\n}\\n.wrapper .hero .goto .btn.deepsearch p {\\n  margin: 0;\\n  font-size: 0.9rem;\\n  color: #b3b3b3;\\n  border: 1px solid #b3b3b3;\\n  border-radius: 3px;\\n  padding: 0 1rem;\\n}\\n.wrapper .hero .goto .btn.over18wrapper {\\n  cursor: pointer;\\n  grid-column: span 2;\\n  justify-self: center;\\n}\\n.wrapper .hero .goto .btn.over18wrapper.over18 p {\\n  border: 1px solid rgba(255, 255, 255, 0.3);\\n  color: rgba(255, 255, 255, 0.3);\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto .btn.over18wrapper.over18 p:hover {\\n    border: 1px solid rgba(255, 255, 255, 0.6);\\n    color: rgba(255, 255, 255, 0.6);\\n  }\\n}\\n.wrapper .hero .goto .btn.over18wrapper p {\\n  font-size: 0.9rem;\\n  border: 1px solid #ea4335;\\n  border-radius: 3px;\\n  color: #ea4335;\\n  margin: 0;\\n  width: 58px;\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n  position: relative;\\n  top: -1px;\\n}\\n.wrapper .hero .goto .btn.imagevideo {\\n  cursor: pointer;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n  color: white;\\n}\\n.wrapper .hero .goto .btn.layout {\\n  cursor: pointer;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n}\\n.wrapper .hero .goto .btn.layout.active {\\n  color: white;\\n}\\n.wrapper .hero .goto .btn.muted {\\n  cursor: pointer;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n  color: white;\\n}\\n.wrapper .hero .goto .btn.portraitlandscape {\\n  cursor: pointer;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n  color: white;\\n}\\n.wrapper .hero .goto .btn.portraitlandscape :global(.landscape) {\\n  transform: rotate(270deg);\\n}\\n.wrapper .hero .goto .btn.dice {\\n  cursor: pointer;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n  color: white;\\n}\\n.wrapper .hero .goto .btn.download {\\n  cursor: default;\\n  font-size: 1.4rem;\\n  bottom: 2px;\\n}\\n.wrapper .hero .goto .btn.download.dlready {\\n  color: rgba(251, 188, 4, 0.9);\\n  cursor: pointer;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto .btn.download.dlready:hover {\\n    color: #f9ab00;\\n  }\\n}\\n.wrapper .hero .goto .btn.playpause {\\n  cursor: pointer;\\n  top: 1px;\\n}\\n.wrapper .hero .goto .btn.playpause.play {\\n  color: white;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto .btn.playpause:hover {\\n    color: white;\\n  }\\n}\\n.wrapper .hero .goto .btn.filter {\\n  cursor: pointer;\\n  top: 1px;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .goto .btn.filter:hover {\\n    color: white;\\n  }\\n}\\n.wrapper .hero .goto .btn.filter.filter.filterExpanded {\\n  grid-column: span 3;\\n  top: -2px;\\n}\\n.wrapper .hero .goto .btn.filter.filter.filterExpanded input {\\n  width: 85%;\\n  margin-left: 0px;\\n  padding-left: 5px;\\n  padding-right: 5px;\\n  border: 1px solid rgba(255, 255, 255, 0.6);\\n  background-color: rgba(0, 0, 0, 0);\\n  color: white;\\n}\\n.wrapper .hero .goto span {\\n  position: relative;\\n}\\n.wrapper .hero .goto span.favorite p.small {\\n  border-bottom: 3px solid #e37400 !important;\\n  color: #fbbc04;\\n}\\n.wrapper .hero .goto span.favorite img.small {\\n  border-color: #e37400 !important;\\n}\\n.wrapper .hero .goto span.over18 p.small {\\n  color: #ea4335;\\n  border-bottom: 3px solid #ea4335;\\n}\\n.wrapper .hero .goto span.over18 img.small {\\n  border-color: #ea4335;\\n}\\n.wrapper .hero .goto span p.small {\\n  margin: 0 2px;\\n  text-align: center;\\n  cursor: pointer;\\n  border-bottom: 3px solid rgba(0, 0, 0, 0);\\n}\\n.wrapper .hero .goto span p.small.curr {\\n  background-color: rgba(255, 255, 255, 0.2);\\n  border-bottom: 3px solid white !important;\\n}\\n.wrapper .hero .goto span p.small.curr.album {\\n  border-bottom: 3px dashed white !important;\\n}\\n.wrapper .hero .goto span img.small {\\n  z-index: 10;\\n  width: 0px;\\n  opacity: 0;\\n  position: absolute;\\n  bottom: 35px;\\n  border: 2px solid white;\\n  background-color: #4d4d4d;\\n  min-width: 100px;\\n  pointer-events: none;\\n  object-fit: cover;\\n}\\n.wrapper .hero .goto span:hover p.small {\\n  background-color: rgba(255, 255, 255, 0.1);\\n  border-bottom: 3px solid white !important;\\n}\\n.wrapper .hero .goto span:hover img {\\n  width: auto;\\n  height: 100px;\\n  opacity: 1;\\n}\\n.wrapper .hero .subredditsearchwrapper {\\n  height: 100vh;\\n  width: 100vw;\\n  position: absolute;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  z-index: 15;\\n}\\n.wrapper .hero .subredditsearchwrapper .subredditsearch {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  display: grid;\\n}\\n.wrapper .hero .subredditsearchwrapper .subredditsearch .header {\\n  font-size: 20px;\\n  margin-bottom: 12px;\\n  text-align: center;\\n  color: white;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.input-container) {\\n  height: 40px;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.input-container input) {\\n  padding-left: 5px;\\n  padding-right: 5px;\\n  border: 2px solid rgba(255, 255, 255, 0.6);\\n  background-color: rgba(0, 0, 0, 0);\\n  color: white;\\n  border-radius: 3px;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.autocomplete-list) {\\n  max-height: calc(15 * (1rem + 10px) - 15px) !important;\\n  background-color: black;\\n  border: none;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.autocomplete-list .autocomplete-list-item) {\\n  color: white;\\n  background-color: black;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.autocomplete-list .autocomplete-list-item-create) {\\n  color: white;\\n  background-color: black;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.autocomplete-list .autocomplete-list-item.selected) {\\n  background-color: #f9ab0038;\\n}\\n.wrapper .hero .subredditsearchwrapper :global(.autocomplete-list .autocomplete-list-item b) {\\n  color: #f9ab00;\\n}\\n.wrapper .hero .image {\\n  height: 100vh;\\n  width: 100vw;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n.wrapper .hero .video {\\n  height: 100vh;\\n  width: 100vw;\\n  object-fit: contain;\\n}\\n.wrapper .prefetch {\\n  display: none;\\n}\\n@media (max-width: 1000px) {\\n  .wrapper .hero .goto {\\n    padding: 1rem 11rem 1rem 1rem;\\n  }\\n}\\n@media (max-width: 800px) {\\n  .wrapper .hero .goto {\\n    padding: 1rem;\\n  }\\n  .wrapper .hero .goto.tinygoto .nums {\\n    height: 0.1rem !important;\\n  }\\n  .wrapper .hero .goto img.small {\\n    display: none;\\n  }\\n}\\n\\n.tooltip {\\n  position: relative;\\n  z-index: 2;\\n  cursor: pointer;\\n}\\n\\n.ttbefore, .tooltip.bottom:before, .tooltip:before {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-bottom: 5px;\\n  margin-left: -30px;\\n  padding: 5px 4px;\\n  width: max-content;\\n  border-radius: 3px;\\n  background-color: black;\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  color: black;\\n  content: attr(data-tooltip);\\n  text-align: center;\\n  font-size: 0.8rem;\\n  line-height: 1.2;\\n}\\n\\n.ttafter, .tooltip.bottom:after, .tooltip:after {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -5px;\\n  width: 0;\\n  border-top: 5px solid rgba(255, 255, 255, 0.9);\\n  border-right: 5px solid transparent;\\n  border-left: 5px solid transparent;\\n  content: \\\" \\\";\\n  font-size: 0;\\n  line-height: 0;\\n}\\n\\n.tooltip:before, .tooltip:after {\\n  visibility: hidden;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.tooltip.bottom:before {\\n  bottom: -170%;\\n}\\n.tooltip.bottom:after {\\n  bottom: -40%;\\n  border-bottom: 5px solid rgba(255, 255, 255, 0.9);\\n  border-top: 5px solid transparent;\\n}\\n.tooltip:hover:before, .tooltip:hover:after {\\n  visibility: visible;\\n  opacity: 1;\\n}</style>\"],\"names\":[],\"mappings\":\"AA2lCmB,YAAY,8BAAC,CAAC,AAC/B,MAAM,CAAE,IAAI,AACd,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,OAAO,CAAE,IAAI,CAAC,UAAU,AAC1B,CAAC,AAED,QAAQ,8BAAC,CAAC,AACR,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,uBAAQ,CAAC,KAAK,eAAC,CAAC,AACd,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,MAAM,eAAC,CAAC,AACrB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,CAAC,CACN,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,MAAM,CACjB,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,AACpB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,SAAS,eAAC,CAAC,AACxB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,MAAM,CAAC,IAAI,AACtB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,qBAAqB,eAAC,CAAC,AACpC,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,qBAAqB,CAAC,kBAAG,CAAE,uBAAQ,CAAC,KAAK,CAAC,qBAAqB,CAAC,KAAK,eAAC,CAAC,AACpF,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,OAAO,AACrB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,eAAC,CAAC,AACpB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,OAAO,CAAE,IAAI,CAAC,KAAK,CACnB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,CACX,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,AAC7D,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,eAAC,CAAC,AAC7B,kBAAkB,CAAE,IAAI,CAAC,GAAG,CAC5B,qBAAqB,CAAE,GAAG,AAC5B,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,WAAW,eAAC,CAAC,AACzC,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,OAAO,CAAE,IAAI,AACf,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,eAAC,CAAC,AAC1C,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAC3D,iBAAiB,CAAE,WAAW,CAC9B,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,KAAK,eAAC,CAAC,AAChD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACjD,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,AACjB,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,oBAAK,MAAM,AAAC,CAAC,AACtD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,UAAU,AAC3C,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,KAAK,QAAQ,eAAC,CAAC,AACxD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,UAAU,AAC3C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,KAAK,QAAQ,MAAM,eAAC,CAAC,AAC9D,aAAa,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,CAAC,UAAU,AAC5C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,KAAK,SAAS,eAAC,CAAC,AACzD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAClC,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,KAAK,OAAO,eAAC,CAAC,AACvD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAClC,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,CAAC,eAAC,CAAC,AAC5C,OAAO,CAAE,IAAI,AACf,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,YAAY,CAAC,OAAO,eAAC,CAAC,AAClD,WAAW,CAAE,IAAI,CAAC,CAAC,AACrB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,0BAAW,CAAE,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,YAAY,eAAC,CAAC,AACnE,OAAO,CAAE,QAAQ,AACnB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,WAAW,CAAC,OAAO,eAAC,CAAC,AACxC,MAAM,CAAE,IAAI,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,YAAY,CAAC,YAAY,eAAC,CAAC,AAC9C,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,GAAG,AACjB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,YAAY,CAAC,YAAY,CAAC,CAAC,eAAC,CAAC,AAChD,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,eAAC,CAAC,AACzB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AACjC,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,eAAC,CAAC,AAChC,MAAM,CAAE,OAAO,AACjB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,UAAU,eAAC,CAAC,AAC1C,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,sBAAO,MAAM,AAAC,CAAC,AACtC,KAAK,CAAE,KAAK,AACd,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,WAAW,eAAC,CAAC,AACpC,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,OAAO,CACf,YAAY,CAAE,MAAM,AACtB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,WAAW,MAAM,CAAC,CAAC,eAAC,CAAC,AAC5C,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,AACzB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CAAC,eAAC,CAAC,AACtC,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CAAC,IAAI,AACjB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,cAAc,eAAC,CAAC,AACvC,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,YAAY,CAAE,MAAM,AACtB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,cAAc,OAAO,CAAC,CAAC,eAAC,CAAC,AAChD,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AACjC,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,cAAc,OAAO,CAAC,gBAAC,MAAM,AAAC,CAAC,AACtD,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AACjC,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,CAAC,eAAC,CAAC,AACzC,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,kBAAkB,CAAC,CAAC,UAAU,CAC3C,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,AACX,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,WAAW,eAAC,CAAC,AACpC,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AACd,CAAC,AASD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,MAAM,eAAC,CAAC,AAC/B,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,kBAAkB,eAAC,CAAC,AAC3C,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,iCAAkB,CAAC,AAAQ,UAAU,AAAE,CAAC,AAC/D,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,KAAK,eAAC,CAAC,AAC9B,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,KAAK,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,eAAC,CAAC,AAClC,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,AACb,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,QAAQ,eAAC,CAAC,AAC1C,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC7B,MAAM,CAAE,OAAO,AACjB,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,uBAAQ,MAAM,AAAC,CAAC,AAChD,KAAK,CAAE,OAAO,AAChB,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,UAAU,eAAC,CAAC,AACnC,MAAM,CAAE,OAAO,CACf,GAAG,CAAE,GAAG,AACV,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,UAAU,KAAK,eAAC,CAAC,AACxC,KAAK,CAAE,KAAK,AACd,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,yBAAU,MAAM,AAAC,CAAC,AACzC,KAAK,CAAE,KAAK,AACd,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,eAAC,CAAC,AAChC,MAAM,CAAE,OAAO,CACf,GAAG,CAAE,GAAG,AACV,CAAC,AACD,OAAO,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,UAAU,MAAM,CAAC,AAAC,CAAC,AACpC,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,sBAAO,MAAM,AAAC,CAAC,AACtC,KAAK,CAAE,KAAK,AACd,CAAC,AACH,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,OAAO,eAAe,eAAC,CAAC,AACtD,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,GAAG,CAAE,IAAI,AACX,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,OAAO,eAAe,CAAC,KAAK,eAAC,CAAC,AAC5D,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClC,KAAK,CAAE,KAAK,AACd,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,eAAC,CAAC,AACzB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAAC,MAAM,eAAC,CAAC,AAC1C,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,UAAU,CAC3C,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,GAAG,MAAM,eAAC,CAAC,AAC5C,YAAY,CAAE,OAAO,CAAC,UAAU,AAClC,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAAC,MAAM,eAAC,CAAC,AACxC,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAClC,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,GAAG,MAAM,eAAC,CAAC,AAC1C,YAAY,CAAE,OAAO,AACvB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,eAAC,CAAC,AACjC,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC3C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,KAAK,eAAC,CAAC,AACtC,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,UAAU,AAC3C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,KAAK,MAAM,eAAC,CAAC,AAC5C,aAAa,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,CAAC,UAAU,AAC5C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,GAAG,MAAM,eAAC,CAAC,AACnC,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,OAAO,CACzB,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,MAAM,CAAC,CAAC,MAAM,eAAC,CAAC,AACvC,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,UAAU,AAC3C,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,MAAM,CAAC,GAAG,eAAC,CAAC,AACnC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,AACZ,CAAC,AA0DD,uBAAQ,CAAC,KAAK,CAAC,MAAM,eAAC,CAAC,AACrB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,OAAO,AACrB,CAAC,AAID,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,uBAAQ,CAAC,KAAK,CAAC,KAAK,eAAC,CAAC,AACpB,OAAO,CAAE,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,AAC/B,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,uBAAQ,CAAC,KAAK,CAAC,KAAK,eAAC,CAAC,AACpB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,SAAS,CAAC,KAAK,eAAC,CAAC,AACnC,MAAM,CAAE,MAAM,CAAC,UAAU,AAC3B,CAAC,AACD,uBAAQ,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,MAAM,eAAC,CAAC,AAC9B,OAAO,CAAE,IAAI,AACf,CAAC,AACH,CAAC,AAED,QAAQ,8BAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OAAO,AACjB,CAAC,AAEU,QAAQ,qCAAO,OAAO,CAAE,sCAAQ,OAAO,AAAC,CAAC,AAClD,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,WAAW,CAClB,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,KAAK,YAAY,CAAC,CAC3B,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC,AAES,QAAQ,qCAAO,MAAM,CAAE,sCAAQ,MAAM,AAAC,CAAC,AAC/C,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9C,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACnC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAClC,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,CAAC,CACZ,WAAW,CAAE,CAAC,AAChB,CAAC,AAED,sCAAQ,OAAO,CAAE,sCAAQ,MAAM,AAAC,CAAC,AAC/B,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,AACtB,CAAC,AACD,QAAQ,qCAAO,OAAO,AAAC,CAAC,AACtB,MAAM,CAAE,KAAK,AACf,CAAC,AACD,QAAQ,qCAAO,MAAM,AAAC,CAAC,AACrB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACjD,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,AACnC,CAAC,AACD,sCAAQ,MAAM,OAAO,CAAE,sCAAQ,MAAM,MAAM,AAAC,CAAC,AAC3C,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,CAAC,AACZ,CAAC\"}"
};

function uniqBy(a, key) {
	var seen = {};

	return a.filter(function (item) {
		var k = key(item);
		return seen.hasOwnProperty(k) ? false : seen[k] = true;
	});
}

const FullscreenLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let loadError;
	let $autoplay, $$unsubscribe_autoplay;
	let $favorite, $$unsubscribe_favorite;
	let $over18, $$unsubscribe_over18;
	let $portraitLandscape, $$unsubscribe_portraitLandscape;
	let $imageVideo, $$unsubscribe_imageVideo;
	let $prefetchNum, $$unsubscribe_prefetchNum;
	let $muted, $$unsubscribe_muted;
	let $autoplayinterval, $$unsubscribe_autoplayinterval;
	let $gotoElWidth, $$unsubscribe_gotoElWidth;
	let $lores, $$unsubscribe_lores;
	let $$unsubscribe__gotoElWidth;
	let $prefetch, $$unsubscribe_prefetch;
	let $hires, $$unsubscribe_hires;
	$$unsubscribe_autoplay = subscribe(autoplay, value => $autoplay = value);
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	$$unsubscribe_over18 = subscribe(over18, value => $over18 = value);
	$$unsubscribe_portraitLandscape = subscribe(portraitLandscape, value => $portraitLandscape = value);
	$$unsubscribe_imageVideo = subscribe(imageVideo, value => $imageVideo = value);
	$$unsubscribe_prefetchNum = subscribe(prefetchNum, value => $prefetchNum = value);
	$$unsubscribe_muted = subscribe(muted, value => $muted = value);
	$$unsubscribe_autoplayinterval = subscribe(autoplayinterval, value => $autoplayinterval = value);
	$$unsubscribe_lores = subscribe(lores, value => $lores = value);
	$$unsubscribe_prefetch = subscribe(prefetch, value => $prefetch = value);
	$$unsubscribe_hires = subscribe(hires, value => $hires = value);
	autoplay.useLocalStorage(false);
	autoplayinterval.useLocalStorage(3);
	imageVideo.useLocalStorage(0);
	portraitLandscape.useLocalStorage(0);
	favorite.useLocalStorage({});
	over18.useLocalStorage(1);
	multireddit.useLocalStorage({});
	prefetch.useLocalStorage(true);
	prefetchNum.useLocalStorage(50);
	hires.useLocalStorage(false);
	lores.useLocalStorage(true);
	oldreddit.useLocalStorage(false);
	muted.useLocalStorage(true);
	layout.useLocalStorage(0);
	let { params, slugstr } = $$props;
	let { posts } = $$props;
	let { after } = $$props;
	let { res } = $$props;
	let { mode = "tumblr" } = $$props;
	console.log("Posts from API:", posts);
	let displayposts = [];
	console.log("Display Posts (initial):", displayposts);
	let numFavorite;
	let tinygoto;
	let title;
	let albumindex = 0;
	let blogIdentifier;

	// 1440 is to set numCols to 3. Setting to `0` would mean we start with 1 col, and then quickly update to 3 on desktop.
	const _gotoElWidth = writable(1440);

	$$unsubscribe__gotoElWidth = subscribe(_gotoElWidth, value => value);
	const gotoElWidth = _gotoElWidth.pipe(throttle(500), startWith(1440));
	$$unsubscribe_gotoElWidth = subscribe(gotoElWidth, value => $gotoElWidth = value);
	let loading = false;
	let reloadstr = "Load more";
	let imageVideoStr = "";
	let portraitLandscapeStr = "";
	let downloadstr = "";
	let autoplaystr = "";
	let over18str = "";
	let mutedstr = "Sound Off";
	let autoplaytimer;
	let filterRef;
	let filterValue = "";
	let showSettings = false;
	let currpost = { title: "Loading .." };
	let nexturls = [];
	let index = 0;

	async function loadMore() {
		if (!after) return;
		loading = true;
		reloadstr = "Loading ..";
		let newposts;

		if (mode === "tumblr") {
			({ posts: newposts, after, ...res } = await get_tumblr_posts(`https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF&offset=${after}&${queryp(params)}`));
		}

		console.log("API Response (res object):", res);
		console.log(posts);

		// load `favorite` from localstorage
		for (let p of newposts) {
			p["favorite"] = !!($favorite || {})[p.url]?.favorite;
		}

		// Combine `posts` and `newposts` and remove duplicates from multiple network requests
		posts = [...posts, ...newposts].reduce((r, i) => !r.some(j => i.id === j.id) ? [...r, i] : r, []);

		console.log("Before dedupe: ", posts.length);

		// Remove duplicates, based on `url`
		posts = posts.filter((v, i, a) => a.findIndex(t => t.url == v.url) === i);

		console.log("After dedupe/Total loaded: ", posts.length);
		loading = false;
		reloadstr = "Load more";
	}

	onMount(async () => {
		console.log("Posts on mount:", posts);
		console.log("Display Posts on mount:", displayposts);
		loadMore(); // Call loadMore on mount

		// Start autoplay by default
		if ($autoplay) {
			startAutoPlay();
		}
	});

	function startAutoPlay() {
		//console.log('START')
		autoplaytimer = setInterval(
			() => {
				// If `autoplay` is off and it is a video, the video will progress by itself via on:ended
				if ($autoplay && currpost.is_image) {
					//console.log('---- iNEXT')
					next();
				} else if (!$autoplay && currpost.is_video) {
					//console.log('---- vNEXT')
					next();
				}
			},
			$autoplayinterval * 1000
		);

		autoplay.set(true);
	}

	async function next() {
		if (currpost.is_album && !isEndOfAlbum()) {
			albumNext();
		} else {
			itemNext();
			await tick(); // Ensure currpost is updated
		}
	}

	function stopAutoPlay() {
		//console.log('STOP')
		clearInterval(autoplaytimer);

		autoplay.set(false);
	}

	function stopAndStartAutoPlay() {
		stopAutoPlay();
		startAutoPlay();
	}

	let renderVideo = true;

	// Some operations like fav/unfav causes video to re-render
	// since we're changing post.favorite. This should help skip it
	let skipRenderVideo = false;

	function reMountVideo() {
		renderVideo = false;
		setTimeout(() => renderVideo = true, 0);
	}

	function itemNext() {
		albumindex = 0; // Always reset album index to 0 when moving to a new post
		let itemNum = displayposts.length - 1 - index;

		// Last item, dont go past the last item
		if (itemNum <= 1) {
			index = displayposts.length - 1;
			console.log("[lastitem, autoplay+filter?]: loading more ..");

			// Reached last item, possibly by autoplay + filter
			loadMore();

			return;
		}

		// Auto trigger on the last 4th item
		if (itemNum === 4 || itemNum === 3) {
			console.log("[4th last item, normal]: loading more ..");
			loadMore();
		}

		// If we're at 3rd/2nd last item with a filter, the user
		// possibly just filtered the list and ended up here.
		// trigger a load more. We dont want to do it always since
		// we normally trigger loadmore @3rd last item. Always doing it
		// Would end up with 2 requests to reddit.com
		if (itemNum === 2 && filterValue) {
			console.log("[2nd last item, filtering?]: loading more ..");
			loadMore();
		}

		index += 1;
		if ($autoplay) stopAndStartAutoPlay();
	}

	function isEndOfAlbum() {
		return albumindex == currpost.preview.img.album.length - 1;
	}

	function albumNext() {
		if (!currpost.is_album) return;

		if (isEndOfAlbum()) {
			albumindex = 0;
		} else {
			albumindex += 1;
		}

		if ($autoplay) stopAndStartAutoPlay();
	}

	if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
	if ($$props.slugstr === void 0 && $$bindings.slugstr && slugstr !== void 0) $$bindings.slugstr(slugstr);
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
	if ($$props.res === void 0 && $$bindings.res && res !== void 0) $$bindings.res(res);
	if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0) $$bindings.mode(mode);
	$$result.css.add(css$3);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		{
			{
				let tmp = [];

				if ($over18 == 0) {
					tmp = posts.filter(item => item.over18 == false);
				} else if ($over18 == 1) {
					tmp = posts;
				} else if ($over18 == 2) {
					tmp = posts.filter(item => item.over18 == true);
				}

				// Filter only videos
				if ($imageVideo == 1) {
					tmp = tmp.filter(item => item.is_video);
				} else // Filter only images
				if ($imageVideo == 2) {
					tmp = tmp.filter(item => item.is_image);
				}

				if ($portraitLandscape == 1) {
					tmp = tmp.filter(item => item.dims.width / item.dims.height <= 1.2);
				} else if ($portraitLandscape == 2) {
					tmp = tmp.filter(item => item.dims.width / item.dims.height > 1.2);
				}

				displayposts = tmp;
			}
		}

		{
			{
				if (displayposts[index]) {
					currpost = JSON.parse(JSON.stringify(displayposts[index]));
					let _nexturls = [];
					_nexturls = [currpost, ...displayposts.slice(index + 1, index + $prefetchNum + 1)];

					nexturls = _nexturls.map(function (item) {
						if (item.is_album) {
							return item.preview.img.album.slice(albumindex, albumindex + $prefetchNum + 1);
						} else {
							return item;
						}
					}).flat();

					console.log(nexturls);
					nexturls = uniqBy(nexturls, () => item => item.preview.img.default);
				} else {
					if (res && res.res.ok) {
						// No media found
						currpost = {
							title: "Nothing to show. Try changing filters or tweak/update URL."
						};
					} else if (res && !res.res.ok) {
						// Invalid subreddit
						currpost = { title: "Error" };
					} else {
						// Default
						currpost = { title: "Loading .." };
					}

					nexturls = [];
				}
			}
		}

		{
			{
				if (currpost.is_album) {
					title = `(${albumindex + 1}/${currpost.preview.img.album.length}) ${currpost.title}`;
				} else {
					title = currpost.title;
				}
			}
		}

		blogIdentifier = slugstr;

		{
			{
				if ($gotoElWidth > 1000) {
					// padding on both sides
					let numGotoControlsInOneRow = ($gotoElWidth - 154 * 2) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					tinygoto = numGotoControlsRows > 3;
				} else if ($gotoElWidth > 800) {
					// padding on right side
					let numGotoControlsInOneRow = ($gotoElWidth - (154 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					tinygoto = numGotoControlsRows > 3;
				} else {
					// no padding
					let numGotoControlsInOneRow = ($gotoElWidth - (14 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					tinygoto = numGotoControlsRows > 3;
				}
			}
		}

		loadError = res && !res.res.ok;

		{
			{
				if (!skipRenderVideo) reMountVideo(currpost.preview);
				skipRenderVideo = false;
			}
		}

		{
			{
				numFavorite = displayposts.filter(item => item.favorite == true).length;

				if (!numFavorite) {
					downloadstr = `Nothing to download`;
				} else if (numFavorite == 1) {
					downloadstr = `Download ${numFavorite} file`;
				} else {
					downloadstr = `Download ${numFavorite} files`;
				}

				autoplaystr = `Autoplay is ${$autoplay ? "on" : "off"}`;
				mutedstr = `Sound ${$muted ? "off" : "on"}`;

				if ($over18 == 0) {
					over18str = "nsfw off";
				} else if ($over18 == 1) {
					over18str = "nsfw on";
				} else if ($over18 == 2) {
					over18str = "nsfw only";
				}

				if ($imageVideo == 0) {
					imageVideoStr = "Show both image and video";
				} else if ($imageVideo == 1) {
					imageVideoStr = "Show videos only";
				} else if ($imageVideo == 2) {
					imageVideoStr = "Show images only";
				}

				if ($portraitLandscape == 0) {
					portraitLandscapeStr = "Show all media";
				} else if ($portraitLandscape == 1) {
					portraitLandscapeStr = "Show only portrait media";
				} else if ($portraitLandscape == 2) {
					portraitLandscapeStr = "Show only landscape media";
				}
			}
		}

		$$rendered = `
${($$result.head += `${($$result.title = `<title>tumblrpx - ${escape(slugstr ? `t/${slugstr}` : "tumblr.com")}</title>`, "")}`, "")}

<div class="${["wrapper svelte-1a8m49b", "hide-cursor" ].join(' ').trim()}"><div class="${"hero svelte-1a8m49b"}"><div class="${[
			"title svelte-1a8m49b",
			("hide" ) + ' ' + (currpost.favorite ? "favorite" : "")
		].join(' ').trim()}">${displayposts.length
		? `<span class="${"fav svelte-1a8m49b"}">${validate_component(Icon, "Icon").$$render(
				$$result,
				{
					icon: currpost.favorite ? faStar$3.faStar : faStar$1.faStar
				},
				{},
				{}
			)}</span>`
		: ``}
      ${currpost.dims
		? `${escape(title)} (${escape(currpost.dims.width)}x${escape(currpost.dims.height)})`
		: `${escape(title)}`}
      ${currpost.subreddit
		? `<div class="${"subreddit"}"><p class="${"subredditp svelte-1a8m49b"}">${escape(currpost.subredditp)}</p>
          <p class="${"user svelte-1a8m49b"}">${escape(currpost.authorp)}</p></div>`
		: ``}</div>
    <div class="${"settings svelte-1a8m49b"}"><a class="${["donate svelte-1a8m49b", currpost.favorite == false ? "hide" : ""].join(' ').trim()}" href="${"https://ko-fi.com/redditpx"}" target="${"_blank"}"><span class="${"btn tooltip bottom donate svelte-1a8m49b"}" data-tooltip="${"Donate"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faDonate$1.faDonate }, {}, {})}</span></a>
      <a class="${["home svelte-1a8m49b", "hide" ].join(' ').trim()}" rel="${"prefetch"}" href="${"/home"}"><span class="${"btn tooltip bottom svelte-1a8m49b"}" data-tooltip="${"Home"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faHome$1.faHome }, {}, {})}</span></a>
      <span class="${[
			"btn cog svelte-1a8m49b",
			(showSettings ? "showSettings" : "") + ' ' + ("hide" )
		].join(' ').trim()}">${validate_component(Icon, "Icon").$$render($$result, { icon: faCog$1.faCog }, {}, {})}</span>
      <div class="${["div svelte-1a8m49b", "hide" ].join(' ').trim()}">${validate_component(Settings, "Settings").$$render(
			$$result,
			{ showSettings },
			{
				showSettings: $$value => {
					showSettings = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div></div>
    <div class="${"main-media-container svelte-1a8m49b"}">${currpost.is_image && !currpost.is_album
		? `<img${add_attribute("src", currpost.preview.img.default, 0)}${add_attribute("alt", currpost.title, 0)} style="${"max-width: 100%; max-height: 100vh; object-fit: contain;"}" class="${"svelte-1a8m49b"}">`
		: `${currpost.is_video && renderVideo
			? `<video class="${["video svelte-1a8m49b", "hide-cursor" ].join(' ').trim()}" autoplay ${!$autoplay ? "loop" : ""} playsinline ${$muted ? "muted" : ""} id="${"videoplayerid"}">${$lores
				? `<source${add_attribute("src", currpost.preview.vid.lores, 0)}>`
				: `${currpost.preview.vid.webm
					? `<source${add_attribute("src", currpost.preview.vid.webm, 0)}>`
					: ``}
            ${currpost.preview.vid.mp4
					? `<source${add_attribute("src", currpost.preview.vid.mp4, 0)}>`
					: ``}`}</video>`
			: `${currpost.is_album
				? `${currpost.preview.img.album[albumindex].is_video
					? `<video class="${["video svelte-1a8m49b", "hide-cursor" ].join(' ').trim()}" autoplay ${!$autoplay ? "loop" : ""} playsinline ${$muted ? "muted" : ""}><source${add_attribute("src", currpost.preview.img.album[albumindex].hires, 0)}></video>`
					: `<img${add_attribute("src", currpost.preview.img.album[albumindex].default, 0)}${add_attribute("alt", currpost.title, 0)} style="${"max-width: 100%; max-height: 100vh; object-fit: contain;"}" class="${"svelte-1a8m49b"}">`}`
				: ``}`}`}</div>
    
    ${displayposts.length || posts.length
		? `<div class="${[
				"goto svelte-1a8m49b",
				(tinygoto ? "tinygoto" : "") + ' ' + ("hide" )
			].join(' ').trim()}"><div class="${"btnwrapper svelte-1a8m49b"}"><span class="${["btn playpause tooltip svelte-1a8m49b", $autoplay ? "play" : ""].join(' ').trim()}"${add_attribute("data-tooltip", autoplaystr, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon: $autoplay ? faPause$1.faPause : faPlay$1.faPlay }, {}, {})}</span>
          <span class="${["btn download tooltip svelte-1a8m49b", numFavorite ? "dlready" : ""].join(' ').trim()}"${add_attribute("data-tooltip", downloadstr, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon: faCloudDownloadAlt$1.faCloudDownloadAlt }, {}, {})}</span>
          <span class="${"btn dice tooltip svelte-1a8m49b"}" data-tooltip="${"Shuffle"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faDice$1.faDice }, {}, {})}</span>
          <span class="${[
				"btn portraitlandscape tooltip svelte-1a8m49b",
				$portraitLandscape ? "active" : ""
			].join(' ').trim()}"${add_attribute("data-tooltip", portraitLandscapeStr, 0)}>${$portraitLandscape == 0
			? `${validate_component(Icon, "Icon").$$render($$result, { icon: faDesktop$1.faDesktop }, {}, {})}`
			: `${$portraitLandscape == 1
				? `${validate_component(Icon, "Icon").$$render($$result, { icon: faMobileAlt$1.faMobileAlt }, {}, {})}`
				: `${$portraitLandscape == 2
					? `${validate_component(Icon, "Icon").$$render($$result, { class: "landscape", icon: faMobileAlt$1.faMobileAlt }, {}, {})}`
					: ``}`}`}</span>
          <span class="${"btn imagevideo tooltip svelte-1a8m49b"}"${add_attribute("data-tooltip", imageVideoStr, 0)}>${$imageVideo == 0
			? `${validate_component(Icon, "Icon").$$render($$result, { icon: faPhotoVideo$1.faPhotoVideo }, {}, {})}`
			: `${$imageVideo == 1
				? `${validate_component(Icon, "Icon").$$render($$result, { icon: faVideo$1.faVideo }, {}, {})}`
				: `${$imageVideo == 2
					? `${validate_component(Icon, "Icon").$$render($$result, { icon: faImage$1.faImage }, {}, {})}`
					: ``}`}`}</span>
          <span class="${"btn muted tooltip svelte-1a8m49b"}"${add_attribute("data-tooltip", mutedstr, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon: $muted ? faVolumeMute$1.faVolumeMute : faVolumeUp$1.faVolumeUp }, {}, {})}</span>
          ${tinygoto
			? `<span class="${["btn reload tooltip svelte-1a8m49b", loadError ? "loaderror" : ""].join(' ').trim()}"${add_attribute("data-tooltip", reloadstr, 0)}>${loading
				? `${validate_component(Icon, "Icon").$$render($$result, { icon: faSpinner$1.faSpinner }, {}, {})}`
				: `${validate_component(Icon, "Icon").$$render($$result, { icon: faSync$1.faSync }, {}, {})}`}</span>`
			: ``}
          <span class="${["btn over18wrapper tooltip svelte-1a8m49b", !$over18 ? "over18" : ""].join(' ').trim()}"${add_attribute("data-tooltip", over18str, 0)}><p class="${"svelte-1a8m49b"}">${escape(over18str)}</p></span>
          <span class="${[
				"btn filter tooltip svelte-1a8m49b",
				("") + ' ' + (numFavorite ? "dlready" : "")
			].join(' ').trim()}" data-tooltip="${"Filter ( / )"}"${add_attribute("this", filterRef, 0)}>${`${validate_component(Icon, "Icon").$$render($$result, { icon: faSearch$1.faSearch }, {}, {})}`}</span>
          ${``}</div>
        <div class="${"numswrapper svelte-1a8m49b"}">${each(displayposts, (post, i) => {
				return `<span class="${[
					"nums svelte-1a8m49b",
					(index === i ? "currnum" : "") + ' ' + (currpost.is_album ? "album" : "") + ' ' + (displayposts[i].favorite ? "favorite" : "") + ' ' + (displayposts[i].over18 ? "over18" : "")
				].join(' ').trim()}"><img class="${"small svelte-1a8m49b"}"${add_attribute("alt", displayposts[i].title, 0)}${add_attribute("src", displayposts[i].thumbnail, 0)}>
              <p class="${[
					"small svelte-1a8m49b",
					(index === i ? "curr" : "") + ' ' + (currpost.is_album ? "album" : "")
				].join(' ').trim()}">${escape(i + 1)}</p>
            </span>`;
			})}
          ${!tinygoto
			? `<span class="${["displayinfo svelte-1a8m49b", ""].join(' ').trim()}"><p class="${"svelte-1a8m49b"}">${escape(displayposts.length)}/${escape(posts.length)}</p></span>
            <span class="${["btn reload tooltip svelte-1a8m49b", loadError ? "loaderror" : ""].join(' ').trim()}"${add_attribute("data-tooltip", reloadstr, 0)}>${loading
				? `${validate_component(Icon, "Icon").$$render($$result, { icon: faSpinner$1.faSpinner }, {}, {})}`
				: `${validate_component(Icon, "Icon").$$render($$result, { icon: faSync$1.faSync }, {}, {})}`}</span>`
			: ``}</div></div>`
		: ``}</div></div>
${$prefetch
		? `<div class="${"prefetch"}">${each(nexturls, nexturl => {
				return `${$hires
				? `${nexturl.is_album
					? `<img alt="${"prefetch-hires"}"${add_attribute("src", nexturl.preview.img.album[0].hires, 0)}>`
					: `<img alt="${"prefetch-hires"}"${add_attribute("src", nexturl.url, 0)}>`}`
				: `${nexturl.is_album
					? `<img alt="${"prefetch"}"${add_attribute("src", nexturl.preview.img.album[0].default, 0)}>`
					: `${nexturl.preview
						? `<img alt="${"prefetch"}"${add_attribute("src", nexturl.preview.img.default, 0)}>`
						: `<img alt="${"prefetch"}"${add_attribute("src", nexturl.default, 0)}>`}`}`}
      ${nexturl.is_video
				? `<video playsinline autoplay loop muted>${$lores
					? `<source${add_attribute("src", nexturl.preview.vid.lores, 0)}>`
					: `${nexturl.preview
						? `${nexturl.preview.vid.webm
							? `<source${add_attribute("src", nexturl.preview.vid.webm, 0)}>`
							: ``}
              ${nexturl.preview.vid.mp4
							? `<source${add_attribute("src", nexturl.preview.vid.mp4, 0)}>`
							: ``}`
						: `<source${add_attribute("src", nexturl.default, 0)}>`}`}</video>`
				: ``}`;
			})}</div>`
		: ``}`;
	} while (!$$settled);

	$$unsubscribe_autoplay();
	$$unsubscribe_favorite();
	$$unsubscribe_over18();
	$$unsubscribe_portraitLandscape();
	$$unsubscribe_imageVideo();
	$$unsubscribe_prefetchNum();
	$$unsubscribe_muted();
	$$unsubscribe_autoplayinterval();
	$$unsubscribe_gotoElWidth();
	$$unsubscribe_lores();
	$$unsubscribe__gotoElWidth();
	$$unsubscribe_prefetch();
	$$unsubscribe_hires();
	return $$rendered;
});

/* src/routes/index.svelte generated by Svelte v3.46.2 */

async function preload$2({ path, params, query }) {
	if (typeof window === "undefined") return;
	let slugstr = "cheezbot";
	let { posts, res, after } = await get_tumblr_posts(`https://api.tumblr.com/v2/blog/${slugstr}/posts?api_key=ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF&${queryp(query)}`);
	return { posts, after, res, slugstr };
}

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $favorite, $$unsubscribe_favorite;
	let $layout, $$unsubscribe_layout;
	let $page, $$unsubscribe_page;
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	$$unsubscribe_layout = subscribe(layout, value => $layout = value);
	const { page } = stores$1();
	$$unsubscribe_page = subscribe(page, value => $page = value);
	favorite.useLocalStorage({});
	layout.useLocalStorage(0);
	let { posts = [] } = $$props;
	let { res } = $$props;
	let { after } = $$props;
	let { slugstr } = $$props;

	// Load `favorite` from localstorage
	for (let p of posts) {
		p["favorite"] = !!$favorite[p.url]?.favorite;
	}

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.res === void 0 && $$bindings.res && res !== void 0) $$bindings.res(res);
	if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
	if ($$props.slugstr === void 0 && $$bindings.slugstr && slugstr !== void 0) $$bindings.slugstr(slugstr);
	$$unsubscribe_favorite();
	$$unsubscribe_layout();
	$$unsubscribe_page();

	return `${$layout == 0
	? `${validate_component(FullscreenLayout, "FullscreenLayout").$$render(
			$$result,
			{
				slugstr,
				posts,
				res,
				after,
				params: $page.query
			},
			{},
			{}
		)}`
	: ``}`;
});

var component_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Routes,
    preload: preload$2
});

/* src/routes/download.svelte generated by Svelte v3.46.2 */

const css$2 = {
	code: ".wrapper.svelte-scsxcb.svelte-scsxcb{height:100vh;display:grid;justify-items:center;align-items:center}.wrapper.svelte-scsxcb .hero.svelte-scsxcb{height:100vh;width:100%;display:grid;justify-items:center;align-items:center;grid-auto-rows:max-content;grid-row-gap:3rem;padding-top:5rem}.wrapper.svelte-scsxcb .hero .settings.svelte-scsxcb{z-index:10;position:absolute;top:0;right:0;color:#fafafa;font-size:1rem;padding:1.5rem}.wrapper.svelte-scsxcb .hero .settings .home.svelte-scsxcb{margin-right:7px}.wrapper.svelte-scsxcb .hero .settings .btn.svelte-scsxcb{user-select:none;cursor:pointer;color:rgba(255, 255, 255, 0.8)}.wrapper.svelte-scsxcb .hero .settings .btn.showSettings.svelte-scsxcb{color:white}@media not all and (pointer: coarse){.wrapper.svelte-scsxcb .hero .settings .btn.svelte-scsxcb:hover{color:white}}.wrapper.svelte-scsxcb .hero .title.svelte-scsxcb{z-index:10;position:absolute;top:0;background-color:rgba(0, 0, 0, 0.4);color:#fafafa;font-size:1.5rem;padding:1rem;border-radius:3px;cursor:pointer}@media not all and (pointer: coarse){.wrapper.svelte-scsxcb .hero .title.svelte-scsxcb:hover{background-color:rgba(0, 0, 0, 0.8)}}.wrapper.svelte-scsxcb .hero .title .logo.svelte-scsxcb{user-select:none;cursor:pointer;top:5px;position:relative;margin-right:9px}.wrapper.svelte-scsxcb .hero .title .logo img.svelte-scsxcb{height:2rem}.wrapper.svelte-scsxcb .hero .title.svelte-scsxcb svg{margin-right:10px;top:3px;position:relative}.wrapper.svelte-scsxcb .hero .title .subtitle.svelte-scsxcb{margin-top:1rem;font-size:1rem;color:#e1e1e1}.wrapper.svelte-scsxcb .hero .title .subtitle p.sub.svelte-scsxcb{margin:0}.wrapper.svelte-scsxcb .hero .title .filter span.svelte-scsxcb{font-size:1rem;margin-right:10px}.wrapper.svelte-scsxcb .hero .title .filter input.svelte-scsxcb{padding-left:5px;padding-right:5px;border:1px solid rgba(255, 255, 255, 0.6);background-color:rgba(0, 0, 0, 0);color:white;height:1.5rem}.wrapper.svelte-scsxcb .hero .imgwrapper.svelte-scsxcb{display:grid;grid-gap:2rem;justify-content:center;align-content:center}.wrapper.svelte-scsxcb .hero .imgwrapper .media.svelte-scsxcb{justify-self:center}.wrapper.svelte-scsxcb .hero .imgwrapper .media img.svelte-scsxcb{max-width:100%}.wrapper.svelte-scsxcb .hero .imgwrapper .media video.svelte-scsxcb{max-width:100%}.tooltip.svelte-scsxcb.svelte-scsxcb{position:relative;z-index:2;cursor:pointer}.tooltip.svelte-scsxcb.svelte-scsxcb:before,.tooltip.svelte-scsxcb.svelte-scsxcb:after{visibility:hidden;opacity:0;pointer-events:none}.tooltip.svelte-scsxcb.svelte-scsxcb:before{position:absolute;bottom:120%;left:50%;margin-bottom:5px;margin-left:-30px;padding:5px 4px;width:60px;border-radius:3px;background-color:black;color:#fff;background-color:rgba(255, 255, 255, 0.9);color:black;content:attr(data-tooltip);text-align:center;font-size:0.8rem;line-height:1.2}.tooltip.svelte-scsxcb.svelte-scsxcb:after{position:absolute;bottom:120%;left:50%;margin-left:-5px;width:0;border-top:5px solid #000;border-top:5px solid rgba(51, 51, 51, 0.9);border-right:5px solid transparent;border-left:5px solid transparent;content:\" \";font-size:0;line-height:0}.tooltip.svelte-scsxcb.svelte-scsxcb:hover:before,.tooltip.svelte-scsxcb.svelte-scsxcb:hover:after{visibility:visible;opacity:1}",
	map: "{\"version\":3,\"file\":\"download.svelte\",\"sources\":[\"download.svelte\"],\"sourcesContent\":[\"<script>\\n  import Icon from \\\"fa-svelte/src/Icon.svelte\\\";\\n  import { faCloudDownloadAlt as faDownload } from \\\"@fortawesome/free-solid-svg-icons/faCloudDownloadAlt\\\";\\n  import { faCog as faSettings } from \\\"@fortawesome/free-solid-svg-icons/faCog\\\";\\n  import { faHome } from \\\"@fortawesome/free-solid-svg-icons/faHome\\\";\\n\\n  import Settings from \\\"../components/Settings.svelte\\\";\\n\\n  import { favorite } from \\\"../_prefs\\\";\\n  favorite.useLocalStorage({});\\n\\n  let filterValue;\\n  let displayposts;\\n\\n  let showSettings = false;\\n\\n  function toggleSettings() {\\n    showSettings = !showSettings;\\n  }\\n\\n  $: {\\n    let tmp;\\n    if (filterValue) {\\n      tmp = Object.entries($favorite).filter((item) => {\\n        let details = item[1];\\n\\n        // poor mans search\\n        // Find all the `values`, make a giant string and substring match\\n        return Object.values(details).join(\\\" \\\").includes(filterValue);\\n      });\\n      displayposts = tmp;\\n    } else {\\n      displayposts = $favorite ? Object.entries($favorite) : [];\\n    }\\n  }\\n</script>\\n\\n<svelte:head>\\n  <title>tumblrpx - download</title>\\n</svelte:head>\\n\\n<div class=\\\"wrapper\\\"><div class=\\\"hero\\\"><div class=\\\"title\\\"><span class=\\\"logo\\\"><img alt=\\\"tumblrpx logo\\\" src=\\\"logo-192.png\\\"></span>tumblrpx download {$favorite ? `(${Object.keys($favorite).length} items)` : '' }<div class=\\\"subtitle\\\"><p class=\\\"sub\\\">Right click on the page (not on any image) > Save as > Select \\\"Webpage, Complete\\\".</p><p class=\\\"sub\\\">Alternatively, hit Ctrl+S > Select \\\"Webpage, Complete\\\"</p></div><div class=\\\"filter\\\"><span>Filter ({displayposts.length})</span><input bind:value=\\\"{filterValue}\\\" type=\\\"text\\\"></div></div><div class=\\\"settings\\\"><a class=\\\"home\\\" rel=\\\"prefetch\\\" href=\\\"/home\\\"><span class=\\\"btn tooltip\\\" data-tooltip=\\\"Home\\\"><Icon icon=\\\"{faHome}\\\"></Icon></span></a><span class=\\\"btn\\\" on:click=\\\"{toggleSettings}\\\" class:showSettings=\\\"{showSettings}\\\"><Icon icon=\\\"{faSettings}\\\"></Icon></span><Settings {showSettings}></Settings></div><div class=\\\"imgwrapper\\\">{#each displayposts as [url, post]}{#if post.is_album}{#each post.preview.img.album as album}{#if album.is_image}<div class=\\\"media\\\"><img alt=\\\"image\\\" src=\\\"{album.hires}\\\"></div>{:else}<div class=\\\"media\\\"><video autoplay loop playsinline muted><source src=\\\"{album.hires}\\\"></video></div>{/if}{/each}{:else if post.is_image}<div class=\\\"media\\\"><img alt=\\\"image\\\" src=\\\"{url}\\\"></div>{:else if post.is_video}<div class=\\\"media\\\"><video autoplay loop playsinline muted>{#if post.preview.vid.webm}<source src=\\\"{post.preview.vid.webm}\\\">{/if}{#if post.preview.vid.mp4}<source src=\\\"{post.preview.vid.mp4}\\\">{/if}</video></div>{/if}{/each}</div></div></div>\\n\\n<style lang=\\\"sass\\\">.wrapper {\\n  height: 100vh;\\n  display: grid;\\n  justify-items: center;\\n  align-items: center;\\n}\\n.wrapper .hero {\\n  height: 100vh;\\n  width: 100%;\\n  display: grid;\\n  justify-items: center;\\n  align-items: center;\\n  grid-auto-rows: max-content;\\n  grid-row-gap: 3rem;\\n  padding-top: 5rem;\\n}\\n.wrapper .hero .settings {\\n  z-index: 10;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  color: #fafafa;\\n  font-size: 1rem;\\n  padding: 1.5rem;\\n}\\n.wrapper .hero .settings .home {\\n  margin-right: 7px;\\n}\\n.wrapper .hero .settings .btn {\\n  user-select: none;\\n  cursor: pointer;\\n  color: rgba(255, 255, 255, 0.8);\\n}\\n.wrapper .hero .settings .btn.showSettings {\\n  color: white;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .settings .btn:hover {\\n    color: white;\\n  }\\n}\\n.wrapper .hero .title {\\n  z-index: 10;\\n  position: absolute;\\n  top: 0;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  color: #fafafa;\\n  font-size: 1.5rem;\\n  padding: 1rem;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .title:hover {\\n    background-color: rgba(0, 0, 0, 0.8);\\n  }\\n}\\n.wrapper .hero .title .logo {\\n  user-select: none;\\n  cursor: pointer;\\n  top: 5px;\\n  position: relative;\\n  margin-right: 9px;\\n}\\n.wrapper .hero .title .logo img {\\n  height: 2rem;\\n}\\n.wrapper .hero .title :global(svg) {\\n  margin-right: 10px;\\n  top: 3px;\\n  position: relative;\\n}\\n.wrapper .hero .title .subtitle {\\n  margin-top: 1rem;\\n  font-size: 1rem;\\n  color: #e1e1e1;\\n}\\n.wrapper .hero .title .subtitle p.sub {\\n  margin: 0;\\n}\\n.wrapper .hero .title .filter span {\\n  font-size: 1rem;\\n  margin-right: 10px;\\n}\\n.wrapper .hero .title .filter input {\\n  padding-left: 5px;\\n  padding-right: 5px;\\n  border: 1px solid rgba(255, 255, 255, 0.6);\\n  background-color: rgba(0, 0, 0, 0);\\n  color: white;\\n  height: 1.5rem;\\n}\\n.wrapper .hero .imgwrapper {\\n  display: grid;\\n  grid-gap: 2rem;\\n  justify-content: center;\\n  align-content: center;\\n}\\n.wrapper .hero .imgwrapper .media {\\n  justify-self: center;\\n}\\n.wrapper .hero .imgwrapper .media img {\\n  max-width: 100%;\\n}\\n.wrapper .hero .imgwrapper .media video {\\n  max-width: 100%;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  z-index: 2;\\n  cursor: pointer;\\n}\\n\\n.tooltip:before, .tooltip:after {\\n  visibility: hidden;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.tooltip:before {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-bottom: 5px;\\n  margin-left: -30px;\\n  padding: 5px 4px;\\n  width: 60px;\\n  border-radius: 3px;\\n  background-color: black;\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  color: black;\\n  content: attr(data-tooltip);\\n  text-align: center;\\n  font-size: 0.8rem;\\n  line-height: 1.2;\\n}\\n.tooltip:after {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -5px;\\n  width: 0;\\n  border-top: 5px solid #000;\\n  border-top: 5px solid rgba(51, 51, 51, 0.9);\\n  border-right: 5px solid transparent;\\n  border-left: 5px solid transparent;\\n  content: \\\" \\\";\\n  font-size: 0;\\n  line-height: 0;\\n}\\n.tooltip:hover:before, .tooltip:hover:after {\\n  visibility: visible;\\n  opacity: 1;\\n}</style>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $favorite, $$unsubscribe_favorite;
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	favorite.useLocalStorage({});
	let filterValue;
	let displayposts;
	let showSettings = false;

	$$result.css.add(css$2);

	{
		{

			{
				displayposts = $favorite ? Object.entries($favorite) : [];
			}
		}
	}

	$$unsubscribe_favorite();

	return `${($$result.head += `${($$result.title = `<title>tumblrpx - download</title>`, "")}`, "")}

<div class="${"wrapper svelte-scsxcb"}"><div class="${"hero svelte-scsxcb"}"><div class="${"title svelte-scsxcb"}"><span class="${"logo svelte-scsxcb"}"><img alt="${"tumblrpx logo"}" src="${"logo-192.png"}" class="${"svelte-scsxcb"}"></span>tumblrpx download ${escape($favorite
	? `(${Object.keys($favorite).length} items)`
	: '')}<div class="${"subtitle svelte-scsxcb"}"><p class="${"sub svelte-scsxcb"}">Right click on the page (not on any image) &gt; Save as &gt; Select &quot;Webpage, Complete&quot;.</p><p class="${"sub svelte-scsxcb"}">Alternatively, hit Ctrl+S &gt; Select &quot;Webpage, Complete&quot;</p></div><div class="${"filter"}"><span class="${"svelte-scsxcb"}">Filter (${escape(displayposts.length)})</span><input type="${"text"}" class="${"svelte-scsxcb"}"${add_attribute("value", filterValue, 0)}></div></div><div class="${"settings svelte-scsxcb"}"><a class="${"home svelte-scsxcb"}" rel="${"prefetch"}" href="${"/home"}"><span class="${"btn tooltip svelte-scsxcb"}" data-tooltip="${"Home"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faHome$1.faHome }, {}, {})}</span></a><span class="${["btn svelte-scsxcb", ""].join(' ').trim()}">${validate_component(Icon, "Icon").$$render($$result, { icon: faCog$1.faCog }, {}, {})}</span>${validate_component(Settings, "Settings").$$render($$result, { showSettings }, {}, {})}</div><div class="${"imgwrapper svelte-scsxcb"}">${each(displayposts, ([url, post]) => {
		return `${post.is_album
		? `${each(post.preview.img.album, album => {
				return `${album.is_image
				? `<div class="${"media svelte-scsxcb"}"><img alt="${"image"}"${add_attribute("src", album.hires, 0)} class="${"svelte-scsxcb"}"></div>`
				: `<div class="${"media svelte-scsxcb"}"><video autoplay loop playsinline muted class="${"svelte-scsxcb"}"><source${add_attribute("src", album.hires, 0)}></video></div>`}`;
			})}`
		: `${post.is_image
			? `<div class="${"media svelte-scsxcb"}"><img alt="${"image"}"${add_attribute("src", url, 0)} class="${"svelte-scsxcb"}"></div>`
			: `${post.is_video
				? `<div class="${"media svelte-scsxcb"}"><video autoplay loop playsinline muted class="${"svelte-scsxcb"}">${post.preview.vid.webm
					? `<source${add_attribute("src", post.preview.vid.webm, 0)}>`
					: ``}${post.preview.vid.mp4
					? `<source${add_attribute("src", post.preview.vid.mp4, 0)}>`
					: ``}</video></div>`
				: ``}`}`}`;
	})}</div></div></div>`;
});

var component_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Download
});

/* src/routes/health.svelte generated by Svelte v3.46.2 */

const css$1 = {
	code: "p.svelte-1nb2zc2{color:white}",
	map: "{\"version\":3,\"file\":\"health.svelte\",\"sources\":[\"health.svelte\"],\"sourcesContent\":[\"\\n  <p>OK</p>\\n\\n\\n<style>\\n  p {\\n    color: white;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAKE,CAAC,eAAC,CAAC,AACD,KAAK,CAAE,KAAK,AACd,CAAC\"}"
};

const Health = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<p class="${"svelte-1nb2zc2"}">OK</p>`;
});

var component_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Health
});

var faTimesCircle = createCommonjsModule$1(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f057';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimesCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faTimesCircle$1 = faTimesCircle;

/* src/routes/home.svelte generated by Svelte v3.46.2 */

const css = {
	code: ".wrapper.svelte-p55m9z.svelte-p55m9z{height:100vh;display:grid;justify-items:center;align-items:center}.wrapper.svelte-p55m9z .hero.svelte-p55m9z{height:100vh;width:100%;display:grid;justify-items:center;align-items:center;grid-auto-rows:max-content;grid-row-gap:3rem;padding-top:5rem}.wrapper.svelte-p55m9z .hero .settings.svelte-p55m9z{z-index:10;position:absolute;top:0;right:0;color:#fafafa;font-size:1rem;padding:1.5rem}.wrapper.svelte-p55m9z .hero .settings .btn.svelte-p55m9z{user-select:none;cursor:pointer;color:rgba(255, 255, 255, 0.8)}.wrapper.svelte-p55m9z .hero .settings .btn.showSettings.svelte-p55m9z{color:white}@media not all and (pointer: coarse){.wrapper.svelte-p55m9z .hero .settings .btn.svelte-p55m9z:hover{color:white}}.wrapper.svelte-p55m9z .hero .title.svelte-p55m9z{z-index:10;position:absolute;top:0;color:#fafafa;font-size:1.5rem;max-width:90%;padding:1rem;border-radius:3px;cursor:pointer}.wrapper.svelte-p55m9z .hero .title .logo.svelte-p55m9z{user-select:none;cursor:pointer;top:5px;position:relative;margin-right:9px}.wrapper.svelte-p55m9z .hero .title .logo img.svelte-p55m9z{height:2rem}.wrapper.svelte-p55m9z .hero .block.svelte-p55m9z{color:#fafafa;padding:1rem;width:100%;align-self:start}.wrapper.svelte-p55m9z .hero .block .heading.svelte-p55m9z{font-size:1.5rem}.wrapper.svelte-p55m9z .hero .block .heading .icon.svelte-p55m9z{top:3px;position:relative;margin-left:8px}.wrapper.svelte-p55m9z .hero .block .heading .icon.favorite.svelte-p55m9z{color:#fbbc04}.wrapper.svelte-p55m9z .hero .block .links.svelte-p55m9z{display:none}.wrapper.svelte-p55m9z .hero .block .items.svelte-p55m9z{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));grid-gap:10px;margin-top:5px}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper.explore .item.svelte-p55m9z{height:5rem}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper.noitems.svelte-p55m9z{color:#aeaeae;background-color:#1a1a1a;grid-column:1/-1;border-radius:3px;margin-top:1rem;display:grid;justify-content:center}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper.noitems .item.svelte-p55m9z{padding:4rem}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper.noitems .item .inlineicon.svelte-p55m9z{margin:0 4px;top:2px;position:relative;color:white}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper.noitems .item .key.svelte-p55m9z{color:#aeaeae;margin:0 4px;border:1px solid #aeaeae;border-radius:3px;top:-1px;position:relative;line-height:1.3rem;padding:0 5px}@media not all and (pointer: coarse){.wrapper.svelte-p55m9z .hero .block .items .itemwrapper:hover .icon.svelte-p55m9z{opacity:1}}@media not all and (pointer: coarse){.wrapper.svelte-p55m9z .hero .block .items .itemwrapper:hover span.svelte-p55m9z{opacity:1 !important}}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper .icon.svelte-p55m9z{position:relative;float:right;margin:1.1rem;opacity:0;color:#fbbc04;font-size:1.3rem}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper a.svelte-p55m9z{color:#fafafa;text-decoration:none}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper a .item.svelte-p55m9z{padding:1rem;height:10rem;background-size:cover;background-position:center;border-radius:3px}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper a .item .subreddit span.svelte-p55m9z{opacity:0}.wrapper.svelte-p55m9z .hero .block .items .itemwrapper a .item span.svelte-p55m9z{background-color:black;padding:0.3rem;border-radius:3px}.tooltip.svelte-p55m9z.svelte-p55m9z{position:relative;z-index:2;cursor:pointer}.tooltip.svelte-p55m9z.svelte-p55m9z:before,.tooltip.svelte-p55m9z.svelte-p55m9z:after{visibility:hidden;opacity:0;pointer-events:none}.tooltip.svelte-p55m9z.svelte-p55m9z:before{position:absolute;bottom:120%;left:50%;margin-bottom:5px;margin-left:-30px;padding:5px 4px;width:60px;border-radius:3px;background-color:black;color:#fff;background-color:rgba(255, 255, 255, 0.9);color:black;content:attr(data-tooltip);text-align:center;font-size:0.8rem;line-height:1.2}.tooltip.svelte-p55m9z.svelte-p55m9z:after{position:absolute;bottom:120%;left:50%;margin-left:-5px;width:0;border-top:5px solid #000;border-top:5px solid rgba(51, 51, 51, 0.9);border-right:5px solid transparent;border-left:5px solid transparent;content:\" \";font-size:0;line-height:0}.tooltip.svelte-p55m9z.svelte-p55m9z:hover:before,.tooltip.svelte-p55m9z.svelte-p55m9z:hover:after{visibility:visible;opacity:1}",
	map: "{\"version\":3,\"file\":\"home.svelte\",\"sources\":[\"home.svelte\"],\"sourcesContent\":[\"<script>\\n  import Icon from \\\"fa-svelte/src/Icon.svelte\\\";\\n  import { faCog as faSettings } from \\\"@fortawesome/free-solid-svg-icons/faCog\\\";\\n\\n  import { faCloudDownloadAlt as faDownload } from \\\"@fortawesome/free-solid-svg-icons/faCloudDownloadAlt\\\";\\n  import { faEye as faSlideshow } from \\\"@fortawesome/free-solid-svg-icons/faEye\\\";\\n  import { faTimesCircle as faClose } from \\\"@fortawesome/free-solid-svg-icons/faTimesCircle\\\";\\n  import { faPlusCircle } from \\\"@fortawesome/free-solid-svg-icons/faPlusCircle\\\";\\n  import { faStar as faFav } from \\\"@fortawesome/free-solid-svg-icons/faStar\\\";\\n\\n  import Settings from \\\"../components/Settings.svelte\\\";\\n\\n  import { goto as ahref } from \\\"@sapper/app\\\";\\n\\n  import { favorite } from \\\"../_prefs\\\";\\n  favorite.useLocalStorage({});\\n\\n  let showSettings = false;\\n\\n  let exploreTumblrUsers = [\\n    { color: \\\"lightpink\\\", url: \\\"t/staff\\\" },\\n    { color: \\\"lightsalmon\\\", url: \\\"t/tumblr\\\" },\\n    { color: \\\"peachpuff\\\", url: \\\"t/art\\\" },\\n    { color: \\\"lavender\\\", url: \\\"t/photography\\\" },\\n    { color: \\\"palegreen\\\", url: \\\"t/design\\\" },\\n    { color: \\\"turquoise\\\", url: \\\"t/fashion\\\" },\\n    { color: \\\"wheat\\\", url: \\\"t/food\\\" },\\n    { color: \\\"lightskyblue\\\", url: \\\"t/music\\\" },\\n    { color: \\\"tomato\\\", url: \\\"t/travel\\\" }\\n  ];\\n\\n  function toggleSettings() {\\n    showSettings = !showSettings;\\n  }\\n\\n  let displayposts = [];\\n  let musers = [];\\n\\n  $: displayposts = $favorite ? Object.entries($favorite) : [];\\n  $: musers = []; // Multi-user not implemented yet\\n  $: slideshowurl = \\\"\\\"; // Multi-user not implemented yet\\n\\n  async function downloadFiles() {\\n    window.open(\\\"/download\\\", \\\"_blank\\\");\\n  }\\n\\n  function openSlideshow() {\\n    ahref(slideshowurl);\\n  }\\n\\n  function removeFav(url) {\\n    $favorite[url] = undefined;\\n    $favorite = JSON.parse(JSON.stringify($favorite));\\n\\n    favorite.set($favorite);\\n  }\\n</script>\\n\\n<svelte:head>\\n  <title>redditpx - home</title>\\n</svelte:head>\\n\\n<div class=\\\"wrapper\\\"><div class=\\\"hero\\\"><div class=\\\"title\\\"><span class=\\\"logo\\\"><img alt=\\\"tumblrpx logo\\\" src=\\\"logo-192.png\\\"></span>tumblrpx</div><div class=\\\"settings\\\"><span class=\\\"btn\\\" on:click=\\\"{toggleSettings}\\\" class:showSettings=\\\"{showSettings}\\\"><Icon icon=\\\"{faSettings}\\\"></Icon></span><Settings {showSettings}></Settings></div><div class=\\\"block multiuser\\\"><div class=\\\"heading\\\">Multi-user {\\\"(\\\" + musers.length + \\\")\\\"}{#if musers.length}<span class=\\\"icon tooltip\\\" on:click=\\\"{openSlideshow}\\\" data-tooltip=\\\"start slideshow\\\" class:favorite=\\\"{musers.length}\\\"><Icon icon=\\\"{faSlideshow}\\\"></Icon></span>{/if}</div><div class=\\\"items\\\">{#each musers as [muser, mrdetails]}<div class=\\\"itemwrapper\\\"><a href=\\\"{`/t/${muser}`}\\\" rel=\\\"prefetch\\\"><div class=\\\"item\\\" style=\\\"background-image: url(&quot;{mrdetails.preview}&quot;)\\\"><span>{muser}</span></div></a></div>{:else}<div class=\\\"itemwrapper noitems\\\"><div class=\\\"item\\\"><span>Add to multi-user using</span><span class=\\\"inlineicon\\\"><Icon icon=\\\"{faPlusCircle}\\\"></Icon></span><span>or using shortcut</span><span class=\\\"key\\\">m</span></div></div>{/each}</div></div><div class=\\\"block favs\\\"><div class=\\\"heading\\\">Favorites {\\\"(\\\" + displayposts.length + \\\")\\\"}{#if displayposts.length}<span class=\\\"icon tooltip\\\" on:click=\\\"{downloadFiles}\\\" data-tooltip=\\\"download all\\\" class:favorite=\\\"{displayposts.length}\\\"><Icon icon=\\\"{faDownload}\\\"></Icon></span>{/if}</div><div class=\\\"items\\\">{#each displayposts as [url, post]}<div class=\\\"itemwrapper\\\"><span class=\\\"icon tooltip\\\" on:click|stopPropagation|preventDefault=\\\"{function() {removeFav(url)}}\\\" data-tooltip=\\\"remove\\\"><Icon icon=\\\"{faClose}\\\"></Icon></span><a href=\\\"{post.url}\\\" target=\\\"_blank\\\"><div class=\\\"item\\\" style=\\\"background-image: url(&quot;{post.preview.img.default}&quot;)\\\"><a class=\\\"subreddit\\\" href=\\\"{`/r/${post.subreddit}`}\\\"><span>{\\\"r/\\\" + post.subreddit}</span></a></div></a></div>{:else}<div class=\\\"itemwrapper noitems\\\"><div class=\\\"item\\\"><span>Add to favorites using</span><span class=\\\"inlineicon\\\"><Icon icon=\\\"{faFav}\\\"></Icon></span><span>or using shortcut</span><span class=\\\"key\\\">x</span></div></div>{/each}</div></div><div class=\\\"block explore\\\"><div class=\\\"heading\\\">Explore</div><div class=\\\"items\\\">{#each exploreSubreddits as subreddit}<div class=\\\"itemwrapper explore\\\"><a href=\\\"{`/${subreddit.url}`}\\\" rel=\\\"prefetch\\\"><div class=\\\"item\\\" style=\\\"background-color: {subreddit.color}\\\"><span>{subreddit.url}</span></div></a></div>{/each}</div><div class=\\\"links\\\"><a href=\\\"/t/username\\\"></a></div></div></div></div>\\n\\n<style lang=\\\"sass\\\">.wrapper {\\n  height: 100vh;\\n  display: grid;\\n  justify-items: center;\\n  align-items: center;\\n}\\n.wrapper .hero {\\n  height: 100vh;\\n  width: 100%;\\n  display: grid;\\n  justify-items: center;\\n  align-items: center;\\n  grid-auto-rows: max-content;\\n  grid-row-gap: 3rem;\\n  padding-top: 5rem;\\n}\\n.wrapper .hero .settings {\\n  z-index: 10;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  color: #fafafa;\\n  font-size: 1rem;\\n  padding: 1.5rem;\\n}\\n.wrapper .hero .settings .btn {\\n  user-select: none;\\n  cursor: pointer;\\n  color: rgba(255, 255, 255, 0.8);\\n}\\n.wrapper .hero .settings .btn.showSettings {\\n  color: white;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .settings .btn:hover {\\n    color: white;\\n  }\\n}\\n.wrapper .hero .title {\\n  z-index: 10;\\n  position: absolute;\\n  top: 0;\\n  color: #fafafa;\\n  font-size: 1.5rem;\\n  max-width: 90%;\\n  padding: 1rem;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n.wrapper .hero .title .logo {\\n  user-select: none;\\n  cursor: pointer;\\n  top: 5px;\\n  position: relative;\\n  margin-right: 9px;\\n}\\n.wrapper .hero .title .logo img {\\n  height: 2rem;\\n}\\n.wrapper .hero .block {\\n  color: #fafafa;\\n  padding: 1rem;\\n  width: 100%;\\n  align-self: start;\\n}\\n.wrapper .hero .block .heading {\\n  font-size: 1.5rem;\\n}\\n.wrapper .hero .block .heading .icon {\\n  top: 3px;\\n  position: relative;\\n  margin-left: 8px;\\n}\\n.wrapper .hero .block .heading .icon.favorite {\\n  color: #fbbc04;\\n}\\n.wrapper .hero .block .links {\\n  display: none;\\n}\\n.wrapper .hero .block .items {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\\n  grid-gap: 10px;\\n  margin-top: 5px;\\n}\\n.wrapper .hero .block .items .itemwrapper.explore .item {\\n  height: 5rem;\\n}\\n.wrapper .hero .block .items .itemwrapper.noitems {\\n  color: #aeaeae;\\n  background-color: #1a1a1a;\\n  grid-column: 1/-1;\\n  border-radius: 3px;\\n  margin-top: 1rem;\\n  display: grid;\\n  justify-content: center;\\n}\\n.wrapper .hero .block .items .itemwrapper.noitems .item {\\n  padding: 4rem;\\n}\\n.wrapper .hero .block .items .itemwrapper.noitems .item .inlineicon {\\n  margin: 0 4px;\\n  top: 2px;\\n  position: relative;\\n  color: white;\\n}\\n.wrapper .hero .block .items .itemwrapper.noitems .item .key {\\n  color: #aeaeae;\\n  margin: 0 4px;\\n  border: 1px solid #aeaeae;\\n  border-radius: 3px;\\n  top: -1px;\\n  position: relative;\\n  line-height: 1.3rem;\\n  padding: 0 5px;\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .block .items .itemwrapper:hover .icon {\\n    opacity: 1;\\n  }\\n}\\n@media not all and (pointer: coarse) {\\n  .wrapper .hero .block .items .itemwrapper:hover span {\\n    opacity: 1 !important;\\n  }\\n}\\n.wrapper .hero .block .items .itemwrapper .icon {\\n  position: relative;\\n  float: right;\\n  margin: 1.1rem;\\n  opacity: 0;\\n  color: #fbbc04;\\n  font-size: 1.3rem;\\n}\\n.wrapper .hero .block .items .itemwrapper a {\\n  color: #fafafa;\\n  text-decoration: none;\\n}\\n.wrapper .hero .block .items .itemwrapper a .item {\\n  padding: 1rem;\\n  height: 10rem;\\n  background-size: cover;\\n  background-position: center;\\n  border-radius: 3px;\\n}\\n.wrapper .hero .block .items .itemwrapper a .item .subreddit span {\\n  opacity: 0;\\n}\\n.wrapper .hero .block .items .itemwrapper a .item span {\\n  background-color: black;\\n  padding: 0.3rem;\\n  border-radius: 3px;\\n}\\n\\n.tooltip {\\n  position: relative;\\n  z-index: 2;\\n  cursor: pointer;\\n}\\n\\n.tooltip:before, .tooltip:after {\\n  visibility: hidden;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n.tooltip:before {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-bottom: 5px;\\n  margin-left: -30px;\\n  padding: 5px 4px;\\n  width: 60px;\\n  border-radius: 3px;\\n  background-color: black;\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  color: black;\\n  content: attr(data-tooltip);\\n  text-align: center;\\n  font-size: 0.8rem;\\n  line-height: 1.2;\\n}\\n.tooltip:after {\\n  position: absolute;\\n  bottom: 120%;\\n  left: 50%;\\n  margin-left: -5px;\\n  width: 0;\\n  border-top: 5px solid #000;\\n  border-top: 5px solid rgba(51, 51, 51, 0.9);\\n  border-right: 5px solid transparent;\\n  border-left: 5px solid transparent;\\n  content: \\\" \\\";\\n  font-size: 0;\\n  line-height: 0;\\n}\\n.tooltip:hover:before, .tooltip:hover:after {\\n  visibility: visible;\\n  opacity: 1;\\n}</style>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $favorite, $$unsubscribe_favorite;
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	favorite.useLocalStorage({});
	let showSettings = false;

	let displayposts = [];
	let musers = [];

	$$result.css.add(css);
	displayposts = $favorite ? Object.entries($favorite) : [];
	musers = []; // Multi-user not implemented yet
	$$unsubscribe_favorite();

	return `${($$result.head += `${($$result.title = `<title>redditpx - home</title>`, "")}`, "")}

<div class="${"wrapper svelte-p55m9z"}"><div class="${"hero svelte-p55m9z"}"><div class="${"title svelte-p55m9z"}"><span class="${"logo svelte-p55m9z"}"><img alt="${"tumblrpx logo"}" src="${"logo-192.png"}" class="${"svelte-p55m9z"}"></span>tumblrpx</div><div class="${"settings svelte-p55m9z"}"><span class="${["btn svelte-p55m9z", ""].join(' ').trim()}">${validate_component(Icon, "Icon").$$render($$result, { icon: faCog$1.faCog }, {}, {})}</span>${validate_component(Settings, "Settings").$$render($$result, { showSettings }, {}, {})}</div><div class="${"block multiuser svelte-p55m9z"}"><div class="${"heading svelte-p55m9z"}">Multi-user ${escape("(" + musers.length + ")")}${musers.length
	? `<span class="${["icon tooltip svelte-p55m9z", musers.length ? "favorite" : ""].join(' ').trim()}" data-tooltip="${"start slideshow"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faEye$1.faEye }, {}, {})}</span>`
	: ``}</div><div class="${"items svelte-p55m9z"}">${musers.length
	? each(musers, ([muser, mrdetails]) => {
			return `<div class="${"itemwrapper"}"><a${add_attribute("href", `/t/${muser}`, 0)} rel="${"prefetch"}" class="${"svelte-p55m9z"}"><div class="${"item svelte-p55m9z"}" style="${"background-image: url(&quot;" + escape(mrdetails.preview) + "&quot;)"}"><span class="${"svelte-p55m9z"}">${escape(muser)}</span></div></a></div>`;
		})
	: `<div class="${"itemwrapper noitems svelte-p55m9z"}"><div class="${"item svelte-p55m9z"}"><span class="${"svelte-p55m9z"}">Add to multi-user using</span><span class="${"inlineicon svelte-p55m9z"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faPlusCircle$1.faPlusCircle }, {}, {})}</span><span class="${"svelte-p55m9z"}">or using shortcut</span><span class="${"key svelte-p55m9z"}">m</span></div></div>`}</div></div><div class="${"block favs svelte-p55m9z"}"><div class="${"heading svelte-p55m9z"}">Favorites ${escape("(" + displayposts.length + ")")}${displayposts.length
	? `<span class="${["icon tooltip svelte-p55m9z", displayposts.length ? "favorite" : ""].join(' ').trim()}" data-tooltip="${"download all"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faCloudDownloadAlt$1.faCloudDownloadAlt }, {}, {})}</span>`
	: ``}</div><div class="${"items svelte-p55m9z"}">${displayposts.length
	? each(displayposts, ([url, post]) => {
			return `<div class="${"itemwrapper"}"><span class="${"icon tooltip svelte-p55m9z"}" data-tooltip="${"remove"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faTimesCircle$1.faTimesCircle }, {}, {})}</span><a${add_attribute("href", post.url, 0)} target="${"_blank"}" class="${"svelte-p55m9z"}"><div class="${"item svelte-p55m9z"}" style="${"background-image: url(&quot;" + escape(post.preview.img.default) + "&quot;)"}"><a class="${"subreddit svelte-p55m9z"}"${add_attribute("href", `/r/${post.subreddit}`, 0)}><span class="${"svelte-p55m9z"}">${escape("r/" + post.subreddit)}</span></a></div></a></div>`;
		})
	: `<div class="${"itemwrapper noitems svelte-p55m9z"}"><div class="${"item svelte-p55m9z"}"><span class="${"svelte-p55m9z"}">Add to favorites using</span><span class="${"inlineicon svelte-p55m9z"}">${validate_component(Icon, "Icon").$$render($$result, { icon: faStar$3.faStar }, {}, {})}</span><span class="${"svelte-p55m9z"}">or using shortcut</span><span class="${"key svelte-p55m9z"}">x</span></div></div>`}</div></div><div class="${"block explore svelte-p55m9z"}"><div class="${"heading svelte-p55m9z"}">Explore</div><div class="${"items svelte-p55m9z"}">${each(exploreSubreddits, subreddit => {
		return `<div class="${"itemwrapper explore"}"><a${add_attribute("href", `/${subreddit.url}`, 0)} rel="${"prefetch"}" class="${"svelte-p55m9z"}"><div class="${"item svelte-p55m9z"}" style="${"background-color: " + escape(subreddit.color)}"><span class="${"svelte-p55m9z"}">${escape(subreddit.url)}</span></div></a></div>`;
	})}</div><div class="${"links svelte-p55m9z"}"><a href="${"/t/username"}" class="${"svelte-p55m9z"}"></a></div></div></div></div>`;
});

var component_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Home
});

/* src/routes/t/[slug]/index.svelte generated by Svelte v3.46.2 */
const API_KEY$1 = 'ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF';

async function preload$1({ path, params, query }) {
	if (typeof window === "undefined") return;
	let blogIdentifier = params.slug;
	let url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${API_KEY$1}&${queryp(query)}`;
	let { posts, res, after } = await get_tumblr_posts(url);

	return {
		posts,
		after,
		res,
		slugstr: blogIdentifier
	};
}

const U5Bslugu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $favorite, $$unsubscribe_favorite;
	let $layout, $$unsubscribe_layout;
	let $page, $$unsubscribe_page;
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	$$unsubscribe_layout = subscribe(layout, value => $layout = value);
	const { page } = stores$1();
	$$unsubscribe_page = subscribe(page, value => $page = value);
	favorite.useLocalStorage({});
	layout.useLocalStorage(0);
	let { posts = [] } = $$props;
	let { res } = $$props;
	let { after } = $$props;
	let { slugstr } = $$props;

	// Load `favorite` from localstorage
	for (let p of posts) {
		p["favorite"] = !!$favorite[p.url]?.favorite;
	}

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.res === void 0 && $$bindings.res && res !== void 0) $$bindings.res(res);
	if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
	if ($$props.slugstr === void 0 && $$bindings.slugstr && slugstr !== void 0) $$bindings.slugstr(slugstr);
	$$unsubscribe_favorite();
	$$unsubscribe_layout();
	$$unsubscribe_page();

	return `${$layout == 0
	? `${validate_component(FullscreenLayout, "FullscreenLayout").$$render(
			$$result,
			{
				slugstr,
				posts,
				res,
				after,
				params: $page.query
			},
			{},
			{}
		)}`
	: ``}`;
});

var component_4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': U5Bslugu5D$1,
    preload: preload$1
});

/* src/routes/t/[slug]/[slug].svelte generated by Svelte v3.46.2 */
const API_KEY = 'ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF';

async function preload({ path, params, query }) {
	if (typeof window === "undefined") return;
	let blogIdentifier = params.slug;
	let url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${API_KEY}&${queryp(query)}`;
	let { posts, res, after } = await get_tumblr_posts(url);

	return {
		posts,
		after,
		res,
		slugstr: blogIdentifier
	};
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $favorite, $$unsubscribe_favorite;
	let $layout, $$unsubscribe_layout;
	let $page, $$unsubscribe_page;
	$$unsubscribe_favorite = subscribe(favorite, value => $favorite = value);
	$$unsubscribe_layout = subscribe(layout, value => $layout = value);
	const { page } = stores$1();
	$$unsubscribe_page = subscribe(page, value => $page = value);
	favorite.useLocalStorage({});
	layout.useLocalStorage(0);
	let { posts = [] } = $$props;
	let { res } = $$props;
	let { after } = $$props;
	let { slugstr } = $$props;

	// Load `favorite` from localstorage
	for (let p of posts) {
		p["favorite"] = !!$favorite[p.url]?.favorite;
	}

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.res === void 0 && $$bindings.res && res !== void 0) $$bindings.res(res);
	if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
	if ($$props.slugstr === void 0 && $$bindings.slugstr && slugstr !== void 0) $$bindings.slugstr(slugstr);
	$$unsubscribe_favorite();
	$$unsubscribe_layout();
	$$unsubscribe_page();

	return `${$layout == 0
	? `${validate_component(FullscreenLayout, "FullscreenLayout").$$render(
			$$result,
			{
				slugstr,
				posts,
				res,
				after,
				params: $page.query
			},
			{},
			{}
		)}`
	: ``}`;
});

var component_5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': U5Bslugu5D,
    preload: preload
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// download.svelte
			pattern: /^\/download\/?$/,
			parts: [
				{ name: "download", file: "download.svelte", component: component_1 }
			]
		},

		{
			// health.svelte
			pattern: /^\/health\/?$/,
			parts: [
				{ name: "health", file: "health.svelte", component: component_2 }
			]
		},

		{
			// home.svelte
			pattern: /^\/home\/?$/,
			parts: [
				{ name: "home", file: "home.svelte", component: component_3 }
			]
		},

		{
			// t/[slug]/index.svelte
			pattern: /^\/t\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "t_$slug", file: "t/[slug]/index.svelte", component: component_4, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// t/[slug]/[slug].svelte
			pattern: /^\/t\/([^/]+?)\/([^/]+?)\/?$/,
			parts: [
				null,
				null,
				{ name: "t_$slug$93_$91slug", file: "t/[slug]/[slug].svelte", component: component_5, params: match => ({ slug: d(match[1]), slug: d(match[2]) }) }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped) {
            result += escaped[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch$1(url, opts) {

	// allow custom promise
	if (!fetch$1.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch$1.Promise;

	// wrap http.request into fetch
	return new fetch$1.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch$1.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch$1(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch$1.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch$1.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs.readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path.dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path.resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path.dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path.resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function convertThrownError(fn, convertError) {
    try {
        const result = fn();
        if (result instanceof Promise) {
            return result.catch(e => {
                throw convertError(e);
            });
        }
        else {
            return result;
        }
    }
    catch (e) {
        throw convertError(e);
    }
}
/**
 * If the code executing in fn() tries to access `window` or `document`, throw
 * an explanatory error. Also works if fn() is async.
 */
function detectClientOnlyReferences(fn) {
    return convertThrownError(fn, e => {
        const m = e.message.match('(document|window) is not defined');
        if (m && e.name === 'ReferenceError') {
            e.message = `Server-side code is attempting to access the global variable "${m[1]}", which is client only. See https://sapper.svelte.dev/docs/#Server-side_rendering`;
        }
        return e;
    });
}

function get_page_handler(manifest, session_getter) {
    const get_build_info = (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));
    const template = (str => () => str)(read_template(build_dir));
    const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message = 'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url.URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch$1(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = detectClientOnlyReferences(() => root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session));
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? detectClientOnlyReferences(() => part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session))
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable$1(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable$1(null).subscribe
                        },
                        session: writable$1(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = detectClientOnlyReferences(() => App.render(props));
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const req_path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(p => p.pattern.test(req_path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control: 'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read = (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path.posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else if (err.code === 'EISDIR') {
                    res.statusCode = 404;
                    res.end('Not Found');
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop() {
    return __awaiter(this, void 0, void 0, function* () { });
}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  // You can also use Express
  .use(
    compression({ threshold: 0 }),
    //(req, res, next) => {
    //  if (req.path == "/") {
    //    console.log("\n\n");
    //  }
    //  console.log(req.method, req.path);
    //  next();
    //},
    sirv("static", { dev }),
    middleware(),
  )
  .listen(
    PORT,
    (err) => {
      if (err) {
        console.log("error", err);
      }
    },
  );
