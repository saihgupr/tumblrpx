import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as binding_callbacks, q as bind, v as validate_store, c as component_subscribe, a as validate_slots, r as onMount, u as tick, w as goto, x as globals, y as validate_each_argument, z as validate_each_keys, A as space, B as element, l as create_component, e as empty, C as head_selector, k as detach_dev, D as claim_space, E as claim_element, F as children, m as claim_component, G as attr_dev, H as toggle_class, I as add_location, f as insert_hydration_dev, J as append_hydration_dev, n as mount_component, K as listen_dev, L as add_flush_callback, t as transition_in, g as group_outros, h as transition_out, j as check_outros, o as destroy_component, M as run_all, N as set_store_value, O as bubble, P as text, Q as claim_text, R as set_data_dev, T as add_render_callback, U as add_iframe_resize_listener, V as update_keyed_each, W as src_url_equal, X as prop_dev, Y as set_style, Z as destroy_block, _ as noop$1, $ as set_input_value, a0 as stop_propagation } from './client.e786425c.js';
import { c as createCommonjsModule, a as commonjsGlobal, I as Icon, b as faCog, S as Settings, d as autoplay, f as favorite, o as over18, p as portraitLandscape, i as imageVideo, e as apiKey, g as prefetchNum, m as muted, h as autoplayinterval, j as hideUIonStart, k as lores, n as prefetch, q as hires, r as multireddit, s as oldreddit, l as layout, t as faCloudDownloadAlt } from './Settings.c1a6d999.js';
import { f as faHome } from './faHome.a20aef62.js';

// TODO: Replace with your actual Tumblr API key
const API_KEY = 'OAuth Consumer Key Goes Here';

var faVolumeHigh = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'volume-high';
var width = 640;
var height = 512;
var aliases = [128266,"volume-up"];
var unicode = 'f028';
var svgPathData = 'M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faVolumeHigh = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$6 = faVolumeHigh;

var faVolumeUp = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$6.prefix,
  iconName: source$6.iconName,
  icon: [
    source$6.width,
    source$6.height,
    source$6.aliases,
    source$6.unicode,
    source$6.svgPathData
  ]};

exports.faVolumeUp = exports.definition;
exports.prefix = source$6.prefix;
exports.iconName = source$6.iconName;
exports.width = source$6.width;
exports.height = source$6.height;
exports.ligatures = source$6.aliases;
exports.unicode = source$6.unicode;
exports.svgPathData = source$6.svgPathData;
exports.aliases = source$6.aliases;
});

var faVolumeUp$1 = faVolumeUp;

var faVolumeXmark = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'volume-xmark';
var width = 576;
var height = 512;
var aliases = ["volume-mute","volume-times"];
var unicode = 'f6a9';
var svgPathData = 'M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faVolumeXmark = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$5 = faVolumeXmark;

var faVolumeMute = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$5.prefix,
  iconName: source$5.iconName,
  icon: [
    source$5.width,
    source$5.height,
    source$5.aliases,
    source$5.unicode,
    source$5.svgPathData
  ]};

exports.faVolumeMute = exports.definition;
exports.prefix = source$5.prefix;
exports.iconName = source$5.iconName;
exports.width = source$5.width;
exports.height = source$5.height;
exports.ligatures = source$5.aliases;
exports.unicode = source$5.unicode;
exports.svgPathData = source$5.svgPathData;
exports.aliases = source$5.aliases;
});

var faVolumeMute$1 = faVolumeMute;

var faPlay = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'play';
var width = 448;
var height = 512;
var aliases = [9654];
var unicode = 'f04b';
var svgPathData = 'M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faPlay = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faPlay$1 = faPlay;

var faPause = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'pause';
var width = 384;
var height = 512;
var aliases = [9208];
var unicode = 'f04c';
var svgPathData = 'M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faPause = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faPause$1 = faPause;

var faCircleDollarToSlot = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'circle-dollar-to-slot';
var width = 576;
var height = 512;
var aliases = ["donate"];
var unicode = 'f4b9';
var svgPathData = 'M96 224a192 192 0 1 1 384 0 192 192 0 1 1 -384 0zm176-92l0 4c-28.8 .3-52 23.7-52 52.5 0 25.7 18.5 47.6 43.9 51.8l41.7 7c6 1 10.4 6.2 10.4 12.3 0 6.9-5.6 12.5-12.5 12.5L248 272c-11 0-20 9-20 20s9 20 20 20l24 0 0 4c0 11 9 20 20 20s20-9 20-20l0-4.7c25-4.1 44-25.7 44-51.8 0-25.7-18.5-47.6-43.9-51.8l-41.7-7c-6-1-10.4-6.2-10.4-12.3 0-6.9 5.6-12.5 12.5-12.5l47.5 0c11 0 20-9 20-20s-9-20-20-20l-8 0 0-4c0-11-9-20-20-20s-20 9-20 20zM48 344l0 104c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 344c0-13.3 10.7-24 24-24s24 10.7 24 24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleDollarToSlot = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$4 = faCircleDollarToSlot;

var faDonate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$4.prefix,
  iconName: source$4.iconName,
  icon: [
    source$4.width,
    source$4.height,
    source$4.aliases,
    source$4.unicode,
    source$4.svgPathData
  ]};

exports.faDonate = exports.definition;
exports.prefix = source$4.prefix;
exports.iconName = source$4.iconName;
exports.width = source$4.width;
exports.height = source$4.height;
exports.ligatures = source$4.aliases;
exports.unicode = source$4.unicode;
exports.svgPathData = source$4.svgPathData;
exports.aliases = source$4.aliases;
});

var faDonate$1 = faDonate;

var faUpRightAndDownLeftFromCenter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'up-right-and-down-left-from-center';
var width = 512;
var height = 512;
var aliases = ["expand-alt"];
var unicode = 'f424';
var svgPathData = 'M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faUpRightAndDownLeftFromCenter = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$3 = faUpRightAndDownLeftFromCenter;

var faExpandAlt = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$3.prefix,
  iconName: source$3.iconName,
  icon: [
    source$3.width,
    source$3.height,
    source$3.aliases,
    source$3.unicode,
    source$3.svgPathData
  ]};

exports.faExpandAlt = exports.definition;
exports.prefix = source$3.prefix;
exports.iconName = source$3.iconName;
exports.width = source$3.width;
exports.height = source$3.height;
exports.ligatures = source$3.aliases;
exports.unicode = source$3.unicode;
exports.svgPathData = source$3.svgPathData;
exports.aliases = source$3.aliases;
});

var faExpandAlt$1 = faExpandAlt;

var faDice = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'dice';
var width = 512;
var height = 512;
var aliases = [127922];
var unicode = 'f522';
var svgPathData = 'M141.4 2.3C103-8 63.5 14.8 53.3 53.2L2.5 242.7C-7.8 281.1 15 320.6 53.4 330.9l189.5 50.8c38.4 10.3 77.9-12.5 88.2-50.9l50.8-189.5c10.3-38.4-12.5-77.9-50.9-88.2L141.4 2.3zm23 205.7a32 32 0 1 1 55.4-32 32 32 0 1 1 -55.4 32zM79.2 220.3a32 32 0 1 1 32 55.4 32 32 0 1 1 -32-55.4zm185 96.4a32 32 0 1 1 -32-55.4 32 32 0 1 1 32 55.4zm9-208.4a32 32 0 1 1 32 55.4 32 32 0 1 1 -32-55.4zm-121 14.4a32 32 0 1 1 -32-55.4 32 32 0 1 1 32 55.4zM418 192L377.4 343.2c-17.2 64-83 102-147 84.9l-38.3-10.3 0 30.2c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L418 192z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faDice = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faDice$1 = faDice;

var faPhotoFilm = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'photo-film';
var width = 640;
var height = 512;
var aliases = ["photo-video"];
var unicode = 'f87c';
var svgPathData = 'M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm156.5 11.5C472.1 100.4 464.4 96 456 96s-16.1 4.4-20.5 11.5l-54 88.3-17.9-25.6c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S279.1 288 288 288l256 0c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144zM144 128l0 160c0 61.9 50.1 112 112 112l192 0 0 16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l80 0zM52 196l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0zm0 96c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faPhotoFilm = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$2 = faPhotoFilm;

var faPhotoVideo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$2.prefix,
  iconName: source$2.iconName,
  icon: [
    source$2.width,
    source$2.height,
    source$2.aliases,
    source$2.unicode,
    source$2.svgPathData
  ]};

exports.faPhotoVideo = exports.definition;
exports.prefix = source$2.prefix;
exports.iconName = source$2.iconName;
exports.width = source$2.width;
exports.height = source$2.height;
exports.ligatures = source$2.aliases;
exports.unicode = source$2.unicode;
exports.svgPathData = source$2.svgPathData;
exports.aliases = source$2.aliases;
});

var faPhotoVideo$1 = faPhotoVideo;

var faVideo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'video';
var width = 576;
var height = 512;
var aliases = ["video-camera"];
var unicode = 'f03d';
var svgPathData = 'M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faVideo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faVideo$1 = faVideo;

var faImage = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'image';
var width = 448;
var height = 512;
var aliases = [];
var unicode = 'f03e';
var svgPathData = 'M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faImage = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faImage$1 = faImage;

var faMagnifyingGlass = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'magnifying-glass';
var width = 512;
var height = 512;
var aliases = [128269,"search"];
var unicode = 'f002';
var svgPathData = 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faMagnifyingGlass = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source$1 = faMagnifyingGlass;

var faSearch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source$1.prefix,
  iconName: source$1.iconName,
  icon: [
    source$1.width,
    source$1.height,
    source$1.aliases,
    source$1.unicode,
    source$1.svgPathData
  ]};

exports.faSearch = exports.definition;
exports.prefix = source$1.prefix;
exports.iconName = source$1.iconName;
exports.width = source$1.width;
exports.height = source$1.height;
exports.ligatures = source$1.aliases;
exports.unicode = source$1.unicode;
exports.svgPathData = source$1.svgPathData;
exports.aliases = source$1.aliases;
});

var faSearch$1 = faSearch;

var faArrowsRotate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'arrows-rotate';
var width = 512;
var height = 512;
var aliases = [128472,"refresh","sync"];
var unicode = 'f021';
var svgPathData = 'M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faArrowsRotate = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var source = faArrowsRotate;

var faSync = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });

exports.definition = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.faSync = exports.definition;
exports.prefix = source.prefix;
exports.iconName = source.iconName;
exports.width = source.width;
exports.height = source.height;
exports.ligatures = source.aliases;
exports.unicode = source.unicode;
exports.svgPathData = source.svgPathData;
exports.aliases = source.aliases;
});

var faSync$1 = faSync;

var faSpinner = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'spinner';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'f110';
var svgPathData = 'M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSpinner = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;
});

var faSpinner$1 = faSpinner;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN$1 = 0 / 0;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$2.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root$1.Symbol,
    iteratorSymbol = Symbol$1 ? Symbol$1.iterator : undefined,
    propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeKeys = overArg(Object.keys, Object),
    nativeRandom = Math.random;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root$1, 'DataView'),
    Map$1 = getNative(root$1, 'Map'),
    Promise$1 = getNative(root$1, 'Promise'),
    Set = getNative(root$1, 'Set'),
    WeakMap = getNative(root$1, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  return objectToString$1.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag$1;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag(new Map$1) != mapTag) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString$1.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject$1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;

  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = baseClamp(toInteger(n), 0, length);
  }
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  return sampleSize(collection, MAX_ARRAY_LENGTH);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$1.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$1(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

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
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike$1(value) && objectToString$1.call(value) == stringTag);
}

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
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

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
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

var lodash_shuffle = shuffle;

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
        const best_photos = post.photos.map(photo => {
            let all_sizes = [...photo.alt_sizes];
            if (photo.original_size) {
                all_sizes.push(photo.original_size);
            }
            return all_sizes.reduce((prev, current) => (prev.width > current.width) ? prev : current);
        });
        const best_photo = best_photos[0];
        imgs = {
            default: best_photo.url,
            hires: best_photo.url,
            album: best_photos.map(p => ({
                default: p.url,
                hires: p.url,
                is_image: true,
                is_video: false,
                preview: {
                    vid: {},
                    img: {
                        hires: p.url,
                        default: p.url,
                        album: [],
                    },
                },
            })),
        };
        dims = { width: best_photo.width, height: best_photo.height };
        url = best_photo.url;
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
    else if (post.type === "text" && post.body) {
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        const foundImages = [];
        let match;
        while ((match = imgRegex.exec(post.body)) !== null) {
            foundImages.push(match[1]);
        }
        if (foundImages.length > 0) {
            is_image = true;
            const getHiResUrl = (url) => url.replace(/_\d{3,}\.(jpg|png|gif|webp)$/, '_1280.$1').replace(/\/s\d+x\d+\//, '/');
            const hiresImages = foundImages.map(getHiResUrl);
            imgs = {
                default: foundImages[0],
                hires: hiresImages[0],
                album: foundImages.map((imgUrl, i) => ({
                    default: imgUrl,
                    hires: hiresImages[i],
                    is_image: true,
                    is_video: false,
                    preview: {
                        vid: {},
                        img: {
                            hires: hiresImages[i],
                            default: imgUrl,
                            album: [],
                        },
                    },
                })),
            };
            // For now, we can't easily get dimensions from the body.
            dims = { width: 0, height: 0 };
            url = foundImages[0];
        }
        else {
            console.log(`[format_tumblr_post] Text post with no images. ID: ${post.id}`);
        }
    }
    else {
        // Log posts that are not identified as image or video
        console.log(`[format_tumblr_post] Post not identified as image/video. Type: ${post.type}, Post:`, post);
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
    const nsfw_tags = ["nsfw", "adult", "mature", "18+", "explicit"];
    const is_nsfw = post.tags.some(tag => nsfw_tags.includes(tag.toLowerCase()));
    return {
        id: String(post.id),
        author: post.blog_name,
        authorp: `u/${post.blog_name}`,
        title: post.title || post.summary || "(no title)",
        thumbnail: is_image ? imgs.default : undefined,
        subreddit: post.blog_name,
        subredditp: `t/${post.blog_name}`,
        permalink: post.post_url,
        over18: is_nsfw,
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
        console.log("[get_tumblr_posts] API URL:", url);
        // Check if the URL contains the placeholder API key
        if (url.includes('OAuth Consumer Key Goes Here')) {
            console.log("[get_tumblr_posts]: Invalid API key detected");
            return {
                posts: [],
                after: null,
                res: { ok: false, res: "Invalid API key. Please set your Tumblr API key in settings." },
            };
        }
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
        const rawPosts = data.response.posts || data.response;
        console.log("[get_tumblr_posts] Raw Posts Array (before filtering):", rawPosts);
        rawPosts.forEach(post => console.log(`[get_tumblr_posts] Post Type: ${post.type}, ID: ${post.id}`));
        const formattedPosts = await Promise.all(rawPosts.map(post => format_tumblr_post(post)));
        // Filter for only image and video posts for now, similar to redditpx
        const filteredPosts = formattedPosts.filter((post) => post.is_image || post.is_video);
        let after_value;
        if (url.includes('/tagged')) {
            if (rawPosts.length > 0) {
                after_value = rawPosts[rawPosts.length - 1].timestamp;
            }
            else {
                after_value = null;
            }
        }
        else {
            after_value = rawPosts.length > 0 ? (parseInt(url.match(/offset=(\d+)/)?.[1] || "0") + rawPosts.length) : null;
        }
        return {
            posts: filteredPosts,
            after: after_value,
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

function noop() { }

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
function writable(value, start = noop) {
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
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
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
var Symbol = _root.Symbol;

var _Symbol = Symbol;

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

/* src/components/FullscreenLayout.svelte generated by Svelte v3.59.2 */

const { console: console_1, document: document_1, window: window_1 } = globals;

const file = "src/components/FullscreenLayout.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[103] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[106] = list[i];
	child_ctx[108] = i;
	return child_ctx;
}

// (953:6) {:else}
function create_else_block_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*title*/ ctx[16]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*title*/ ctx[16]);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*title*/ 65536) set_data_dev(t, /*title*/ ctx[16]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_8.name,
		type: "else",
		source: "(953:6) {:else}",
		ctx
	});

	return block;
}

// (951:6) {#if currpost.dims && currpost.dims.width > 0}
function create_if_block_28(ctx) {
	let t0;
	let t1;
	let t2_value = /*currpost*/ ctx[6].dims.width + "";
	let t2;
	let t3;
	let t4_value = /*currpost*/ ctx[6].dims.height + "";
	let t4;
	let t5;

	const block = {
		c: function create() {
			t0 = text(/*title*/ ctx[16]);
			t1 = text(" (");
			t2 = text(t2_value);
			t3 = text("x");
			t4 = text(t4_value);
			t5 = text(")");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, /*title*/ ctx[16]);
			t1 = claim_text(nodes, " (");
			t2 = claim_text(nodes, t2_value);
			t3 = claim_text(nodes, "x");
			t4 = claim_text(nodes, t4_value);
			t5 = claim_text(nodes, ")");
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, t3, anchor);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, t5, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*title*/ 65536) set_data_dev(t0, /*title*/ ctx[16]);
			if (dirty[0] & /*currpost*/ 64 && t2_value !== (t2_value = /*currpost*/ ctx[6].dims.width + "")) set_data_dev(t2, t2_value);
			if (dirty[0] & /*currpost*/ 64 && t4_value !== (t4_value = /*currpost*/ ctx[6].dims.height + "")) set_data_dev(t4, t4_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(t5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_28.name,
		type: "if",
		source: "(951:6) {#if currpost.dims && currpost.dims.width > 0}",
		ctx
	});

	return block;
}

// (956:6) {#if currpost.subreddit}
function create_if_block_27(ctx) {
	let div;
	let p;
	let t_value = /*currpost*/ ctx[6].authorp + "";
	let t;

	const block = {
		c: function create() {
			div = element("div");
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "user svelte-1qdlkqz");
			add_location(p, file, 957, 10, 25288);
			attr_dev(div, "class", "subreddit");
			add_location(div, file, 956, 8, 25254);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, p);
			append_hydration_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 64 && t_value !== (t_value = /*currpost*/ ctx[6].authorp + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_27.name,
		type: "if",
		source: "(956:6) {#if currpost.subreddit}",
		ctx
	});

	return block;
}

// (987:34) 
function create_if_block_25(ctx) {
	let if_block_anchor;

	function select_block_type_3(ctx, dirty) {
		if (/*currpost*/ ctx[6].preview.img.album[/*albumindex*/ ctx[4]].is_video) return create_if_block_26;
		return create_else_block_7;
	}

	let current_block_type = select_block_type_3(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_3(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_25.name,
		type: "if",
		source: "(987:34) ",
		ctx
	});

	return block;
}

// (974:49) 
function create_if_block_21(ctx) {
	let video;
	let video_loop_value;
	let mounted;
	let dispose;

	function select_block_type_2(ctx, dirty) {
		if (/*$lores*/ ctx[29]) return create_if_block_22;
		return create_else_block_6;
	}

	let current_block_type = select_block_type_2(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			video = element("video");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", { class: true, id: true });
			var video_nodes = children(video);
			if_block.l(video_nodes);
			video_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(video, "class", "video svelte-1qdlkqz");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[9];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[11];
			attr_dev(video, "id", "videoplayerid");
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(video, file, 974, 8, 26008);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, video, anchor);
			if_block.m(video, null);

			if (!mounted) {
				dispose = [
					listen_dev(video, "ended", /*videoended*/ ctx[41], false, false, false, false),
					listen_dev(video, "dblclick", /*toggleFullscreen*/ ctx[42], false, false, false, false),
					listen_dev(video, "mousemove", /*toggleHideCursor*/ ctx[44], false, false, false, false),
					listen_dev(video, "click", /*onVideoPlayerClicked*/ ctx[43], false, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(video, null);
				}
			}

			if (dirty[0] & /*$autoplay*/ 512 && video_loop_value !== (video_loop_value = !/*$autoplay*/ ctx[9])) {
				prop_dev(video, "loop", video_loop_value);
			}

			if (dirty[0] & /*$muted*/ 2048) {
				prop_dev(video, "muted", /*$muted*/ ctx[11]);
			}

			if (dirty[0] & /*hideCursor*/ 8192) {
				toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
			if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_21.name,
		type: "if",
		source: "(974:49) ",
		ctx
	});

	return block;
}

// (972:6) {#if currpost.is_image && !currpost.is_album}
function create_if_block_20(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", {
				src: true,
				alt: true,
				style: true,
				class: true
			});

			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(img.src, img_src_value = /*currpost*/ ctx[6].preview.img.default)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*currpost*/ ctx[6].title);
			set_style(img, "height", "100vh");
			set_style(img, "object-fit", "contain");
			attr_dev(img, "class", "svelte-1qdlkqz");
			add_location(img, file, 972, 8, 25840);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 64 && !src_url_equal(img.src, img_src_value = /*currpost*/ ctx[6].preview.img.default)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty[0] & /*currpost*/ 64 && img_alt_value !== (img_alt_value = /*currpost*/ ctx[6].title)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_20.name,
		type: "if",
		source: "(972:6) {#if currpost.is_image && !currpost.is_album}",
		ctx
	});

	return block;
}

// (992:8) {:else}
function create_else_block_7(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", {
				src: true,
				alt: true,
				style: true,
				class: true
			});

			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(img.src, img_src_value = /*currpost*/ ctx[6].preview.img.album[/*albumindex*/ ctx[4]].default)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*currpost*/ ctx[6].title);
			set_style(img, "height", "100vh");
			set_style(img, "object-fit", "contain");
			attr_dev(img, "class", "svelte-1qdlkqz");
			add_location(img, file, 992, 10, 27095);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost, albumindex*/ 80 && !src_url_equal(img.src, img_src_value = /*currpost*/ ctx[6].preview.img.album[/*albumindex*/ ctx[4]].default)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty[0] & /*currpost*/ 64 && img_alt_value !== (img_alt_value = /*currpost*/ ctx[6].title)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_7.name,
		type: "else",
		source: "(992:8) {:else}",
		ctx
	});

	return block;
}

// (988:8) {#if currpost.preview.img.album[albumindex].is_video}
function create_if_block_26(ctx) {
	let video;
	let source;
	let source_src_value;
	let video_loop_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			video = element("video");
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", { class: true });
			var video_nodes = children(video);
			source = claim_element(video_nodes, "SOURCE", { src: true });
			video_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.img.album[/*albumindex*/ ctx[4]].hires)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 989, 12, 26988);
			attr_dev(video, "class", "video svelte-1qdlkqz");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[9];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[11];
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(video, file, 988, 10, 26738);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, video, anchor);
			append_hydration_dev(video, source);

			if (!mounted) {
				dispose = [
					listen_dev(video, "ended", /*videoended*/ ctx[41], false, false, false, false),
					listen_dev(video, "dblclick", /*toggleFullscreen*/ ctx[42], false, false, false, false),
					listen_dev(video, "mousemove", /*toggleHideCursor*/ ctx[44], false, false, false, false),
					listen_dev(video, "click", /*onVideoPlayerClicked*/ ctx[43], false, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost, albumindex*/ 80 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.img.album[/*albumindex*/ ctx[4]].hires)) {
				attr_dev(source, "src", source_src_value);
			}

			if (dirty[0] & /*$autoplay*/ 512 && video_loop_value !== (video_loop_value = !/*$autoplay*/ ctx[9])) {
				prop_dev(video, "loop", video_loop_value);
			}

			if (dirty[0] & /*$muted*/ 2048) {
				prop_dev(video, "muted", /*$muted*/ ctx[11]);
			}

			if (dirty[0] & /*hideCursor*/ 8192) {
				toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_26.name,
		type: "if",
		source: "(988:8) {#if currpost.preview.img.album[albumindex].is_video}",
		ctx
	});

	return block;
}

// (978:10) {:else}
function create_else_block_6(ctx) {
	let if_block0_anchor;
	let if_block1_anchor;
	let if_block0 = /*currpost*/ ctx[6].preview.vid.webm && create_if_block_24(ctx);
	let if_block1 = /*currpost*/ ctx[6].preview.vid.mp4 && create_if_block_23(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			if_block0_anchor = empty();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			if_block0_anchor = empty();
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_hydration_dev(target, if_block0_anchor, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_hydration_dev(target, if_block1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*currpost*/ ctx[6].preview.vid.webm) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_24(ctx);
					if_block0.c();
					if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*currpost*/ ctx[6].preview.vid.mp4) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_23(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(if_block0_anchor);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_6.name,
		type: "else",
		source: "(978:10) {:else}",
		ctx
	});

	return block;
}

// (976:10) {#if $lores}
function create_if_block_22(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.lores)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 976, 12, 26300);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 64 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.lores)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_22.name,
		type: "if",
		source: "(976:10) {#if $lores}",
		ctx
	});

	return block;
}

// (979:12) {#if currpost.preview.vid.webm}
function create_if_block_24(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.webm)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 979, 14, 26420);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 64 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.webm)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_24.name,
		type: "if",
		source: "(979:12) {#if currpost.preview.vid.webm}",
		ctx
	});

	return block;
}

// (982:12) {#if currpost.preview.vid.mp4}
function create_if_block_23(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.mp4)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 982, 14, 26538);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 64 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[6].preview.vid.mp4)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_23.name,
		type: "if",
		source: "(982:12) {#if currpost.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (998:4) {#if displayposts.length || posts.length}
function create_if_block_10(ctx) {
	let div2;
	let div0;
	let span0;
	let icon0;
	let t0;
	let span1;
	let icon1;
	let t1;
	let span2;
	let icon2;
	let t2;
	let span3;
	let current_block_type_index;
	let if_block0;
	let t3;
	let span4;
	let icon3;
	let t4;
	let t5;
	let span5;
	let current_block_type_index_1;
	let if_block2;
	let t6;
	let t7;
	let div1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t8;
	let div2_resize_listener;
	let current;
	let mounted;
	let dispose;

	icon0 = new Icon({
			props: {
				icon: /*$autoplay*/ ctx[9] ? faPause$1.faPause : faPlay$1.faPlay
			},
			$$inline: true
		});

	icon1 = new Icon({
			props: { icon: faCloudDownloadAlt.faCloudDownloadAlt },
			$$inline: true
		});

	icon2 = new Icon({ props: { icon: faDice$1.faDice }, $$inline: true });
	const if_block_creators = [create_if_block_17, create_if_block_18, create_if_block_19];
	const if_blocks = [];

	function select_block_type_4(ctx, dirty) {
		if (/*$imageVideo*/ ctx[10] == 0) return 0;
		if (/*$imageVideo*/ ctx[10] == 1) return 1;
		if (/*$imageVideo*/ ctx[10] == 2) return 2;
		return -1;
	}

	if (~(current_block_type_index = select_block_type_4(ctx))) {
		if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	icon3 = new Icon({
			props: {
				icon: /*$muted*/ ctx[11] ? faVolumeMute$1.faVolumeMute : faVolumeUp$1.faVolumeUp
			},
			$$inline: true
		});

	let if_block1 = /*tinygoto*/ ctx[15] && create_if_block_15(ctx);
	const if_block_creators_1 = [create_if_block_14, create_else_block_4];
	const if_blocks_1 = [];

	function select_block_type_6(ctx, dirty) {
		if (/*filterExpanded*/ ctx[25]) return 0;
		return 1;
	}

	current_block_type_index_1 = select_block_type_6(ctx);
	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
	let if_block3 = /*filterValue*/ ctx[5] && create_if_block_13(ctx);
	let each_value_1 = /*displayposts*/ ctx[2];
	validate_each_argument(each_value_1);
	const get_key = ctx => /*post*/ ctx[106].id + /*post*/ ctx[106].url;
	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	let if_block4 = !/*tinygoto*/ ctx[15] && create_if_block_11(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			span0 = element("span");
			create_component(icon0.$$.fragment);
			t0 = space();
			span1 = element("span");
			create_component(icon1.$$.fragment);
			t1 = space();
			span2 = element("span");
			create_component(icon2.$$.fragment);
			t2 = space();
			span3 = element("span");
			if (if_block0) if_block0.c();
			t3 = space();
			span4 = element("span");
			create_component(icon3.$$.fragment);
			t4 = space();
			if (if_block1) if_block1.c();
			t5 = space();
			span5 = element("span");
			if_block2.c();
			t6 = space();
			if (if_block3) if_block3.c();
			t7 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t8 = space();
			if (if_block4) if_block4.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span0 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span0_nodes = children(span0);
			claim_component(icon0.$$.fragment, span0_nodes);
			span0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			span1 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span1_nodes = children(span1);
			claim_component(icon1.$$.fragment, span1_nodes);
			span1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			span2 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span2_nodes = children(span2);
			claim_component(icon2.$$.fragment, span2_nodes);
			span2_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			span3 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span3_nodes = children(span3);
			if (if_block0) if_block0.l(span3_nodes);
			span3_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			span4 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span4_nodes = children(span4);
			claim_component(icon3.$$.fragment, span4_nodes);
			span4_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			span5 = claim_element(div0_nodes, "SPAN", { class: true, "data-tooltip": true });
			var span5_nodes = children(span5);
			if_block2.l(span5_nodes);
			span5_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			if (if_block3) if_block3.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			t8 = claim_space(div1_nodes);
			if (if_block4) if_block4.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "btn playpause tooltip svelte-1qdlkqz");
			attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			toggle_class(span0, "play", /*$autoplay*/ ctx[9]);
			add_location(span0, file, 1000, 10, 27476);
			attr_dev(span1, "class", "btn download tooltip svelte-1qdlkqz");
			attr_dev(span1, "data-tooltip", /*downloadstr*/ ctx[20]);
			toggle_class(span1, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span1, file, 1007, 10, 27734);
			attr_dev(span2, "class", "btn dice tooltip svelte-1qdlkqz");
			attr_dev(span2, "data-tooltip", "Shuffle");
			add_location(span2, file, 1014, 10, 27977);
			attr_dev(span3, "class", "btn imagevideo tooltip svelte-1qdlkqz");
			attr_dev(span3, "data-tooltip", /*imageVideoStr*/ ctx[19]);
			add_location(span3, file, 1020, 10, 28163);
			attr_dev(span4, "class", "btn muted tooltip svelte-1qdlkqz");
			attr_dev(span4, "data-tooltip", /*mutedstr*/ ctx[23]);
			add_location(span4, file, 1032, 10, 28598);
			attr_dev(span5, "class", "btn filter tooltip svelte-1qdlkqz");
			attr_dev(span5, "data-tooltip", "Filter ( / )");
			toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			toggle_class(span5, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span5, file, 1047, 10, 29163);
			attr_dev(div0, "class", "btnwrapper svelte-1qdlkqz");
			add_location(div0, file, 999, 8, 27441);
			attr_dev(div1, "class", "numswrapper svelte-1qdlkqz");
			add_location(div1, file, 1072, 8, 30025);
			attr_dev(div2, "class", "goto svelte-1qdlkqz");
			add_render_callback(() => /*div2_elementresize_handler*/ ctx[68].call(div2));
			toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[15]);
			toggle_class(div2, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(div2, file, 998, 6, 27317);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div2, anchor);
			append_hydration_dev(div2, div0);
			append_hydration_dev(div0, span0);
			mount_component(icon0, span0, null);
			append_hydration_dev(div0, t0);
			append_hydration_dev(div0, span1);
			mount_component(icon1, span1, null);
			append_hydration_dev(div0, t1);
			append_hydration_dev(div0, span2);
			mount_component(icon2, span2, null);
			append_hydration_dev(div0, t2);
			append_hydration_dev(div0, span3);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(span3, null);
			}

			append_hydration_dev(div0, t3);
			append_hydration_dev(div0, span4);
			mount_component(icon3, span4, null);
			append_hydration_dev(div0, t4);
			if (if_block1) if_block1.m(div0, null);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, span5);
			if_blocks_1[current_block_type_index_1].m(span5, null);
			/*span5_binding*/ ctx[66](span5);
			append_hydration_dev(div0, t6);
			if (if_block3) if_block3.m(div0, null);
			append_hydration_dev(div2, t7);
			append_hydration_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			append_hydration_dev(div1, t8);
			if (if_block4) if_block4.m(div1, null);
			div2_resize_listener = add_iframe_resize_listener(div2, /*div2_elementresize_handler*/ ctx[68].bind(div2));
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(span0, "click", /*toggleAutoPlay*/ ctx[36], false, false, false, false),
					listen_dev(span1, "click", downloadFiles, false, false, false, false),
					listen_dev(span2, "click", /*shuffleFiles*/ ctx[48], false, false, false, false),
					listen_dev(span3, "click", /*toggleImageVideo*/ ctx[37], false, false, false, false),
					listen_dev(span4, "click", /*toggleMuted*/ ctx[38], false, false, false, false),
					listen_dev(span5, "click", /*toggleFilter*/ ctx[47], false, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};
			if (dirty[0] & /*$autoplay*/ 512) icon0_changes.icon = /*$autoplay*/ ctx[9] ? faPause$1.faPause : faPlay$1.faPlay;
			icon0.$set(icon0_changes);

			if (!current || dirty[0] & /*autoplaystr*/ 2097152) {
				attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			}

			if (!current || dirty[0] & /*$autoplay*/ 512) {
				toggle_class(span0, "play", /*$autoplay*/ ctx[9]);
			}

			if (!current || dirty[0] & /*downloadstr*/ 1048576) {
				attr_dev(span1, "data-tooltip", /*downloadstr*/ ctx[20]);
			}

			if (!current || dirty[0] & /*numFavorite*/ 8) {
				toggle_class(span1, "dlready", /*numFavorite*/ ctx[3]);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_4(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block0) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block0 = if_blocks[current_block_type_index];

					if (!if_block0) {
						if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block0.c();
					} else {
						if_block0.p(ctx, dirty);
					}

					transition_in(if_block0, 1);
					if_block0.m(span3, null);
				} else {
					if_block0 = null;
				}
			}

			if (!current || dirty[0] & /*imageVideoStr*/ 524288) {
				attr_dev(span3, "data-tooltip", /*imageVideoStr*/ ctx[19]);
			}

			const icon3_changes = {};
			if (dirty[0] & /*$muted*/ 2048) icon3_changes.icon = /*$muted*/ ctx[11] ? faVolumeMute$1.faVolumeMute : faVolumeUp$1.faVolumeUp;
			icon3.$set(icon3_changes);

			if (!current || dirty[0] & /*mutedstr*/ 8388608) {
				attr_dev(span4, "data-tooltip", /*mutedstr*/ ctx[23]);
			}

			if (/*tinygoto*/ ctx[15]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*tinygoto*/ 32768) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_15(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div0, t5);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			let previous_block_index_1 = current_block_type_index_1;
			current_block_type_index_1 = select_block_type_6(ctx);

			if (current_block_type_index_1 === previous_block_index_1) {
				if_blocks_1[current_block_type_index_1].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
					if_blocks_1[previous_block_index_1] = null;
				});

				check_outros();
				if_block2 = if_blocks_1[current_block_type_index_1];

				if (!if_block2) {
					if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
					if_block2.c();
				} else {
					if_block2.p(ctx, dirty);
				}

				transition_in(if_block2, 1);
				if_block2.m(span5, null);
			}

			if (!current || dirty[0] & /*filterExpanded*/ 33554432) {
				toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			}

			if (!current || dirty[0] & /*numFavorite*/ 8) {
				toggle_class(span5, "dlready", /*numFavorite*/ ctx[3]);
			}

			if (/*filterValue*/ ctx[5]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_13(ctx);
					if_block3.c();
					if_block3.m(div0, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (dirty[0] & /*index, displayposts, currpost*/ 324 | dirty[1] & /*goto*/ 256) {
				each_value_1 = /*displayposts*/ ctx[2];
				validate_each_argument(each_value_1);
				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, div1, destroy_block, create_each_block_1, t8, get_each_context_1);
			}

			if (!/*tinygoto*/ ctx[15]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty[0] & /*tinygoto*/ 32768) {
						transition_in(if_block4, 1);
					}
				} else {
					if_block4 = create_if_block_11(ctx);
					if_block4.c();
					transition_in(if_block4, 1);
					if_block4.m(div1, null);
				}
			} else if (if_block4) {
				group_outros();

				transition_out(if_block4, 1, 1, () => {
					if_block4 = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*tinygoto*/ 32768) {
				toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[15]);
			}

			if (!current || dirty[0] & /*uiVisible*/ 4096) {
				toggle_class(div2, "hide", /*uiVisible*/ ctx[12] == false);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			transition_in(icon2.$$.fragment, local);
			transition_in(if_block0);
			transition_in(icon3.$$.fragment, local);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block4);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			transition_out(icon2.$$.fragment, local);
			transition_out(if_block0);
			transition_out(icon3.$$.fragment, local);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block4);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(icon0);
			destroy_component(icon1);
			destroy_component(icon2);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d();
			}

			destroy_component(icon3);
			if (if_block1) if_block1.d();
			if_blocks_1[current_block_type_index_1].d();
			/*span5_binding*/ ctx[66](null);
			if (if_block3) if_block3.d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (if_block4) if_block4.d();
			div2_resize_listener();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_10.name,
		type: "if",
		source: "(998:4) {#if displayposts.length || posts.length}",
		ctx
	});

	return block;
}

// (1029:39) 
function create_if_block_19(ctx) {
	let icon;
	let current;
	icon = new Icon({ props: { icon: faImage$1.faImage }, $$inline: true });

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_19.name,
		type: "if",
		source: "(1029:39) ",
		ctx
	});

	return block;
}

// (1027:39) 
function create_if_block_18(ctx) {
	let icon;
	let current;
	icon = new Icon({ props: { icon: faVideo$1.faVideo }, $$inline: true });

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_18.name,
		type: "if",
		source: "(1027:39) ",
		ctx
	});

	return block;
}

// (1025:12) {#if $imageVideo == 0}
function create_if_block_17(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: { icon: faPhotoVideo$1.faPhotoVideo },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_17.name,
		type: "if",
		source: "(1025:12) {#if $imageVideo == 0}",
		ctx
	});

	return block;
}

// (1039:10) {#if tinygoto}
function create_if_block_15(ctx) {
	let span;
	let current_block_type_index;
	let if_block;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_16, create_else_block_5];
	const if_blocks = [];

	function select_block_type_5(ctx, dirty) {
		if (/*loading*/ ctx[17]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_5(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			span = element("span");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true, "data-tooltip": true });
			var span_nodes = children(span);
			if_block.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "btn reload tooltip svelte-1qdlkqz");
			attr_dev(span, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span, "loaderror", /*loadError*/ ctx[28]);
			add_location(span, file, 1039, 12, 28839);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			if_blocks[current_block_type_index].m(span, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(span, "click", /*loadMore*/ ctx[35], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_5(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(span, null);
			}

			if (!current || dirty[0] & /*reloadstr*/ 262144) {
				attr_dev(span, "data-tooltip", /*reloadstr*/ ctx[18]);
			}

			if (!current || dirty[0] & /*loadError*/ 268435456) {
				toggle_class(span, "loaderror", /*loadError*/ ctx[28]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_15.name,
		type: "if",
		source: "(1039:10) {#if tinygoto}",
		ctx
	});

	return block;
}

// (1043:14) {:else}
function create_else_block_5(ctx) {
	let icon;
	let current;
	icon = new Icon({ props: { icon: faSync$1.faSync }, $$inline: true });

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_5.name,
		type: "else",
		source: "(1043:14) {:else}",
		ctx
	});

	return block;
}

// (1041:14) {#if loading}
function create_if_block_16(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: { icon: faSpinner$1.faSpinner },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_16.name,
		type: "if",
		source: "(1041:14) {#if loading}",
		ctx
	});

	return block;
}

// (1063:12) {:else}
function create_else_block_4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: { icon: faSearch$1.faSearch },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_4.name,
		type: "else",
		source: "(1063:12) {:else}",
		ctx
	});

	return block;
}

// (1055:12) {#if filterExpanded}
function create_if_block_14(ctx) {
	let input;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			input = element("input");
			this.h();
		},
		l: function claim(nodes) {
			input = claim_element(nodes, "INPUT", {
				type: true,
				placeholder: true,
				class: true
			});

			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "text");
			attr_dev(input, "placeholder", "Filter posts...");
			attr_dev(input, "class", "svelte-1qdlkqz");
			add_location(input, file, 1055, 14, 29463);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, input, anchor);
			set_input_value(input, /*filterValue*/ ctx[5]);

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_input_handler*/ ctx[65]),
					listen_dev(input, "click", stop_propagation(/*click_handler*/ ctx[62]), false, false, true, false),
					listen_dev(input, "keydown", stop_propagation(/*keydown_handler*/ ctx[63]), false, false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*filterValue*/ 32 && input.value !== /*filterValue*/ ctx[5]) {
				set_input_value(input, /*filterValue*/ ctx[5]);
			}
		},
		i: noop$1,
		o: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(input);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_14.name,
		type: "if",
		source: "(1055:12) {#if filterExpanded}",
		ctx
	});

	return block;
}

// (1067:10) {#if filterValue}
function create_if_block_13(ctx) {
	let span;
	let p;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			span = element("span");
			p = element("p");
			t = text("deep search 🠒");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true, "data-tooltip": true });
			var span_nodes = children(span);
			p = claim_element(span_nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "deep search 🠒");
			p_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-1qdlkqz");
			add_location(p, file, 1068, 14, 29944);
			attr_dev(span, "class", "btn deepsearch tooltip svelte-1qdlkqz");
			attr_dev(span, "data-tooltip", /*deepsearchstr*/ ctx[22]);
			add_location(span, file, 1067, 12, 29833);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			append_hydration_dev(span, p);
			append_hydration_dev(p, t);

			if (!mounted) {
				dispose = listen_dev(span, "click", /*gotoDeepSearch*/ ctx[46], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*deepsearchstr*/ 4194304) {
				attr_dev(span, "data-tooltip", /*deepsearchstr*/ ctx[22]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_13.name,
		type: "if",
		source: "(1067:10) {#if filterValue}",
		ctx
	});

	return block;
}

// (1074:10) {#each displayposts as post, i (post.id + post.url)}
function create_each_block_1(key_1, ctx) {
	let span;
	let img;
	let img_alt_value;
	let img_src_value;
	let t0;
	let p;
	let t1_value = /*i*/ ctx[108] + 1 + "";
	let t1;
	let mounted;
	let dispose;

	function click_handler_1() {
		return /*click_handler_1*/ ctx[67](/*i*/ ctx[108]);
	}

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			span = element("span");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			img = claim_element(span_nodes, "IMG", { class: true, alt: true, src: true });
			t0 = claim_space(span_nodes);
			p = claim_element(span_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "small svelte-1qdlkqz");
			attr_dev(img, "alt", img_alt_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].title);
			if (!src_url_equal(img.src, img_src_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].thumbnail)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1081, 14, 30424);
			attr_dev(p, "class", "small svelte-1qdlkqz");
			toggle_class(p, "curr", /*index*/ ctx[8] === /*i*/ ctx[108]);
			toggle_class(p, "album", /*currpost*/ ctx[6].is_album);
			add_location(p, file, 1082, 14, 30522);
			attr_dev(span, "class", "nums svelte-1qdlkqz");
			toggle_class(span, "currnum", /*index*/ ctx[8] === /*i*/ ctx[108]);
			toggle_class(span, "album", /*currpost*/ ctx[6].is_album);
			toggle_class(span, "favorite", /*displayposts*/ ctx[2][/*i*/ ctx[108]].favorite);
			toggle_class(span, "over18", /*displayposts*/ ctx[2][/*i*/ ctx[108]].over18);
			add_location(span, file, 1074, 12, 30126);
			this.first = span;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			append_hydration_dev(span, img);
			append_hydration_dev(span, t0);
			append_hydration_dev(span, p);
			append_hydration_dev(p, t1);

			if (!mounted) {
				dispose = listen_dev(span, "click", click_handler_1, false, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*displayposts*/ 4 && img_alt_value !== (img_alt_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty[0] & /*displayposts*/ 4 && !src_url_equal(img.src, img_src_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].thumbnail)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty[0] & /*displayposts*/ 4 && t1_value !== (t1_value = /*i*/ ctx[108] + 1 + "")) set_data_dev(t1, t1_value);

			if (dirty[0] & /*index, displayposts*/ 260) {
				toggle_class(p, "curr", /*index*/ ctx[8] === /*i*/ ctx[108]);
			}

			if (dirty[0] & /*currpost*/ 64) {
				toggle_class(p, "album", /*currpost*/ ctx[6].is_album);
			}

			if (dirty[0] & /*index, displayposts*/ 260) {
				toggle_class(span, "currnum", /*index*/ ctx[8] === /*i*/ ctx[108]);
			}

			if (dirty[0] & /*currpost*/ 64) {
				toggle_class(span, "album", /*currpost*/ ctx[6].is_album);
			}

			if (dirty[0] & /*displayposts*/ 4) {
				toggle_class(span, "favorite", /*displayposts*/ ctx[2][/*i*/ ctx[108]].favorite);
			}

			if (dirty[0] & /*displayposts*/ 4) {
				toggle_class(span, "over18", /*displayposts*/ ctx[2][/*i*/ ctx[108]].over18);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(1074:10) {#each displayposts as post, i (post.id + post.url)}",
		ctx
	});

	return block;
}

// (1086:10) {#if !tinygoto}
function create_if_block_11(ctx) {
	let span0;
	let p;
	let t0_value = /*displayposts*/ ctx[2].length + "";
	let t0;
	let t1;
	let t2_value = /*posts*/ ctx[0].length + "";
	let t2;
	let t3;
	let span1;
	let current_block_type_index;
	let if_block;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_12, create_else_block_3];
	const if_blocks = [];

	function select_block_type_7(ctx, dirty) {
		if (/*loading*/ ctx[17]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_7(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			span0 = element("span");
			p = element("p");
			t0 = text(t0_value);
			t1 = text("/");
			t2 = text(t2_value);
			t3 = space();
			span1 = element("span");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			span0 = claim_element(nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			p = claim_element(span0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, t0_value);
			t1 = claim_text(p_nodes, "/");
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			span1 = claim_element(nodes, "SPAN", { class: true, "data-tooltip": true });
			var span1_nodes = children(span1);
			if_block.l(span1_nodes);
			span1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-1qdlkqz");
			add_location(p, file, 1087, 14, 30764);
			attr_dev(span0, "class", "displayinfo svelte-1qdlkqz");
			toggle_class(span0, "filterExpanded", /*filterValue*/ ctx[5]);
			add_location(span0, file, 1086, 12, 30686);
			attr_dev(span1, "class", "btn reload tooltip svelte-1qdlkqz");
			attr_dev(span1, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span1, "loaderror", /*loadError*/ ctx[28]);
			add_location(span1, file, 1089, 12, 30840);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span0, anchor);
			append_hydration_dev(span0, p);
			append_hydration_dev(p, t0);
			append_hydration_dev(p, t1);
			append_hydration_dev(p, t2);
			insert_hydration_dev(target, t3, anchor);
			insert_hydration_dev(target, span1, anchor);
			if_blocks[current_block_type_index].m(span1, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(span1, "click", /*loadMore*/ ctx[35], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty[0] & /*displayposts*/ 4) && t0_value !== (t0_value = /*displayposts*/ ctx[2].length + "")) set_data_dev(t0, t0_value);
			if ((!current || dirty[0] & /*posts*/ 1) && t2_value !== (t2_value = /*posts*/ ctx[0].length + "")) set_data_dev(t2, t2_value);

			if (!current || dirty[0] & /*filterValue*/ 32) {
				toggle_class(span0, "filterExpanded", /*filterValue*/ ctx[5]);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_7(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(span1, null);
			}

			if (!current || dirty[0] & /*reloadstr*/ 262144) {
				attr_dev(span1, "data-tooltip", /*reloadstr*/ ctx[18]);
			}

			if (!current || dirty[0] & /*loadError*/ 268435456) {
				toggle_class(span1, "loaderror", /*loadError*/ ctx[28]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(span1);
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_11.name,
		type: "if",
		source: "(1086:10) {#if !tinygoto}",
		ctx
	});

	return block;
}

// (1093:14) {:else}
function create_else_block_3(ctx) {
	let icon;
	let current;
	icon = new Icon({ props: { icon: faSync$1.faSync }, $$inline: true });

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_3.name,
		type: "else",
		source: "(1093:14) {:else}",
		ctx
	});

	return block;
}

// (1091:14) {#if loading}
function create_if_block_12(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: { icon: faSpinner$1.faSpinner },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop$1,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_12.name,
		type: "if",
		source: "(1091:14) {#if loading}",
		ctx
	});

	return block;
}

// (1103:0) {#if $prefetch}
function create_if_block(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = /*nexturls*/ ctx[7];
	validate_each_argument(each_value);
	const get_key = ctx => /*nexturl*/ ctx[103].preview.img.default;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "prefetch");
			add_location(div, file, 1103, 2, 31226);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls, $lores*/ 536871040 | dirty[1] & /*$hires*/ 2) {
				each_value = /*nexturls*/ ctx[7];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(1103:0) {#if $prefetch}",
		ctx
	});

	return block;
}

// (1117:8) {:else}
function create_else_block_2(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "prefetch");
			if (!src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].default)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1117, 10, 31777);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].default)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_2.name,
		type: "else",
		source: "(1117:8) {:else}",
		ctx
	});

	return block;
}

// (1115:34) 
function create_if_block_9(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "prefetch");
			if (!src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.default)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1115, 10, 31694);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.default)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_9.name,
		type: "if",
		source: "(1115:34) ",
		ctx
	});

	return block;
}

// (1113:8) {#if nexturl.is_album}
function create_if_block_8(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "prefetch");
			if (!src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].default)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1113, 10, 31583);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].default)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_8.name,
		type: "if",
		source: "(1113:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1106:6) {#if $hires}
function create_if_block_6(ctx) {
	let if_block_anchor;

	function select_block_type_9(ctx, dirty) {
		if (/*nexturl*/ ctx[103].is_album) return create_if_block_7;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_9(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_9(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_6.name,
		type: "if",
		source: "(1106:6) {#if $hires}",
		ctx
	});

	return block;
}

// (1109:8) {:else}
function create_else_block_1(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "prefetch-hires");
			if (!src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].url)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1109, 10, 31467);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].url)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(1109:8) {:else}",
		ctx
	});

	return block;
}

// (1107:8) {#if nexturl.is_album}
function create_if_block_7(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "prefetch-hires");
			if (!src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].hires)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1107, 10, 31371);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].hires)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_7.name,
		type: "if",
		source: "(1107:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1121:6) {#if nexturl.is_video}
function create_if_block_1(ctx) {
	let video;

	function select_block_type_10(ctx, dirty) {
		if (/*$lores*/ ctx[29]) return create_if_block_2;
		if (/*nexturl*/ ctx[103].preview) return create_if_block_3;
		return create_else_block;
	}

	let current_block_type = select_block_type_10(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			video = element("video");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", {});
			var video_nodes = children(video);
			if_block.l(video_nodes);
			video_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video.playsInline = true;
			video.autoplay = true;
			video.loop = true;
			video.muted = true;
			add_location(video, file, 1121, 8, 31885);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, video, anchor);
			if_block.m(video, null);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_10(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(video, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(1121:6) {#if nexturl.is_video}",
		ctx
	});

	return block;
}

// (1133:12) {:else}
function create_else_block(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].default)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 1133, 14, 32333);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].default)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(1133:12) {:else}",
		ctx
	});

	return block;
}

// (1126:12) {#if nexturl.preview}
function create_if_block_3(ctx) {
	let if_block0_anchor;
	let if_block1_anchor;
	let if_block0 = /*nexturl*/ ctx[103].preview.vid.webm && create_if_block_5(ctx);
	let if_block1 = /*nexturl*/ ctx[103].preview.vid.mp4 && create_if_block_4(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			if_block0_anchor = empty();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			if_block0_anchor = empty();
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_hydration_dev(target, if_block0_anchor, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_hydration_dev(target, if_block1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*nexturl*/ ctx[103].preview.vid.webm) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*nexturl*/ ctx[103].preview.vid.mp4) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(if_block0_anchor);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(1126:12) {#if nexturl.preview}",
		ctx
	});

	return block;
}

// (1123:10) {#if $lores}
function create_if_block_2(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.lores)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 1123, 12, 31960);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.lores)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(1123:10) {#if $lores}",
		ctx
	});

	return block;
}

// (1127:14) {#if nexturl.preview.vid.webm}
function create_if_block_5(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.webm)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 1127, 16, 32116);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.webm)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5.name,
		type: "if",
		source: "(1127:14) {#if nexturl.preview.vid.webm}",
		ctx
	});

	return block;
}

// (1130:14) {#if nexturl.preview.vid.mp4}
function create_if_block_4(ctx) {
	let source;
	let source_src_value;

	const block = {
		c: function create() {
			source = element("source");
			this.h();
		},
		l: function claim(nodes) {
			source = claim_element(nodes, "SOURCE", { src: true });
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.mp4)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 1130, 16, 32238);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 128 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.mp4)) {
				attr_dev(source, "src", source_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(source);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(1130:14) {#if nexturl.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (1105:4) {#each nexturls as nexturl (nexturl.preview.img.default)}
function create_each_block(key_1, ctx) {
	let first;
	let t;
	let if_block1_anchor;

	function select_block_type_8(ctx, dirty) {
		if (/*$hires*/ ctx[32]) return create_if_block_6;
		if (/*nexturl*/ ctx[103].is_album) return create_if_block_8;
		if (/*nexturl*/ ctx[103].preview) return create_if_block_9;
		return create_else_block_2;
	}

	let current_block_type = select_block_type_8(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*nexturl*/ ctx[103].is_video && create_if_block_1(ctx);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			if_block0.l(nodes);
			t = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, first, anchor);
			if_block0.m(target, anchor);
			insert_hydration_dev(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_hydration_dev(target, if_block1_anchor, anchor);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type_8(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(t.parentNode, t);
				}
			}

			if (/*nexturl*/ ctx[103].is_video) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			if_block0.d(detaching);
			if (detaching) detach_dev(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(1105:4) {#each nexturls as nexturl (nexturl.preview.img.default)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div5;
	let div4;
	let div0;
	let t1;
	let t2;
	let div2;
	let span;
	let icon;
	let t3;
	let div1;
	let settings;
	let updating_showSettings;
	let t4;
	let div3;
	let t5;
	let t6;
	let if_block4_anchor;
	let current;
	let mounted;
	let dispose;

	document_1.title = title_value = "tumblrpx - " + (/*slugstr*/ ctx[1]
	? `t/${/*slugstr*/ ctx[1]}`
	: "tumblr.com");

	function select_block_type(ctx, dirty) {
		if (/*currpost*/ ctx[6].dims && /*currpost*/ ctx[6].dims.width > 0) return create_if_block_28;
		return create_else_block_8;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*currpost*/ ctx[6].subreddit && create_if_block_27(ctx);

	icon = new Icon({
			props: { icon: faCog.faCog },
			$$inline: true
		});

	function settings_showSettings_binding(value) {
		/*settings_showSettings_binding*/ ctx[64](value);
	}

	let settings_props = {};

	if (/*showSettings*/ ctx[26] !== void 0) {
		settings_props.showSettings = /*showSettings*/ ctx[26];
	}

	settings = new Settings({ props: settings_props, $$inline: true });
	binding_callbacks.push(() => bind(settings, 'showSettings', settings_showSettings_binding));
	settings.$on("apiKeyChange", /*reloadData*/ ctx[40]);

	function select_block_type_1(ctx, dirty) {
		if (/*currpost*/ ctx[6].is_image && !/*currpost*/ ctx[6].is_album) return create_if_block_20;
		if (/*currpost*/ ctx[6].is_video && /*renderVideo*/ ctx[27]) return create_if_block_21;
		if (/*currpost*/ ctx[6].is_album) return create_if_block_25;
	}

	let current_block_type_1 = select_block_type_1(ctx);
	let if_block2 = current_block_type_1 && current_block_type_1(ctx);
	let if_block3 = (/*displayposts*/ ctx[2].length || /*posts*/ ctx[0].length) && create_if_block_10(ctx);
	let if_block4 = /*$prefetch*/ ctx[31] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			div2 = element("div");
			span = element("span");
			create_component(icon.$$.fragment);
			t3 = space();
			div1 = element("div");
			create_component(settings.$$.fragment);
			t4 = space();
			div3 = element("div");
			if (if_block2) if_block2.c();
			t5 = space();
			if (if_block3) if_block3.c();
			t6 = space();
			if (if_block4) if_block4.c();
			if_block4_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-ppmq07', document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if_block0.l(div0_nodes);
			t1 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			span = claim_element(div2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			claim_component(icon.$$.fragment, span_nodes);
			span_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(settings.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			if (if_block2) if_block2.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div4_nodes);
			if (if_block3) if_block3.l(div4_nodes);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			if (if_block4) if_block4.l(nodes);
			if_block4_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "title svelte-1qdlkqz");
			toggle_class(div0, "hide", !/*uiVisible*/ ctx[12] || !/*titleVisible*/ ctx[14]);
			toggle_class(div0, "favorite", /*currpost*/ ctx[6].favorite);
			add_location(div0, file, 949, 4, 24957);
			attr_dev(span, "class", "btn cog svelte-1qdlkqz");
			toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			toggle_class(span, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(span, file, 963, 6, 25405);
			attr_dev(div1, "class", "div svelte-1qdlkqz");
			toggle_class(div1, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(div1, file, 966, 6, 25588);
			attr_dev(div2, "class", "settings svelte-1qdlkqz");
			add_location(div2, file, 961, 4, 25369);
			attr_dev(div3, "class", "main-media-container svelte-1qdlkqz");
			add_location(div3, file, 970, 4, 25745);
			attr_dev(div4, "class", "hero svelte-1qdlkqz");
			add_location(div4, file, 948, 2, 24934);
			attr_dev(div5, "class", "wrapper svelte-1qdlkqz");
			toggle_class(div5, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(div5, file, 947, 0, 24877);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div5, anchor);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div0);
			if_block0.m(div0, null);
			append_hydration_dev(div0, t1);
			if (if_block1) if_block1.m(div0, null);
			append_hydration_dev(div4, t2);
			append_hydration_dev(div4, div2);
			append_hydration_dev(div2, span);
			mount_component(icon, span, null);
			append_hydration_dev(div2, t3);
			append_hydration_dev(div2, div1);
			mount_component(settings, div1, null);
			append_hydration_dev(div4, t4);
			append_hydration_dev(div4, div3);
			if (if_block2) if_block2.m(div3, null);
			append_hydration_dev(div4, t5);
			if (if_block3) if_block3.m(div4, null);
			insert_hydration_dev(target, t6, anchor);
			if (if_block4) if_block4.m(target, anchor);
			insert_hydration_dev(target, if_block4_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window_1, "keydown", /*keydown*/ ctx[50], false, false, false, false),
					listen_dev(window_1, "wheel", /*wheel*/ ctx[49], false, false, false, false),
					listen_dev(span, "click", /*toggleSettings*/ ctx[45], false, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty[0] & /*slugstr*/ 2) && title_value !== (title_value = "tumblrpx - " + (/*slugstr*/ ctx[1]
			? `t/${/*slugstr*/ ctx[1]}`
			: "tumblr.com"))) {
				document_1.title = title_value;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div0, t1);
				}
			}

			if (/*currpost*/ ctx[6].subreddit) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_27(ctx);
					if_block1.c();
					if_block1.m(div0, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!current || dirty[0] & /*uiVisible, titleVisible*/ 20480) {
				toggle_class(div0, "hide", !/*uiVisible*/ ctx[12] || !/*titleVisible*/ ctx[14]);
			}

			if (!current || dirty[0] & /*currpost*/ 64) {
				toggle_class(div0, "favorite", /*currpost*/ ctx[6].favorite);
			}

			if (!current || dirty[0] & /*showSettings*/ 67108864) {
				toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			}

			if (!current || dirty[0] & /*uiVisible*/ 4096) {
				toggle_class(span, "hide", /*uiVisible*/ ctx[12] == false);
			}

			const settings_changes = {};

			if (!updating_showSettings && dirty[0] & /*showSettings*/ 67108864) {
				updating_showSettings = true;
				settings_changes.showSettings = /*showSettings*/ ctx[26];
				add_flush_callback(() => updating_showSettings = false);
			}

			settings.$set(settings_changes);

			if (!current || dirty[0] & /*uiVisible*/ 4096) {
				toggle_class(div1, "hide", /*uiVisible*/ ctx[12] == false);
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if (if_block2) if_block2.d(1);
				if_block2 = current_block_type_1 && current_block_type_1(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(div3, null);
				}
			}

			if (/*displayposts*/ ctx[2].length || /*posts*/ ctx[0].length) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*displayposts, posts*/ 5) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_10(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(div4, null);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*hideCursor*/ 8192) {
				toggle_class(div5, "hide-cursor", /*hideCursor*/ ctx[13]);
			}

			if (/*$prefetch*/ ctx[31]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(settings.$$.fragment, local);
			transition_in(if_block3);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(settings.$$.fragment, local);
			transition_out(if_block3);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div5);
			if_block0.d();
			if (if_block1) if_block1.d();
			destroy_component(icon);
			destroy_component(settings);

			if (if_block2) {
				if_block2.d();
			}

			if (if_block3) if_block3.d();
			if (detaching) detach_dev(t6);
			if (if_block4) if_block4.d(detaching);
			if (detaching) detach_dev(if_block4_anchor);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function uniqBy(a, key) {
	var seen = {};

	return a.filter(function (item) {
		var k = key(item);
		return seen.hasOwnProperty(k) ? false : seen[k] = true;
	});
}

async function downloadFiles() {
	window.open("/download", "_blank");
}

function instance($$self, $$props, $$invalidate) {
	let loadError;
	let $autoplay;
	let $favorite;
	let $over18;
	let $portraitLandscape;
	let $imageVideo;
	let $apiKey;
	let $prefetchNum;
	let $muted;
	let $autoplayinterval;
	let $gotoElWidth;
	let $hideUIonStart;
	let $lores;
	let $_gotoElWidth;
	let $prefetch;
	let $hires;
	validate_store(autoplay, 'autoplay');
	component_subscribe($$self, autoplay, $$value => $$invalidate(9, $autoplay = $$value));
	validate_store(favorite, 'favorite');
	component_subscribe($$self, favorite, $$value => $$invalidate(76, $favorite = $$value));
	validate_store(over18, 'over18');
	component_subscribe($$self, over18, $$value => $$invalidate(57, $over18 = $$value));
	validate_store(portraitLandscape, 'portraitLandscape');
	component_subscribe($$self, portraitLandscape, $$value => $$invalidate(58, $portraitLandscape = $$value));
	validate_store(imageVideo, 'imageVideo');
	component_subscribe($$self, imageVideo, $$value => $$invalidate(10, $imageVideo = $$value));
	validate_store(apiKey, 'apiKey');
	component_subscribe($$self, apiKey, $$value => $$invalidate(59, $apiKey = $$value));
	validate_store(prefetchNum, 'prefetchNum');
	component_subscribe($$self, prefetchNum, $$value => $$invalidate(60, $prefetchNum = $$value));
	validate_store(muted, 'muted');
	component_subscribe($$self, muted, $$value => $$invalidate(11, $muted = $$value));
	validate_store(autoplayinterval, 'autoplayinterval');
	component_subscribe($$self, autoplayinterval, $$value => $$invalidate(77, $autoplayinterval = $$value));
	validate_store(hideUIonStart, 'hideUIonStart');
	component_subscribe($$self, hideUIonStart, $$value => $$invalidate(78, $hideUIonStart = $$value));
	validate_store(lores, 'lores');
	component_subscribe($$self, lores, $$value => $$invalidate(29, $lores = $$value));
	validate_store(prefetch, 'prefetch');
	component_subscribe($$self, prefetch, $$value => $$invalidate(31, $prefetch = $$value));
	validate_store(hires, 'hires');
	component_subscribe($$self, hires, $$value => $$invalidate(32, $hires = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('FullscreenLayout', slots, []);
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
	hideUIonStart.useLocalStorage(false);
	apiKey.useLocalStorage('');
	let { params, slugstr } = $$props;
	let { posts = [] } = $$props;
	let { after = null } = $$props;
	let { res } = $$props;
	let { mode = "tumblr" } = $$props;
	let { pageType = "user" } = $$props;
	console.log("Posts from API:", posts);
	let data;
	let displayposts = [];
	console.log("Display Posts (initial):", displayposts);
	let uiVisible = !$hideUIonStart;
	let hideCursor = $hideUIonStart;
	let hideCursorTimerId = 0;
	let titleVisible = true;
	let numFavorite;
	let tinygoto;
	let title;
	let albumindex = 0;
	let blogIdentifier;

	// 1440 is to set numCols to 3. Setting to `0` would mean we start with 1 col, and then quickly update to 3 on desktop.
	const _gotoElWidth = writable(1440);

	validate_store(_gotoElWidth, '_gotoElWidth');
	component_subscribe($$self, _gotoElWidth, value => $$invalidate(30, $_gotoElWidth = value));
	const gotoElWidth = _gotoElWidth.pipe(throttle(500), startWith(1440));
	validate_store(gotoElWidth, 'gotoElWidth');
	component_subscribe($$self, gotoElWidth, value => $$invalidate(61, $gotoElWidth = value));
	let loading = false;
	let reloadstr = "Load more";
	let navigation = false;
	let imageVideoStr = "";
	let portraitLandscapeStr = "";
	let downloadstr = "";
	let autoplaystr = "";
	let over18str = "";
	let deepsearchstr = ""; // Declare deepsearchstr
	let showhidestr = "Show (h)";
	let mutedstr = "Sound Off";
	let autoplaytimer;
	let filterRef;
	let filterExpanded = false;
	let filterValue = "";
	let subredditSearchValue = ""; // Declare subredditSearchValue
	let showSettings = false;
	let currpost = { title: "Loading .." };
	let nexturls = [];
	let index = 0;

	async function loadMore() {
		if (loading) return;
		$$invalidate(17, loading = true);
		$$invalidate(18, reloadstr = "Loading ..");
		let newposts;

		if (mode === "tumblr") {
			let useApiKey = $apiKey || API_KEY;
			let url;

			if (pageType === 'search') {
				url = `https://api.tumblr.com/v2/tagged?tag=${blogIdentifier}&api_key=${useApiKey}&before=${after || ''}&${queryp(params)}`;
			} else {
				url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${useApiKey}&offset=${after || ''}&${queryp(params)}`;
			}

			$$invalidate(52, { posts: newposts, after, ...res } = await get_tumblr_posts(url), after, $$invalidate(51, res));
		}

		console.log("[loadMore] API Response (res object):", res);
		console.log("[loadMore] New posts received:", newposts.length);
		console.log("[loadMore] Current posts array before combining:", posts.length);

		// load `favorite` from localstorage
		for (let p of newposts) {
			p["favorite"] = !!($favorite || {})[p.url]?.favorite;
		}

		// Combine `posts` and `newposts` and remove duplicates from multiple network requests
		$$invalidate(0, posts = [...posts, ...newposts].reduce((r, i) => !r.some(j => i.id === j.id) ? [...r, i] : r, []));

		console.log("[loadMore] Posts after initial combine (before URL dedupe): ", posts.length);

		// Remove duplicates, based on `url`
		$$invalidate(0, posts = posts.filter((v, i, a) => a.findIndex(t => t.url == v.url) === i));

		console.log("[loadMore] After dedupe/Total loaded: ", posts.length);
		console.log("[loadMore] Next 'after' value:", after);
		$$invalidate(17, loading = false);
		$$invalidate(18, reloadstr = "Load more");
	}

	onMount(async () => {
		// Always try to load data on mount, regardless of API key status
		loadMore();

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

	async function prev() {
		if (currpost.is_album && albumindex > 0) {
			albumPrev();
		} else {
			itemPrev();
			await tick(); // Ensure currpost is updated

			if (currpost.is_album) {
				$$invalidate(4, albumindex = currpost.preview.img.album.length - 1);
			}
		}
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

	function toggleAutoPlay() {
		if ($autoplay) {
			stopAutoPlay();
		} else {
			startAutoPlay();
		}
	}

	function toggleImageVideo() {
		set_store_value(imageVideo, $imageVideo = $imageVideo + 1, $imageVideo);

		if ($imageVideo == 3) {
			set_store_value(imageVideo, $imageVideo = 0, $imageVideo);
		}
	}

	function toggleMuted() {
		set_store_value(muted, $muted = !$muted, $muted);
	}

	function togglePortraitLandscape() {
		set_store_value(portraitLandscape, $portraitLandscape = $portraitLandscape + 1, $portraitLandscape);

		if ($portraitLandscape == 3) {
			set_store_value(portraitLandscape, $portraitLandscape = 0, $portraitLandscape);
		}
	}

	let renderVideo = true;

	// Some operations like fav/unfav causes video to re-render
	// since we're changing post.favorite. This should help skip it
	let skipRenderVideo = false;

	function reMountVideo() {
		$$invalidate(27, renderVideo = false);
		setTimeout(() => $$invalidate(27, renderVideo = true), 0);
	}

	// API key changes are handled manually by the user
	// No automatic reloading or settings popup
	// Only show settings if we have no valid API key AND no posts loaded
	// Settings window will only appear when user manually clicks the settings button
	// No automatic popup on refresh or load
	function goto$1(i) {
		$$invalidate(4, albumindex = 0);
		$$invalidate(8, index = i);
		let itemNum = displayposts.length - index;

		// If autoplay is on and we're jumping to 2 or 3, we must load
		if ((itemNum == 2 || itemNum == 3) && $autoplay) {
			console.log("[goto-to-2/3]: loading ..");
			loadMore();
		}

		// Last item
		if (itemNum === 1) {
			console.log("[goto-to-lastitem]: loading ..");
			loadMore();
		}

		if ($autoplay) stopAndStartAutoPlay();
	}

	function reloadData() {
		// Always reload data, let the API handle errors
		$$invalidate(0, posts = []);

		$$invalidate(2, displayposts = []);
		$$invalidate(52, after = null);
		loadMore();
	}

	function videoended() {
		itemNext();
	}

	function itemNext() {
		$$invalidate(4, albumindex = 0); // Always reset album index to 0 when moving to a new post
		let itemNum = displayposts.length - 1 - index;

		// Last item, dont go past the last item
		if (itemNum <= 1) {
			$$invalidate(8, index = displayposts.length - 1);
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

		$$invalidate(8, index += 1);
		if ($autoplay) stopAndStartAutoPlay();
	}

	async function itemPrev() {
		if (index === 0) return;
		$$invalidate(8, index -= 1);
		$$invalidate(4, albumindex = 0); // Always reset album index to 0 when moving to a new post
		await tick(); // Ensure currpost is updated before accessing its properties

		if (displayposts.length - index === 3) {
			loadMore();
		}

		if ($autoplay) stopAndStartAutoPlay();
	}

	function toggleFullscreen() {
		var elem = document.body;

		if (document.fullscreenElement || // alternative standard method
		document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
			// current working methods
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}

			if (!uiVisible) {
				toggleUIVisiblity();
			}
		} else {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			}

			if (uiVisible) {
				toggleUIVisiblity();
			}
		}
	}

	function onVideoPlayerClicked(ev) {
		const r = document.getElementById('videoplayerid').getBoundingClientRect();
		const x = ev.offsetX / r.width;
		const activePart = 1 / 5;

		if (x < activePart) {
			itemPrev();
		} else if (x > 1 - activePart) {
			itemNext();
		}
	}

	function toggleHideCursor() {
		// If the UI is currently visible, the cursor should always be visible.
		// We don't want to set a timer to hide it in this state.
		if (uiVisible) {
			$$invalidate(13, hideCursor = false); // Ensure cursor is visible

			if (hideCursorTimerId) {
				clearTimeout(hideCursorTimerId); // Clear any lingering timer
				hideCursorTimerId = 0;
			}

			return; // Stop here, no further action needed
		}

		// If the UI is hidden, we manage cursor visibility based on inactivity.
		$$invalidate(13, hideCursor = false); // Show cursor immediately on mouse movement

		if (hideCursorTimerId) {
			clearTimeout(hideCursorTimerId); // Clear previous timer
		}

		hideCursorTimerId = setTimeout(
			() => {
				hideCursorTimerId = 0;
				$$invalidate(13, hideCursor = true); // Hide cursor after 3 seconds of inactivity
			},
			3000
		);
	}

	function toggleTitleVisibility() {
		$$invalidate(14, titleVisible = !titleVisible);
	}

	function toggleUIVisiblity() {
		$$invalidate(12, uiVisible = !uiVisible);
		showhidestr = uiVisible ? "Hide (h)" : "Show (h)";

		if (hideCursorTimerId) {
			clearTimeout(hideCursorTimerId);
			hideCursorTimerId = 0;
		}

		if (!uiVisible) {
			$$invalidate(13, hideCursor = true);
		} else {
			$$invalidate(13, hideCursor = false);
		}
	}

	function toggleSettings() {
		$$invalidate(26, showSettings = !showSettings);
	}

	function gotoDeepSearch() {
		let prefix = "";

		if (slugstr) {
			prefix = `/r/${subreddit}`;
		} else {
			prefix = ``;
		}

		navigation = true;
		goto(`${prefix}/search?q=${filterValue}&restrict_sr=on&include_over_18=on&sort=relevant&t=all`);
	}

	function hideSettings() {
		$$invalidate(26, showSettings = false);
	}

	async function expandFilter() {
		$$invalidate(25, filterExpanded = true);
		await tick();

		// Focus the input if we just opened it
		if (filterExpanded) filterRef.querySelector("input").focus();
	}

	async function toggleFilter() {
		$$invalidate(25, filterExpanded = !filterExpanded);
		await tick();

		// Focus the input if we just opened it
		if (filterExpanded) filterRef.querySelector("input").focus();
	}

	async function shuffleFiles() {
		$$invalidate(2, displayposts = lodash_shuffle(displayposts));
	}

	function openMedia() {
		window.open(currpost.permalink, "_blank");
	}

	function copySrcToClipboard() {
		let text;

		if (currpost.url.startsWith("https://v.redd.it/") || currpost.url.includes("redgifs.com")) {
			text = currpost.preview.vid.mp4;
		} else if (currpost.is_image && !currpost.is_album) {
			text = currpost.url;
		} else if (currpost.is_video) {
			text = currpost.url;
		} else if (currpost.is_album) {
			if (currpost.preview.img.album[albumindex].is_video) {
				text = currpost.preview.img.album[albumindex].hires;
			} else {
				text = currpost.preview.img.album[albumindex].hires;
			}
		}

		navigator.clipboard.writeText(text).then(() => console.log(`Copied: ${text}`));
	}

	function toggleOver18() {
		set_store_value(over18, $over18 = $over18 + 1, $over18);

		if ($over18 == 3) {
			set_store_value(over18, $over18 = 0, $over18);
		}

		over18.set($over18);
	}

	function removeAllFavorite(removeAllFromLocalStorage) {
		$$invalidate(56, skipRenderVideo = true);

		for (const [i, post] of displayposts.entries()) {
			// For reactivity
			$$invalidate(2, displayposts[i].favorite = false, displayposts);

			// If removeAllFromLocalStorage is true, then we'll remove everythign in one shot
			// no need to do it one by one
			if (removeAllFromLocalStorage == false) {
				// Localstorage
				set_store_value(favorite, $favorite[post.url] = undefined, $favorite);

				set_store_value(favorite, $favorite = JSON.parse(JSON.stringify($favorite)), $favorite);
				favorite.set($favorite);
			}
		}

		if (removeAllFromLocalStorage) {
			favorite.set({});
		}
	}

	function toggleFavorite() {
		$$invalidate(56, skipRenderVideo = true);
		$$invalidate(2, displayposts[index].favorite = !displayposts[index].favorite, displayposts);
		let url = displayposts[index].url;
		set_store_value(favorite, $favorite[url] = undefined, $favorite);
		set_store_value(favorite, $favorite = JSON.parse(JSON.stringify($favorite)), $favorite);
		set_store_value(favorite, $favorite[url] = displayposts[index], $favorite);
		favorite.set($favorite);
	}

	function albumPrev() {
		if (!currpost.is_album) return;
		$$invalidate(4, albumindex -= 1);
		if ($autoplay) stopAndStartAutoPlay();
	}

	function isEndOfAlbum() {
		return albumindex == currpost.preview.img.album.length - 1;
	}

	function isStartOfAlbum() {
		return albumindex == 0;
	}

	function albumNext() {
		if (!currpost.is_album) return;

		if (isEndOfAlbum()) {
			$$invalidate(4, albumindex = 0);
		} else {
			$$invalidate(4, albumindex += 1);
		}

		if ($autoplay) stopAndStartAutoPlay();
	}

	function wheel(event) {
		if (event.deltaY > 0) {
			next();
		} else if (event.deltaY < 0) {
			prev();
		}
	}

	function keydown(event) {
		// up
		if (event.keyCode == 38) {
			next();
		}

		// down
		if (event.keyCode == 40) {
			prev();
		}

		// s
		if (event.keyCode == 83) {
			toggleMuted();
		}

		// q, p
		if (event.keyCode == 81 || event.keyCode == 80) {
			toggleAutoPlay();
		}

		// f
		if (event.keyCode == 70 && !event.ctrlKey) {
			toggleFullscreen();
		}

		// slash, f
		if (event.keyCode == 191) {
			expandFilter();

			// We need this, otherwise filter box will have '/' because of autofocus
			event.preventDefault();
		}

		// x
		if (event.keyCode == 88) {
			if (event.shiftKey) {
				removeAllFavorite(event.ctrlKey); // if ctrl+shift+x is remove everything from localstorage
			} else {
				toggleFavorite();
			}
		}

		if (event.ctrlKey) {
			return;
		}

		// o
		if (event.keyCode == 79) {
			openMedia();
		}

		// i
		if (event.keyCode == 73) {
			openMedia();
		}

		// o
		if (event.keyCode == 79) {
			window.open(currpost.permalink, "_blank");
		}

		// h
		if (event.keyCode == 72) {
			toggleUIVisiblity();
		}

		// t
		if (event.keyCode == 84) {
			toggleTitleVisibility();
		}

		// v
		if (event.keyCode == 118) {
			toggleImageVideo();
		}

		// c
		if (event.keyCode == 67) {
			copySrcToClipboard();
		}

		const n = event.keyCode - 48;

		if (n >= 0 && n <= 3) {
			const video = document.getElementById('videoplayerid');
			video.currentTime = n * video.duration / 4;
		}

		// Left Arrow, a, k, Page-up
		if (event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 75 || event.keyCode == 33) {
			if (event.shiftKey) {
				const video = document.getElementById('videoplayerid');
				video.currentTime -= 5;
			} else {
				itemPrev();
			}
		} else // Right Arrow, d, j, Space, Page-down
		if (event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 74 || event.keyCode == 32 || event.keyCode == 34) {
			if (event.shiftKey) {
				const video = document.getElementById('videoplayerid');
				video.currentTime += 5;
			} else {
				itemNext();
			}
		}
	}

	$$self.$$.on_mount.push(function () {
		if (params === undefined && !('params' in $$props || $$self.$$.bound[$$self.$$.props['params']])) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'params'");
		}

		if (slugstr === undefined && !('slugstr' in $$props || $$self.$$.bound[$$self.$$.props['slugstr']])) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'slugstr'");
		}

		if (res === undefined && !('res' in $$props || $$self.$$.bound[$$self.$$.props['res']])) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'res'");
		}
	});

	const writable_props = ['params', 'slugstr', 'posts', 'after', 'res', 'mode', 'pageType'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<FullscreenLayout> was created with unknown prop '${key}'`);
	});

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function keydown_handler(event) {
		bubble.call(this, $$self, event);
	}

	function settings_showSettings_binding(value) {
		showSettings = value;
		$$invalidate(26, showSettings);
	}

	function input_input_handler() {
		filterValue = this.value;
		$$invalidate(5, filterValue);
	}

	function span5_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			filterRef = $$value;
			$$invalidate(24, filterRef);
		});
	}

	const click_handler_1 = function (i) {
		goto$1(i);
	};

	function div2_elementresize_handler() {
		$_gotoElWidth = this.clientWidth;
		_gotoElWidth.set($_gotoElWidth);
	}

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(53, params = $$props.params);
		if ('slugstr' in $$props) $$invalidate(1, slugstr = $$props.slugstr);
		if ('posts' in $$props) $$invalidate(0, posts = $$props.posts);
		if ('after' in $$props) $$invalidate(52, after = $$props.after);
		if ('res' in $$props) $$invalidate(51, res = $$props.res);
		if ('mode' in $$props) $$invalidate(54, mode = $$props.mode);
		if ('pageType' in $$props) $$invalidate(55, pageType = $$props.pageType);
	};

	$$self.$capture_state = () => ({
		Icon,
		faSoundOn: faVolumeUp$1.faVolumeUp,
		faSoundOff: faVolumeMute$1.faVolumeMute,
		faPlay: faPlay$1.faPlay,
		faPause: faPause$1.faPause,
		faSettings: faCog.faCog,
		faHome: faHome.faHome,
		faDonate: faDonate$1.faDonate,
		faExpand: faExpandAlt$1.faExpandAlt,
		faDownload: faCloudDownloadAlt.faCloudDownloadAlt,
		faDice: faDice$1.faDice,
		faImageVideo: faPhotoVideo$1.faPhotoVideo,
		faVideo: faVideo$1.faVideo,
		faImage: faImage$1.faImage,
		faSearch: faSearch$1.faSearch,
		faSync: faSync$1.faSync,
		faSpinner: faSpinner$1.faSpinner,
		Settings,
		onMount,
		tick,
		ahref: goto,
		shuffle: lodash_shuffle,
		API_KEY,
		get_tumblr_posts,
		queryp,
		writable,
		throttle,
		startWith,
		autoplay,
		autoplayinterval,
		imageVideo,
		portraitLandscape,
		favorite,
		over18,
		prefetch,
		prefetchNum,
		hires,
		lores,
		muted,
		layout,
		multireddit,
		oldreddit,
		hideUIonStart,
		apiKey,
		params,
		slugstr,
		posts,
		after,
		res,
		mode,
		pageType,
		data,
		displayposts,
		uiVisible,
		hideCursor,
		hideCursorTimerId,
		titleVisible,
		numFavorite,
		tinygoto,
		title,
		albumindex,
		blogIdentifier,
		_gotoElWidth,
		gotoElWidth,
		loading,
		reloadstr,
		navigation,
		imageVideoStr,
		portraitLandscapeStr,
		downloadstr,
		autoplaystr,
		over18str,
		deepsearchstr,
		showhidestr,
		mutedstr,
		autoplaytimer,
		filterRef,
		filterExpanded,
		filterValue,
		subredditSearchValue,
		showSettings,
		currpost,
		nexturls,
		index,
		loadMore,
		startAutoPlay,
		prev,
		next,
		stopAutoPlay,
		stopAndStartAutoPlay,
		toggleAutoPlay,
		toggleImageVideo,
		uniqBy,
		toggleMuted,
		togglePortraitLandscape,
		renderVideo,
		skipRenderVideo,
		reMountVideo,
		goto: goto$1,
		reloadData,
		videoended,
		itemNext,
		itemPrev,
		toggleFullscreen,
		onVideoPlayerClicked,
		toggleHideCursor,
		toggleTitleVisibility,
		toggleUIVisiblity,
		toggleSettings,
		gotoDeepSearch,
		hideSettings,
		expandFilter,
		toggleFilter,
		downloadFiles,
		shuffleFiles,
		openMedia,
		copySrcToClipboard,
		toggleOver18,
		removeAllFavorite,
		toggleFavorite,
		albumPrev,
		isEndOfAlbum,
		isStartOfAlbum,
		albumNext,
		wheel,
		keydown,
		loadError,
		$autoplay,
		$favorite,
		$over18,
		$portraitLandscape,
		$imageVideo,
		$apiKey,
		$prefetchNum,
		$muted,
		$autoplayinterval,
		$gotoElWidth,
		$hideUIonStart,
		$lores,
		$_gotoElWidth,
		$prefetch,
		$hires
	});

	$$self.$inject_state = $$props => {
		if ('params' in $$props) $$invalidate(53, params = $$props.params);
		if ('slugstr' in $$props) $$invalidate(1, slugstr = $$props.slugstr);
		if ('posts' in $$props) $$invalidate(0, posts = $$props.posts);
		if ('after' in $$props) $$invalidate(52, after = $$props.after);
		if ('res' in $$props) $$invalidate(51, res = $$props.res);
		if ('mode' in $$props) $$invalidate(54, mode = $$props.mode);
		if ('pageType' in $$props) $$invalidate(55, pageType = $$props.pageType);
		if ('data' in $$props) data = $$props.data;
		if ('displayposts' in $$props) $$invalidate(2, displayposts = $$props.displayposts);
		if ('uiVisible' in $$props) $$invalidate(12, uiVisible = $$props.uiVisible);
		if ('hideCursor' in $$props) $$invalidate(13, hideCursor = $$props.hideCursor);
		if ('hideCursorTimerId' in $$props) hideCursorTimerId = $$props.hideCursorTimerId;
		if ('titleVisible' in $$props) $$invalidate(14, titleVisible = $$props.titleVisible);
		if ('numFavorite' in $$props) $$invalidate(3, numFavorite = $$props.numFavorite);
		if ('tinygoto' in $$props) $$invalidate(15, tinygoto = $$props.tinygoto);
		if ('title' in $$props) $$invalidate(16, title = $$props.title);
		if ('albumindex' in $$props) $$invalidate(4, albumindex = $$props.albumindex);
		if ('blogIdentifier' in $$props) blogIdentifier = $$props.blogIdentifier;
		if ('loading' in $$props) $$invalidate(17, loading = $$props.loading);
		if ('reloadstr' in $$props) $$invalidate(18, reloadstr = $$props.reloadstr);
		if ('navigation' in $$props) navigation = $$props.navigation;
		if ('imageVideoStr' in $$props) $$invalidate(19, imageVideoStr = $$props.imageVideoStr);
		if ('portraitLandscapeStr' in $$props) portraitLandscapeStr = $$props.portraitLandscapeStr;
		if ('downloadstr' in $$props) $$invalidate(20, downloadstr = $$props.downloadstr);
		if ('autoplaystr' in $$props) $$invalidate(21, autoplaystr = $$props.autoplaystr);
		if ('over18str' in $$props) over18str = $$props.over18str;
		if ('deepsearchstr' in $$props) $$invalidate(22, deepsearchstr = $$props.deepsearchstr);
		if ('showhidestr' in $$props) showhidestr = $$props.showhidestr;
		if ('mutedstr' in $$props) $$invalidate(23, mutedstr = $$props.mutedstr);
		if ('autoplaytimer' in $$props) autoplaytimer = $$props.autoplaytimer;
		if ('filterRef' in $$props) $$invalidate(24, filterRef = $$props.filterRef);
		if ('filterExpanded' in $$props) $$invalidate(25, filterExpanded = $$props.filterExpanded);
		if ('filterValue' in $$props) $$invalidate(5, filterValue = $$props.filterValue);
		if ('subredditSearchValue' in $$props) $$invalidate(80, subredditSearchValue = $$props.subredditSearchValue);
		if ('showSettings' in $$props) $$invalidate(26, showSettings = $$props.showSettings);
		if ('currpost' in $$props) $$invalidate(6, currpost = $$props.currpost);
		if ('nexturls' in $$props) $$invalidate(7, nexturls = $$props.nexturls);
		if ('index' in $$props) $$invalidate(8, index = $$props.index);
		if ('renderVideo' in $$props) $$invalidate(27, renderVideo = $$props.renderVideo);
		if ('skipRenderVideo' in $$props) $$invalidate(56, skipRenderVideo = $$props.skipRenderVideo);
		if ('loadError' in $$props) $$invalidate(28, loadError = $$props.loadError);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*posts, filterValue, $imageVideo*/ 1057 | $$self.$$.dirty[1] & /*$over18, $portraitLandscape*/ 201326592) {
			{
				let tmp = [];

				if ($over18 == 0) {
					tmp = posts.filter(item => item.over18 == false);
				} else if ($over18 == 1) {
					tmp = posts;
				} else if ($over18 == 2) {
					tmp = posts.filter(item => item.over18 == true);
				}

				if (filterValue) {
					$$invalidate(56, skipRenderVideo = true);
					tmp = tmp.filter(item => item.title.toLowerCase().includes(filterValue.toLowerCase()));
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

				$$invalidate(2, displayposts = tmp);
			}
		}

		if ($$self.$$.dirty[0] & /*displayposts, index, currpost, albumindex, nexturls, filterValue*/ 500 | $$self.$$.dirty[1] & /*$prefetchNum, res, $apiKey*/ 806354944) {
			{
				if (displayposts[index]) {
					$$invalidate(6, currpost = JSON.parse(JSON.stringify(displayposts[index])));
					let _nexturls = [];
					_nexturls = [currpost, ...displayposts.slice(index + 1, index + $prefetchNum + 1)];

					$$invalidate(7, nexturls = _nexturls.map(function (item) {
						if (item.is_album) {
							return item.preview.img.album.slice(albumindex, albumindex + $prefetchNum + 1);
						} else {
							return item;
						}
					}).flat());

					console.log(nexturls);
					$$invalidate(7, nexturls = uniqBy(nexturls, () => item => item.preview.img.default));
				} else if (filterValue) {
					// We're here because user filtered the list
					// Unfortunately the filtered list is smaller than the current index
					// set index to last item
					if (displayposts.length > 0) {
						console.log("setting index from ", index, " to ", displayposts.length);
						$$invalidate(8, index = displayposts.length - 1);
						console.log("loading more ..");
						loadMore();
					} else {
						// nothing was filtered
						$$invalidate(8, index = 0);

						$$invalidate(6, currpost = {
							title: "Nothing to show. Try changing filters or tweak/update URL."
						});
					}
				} else {
					if (res && res.res.ok) {
						// No media found
						$$invalidate(6, currpost = {
							title: "Nothing to show. Try changing filters or tweak/update URL."
						});
					} else if (res && !res.res.ok) {
						// Check if it's an API key error
						console.log("API Error Response:", res);

						// Handle API errors with helpful messaging
						const errorMessage = res.res.res || res.res || "";

						// Check if it's an API key error
						const isApiKeyError = errorMessage.includes("Invalid API key") || errorMessage.includes("OAuth Consumer Key Goes Here") || errorMessage.includes("api_key") || !$apiKey;

						if (isApiKeyError) {
							$$invalidate(6, currpost = {
								title: "Please set your Tumblr API key in settings"
							});
						} else // showSettings = true; // Uncomment this line if you want settings to open automatically
						{
							$$invalidate(6, currpost = {
								title: "Error loading posts", // Optionally show settings, but don't force it
								
							});
						}
					} else {
						// Default
						$$invalidate(6, currpost = { title: "Loading .." });
					}

					$$invalidate(7, nexturls = []);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*currpost, albumindex*/ 80) {
			{
				if (currpost.is_album) {
					$$invalidate(16, title = `(${albumindex + 1}/${currpost.preview.img.album.length}) ${currpost.title}`);
				} else {
					$$invalidate(16, title = currpost.title);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*slugstr*/ 2) {
			blogIdentifier = slugstr;
		}

		if ($$self.$$.dirty[0] & /*displayposts*/ 4 | $$self.$$.dirty[1] & /*$gotoElWidth*/ 1073741824) {
			{
				if ($gotoElWidth > 1000) {
					// padding on both sides
					let numGotoControlsInOneRow = ($gotoElWidth - 154 * 2) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					$$invalidate(15, tinygoto = numGotoControlsRows > 3);
				} else if ($gotoElWidth > 800) {
					// padding on right side
					let numGotoControlsInOneRow = ($gotoElWidth - (154 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					$$invalidate(15, tinygoto = numGotoControlsRows > 3);
				} else {
					// no padding
					let numGotoControlsInOneRow = ($gotoElWidth - (14 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					$$invalidate(15, tinygoto = numGotoControlsRows > 3);
				}
			}
		}

		if ($$self.$$.dirty[1] & /*res*/ 1048576) {
			$$invalidate(28, loadError = res && !res.res.ok);
		}

		if ($$self.$$.dirty[0] & /*currpost*/ 64 | $$self.$$.dirty[1] & /*skipRenderVideo*/ 33554432) {
			{
				if (!skipRenderVideo) reMountVideo(currpost.preview);
				$$invalidate(56, skipRenderVideo = false);
			}
		}

		if ($$self.$$.dirty[0] & /*displayposts, numFavorite, $autoplay, filterValue, $muted, $imageVideo*/ 3628 | $$self.$$.dirty[1] & /*$over18, $portraitLandscape*/ 201326592) {
			{
				$$invalidate(3, numFavorite = displayposts.filter(item => item.favorite == true).length);

				if (!numFavorite) {
					$$invalidate(20, downloadstr = `Nothing to download`);
				} else if (numFavorite == 1) {
					$$invalidate(20, downloadstr = `Download ${numFavorite} file`);
				} else {
					$$invalidate(20, downloadstr = `Download ${numFavorite} files`);
				}

				$$invalidate(21, autoplaystr = `Autoplay is ${$autoplay ? "on" : "off"}`);
				$$invalidate(22, deepsearchstr = `Search for ${filterValue}`);
				$$invalidate(23, mutedstr = `Sound ${$muted ? "off" : "on"}`);

				if ($over18 == 0) {
					over18str = "nsfw off";
				} else if ($over18 == 1) {
					over18str = "nsfw on";
				} else if ($over18 == 2) {
					over18str = "nsfw only";
				}

				if ($imageVideo == 0) {
					$$invalidate(19, imageVideoStr = "Show both image and video");
				} else if ($imageVideo == 1) {
					$$invalidate(19, imageVideoStr = "Show videos only");
				} else if ($imageVideo == 2) {
					$$invalidate(19, imageVideoStr = "Show images only");
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
	};

	{
		// Subreddit search
		if (subredditSearchValue) {
			//subredditSearchVisible = false;
			//ahref(`/r/${subredditSearchValue}`);
			//subredditSearchValue = "";
			//subredditSearchValueRaw = "";
			jumpToSubReddit(subredditSearchValue);
		}
	}

	return [
		posts,
		slugstr,
		displayposts,
		numFavorite,
		albumindex,
		filterValue,
		currpost,
		nexturls,
		index,
		$autoplay,
		$imageVideo,
		$muted,
		uiVisible,
		hideCursor,
		titleVisible,
		tinygoto,
		title,
		loading,
		reloadstr,
		imageVideoStr,
		downloadstr,
		autoplaystr,
		deepsearchstr,
		mutedstr,
		filterRef,
		filterExpanded,
		showSettings,
		renderVideo,
		loadError,
		$lores,
		$_gotoElWidth,
		$prefetch,
		$hires,
		_gotoElWidth,
		gotoElWidth,
		loadMore,
		toggleAutoPlay,
		toggleImageVideo,
		toggleMuted,
		goto$1,
		reloadData,
		videoended,
		toggleFullscreen,
		onVideoPlayerClicked,
		toggleHideCursor,
		toggleSettings,
		gotoDeepSearch,
		toggleFilter,
		shuffleFiles,
		wheel,
		keydown,
		res,
		after,
		params,
		mode,
		pageType,
		skipRenderVideo,
		$over18,
		$portraitLandscape,
		$apiKey,
		$prefetchNum,
		$gotoElWidth,
		click_handler,
		keydown_handler,
		settings_showSettings_binding,
		input_input_handler,
		span5_binding,
		click_handler_1,
		div2_elementresize_handler
	];
}

class FullscreenLayout extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				params: 53,
				slugstr: 1,
				posts: 0,
				after: 52,
				res: 51,
				mode: 54,
				pageType: 55
			},
			null,
			[-1, -1, -1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FullscreenLayout",
			options,
			id: create_fragment.name
		});
	}

	get params() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slugstr() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slugstr(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get posts() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get after() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set after(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get res() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set res(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get mode() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mode(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pageType() {
		throw new Error("<FullscreenLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pageType(value) {
		throw new Error("<FullscreenLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { API_KEY as A, FullscreenLayout as F, get_tumblr_posts as g, queryp as q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVsbHNjcmVlbkxheW91dC43OTYxMTIzNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVIaWdoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVZvbHVtZVVwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVZvbHVtZVhtYXJrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVZvbHVtZU11dGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGxheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQYXVzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaXJjbGVEb2xsYXJUb1Nsb3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRG9uYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVVwUmlnaHRBbmREb3duTGVmdEZyb21DZW50ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhwYW5kQWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYURpY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGhvdG9GaWxtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBob3RvVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW1hZ2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFnbmlmeWluZ0dsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBcnJvd3NSb3RhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luYy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC5zaHVmZmxlL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1waXBlYWJsZS1zdG9yZS9pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvc3RvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXBpcGVhYmxlLXN0b3JlL29wZXJhdG9ycy9kZWJvdW5jZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvb3BlcmF0b3JzL3N0YXJ0V2l0aC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Z1bGxzY3JlZW5MYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBUdW1ibHIgQVBJIGtleVxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnT0F1dGggQ29uc3VtZXIgS2V5IEdvZXMgSGVyZSc7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd2b2x1bWUtaGlnaCc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbMTI4MjY2LFwidm9sdW1lLXVwXCJdO1xudmFyIHVuaWNvZGUgPSAnZjAyOCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUzMy42IDMyLjVjLTEwLjMtOC40LTI1LjQtNi44LTMzLjggMy41cy02LjggMjUuNCAzLjUgMzMuOEM1NTcuNSAxMTMuOCA1OTIgMTgwLjggNTkyIDI1NnMtMzQuNSAxNDIuMi04OC43IDE4Ni4zYy0xMC4zIDguNC0xMS44IDIzLjUtMy41IDMzLjhzMjMuNSAxMS44IDMzLjggMy41QzU5OC41IDQyNi43IDY0MCAzNDYuMiA2NDAgMjU2UzU5OC41IDg1LjIgNTMzLjYgMzIuNXpNNDczLjEgMTA3Yy0xMC4zLTguNC0yNS40LTYuOC0zMy44IDMuNXMtNi44IDI1LjQgMy41IDMzLjhDNDc1LjMgMTcwLjcgNDk2IDIxMC45IDQ5NiAyNTZzLTIwLjcgODUuMy01My4yIDExMS44Yy0xMC4zIDguNC0xMS44IDIzLjUtMy41IDMzLjhzMjMuNSAxMS44IDMzLjggMy41YzQzLjItMzUuMiA3MC45LTg4LjkgNzAuOS0xNDlzLTI3LjctMTEzLjgtNzAuOS0xNDl6bS02MC41IDc0LjVjLTEwLjMtOC40LTI1LjQtNi44LTMzLjggMy41cy02LjggMjUuNCAzLjUgMzMuOEMzOTMuMSAyMjcuNiA0MDAgMjQxIDQwMCAyNTZzLTYuOSAyOC40LTE3LjcgMzcuM2MtMTAuMyA4LjQtMTEuOCAyMy41LTMuNSAzMy44czIzLjUgMTEuOCAzMy44IDMuNUM0MzQuMSAzMTIuOSA0NDggMjg2LjEgNDQ4IDI1NnMtMTMuOS01Ni45LTM1LjQtNzQuNXpNODAgMzUybDQ4IDAgMTM0LjEgMTE5LjJjNi40IDUuNyAxNC42IDguOCAyMy4xIDguOCAxOS4yIDAgMzQuOC0xNS42IDM0LjgtMzQuOGwwLTM3OC40YzAtMTkuMi0xNS42LTM0LjgtMzQuOC0zNC44LTguNSAwLTE2LjcgMy4xLTIzLjEgOC44TDEyOCAxNjAgODAgMTYwYy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDk2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFWb2x1bWVIaWdoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc291cmNlID0gcmVxdWlyZSgnLi9mYVZvbHVtZUhpZ2gnKTtcbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBzb3VyY2UucHJlZml4LFxuICBpY29uTmFtZTogc291cmNlLmljb25OYW1lLFxuICBpY29uOiBbXG4gICAgc291cmNlLndpZHRoLFxuICAgIHNvdXJjZS5oZWlnaHQsXG4gICAgc291cmNlLmFsaWFzZXMsXG4gICAgc291cmNlLnVuaWNvZGUsXG4gICAgc291cmNlLnN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVm9sdW1lVXAgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHNvdXJjZS5wcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gc291cmNlLmljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHNvdXJjZS53aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gc291cmNlLmFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSBzb3VyY2UudW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzb3VyY2Uuc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBzb3VyY2UuYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3ZvbHVtZS14bWFyayc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbXCJ2b2x1bWUtbXV0ZVwiLFwidm9sdW1lLXRpbWVzXCJdO1xudmFyIHVuaWNvZGUgPSAnZjZhOSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ4IDM1Mmw0OCAwIDEzNC4xIDExOS4yYzYuNCA1LjcgMTQuNiA4LjggMjMuMSA4LjggMTkuMiAwIDM0LjgtMTUuNiAzNC44LTM0LjhsMC0zNzguNGMwLTE5LjItMTUuNi0zNC44LTM0LjgtMzQuOC04LjUgMC0xNi43IDMuMS0yMy4xIDguOEw5NiAxNjAgNDggMTYwYy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDk2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4ek0zNjcgMTc1Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWw0NyA0Ny00NyA0N2MtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwbDQ3LTQ3IDQ3IDQ3YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwczkuNC0yNC42IDAtMzMuOWwtNDctNDcgNDctNDdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlzLTI0LjYtOS40LTMzLjkgMGwtNDcgNDctNDctNDdjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAweic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFWb2x1bWVYbWFyayA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoJy4vZmFWb2x1bWVYbWFyaycpO1xuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHNvdXJjZS5wcmVmaXgsXG4gIGljb25OYW1lOiBzb3VyY2UuaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICBzb3VyY2Uud2lkdGgsXG4gICAgc291cmNlLmhlaWdodCxcbiAgICBzb3VyY2UuYWxpYXNlcyxcbiAgICBzb3VyY2UudW5pY29kZSxcbiAgICBzb3VyY2Uuc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFWb2x1bWVNdXRlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBzb3VyY2UucHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IHNvdXJjZS5pY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSBzb3VyY2Uud2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IHNvdXJjZS5hbGlhc2VzO1xuZXhwb3J0cy51bmljb2RlID0gc291cmNlLnVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc291cmNlLnN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gc291cmNlLmFsaWFzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwbGF5JztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgYWxpYXNlcyA9IFs5NjU0XTtcbnZhciB1bmljb2RlID0gJ2YwNGInO1xudmFyIHN2Z1BhdGhEYXRhID0gJ005MS4yIDM2LjljLTEyLjQtNi44LTI3LjQtNi41LTM5LjYgLjdTMzIgNTcuOSAzMiA3MmwwIDM2OGMwIDE0LjEgNy41IDI3LjIgMTkuNiAzNC40czI3LjIgNy41IDM5LjYgLjdsMzM2LTE4NGMxMi44LTcgMjAuOC0yMC41IDIwLjgtMzUuMXMtOC0yOC4xLTIwLjgtMzUuMWwtMzM2LTE4NHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYWxpYXNlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUGxheSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3BhdXNlJztcbnZhciB3aWR0aCA9IDM4NDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgYWxpYXNlcyA9IFs5MjA4XTtcbnZhciB1bmljb2RlID0gJ2YwNGMnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000OCAzMkMyMS41IDMyIDAgNTMuNSAwIDgwTDAgNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDY0IDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC0zNTJjMC0yNi41LTIxLjUtNDgtNDgtNDhMNDggMzJ6bTIyNCAwYy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGw2NCAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMzUyYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4bC02NCAweic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQYXVzZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NpcmNsZS1kb2xsYXItdG8tc2xvdCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbXCJkb25hdGVcIl07XG52YXIgdW5pY29kZSA9ICdmNGI5JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNOTYgMjI0YTE5MiAxOTIgMCAxIDEgMzg0IDAgMTkyIDE5MiAwIDEgMSAtMzg0IDB6bTE3Ni05MmwwIDRjLTI4LjggLjMtNTIgMjMuNy01MiA1Mi41IDAgMjUuNyAxOC41IDQ3LjYgNDMuOSA1MS44bDQxLjcgN2M2IDEgMTAuNCA2LjIgMTAuNCAxMi4zIDAgNi45LTUuNiAxMi41LTEyLjUgMTIuNUwyNDggMjcyYy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMGwyNCAwIDAgNGMwIDExIDkgMjAgMjAgMjBzMjAtOSAyMC0yMGwwLTQuN2MyNS00LjEgNDQtMjUuNyA0NC01MS44IDAtMjUuNy0xOC41LTQ3LjYtNDMuOS01MS44bC00MS43LTdjLTYtMS0xMC40LTYuMi0xMC40LTEyLjMgMC02LjkgNS42LTEyLjUgMTIuNS0xMi41bDQ3LjUgMGMxMSAwIDIwLTkgMjAtMjBzLTktMjAtMjAtMjBsLTggMCAwLTRjMC0xMS05LTIwLTIwLTIwcy0yMCA5LTIwIDIwek00OCAzNDRsMCAxMDRjMCA4LjggNy4yIDE2IDE2IDE2bDQ0OCAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTEwNGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgMTA0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAzNDRjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYWxpYXNlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2lyY2xlRG9sbGFyVG9TbG90ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc291cmNlID0gcmVxdWlyZSgnLi9mYUNpcmNsZURvbGxhclRvU2xvdCcpO1xuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHNvdXJjZS5wcmVmaXgsXG4gIGljb25OYW1lOiBzb3VyY2UuaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICBzb3VyY2Uud2lkdGgsXG4gICAgc291cmNlLmhlaWdodCxcbiAgICBzb3VyY2UuYWxpYXNlcyxcbiAgICBzb3VyY2UudW5pY29kZSxcbiAgICBzb3VyY2Uuc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFEb25hdGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHNvdXJjZS5wcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gc291cmNlLmljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHNvdXJjZS53aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gc291cmNlLmFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSBzb3VyY2UudW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzb3VyY2Uuc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBzb3VyY2UuYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3VwLXJpZ2h0LWFuZC1kb3duLWxlZnQtZnJvbS1jZW50ZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBhbGlhc2VzID0gW1wiZXhwYW5kLWFsdFwiXTtcbnZhciB1bmljb2RlID0gJ2Y0MjQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNDQgMEw0ODggMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDE0NGMwIDkuNy01LjggMTguNS0xNC44IDIyLjJzLTE5LjMgMS43LTI2LjItNS4ybC0zOS0zOS04NyA4N2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTMyLTMyYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw4Ny04Ny0zOS0zOWMtNi45LTYuOS04LjktMTcuMi01LjItMjYuMlMzMzQuMyAwIDM0NCAwek0xNjggNTEyTDI0IDUxMmMtMTMuMyAwLTI0LTEwLjctMjQtMjRMMCAzNDRjMC05LjcgNS44LTE4LjUgMTQuOC0yMi4yUzM0LjEgMzIwLjIgNDEgMzI3bDM5IDM5IDg3LTg3YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDMyIDMyYzkuNCA5LjQgOS40IDI0LjYgMCAzMy45bC04NyA4NyAzOSAzOWM2LjkgNi45IDguOSAxNy4yIDUuMiAyNi4yUzE3Ny43IDUxMiAxNjggNTEyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFVcFJpZ2h0QW5kRG93bkxlZnRGcm9tQ2VudGVyID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc291cmNlID0gcmVxdWlyZSgnLi9mYVVwUmlnaHRBbmREb3duTGVmdEZyb21DZW50ZXInKTtcbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBzb3VyY2UucHJlZml4LFxuICBpY29uTmFtZTogc291cmNlLmljb25OYW1lLFxuICBpY29uOiBbXG4gICAgc291cmNlLndpZHRoLFxuICAgIHNvdXJjZS5oZWlnaHQsXG4gICAgc291cmNlLmFsaWFzZXMsXG4gICAgc291cmNlLnVuaWNvZGUsXG4gICAgc291cmNlLnN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRXhwYW5kQWx0ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBzb3VyY2UucHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IHNvdXJjZS5pY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSBzb3VyY2Uud2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IHNvdXJjZS5hbGlhc2VzO1xuZXhwb3J0cy51bmljb2RlID0gc291cmNlLnVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc291cmNlLnN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gc291cmNlLmFsaWFzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdkaWNlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgYWxpYXNlcyA9IFsxMjc5MjJdO1xudmFyIHVuaWNvZGUgPSAnZjUyMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE0MS40IDIuM0MxMDMtOCA2My41IDE0LjggNTMuMyA1My4yTDIuNSAyNDIuN0MtNy44IDI4MS4xIDE1IDMyMC42IDUzLjQgMzMwLjlsMTg5LjUgNTAuOGMzOC40IDEwLjMgNzcuOS0xMi41IDg4LjItNTAuOWw1MC44LTE4OS41YzEwLjMtMzguNC0xMi41LTc3LjktNTAuOS04OC4yTDE0MS40IDIuM3ptMjMgMjA1LjdhMzIgMzIgMCAxIDEgNTUuNC0zMiAzMiAzMiAwIDEgMSAtNTUuNCAzMnpNNzkuMiAyMjAuM2EzMiAzMiAwIDEgMSAzMiA1NS40IDMyIDMyIDAgMSAxIC0zMi01NS40em0xODUgOTYuNGEzMiAzMiAwIDEgMSAtMzItNTUuNCAzMiAzMiAwIDEgMSAzMiA1NS40em05LTIwOC40YTMyIDMyIDAgMSAxIDMyIDU1LjQgMzIgMzIgMCAxIDEgLTMyLTU1LjR6bS0xMjEgMTQuNGEzMiAzMiAwIDEgMSAtMzItNTUuNCAzMiAzMiAwIDEgMSAzMiA1NS40ek00MTggMTkyTDM3Ny40IDM0My4yYy0xNy4yIDY0LTgzIDEwMi0xNDcgODQuOWwtMzguMy0xMC4zIDAgMzAuMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwxOTIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE5MmMwLTM1LjMtMjguNy02NC02NC02NEw0MTggMTkyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFEaWNlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAncGhvdG8tZmlsbSc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbXCJwaG90by12aWRlb1wiXTtcbnZhciB1bmljb2RlID0gJ2Y4N2MnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00xOTIgNjRjMC0zNS4zIDI4LjctNjQgNjQtNjRMNTc2IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAyMjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTMyMCAwYy0zNS4zIDAtNjQtMjguNy02NC02NGwwLTIyNHpNMzIwIDk2YTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6bTE1Ni41IDExLjVDNDcyLjEgMTAwLjQgNDY0LjQgOTYgNDU2IDk2cy0xNi4xIDQuNC0yMC41IDExLjVsLTU0IDg4LjMtMTcuOS0yNS42Yy00LjUtNi40LTExLjgtMTAuMi0xOS43LTEwLjJzLTE1LjIgMy44LTE5LjcgMTAuMmwtNTYgODBjLTUuMSA3LjMtNS44IDE2LjktMS42IDI0LjhTMjc5LjEgMjg4IDI4OCAyODhsMjU2IDBjOC43IDAgMTYuNy00LjcgMjAuOS0xMi4zczQuMS0xNi44LS41LTI0LjNsLTg4LTE0NHpNMTQ0IDEyOGwwIDE2MGMwIDYxLjkgNTAuMSAxMTIgMTEyIDExMmwxOTIgMCAwIDE2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAxOTJjMC0zNS4zIDI4LjctNjQgNjQtNjRsODAgMHpNNTIgMTk2bDAgMjRjMCA4LjggNy4yIDE2IDE2IDE2bDI0IDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMjRjMC04LjgtNy4yLTE2LTE2LTE2bC0yNCAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTE2IDgwYy04LjggMC0xNiA3LjItMTYgMTZsMCAyNGMwIDguOCA3LjIgMTYgMTYgMTZsMjQgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0yNGMwLTguOC03LjItMTYtMTYtMTZsLTI0IDB6bTAgOTZjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDI0YzAgOC44IDcuMiAxNiAxNiAxNmwyNCAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTI0YzAtOC44LTcuMi0xNi0xNi0xNmwtMjQgMHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYWxpYXNlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUGhvdG9GaWxtID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc291cmNlID0gcmVxdWlyZSgnLi9mYVBob3RvRmlsbScpO1xuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHNvdXJjZS5wcmVmaXgsXG4gIGljb25OYW1lOiBzb3VyY2UuaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICBzb3VyY2Uud2lkdGgsXG4gICAgc291cmNlLmhlaWdodCxcbiAgICBzb3VyY2UuYWxpYXNlcyxcbiAgICBzb3VyY2UudW5pY29kZSxcbiAgICBzb3VyY2Uuc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQaG90b1ZpZGVvID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBzb3VyY2UucHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IHNvdXJjZS5pY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSBzb3VyY2Uud2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IHNvdXJjZS5hbGlhc2VzO1xuZXhwb3J0cy51bmljb2RlID0gc291cmNlLnVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc291cmNlLnN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gc291cmNlLmFsaWFzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd2aWRlbyc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbXCJ2aWRlby1jYW1lcmFcIl07XG52YXIgdW5pY29kZSA9ICdmMDNkJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNOTYgNjRjLTM1LjMgMC02NCAyOC43LTY0IDY0bDAgMjU2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDI1NiAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDk2IDY0ek00NjQgMzM2bDczLjUgNTguOGM0LjIgMy40IDkuNCA1LjIgMTQuOCA1LjIgMTMuMSAwIDIzLjctMTAuNiAyMy43LTIzLjdsMC0yNDAuNmMwLTEzLjEtMTAuNi0yMy43LTIzLjctMjMuNy01LjQgMC0xMC42IDEuOC0xNC44IDUuMkw0NjQgMTc2IDQ2NCAzMzZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGFsaWFzZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVZpZGVvID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnaW1hZ2UnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBhbGlhc2VzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDNlJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMnptNjQgODBhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2ek0yNzIgMjI0YzguNCAwIDE2LjEgNC40IDIwLjUgMTEuNWw4OCAxNDRjNC41IDcuNCA0LjcgMTYuNyAuNSAyNC4zUzM2OC43IDQxNiAzNjAgNDE2TDg4IDQxNmMtOC45IDAtMTcuMi01LTIxLjMtMTIuOXMtMy41LTE3LjUgMS42LTI0LjhsNTYtODBjNC41LTYuNCAxMS44LTEwLjIgMTkuNy0xMC4yczE1LjIgMy44IDE5LjcgMTAuMmwyNi40IDM3LjggNjEuNC0xMDAuNWM0LjQtNy4xIDEyLjEtMTEuNSAyMC41LTExLjV6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGFsaWFzZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUltYWdlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnbWFnbmlmeWluZy1nbGFzcyc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbMTI4MjY5LFwic2VhcmNoXCJdO1xudmFyIHVuaWNvZGUgPSAnZjAwMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQxNiAyMDhjMCA0NS45LTE0LjkgODguMy00MCAxMjIuN0w1MDIuNiA0NTcuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwzMzAuNyAzNzZDMjk2LjMgNDAxLjEgMjUzLjkgNDE2IDIwOCA0MTYgOTMuMSA0MTYgMCAzMjIuOSAwIDIwOFM5My4xIDAgMjA4IDAgNDE2IDkzLjEgNDE2IDIwOHpNMjA4IDM1MmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGFsaWFzZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYU1hZ25pZnlpbmdHbGFzcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoJy4vZmFNYWduaWZ5aW5nR2xhc3MnKTtcbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBzb3VyY2UucHJlZml4LFxuICBpY29uTmFtZTogc291cmNlLmljb25OYW1lLFxuICBpY29uOiBbXG4gICAgc291cmNlLndpZHRoLFxuICAgIHNvdXJjZS5oZWlnaHQsXG4gICAgc291cmNlLmFsaWFzZXMsXG4gICAgc291cmNlLnVuaWNvZGUsXG4gICAgc291cmNlLnN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2VhcmNoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBzb3VyY2UucHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IHNvdXJjZS5pY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSBzb3VyY2Uud2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IHNvdXJjZS5hbGlhc2VzO1xuZXhwb3J0cy51bmljb2RlID0gc291cmNlLnVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc291cmNlLnN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gc291cmNlLmFsaWFzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdhcnJvd3Mtcm90YXRlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgYWxpYXNlcyA9IFsxMjg0NzIsXCJyZWZyZXNoXCIsXCJzeW5jXCJdO1xudmFyIHVuaWNvZGUgPSAnZjAyMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTY1LjkgMjI4LjVjMTMuMy05MyA5My40LTE2NC41IDE5MC4xLTE2NC41IDUzIDAgMTAxIDIxLjUgMTM1LjggNTYuMiAuMiAuMiAuNCAuNCAuNiAuNmw3LjYgNy4yLTQ3LjkgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwxMjggMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTEyOGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDUzLjQtMTEuMy0xMC43QzM5MC41IDI4LjYgMzI2LjUgMCAyNTYgMCAxMjcgMCAyMC4zIDk1LjQgMi42IDIxOS41IC4xIDIzNyAxMi4yIDI1My4yIDI5LjcgMjU1LjdzMzMuNy05LjcgMzYuMi0yNy4xem00NDMuNSA2NGMyLjUtMTcuNS05LjctMzMuNy0yNy4xLTM2LjJzLTMzLjcgOS43LTM2LjIgMjcuMWMtMTMuMyA5My05My40IDE2NC41LTE5MC4xIDE2NC41LTUzIDAtMTAxLTIxLjUtMTM1LjgtNTYuMi0uMi0uMi0uNC0uNC0uNi0uNmwtNy42LTcuMiA0Ny45IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgMzIwYy04LjUgMC0xNi43IDMuNC0yMi43IDkuNVMtLjEgMzQzLjcgMCAzNTIuM2wxIDEyN2MuMSAxNy43IDE0LjYgMzEuOSAzMi4zIDMxLjdTNjUuMiA0OTYuNCA2NSA0NzguN2wtLjQtNTEuNSAxMC43IDEwLjFjNDYuMyA0Ni4xIDExMC4yIDc0LjcgMTgwLjcgNzQuNyAxMjkgMCAyMzUuNy05NS40IDI1My40LTIxOS41eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbGlhc2VzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFBcnJvd3NSb3RhdGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBhbGlhc2VzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTtcbmV4cG9ydHMuYWxpYXNlcyA9IGFsaWFzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKCcuL2ZhQXJyb3dzUm90YXRlJyk7XG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogc291cmNlLnByZWZpeCxcbiAgaWNvbk5hbWU6IHNvdXJjZS5pY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHNvdXJjZS53aWR0aCxcbiAgICBzb3VyY2UuaGVpZ2h0LFxuICAgIHNvdXJjZS5hbGlhc2VzLFxuICAgIHNvdXJjZS51bmljb2RlLFxuICAgIHNvdXJjZS5zdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVN5bmMgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHNvdXJjZS5wcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gc291cmNlLmljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHNvdXJjZS53aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gc291cmNlLmFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSBzb3VyY2UudW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzb3VyY2Uuc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBzb3VyY2UuYWxpYXNlczsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NwaW5uZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBhbGlhc2VzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTEwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjA4IDQ4YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6bTAgNDE2YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6TTQ4IDIwOGE0OCA0OCAwIDEgMSAwIDk2IDQ4IDQ4IDAgMSAxIDAtOTZ6bTM2OCA0OGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwek03NSAzNjkuMUE0OCA0OCAwIDEgMSAxNDIuOSA0MzcgNDggNDggMCAxIDEgNzUgMzY5LjF6TTc1IDc1QTQ4IDQ4IDAgMSAxIDE0Mi45IDE0Mi45IDQ4IDQ4IDAgMSAxIDc1IDc1ek00MzcgMzY5LjFBNDggNDggMCAxIDEgMzY5LjEgNDM3IDQ4IDQ4IDAgMSAxIDQzNyAzNjkuMXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYWxpYXNlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3Bpbm5lciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGFsaWFzZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhO1xuZXhwb3J0cy5hbGlhc2VzID0gYWxpYXNlczsiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MSxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LFxuICAgIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB0aGUgbWF4aW11bSBsZW5ndGggYW5kIGluZGV4IG9mIGFuIGFycmF5LiAqL1xudmFyIE1BWF9BUlJBWV9MRU5HVEggPSA0Mjk0OTY3Mjk1O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyMycsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGYwJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9NYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udmFsdWVzYCBhbmQgYF8udmFsdWVzSW5gIHdoaWNoIGNyZWF0ZXMgYW5cbiAqIGFycmF5IG9mIGBvYmplY3RgIHByb3BlcnR5IHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eSBuYW1lc1xuICogb2YgYHByb3BzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGdldCB2YWx1ZXMgZm9yLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlVmFsdWVzKG9iamVjdCwgcHJvcHMpIHtcbiAgcmV0dXJuIGFycmF5TWFwKHByb3BzLCBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgaXRlcmF0b3JgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlcmF0b3IgVGhlIGl0ZXJhdG9yIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3JUb0FycmF5KGl0ZXJhdG9yKSB7XG4gIHZhciBkYXRhLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCEoZGF0YSA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgIHJlc3VsdC5wdXNoKGRhdGEudmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBpdGVyYXRvclN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pdGVyYXRvciA6IHVuZGVmaW5lZCxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlRmxvb3IgPSBNYXRoLmZsb29yLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpLFxuICAgIG5hdGl2ZVJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbGFtcGAgd2hpY2ggZG9lc24ndCBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIFRoZSBudW1iZXIgdG8gY2xhbXAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2xvd2VyXSBUaGUgbG93ZXIgYm91bmQuXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGJvdW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY2xhbXBlZCBudW1iZXIuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbGFtcChudW1iZXIsIGxvd2VyLCB1cHBlcikge1xuICBpZiAobnVtYmVyID09PSBudW1iZXIpIHtcbiAgICBpZiAodXBwZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtYmVyID0gbnVtYmVyIDw9IHVwcGVyID8gbnVtYmVyIDogdXBwZXI7XG4gICAgfVxuICAgIGlmIChsb3dlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBudW1iZXIgPSBudW1iZXIgPj0gbG93ZXIgPyBudW1iZXIgOiBsb3dlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmFuZG9tYCB3aXRob3V0IHN1cHBvcnQgZm9yIHJldHVybmluZ1xuICogZmxvYXRpbmctcG9pbnQgbnVtYmVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxvd2VyIFRoZSBsb3dlciBib3VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB1cHBlciBUaGUgdXBwZXIgYm91bmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSByYW5kb20gbnVtYmVyLlxuICovXG5mdW5jdGlvbiBiYXNlUmFuZG9tKGxvd2VyLCB1cHBlcikge1xuICByZXR1cm4gbG93ZXIgKyBuYXRpdmVGbG9vcihuYXRpdmVSYW5kb20oKSAqICh1cHBlciAtIGxvd2VyICsgMSkpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuLy8gZm9yIGRhdGEgdmlld3MgaW4gRWRnZSA8IDE0LCBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcy5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBHZXRzIGBuYCByYW5kb20gZWxlbWVudHMgYXQgdW5pcXVlIGtleXMgZnJvbSBgY29sbGVjdGlvbmAgdXAgdG8gdGhlXG4gKiBzaXplIG9mIGBjb2xsZWN0aW9uYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2FtcGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gc2FtcGxlLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcmFuZG9tIGVsZW1lbnRzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNhbXBsZVNpemUoWzEsIDIsIDNdLCAyKTtcbiAqIC8vID0+IFszLCAxXVxuICpcbiAqIF8uc2FtcGxlU2l6ZShbMSwgMiwgM10sIDQpO1xuICogLy8gPT4gWzIsIDMsIDFdXG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVNpemUoY29sbGVjdGlvbiwgbiwgZ3VhcmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0b0FycmF5KGNvbGxlY3Rpb24pLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgaWYgKChndWFyZCA/IGlzSXRlcmF0ZWVDYWxsKGNvbGxlY3Rpb24sIG4sIGd1YXJkKSA6IG4gPT09IHVuZGVmaW5lZCkpIHtcbiAgICBuID0gMTtcbiAgfSBlbHNlIHtcbiAgICBuID0gYmFzZUNsYW1wKHRvSW50ZWdlcihuKSwgMCwgbGVuZ3RoKTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICB2YXIgcmFuZCA9IGJhc2VSYW5kb20oaW5kZXgsIGxhc3RJbmRleCksXG4gICAgICAgIHZhbHVlID0gcmVzdWx0W3JhbmRdO1xuXG4gICAgcmVzdWx0W3JhbmRdID0gcmVzdWx0W2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gdmFsdWU7XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBzaHVmZmxlZCB2YWx1ZXMsIHVzaW5nIGEgdmVyc2lvbiBvZiB0aGVcbiAqIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyLVlhdGVzX3NodWZmbGUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzaHVmZmxlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgc2h1ZmZsZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc2h1ZmZsZShbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gWzQsIDEsIDMsIDJdXG4gKi9cbmZ1bmN0aW9uIHNodWZmbGUoY29sbGVjdGlvbikge1xuICByZXR1cm4gc2FtcGxlU2l6ZShjb2xsZWN0aW9uLCBNQVhfQVJSQVlfTEVOR1RIKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9BcnJheSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogXy50b0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXVxuICpcbiAqIF8udG9BcnJheSgxKTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy50b0FycmF5KG51bGwpO1xuICogLy8gPT4gW11cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gc3RyaW5nVG9BcnJheSh2YWx1ZSkgOiBjb3B5QXJyYXkodmFsdWUpO1xuICB9XG4gIGlmIChpdGVyYXRvclN5bWJvbCAmJiB2YWx1ZVtpdGVyYXRvclN5bWJvbF0pIHtcbiAgICByZXR1cm4gaXRlcmF0b3JUb0FycmF5KHZhbHVlW2l0ZXJhdG9yU3ltYm9sXSgpKTtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgIGZ1bmMgPSB0YWcgPT0gbWFwVGFnID8gbWFwVG9BcnJheSA6ICh0YWcgPT0gc2V0VGFnID8gc2V0VG9BcnJheSA6IHZhbHVlcyk7XG5cbiAgcmV0dXJuIGZ1bmModmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5IHZhbHVlcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy52YWx1ZXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbMSwgMl0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLnZhbHVlcygnaGknKTtcbiAqIC8vID0+IFsnaCcsICdpJ11cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID8gYmFzZVZhbHVlcyhvYmplY3QsIGtleXMob2JqZWN0KSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaHVmZmxlO1xuIiwiXG5mdW5jdGlvbiBub29wKCkgeyB9XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaGFzX2NhbmNlbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5jYW5jZWwgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCB7IG5vb3AsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uLCBzYWZlX25vdF9lcXVhbCwgaXNfcHJvbWlzZSwgaGFzX2NhbmNlbCB9O1xuIiwiXG5pbXBvcnQge25vb3AsIGlzX2Z1bmN0aW9uLCBydW5fYWxsfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgY29uc3Qge3N1YnNjcmliZSwgcGlwZX0gPSB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpO1xuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcGlwZSB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2gocywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGlwZSguLi5vcGVyYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9ycy5yZWR1Y2UoKHNyYywgb3BlcmF0b3IpID0+IG9wZXJhdG9yKHNyYywgdmFsdWUpLCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSwgcGlwZSB9O1xufVxuXG5cbi8qKlxuICogRGVyaXZlZCB2YWx1ZSBzdG9yZSBieSBzeW5jaHJvbml6aW5nIG9uZSBvciBtb3JlIHJlYWRhYmxlIHN0b3JlcyBhbmRcbiAqIGFwcGx5aW5nIGFuIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIG92ZXIgaXRzIGlucHV0IHZhbHVlcy5cbiAqIEBwYXJhbSB7U3RvcmVzfSBzdG9yZXMgaW5wdXQgc3RvcmVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKFN0b3Jlcz0sIGZ1bmN0aW9uKCopPSk6Kn1mbiBmdW5jdGlvbiBjYWxsYmFjayB0aGF0IGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlc1xuICogQHBhcmFtIHsqPX1pbml0aWFsX3ZhbHVlIHdoZW4gdXNlZCBhc3luY2hyb25vdXNseVxuICovXG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN0b3JlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyB3cml0YWJsZSwgcmVhZGFibGUsIGRlcml2ZWQgfTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiXG5pbXBvcnQgX2RlYm91bmNlIGZyb20gXCJsb2Rhc2gvZGVib3VuY2UuanNcIjtcbmltcG9ydCB7cmVhZGFibGV9IGZyb20gXCIuLi9zdG9yZS5qc1wiO1xuXG4vKipcbiAqICBkZWJvdW5jZVxuICpcbiAqICBCYXNlZCBvbiBsb2Rhc2ggb3B0aW9uczpcbiAqXG4gKiAgQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiAgQHJldHVybnMge3tzdWJzY3JpYmUsIHBpcGUsIGNhbmNlbCwgZmx1c2h9fVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKHdhaXQsIG9wdGlvbnMpIHtcblxuICAgIHJldHVybiBzcmMgPT4ge1xuICAgICAgICBsZXQgZGVib3VuY2VkID0gX2RlYm91bmNlKCh2LHNldCkgPT4gc2V0KHYpLCB3YWl0LCBvcHRpb25zKTtcbiAgICAgICAgbGV0IHtjYW5jZWwsIGZsdXNofSA9IGRlYm91bmNlZDtcbiAgICAgICAgbGV0IHtzdWJzY3JpYmUsIHBpcGV9PSByZWFkYWJsZSh1bmRlZmluZWQsIHNldCA9PiB7XG4gICAgICAgICAgICBsZXQgdW5zdWIgPSBzcmMuc3Vic2NyaWJlKHYgPT4gZGVib3VuY2VkKHYsc2V0KSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge3N1YnNjcmliZSwgcGlwZSwgY2FuY2VsLCBmbHVzaH1cbiAgICB9XG5cbn1cblxuLyoqXG4gKiAgdGhyb3R0bGVcbiAqXG4gKiAgVXNlcyBkZWJvdW5jZSB3aXRoIG1heFdhaXQgc2V0IChhcyBkb2VzIGxvZGFzaClcbiAqXG4gKiAgQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogIEByZXR1cm5zIHt7c3Vic2NyaWJlLCBwaXBlLCBjYW5jZWwsIGZsdXNofX1cbiovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUod2FpdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBkZWJvdW5jZSh3YWl0LCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICB9KTtcbn1cblxuIiwiXG5pbXBvcnQge3dyaXRhYmxlfSBmcm9tICcuLi9zdG9yZS5qcydcblxuLyoqXG4gKiBzdGFydFdpdGhcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbih7c3Vic2NyaWJlLCBwaXBlfSk6IHtzdWJzY3JpYmUsIHBpcGV9fSBSZWFkYWJsZSBvcGVyYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRXaXRoKHZhbHVlKSB7XG5cbiAgICByZXR1cm4gKHtzdWJzY3JpYmUsIHBpcGV9KSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBlKC4uLm9wZXJhdG9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYXRvcnMucmVkdWNlKChzcmMsIG9wZXJhdG9yKSA9PiBvcGVyYXRvcihzcmMpLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IEljb24gZnJvbSBcImZhLXN2ZWx0ZS9zcmMvSWNvbi5zdmVsdGVcIjtcbiAgaW1wb3J0IHsgZmFWb2x1bWVVcCBhcyBmYVNvdW5kT24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVm9sdW1lVXBcIjtcbiAgaW1wb3J0IHsgZmFWb2x1bWVNdXRlIGFzIGZhU291bmRPZmYgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVm9sdW1lTXV0ZVwiO1xuICBpbXBvcnQgeyBmYVBsYXkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGxheVwiO1xuICBpbXBvcnQgeyBmYVBhdXNlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBhdXNlXCI7XG4gIGltcG9ydCB7IGZhQ29nIGFzIGZhU2V0dGluZ3MgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ29nXCI7XG4gIGltcG9ydCB7IGZhSG9tZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFIb21lXCI7XG4gIGltcG9ydCB7IGZhRG9uYXRlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYURvbmF0ZVwiO1xuICBpbXBvcnQgeyBmYUV4cGFuZEFsdCBhcyBmYUV4cGFuZCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeHBhbmRBbHRcIjtcbiAgaW1wb3J0IHsgZmFDbG91ZERvd25sb2FkQWx0IGFzIGZhRG93bmxvYWQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2xvdWREb3dubG9hZEFsdFwiO1xuICBpbXBvcnQgeyBmYURpY2UgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRGljZVwiO1xuICBpbXBvcnQgeyBmYVBob3RvVmlkZW8gYXMgZmFJbWFnZVZpZGVvIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBob3RvVmlkZW9cIjtcbiAgaW1wb3J0IHsgZmFWaWRlbyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWaWRlb1wiO1xuICBpbXBvcnQgeyBmYUltYWdlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUltYWdlXCI7XG4gIGltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaFwiO1xuICBpbXBvcnQgeyBmYVN5bmMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY1wiO1xuICBpbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xuXG4gIC8vIEF1dG9Db21wbGV0ZSBpbXBvcnQgcmVtb3ZlZCAtIG5vdCB1c2VkXG5cbiAgaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzLnN2ZWx0ZVwiO1xuXG4gIGltcG9ydCB7IG9uTW91bnQsIHRpY2sgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IGdvdG8gYXMgYWhyZWYgfSBmcm9tIFwiQHNhcHBlci9hcHBcIjtcblxuICBpbXBvcnQgc2h1ZmZsZSBmcm9tIFwibG9kYXNoLnNodWZmbGVcIjtcblxuICBpbXBvcnQgeyBBUElfS0VZIH0gZnJvbSBcIi4uL2NvbmZpZy5qc1wiO1xuICBpbXBvcnQgeyBnZXRfdHVtYmxyX3Bvc3RzLCBxdWVyeXAgfSBmcm9tIFwiLi4vX3R1bWJscl91dGlscy50c1wiO1xuXG4gIFxuXG4gIGltcG9ydCB7IHdyaXRhYmxlLCB0aHJvdHRsZSwgc3RhcnRXaXRoIH0gZnJvbSBcInN2ZWx0ZS1waXBlYWJsZS1zdG9yZVwiO1xuXG4gIGltcG9ydCB7XG4gICAgYXV0b3BsYXksXG4gICAgYXV0b3BsYXlpbnRlcnZhbCxcbiAgICBpbWFnZVZpZGVvLFxuICAgIHBvcnRyYWl0TGFuZHNjYXBlLFxuICAgIGZhdm9yaXRlLFxuICAgIG92ZXIxOCxcbiAgICBwcmVmZXRjaCxcbiAgICBwcmVmZXRjaE51bSxcbiAgICBoaXJlcyxcbiAgICBsb3JlcyxcbiAgICBtdXRlZCxcbiAgICBsYXlvdXQsXG4gICAgbXVsdGlyZWRkaXQsXG4gICAgb2xkcmVkZGl0LFxuICAgIGhpZGVVSW9uU3RhcnQsXG4gICAgYXBpS2V5XG4gIH0gZnJvbSBcIi4uL19wcmVmc1wiO1xuICBhdXRvcGxheS51c2VMb2NhbFN0b3JhZ2UoZmFsc2UpO1xuICBhdXRvcGxheWludGVydmFsLnVzZUxvY2FsU3RvcmFnZSgzKTtcbiAgaW1hZ2VWaWRlby51c2VMb2NhbFN0b3JhZ2UoMCk7XG4gIHBvcnRyYWl0TGFuZHNjYXBlLnVzZUxvY2FsU3RvcmFnZSgwKTtcbiAgZmF2b3JpdGUudXNlTG9jYWxTdG9yYWdlKHt9KTtcbiAgb3ZlcjE4LnVzZUxvY2FsU3RvcmFnZSgxKTtcbiAgbXVsdGlyZWRkaXQudXNlTG9jYWxTdG9yYWdlKHt9KTtcbiAgcHJlZmV0Y2gudXNlTG9jYWxTdG9yYWdlKHRydWUpO1xuICBwcmVmZXRjaE51bS51c2VMb2NhbFN0b3JhZ2UoNTApO1xuICBoaXJlcy51c2VMb2NhbFN0b3JhZ2UoZmFsc2UpO1xuICBsb3Jlcy51c2VMb2NhbFN0b3JhZ2UodHJ1ZSk7XG4gIG9sZHJlZGRpdC51c2VMb2NhbFN0b3JhZ2UoZmFsc2UpO1xuICBtdXRlZC51c2VMb2NhbFN0b3JhZ2UodHJ1ZSk7XG4gIGxheW91dC51c2VMb2NhbFN0b3JhZ2UoMCk7XG4gIGhpZGVVSW9uU3RhcnQudXNlTG9jYWxTdG9yYWdlKGZhbHNlKTtcbiAgYXBpS2V5LnVzZUxvY2FsU3RvcmFnZSgnJyk7XG5cbiAgZXhwb3J0IGxldCBwYXJhbXMsIHNsdWdzdHI7XG4gIGV4cG9ydCBsZXQgcG9zdHMgPSBbXTtcbiAgZXhwb3J0IGxldCBhZnRlciA9IG51bGw7XG4gIGV4cG9ydCBsZXQgcmVzO1xuICBleHBvcnQgbGV0IG1vZGUgPSBcInR1bWJsclwiO1xuICBleHBvcnQgbGV0IHBhZ2VUeXBlID0gXCJ1c2VyXCI7XG5cbiAgY29uc29sZS5sb2coXCJQb3N0cyBmcm9tIEFQSTpcIiwgcG9zdHMpO1xuXG4gIGxldCBkYXRhO1xuICBsZXQgZGlzcGxheXBvc3RzID0gW107XG4gIGNvbnNvbGUubG9nKFwiRGlzcGxheSBQb3N0cyAoaW5pdGlhbCk6XCIsIGRpc3BsYXlwb3N0cyk7XG4gIGxldCB1aVZpc2libGUgPSAhJGhpZGVVSW9uU3RhcnQ7XG4gIGxldCBoaWRlQ3Vyc29yID0gJGhpZGVVSW9uU3RhcnQ7XG4gIGxldCBoaWRlQ3Vyc29yVGltZXJJZCA9IDA7XG4gIGxldCB0aXRsZVZpc2libGUgPSB0cnVlO1xuICBsZXQgbnVtRmF2b3JpdGU7XG4gIGxldCB0aW55Z290bztcbiAgbGV0IHRpdGxlO1xuICBsZXQgYWxidW1pbmRleCA9IDA7XG5cbiAgJDoge1xuICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSkge1xuICAgICAgdGl0bGUgPSBgKCR7YWxidW1pbmRleCArIDF9LyR7Y3VycnBvc3QucHJldmlldy5pbWcuYWxidW0ubGVuZ3RofSkgJHtcbiAgICAgICAgY3VycnBvc3QudGl0bGVcbiAgICAgIH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9IGN1cnJwb3N0LnRpdGxlO1xuICAgIH1cbiAgfVxuXG4gIGxldCBibG9nSWRlbnRpZmllcjtcblxuICAkOiBibG9nSWRlbnRpZmllciA9IHNsdWdzdHI7XG5cbiAgJDoge1xuICAgIGlmICgkZ290b0VsV2lkdGggPiAxMDAwKSB7XG4gICAgICAvLyBwYWRkaW5nIG9uIGJvdGggc2lkZXNcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdyA9ICgkZ290b0VsV2lkdGggLSAxNTQgKiAyKSAvIDMyO1xuICAgICAgbGV0IG51bUdvdG9Db250cm9sc1Jvd3MgPVxuICAgICAgICAoZGlzcGxheXBvc3RzLmxlbmd0aCArIDUpIC8gbnVtR290b0NvbnRyb2xzSW5PbmVSb3c7XG4gICAgICB0aW55Z290byA9IG51bUdvdG9Db250cm9sc1Jvd3MgPiAzO1xuICAgIH0gZWxzZSBpZiAoJGdvdG9FbFdpZHRoID4gODAwKSB7XG4gICAgICAvLyBwYWRkaW5nIG9uIHJpZ2h0IHNpZGVcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdyA9ICgkZ290b0VsV2lkdGggLSAoMTU0ICsgMTQpKSAvIDMyO1xuICAgICAgbGV0IG51bUdvdG9Db250cm9sc1Jvd3MgPVxuICAgICAgICAoZGlzcGxheXBvc3RzLmxlbmd0aCArIDUpIC8gbnVtR290b0NvbnRyb2xzSW5PbmVSb3c7XG4gICAgICB0aW55Z290byA9IG51bUdvdG9Db250cm9sc1Jvd3MgPiAzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBwYWRkaW5nXG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzSW5PbmVSb3cgPSAoJGdvdG9FbFdpZHRoIC0gKDE0ICsgMTQpKSAvIDMyO1xuICAgICAgbGV0IG51bUdvdG9Db250cm9sc1Jvd3MgPVxuICAgICAgICAoZGlzcGxheXBvc3RzLmxlbmd0aCArIDUpIC8gbnVtR290b0NvbnRyb2xzSW5PbmVSb3c7XG4gICAgICB0aW55Z290byA9IG51bUdvdG9Db250cm9sc1Jvd3MgPiAzO1xuICAgIH1cbiAgfVxuXG4gIC8vIDE0NDAgaXMgdG8gc2V0IG51bUNvbHMgdG8gMy4gU2V0dGluZyB0byBgMGAgd291bGQgbWVhbiB3ZSBzdGFydCB3aXRoIDEgY29sLCBhbmQgdGhlbiBxdWlja2x5IHVwZGF0ZSB0byAzIG9uIGRlc2t0b3AuXG4gIGNvbnN0IF9nb3RvRWxXaWR0aCA9IHdyaXRhYmxlKDE0NDApO1xuICBjb25zdCBnb3RvRWxXaWR0aCA9IF9nb3RvRWxXaWR0aC5waXBlKHRocm90dGxlKDUwMCksIHN0YXJ0V2l0aCgxNDQwKSk7XG5cbiAgJDogbG9hZEVycm9yID0gcmVzICYmICFyZXMucmVzLm9rO1xuICBsZXQgbG9hZGluZyA9IGZhbHNlO1xuICBsZXQgcmVsb2Fkc3RyID0gXCJMb2FkIG1vcmVcIjtcbiAgbGV0IG5hdmlnYXRpb24gPSBmYWxzZTtcblxuICBsZXQgaW1hZ2VWaWRlb1N0ciA9IFwiXCI7XG4gIGxldCBwb3J0cmFpdExhbmRzY2FwZVN0ciA9IFwiXCI7XG4gIGxldCBkb3dubG9hZHN0ciA9IFwiXCI7XG4gIGxldCBhdXRvcGxheXN0ciA9IFwiXCI7XG4gIGxldCBvdmVyMThzdHIgPSBcIlwiO1xuICBsZXQgZGVlcHNlYXJjaHN0ciA9IFwiXCI7IC8vIERlY2xhcmUgZGVlcHNlYXJjaHN0clxuICBcbiAgbGV0IHNob3doaWRlc3RyID0gXCJTaG93IChoKVwiO1xuICBsZXQgbXV0ZWRzdHIgPSBcIlNvdW5kIE9mZlwiO1xuXG4gIGxldCBhdXRvcGxheXRpbWVyO1xuXG4gIGxldCBmaWx0ZXJSZWY7XG4gIGxldCBmaWx0ZXJFeHBhbmRlZCA9IGZhbHNlO1xuICBsZXQgZmlsdGVyVmFsdWUgPSBcIlwiO1xuICBsZXQgc3VicmVkZGl0U2VhcmNoVmFsdWUgPSBcIlwiOyAvLyBEZWNsYXJlIHN1YnJlZGRpdFNlYXJjaFZhbHVlXG5cbiAgbGV0IHNob3dTZXR0aW5ncyA9IGZhbHNlO1xuXG4gIGxldCBjdXJycG9zdCA9IHsgdGl0bGU6IFwiTG9hZGluZyAuLlwiIH07XG4gIGxldCBuZXh0dXJscyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZE1vcmUoKSB7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybjtcblxuICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgIHJlbG9hZHN0ciA9IFwiTG9hZGluZyAuLlwiO1xuXG4gICAgbGV0IG5ld3Bvc3RzO1xuXG4gICAgaWYgKG1vZGUgPT09IFwidHVtYmxyXCIpIHtcbiAgICAgIGxldCB1c2VBcGlLZXkgPSAkYXBpS2V5IHx8IEFQSV9LRVk7XG4gICAgICBsZXQgdXJsO1xuICAgICAgaWYgKHBhZ2VUeXBlID09PSAnc2VhcmNoJykge1xuICAgICAgICB1cmwgPSBgaHR0cHM6Ly9hcGkudHVtYmxyLmNvbS92Mi90YWdnZWQ/dGFnPSR7YmxvZ0lkZW50aWZpZXJ9JmFwaV9rZXk9JHt1c2VBcGlLZXl9JmJlZm9yZT0ke2FmdGVyIHx8ICcnfSYke3F1ZXJ5cChwYXJhbXMpfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSBgaHR0cHM6Ly9hcGkudHVtYmxyLmNvbS92Mi9ibG9nLyR7YmxvZ0lkZW50aWZpZXJ9L3Bvc3RzP2FwaV9rZXk9JHt1c2VBcGlLZXl9Jm9mZnNldD0ke2FmdGVyIHx8ICcnfSYke3F1ZXJ5cChwYXJhbXMpfWA7XG4gICAgICB9XG5cbiAgICAgICh7XG4gICAgICAgIHBvc3RzOiBuZXdwb3N0cyxcbiAgICAgICAgYWZ0ZXIsXG4gICAgICAgIC4uLnJlc1xuICAgICAgfSA9IGF3YWl0IGdldF90dW1ibHJfcG9zdHModXJsKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIEFQSSBSZXNwb25zZSAocmVzIG9iamVjdCk6XCIsIHJlcyk7XG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIE5ldyBwb3N0cyByZWNlaXZlZDpcIiwgbmV3cG9zdHMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gQ3VycmVudCBwb3N0cyBhcnJheSBiZWZvcmUgY29tYmluaW5nOlwiLCBwb3N0cy5sZW5ndGgpO1xuXG4gICAgLy8gbG9hZCBgZmF2b3JpdGVgIGZyb20gbG9jYWxzdG9yYWdlXG4gICAgZm9yIChsZXQgcCBvZiBuZXdwb3N0cykge1xuICAgICAgcFtcImZhdm9yaXRlXCJdID0gISEoKCRmYXZvcml0ZSB8fCB7fSlbcC51cmxdPy5mYXZvcml0ZSk7XG4gICAgfVxuXG4gICAgLy8gQ29tYmluZSBgcG9zdHNgIGFuZCBgbmV3cG9zdHNgIGFuZCByZW1vdmUgZHVwbGljYXRlcyBmcm9tIG11bHRpcGxlIG5ldHdvcmsgcmVxdWVzdHNcbiAgICBwb3N0cyA9IFsuLi5wb3N0cywgLi4ubmV3cG9zdHNdLnJlZHVjZShcbiAgICAgIChyLCBpKSA9PiAoIXIuc29tZSgoaikgPT4gaS5pZCA9PT0gai5pZCkgPyBbLi4uciwgaV0gOiByKSxcbiAgICAgIFtdXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gUG9zdHMgYWZ0ZXIgaW5pdGlhbCBjb21iaW5lIChiZWZvcmUgVVJMIGRlZHVwZSk6IFwiLCBwb3N0cy5sZW5ndGgpO1xuXG4gICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMsIGJhc2VkIG9uIGB1cmxgXG4gICAgcG9zdHMgPSBwb3N0cy5maWx0ZXIoKHYsIGksIGEpID0+IGEuZmluZEluZGV4KCh0KSA9PiB0LnVybCA9PSB2LnVybCkgPT09IGkpO1xuXG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIEFmdGVyIGRlZHVwZS9Ub3RhbCBsb2FkZWQ6IFwiLCBwb3N0cy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBOZXh0ICdhZnRlcicgdmFsdWU6XCIsIGFmdGVyKTtcblxuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICByZWxvYWRzdHIgPSBcIkxvYWQgbW9yZVwiO1xuICB9XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgLy8gQWx3YXlzIHRyeSB0byBsb2FkIGRhdGEgb24gbW91bnQsIHJlZ2FyZGxlc3Mgb2YgQVBJIGtleSBzdGF0dXNcbiAgICBsb2FkTW9yZSgpO1xuICAgIC8vIFN0YXJ0IGF1dG9wbGF5IGJ5IGRlZmF1bHRcbiAgICBpZiAoJGF1dG9wbGF5KSB7XG4gICAgICBzdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydEF1dG9QbGF5KCkge1xuICAgIC8vY29uc29sZS5sb2coJ1NUQVJUJylcbiAgICBhdXRvcGxheXRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gSWYgYGF1dG9wbGF5YCBpcyBvZmYgYW5kIGl0IGlzIGEgdmlkZW8sIHRoZSB2aWRlbyB3aWxsIHByb2dyZXNzIGJ5IGl0c2VsZiB2aWEgb246ZW5kZWRcbiAgICAgIGlmICgkYXV0b3BsYXkgJiYgY3VycnBvc3QuaXNfaW1hZ2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLSBpTkVYVCcpXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoISRhdXRvcGxheSAmJiBjdXJycG9zdC5pc192aWRlbykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tIHZORVhUJylcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0sICRhdXRvcGxheWludGVydmFsICogMTAwMCk7XG5cbiAgICBhdXRvcGxheS5zZXQodHJ1ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwcmV2KCkge1xuICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSAmJiBhbGJ1bWluZGV4ID4gMCkge1xuICAgICAgYWxidW1QcmV2KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1QcmV2KCk7XG4gICAgICBhd2FpdCB0aWNrKCk7IC8vIEVuc3VyZSBjdXJycG9zdCBpcyB1cGRhdGVkXG4gICAgICBpZiAoY3VycnBvc3QuaXNfYWxidW0pIHtcbiAgICAgICAgYWxidW1pbmRleCA9IGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoY3VycnBvc3QuaXNfYWxidW0gJiYgIWlzRW5kT2ZBbGJ1bSgpKSB7XG4gICAgICBhbGJ1bU5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbU5leHQoKTtcbiAgICAgIGF3YWl0IHRpY2soKTsgLy8gRW5zdXJlIGN1cnJwb3N0IGlzIHVwZGF0ZWRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQXV0b1BsYXkoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnU1RPUCcpXG4gICAgY2xlYXJJbnRlcnZhbChhdXRvcGxheXRpbWVyKTtcbiAgICBhdXRvcGxheS5zZXQoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKSB7XG4gICAgc3RvcEF1dG9QbGF5KCk7XG5cbiAgICBzdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBdXRvUGxheSgpIHtcbiAgICBpZiAoJGF1dG9wbGF5KSB7XG4gICAgICBzdG9wQXV0b1BsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRBdXRvUGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUltYWdlVmlkZW8oKSB7XG4gICAgJGltYWdlVmlkZW8gPSAkaW1hZ2VWaWRlbyArIDE7XG5cbiAgICBpZiAoJGltYWdlVmlkZW8gPT0gMykge1xuICAgICAgJGltYWdlVmlkZW8gPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaXFCeShhLCBrZXkpIHtcbiAgICB2YXIgc2VlbiA9IHt9O1xuICAgIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrID0ga2V5KGl0ZW0pO1xuICAgICAgICByZXR1cm4gc2Vlbi5oYXNPd25Qcm9wZXJ0eShrKSA/IGZhbHNlIDogKHNlZW5ba10gPSB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGVkKCkge1xuICAgICRtdXRlZCA9ICEkbXV0ZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQb3J0cmFpdExhbmRzY2FwZSgpIHtcbiAgICAkcG9ydHJhaXRMYW5kc2NhcGUgPSAkcG9ydHJhaXRMYW5kc2NhcGUgKyAxO1xuXG4gICAgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAzKSB7XG4gICAgICAkcG9ydHJhaXRMYW5kc2NhcGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZW5kZXJWaWRlbyA9IHRydWU7XG5cbiAgLy8gU29tZSBvcGVyYXRpb25zIGxpa2UgZmF2L3VuZmF2IGNhdXNlcyB2aWRlbyB0byByZS1yZW5kZXJcbiAgLy8gc2luY2Ugd2UncmUgY2hhbmdpbmcgcG9zdC5mYXZvcml0ZS4gVGhpcyBzaG91bGQgaGVscCBza2lwIGl0XG4gIGxldCBza2lwUmVuZGVyVmlkZW8gPSBmYWxzZTtcblxuICAkOiB7XG4gICAgaWYgKCFza2lwUmVuZGVyVmlkZW8pIHJlTW91bnRWaWRlbyhjdXJycG9zdC5wcmV2aWV3KTtcbiAgICBza2lwUmVuZGVyVmlkZW8gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlTW91bnRWaWRlbygpIHtcbiAgICByZW5kZXJWaWRlbyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHJlbmRlclZpZGVvID0gdHJ1ZSksIDApO1xuICB9XG5cbiAgJDoge1xuICAgIC8vIFN1YnJlZGRpdCBzZWFyY2hcbiAgICBpZiAoc3VicmVkZGl0U2VhcmNoVmFsdWUpIHtcbiAgICAgIC8vc3VicmVkZGl0U2VhcmNoVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgLy9haHJlZihgL3IvJHtzdWJyZWRkaXRTZWFyY2hWYWx1ZX1gKTtcbiAgICAgIC8vc3VicmVkZGl0U2VhcmNoVmFsdWUgPSBcIlwiO1xuICAgICAgLy9zdWJyZWRkaXRTZWFyY2hWYWx1ZVJhdyA9IFwiXCI7XG4gICAgICBqdW1wVG9TdWJSZWRkaXQoc3VicmVkZGl0U2VhcmNoVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBudW1GYXZvcml0ZSA9IGRpc3BsYXlwb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmF2b3JpdGUgPT0gdHJ1ZSkubGVuZ3RoO1xuXG4gICAgaWYgKCFudW1GYXZvcml0ZSkge1xuICAgICAgZG93bmxvYWRzdHIgPSBgTm90aGluZyB0byBkb3dubG9hZGA7XG4gICAgfSBlbHNlIGlmIChudW1GYXZvcml0ZSA9PSAxKSB7XG4gICAgICBkb3dubG9hZHN0ciA9IGBEb3dubG9hZCAke251bUZhdm9yaXRlfSBmaWxlYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG93bmxvYWRzdHIgPSBgRG93bmxvYWQgJHtudW1GYXZvcml0ZX0gZmlsZXNgO1xuICAgIH1cbiAgICBhdXRvcGxheXN0ciA9IGBBdXRvcGxheSBpcyAkeyRhdXRvcGxheSA/IFwib25cIiA6IFwib2ZmXCJ9YDtcbiAgICBkZWVwc2VhcmNoc3RyID0gYFNlYXJjaCBmb3IgJHtmaWx0ZXJWYWx1ZX1gO1xuXG4gICAgbXV0ZWRzdHIgPSBgU291bmQgJHskbXV0ZWQgPyBcIm9mZlwiIDogXCJvblwifWA7XG5cbiAgICBpZiAoJG92ZXIxOCA9PSAwKSB7XG4gICAgICBvdmVyMThzdHIgPSBcIm5zZncgb2ZmXCI7XG4gICAgfSBlbHNlIGlmICgkb3ZlcjE4ID09IDEpIHtcbiAgICAgIG92ZXIxOHN0ciA9IFwibnNmdyBvblwiO1xuICAgIH0gZWxzZSBpZiAoJG92ZXIxOCA9PSAyKSB7XG4gICAgICBvdmVyMThzdHIgPSBcIm5zZncgb25seVwiO1xuICAgIH1cblxuICAgIGlmICgkaW1hZ2VWaWRlbyA9PSAwKSB7XG4gICAgICBpbWFnZVZpZGVvU3RyID0gXCJTaG93IGJvdGggaW1hZ2UgYW5kIHZpZGVvXCI7XG4gICAgfSBlbHNlIGlmICgkaW1hZ2VWaWRlbyA9PSAxKSB7XG4gICAgICBpbWFnZVZpZGVvU3RyID0gXCJTaG93IHZpZGVvcyBvbmx5XCI7XG4gICAgfSBlbHNlIGlmICgkaW1hZ2VWaWRlbyA9PSAyKSB7XG4gICAgICBpbWFnZVZpZGVvU3RyID0gXCJTaG93IGltYWdlcyBvbmx5XCI7XG4gICAgfVxuXG4gICAgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAwKSB7XG4gICAgICBwb3J0cmFpdExhbmRzY2FwZVN0ciA9IFwiU2hvdyBhbGwgbWVkaWFcIjtcbiAgICB9IGVsc2UgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAxKSB7XG4gICAgICBwb3J0cmFpdExhbmRzY2FwZVN0ciA9IFwiU2hvdyBvbmx5IHBvcnRyYWl0IG1lZGlhXCI7XG4gICAgfSBlbHNlIGlmICgkcG9ydHJhaXRMYW5kc2NhcGUgPT0gMikge1xuICAgICAgcG9ydHJhaXRMYW5kc2NhcGVTdHIgPSBcIlNob3cgb25seSBsYW5kc2NhcGUgbWVkaWFcIjtcbiAgICB9XG4gIH1cblxuICAkOiB7XG4gICAgaWYgKGRpc3BsYXlwb3N0c1tpbmRleF0pIHtcbiAgICAgIGN1cnJwb3N0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkaXNwbGF5cG9zdHNbaW5kZXhdKSk7XG5cbiAgICAgIGxldCBfbmV4dHVybHMgPSBbXTtcblxuICAgICAgX25leHR1cmxzID0gW1xuICAgICAgICBjdXJycG9zdCxcbiAgICAgICAgLi4uZGlzcGxheXBvc3RzLnNsaWNlKGluZGV4ICsgMSwgaW5kZXggKyAkcHJlZmV0Y2hOdW0gKyAxKVxuICAgICAgXTtcblxuICAgICAgbmV4dHVybHMgPSBfbmV4dHVybHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLmlzX2FsYnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcmV2aWV3LmltZy5hbGJ1bS5zbGljZShcbiAgICAgICAgICAgICAgYWxidW1pbmRleCxcbiAgICAgICAgICAgICAgYWxidW1pbmRleCArICRwcmVmZXRjaE51bSArIDFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZsYXQoKTtcblxuICAgICAgY29uc29sZS5sb2cobmV4dHVybHMpO1xuICAgICAgbmV4dHVybHMgPSB1bmlxQnkobmV4dHVybHMsICgpID0+IChpdGVtKSA9PiBpdGVtLnByZXZpZXcuaW1nLmRlZmF1bHQpO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyVmFsdWUpIHtcbiAgICAgIC8vIFdlJ3JlIGhlcmUgYmVjYXVzZSB1c2VyIGZpbHRlcmVkIHRoZSBsaXN0XG5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlIGZpbHRlcmVkIGxpc3QgaXMgc21hbGxlciB0aGFuIHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAvLyBzZXQgaW5kZXggdG8gbGFzdCBpdGVtXG4gICAgICBpZiAoZGlzcGxheXBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGluZGV4IGZyb20gXCIsIGluZGV4LCBcIiB0byBcIiwgZGlzcGxheXBvc3RzLmxlbmd0aCk7XG4gICAgICAgIGluZGV4ID0gZGlzcGxheXBvc3RzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBtb3JlIC4uXCIpO1xuICAgICAgICBsb2FkTW9yZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyB3YXMgZmlsdGVyZWRcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICBjdXJycG9zdCA9IHtcbiAgICAgICAgICB0aXRsZTogXCJOb3RoaW5nIHRvIHNob3cuIFRyeSBjaGFuZ2luZyBmaWx0ZXJzIG9yIHR3ZWFrL3VwZGF0ZSBVUkwuXCJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlcyAmJiByZXMucmVzLm9rKSB7XG4gICAgICAgIC8vIE5vIG1lZGlhIGZvdW5kXG4gICAgICAgIGN1cnJwb3N0ID0ge1xuICAgICAgICAgIHRpdGxlOiBcIk5vdGhpbmcgdG8gc2hvdy4gVHJ5IGNoYW5naW5nIGZpbHRlcnMgb3IgdHdlYWsvdXBkYXRlIFVSTC5cIlxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChyZXMgJiYgIXJlcy5yZXMub2spIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBBUEkga2V5IGVycm9yXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIEVycm9yIFJlc3BvbnNlOlwiLCByZXMpO1xuICAgICAgICBcbiAgICAgICAgLy8gSGFuZGxlIEFQSSBlcnJvcnMgd2l0aCBoZWxwZnVsIG1lc3NhZ2luZ1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSByZXMucmVzLnJlcyB8fCByZXMucmVzIHx8IFwiXCI7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFuIEFQSSBrZXkgZXJyb3JcbiAgICAgICAgY29uc3QgaXNBcGlLZXlFcnJvciA9IGVycm9yTWVzc2FnZS5pbmNsdWRlcyhcIkludmFsaWQgQVBJIGtleVwiKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmluY2x1ZGVzKFwiT0F1dGggQ29uc3VtZXIgS2V5IEdvZXMgSGVyZVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5jbHVkZXMoXCJhcGlfa2V5XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBUElfS0VZID09PSAnT0F1dGggQ29uc3VtZXIgS2V5IEdvZXMgSGVyZScgJiYgISRhcGlLZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzQXBpS2V5RXJyb3IpIHtcbiAgICAgICAgICBjdXJycG9zdCA9IHsgdGl0bGU6IFwiUGxlYXNlIHNldCB5b3VyIFR1bWJsciBBUEkga2V5IGluIHNldHRpbmdzXCIgfTtcbiAgICAgICAgICAvLyBPcHRpb25hbGx5IHNob3cgc2V0dGluZ3MsIGJ1dCBkb24ndCBmb3JjZSBpdFxuICAgICAgICAgIC8vIHNob3dTZXR0aW5ncyA9IHRydWU7IC8vIFVuY29tbWVudCB0aGlzIGxpbmUgaWYgeW91IHdhbnQgc2V0dGluZ3MgdG8gb3BlbiBhdXRvbWF0aWNhbGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycnBvc3QgPSB7IHRpdGxlOiBcIkVycm9yIGxvYWRpbmcgcG9zdHNcIiB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZhdWx0XG4gICAgICAgIGN1cnJwb3N0ID0geyB0aXRsZTogXCJMb2FkaW5nIC4uXCIgfTtcbiAgICAgIH1cblxuICAgICAgbmV4dHVybHMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAkOiB7XG4gICAgbGV0IHRtcCA9IFtdO1xuXG4gICAgaWYgKCRvdmVyMTggPT0gMCkge1xuICAgICAgdG1wID0gcG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm92ZXIxOCA9PSBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICgkb3ZlcjE4ID09IDEpIHtcbiAgICAgIHRtcCA9IHBvc3RzO1xuICAgIH0gZWxzZSBpZiAoJG92ZXIxOCA9PSAyKSB7XG4gICAgICB0bXAgPSBwb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ub3ZlcjE4ID09IHRydWUpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJWYWx1ZSkge1xuICAgICAgc2tpcFJlbmRlclZpZGVvID0gdHJ1ZTtcbiAgICAgIHRtcCA9IHRtcC5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgb25seSB2aWRlb3NcbiAgICBpZiAoJGltYWdlVmlkZW8gPT0gMSkge1xuICAgICAgdG1wID0gdG1wLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pc192aWRlbyk7XG4gICAgfVxuICAgIC8vIEZpbHRlciBvbmx5IGltYWdlc1xuICAgIGVsc2UgaWYgKCRpbWFnZVZpZGVvID09IDIpIHtcbiAgICAgIHRtcCA9IHRtcC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXNfaW1hZ2UpO1xuICAgIH1cblxuICAgIGlmICgkcG9ydHJhaXRMYW5kc2NhcGUgPT0gMSkge1xuICAgICAgdG1wID0gdG1wLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5kaW1zLndpZHRoIC8gaXRlbS5kaW1zLmhlaWdodCA8PSAxLjIpO1xuICAgIH0gZWxzZSBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDIpIHtcbiAgICAgIHRtcCA9IHRtcC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGltcy53aWR0aCAvIGl0ZW0uZGltcy5oZWlnaHQgPiAxLjIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlwb3N0cyA9IHRtcDtcbiAgfVxuXG4gIC8vIEFQSSBrZXkgY2hhbmdlcyBhcmUgaGFuZGxlZCBtYW51YWxseSBieSB0aGUgdXNlclxuICAvLyBObyBhdXRvbWF0aWMgcmVsb2FkaW5nIG9yIHNldHRpbmdzIHBvcHVwXG5cbiAgLy8gT25seSBzaG93IHNldHRpbmdzIGlmIHdlIGhhdmUgbm8gdmFsaWQgQVBJIGtleSBBTkQgbm8gcG9zdHMgbG9hZGVkXG4gIC8vIFNldHRpbmdzIHdpbmRvdyB3aWxsIG9ubHkgYXBwZWFyIHdoZW4gdXNlciBtYW51YWxseSBjbGlja3MgdGhlIHNldHRpbmdzIGJ1dHRvblxuICAvLyBObyBhdXRvbWF0aWMgcG9wdXAgb24gcmVmcmVzaCBvciBsb2FkXG5cbiAgZnVuY3Rpb24gZ290byhpKSB7XG4gICAgYWxidW1pbmRleCA9IDA7XG4gICAgaW5kZXggPSBpO1xuXG4gICAgbGV0IGl0ZW1OdW0gPSBkaXNwbGF5cG9zdHMubGVuZ3RoIC0gaW5kZXg7XG5cbiAgICAvLyBJZiBhdXRvcGxheSBpcyBvbiBhbmQgd2UncmUganVtcGluZyB0byAyIG9yIDMsIHdlIG11c3QgbG9hZFxuICAgIGlmICgoaXRlbU51bSA9PSAyIHx8IGl0ZW1OdW0gPT0gMykgJiYgJGF1dG9wbGF5KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltnb3RvLXRvLTIvM106IGxvYWRpbmcgLi5cIik7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIC8vIExhc3QgaXRlbVxuICAgIGlmIChpdGVtTnVtID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltnb3RvLXRvLWxhc3RpdGVtXTogbG9hZGluZyAuLlwiKTtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRhdXRvcGxheSkgc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZERhdGEoKSB7XG4gICAgLy8gQWx3YXlzIHJlbG9hZCBkYXRhLCBsZXQgdGhlIEFQSSBoYW5kbGUgZXJyb3JzXG4gICAgcG9zdHMgPSBbXTtcbiAgICBkaXNwbGF5cG9zdHMgPSBbXTtcbiAgICBhZnRlciA9IG51bGw7XG4gICAgbG9hZE1vcmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpZGVvZW5kZWQoKSB7XG4gICAgaXRlbU5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZW1OZXh0KCkge1xuICAgIGFsYnVtaW5kZXggPSAwOyAvLyBBbHdheXMgcmVzZXQgYWxidW0gaW5kZXggdG8gMCB3aGVuIG1vdmluZyB0byBhIG5ldyBwb3N0XG4gICAgbGV0IGl0ZW1OdW0gPSBkaXNwbGF5cG9zdHMubGVuZ3RoIC0gMSAtIGluZGV4O1xuXG4gICAgLy8gTGFzdCBpdGVtLCBkb250IGdvIHBhc3QgdGhlIGxhc3QgaXRlbVxuICAgIGlmIChpdGVtTnVtIDw9IDEpIHtcbiAgICAgIGluZGV4ID0gZGlzcGxheXBvc3RzLmxlbmd0aCAtIDE7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiW2xhc3RpdGVtLCBhdXRvcGxheStmaWx0ZXI/XTogbG9hZGluZyBtb3JlIC4uXCIpO1xuICAgICAgLy8gUmVhY2hlZCBsYXN0IGl0ZW0sIHBvc3NpYmx5IGJ5IGF1dG9wbGF5ICsgZmlsdGVyXG4gICAgICBsb2FkTW9yZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXV0byB0cmlnZ2VyIG9uIHRoZSBsYXN0IDR0aCBpdGVtXG4gICAgaWYgKGl0ZW1OdW0gPT09IDQgfHwgaXRlbU51bSA9PT0gMykge1xuICAgICAgY29uc29sZS5sb2coXCJbNHRoIGxhc3QgaXRlbSwgbm9ybWFsXTogbG9hZGluZyBtb3JlIC4uXCIpO1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSdyZSBhdCAzcmQvMm5kIGxhc3QgaXRlbSB3aXRoIGEgZmlsdGVyLCB0aGUgdXNlclxuICAgIC8vIHBvc3NpYmx5IGp1c3QgZmlsdGVyZWQgdGhlIGxpc3QgYW5kIGVuZGVkIHVwIGhlcmUuXG4gICAgLy8gdHJpZ2dlciBhIGxvYWQgbW9yZS4gV2UgZG9udCB3YW50IHRvIGRvIGl0IGFsd2F5cyBzaW5jZVxuICAgIC8vIHdlIG5vcm1hbGx5IHRyaWdnZXIgbG9hZG1vcmUgQDNyZCBsYXN0IGl0ZW0uIEFsd2F5cyBkb2luZyBpdFxuICAgIC8vIFdvdWxkIGVuZCB1cCB3aXRoIDIgcmVxdWVzdHMgdG8gcmVkZGl0LmNvbVxuICAgIGlmIChpdGVtTnVtID09PSAyICYmIGZpbHRlclZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlsybmQgbGFzdCBpdGVtLCBmaWx0ZXJpbmc/XTogbG9hZGluZyBtb3JlIC4uXCIpO1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG5cbiAgICBpbmRleCArPSAxO1xuXG4gICAgaWYgKCRhdXRvcGxheSkgc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGl0ZW1QcmV2KCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuO1xuICAgIGluZGV4IC09IDE7XG5cbiAgICBhbGJ1bWluZGV4ID0gMDsgLy8gQWx3YXlzIHJlc2V0IGFsYnVtIGluZGV4IHRvIDAgd2hlbiBtb3ZpbmcgdG8gYSBuZXcgcG9zdFxuXG4gICAgYXdhaXQgdGljaygpOyAvLyBFbnN1cmUgY3VycnBvc3QgaXMgdXBkYXRlZCBiZWZvcmUgYWNjZXNzaW5nIGl0cyBwcm9wZXJ0aWVzXG5cbiAgICBpZiAoZGlzcGxheXBvc3RzLmxlbmd0aCAtIGluZGV4ID09PSAzKSB7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cbiAgICBpZiAoJGF1dG9wbGF5KSBzdG9wQW5kU3RhcnRBdXRvUGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHwgLy8gYWx0ZXJuYXRpdmUgc3RhbmRhcmQgbWV0aG9kXG4gICAgICBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAgICAgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnRcbiAgICApIHtcbiAgICAgIC8vIGN1cnJlbnQgd29ya2luZyBtZXRob2RzXG4gICAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuICAgICAgaWYgKCF1aVZpc2libGUpIHtcbiAgICAgICAgdG9nZ2xlVUlWaXNpYmxpdHkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW0ucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlbS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW0ubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZWxlbS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICAgIGlmICh1aVZpc2libGUpIHtcbiAgICAgICAgdG9nZ2xlVUlWaXNpYmxpdHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblZpZGVvUGxheWVyQ2xpY2tlZChldikge1xuICAgIGNvbnN0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9wbGF5ZXJpZCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldi5vZmZzZXRYIC8gci53aWR0aDtcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gMS81O1xuXG4gICAgaWYgKHggPCBhY3RpdmVQYXJ0KSB7XG4gICAgICBpdGVtUHJldigpO1xuICAgIH0gZWxzZSBpZiAoeCA+ICgxLWFjdGl2ZVBhcnQpKSB7XG4gICAgICBpdGVtTmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUhpZGVDdXJzb3IoKSB7XG4gICAgLy8gSWYgdGhlIFVJIGlzIGN1cnJlbnRseSB2aXNpYmxlLCB0aGUgY3Vyc29yIHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZS5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNldCBhIHRpbWVyIHRvIGhpZGUgaXQgaW4gdGhpcyBzdGF0ZS5cbiAgICBpZiAodWlWaXNpYmxlKSB7XG4gICAgICBoaWRlQ3Vyc29yID0gZmFsc2U7IC8vIEVuc3VyZSBjdXJzb3IgaXMgdmlzaWJsZVxuICAgICAgaWYgKGhpZGVDdXJzb3JUaW1lcklkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChoaWRlQ3Vyc29yVGltZXJJZCk7IC8vIENsZWFyIGFueSBsaW5nZXJpbmcgdGltZXJcbiAgICAgICAgaGlkZUN1cnNvclRpbWVySWQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuOyAvLyBTdG9wIGhlcmUsIG5vIGZ1cnRoZXIgYWN0aW9uIG5lZWRlZFxuICAgIH1cblxuICAgIC8vIElmIHRoZSBVSSBpcyBoaWRkZW4sIHdlIG1hbmFnZSBjdXJzb3IgdmlzaWJpbGl0eSBiYXNlZCBvbiBpbmFjdGl2aXR5LlxuICAgIGhpZGVDdXJzb3IgPSBmYWxzZTsgLy8gU2hvdyBjdXJzb3IgaW1tZWRpYXRlbHkgb24gbW91c2UgbW92ZW1lbnRcbiAgICBpZiAoaGlkZUN1cnNvclRpbWVySWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChoaWRlQ3Vyc29yVGltZXJJZCk7IC8vIENsZWFyIHByZXZpb3VzIHRpbWVyXG4gICAgfVxuICAgIGhpZGVDdXJzb3JUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBoaWRlQ3Vyc29yVGltZXJJZCA9IDA7XG4gICAgICBoaWRlQ3Vyc29yID0gdHJ1ZTsgLy8gSGlkZSBjdXJzb3IgYWZ0ZXIgMyBzZWNvbmRzIG9mIGluYWN0aXZpdHlcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRpdGxlVmlzaWJpbGl0eSgpIHtcbiAgICB0aXRsZVZpc2libGUgPSAhdGl0bGVWaXNpYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVUlWaXNpYmxpdHkoKSB7XG4gICAgdWlWaXNpYmxlID0gIXVpVmlzaWJsZTtcblxuICAgIHNob3doaWRlc3RyID0gdWlWaXNpYmxlID8gXCJIaWRlIChoKVwiIDogXCJTaG93IChoKVwiO1xuXG4gICAgaWYgKGhpZGVDdXJzb3JUaW1lcklkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaGlkZUN1cnNvclRpbWVySWQpO1xuICAgICAgaGlkZUN1cnNvclRpbWVySWQgPSAwO1xuICAgIH1cblxuICAgIGlmICghdWlWaXNpYmxlKSB7XG4gICAgICBoaWRlQ3Vyc29yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZUN1cnNvciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNldHRpbmdzKCkge1xuICAgIHNob3dTZXR0aW5ncyA9ICFzaG93U2V0dGluZ3M7XG4gIH1cblxuICBmdW5jdGlvbiBnb3RvRGVlcFNlYXJjaCgpIHtcbiAgICBsZXQgcHJlZml4ID0gXCJcIjtcbiAgICBpZiAoc2x1Z3N0cikge1xuICAgICAgcHJlZml4ID0gYC9yLyR7c3VicmVkZGl0fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZpeCA9IGBgO1xuICAgIH1cblxuICAgIG5hdmlnYXRpb24gPSB0cnVlO1xuICAgIGFocmVmKFxuICAgICAgYCR7cHJlZml4fS9zZWFyY2g/cT0ke2ZpbHRlclZhbHVlfSZyZXN0cmljdF9zcj1vbiZpbmNsdWRlX292ZXJfMTg9b24mc29ydD1yZWxldmFudCZ0PWFsbGBcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVNldHRpbmdzKCkge1xuICAgIHNob3dTZXR0aW5ncyA9IGZhbHNlO1xuICB9XG5cbiAgXG5cbiAgYXN5bmMgZnVuY3Rpb24gZXhwYW5kRmlsdGVyKCkge1xuICAgIGZpbHRlckV4cGFuZGVkID0gdHJ1ZTtcblxuICAgIGF3YWl0IHRpY2soKTtcblxuICAgIC8vIEZvY3VzIHRoZSBpbnB1dCBpZiB3ZSBqdXN0IG9wZW5lZCBpdFxuICAgIGlmIChmaWx0ZXJFeHBhbmRlZCkgZmlsdGVyUmVmLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xuICAgIGZpbHRlckV4cGFuZGVkID0gIWZpbHRlckV4cGFuZGVkO1xuXG4gICAgYXdhaXQgdGljaygpO1xuICAgIC8vIEZvY3VzIHRoZSBpbnB1dCBpZiB3ZSBqdXN0IG9wZW5lZCBpdFxuICAgIGlmIChmaWx0ZXJFeHBhbmRlZCkgZmlsdGVyUmVmLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRGaWxlcygpIHtcbiAgICB3aW5kb3cub3BlbihcIi9kb3dubG9hZFwiLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNodWZmbGVGaWxlcygpIHtcbiAgICBkaXNwbGF5cG9zdHMgPSBzaHVmZmxlKGRpc3BsYXlwb3N0cyk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuTWVkaWEoKSB7XG4gICAgd2luZG93Lm9wZW4oY3VycnBvc3QucGVybWFsaW5rLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIFxuXG4gIGZ1bmN0aW9uIGNvcHlTcmNUb0NsaXBib2FyZCgpIHtcbiAgICBsZXQgdGV4dDtcbiAgICBpZiAoXG4gICAgICBjdXJycG9zdC51cmwuc3RhcnRzV2l0aChcImh0dHBzOi8vdi5yZWRkLml0L1wiKSB8fFxuICAgICAgY3VycnBvc3QudXJsLmluY2x1ZGVzKFwicmVkZ2lmcy5jb21cIilcbiAgICApIHtcbiAgICAgIHRleHQgPSBjdXJycG9zdC5wcmV2aWV3LnZpZC5tcDQ7XG4gICAgfSBlbHNlIGlmIChjdXJycG9zdC5pc19pbWFnZSAmJiAhY3VycnBvc3QuaXNfYWxidW0pIHtcbiAgICAgIHRleHQgPSBjdXJycG9zdC51cmw7XG4gICAgfSBlbHNlIGlmIChjdXJycG9zdC5pc192aWRlbykge1xuICAgICAgdGV4dCA9IGN1cnJwb3N0LnVybDtcbiAgICB9IGVsc2UgaWYgKGN1cnJwb3N0LmlzX2FsYnVtKSB7XG4gICAgICBpZiAoY3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uaXNfdmlkZW8pIHtcbiAgICAgICAgdGV4dCA9IGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmhpcmVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmhpcmVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgIC53cml0ZVRleHQodGV4dClcbiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKGBDb3BpZWQ6ICR7dGV4dH1gKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVPdmVyMTgoKSB7XG4gICAgJG92ZXIxOCA9ICRvdmVyMTggKyAxO1xuXG4gICAgaWYgKCRvdmVyMTggPT0gMykge1xuICAgICAgJG92ZXIxOCA9IDA7XG4gICAgfVxuICAgIG92ZXIxOC5zZXQoJG92ZXIxOCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbGxGYXZvcml0ZShyZW1vdmVBbGxGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgc2tpcFJlbmRlclZpZGVvID0gdHJ1ZTtcblxuICAgIGZvciAoY29uc3QgW2ksIHBvc3RdIG9mIGRpc3BsYXlwb3N0cy5lbnRyaWVzKCkpIHtcbiAgICAgIC8vIEZvciByZWFjdGl2aXR5XG4gICAgICBkaXNwbGF5cG9zdHNbaV0uZmF2b3JpdGUgPSBmYWxzZTtcblxuICAgICAgLy8gSWYgcmVtb3ZlQWxsRnJvbUxvY2FsU3RvcmFnZSBpcyB0cnVlLCB0aGVuIHdlJ2xsIHJlbW92ZSBldmVyeXRoaWduIGluIG9uZSBzaG90XG4gICAgICAvLyBubyBuZWVkIHRvIGRvIGl0IG9uZSBieSBvbmVcbiAgICAgIGlmIChyZW1vdmVBbGxGcm9tTG9jYWxTdG9yYWdlID09IGZhbHNlKSB7XG4gICAgICAgIC8vIExvY2Fsc3RvcmFnZVxuICAgICAgICAkZmF2b3JpdGVbcG9zdC51cmxdID0gdW5kZWZpbmVkO1xuICAgICAgICAkZmF2b3JpdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRmYXZvcml0ZSkpO1xuXG4gICAgICAgIGZhdm9yaXRlLnNldCgkZmF2b3JpdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW1vdmVBbGxGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgICBmYXZvcml0ZS5zZXQoe30pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZSgpIHtcbiAgICBza2lwUmVuZGVyVmlkZW8gPSB0cnVlO1xuICAgIGRpc3BsYXlwb3N0c1tpbmRleF0uZmF2b3JpdGUgPSAhZGlzcGxheXBvc3RzW2luZGV4XS5mYXZvcml0ZTtcblxuICAgIGxldCB1cmwgPSBkaXNwbGF5cG9zdHNbaW5kZXhdLnVybDtcbiAgICAkZmF2b3JpdGVbdXJsXSA9IHVuZGVmaW5lZDtcbiAgICAkZmF2b3JpdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRmYXZvcml0ZSkpO1xuICAgICRmYXZvcml0ZVt1cmxdID0gZGlzcGxheXBvc3RzW2luZGV4XTtcbiAgICBmYXZvcml0ZS5zZXQoJGZhdm9yaXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsYnVtUHJldigpIHtcbiAgICBpZiAoIWN1cnJwb3N0LmlzX2FsYnVtKSByZXR1cm47XG4gICAgYWxidW1pbmRleCAtPSAxO1xuICAgIGlmICgkYXV0b3BsYXkpIHN0b3BBbmRTdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0VuZE9mQWxidW0oKSB7XG4gICAgcmV0dXJuIGFsYnVtaW5kZXggPT0gY3VycnBvc3QucHJldmlldy5pbWcuYWxidW0ubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RhcnRPZkFsYnVtKCkge1xuICAgIHJldHVybiBhbGJ1bWluZGV4ID09IDA7XG4gIH1cblxuICBmdW5jdGlvbiBhbGJ1bU5leHQoKSB7XG4gICAgaWYgKCFjdXJycG9zdC5pc19hbGJ1bSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzRW5kT2ZBbGJ1bSgpKSB7XG4gICAgICBhbGJ1bWluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxidW1pbmRleCArPSAxO1xuICAgIH1cblxuICAgIGlmICgkYXV0b3BsYXkpIHN0b3BBbmRTdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiB3aGVlbChldmVudCkge1xuICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICBwcmV2KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xuICAgIC8vIHVwXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG5cbiAgICAvLyBkb3duXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApIHtcbiAgICAgIHByZXYoKTtcbiAgICB9XG5cbiAgICAvLyBzXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gODMpIHtcbiAgICAgIHRvZ2dsZU11dGVkKCk7XG4gICAgfVxuXG4gICAgLy8gcSwgcFxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDgxIHx8IGV2ZW50LmtleUNvZGUgPT0gODApIHtcbiAgICAgIHRvZ2dsZUF1dG9QbGF5KCk7XG4gICAgfVxuXG4gICAgLy8gZlxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDcwICYmICFldmVudC5jdHJsS2V5KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgLy8gc2xhc2gsIGZcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxOTEpIHtcbiAgICAgIGV4cGFuZEZpbHRlcigpO1xuICAgICAgLy8gV2UgbmVlZCB0aGlzLCBvdGhlcndpc2UgZmlsdGVyIGJveCB3aWxsIGhhdmUgJy8nIGJlY2F1c2Ugb2YgYXV0b2ZvY3VzXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIHhcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4OCkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHJlbW92ZUFsbEZhdm9yaXRlKGV2ZW50LmN0cmxLZXkpOyAvLyBpZiBjdHJsK3NoaWZ0K3ggaXMgcmVtb3ZlIGV2ZXJ5dGhpbmcgZnJvbSBsb2NhbHN0b3JhZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUZhdm9yaXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNzkpIHtcbiAgICAgIG9wZW5NZWRpYSgpO1xuICAgIH1cblxuICAgIC8vIGlcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA3Mykge1xuICAgICAgb3Blbk1lZGlhKCk7XG4gICAgfVxuXG4gICAgLy8gb1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDc5KSB7XG4gICAgICB3aW5kb3cub3BlbihjdXJycG9zdC5wZXJtYWxpbmssIFwiX2JsYW5rXCIpO1xuICAgIH1cblxuICAgIC8vIGhcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA3Mikge1xuICAgICAgdG9nZ2xlVUlWaXNpYmxpdHkoKTtcbiAgICB9XG5cbiAgICAvLyB0XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gODQpIHtcbiAgICAgIHRvZ2dsZVRpdGxlVmlzaWJpbGl0eSgpO1xuICAgIH1cblxuICAgIC8vIHZcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMTgpIHtcbiAgICAgIHRvZ2dsZUltYWdlVmlkZW8oKTtcbiAgICB9XG5cbiAgICAvLyBjXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNjcpIHtcbiAgICAgIGNvcHlTcmNUb0NsaXBib2FyZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG4gPSBldmVudC5rZXlDb2RlIC0gNDg7XG4gICAgaWYgKG4gPj0gMCAmJiBuIDw9IDMpIHtcbiAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvcGxheWVyaWQnKTtcbiAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gbiAqIHZpZGVvLmR1cmF0aW9uIC8gNDtcbiAgICB9XG5cbiAgICAvLyBMZWZ0IEFycm93LCBhLCBrLCBQYWdlLXVwXG4gICAgaWYgKFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSAzNyB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSA2NSB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSA3NSB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSAzM1xuICAgICkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvcGxheWVyaWQnKTtcbiAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgLT0gNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1QcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJpZ2h0IEFycm93LCBkLCBqLCBTcGFjZSwgUGFnZS1kb3duXG4gICAgZWxzZSBpZiAoXG4gICAgICBldmVudC5rZXlDb2RlID09IDM5IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDY4IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDc0IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDMyIHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDM0XG4gICAgKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9wbGF5ZXJpZCcpO1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSArPSA1O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbU5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOndpbmRvdyBvbjprZXlkb3duPXtrZXlkb3dufSBvbjp3aGVlbD17d2hlZWx9IC8+XG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT50dW1ibHJweCAtIHtzbHVnc3RyID8gYHQvJHtzbHVnc3RyfWAgOiBcInR1bWJsci5jb21cIn08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBjbGFzczpoaWRlLWN1cnNvcj1cIntoaWRlQ3Vyc29yfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVyb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiIGNsYXNzOmhpZGU9XCJ7IXVpVmlzaWJsZSB8fCAhdGl0bGVWaXNpYmxlfVwiIGNsYXNzOmZhdm9yaXRlPVwie2N1cnJwb3N0LmZhdm9yaXRlfVwiPlxuICAgICAgeyNpZiBjdXJycG9zdC5kaW1zICYmIGN1cnJwb3N0LmRpbXMud2lkdGggPiAwfVxuICAgICAgICB7dGl0bGV9ICh7Y3VycnBvc3QuZGltcy53aWR0aH14e2N1cnJwb3N0LmRpbXMuaGVpZ2h0fSlcbiAgICAgIHs6ZWxzZX1cbiAgICAgICAge3RpdGxlfVxuICAgICAgey9pZn1cbiAgICAgIHsjaWYgY3VycnBvc3Quc3VicmVkZGl0fVxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VicmVkZGl0XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ1c2VyXCI+e2N1cnJwb3N0LmF1dGhvcnB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzXCI+XG4gICAgICBcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGNvZ1wiIG9uOmNsaWNrPVwie3RvZ2dsZVNldHRpbmdzfVwiIGNsYXNzOnNob3dTZXR0aW5ncz1cIntzaG93U2V0dGluZ3N9XCIgY2xhc3M6aGlkZT1cInt1aVZpc2libGUgPT0gZmFsc2V9XCI+XG4gICAgICAgIDxJY29uIGljb249XCJ7ZmFTZXR0aW5nc31cIj48L0ljb24+XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGl2XCIgY2xhc3M6aGlkZT1cInt1aVZpc2libGUgPT0gZmFsc2V9XCI+XG4gICAgICAgIDxTZXR0aW5ncyBiaW5kOnNob3dTZXR0aW5ncyBvbjphcGlLZXlDaGFuZ2U9e3JlbG9hZERhdGF9PjwvU2V0dGluZ3M+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1tZWRpYS1jb250YWluZXJcIj5cbiAgICAgIHsjaWYgY3VycnBvc3QuaXNfaW1hZ2UgJiYgIWN1cnJwb3N0LmlzX2FsYnVtfVxuICAgICAgICA8aW1nIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LmltZy5kZWZhdWx0fVwiIGFsdD1cIntjdXJycG9zdC50aXRsZX1cIiBzdHlsZT1cImhlaWdodDogMTAwdmg7IG9iamVjdC1maXQ6IGNvbnRhaW47XCI+XG4gICAgICB7OmVsc2UgaWYgY3VycnBvc3QuaXNfdmlkZW8gJiYgcmVuZGVyVmlkZW99XG4gICAgICAgIDx2aWRlbyBjbGFzcz1cInZpZGVvXCIgYXV0b3BsYXkgbG9vcD1cInshJGF1dG9wbGF5fVwiIHBsYXlzaW5saW5lIG11dGVkPVwieyRtdXRlZH1cIiBvbjplbmRlZD1cInt2aWRlb2VuZGVkfVwiIG9uOmRibGNsaWNrPVwie3RvZ2dsZUZ1bGxzY3JlZW59XCIgY2xhc3M6aGlkZS1jdXJzb3I9XCJ7aGlkZUN1cnNvcn1cIiBvbjptb3VzZW1vdmU9XCJ7dG9nZ2xlSGlkZUN1cnNvcn1cIiBpZD1cInZpZGVvcGxheWVyaWRcIiBvbjpjbGljaz1cIntvblZpZGVvUGxheWVyQ2xpY2tlZH1cIj5cbiAgICAgICAgICB7I2lmICRsb3Jlc31cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie2N1cnJwb3N0LnByZXZpZXcudmlkLmxvcmVzfVwiPlxuICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIHsjaWYgY3VycnBvc3QucHJldmlldy52aWQud2VibX1cbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy52aWQud2VibX1cIj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICB7I2lmIGN1cnJwb3N0LnByZXZpZXcudmlkLm1wNH1cbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy52aWQubXA0fVwiPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgezplbHNlIGlmIGN1cnJwb3N0LmlzX2FsYnVtfVxuICAgICAgICB7I2lmIGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmlzX3ZpZGVvfVxuICAgICAgICAgIDx2aWRlbyBjbGFzcz1cInZpZGVvXCIgYXV0b3BsYXkgbG9vcD1cInshJGF1dG9wbGF5fVwiIHBsYXlzaW5saW5lIG11dGVkPVwieyRtdXRlZH1cIiBvbjplbmRlZD1cInt2aWRlb2VuZGVkfVwiIG9uOmRibGNsaWNrPVwie3RvZ2dsZUZ1bGxzY3JlZW59XCIgY2xhc3M6aGlkZS1jdXJzb3I9XCJ7aGlkZUN1cnNvcn1cIiBvbjptb3VzZW1vdmU9XCJ7dG9nZ2xlSGlkZUN1cnNvcn1cIiBvbjpjbGljaz1cIntvblZpZGVvUGxheWVyQ2xpY2tlZH1cIj5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie2N1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmhpcmVzfVwiPlxuICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8aW1nIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5kZWZhdWx0fVwiIGFsdD1cIntjdXJycG9zdC50aXRsZX1cIiBzdHlsZT1cImhlaWdodDogMTAwdmg7IG9iamVjdC1maXQ6IGNvbnRhaW47XCI+XG4gICAgICAgIHsvaWZ9XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICAgIFxuICAgIHsjaWYgZGlzcGxheXBvc3RzLmxlbmd0aCB8fCBwb3N0cy5sZW5ndGh9XG4gICAgICA8ZGl2IGNsYXNzPVwiZ290b1wiIGNsYXNzOnRpbnlnb3RvPVwie3Rpbnlnb3RvfVwiIGNsYXNzOmhpZGU9XCJ7dWlWaXNpYmxlID09IGZhbHNlfVwiIGJpbmQ6Y2xpZW50V2lkdGg9XCJ7JF9nb3RvRWxXaWR0aH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bndyYXBwZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBwbGF5cGF1c2UgdG9vbHRpcFwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJ7YXV0b3BsYXlzdHJ9XCJcbiAgICAgICAgICAgIGNsYXNzOnBsYXk9XCJ7JGF1dG9wbGF5fVwiXG4gICAgICAgICAgICBvbjpjbGljaz1cInt0b2dnbGVBdXRvUGxheX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJ7JGF1dG9wbGF5ID8gZmFQYXVzZSA6IGZhUGxheX1cIj48L0ljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGRvd25sb2FkIHRvb2x0aXBcIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7ZG93bmxvYWRGaWxlc31cIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwie2Rvd25sb2Fkc3RyfVwiXG4gICAgICAgICAgICBjbGFzczpkbHJlYWR5PVwie251bUZhdm9yaXRlfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYURvd25sb2FkfVwiPjwvSWNvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gZGljZSB0b29sdGlwXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie3NodWZmbGVGaWxlc31cIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiU2h1ZmZsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYURpY2V9XCI+PC9JY29uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBpbWFnZXZpZGVvIHRvb2x0aXBcIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwie2ltYWdlVmlkZW9TdHJ9XCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie3RvZ2dsZUltYWdlVmlkZW99XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7I2lmICRpbWFnZVZpZGVvID09IDB9XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFJbWFnZVZpZGVvfVwiPjwvSWNvbj5cbiAgICAgICAgICAgIHs6ZWxzZSBpZiAkaW1hZ2VWaWRlbyA9PSAxfVxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhVmlkZW99XCI+PC9JY29uPlxuICAgICAgICAgICAgezplbHNlIGlmICRpbWFnZVZpZGVvID09IDJ9XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFJbWFnZX1cIj48L0ljb24+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBtdXRlZCB0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cInttdXRlZHN0cn1cIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7dG9nZ2xlTXV0ZWR9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwieyRtdXRlZCA/IGZhU291bmRPZmYgOiBmYVNvdW5kT259XCI+PC9JY29uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7I2lmIHRpbnlnb3RvfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gcmVsb2FkIHRvb2x0aXBcIiBkYXRhLXRvb2x0aXA9XCJ7cmVsb2Fkc3RyfVwiIG9uOmNsaWNrPVwie2xvYWRNb3JlfVwiIGNsYXNzOmxvYWRlcnJvcj1cIntsb2FkRXJyb3J9XCI+XG4gICAgICAgICAgICAgIHsjaWYgbG9hZGluZ31cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3Bpbm5lcn1cIj48L0ljb24+XG4gICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3luY31cIj48L0ljb24+XG4gICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBmaWx0ZXIgdG9vbHRpcFwiXG4gICAgICAgICAgICBjbGFzczpmaWx0ZXJFeHBhbmRlZD1cIntmaWx0ZXJFeHBhbmRlZH1cIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7dG9nZ2xlRmlsdGVyfVwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJGaWx0ZXIgKCAvIClcIlxuICAgICAgICAgICAgYmluZDp0aGlzPVwie2ZpbHRlclJlZn1cIlxuICAgICAgICAgICAgY2xhc3M6ZGxyZWFkeT1cIntudW1GYXZvcml0ZX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsjaWYgZmlsdGVyRXhwYW5kZWR9XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPVwie2ZpbHRlclZhbHVlfVwiIFxuICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbiBcbiAgICAgICAgICAgICAgICBvbjprZXlkb3dufHN0b3BQcm9wYWdhdGlvbiBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgcG9zdHMuLi5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFTZWFyY2h9XCI+PC9JY29uPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgeyNpZiBmaWx0ZXJWYWx1ZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGRlZXBzZWFyY2ggdG9vbHRpcFwiIGRhdGEtdG9vbHRpcD1cIntkZWVwc2VhcmNoc3RyfVwiIG9uOmNsaWNrPVwie2dvdG9EZWVwU2VhcmNofVwiPlxuICAgICAgICAgICAgICA8cD5kZWVwIHNlYXJjaCDwn6CSPC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibnVtc3dyYXBwZXJcIj5cbiAgICAgICAgICB7I2VhY2ggZGlzcGxheXBvc3RzIGFzIHBvc3QsIGkgKHBvc3QuaWQgKyBwb3N0LnVybCl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bXNcIlxuICAgICAgICAgICAgICBjbGFzczpjdXJybnVtPVwie2luZGV4ID09PSBpfVwiXG4gICAgICAgICAgICAgIGNsYXNzOmFsYnVtPVwie2N1cnJwb3N0LmlzX2FsYnVtfVwiXG4gICAgICAgICAgICAgIGNsYXNzOmZhdm9yaXRlPVwie2Rpc3BsYXlwb3N0c1tpXS5mYXZvcml0ZX1cIlxuICAgICAgICAgICAgICBjbGFzczpvdmVyMTg9XCJ7ZGlzcGxheXBvc3RzW2ldLm92ZXIxOH1cIlxuICAgICAgICAgICAgICBvbjpjbGljaz1cIntmdW5jdGlvbigpe2dvdG8oaSl9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzbWFsbFwiIGFsdD1cIntkaXNwbGF5cG9zdHNbaV0udGl0bGV9XCIgc3JjPVwie2Rpc3BsYXlwb3N0c1tpXS50aHVtYm5haWx9XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic21hbGxcIiBjbGFzczpjdXJyPVwie2luZGV4ID09PSBpfVwiIGNsYXNzOmFsYnVtPVwie2N1cnJwb3N0LmlzX2FsYnVtfVwiPntpKzF9PC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICB7I2lmICF0aW55Z290b31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheWluZm9cIiBjbGFzczpmaWx0ZXJFeHBhbmRlZD1cIntmaWx0ZXJWYWx1ZX1cIj5cbiAgICAgICAgICAgICAgPHA+e2Rpc3BsYXlwb3N0cy5sZW5ndGh9L3twb3N0cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gcmVsb2FkIHRvb2x0aXBcIiBkYXRhLXRvb2x0aXA9XCJ7cmVsb2Fkc3RyfVwiIG9uOmNsaWNrPVwie2xvYWRNb3JlfVwiIGNsYXNzOmxvYWRlcnJvcj1cIntsb2FkRXJyb3J9XCI+XG4gICAgICAgICAgICAgIHsjaWYgbG9hZGluZ31cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3Bpbm5lcn1cIj48L0ljb24+XG4gICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3luY31cIj48L0ljb24+XG4gICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbjwvZGl2PlxueyNpZiAkcHJlZmV0Y2h9XG4gIDxkaXYgY2xhc3M9XCJwcmVmZXRjaFwiPlxuICAgIHsjZWFjaCBuZXh0dXJscyBhcyBuZXh0dXJsIChuZXh0dXJsLnByZXZpZXcuaW1nLmRlZmF1bHQpfVxuICAgICAgeyNpZiAkaGlyZXN9XG4gICAgICAgIHsjaWYgbmV4dHVybC5pc19hbGJ1bX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoLWhpcmVzXCIgc3JjPVwie25leHR1cmwucHJldmlldy5pbWcuYWxidW1bMF0uaGlyZXN9XCI+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoLWhpcmVzXCIgc3JjPVwie25leHR1cmwudXJsfVwiPlxuICAgICAgICB7L2lmfVxuICAgICAgezplbHNlfVxuICAgICAgICB7I2lmIG5leHR1cmwuaXNfYWxidW19XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaFwiIHNyYz1cIntuZXh0dXJsLnByZXZpZXcuaW1nLmFsYnVtWzBdLmRlZmF1bHR9XCI+XG4gICAgICAgIHs6ZWxzZSBpZiBuZXh0dXJsLnByZXZpZXd9XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaFwiIHNyYz1cIntuZXh0dXJsLnByZXZpZXcuaW1nLmRlZmF1bHR9XCI+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoXCIgc3JjPVwie25leHR1cmwuZGVmYXVsdH1cIj5cbiAgICAgICAgey9pZn1cbiAgICAgIHsvaWZ9XG4gICAgICB7I2lmIG5leHR1cmwuaXNfdmlkZW99XG4gICAgICAgIDx2aWRlbyBwbGF5c2lubGluZSBhdXRvcGxheSBsb29wIG11dGVkPlxuICAgICAgICAgIHsjaWYgJGxvcmVzfVxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LnZpZC5sb3Jlc31cIj5cbiAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICB7I2lmIG5leHR1cmwucHJldmlld31cbiAgICAgICAgICAgICAgeyNpZiBuZXh0dXJsLnByZXZpZXcudmlkLndlYm19XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LnZpZC53ZWJtfVwiPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICB7I2lmIG5leHR1cmwucHJldmlldy52aWQubXA0fVxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie25leHR1cmwucHJldmlldy52aWQubXA0fVwiPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIntuZXh0dXJsLmRlZmF1bHR9XCI+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvdmlkZW8+XG4gICAgICB7L2lmfVxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG57L2lmfVxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbjpnbG9iYWwoaHRtbCksIDpnbG9iYWwoYm9keSlcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxuICBvdmVyZmxvdzogaGlkZGVuXG5cbkBtaXhpbiBob3ZlcigpXG4gIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjpjb2Fyc2UpXG4gICAgJjpob3ZlclxuICAgICAgQGNvbnRlbnRcblxuJHllbGxvdzogIzAwYjRkOFxuXG4kdGV4dC1jb2xvcjogI2ZhZmFmYVxuJGFjY2VudC1jb2xvcjogd2hpdGVcbiRmYXZvcml0ZS1jb2xvcjogI2ZiYmMwNFxuJGZhdm9yaXRlLWJvcmRlci1jb2xvcjogI2UzNzQwMFxuJG92ZXIxOC1jb2xvcjogI2VhNDMzNVxuJG92ZXIxOC1ib3JkZXItY29sb3I6ICNlYTQzMzVcbiRpc211bHRpLWNvbG9yOiAjZWE0MzM1XG4kaXNub3RtdWx0aS1jb2xvcjogIzM0YTg1M1xuXG4uaGlkZS1jdXJzb3JcbiAgY3Vyc29yOiBub25lXG5cbi5oaWRlXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxuXG4ud3JhcHBlclxuICBoZWlnaHQ6IDEwMHZoXG5cbiAgZGlzcGxheTogZ3JpZFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4gIC5oZXJvXG4gICAgaGVpZ2h0OiAxMDB2aFxuICAgIHdpZHRoOiAxMDB2d1xuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4gICAgLnRpdGxlXG4gICAgICB6LWluZGV4OiAxMFxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBsZWZ0OiAxcmVtXG4gICAgICB0b3A6IDFyZW1cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDI2LCAyNiwgMC41KVxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpXG4gICAgICBjb2xvcjogJHRleHQtY29sb3JcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG4gICAgICBtYXgtd2lkdGg6IDc3JVxuICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW1cbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKVxuXG4gICAgLnNldHRpbmdzXG4gICAgICB6LWluZGV4OiAxMFxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICB0b3A6IDFyZW1cbiAgICAgIHJpZ2h0OiAxcmVtXG5cbiAgICAubWFpbi1tZWRpYS1jb250YWluZXJcbiAgICAgIGZsZXgtZ3JvdzogMVxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgICBoZWlnaHQ6IDEwMCVcblxuICAgICAgaW1nLCB2aWRlb1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJVxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluXG5cbiAgICAuZ290b1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAgIHotaW5kZXg6IDVcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAwLjUpXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweClcbiAgICAgIGJvdHRvbTogMFxuICAgICAgZGlzcGxheTogZ3JpZFxuICAgICAgZ3JpZC1yb3ctZ2FwOiA4cHhcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4XG4gICAgICBtYXJnaW46IDFyZW1cbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MHB4LCAxZnIpKVxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpXG5cbiAgICAgICYudGlueWdvdG9cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmclxuXG4gICAgICAgIC5idG53cmFwcGVyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzJweCwgMWZyKSlcbiAgICAgICAgICBkaXNwbGF5OiBncmlkXG5cbiAgICAgICAgLm51bXN3cmFwcGVyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxcmVtLCBhdXRvKSlcbiAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnRcbiAgICAgICAgICBkaXNwbGF5OiBncmlkXG4gICAgICAgICAgZ3JpZC1nYXA6IDAuMnJlbVxuXG5cbiAgICAgICAgICAubnVtc1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEod2hpdGUsIDMwJSlcbiAgICAgICAgICAgIGhlaWdodDogMzJweFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2VcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwcHhcblxuICAgICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHllbGxvdyAhaW1wb3J0YW50XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxuXG4gICAgICAgICAgICAmLmN1cnJudW1cbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR5ZWxsb3cgIWltcG9ydGFudFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjE2LCAwLjIpXG5cbiAgICAgICAgICAgICAgJi5hbGJ1bVxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgJHllbGxvdyAhaW1wb3J0YW50XG5cbiAgICAgICAgICAgICYuZmF2b3JpdGVcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmYXZvcml0ZS1jb2xvclxuXG4gICAgICAgICAgICAmLm92ZXIxOFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJG92ZXIxOC1jb2xvclxuXG4gICAgICAgICAgcFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuXG4gICAgICAgICAgLnJlbG9hZFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMlxuXG4gICAgICAuYnRud3JhcHBlciwgLm51bXN3cmFwcGVyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzXG5cbiAgICAgIC5idG53cmFwcGVyXG5cbiAgICAgICAgLnJlbG9hZFxuICAgICAgICAgIGJvdHRvbTogLTFweFxuXG4gICAgICAubnVtc3dyYXBwZXJcblxuICAgICAgICAuZGlzcGxheWluZm9cbiAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICBtYXJnaW4tdG9wOiA5cHhcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXG5cbiAgICAgICAgICBwXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4gICAgICAuYnRuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICBwYWRkaW5nOiA4cHhcbiAgICAgICAgY29sb3I6IHJnYmEod2hpdGUsIDYwJSlcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICBtaW4td2lkdGg6IDQwcHhcbiAgICAgICAgaGVpZ2h0OiA0MHB4XG5cbiAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVxuXG4gICAgICAgICYucmVsb2FkXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICAgICAgICAmLmxvYWRlcnJvclxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcblxuICAgICAgICAmLmRlZXBzZWFyY2hcbiAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjE2LCAwLjEpXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxODAsIDIxNiwgMC4zKVxuXG4gICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDIxNiwgMC4yKVxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjE2LCAwLjUpXG5cbiAgICAgICAgICBwXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtXG4gICAgICAgICAgICBjb2xvcjogJHllbGxvd1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtXG5cbiAgICAgICAgJi5vdmVyMTh3cmFwcGVyXG5cbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcblxuICAgICAgICAgICYub3ZlcjE4XG5cbiAgICAgICAgICAgIHBcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh3aGl0ZSwgMzAlKVxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMzAlKVxuXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGhvdmVyKClcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHdoaXRlLCA2MCUpXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEod2hpdGUsIDYwJSlcblxuICAgICAgICAgIHBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkb3ZlcjE4LWNvbG9yXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcbiAgICAgICAgICAgIGNvbG9yOiAkb3ZlcjE4LWNvbG9yXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxM3B4XG4gICAgICAgICAgICB3aWR0aDogNThweFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIHRvcDogLTFweFxuXG4gICAgICAgICYuaW1hZ2V2aWRlb1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgJi5sYXlvdXRcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbVxuXG4gICAgICAgICAgJi5hY3RpdmVcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDIxNiwgMC4yKVxuXG4gICAgICAgICYubXV0ZWRcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbVxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICYuZmlsdGVyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAgIGlucHV0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDIsIDAuOClcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjgsIDY4LCA2OCwgMC44KVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHhcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmVcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHhcblxuICAgICAgICAgICAgJjpmb2N1c1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR5ZWxsb3dcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMTgwLCAyMTYsIDAuMilcblxuICAgICAgICAmLmNvZ1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAwLjk1KVxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KVxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpXG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuOTUpXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXG5cbiAgICAgICAgJi5wb3J0cmFpdGxhbmRzY2FwZVxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXG4gICAgICAgICAgYm90dG9tOiAycHhcbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAgICYgOmdsb2JhbCgubGFuZHNjYXBlKVxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKVxuXG4gICAgICAgICYuZGljZVxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXG4gICAgICAgICAgYm90dG9tOiAycHhcbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLmRvd25sb2FkXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuXG4gICAgICAgICAgJi5kbHJlYWR5XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkZmF2b3JpdGUtY29sb3IsIDkwJSlcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93XG5cbiAgICAgICAgJi5wbGF5cGF1c2VcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICB0b3A6IDFweFxuXG4gICAgICAgICAgLy8gV2hlbiBpdCBpcyBwbGF5IGljb24sIG1ha2UgaXQgd2hpdGVcbiAgICAgICAgICAmLnBsYXlcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgJi5maWx0ZXJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICB0b3A6IDFweFxuXG4gICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgICAmLmZpbHRlci5maWx0ZXJFeHBhbmRlZFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gM1xuICAgICAgICAgICAgdG9wOiAtMnB4XG5cbiAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgICAgIHdpZHRoOiA4NSVcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweFxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweFxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHhcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh3aGl0ZSwgNjAlKVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAubnVtc1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgaGVpZ2h0OiA0MHB4XG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2VcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4XG5cbiAgICAgICAgJi5mYXZvcml0ZVxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkZmF2b3JpdGUtY29sb3JcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcbiAgICAgICAgICAgIGNvbG9yOiAkZmF2b3JpdGUtY29sb3JcblxuICAgICAgICAgIGltZy5zbWFsbFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcblxuICAgICAgICAmLm92ZXIxOFxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJG92ZXIxOC1jb2xvclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRvdmVyMTgtYm9yZGVyLWNvbG9yXG5cbiAgICAgICAgICBpbWcuc21hbGxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG92ZXIxOC1ib3JkZXItY29sb3JcblxuICAgICAgICBwLnNtYWxsXG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMClcblxuICAgICAgICAgICYuY3VyclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgICAgICYuYWxidW1cbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCAkYWNjZW50LWNvbG9yICFpbXBvcnRhbnRcblxuICAgICAgICBpbWcuc21hbGxcbiAgICAgICAgICB6LWluZGV4OiAxMFxuICAgICAgICAgIHdpZHRoOiAwcHhcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgYm90dG9tOiAzNXB4XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGJsYWNrLCAzMCUpXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcblxuICAgICAgICAmOmhvdmVyIHAuc21hbGxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgJjpob3ZlciBpbWdcbiAgICAgICAgICB3aWR0aDogYXV0b1xuICAgICAgICAgIGhlaWdodDogMTAwcHhcbiAgICAgICAgICBvcGFjaXR5OiAxXG5cbiAgICAuc3VicmVkZGl0c2VhcmNod3JhcHBlclxuXG4gICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgICB3aWR0aDogMTAwdndcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpXG4gICAgICB6LWluZGV4OjE1XG5cbiAgICAgIC5zdWJyZWRkaXRzZWFyY2hcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIGxlZnQ6IDUwJVxuICAgICAgICB0b3A6IDUwJVxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgICBkaXNwbGF5OiBncmlkXG5cblxuICAgICAgICAuaGVhZGVyIFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHhcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuXG4gICAgICA6Z2xvYmFsKC5pbnB1dC1jb250YWluZXIpXG4gICAgICAgIGhlaWdodDogNDBweFxuXG4gICAgICA6Z2xvYmFsKC5pbnB1dC1jb250YWluZXIgaW5wdXQpXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKHdoaXRlLCA2MCUpXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMClcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdClcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxNSAqICgxcmVtICsgMTBweCkgLSAxNXB4KSAhaW1wb3J0YW50XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgIGJvcmRlcjogbm9uZVxuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdCAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbSlcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG5cbiAgICAgIDpnbG9iYWwoLmF1dG9jb21wbGV0ZS1saXN0IC5hdXRvY29tcGxldGUtbGlzdC1pdGVtLWNyZWF0ZSlcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG5cbiAgICAgIDpnbG9iYWwoLmF1dG9jb21wbGV0ZS1saXN0IC5hdXRvY29tcGxldGUtbGlzdC1pdGVtLnNlbGVjdGVkKVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhYjAwMzhcblxuICAgICAgOmdsb2JhbCguYXV0b2NvbXBsZXRlLWxpc3QgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0gYilcbiAgICAgICAgY29sb3I6ICR5ZWxsb3dcblxuICAgIC5pbWFnZVxuICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgd2lkdGg6IDEwMHZ3XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlclxuXG4gICAgLnZpZGVvXG4gICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgICB3aWR0aDogMTAwdndcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW5cblxuICAucHJlZmV0Y2hcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB0b3A6IDBcbiAgICBsZWZ0OiAwXG4gICAgd2lkdGg6IDFweFxuICAgIGhlaWdodDogMXB4XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgIG9wYWNpdHk6IDBcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KVxuICAgIC5oZXJvXG4gICAgICAuZ290b1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDExcmVtIDFyZW0gMXJlbVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweClcbiAgICAuaGVyb1xuICAgICAgLmdvdG9cbiAgICAgICAgcGFkZGluZzogMXJlbVxuICAgICAgICAvL2dyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCAzMnB4IDMycHggMzJweCAzMnB4IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMycHgsIDFmcikpXG4gICAgICAgIC8vZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyXG5cbiAgICAgICAgJi50aW55Z290b1xuXG4gICAgICAgICAgLm51bXNcbiAgICAgICAgICAgIGhlaWdodDogMC4xcmVtICFpbXBvcnRhbnRcbiAgICAgICAgaW1nLnNtYWxsXG4gICAgICAgICAgZGlzcGxheTogbm9uZVxuXG4udG9vbHRpcFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgei1pbmRleDogMlxuICBjdXJzb3I6IHBvaW50ZXJcblxuLnR0YmVmb3JlXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDEyMCVcbiAgbGVmdDogNTAlXG4gIG1hcmdpbi1ib3R0b206IDVweFxuICBtYXJnaW4tbGVmdDogLTMwcHhcbiAgcGFkZGluZzogNXB4IDRweFxuICB3aWR0aDogbWF4LWNvbnRlbnRcbiAgYm9yZGVyLXJhZGl1czogM3B4XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gIGNvbG9yOiAjZmZmXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh3aGl0ZSwgOTAlKVxuICBjb2xvcjogYmxhY2tcblxuICBjb250ZW50OiBhdHRyKGRhdGEtdG9vbHRpcClcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIGZvbnQtc2l6ZTogMC44cmVtXG4gIGxpbmUtaGVpZ2h0OiAxLjJcblxuLnR0YWZ0ZXJcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIGJvdHRvbTogMTIwJVxuICBsZWZ0OiA1MCVcbiAgbWFyZ2luLWxlZnQ6IC01cHhcbiAgd2lkdGg6IDBcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDkwJSlcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnRcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudFxuICBjb250ZW50OiBcIiBcIlxuICBmb250LXNpemU6IDBcbiAgbGluZS1oZWlnaHQ6IDBcblxuLnRvb2x0aXBcbiAgJjpiZWZvcmUsICY6YWZ0ZXJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cbiAgICBvcGFjaXR5OiAwXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcblxuICAmOmJlZm9yZVxuICAgIEBleHRlbmQgLnR0YmVmb3JlXG5cbiAgJi5ib3R0b206YmVmb3JlXG4gICAgQGV4dGVuZCAudHRiZWZvcmVcbiAgICBib3R0b206IC0xNzAlXG5cbiAgJjphZnRlclxuICAgIEBleHRlbmQgLnR0YWZ0ZXJcblxuICAmLmJvdHRvbTphZnRlclxuICAgIEBleHRlbmQgLnR0YWZ0ZXJcbiAgICBib3R0b206IC00MCVcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSh3aGl0ZSwgOTAlKVxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudFxuXG4gICY6aG92ZXJcbiAgICAmOmJlZm9yZSwgJjphZnRlclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZVxuICAgICAgb3BhY2l0eTogMVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6WyJzb3VyY2UiLCJOQU4iLCJzeW1ib2xUYWciLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJmcmVlU2VsZiIsInJvb3QiLCJvYmplY3RQcm90byIsImhhc093blByb3BlcnR5Iiwib2JqZWN0VG9TdHJpbmciLCJTeW1ib2wiLCJNYXAiLCJQcm9taXNlIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0IiwiaXNPYmplY3RMaWtlIiwiaXNTeW1ib2wiLCJ0b051bWJlciIsInRyaW1tZWRFbmRJbmRleCIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJiYXNlVHJpbSIsImRlYm91bmNlIiwibm93IiwiX2RlYm91bmNlIiwiZmFQYXVzZSIsImZhUGxheSIsImZhRG93bmxvYWQiLCJmYURpY2UiLCJmYVNvdW5kT2ZmIiwiZmFTb3VuZE9uIiwiZmFJbWFnZSIsImZhVmlkZW8iLCJmYUltYWdlVmlkZW8iLCJmYVN5bmMiLCJmYVNwaW5uZXIiLCJmYVNlYXJjaCIsImZhU2V0dGluZ3MiLCJnb3RvIiwiYWhyZWYiLCJzaHVmZmxlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDWSxNQUFDLE9BQU8sR0FBRzs7O0FDQXZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNuQixJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsSUFBSSxXQUFXLEdBQUcsNHpCQUE0ekIsQ0FBQztBQUMvMEI7QUFDQSxPQUFBLENBQUEsVUFBa0IsR0FBRztBQUNyQixFQUFFLE1BQU0sRUFBRSxNQUFNO0FBQ2hCLEVBQUUsUUFBUSxFQUFFLFFBQVE7QUFDcEIsRUFBRSxJQUFJLEVBQUU7QUFDUixJQUFJLEtBQUs7QUFDVCxJQUFJLE1BQU07QUFDVixJQUFJLE9BQU87QUFDWCxJQUFJLE9BQU87QUFDWCxJQUFJLFdBQVc7QUFDZixHQUFHLENBQUMsQ0FBQztBQUNMO0FBQ0EsT0FBQSxDQUFBLFlBQW9CLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUMxQyxPQUFjLENBQUEsTUFBQSxHQUFHLE1BQU0sQ0FBQztBQUN4QixPQUFnQixDQUFBLFFBQUEsR0FBRyxRQUFRLENBQUM7QUFDNUIsT0FBYSxDQUFBLEtBQUEsR0FBRyxLQUFLLENBQUM7QUFDdEIsT0FBYyxDQUFBLE1BQUEsR0FBRyxNQUFNLENBQUM7QUFDeEIsT0FBaUIsQ0FBQSxTQUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN6QixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxJQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLEtBQUssR0FBR21CLFVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDakQsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksT0FBTyxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQzlCLEdBQUc7QUFDSCxFQUFFLE9BQU8sS0FBSyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsRUFBRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzlCLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0I7QUFDQSxFQUFFLE9BQU8sTUFBTSxLQUFLLE1BQU0sSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNB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
