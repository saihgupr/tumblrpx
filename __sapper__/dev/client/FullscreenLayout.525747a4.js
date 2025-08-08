import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, a as validate_slots, q as validate_each_argument, j as empty, k as insert_hydration_dev, t as transition_in, o as group_outros, g as transition_out, l as check_outros, r as destroy_each, n as detach_dev, u as create_slot, w as update_slot_base, x as get_all_dirty_from_scope, y as get_slot_changes, z as element, A as text, B as claim_element, C as children, D as claim_text, E as attr_dev, F as add_location, G as append_hydration_dev, H as listen_dev, I as noop$1, J as space, K as claim_space, L as toggle_class, M as set_input_value, N as prop_dev, O as run_all, P as binding_callbacks, Q as set_data_dev, R as prevent_default, T as is_function, U as HtmlTagHydration, V as claim_html_tag, W as bind, v as validate_store, c as component_subscribe, X as onMount, Y as tick, Z as goto, _ as validate_each_keys, e as create_component, f as claim_component, $ as add_render_callback, m as mount_component, a0 as add_resize_listener, a1 as update_keyed_each, h as destroy_component, a2 as src_url_equal, a3 as query_selector_all, a4 as add_flush_callback, a5 as set_store_value, a6 as bubble, a7 as destroy_block, a8 as set_style, a9 as stop_propagation } from './client.ef6eef76.js';
import { c as createCommonjsModule, a as commonjsGlobal, I as Icon, b as faCog, S as Settings, d as autoplay, f as favorite, o as over18, e as apiKey, p as portraitLandscape, i as imageVideo, g as prefetchNum, m as muted, h as autoplayinterval, j as hideUIonStart, k as lores, n as prefetch, q as hires, r as multireddit, s as oldreddit, l as layout, t as faCloudDownloadAlt } from './Settings.a8b724ca.js';
import { f as faHome } from './faHome.85dd2cbf.js';
import { f as faStar$2, a as faPlusCircle, b as faEye } from './faEye.28ea6a0f.js';

// TODO: Replace with your actual Tumblr API key
const API_KEY = 'OAuth Consumer Key Goes Here';

var faVolumeUp = createCommonjsModule(function (module, exports) {
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

var faVolumeMute = createCommonjsModule(function (module, exports) {
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

var faPlay = createCommonjsModule(function (module, exports) {
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

var faPause = createCommonjsModule(function (module, exports) {
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

var faDonate = createCommonjsModule(function (module, exports) {
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

var faExpandAlt = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'expand-alt';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f424';
var svgPathData = 'M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z';

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

exports.faExpandAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faExpandAlt$1 = faExpandAlt;

var faDice = createCommonjsModule(function (module, exports) {
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

var faPhotoVideo = createCommonjsModule(function (module, exports) {
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

var faImage = createCommonjsModule(function (module, exports) {
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

var faVideo = createCommonjsModule(function (module, exports) {
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

var faStar = createCommonjsModule(function (module, exports) {
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

var faSearch = createCommonjsModule(function (module, exports) {
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

var faSync = createCommonjsModule(function (module, exports) {
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

var faSpinner = createCommonjsModule(function (module, exports) {
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

var faMinusCircle = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'minus-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f056';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z';

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

exports.faMinusCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faMinusCircle$1 = faMinusCircle;

var faEyeSlash = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'eye-slash';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f070';
var svgPathData = 'M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z';

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

exports.faEyeSlash = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faEyeSlash$1 = faEyeSlash;

var faTh = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'th';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00a';
var svgPathData = 'M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z';

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

exports.faTh = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faTh$1 = faTh;

var faExpandArrowsAlt = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'expand-arrows-alt';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f31e';
var svgPathData = 'M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z';

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

exports.faExpandArrowsAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
});

var faExpandArrowsAlt$1 = faExpandArrowsAlt;

var faMobileAlt = createCommonjsModule(function (module, exports) {
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

var faDesktop = createCommonjsModule(function (module, exports) {
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

/* node_modules/simple-svelte-autocomplete/src/SimpleAutocomplete.svelte generated by Svelte v3.46.2 */

const { Object: Object_1, console: console_1$1 } = globals;
const file$1 = "node_modules/simple-svelte-autocomplete/src/SimpleAutocomplete.svelte";

const get_no_results_slot_changes = dirty => ({
	noResultsText: dirty[0] & /*noResultsText*/ 2048
});

const get_no_results_slot_context = ctx => ({ noResultsText: /*noResultsText*/ ctx[11] });

const get_create_slot_changes = dirty => ({
	createText: dirty[0] & /*createText*/ 8192
});

const get_create_slot_context = ctx => ({ createText: /*createText*/ ctx[13] });

const get_loading_slot_changes = dirty => ({
	loadingText: dirty[0] & /*loadingText*/ 4096
});

const get_loading_slot_context = ctx => ({ loadingText: /*loadingText*/ ctx[12] });

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[108] = list[i];
	child_ctx[110] = i;
	return child_ctx;
}

const get_item_slot_changes = dirty => ({
	item: dirty[0] & /*filteredListItems*/ 134217728,
	label: dirty[0] & /*filteredListItems*/ 134217728
});

const get_item_slot_context = ctx => ({
	item: /*listItem*/ ctx[108].item,
	label: /*listItem*/ ctx[108].highlighted
	? /*listItem*/ ctx[108].highlighted
	: /*listItem*/ ctx[108].label
});

function get_each_context_1$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[111] = list[i];
	return child_ctx;
}

const get_tag_slot_changes = dirty => ({
	label: dirty[0] & /*selectedItem*/ 2,
	item: dirty[0] & /*selectedItem*/ 2
});

const get_tag_slot_context = ctx => ({
	label: /*safeLabelFunction*/ ctx[34](/*tagItem*/ ctx[111]),
	item: /*tagItem*/ ctx[111],
	unselectItem: /*unselectItem*/ ctx[41]
});

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[110] = list[i];
	return child_ctx;
}

// (1144:39) 
function create_if_block_11$1(ctx) {
	let each_1_anchor;
	let each_value_2 = /*selectedItem*/ ctx[1];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*valueFunction, selectedItem*/ 18 | dirty[1] & /*safeLabelFunction*/ 8) {
				each_value_2 = /*selectedItem*/ ctx[1];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_11$1.name,
		type: "if",
		source: "(1144:39) ",
		ctx
	});

	return block;
}

// (1142:4) {#if !multiple && value}
function create_if_block_10$1(ctx) {
	let option;
	let t;

	const block = {
		c: function create() {
			option = element("option");
			t = text(/*text*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", { class: true });
			var option_nodes = children(option);
			t = claim_text(option_nodes, /*text*/ ctx[3]);
			option_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = /*value*/ ctx[2];
			option.value = option.__value;
			option.selected = true;
			attr_dev(option, "class", "svelte-lduj97");
			add_location(option, file$1, 1142, 6, 27728);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, option, anchor);
			append_hydration_dev(option, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*text*/ 8) set_data_dev(t, /*text*/ ctx[3]);

			if (dirty[0] & /*value*/ 4) {
				prop_dev(option, "__value", /*value*/ ctx[2]);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_10$1.name,
		type: "if",
		source: "(1142:4) {#if !multiple && value}",
		ctx
	});

	return block;
}

// (1145:6) {#each selectedItem as i}
function create_each_block_2(ctx) {
	let option;
	let t0_value = /*safeLabelFunction*/ ctx[34](/*i*/ ctx[110]) + "";
	let t0;
	let t1;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", { class: true });
			var option_nodes = children(option);
			t0 = claim_text(option_nodes, t0_value);
			t1 = claim_space(option_nodes);
			option_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = option_value_value = /*valueFunction*/ ctx[4](/*i*/ ctx[110], true);
			option.value = option.__value;
			option.selected = true;
			attr_dev(option, "class", "svelte-lduj97");
			add_location(option, file$1, 1145, 8, 27849);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, option, anchor);
			append_hydration_dev(option, t0);
			append_hydration_dev(option, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*selectedItem*/ 2 && t0_value !== (t0_value = /*safeLabelFunction*/ ctx[34](/*i*/ ctx[110]) + "")) set_data_dev(t0, t0_value);

			if (dirty[0] & /*valueFunction, selectedItem*/ 18 && option_value_value !== (option_value_value = /*valueFunction*/ ctx[4](/*i*/ ctx[110], true))) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(1145:6) {#each selectedItem as i}",
		ctx
	});

	return block;
}

// (1153:4) {#if multiple && selectedItem}
function create_if_block_9$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value_1 = /*selectedItem*/ ctx[1];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*selectedItem*/ 2 | dirty[1] & /*unselectItem, safeLabelFunction*/ 1032 | dirty[2] & /*$$scope*/ 8192) {
				each_value_1 = /*selectedItem*/ ctx[1];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_9$1.name,
		type: "if",
		source: "(1153:4) {#if multiple && selectedItem}",
		ctx
	});

	return block;
}

// (1159:25)            
function fallback_block_4(ctx) {
	let div;
	let span0;
	let t0_value = /*safeLabelFunction*/ ctx[34](/*tagItem*/ ctx[111]) + "";
	let t0;
	let t1;
	let span1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space();
			span1 = element("span");
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			span0 = claim_element(div_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, t0_value);
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			span1 = claim_element(div_nodes, "SPAN", { class: true });
			children(span1).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "tag svelte-lduj97");
			add_location(span0, file$1, 1160, 12, 28273);
			attr_dev(span1, "class", "tag is-delete svelte-lduj97");
			add_location(span1, file$1, 1161, 12, 28339);
			attr_dev(div, "class", "tags has-addons svelte-lduj97");
			add_location(div, file$1, 1159, 10, 28231);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, span0);
			append_hydration_dev(span0, t0);
			append_hydration_dev(div, t1);
			append_hydration_dev(div, span1);
			insert_hydration_dev(target, t2, anchor);

			if (!mounted) {
				dispose = listen_dev(
					span1,
					"click",
					prevent_default(function () {
						if (is_function(/*unselectItem*/ ctx[41](/*tagItem*/ ctx[111]))) /*unselectItem*/ ctx[41](/*tagItem*/ ctx[111]).apply(this, arguments);
					}),
					false,
					true,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty[0] & /*selectedItem*/ 2 && t0_value !== (t0_value = /*safeLabelFunction*/ ctx[34](/*tagItem*/ ctx[111]) + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_4.name,
		type: "fallback",
		source: "(1159:25)            ",
		ctx
	});

	return block;
}

// (1154:6) {#each selectedItem as tagItem}
function create_each_block_1$1(ctx) {
	let current;
	const tag_slot_template = /*#slots*/ ctx[76].tag;
	const tag_slot = create_slot(tag_slot_template, ctx, /*$$scope*/ ctx[75], get_tag_slot_context);
	const tag_slot_or_fallback = tag_slot || fallback_block_4(ctx);

	const block = {
		c: function create() {
			if (tag_slot_or_fallback) tag_slot_or_fallback.c();
		},
		l: function claim(nodes) {
			if (tag_slot_or_fallback) tag_slot_or_fallback.l(nodes);
		},
		m: function mount(target, anchor) {
			if (tag_slot_or_fallback) {
				tag_slot_or_fallback.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (tag_slot) {
				if (tag_slot.p && (!current || dirty[0] & /*selectedItem*/ 2 | dirty[2] & /*$$scope*/ 8192)) {
					update_slot_base(
						tag_slot,
						tag_slot_template,
						ctx,
						/*$$scope*/ ctx[75],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[75])
						: get_slot_changes(tag_slot_template, /*$$scope*/ ctx[75], dirty, get_tag_slot_changes),
						get_tag_slot_context
					);
				}
			} else {
				if (tag_slot_or_fallback && tag_slot_or_fallback.p && (!current || dirty[0] & /*selectedItem*/ 2)) {
					tag_slot_or_fallback.p(ctx, !current ? [-1, -1, -1, -1] : dirty);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tag_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tag_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (tag_slot_or_fallback) tag_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$1.name,
		type: "each",
		source: "(1154:6) {#each selectedItem as tagItem}",
		ctx
	});

	return block;
}

// (1187:4) {#if clearable}
function create_if_block_8$1(ctx) {
	let span;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			span = element("span");
			t = text("✖");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "✖");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "autocomplete-clear-button svelte-lduj97");
			add_location(span, file$1, 1187, 6, 29082);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			append_hydration_dev(span, t);

			if (!mounted) {
				dispose = listen_dev(span, "click", /*clear*/ ctx[45], false, false, false);
				mounted = true;
			}
		},
		p: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_8$1.name,
		type: "if",
		source: "(1187:4) {#if clearable}",
		ctx
	});

	return block;
}

// (1234:28) 
function create_if_block_7$1(ctx) {
	let div;
	let current;
	const no_results_slot_template = /*#slots*/ ctx[76]["no-results"];
	const no_results_slot = create_slot(no_results_slot_template, ctx, /*$$scope*/ ctx[75], get_no_results_slot_context);
	const no_results_slot_or_fallback = no_results_slot || fallback_block_3(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (no_results_slot_or_fallback) no_results_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (no_results_slot_or_fallback) no_results_slot_or_fallback.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "autocomplete-list-item-no-results svelte-lduj97");
			add_location(div, file$1, 1234, 6, 30903);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			if (no_results_slot_or_fallback) {
				no_results_slot_or_fallback.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (no_results_slot) {
				if (no_results_slot.p && (!current || dirty[0] & /*noResultsText*/ 2048 | dirty[2] & /*$$scope*/ 8192)) {
					update_slot_base(
						no_results_slot,
						no_results_slot_template,
						ctx,
						/*$$scope*/ ctx[75],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[75])
						: get_slot_changes(no_results_slot_template, /*$$scope*/ ctx[75], dirty, get_no_results_slot_changes),
						get_no_results_slot_context
					);
				}
			} else {
				if (no_results_slot_or_fallback && no_results_slot_or_fallback.p && (!current || dirty[0] & /*noResultsText*/ 2048)) {
					no_results_slot_or_fallback.p(ctx, !current ? [-1, -1, -1, -1] : dirty);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(no_results_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(no_results_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (no_results_slot_or_fallback) no_results_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_7$1.name,
		type: "if",
		source: "(1234:28) ",
		ctx
	});

	return block;
}

// (1230:21) 
function create_if_block_6$1(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	const create_slot_template = /*#slots*/ ctx[76].create;
	const create_slot_1 = create_slot(create_slot_template, ctx, /*$$scope*/ ctx[75], get_create_slot_context);
	const create_slot_or_fallback = create_slot_1 || fallback_block_2(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (create_slot_or_fallback) create_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (create_slot_or_fallback) create_slot_or_fallback.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "autocomplete-list-item-create svelte-lduj97");
			add_location(div, file$1, 1230, 6, 30728);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			if (create_slot_or_fallback) {
				create_slot_or_fallback.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "click", /*selectItem*/ ctx[35], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (create_slot_1) {
				if (create_slot_1.p && (!current || dirty[0] & /*createText*/ 8192 | dirty[2] & /*$$scope*/ 8192)) {
					update_slot_base(
						create_slot_1,
						create_slot_template,
						ctx,
						/*$$scope*/ ctx[75],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[75])
						: get_slot_changes(create_slot_template, /*$$scope*/ ctx[75], dirty, get_create_slot_changes),
						get_create_slot_context
					);
				}
			} else {
				if (create_slot_or_fallback && create_slot_or_fallback.p && (!current || dirty[0] & /*createText*/ 8192)) {
					create_slot_or_fallback.p(ctx, !current ? [-1, -1, -1, -1] : dirty);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(create_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(create_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (create_slot_or_fallback) create_slot_or_fallback.d(detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_6$1.name,
		type: "if",
		source: "(1230:21) ",
		ctx
	});

	return block;
}

// (1226:37) 
function create_if_block_5$1(ctx) {
	let div;
	let current;
	const loading_slot_template = /*#slots*/ ctx[76].loading;
	const loading_slot = create_slot(loading_slot_template, ctx, /*$$scope*/ ctx[75], get_loading_slot_context);
	const loading_slot_or_fallback = loading_slot || fallback_block_1(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (loading_slot_or_fallback) loading_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (loading_slot_or_fallback) loading_slot_or_fallback.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "autocomplete-list-item-loading svelte-lduj97");
			add_location(div, file$1, 1226, 6, 30578);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			if (loading_slot_or_fallback) {
				loading_slot_or_fallback.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (loading_slot) {
				if (loading_slot.p && (!current || dirty[0] & /*loadingText*/ 4096 | dirty[2] & /*$$scope*/ 8192)) {
					update_slot_base(
						loading_slot,
						loading_slot_template,
						ctx,
						/*$$scope*/ ctx[75],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[75])
						: get_slot_changes(loading_slot_template, /*$$scope*/ ctx[75], dirty, get_loading_slot_changes),
						get_loading_slot_context
					);
				}
			} else {
				if (loading_slot_or_fallback && loading_slot_or_fallback.p && (!current || dirty[0] & /*loadingText*/ 4096)) {
					loading_slot_or_fallback.p(ctx, !current ? [-1, -1, -1, -1] : dirty);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(loading_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loading_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (loading_slot_or_fallback) loading_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5$1.name,
		type: "if",
		source: "(1226:37) ",
		ctx
	});

	return block;
}

// (1195:4) {#if filteredListItems && filteredListItems.length > 0}
function create_if_block$1(ctx) {
	let t;
	let if_block_anchor;
	let current;
	let each_value = /*filteredListItems*/ ctx[27];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*maxItemsToShowInList*/ ctx[5] > 0 && /*filteredListItems*/ ctx[27].length > /*maxItemsToShowInList*/ ctx[5] && create_if_block_1$1(ctx);

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*highlightIndex, filteredListItems, maxItemsToShowInList*/ 201326624 | dirty[1] & /*isConfirmed, onListItemClick*/ 32800 | dirty[2] & /*$$scope*/ 8192) {
				each_value = /*filteredListItems*/ ctx[27];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(t.parentNode, t);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*maxItemsToShowInList*/ ctx[5] > 0 && /*filteredListItems*/ ctx[27].length > /*maxItemsToShowInList*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(1195:4) {#if filteredListItems && filteredListItems.length > 0}",
		ctx
	});

	return block;
}

// (1236:48) {noResultsText}
function fallback_block_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*noResultsText*/ ctx[11]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*noResultsText*/ ctx[11]);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*noResultsText*/ 2048) set_data_dev(t, /*noResultsText*/ ctx[11]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_3.name,
		type: "fallback",
		source: "(1236:48) {noResultsText}",
		ctx
	});

	return block;
}

// (1232:41) {createText}
function fallback_block_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*createText*/ ctx[13]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*createText*/ ctx[13]);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*createText*/ 8192) set_data_dev(t, /*createText*/ ctx[13]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_2.name,
		type: "fallback",
		source: "(1232:41) {createText}",
		ctx
	});

	return block;
}

// (1228:43) {loadingText}
function fallback_block_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*loadingText*/ ctx[12]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*loadingText*/ ctx[12]);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*loadingText*/ 4096) set_data_dev(t, /*loadingText*/ ctx[12]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_1.name,
		type: "fallback",
		source: "(1228:43) {loadingText}",
		ctx
	});

	return block;
}

// (1197:8) {#if listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList)}
function create_if_block_2$1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*listItem*/ ctx[108] && create_if_block_3$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*listItem*/ ctx[108]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*filteredListItems*/ 134217728) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_3$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2$1.name,
		type: "if",
		source: "(1197:8) {#if listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList)}",
		ctx
	});

	return block;
}

// (1198:10) {#if listItem}
function create_if_block_3$1(ctx) {
	let div;
	let div_class_value;
	let current;
	let mounted;
	let dispose;
	const item_slot_template = /*#slots*/ ctx[76].item;
	const item_slot = create_slot(item_slot_template, ctx, /*$$scope*/ ctx[75], get_item_slot_context);
	const item_slot_or_fallback = item_slot || fallback_block(ctx);

	function click_handler() {
		return /*click_handler*/ ctx[79](/*listItem*/ ctx[108]);
	}

	function pointerenter_handler() {
		return /*pointerenter_handler*/ ctx[80](/*i*/ ctx[110]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (item_slot_or_fallback) item_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (item_slot_or_fallback) item_slot_or_fallback.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = "autocomplete-list-item " + (/*i*/ ctx[110] === /*highlightIndex*/ ctx[26]
			? 'selected'
			: '') + " svelte-lduj97");

			toggle_class(div, "confirmed", /*isConfirmed*/ ctx[46](/*listItem*/ ctx[108].item));
			add_location(div, file$1, 1198, 12, 29548);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			if (item_slot_or_fallback) {
				item_slot_or_fallback.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(div, "click", click_handler, false, false, false),
					listen_dev(div, "pointerenter", pointerenter_handler, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (item_slot) {
				if (item_slot.p && (!current || dirty[0] & /*filteredListItems*/ 134217728 | dirty[2] & /*$$scope*/ 8192)) {
					update_slot_base(
						item_slot,
						item_slot_template,
						ctx,
						/*$$scope*/ ctx[75],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[75])
						: get_slot_changes(item_slot_template, /*$$scope*/ ctx[75], dirty, get_item_slot_changes),
						get_item_slot_context
					);
				}
			} else {
				if (item_slot_or_fallback && item_slot_or_fallback.p && (!current || dirty[0] & /*filteredListItems*/ 134217728)) {
					item_slot_or_fallback.p(ctx, !current ? [-1, -1, -1, -1] : dirty);
				}
			}

			if (!current || dirty[0] & /*highlightIndex*/ 67108864 && div_class_value !== (div_class_value = "autocomplete-list-item " + (/*i*/ ctx[110] === /*highlightIndex*/ ctx[26]
			? 'selected'
			: '') + " svelte-lduj97")) {
				attr_dev(div, "class", div_class_value);
			}

			if (dirty[0] & /*highlightIndex, filteredListItems*/ 201326592 | dirty[1] & /*isConfirmed*/ 32768) {
				toggle_class(div, "confirmed", /*isConfirmed*/ ctx[46](/*listItem*/ ctx[108].item));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (item_slot_or_fallback) item_slot_or_fallback.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3$1.name,
		type: "if",
		source: "(1198:10) {#if listItem}",
		ctx
	});

	return block;
}

// (1212:16) {:else}
function create_else_block$1(ctx) {
	let html_tag;
	let raw_value = /*listItem*/ ctx[108].label + "";
	let html_anchor;

	const block = {
		c: function create() {
			html_tag = new HtmlTagHydration();
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			html_tag = claim_html_tag(nodes);
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			html_tag.a = html_anchor;
		},
		m: function mount(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration_dev(target, html_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*filteredListItems*/ 134217728 && raw_value !== (raw_value = /*listItem*/ ctx[108].label + "")) html_tag.p(raw_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(1212:16) {:else}",
		ctx
	});

	return block;
}

// (1210:16) {#if listItem.highlighted}
function create_if_block_4$1(ctx) {
	let html_tag;
	let raw_value = /*listItem*/ ctx[108].highlighted + "";
	let html_anchor;

	const block = {
		c: function create() {
			html_tag = new HtmlTagHydration();
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			html_tag = claim_html_tag(nodes);
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			html_tag.a = html_anchor;
		},
		m: function mount(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration_dev(target, html_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*filteredListItems*/ 134217728 && raw_value !== (raw_value = /*listItem*/ ctx[108].highlighted + "")) html_tag.p(raw_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4$1.name,
		type: "if",
		source: "(1210:16) {#if listItem.highlighted}",
		ctx
	});

	return block;
}

// (1209:85)                  
function fallback_block(ctx) {
	let if_block_anchor;

	function select_block_type_2(ctx, dirty) {
		if (/*listItem*/ ctx[108].highlighted) return create_if_block_4$1;
		return create_else_block$1;
	}

	let current_block_type = select_block_type_2(ctx);
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
			if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
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
		id: fallback_block.name,
		type: "fallback",
		source: "(1209:85)                  ",
		ctx
	});

	return block;
}

// (1196:6) {#each filteredListItems as listItem, i}
function create_each_block$1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*listItem*/ ctx[108] && (/*maxItemsToShowInList*/ ctx[5] <= 0 || /*i*/ ctx[110] < /*maxItemsToShowInList*/ ctx[5]) && create_if_block_2$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*listItem*/ ctx[108] && (/*maxItemsToShowInList*/ ctx[5] <= 0 || /*i*/ ctx[110] < /*maxItemsToShowInList*/ ctx[5])) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*filteredListItems, maxItemsToShowInList*/ 134217760) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(1196:6) {#each filteredListItems as listItem, i}",
		ctx
	});

	return block;
}

// (1221:6) {#if maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList}
function create_if_block_1$1(ctx) {
	let div;
	let t0;
	let t1_value = /*filteredListItems*/ ctx[27].length - /*maxItemsToShowInList*/ ctx[5] + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("...");
			t1 = text(t1_value);
			t2 = text(" results not shown");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "...");
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_text(div_nodes, " results not shown");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "autocomplete-list-item-no-results svelte-lduj97");
			add_location(div, file$1, 1221, 8, 30378);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, t1);
			append_hydration_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*filteredListItems, maxItemsToShowInList*/ 134217760 && t1_value !== (t1_value = /*filteredListItems*/ ctx[27].length - /*maxItemsToShowInList*/ ctx[5] + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(1221:6) {#if maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div2;
	let select;
	let t0;
	let div0;
	let t1;
	let input_1;
	let input_1_class_value;
	let input_1_id_value;
	let input_1_autocomplete_value;
	let input_1_readonly_value;
	let t2;
	let t3;
	let div1;
	let current_block_type_index;
	let if_block3;
	let div1_class_value;
	let div2_class_value;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (!/*multiple*/ ctx[6] && /*value*/ ctx[2]) return create_if_block_10$1;
		if (/*multiple*/ ctx[6] && /*selectedItem*/ ctx[1]) return create_if_block_11$1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type && current_block_type(ctx);
	let if_block1 = /*multiple*/ ctx[6] && /*selectedItem*/ ctx[1] && create_if_block_9$1(ctx);
	let if_block2 = /*clearable*/ ctx[31] && create_if_block_8$1(ctx);
	const if_block_creators = [create_if_block$1, create_if_block_5$1, create_if_block_6$1, create_if_block_7$1];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*filteredListItems*/ ctx[27] && /*filteredListItems*/ ctx[27].length > 0) return 0;
		if (/*loading*/ ctx[30] && /*loadingText*/ ctx[12]) return 1;
		if (/*create*/ ctx[7]) return 2;
		if (/*noResultsText*/ ctx[11]) return 3;
		return -1;
	}

	if (~(current_block_type_index = select_block_type_1(ctx))) {
		if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			select = element("select");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			if (if_block1) if_block1.c();
			t1 = space();
			input_1 = element("input");
			t2 = space();
			if (if_block2) if_block2.c();
			t3 = space();
			div1 = element("div");
			if (if_block3) if_block3.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			select = claim_element(div2_nodes, "SELECT", { name: true, id: true, class: true });
			var select_nodes = children(select);
			if (if_block0) if_block0.l(select_nodes);
			select_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (if_block1) if_block1.l(div0_nodes);
			t1 = claim_space(div0_nodes);

			input_1 = claim_element(div0_nodes, "INPUT", {
				type: true,
				class: true,
				id: true,
				autocomplete: true,
				placeholder: true,
				name: true,
				title: true
			});

			t2 = claim_space(div0_nodes);
			if (if_block2) if_block2.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (if_block3) if_block3.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(select, "name", /*selectName*/ ctx[19]);
			attr_dev(select, "id", /*selectId*/ ctx[20]);
			select.multiple = /*multiple*/ ctx[6];
			attr_dev(select, "class", "svelte-lduj97");
			add_location(select, file$1, 1140, 2, 27641);
			attr_dev(input_1, "type", "text");

			attr_dev(input_1, "class", input_1_class_value = "" + ((/*inputClassName*/ ctx[16]
			? /*inputClassName*/ ctx[16]
			: '') + " input autocomplete-input" + " svelte-lduj97"));

			attr_dev(input_1, "id", input_1_id_value = /*inputId*/ ctx[17] ? /*inputId*/ ctx[17] : '');
			attr_dev(input_1, "autocomplete", input_1_autocomplete_value = /*html5autocomplete*/ ctx[22] ? 'on' : 'some-other-text');
			attr_dev(input_1, "placeholder", /*placeholder*/ ctx[14]);
			attr_dev(input_1, "name", /*name*/ ctx[18]);
			input_1.disabled = /*disabled*/ ctx[25];
			attr_dev(input_1, "title", /*title*/ ctx[21]);
			input_1.readOnly = input_1_readonly_value = /*readonly*/ ctx[23] || /*lock*/ ctx[8] && /*selectedItem*/ ctx[1];
			add_location(input_1, file$1, 1168, 4, 28507);
			attr_dev(div0, "class", "input-container svelte-lduj97");
			add_location(div0, file$1, 1151, 2, 27987);

			attr_dev(div1, "class", div1_class_value = "" + ((/*dropdownClassName*/ ctx[24]
			? /*dropdownClassName*/ ctx[24]
			: '') + " autocomplete-list " + (/*showList*/ ctx[32] ? '' : 'hidden') + " is-fullwidth" + " svelte-lduj97"));

			add_location(div1, file$1, 1190, 2, 29176);

			attr_dev(div2, "class", div2_class_value = "" + ((/*className*/ ctx[15] ? /*className*/ ctx[15] : '') + " " + (/*hideArrow*/ ctx[9] || !/*items*/ ctx[0].length
			? 'hide-arrow'
			: '') + " " + (/*multiple*/ ctx[6] ? 'is-multiple' : '') + " autocomplete select is-fullwidth " + /*uniqueId*/ ctx[33] + " svelte-lduj97"));

			toggle_class(div2, "show-clear", /*clearable*/ ctx[31]);
			toggle_class(div2, "is-loading", /*showLoadingIndicator*/ ctx[10] && /*loading*/ ctx[30]);
			add_location(div2, file$1, 1134, 0, 27381);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div2, anchor);
			append_hydration_dev(div2, select);
			if (if_block0) if_block0.m(select, null);
			append_hydration_dev(div2, t0);
			append_hydration_dev(div2, div0);
			if (if_block1) if_block1.m(div0, null);
			append_hydration_dev(div0, t1);
			append_hydration_dev(div0, input_1);
			/*input_1_binding*/ ctx[77](input_1);
			set_input_value(input_1, /*text*/ ctx[3]);
			append_hydration_dev(div0, t2);
			if (if_block2) if_block2.m(div0, null);
			append_hydration_dev(div2, t3);
			append_hydration_dev(div2, div1);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(div1, null);
			}

			/*div1_binding*/ ctx[81](div1);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window, "click", /*onDocumentClick*/ ctx[37], false, false, false),
					listen_dev(input_1, "input", /*input_1_input_handler*/ ctx[78]),
					listen_dev(input_1, "input", /*onInput*/ ctx[40], false, false, false),
					listen_dev(input_1, "focus", /*onFocusInternal*/ ctx[43], false, false, false),
					listen_dev(input_1, "blur", /*onBlurInternal*/ ctx[44], false, false, false),
					listen_dev(input_1, "keydown", /*onKeyDown*/ ctx[38], false, false, false),
					listen_dev(input_1, "click", /*onInputClick*/ ctx[42], false, false, false),
					listen_dev(input_1, "keypress", /*onKeyPress*/ ctx[39], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if (if_block0) if_block0.d(1);
				if_block0 = current_block_type && current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(select, null);
				}
			}

			if (!current || dirty[0] & /*selectName*/ 524288) {
				attr_dev(select, "name", /*selectName*/ ctx[19]);
			}

			if (!current || dirty[0] & /*selectId*/ 1048576) {
				attr_dev(select, "id", /*selectId*/ ctx[20]);
			}

			if (!current || dirty[0] & /*multiple*/ 64) {
				prop_dev(select, "multiple", /*multiple*/ ctx[6]);
			}

			if (/*multiple*/ ctx[6] && /*selectedItem*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*multiple, selectedItem*/ 66) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_9$1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div0, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*inputClassName*/ 65536 && input_1_class_value !== (input_1_class_value = "" + ((/*inputClassName*/ ctx[16]
			? /*inputClassName*/ ctx[16]
			: '') + " input autocomplete-input" + " svelte-lduj97"))) {
				attr_dev(input_1, "class", input_1_class_value);
			}

			if (!current || dirty[0] & /*inputId*/ 131072 && input_1_id_value !== (input_1_id_value = /*inputId*/ ctx[17] ? /*inputId*/ ctx[17] : '')) {
				attr_dev(input_1, "id", input_1_id_value);
			}

			if (!current || dirty[0] & /*html5autocomplete*/ 4194304 && input_1_autocomplete_value !== (input_1_autocomplete_value = /*html5autocomplete*/ ctx[22] ? 'on' : 'some-other-text')) {
				attr_dev(input_1, "autocomplete", input_1_autocomplete_value);
			}

			if (!current || dirty[0] & /*placeholder*/ 16384) {
				attr_dev(input_1, "placeholder", /*placeholder*/ ctx[14]);
			}

			if (!current || dirty[0] & /*name*/ 262144) {
				attr_dev(input_1, "name", /*name*/ ctx[18]);
			}

			if (!current || dirty[0] & /*disabled*/ 33554432) {
				prop_dev(input_1, "disabled", /*disabled*/ ctx[25]);
			}

			if (!current || dirty[0] & /*title*/ 2097152) {
				attr_dev(input_1, "title", /*title*/ ctx[21]);
			}

			if (!current || dirty[0] & /*readonly, lock, selectedItem*/ 8388866 && input_1_readonly_value !== (input_1_readonly_value = /*readonly*/ ctx[23] || /*lock*/ ctx[8] && /*selectedItem*/ ctx[1])) {
				prop_dev(input_1, "readOnly", input_1_readonly_value);
			}

			if (dirty[0] & /*text*/ 8 && input_1.value !== /*text*/ ctx[3]) {
				set_input_value(input_1, /*text*/ ctx[3]);
			}

			if (/*clearable*/ ctx[31]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_8$1(ctx);
					if_block2.c();
					if_block2.m(div0, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block3) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block3 = if_blocks[current_block_type_index];

					if (!if_block3) {
						if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block3.c();
					} else {
						if_block3.p(ctx, dirty);
					}

					transition_in(if_block3, 1);
					if_block3.m(div1, null);
				} else {
					if_block3 = null;
				}
			}

			if (!current || dirty[0] & /*dropdownClassName*/ 16777216 | dirty[1] & /*showList*/ 2 && div1_class_value !== (div1_class_value = "" + ((/*dropdownClassName*/ ctx[24]
			? /*dropdownClassName*/ ctx[24]
			: '') + " autocomplete-list " + (/*showList*/ ctx[32] ? '' : 'hidden') + " is-fullwidth" + " svelte-lduj97"))) {
				attr_dev(div1, "class", div1_class_value);
			}

			if (!current || dirty[0] & /*className, hideArrow, items, multiple*/ 33345 && div2_class_value !== (div2_class_value = "" + ((/*className*/ ctx[15] ? /*className*/ ctx[15] : '') + " " + (/*hideArrow*/ ctx[9] || !/*items*/ ctx[0].length
			? 'hide-arrow'
			: '') + " " + (/*multiple*/ ctx[6] ? 'is-multiple' : '') + " autocomplete select is-fullwidth " + /*uniqueId*/ ctx[33] + " svelte-lduj97"))) {
				attr_dev(div2, "class", div2_class_value);
			}

			if (dirty[0] & /*className, hideArrow, items, multiple*/ 33345 | dirty[1] & /*clearable*/ 1) {
				toggle_class(div2, "show-clear", /*clearable*/ ctx[31]);
			}

			if (dirty[0] & /*className, hideArrow, items, multiple, showLoadingIndicator, loading*/ 1073776193) {
				toggle_class(div2, "is-loading", /*showLoadingIndicator*/ ctx[10] && /*loading*/ ctx[30]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block1);
			transition_in(if_block3);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block1);
			transition_out(if_block3);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);

			if (if_block0) {
				if_block0.d();
			}

			if (if_block1) if_block1.d();
			/*input_1_binding*/ ctx[77](null);
			if (if_block2) if_block2.d();

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d();
			}

			/*div1_binding*/ ctx[81](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function safeStringFunction(theFunction, argument) {
	if (typeof theFunction !== "function") {
		console.error("Not a function: " + theFunction + ", argument: " + argument);
	}

	let originalResult;

	try {
		originalResult = theFunction(argument);
	} catch(error) {
		console.warn("Error executing Autocomplete function on value: " + argument + " function: " + theFunction);
	}

	let result = originalResult;

	if (result === undefined || result === null) {
		result = "";
	}

	if (typeof result !== "string") {
		result = result.toString();
	}

	return result;
}

function numberOfMatches(listItem, searchWords) {
	if (!listItem) {
		return 0;
	}

	const itemKeywords = listItem.keywords;
	let matches = 0;

	searchWords.forEach(searchWord => {
		if (itemKeywords.includes(searchWord)) {
			matches++;
		}
	});

	return matches;
}

function defaultItemSortFunction(obj1, obj2, searchWords) {
	return numberOfMatches(obj2, searchWords) - numberOfMatches(obj1, searchWords);
}

function removeAccents(str) {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function instance$1($$self, $$props, $$invalidate) {
	let showList;
	let clearable;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('SimpleAutocomplete', slots, ['tag','item','loading','create','no-results']);
	let { items = [] } = $$props;
	let { searchFunction = false } = $$props;
	let { labelFieldName = undefined } = $$props;
	let { keywordsFieldName = labelFieldName } = $$props;
	let { valueFieldName = undefined } = $$props;

	let { labelFunction = function (item) {
		if (item === undefined || item === null) {
			return "";
		}

		return labelFieldName ? item[labelFieldName] : item;
	} } = $$props;

	let { keywordsFunction = function (item) {
		if (item === undefined || item === null) {
			return "";
		}

		return keywordsFieldName
		? item[keywordsFieldName]
		: labelFunction(item);
	} } = $$props;

	let { valueFunction = function (item, forceSingle = false) {
		if (item === undefined || item === null) {
			return item;
		}

		if (!multiple || forceSingle) {
			return valueFieldName ? item[valueFieldName] : item;
		} else {
			return item.map(i => valueFieldName ? i[valueFieldName] : i);
		}
	} } = $$props;

	let { keywordsCleanFunction = function (keywords) {
		return keywords;
	} } = $$props;

	let { textCleanFunction = function (userEnteredText) {
		return userEnteredText;
	} } = $$props;

	let { beforeChange = function (oldSelectedItem, newSelectedItem) {
		return true;
	} } = $$props;

	let { onChange = function (newSelectedItem) {
		
	} } = $$props;

	let { onFocus = function () {
		
	} } = $$props;

	let { onBlur = function () {
		
	} } = $$props;

	let { onCreate = function (text) {
		if (debug) {
			console.log("onCreate: " + text);
		}
	} } = $$props;

	let { selectFirstIfEmpty = false } = $$props;
	let { minCharactersToSearch = 1 } = $$props;
	let { maxItemsToShowInList = 0 } = $$props;
	let { multiple = false } = $$props;
	let { create = false } = $$props;
	let { ignoreAccents = true } = $$props;
	let { matchAllKeywords = true } = $$props;
	let { sortByMatchedKeywords = false } = $$props;
	let { itemFilterFunction = undefined } = $$props;
	let { itemSortFunction = undefined } = $$props;
	let { lock = false } = $$props;
	let { delay = 0 } = $$props;
	let { localFiltering = true } = $$props;
	let { hideArrow = false } = $$props;
	let { showClear = false } = $$props;
	let { showLoadingIndicator = false } = $$props;
	let { noResultsText = "No results found" } = $$props;
	let { loadingText = "Loading results..." } = $$props;
	let { createText = "Not found, add anyway?" } = $$props;
	let { placeholder = undefined } = $$props;
	let { className = undefined } = $$props;
	let { inputClassName = undefined } = $$props;
	let { inputId = undefined } = $$props;
	let { name = undefined } = $$props;
	let { selectName = undefined } = $$props;
	let { selectId = undefined } = $$props;
	let { title = undefined } = $$props;
	let { html5autocomplete = undefined } = $$props;
	let { readonly = undefined } = $$props;
	let { dropdownClassName = undefined } = $$props;
	let { disabled = false } = $$props;
	let { debug = false } = $$props;
	let { selectedItem = multiple ? [] : undefined } = $$props;
	let { value = undefined } = $$props;
	let { highlightedItem = undefined } = $$props;

	// --- Internal State ----
	const uniqueId = "sautocomplete-" + Math.floor(Math.random() * 1000);

	// HTML elements
	let input;

	let list;

	// UI state
	let opened = false;

	let loading = false;
	let highlightIndex = -1;
	let { text } = $$props;
	let filteredTextLength = 0;

	// view model
	let filteredListItems;

	let listItems = [];

	// requests/responses counters
	let lastRequestId = 0;

	let lastResponseId = 0;

	// other state
	let inputDelayTimeout;

	function safeLabelFunction(item) {
		// console.log("labelFunction: " + labelFunction);
		// console.log("safeLabelFunction, item: " + item);
		return safeStringFunction(labelFunction, item);
	}

	function safeKeywordsFunction(item) {
		// console.log("safeKeywordsFunction");
		const keywords = safeStringFunction(keywordsFunction, item);

		let result = safeStringFunction(keywordsCleanFunction, keywords);
		result = result.toLowerCase().trim();

		if (ignoreAccents) {
			result = removeAccents(result);
		}

		if (debug) {
			console.log("Extracted keywords: '" + result + "' from item: " + JSON.stringify(item));
		}

		return result;
	}

	function prepareListItems() {
		let timerId;

		if (debug) {
			timerId = `Autocomplete prepare list ${inputId ? `(id: ${inputId})` : ""}`;
			console.time(timerId);
			console.log("Prepare items to search");
			console.log("items: " + JSON.stringify(items));
		}

		if (!Array.isArray(items)) {
			console.warn("Autocomplete items / search function did not return array but", items);
			$$invalidate(0, items = []);
		}

		const length = items ? items.length : 0;
		listItems = new Array(length);

		if (length > 0) {
			items.forEach((item, i) => {
				const listItem = getListItem(item);

				if (listItem == undefined) {
					console.log("Undefined item for: ", item);
				}

				listItems[i] = listItem;
			});
		}

		if (debug) {
			console.log(listItems.length + " items to search");
			console.timeEnd(timerId);
		}
	}

	function getListItem(item) {
		return {
			// keywords representation of the item
			keywords: safeKeywordsFunction(item),
			// item label
			label: safeLabelFunction(item),
			// store reference to the origial item
			item
		};
	}

	function onSelectedItemChanged() {
		$$invalidate(2, value = valueFunction(selectedItem));
		$$invalidate(3, text = !multiple ? safeLabelFunction(selectedItem) : "");
		$$invalidate(27, filteredListItems = listItems);
		onChange(selectedItem);
	}

	function prepareUserEnteredText(userEnteredText) {
		if (userEnteredText === undefined || userEnteredText === null) {
			return "";
		}

		const textFiltered = userEnteredText.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, " ").trim();
		$$invalidate(74, filteredTextLength = textFiltered.length);

		if (minCharactersToSearch > 1) {
			if (filteredTextLength < minCharactersToSearch) {
				return "";
			}
		}

		const cleanUserEnteredText = textCleanFunction(textFiltered);
		const textFilteredLowerCase = cleanUserEnteredText.toLowerCase().trim();

		if (debug) {
			console.log("Change user entered text '" + userEnteredText + "' into '" + textFilteredLowerCase + "'");
		}

		return textFilteredLowerCase;
	}

	async function search() {
		let timerId;

		if (debug) {
			timerId = `Autocomplete search ${inputId ? `(id: ${inputId})` : ""})`;
			console.time(timerId);
			console.log("Searching user entered text: '" + text + "'");
		}

		const textFiltered = prepareUserEnteredText(text);

		if (textFiltered === "") {
			if (searchFunction) {
				// we will need to rerun the search
				$$invalidate(0, items = []);

				if (debug) {
					console.log("User entered text is empty clear list of items");
				}
			} else {
				$$invalidate(27, filteredListItems = listItems);

				if (debug) {
					console.log("User entered text is empty set the list of items to all items");
				}
			}

			closeIfMinCharsToSearchReached();

			if (debug) {
				console.timeEnd(timerId);
			}

			return;
		}

		if (!searchFunction) {
			processListItems(textFiltered);
		} else // external search which provides items
		{
			lastRequestId = lastRequestId + 1;
			const currentRequestId = lastRequestId;
			$$invalidate(30, loading = true);

			// searchFunction is a generator
			if (searchFunction.constructor.name === "AsyncGeneratorFunction") {
				for await (const chunk of searchFunction(textFiltered)) {
					// a chunk of an old response: throw it away
					if (currentRequestId < lastResponseId) {
						return false;
					}

					// a chunk for a new response: reset the item list
					if (currentRequestId > lastResponseId) {
						$$invalidate(0, items = []);
					}

					lastResponseId = currentRequestId;
					$$invalidate(0, items = [...items, ...chunk]);
					processListItems(textFiltered);
				}

				// there was nothing in the chunk
				if (lastResponseId < currentRequestId) {
					lastResponseId = currentRequestId;
					$$invalidate(0, items = []);
					processListItems(textFiltered);
				}
			} else // searchFunction is a regular function
			{
				let result = await searchFunction(textFiltered);

				// If a response to a newer request has been received
				// while responses to this request were being loaded,
				// then we can just throw away this outdated results.
				if (currentRequestId < lastResponseId) {
					return false;
				}

				lastResponseId = currentRequestId;
				$$invalidate(0, items = result);
				processListItems(textFiltered);
			}

			$$invalidate(30, loading = false);
		}

		if (debug) {
			console.timeEnd(timerId);
			console.log("Search found " + filteredListItems.length + " items");
		}
	}

	function defaultItemFilterFunction(listItem, searchWords) {
		var matches = numberOfMatches(listItem, searchWords);

		if (matchAllKeywords) {
			return matches >= searchWords.length;
		} else {
			return matches > 0;
		}
	}

	function processListItems(textFiltered) {
		// cleans, filters, orders, and highlights the list items
		prepareListItems();

		const textFilteredWithoutAccents = ignoreAccents
		? removeAccents(textFiltered)
		: textFiltered;

		const searchWords = textFilteredWithoutAccents.split(/\s+/g);

		// local search
		let tempfilteredListItems;

		if (localFiltering) {
			if (itemFilterFunction) {
				tempfilteredListItems = listItems.filter(item => itemFilterFunction(item.item, searchWords));
			} else {
				tempfilteredListItems = listItems.filter(item => defaultItemFilterFunction(item, searchWords));
			}

			if (itemSortFunction) {
				tempfilteredListItems = tempfilteredListItems.sort((item1, item2) => itemSortFunction(item1.item, item2.item, searchWords));
			} else {
				if (sortByMatchedKeywords) {
					tempfilteredListItems = tempfilteredListItems.sort((item1, item2) => defaultItemSortFunction(item1, item2, searchWords));
				}
			}
		} else {
			tempfilteredListItems = listItems;
		}

		const hlfilter = highlightFilter(searchWords, "label");
		const filteredListItemsHighlighted = tempfilteredListItems.map(hlfilter);
		$$invalidate(27, filteredListItems = filteredListItemsHighlighted);
		closeIfMinCharsToSearchReached();
		return true;
	}

	// $: text, search();
	function selectListItem(listItem) {
		if (debug) {
			console.log("selectListItem", listItem);
		}

		if ("undefined" === typeof listItem && create) {
			// allow undefined items if create is enabled
			const createdItem = onCreate(text);

			if ("undefined" !== typeof createdItem) {
				prepareListItems();
				$$invalidate(27, filteredListItems = listItems);
				const index = findItemIndex(createdItem, filteredListItems);

				if (index >= 0) {
					$$invalidate(26, highlightIndex = index);
					listItem = filteredListItems[highlightIndex];
				}
			}
		}

		if ("undefined" === typeof listItem) {
			if (debug) {
				console.log(`listItem is undefined. Can not select.`);
			}

			return false;
		}

		const newSelectedItem = listItem.item;

		if (beforeChange(selectedItem, newSelectedItem)) {
			// simple selection
			if (!multiple) {
				$$invalidate(1, selectedItem = undefined); // triggers change even if the the same item is selected
				$$invalidate(1, selectedItem = newSelectedItem);
			} else // first selection of multiple ones
			if (!selectedItem) {
				$$invalidate(1, selectedItem = [newSelectedItem]);
			} else // selecting something already selected => unselect it
			if (selectedItem.includes(newSelectedItem)) {
				$$invalidate(1, selectedItem = selectedItem.filter(i => i !== newSelectedItem));
			} else // adds the element to the selection
			{
				$$invalidate(1, selectedItem = [...selectedItem, newSelectedItem]);
			}
		}

		return true;
	}

	function selectItem() {
		if (debug) {
			console.log("selectItem", highlightIndex);
		}

		const listItem = filteredListItems[highlightIndex];

		if (selectListItem(listItem)) {
			close();

			if (multiple) {
				input.focus();
			}
		}
	}

	function up() {
		if (debug) {
			console.log("up");
		}

		open();

		if (highlightIndex > 0) {
			$$invalidate(26, highlightIndex--, highlightIndex);
		}

		highlight();
	}

	function down() {
		if (debug) {
			console.log("down");
		}

		open();

		if (highlightIndex < filteredListItems.length - 1) {
			$$invalidate(26, highlightIndex++, highlightIndex);
		}

		highlight();
	}

	function highlight() {
		if (debug) {
			console.log("highlight");
		}

		const query = ".selected";

		if (debug) {
			console.log("Seaching DOM element: " + query + " in " + list);
		}

		const el = list && list.querySelector(query);

		if (el) {
			if (typeof el.scrollIntoViewIfNeeded === "function") {
				if (debug) {
					console.log("Scrolling selected item into view");
				}

				el.scrollIntoViewIfNeeded();
			} else {
				if (debug) {
					console.warn("Could not scroll selected item into view, scrollIntoViewIfNeeded not supported");
				}
			}
		} else {
			if (debug) {
				console.warn("Selected item not found to scroll into view");
			}
		}
	}

	function onListItemClick(listItem) {
		if (debug) {
			console.log("onListItemClick");
		}

		if (selectListItem(listItem)) {
			close();

			if (multiple) {
				input.focus();
			}
		}
	}

	function onDocumentClick(e) {
		if (debug) {
			console.log("onDocumentClick: " + JSON.stringify(e.composedPath()));
		}

		if (e.composedPath().some(path => path.classList && path.classList.contains(uniqueId))) {
			if (debug) {
				console.log("onDocumentClick inside");
			}

			// resetListToAllItemsAndOpen();
			highlight();
		} else {
			if (debug) {
				console.log("onDocumentClick outside");
			}

			close();
		}
	}

	function onKeyDown(e) {
		if (debug) {
			console.log("onKeyDown");
		}

		let key = e.key;
		if (key === "Tab" && e.shiftKey) key = "ShiftTab";

		const fnmap = {
			Tab: opened ? down.bind(this) : null,
			ShiftTab: opened ? up.bind(this) : null,
			ArrowDown: down.bind(this),
			ArrowUp: up.bind(this),
			Escape: onEsc.bind(this),
			Backspace: multiple && selectedItem && selectedItem.length && !text
			? onBackspace.bind(this)
			: null
		};

		const fn = fnmap[key];

		if (typeof fn === "function") {
			fn(e);
		}
	}

	function onKeyPress(e) {
		if (debug) {
			console.log("onKeyPress");
		}

		if (e.key === "Enter" && opened) {
			e.preventDefault();
			onEnter();
		}
	}

	function onEnter() {
		selectItem();
	}

	function onInput(e) {
		if (debug) {
			console.log("onInput");
		}

		$$invalidate(3, text = e.target.value);

		if (inputDelayTimeout) {
			clearTimeout(inputDelayTimeout);
		}

		if (delay) {
			inputDelayTimeout = setTimeout(processInput, delay);
		} else {
			processInput();
		}
	}

	function unselectItem(tag) {
		if (debug) {
			console.log("unselectItem", tag);
		}

		$$invalidate(1, selectedItem = selectedItem.filter(i => i !== tag));
		input.focus();
	}

	function processInput() {
		if (search()) {
			$$invalidate(26, highlightIndex = 0);
			open();
		}
	}

	function onInputClick() {
		if (debug) {
			console.log("onInputClick");
		}

		resetListToAllItemsAndOpen();
	}

	function onEsc(e) {
		if (debug) {
			console.log("onEsc");
		}

		//if (text) return clear();
		e.stopPropagation();

		if (opened) {
			input.focus();
			close();
		}
	}

	function onBackspace(e) {
		if (debug) {
			console.log("onBackspace");
		}

		unselectItem(selectedItem[selectedItem.length - 1]);
	}

	function onFocusInternal() {
		if (debug) {
			console.log("onFocus");
		}

		onFocus();
		resetListToAllItemsAndOpen();
	}

	function onBlurInternal() {
		if (debug) {
			console.log("onBlur");
		}

		onBlur();
	}

	function resetListToAllItemsAndOpen() {
		if (debug) {
			console.log("resetListToAllItemsAndOpen");
		}

		if (!text) {
			$$invalidate(27, filteredListItems = listItems);
		} else // When an async component is initialized, the item list
		// must be loaded when the input is focused.
		if (!listItems.length && selectedItem && searchFunction) {
			search();
		}

		open();

		// find selected item
		if (selectedItem) {
			if (debug) {
				console.log("Searching currently selected item: " + JSON.stringify(selectedItem));
			}

			const index = findItemIndex(selectedItem, filteredListItems);

			if (index >= 0) {
				$$invalidate(26, highlightIndex = index);
				highlight();
			}
		}
	}

	function findItemIndex(item, items) {
		if (debug) {
			console.log("Finding index for item", item);
		}

		let index = -1;

		for (let i = 0; i < items.length; i++) {
			const listItem = items[i];

			if ("undefined" === typeof listItem) {
				if (debug) {
					console.log(`listItem ${i} is undefined. Skipping.`);
				}

				continue;
			}

			if (debug) {
				console.log("Item " + i + ": " + JSON.stringify(listItem));
			}

			if (item == listItem.item) {
				index = i;
				break;
			}
		}

		if (debug) {
			if (index >= 0) {
				console.log("Found index for item: " + index);
			} else {
				console.warn("Not found index for item: " + item);
			}
		}

		return index;
	}

	function open() {
		if (debug) {
			console.log("open");
		}

		// check if the search text has more than the min chars required
		if (isMinCharsToSearchReached()) {
			return;
		}

		$$invalidate(73, opened = true);
	}

	function close() {
		if (debug) {
			console.log("close");
		}

		$$invalidate(73, opened = false);
		$$invalidate(30, loading = false);

		if (!text && selectFirstIfEmpty) {
			$$invalidate(26, highlightIndex = 0);
			selectItem();
		}
	}

	function isMinCharsToSearchReached() {
		return minCharactersToSearch > 1 && filteredTextLength < minCharactersToSearch;
	}

	function closeIfMinCharsToSearchReached() {
		if (isMinCharsToSearchReached()) {
			close();
		}
	}

	function clear() {
		if (debug) {
			console.log("clear");
		}

		$$invalidate(3, text = "");
		$$invalidate(1, selectedItem = multiple ? [] : undefined);

		setTimeout(() => {
			input.focus();
			close();
		});
	}

	function highlightFilter(keywords, field) {
		return item => {
			let label = item[field];
			const newItem = Object.assign({ highlighted: undefined }, item);
			newItem.highlighted = label;
			const labelLowercase = label.toLowerCase();

			const labelLowercaseNoAc = ignoreAccents
			? removeAccents(labelLowercase)
			: labelLowercase;

			if (keywords && keywords.length) {
				const positions = [];

				for (let i = 0; i < keywords.length; i++) {
					let keyword = keywords[i];

					if (ignoreAccents) {
						keyword = removeAccents(keyword);
					}

					const keywordLen = keyword.length;
					let pos1 = 0;

					do {
						pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);

						if (pos1 >= 0) {
							let pos2 = pos1 + keywordLen;
							positions.push([pos1, pos2]);
							pos1 = pos2;
						}
					} while (pos1 !== -1);
				}

				if (positions.length > 0) {
					const keywordPatterns = new Set();

					for (let i = 0; i < positions.length; i++) {
						const pair = positions[i];
						const pos1 = pair[0];
						const pos2 = pair[1];
						const keywordPattern = labelLowercase.substring(pos1, pos2);
						keywordPatterns.add(keywordPattern);
					}

					for (let keywordPattern of keywordPatterns) {
						// FIXME pst: workarond for wrong replacement <b> tags
						if (keywordPattern === "b") {
							continue;
						}

						const reg = new RegExp("(" + keywordPattern + ")", "ig");
						const newHighlighted = newItem.highlighted.replace(reg, "<b>$1</b>");
						newItem.highlighted = newHighlighted;
					}
				}
			}

			return newItem;
		};
	}

	function isConfirmed(listItem) {
		if (!selectedItem) {
			return false;
		}

		if (multiple) {
			return selectedItem.includes(listItem);
		} else {
			return listItem == selectedItem;
		}
	}

	const writable_props = [
		'items',
		'searchFunction',
		'labelFieldName',
		'keywordsFieldName',
		'valueFieldName',
		'labelFunction',
		'keywordsFunction',
		'valueFunction',
		'keywordsCleanFunction',
		'textCleanFunction',
		'beforeChange',
		'onChange',
		'onFocus',
		'onBlur',
		'onCreate',
		'selectFirstIfEmpty',
		'minCharactersToSearch',
		'maxItemsToShowInList',
		'multiple',
		'create',
		'ignoreAccents',
		'matchAllKeywords',
		'sortByMatchedKeywords',
		'itemFilterFunction',
		'itemSortFunction',
		'lock',
		'delay',
		'localFiltering',
		'hideArrow',
		'showClear',
		'showLoadingIndicator',
		'noResultsText',
		'loadingText',
		'createText',
		'placeholder',
		'className',
		'inputClassName',
		'inputId',
		'name',
		'selectName',
		'selectId',
		'title',
		'html5autocomplete',
		'readonly',
		'dropdownClassName',
		'disabled',
		'debug',
		'selectedItem',
		'value',
		'highlightedItem',
		'text'
	];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$1.warn(`<SimpleAutocomplete> was created with unknown prop '${key}'`);
	});

	function input_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			input = $$value;
			$$invalidate(28, input);
		});
	}

	function input_1_input_handler() {
		text = this.value;
		$$invalidate(3, text);
	}

	const click_handler = listItem => onListItemClick(listItem);

	const pointerenter_handler = i => {
		$$invalidate(26, highlightIndex = i);
	};

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			list = $$value;
			$$invalidate(29, list);
		});
	}

	$$self.$$set = $$props => {
		if ('items' in $$props) $$invalidate(0, items = $$props.items);
		if ('searchFunction' in $$props) $$invalidate(48, searchFunction = $$props.searchFunction);
		if ('labelFieldName' in $$props) $$invalidate(49, labelFieldName = $$props.labelFieldName);
		if ('keywordsFieldName' in $$props) $$invalidate(50, keywordsFieldName = $$props.keywordsFieldName);
		if ('valueFieldName' in $$props) $$invalidate(51, valueFieldName = $$props.valueFieldName);
		if ('labelFunction' in $$props) $$invalidate(52, labelFunction = $$props.labelFunction);
		if ('keywordsFunction' in $$props) $$invalidate(53, keywordsFunction = $$props.keywordsFunction);
		if ('valueFunction' in $$props) $$invalidate(4, valueFunction = $$props.valueFunction);
		if ('keywordsCleanFunction' in $$props) $$invalidate(54, keywordsCleanFunction = $$props.keywordsCleanFunction);
		if ('textCleanFunction' in $$props) $$invalidate(55, textCleanFunction = $$props.textCleanFunction);
		if ('beforeChange' in $$props) $$invalidate(56, beforeChange = $$props.beforeChange);
		if ('onChange' in $$props) $$invalidate(57, onChange = $$props.onChange);
		if ('onFocus' in $$props) $$invalidate(58, onFocus = $$props.onFocus);
		if ('onBlur' in $$props) $$invalidate(59, onBlur = $$props.onBlur);
		if ('onCreate' in $$props) $$invalidate(60, onCreate = $$props.onCreate);
		if ('selectFirstIfEmpty' in $$props) $$invalidate(61, selectFirstIfEmpty = $$props.selectFirstIfEmpty);
		if ('minCharactersToSearch' in $$props) $$invalidate(62, minCharactersToSearch = $$props.minCharactersToSearch);
		if ('maxItemsToShowInList' in $$props) $$invalidate(5, maxItemsToShowInList = $$props.maxItemsToShowInList);
		if ('multiple' in $$props) $$invalidate(6, multiple = $$props.multiple);
		if ('create' in $$props) $$invalidate(7, create = $$props.create);
		if ('ignoreAccents' in $$props) $$invalidate(63, ignoreAccents = $$props.ignoreAccents);
		if ('matchAllKeywords' in $$props) $$invalidate(64, matchAllKeywords = $$props.matchAllKeywords);
		if ('sortByMatchedKeywords' in $$props) $$invalidate(65, sortByMatchedKeywords = $$props.sortByMatchedKeywords);
		if ('itemFilterFunction' in $$props) $$invalidate(66, itemFilterFunction = $$props.itemFilterFunction);
		if ('itemSortFunction' in $$props) $$invalidate(67, itemSortFunction = $$props.itemSortFunction);
		if ('lock' in $$props) $$invalidate(8, lock = $$props.lock);
		if ('delay' in $$props) $$invalidate(68, delay = $$props.delay);
		if ('localFiltering' in $$props) $$invalidate(69, localFiltering = $$props.localFiltering);
		if ('hideArrow' in $$props) $$invalidate(9, hideArrow = $$props.hideArrow);
		if ('showClear' in $$props) $$invalidate(70, showClear = $$props.showClear);
		if ('showLoadingIndicator' in $$props) $$invalidate(10, showLoadingIndicator = $$props.showLoadingIndicator);
		if ('noResultsText' in $$props) $$invalidate(11, noResultsText = $$props.noResultsText);
		if ('loadingText' in $$props) $$invalidate(12, loadingText = $$props.loadingText);
		if ('createText' in $$props) $$invalidate(13, createText = $$props.createText);
		if ('placeholder' in $$props) $$invalidate(14, placeholder = $$props.placeholder);
		if ('className' in $$props) $$invalidate(15, className = $$props.className);
		if ('inputClassName' in $$props) $$invalidate(16, inputClassName = $$props.inputClassName);
		if ('inputId' in $$props) $$invalidate(17, inputId = $$props.inputId);
		if ('name' in $$props) $$invalidate(18, name = $$props.name);
		if ('selectName' in $$props) $$invalidate(19, selectName = $$props.selectName);
		if ('selectId' in $$props) $$invalidate(20, selectId = $$props.selectId);
		if ('title' in $$props) $$invalidate(21, title = $$props.title);
		if ('html5autocomplete' in $$props) $$invalidate(22, html5autocomplete = $$props.html5autocomplete);
		if ('readonly' in $$props) $$invalidate(23, readonly = $$props.readonly);
		if ('dropdownClassName' in $$props) $$invalidate(24, dropdownClassName = $$props.dropdownClassName);
		if ('disabled' in $$props) $$invalidate(25, disabled = $$props.disabled);
		if ('debug' in $$props) $$invalidate(71, debug = $$props.debug);
		if ('selectedItem' in $$props) $$invalidate(1, selectedItem = $$props.selectedItem);
		if ('value' in $$props) $$invalidate(2, value = $$props.value);
		if ('highlightedItem' in $$props) $$invalidate(47, highlightedItem = $$props.highlightedItem);
		if ('text' in $$props) $$invalidate(3, text = $$props.text);
		if ('$$scope' in $$props) $$invalidate(75, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		items,
		searchFunction,
		labelFieldName,
		keywordsFieldName,
		valueFieldName,
		labelFunction,
		keywordsFunction,
		valueFunction,
		keywordsCleanFunction,
		textCleanFunction,
		beforeChange,
		onChange,
		onFocus,
		onBlur,
		onCreate,
		selectFirstIfEmpty,
		minCharactersToSearch,
		maxItemsToShowInList,
		multiple,
		create,
		ignoreAccents,
		matchAllKeywords,
		sortByMatchedKeywords,
		itemFilterFunction,
		itemSortFunction,
		lock,
		delay,
		localFiltering,
		hideArrow,
		showClear,
		showLoadingIndicator,
		noResultsText,
		loadingText,
		createText,
		placeholder,
		className,
		inputClassName,
		inputId,
		name,
		selectName,
		selectId,
		title,
		html5autocomplete,
		readonly,
		dropdownClassName,
		disabled,
		debug,
		selectedItem,
		value,
		highlightedItem,
		uniqueId,
		input,
		list,
		opened,
		loading,
		highlightIndex,
		text,
		filteredTextLength,
		filteredListItems,
		listItems,
		lastRequestId,
		lastResponseId,
		inputDelayTimeout,
		safeStringFunction,
		safeLabelFunction,
		safeKeywordsFunction,
		prepareListItems,
		getListItem,
		onSelectedItemChanged,
		prepareUserEnteredText,
		numberOfMatches,
		search,
		defaultItemFilterFunction,
		defaultItemSortFunction,
		processListItems,
		selectListItem,
		selectItem,
		up,
		down,
		highlight,
		onListItemClick,
		onDocumentClick,
		onKeyDown,
		onKeyPress,
		onEnter,
		onInput,
		unselectItem,
		processInput,
		onInputClick,
		onEsc,
		onBackspace,
		onFocusInternal,
		onBlurInternal,
		resetListToAllItemsAndOpen,
		findItemIndex,
		open,
		close,
		isMinCharsToSearchReached,
		closeIfMinCharsToSearchReached,
		clear,
		highlightFilter,
		removeAccents,
		isConfirmed,
		clearable,
		showList
	});

	$$self.$inject_state = $$props => {
		if ('items' in $$props) $$invalidate(0, items = $$props.items);
		if ('searchFunction' in $$props) $$invalidate(48, searchFunction = $$props.searchFunction);
		if ('labelFieldName' in $$props) $$invalidate(49, labelFieldName = $$props.labelFieldName);
		if ('keywordsFieldName' in $$props) $$invalidate(50, keywordsFieldName = $$props.keywordsFieldName);
		if ('valueFieldName' in $$props) $$invalidate(51, valueFieldName = $$props.valueFieldName);
		if ('labelFunction' in $$props) $$invalidate(52, labelFunction = $$props.labelFunction);
		if ('keywordsFunction' in $$props) $$invalidate(53, keywordsFunction = $$props.keywordsFunction);
		if ('valueFunction' in $$props) $$invalidate(4, valueFunction = $$props.valueFunction);
		if ('keywordsCleanFunction' in $$props) $$invalidate(54, keywordsCleanFunction = $$props.keywordsCleanFunction);
		if ('textCleanFunction' in $$props) $$invalidate(55, textCleanFunction = $$props.textCleanFunction);
		if ('beforeChange' in $$props) $$invalidate(56, beforeChange = $$props.beforeChange);
		if ('onChange' in $$props) $$invalidate(57, onChange = $$props.onChange);
		if ('onFocus' in $$props) $$invalidate(58, onFocus = $$props.onFocus);
		if ('onBlur' in $$props) $$invalidate(59, onBlur = $$props.onBlur);
		if ('onCreate' in $$props) $$invalidate(60, onCreate = $$props.onCreate);
		if ('selectFirstIfEmpty' in $$props) $$invalidate(61, selectFirstIfEmpty = $$props.selectFirstIfEmpty);
		if ('minCharactersToSearch' in $$props) $$invalidate(62, minCharactersToSearch = $$props.minCharactersToSearch);
		if ('maxItemsToShowInList' in $$props) $$invalidate(5, maxItemsToShowInList = $$props.maxItemsToShowInList);
		if ('multiple' in $$props) $$invalidate(6, multiple = $$props.multiple);
		if ('create' in $$props) $$invalidate(7, create = $$props.create);
		if ('ignoreAccents' in $$props) $$invalidate(63, ignoreAccents = $$props.ignoreAccents);
		if ('matchAllKeywords' in $$props) $$invalidate(64, matchAllKeywords = $$props.matchAllKeywords);
		if ('sortByMatchedKeywords' in $$props) $$invalidate(65, sortByMatchedKeywords = $$props.sortByMatchedKeywords);
		if ('itemFilterFunction' in $$props) $$invalidate(66, itemFilterFunction = $$props.itemFilterFunction);
		if ('itemSortFunction' in $$props) $$invalidate(67, itemSortFunction = $$props.itemSortFunction);
		if ('lock' in $$props) $$invalidate(8, lock = $$props.lock);
		if ('delay' in $$props) $$invalidate(68, delay = $$props.delay);
		if ('localFiltering' in $$props) $$invalidate(69, localFiltering = $$props.localFiltering);
		if ('hideArrow' in $$props) $$invalidate(9, hideArrow = $$props.hideArrow);
		if ('showClear' in $$props) $$invalidate(70, showClear = $$props.showClear);
		if ('showLoadingIndicator' in $$props) $$invalidate(10, showLoadingIndicator = $$props.showLoadingIndicator);
		if ('noResultsText' in $$props) $$invalidate(11, noResultsText = $$props.noResultsText);
		if ('loadingText' in $$props) $$invalidate(12, loadingText = $$props.loadingText);
		if ('createText' in $$props) $$invalidate(13, createText = $$props.createText);
		if ('placeholder' in $$props) $$invalidate(14, placeholder = $$props.placeholder);
		if ('className' in $$props) $$invalidate(15, className = $$props.className);
		if ('inputClassName' in $$props) $$invalidate(16, inputClassName = $$props.inputClassName);
		if ('inputId' in $$props) $$invalidate(17, inputId = $$props.inputId);
		if ('name' in $$props) $$invalidate(18, name = $$props.name);
		if ('selectName' in $$props) $$invalidate(19, selectName = $$props.selectName);
		if ('selectId' in $$props) $$invalidate(20, selectId = $$props.selectId);
		if ('title' in $$props) $$invalidate(21, title = $$props.title);
		if ('html5autocomplete' in $$props) $$invalidate(22, html5autocomplete = $$props.html5autocomplete);
		if ('readonly' in $$props) $$invalidate(23, readonly = $$props.readonly);
		if ('dropdownClassName' in $$props) $$invalidate(24, dropdownClassName = $$props.dropdownClassName);
		if ('disabled' in $$props) $$invalidate(25, disabled = $$props.disabled);
		if ('debug' in $$props) $$invalidate(71, debug = $$props.debug);
		if ('selectedItem' in $$props) $$invalidate(1, selectedItem = $$props.selectedItem);
		if ('value' in $$props) $$invalidate(2, value = $$props.value);
		if ('highlightedItem' in $$props) $$invalidate(47, highlightedItem = $$props.highlightedItem);
		if ('input' in $$props) $$invalidate(28, input = $$props.input);
		if ('list' in $$props) $$invalidate(29, list = $$props.list);
		if ('opened' in $$props) $$invalidate(73, opened = $$props.opened);
		if ('loading' in $$props) $$invalidate(30, loading = $$props.loading);
		if ('highlightIndex' in $$props) $$invalidate(26, highlightIndex = $$props.highlightIndex);
		if ('text' in $$props) $$invalidate(3, text = $$props.text);
		if ('filteredTextLength' in $$props) $$invalidate(74, filteredTextLength = $$props.filteredTextLength);
		if ('filteredListItems' in $$props) $$invalidate(27, filteredListItems = $$props.filteredListItems);
		if ('listItems' in $$props) listItems = $$props.listItems;
		if ('lastRequestId' in $$props) lastRequestId = $$props.lastRequestId;
		if ('lastResponseId' in $$props) lastResponseId = $$props.lastResponseId;
		if ('inputDelayTimeout' in $$props) inputDelayTimeout = $$props.inputDelayTimeout;
		if ('clearable' in $$props) $$invalidate(31, clearable = $$props.clearable);
		if ('showList' in $$props) $$invalidate(32, showList = $$props.showList);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*items*/ 1) {
			// -- Reactivity --
			(prepareListItems());
		}

		if ($$self.$$.dirty[0] & /*selectedItem*/ 2) {
			(onSelectedItemChanged());
		}

		if ($$self.$$.dirty[0] & /*filteredListItems, highlightIndex*/ 201326592) {
			$$invalidate(47, highlightedItem = filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length
			? filteredListItems[highlightIndex].item
			: null);
		}

		if ($$self.$$.dirty[0] & /*items*/ 1 | $$self.$$.dirty[2] & /*opened, filteredTextLength*/ 6144) {
			$$invalidate(32, showList = opened && (items && items.length > 0 || filteredTextLength > 0));
		}

		if ($$self.$$.dirty[0] & /*lock, multiple, selectedItem*/ 322 | $$self.$$.dirty[2] & /*showClear*/ 256) {
			$$invalidate(31, clearable = showClear || (lock || multiple) && selectedItem);
		}
	};

	return [
		items,
		selectedItem,
		value,
		text,
		valueFunction,
		maxItemsToShowInList,
		multiple,
		create,
		lock,
		hideArrow,
		showLoadingIndicator,
		noResultsText,
		loadingText,
		createText,
		placeholder,
		className,
		inputClassName,
		inputId,
		name,
		selectName,
		selectId,
		title,
		html5autocomplete,
		readonly,
		dropdownClassName,
		disabled,
		highlightIndex,
		filteredListItems,
		input,
		list,
		loading,
		clearable,
		showList,
		uniqueId,
		safeLabelFunction,
		selectItem,
		onListItemClick,
		onDocumentClick,
		onKeyDown,
		onKeyPress,
		onInput,
		unselectItem,
		onInputClick,
		onFocusInternal,
		onBlurInternal,
		clear,
		isConfirmed,
		highlightedItem,
		searchFunction,
		labelFieldName,
		keywordsFieldName,
		valueFieldName,
		labelFunction,
		keywordsFunction,
		keywordsCleanFunction,
		textCleanFunction,
		beforeChange,
		onChange,
		onFocus,
		onBlur,
		onCreate,
		selectFirstIfEmpty,
		minCharactersToSearch,
		ignoreAccents,
		matchAllKeywords,
		sortByMatchedKeywords,
		itemFilterFunction,
		itemSortFunction,
		delay,
		localFiltering,
		showClear,
		debug,
		highlightFilter,
		opened,
		filteredTextLength,
		$$scope,
		slots,
		input_1_binding,
		input_1_input_handler,
		click_handler,
		pointerenter_handler,
		div1_binding
	];
}

class SimpleAutocomplete extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance$1,
			create_fragment$1,
			safe_not_equal,
			{
				items: 0,
				searchFunction: 48,
				labelFieldName: 49,
				keywordsFieldName: 50,
				valueFieldName: 51,
				labelFunction: 52,
				keywordsFunction: 53,
				valueFunction: 4,
				keywordsCleanFunction: 54,
				textCleanFunction: 55,
				beforeChange: 56,
				onChange: 57,
				onFocus: 58,
				onBlur: 59,
				onCreate: 60,
				selectFirstIfEmpty: 61,
				minCharactersToSearch: 62,
				maxItemsToShowInList: 5,
				multiple: 6,
				create: 7,
				ignoreAccents: 63,
				matchAllKeywords: 64,
				sortByMatchedKeywords: 65,
				itemFilterFunction: 66,
				itemSortFunction: 67,
				lock: 8,
				delay: 68,
				localFiltering: 69,
				hideArrow: 9,
				showClear: 70,
				showLoadingIndicator: 10,
				noResultsText: 11,
				loadingText: 12,
				createText: 13,
				placeholder: 14,
				className: 15,
				inputClassName: 16,
				inputId: 17,
				name: 18,
				selectName: 19,
				selectId: 20,
				title: 21,
				html5autocomplete: 22,
				readonly: 23,
				dropdownClassName: 24,
				disabled: 25,
				debug: 71,
				selectedItem: 1,
				value: 2,
				highlightedItem: 47,
				text: 3,
				highlightFilter: 72
			},
			null,
			[-1, -1, -1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SimpleAutocomplete",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*text*/ ctx[3] === undefined && !('text' in props)) {
			console_1$1.warn("<SimpleAutocomplete> was created without expected prop 'text'");
		}
	}

	get items() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get searchFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set searchFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get labelFieldName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set labelFieldName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get keywordsFieldName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set keywordsFieldName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get valueFieldName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set valueFieldName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get labelFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set labelFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get keywordsFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set keywordsFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get valueFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set valueFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get keywordsCleanFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set keywordsCleanFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get textCleanFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set textCleanFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get beforeChange() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set beforeChange(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onChange() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onChange(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onFocus() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onFocus(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onBlur() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onBlur(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onCreate() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onCreate(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectFirstIfEmpty() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectFirstIfEmpty(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get minCharactersToSearch() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set minCharactersToSearch(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get maxItemsToShowInList() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set maxItemsToShowInList(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get multiple() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set multiple(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get create() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set create(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ignoreAccents() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ignoreAccents(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get matchAllKeywords() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set matchAllKeywords(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortByMatchedKeywords() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortByMatchedKeywords(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemFilterFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemFilterFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemSortFunction() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemSortFunction(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get lock() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set lock(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get delay() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set delay(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get localFiltering() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set localFiltering(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hideArrow() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hideArrow(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showClear() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showClear(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showLoadingIndicator() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showLoadingIndicator(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get noResultsText() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set noResultsText(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadingText() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadingText(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createText() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set createText(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get placeholder() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set placeholder(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get className() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set className(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputClassName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputClassName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputId() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputId(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get name() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectId() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectId(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get html5autocomplete() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set html5autocomplete(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get readonly() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set readonly(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get dropdownClassName() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dropdownClassName(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get debug() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set debug(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedItem() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedItem(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get highlightedItem() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set highlightedItem(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get text() {
		throw new Error("<SimpleAutocomplete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get highlightFilter() {
		return this.$$.ctx[72];
	}

	set highlightFilter(value) {
		throw new Error("<SimpleAutocomplete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

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
    Set$1 = getNative(root$1, 'Set'),
    WeakMap = getNative(root$1, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
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
    (Set$1 && getTag(new Set$1) != setTag) ||
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

/* src/components/FullscreenLayout.svelte generated by Svelte v3.46.2 */

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

// (956:6) {:else}
function create_else_block_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*title*/ ctx[17]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*title*/ ctx[17]);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*title*/ 131072) set_data_dev(t, /*title*/ ctx[17]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_8.name,
		type: "else",
		source: "(956:6) {:else}",
		ctx
	});

	return block;
}

// (954:6) {#if currpost.dims && currpost.dims.width > 0}
function create_if_block_28(ctx) {
	let t0;
	let t1;
	let t2_value = /*currpost*/ ctx[7].dims.width + "";
	let t2;
	let t3;
	let t4_value = /*currpost*/ ctx[7].dims.height + "";
	let t4;
	let t5;

	const block = {
		c: function create() {
			t0 = text(/*title*/ ctx[17]);
			t1 = text(" (");
			t2 = text(t2_value);
			t3 = text("x");
			t4 = text(t4_value);
			t5 = text(")");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, /*title*/ ctx[17]);
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
			if (dirty[0] & /*title*/ 131072) set_data_dev(t0, /*title*/ ctx[17]);
			if (dirty[0] & /*currpost*/ 128 && t2_value !== (t2_value = /*currpost*/ ctx[7].dims.width + "")) set_data_dev(t2, t2_value);
			if (dirty[0] & /*currpost*/ 128 && t4_value !== (t4_value = /*currpost*/ ctx[7].dims.height + "")) set_data_dev(t4, t4_value);
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
		source: "(954:6) {#if currpost.dims && currpost.dims.width > 0}",
		ctx
	});

	return block;
}

// (959:6) {#if currpost.subreddit}
function create_if_block_27(ctx) {
	let div;
	let p;
	let t_value = /*currpost*/ ctx[7].authorp + "";
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
			attr_dev(p, "class", "user svelte-1nqhjp3");
			add_location(p, file, 960, 10, 25735);
			attr_dev(div, "class", "subreddit");
			add_location(div, file, 959, 8, 25701);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, p);
			append_hydration_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 128 && t_value !== (t_value = /*currpost*/ ctx[7].authorp + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_27.name,
		type: "if",
		source: "(959:6) {#if currpost.subreddit}",
		ctx
	});

	return block;
}

// (990:34) 
function create_if_block_25(ctx) {
	let if_block_anchor;

	function select_block_type_3(ctx, dirty) {
		if (/*currpost*/ ctx[7].preview.img.album[/*albumindex*/ ctx[4]].is_video) return create_if_block_26;
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
		source: "(990:34) ",
		ctx
	});

	return block;
}

// (977:49) 
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
			attr_dev(video, "class", "video svelte-1nqhjp3");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[10];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[12];
			attr_dev(video, "id", "videoplayerid");
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[14]);
			add_location(video, file, 977, 8, 26455);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, video, anchor);
			if_block.m(video, null);

			if (!mounted) {
				dispose = [
					listen_dev(video, "ended", /*videoended*/ ctx[41], false, false, false),
					listen_dev(video, "dblclick", /*toggleFullscreen*/ ctx[42], false, false, false),
					listen_dev(video, "mousemove", /*toggleHideCursor*/ ctx[44], false, false, false),
					listen_dev(video, "click", /*onVideoPlayerClicked*/ ctx[43], false, false, false)
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

			if (dirty[0] & /*$autoplay*/ 1024 && video_loop_value !== (video_loop_value = !/*$autoplay*/ ctx[10])) {
				prop_dev(video, "loop", video_loop_value);
			}

			if (dirty[0] & /*$muted*/ 4096) {
				prop_dev(video, "muted", /*$muted*/ ctx[12]);
			}

			if (dirty[0] & /*hideCursor*/ 16384) {
				toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[14]);
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
		source: "(977:49) ",
		ctx
	});

	return block;
}

// (975:6) {#if currpost.is_image && !currpost.is_album}
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
			if (!src_url_equal(img.src, img_src_value = /*currpost*/ ctx[7].preview.img.default)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*currpost*/ ctx[7].title);
			set_style(img, "height", "100vh");
			set_style(img, "object-fit", "contain");
			attr_dev(img, "class", "svelte-1nqhjp3");
			add_location(img, file, 975, 8, 26287);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 128 && !src_url_equal(img.src, img_src_value = /*currpost*/ ctx[7].preview.img.default)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty[0] & /*currpost*/ 128 && img_alt_value !== (img_alt_value = /*currpost*/ ctx[7].title)) {
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
		source: "(975:6) {#if currpost.is_image && !currpost.is_album}",
		ctx
	});

	return block;
}

// (995:8) {:else}
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
			if (!src_url_equal(img.src, img_src_value = /*currpost*/ ctx[7].preview.img.album[/*albumindex*/ ctx[4]].default)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*currpost*/ ctx[7].title);
			set_style(img, "height", "100vh");
			set_style(img, "object-fit", "contain");
			attr_dev(img, "class", "svelte-1nqhjp3");
			add_location(img, file, 995, 10, 27542);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost, albumindex*/ 144 && !src_url_equal(img.src, img_src_value = /*currpost*/ ctx[7].preview.img.album[/*albumindex*/ ctx[4]].default)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty[0] & /*currpost*/ 128 && img_alt_value !== (img_alt_value = /*currpost*/ ctx[7].title)) {
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
		source: "(995:8) {:else}",
		ctx
	});

	return block;
}

// (991:8) {#if currpost.preview.img.album[albumindex].is_video}
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
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.img.album[/*albumindex*/ ctx[4]].hires)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 992, 12, 27435);
			attr_dev(video, "class", "video svelte-1nqhjp3");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[10];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[12];
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[14]);
			add_location(video, file, 991, 10, 27185);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, video, anchor);
			append_hydration_dev(video, source);

			if (!mounted) {
				dispose = [
					listen_dev(video, "ended", /*videoended*/ ctx[41], false, false, false),
					listen_dev(video, "dblclick", /*toggleFullscreen*/ ctx[42], false, false, false),
					listen_dev(video, "mousemove", /*toggleHideCursor*/ ctx[44], false, false, false),
					listen_dev(video, "click", /*onVideoPlayerClicked*/ ctx[43], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost, albumindex*/ 144 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.img.album[/*albumindex*/ ctx[4]].hires)) {
				attr_dev(source, "src", source_src_value);
			}

			if (dirty[0] & /*$autoplay*/ 1024 && video_loop_value !== (video_loop_value = !/*$autoplay*/ ctx[10])) {
				prop_dev(video, "loop", video_loop_value);
			}

			if (dirty[0] & /*$muted*/ 4096) {
				prop_dev(video, "muted", /*$muted*/ ctx[12]);
			}

			if (dirty[0] & /*hideCursor*/ 16384) {
				toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[14]);
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
		source: "(991:8) {#if currpost.preview.img.album[albumindex].is_video}",
		ctx
	});

	return block;
}

// (981:10) {:else}
function create_else_block_6(ctx) {
	let if_block0_anchor;
	let if_block1_anchor;
	let if_block0 = /*currpost*/ ctx[7].preview.vid.webm && create_if_block_24(ctx);
	let if_block1 = /*currpost*/ ctx[7].preview.vid.mp4 && create_if_block_23(ctx);

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
			if (/*currpost*/ ctx[7].preview.vid.webm) {
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

			if (/*currpost*/ ctx[7].preview.vid.mp4) {
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
		source: "(981:10) {:else}",
		ctx
	});

	return block;
}

// (979:10) {#if $lores}
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
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.lores)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 979, 12, 26747);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 128 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.lores)) {
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
		source: "(979:10) {#if $lores}",
		ctx
	});

	return block;
}

// (982:12) {#if currpost.preview.vid.webm}
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
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.webm)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 982, 14, 26867);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 128 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.webm)) {
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
		source: "(982:12) {#if currpost.preview.vid.webm}",
		ctx
	});

	return block;
}

// (985:12) {#if currpost.preview.vid.mp4}
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
			if (!src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.mp4)) attr_dev(source, "src", source_src_value);
			add_location(source, file, 985, 14, 26985);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currpost*/ 128 && !src_url_equal(source.src, source_src_value = /*currpost*/ ctx[7].preview.vid.mp4)) {
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
		source: "(985:12) {#if currpost.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (1001:4) {#if displayposts.length || posts.length}
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
				icon: /*$autoplay*/ ctx[10] ? faPause$1.faPause : faPlay$1.faPlay
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
		if (/*$imageVideo*/ ctx[11] == 0) return 0;
		if (/*$imageVideo*/ ctx[11] == 1) return 1;
		if (/*$imageVideo*/ ctx[11] == 2) return 2;
		return -1;
	}

	if (~(current_block_type_index = select_block_type_4(ctx))) {
		if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	icon3 = new Icon({
			props: {
				icon: /*$muted*/ ctx[12] ? faVolumeMute$1.faVolumeMute : faVolumeUp$1.faVolumeUp
			},
			$$inline: true
		});

	let if_block1 = /*tinygoto*/ ctx[16] && create_if_block_15(ctx);
	const if_block_creators_1 = [create_if_block_14, create_else_block_4];
	const if_blocks_1 = [];

	function select_block_type_6(ctx, dirty) {
		if (/*filterExpanded*/ ctx[25]) return 0;
		return 1;
	}

	current_block_type_index_1 = select_block_type_6(ctx);
	if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
	let if_block3 = /*filterValue*/ ctx[6] && create_if_block_13(ctx);
	let each_value_1 = /*displayposts*/ ctx[2];
	validate_each_argument(each_value_1);
	const get_key = ctx => /*post*/ ctx[106].id + /*post*/ ctx[106].url;
	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	let if_block4 = !/*tinygoto*/ ctx[16] && create_if_block_11(ctx);

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
			attr_dev(span0, "class", "btn playpause tooltip svelte-1nqhjp3");
			attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			toggle_class(span0, "play", /*$autoplay*/ ctx[10]);
			add_location(span0, file, 1003, 10, 27923);
			attr_dev(span1, "class", "btn download tooltip svelte-1nqhjp3");
			attr_dev(span1, "data-tooltip", /*downloadstr*/ ctx[20]);
			toggle_class(span1, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span1, file, 1010, 10, 28181);
			attr_dev(span2, "class", "btn dice tooltip svelte-1nqhjp3");
			attr_dev(span2, "data-tooltip", "Shuffle");
			add_location(span2, file, 1017, 10, 28424);
			attr_dev(span3, "class", "btn imagevideo tooltip svelte-1nqhjp3");
			attr_dev(span3, "data-tooltip", /*imageVideoStr*/ ctx[19]);
			add_location(span3, file, 1023, 10, 28610);
			attr_dev(span4, "class", "btn muted tooltip svelte-1nqhjp3");
			attr_dev(span4, "data-tooltip", /*mutedstr*/ ctx[23]);
			add_location(span4, file, 1035, 10, 29045);
			attr_dev(span5, "class", "btn filter tooltip svelte-1nqhjp3");
			attr_dev(span5, "data-tooltip", "Filter ( / )");
			toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			toggle_class(span5, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span5, file, 1050, 10, 29610);
			attr_dev(div0, "class", "btnwrapper svelte-1nqhjp3");
			add_location(div0, file, 1002, 8, 27888);
			attr_dev(div1, "class", "numswrapper svelte-1nqhjp3");
			add_location(div1, file, 1075, 8, 30472);
			attr_dev(div2, "class", "goto svelte-1nqhjp3");
			add_render_callback(() => /*div2_elementresize_handler*/ ctx[68].call(div2));
			toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[16]);
			toggle_class(div2, "hide", /*uiVisible*/ ctx[13] == false);
			add_location(div2, file, 1001, 6, 27764);
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
				each_blocks[i].m(div1, null);
			}

			append_hydration_dev(div1, t8);
			if (if_block4) if_block4.m(div1, null);
			div2_resize_listener = add_resize_listener(div2, /*div2_elementresize_handler*/ ctx[68].bind(div2));
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(span0, "click", /*toggleAutoPlay*/ ctx[36], false, false, false),
					listen_dev(span1, "click", downloadFiles, false, false, false),
					listen_dev(span2, "click", /*shuffleFiles*/ ctx[48], false, false, false),
					listen_dev(span3, "click", /*toggleImageVideo*/ ctx[37], false, false, false),
					listen_dev(span4, "click", /*toggleMuted*/ ctx[38], false, false, false),
					listen_dev(span5, "click", /*toggleFilter*/ ctx[47], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};
			if (dirty[0] & /*$autoplay*/ 1024) icon0_changes.icon = /*$autoplay*/ ctx[10] ? faPause$1.faPause : faPlay$1.faPlay;
			icon0.$set(icon0_changes);

			if (!current || dirty[0] & /*autoplaystr*/ 2097152) {
				attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			}

			if (dirty[0] & /*$autoplay*/ 1024) {
				toggle_class(span0, "play", /*$autoplay*/ ctx[10]);
			}

			if (!current || dirty[0] & /*downloadstr*/ 1048576) {
				attr_dev(span1, "data-tooltip", /*downloadstr*/ ctx[20]);
			}

			if (dirty[0] & /*numFavorite*/ 8) {
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
			if (dirty[0] & /*$muted*/ 4096) icon3_changes.icon = /*$muted*/ ctx[12] ? faVolumeMute$1.faVolumeMute : faVolumeUp$1.faVolumeUp;
			icon3.$set(icon3_changes);

			if (!current || dirty[0] & /*mutedstr*/ 8388608) {
				attr_dev(span4, "data-tooltip", /*mutedstr*/ ctx[23]);
			}

			if (/*tinygoto*/ ctx[16]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*tinygoto*/ 65536) {
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

			if (dirty[0] & /*filterExpanded*/ 33554432) {
				toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			}

			if (dirty[0] & /*numFavorite*/ 8) {
				toggle_class(span5, "dlready", /*numFavorite*/ ctx[3]);
			}

			if (/*filterValue*/ ctx[6]) {
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

			if (dirty[0] & /*index, displayposts, currpost*/ 644 | dirty[1] & /*goto*/ 256) {
				each_value_1 = /*displayposts*/ ctx[2];
				validate_each_argument(each_value_1);
				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, div1, destroy_block, create_each_block_1, t8, get_each_context_1);
			}

			if (!/*tinygoto*/ ctx[16]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty[0] & /*tinygoto*/ 65536) {
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

			if (dirty[0] & /*tinygoto*/ 65536) {
				toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[16]);
			}

			if (dirty[0] & /*uiVisible*/ 8192) {
				toggle_class(div2, "hide", /*uiVisible*/ ctx[13] == false);
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
		source: "(1001:4) {#if displayposts.length || posts.length}",
		ctx
	});

	return block;
}

// (1032:39) 
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
		source: "(1032:39) ",
		ctx
	});

	return block;
}

// (1030:39) 
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
		source: "(1030:39) ",
		ctx
	});

	return block;
}

// (1028:12) {#if $imageVideo == 0}
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
		source: "(1028:12) {#if $imageVideo == 0}",
		ctx
	});

	return block;
}

// (1042:10) {#if tinygoto}
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
		if (/*loading*/ ctx[5]) return 0;
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
			attr_dev(span, "class", "btn reload tooltip svelte-1nqhjp3");
			attr_dev(span, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span, "loaderror", /*loadError*/ ctx[28]);
			add_location(span, file, 1042, 12, 29286);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			if_blocks[current_block_type_index].m(span, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(span, "click", /*loadMore*/ ctx[35], false, false, false);
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

			if (dirty[0] & /*loadError*/ 268435456) {
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
		source: "(1042:10) {#if tinygoto}",
		ctx
	});

	return block;
}

// (1046:14) {:else}
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
		source: "(1046:14) {:else}",
		ctx
	});

	return block;
}

// (1044:14) {#if loading}
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
		source: "(1044:14) {#if loading}",
		ctx
	});

	return block;
}

// (1066:12) {:else}
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
		source: "(1066:12) {:else}",
		ctx
	});

	return block;
}

// (1058:12) {#if filterExpanded}
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
			attr_dev(input, "class", "svelte-1nqhjp3");
			add_location(input, file, 1058, 14, 29910);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, input, anchor);
			set_input_value(input, /*filterValue*/ ctx[6]);

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_input_handler*/ ctx[65]),
					listen_dev(input, "click", stop_propagation(/*click_handler*/ ctx[62]), false, false, true),
					listen_dev(input, "keydown", stop_propagation(/*keydown_handler*/ ctx[63]), false, false, true)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*filterValue*/ 64 && input.value !== /*filterValue*/ ctx[6]) {
				set_input_value(input, /*filterValue*/ ctx[6]);
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
		source: "(1058:12) {#if filterExpanded}",
		ctx
	});

	return block;
}

// (1070:10) {#if filterValue}
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
			attr_dev(p, "class", "svelte-1nqhjp3");
			add_location(p, file, 1071, 14, 30391);
			attr_dev(span, "class", "btn deepsearch tooltip svelte-1nqhjp3");
			attr_dev(span, "data-tooltip", /*deepsearchstr*/ ctx[22]);
			add_location(span, file, 1070, 12, 30280);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			append_hydration_dev(span, p);
			append_hydration_dev(p, t);

			if (!mounted) {
				dispose = listen_dev(span, "click", /*gotoDeepSearch*/ ctx[46], false, false, false);
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
		source: "(1070:10) {#if filterValue}",
		ctx
	});

	return block;
}

// (1077:10) {#each displayposts as post, i (post.id + post.url)}
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
			attr_dev(img, "class", "small svelte-1nqhjp3");
			attr_dev(img, "alt", img_alt_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].title);
			if (!src_url_equal(img.src, img_src_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].thumbnail)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1084, 14, 30871);
			attr_dev(p, "class", "small svelte-1nqhjp3");
			toggle_class(p, "curr", /*index*/ ctx[9] === /*i*/ ctx[108]);
			toggle_class(p, "album", /*currpost*/ ctx[7].is_album);
			add_location(p, file, 1085, 14, 30969);
			attr_dev(span, "class", "nums svelte-1nqhjp3");
			toggle_class(span, "currnum", /*index*/ ctx[9] === /*i*/ ctx[108]);
			toggle_class(span, "album", /*currpost*/ ctx[7].is_album);
			toggle_class(span, "favorite", /*displayposts*/ ctx[2][/*i*/ ctx[108]].favorite);
			toggle_class(span, "over18", /*displayposts*/ ctx[2][/*i*/ ctx[108]].over18);
			add_location(span, file, 1077, 12, 30573);
			this.first = span;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, span, anchor);
			append_hydration_dev(span, img);
			append_hydration_dev(span, t0);
			append_hydration_dev(span, p);
			append_hydration_dev(p, t1);

			if (!mounted) {
				dispose = listen_dev(span, "click", click_handler_1, false, false, false);
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

			if (dirty[0] & /*index, displayposts*/ 516) {
				toggle_class(p, "curr", /*index*/ ctx[9] === /*i*/ ctx[108]);
			}

			if (dirty[0] & /*currpost*/ 128) {
				toggle_class(p, "album", /*currpost*/ ctx[7].is_album);
			}

			if (dirty[0] & /*index, displayposts*/ 516) {
				toggle_class(span, "currnum", /*index*/ ctx[9] === /*i*/ ctx[108]);
			}

			if (dirty[0] & /*currpost*/ 128) {
				toggle_class(span, "album", /*currpost*/ ctx[7].is_album);
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
		source: "(1077:10) {#each displayposts as post, i (post.id + post.url)}",
		ctx
	});

	return block;
}

// (1089:10) {#if !tinygoto}
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
		if (/*loading*/ ctx[5]) return 0;
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
			attr_dev(p, "class", "svelte-1nqhjp3");
			add_location(p, file, 1090, 14, 31211);
			attr_dev(span0, "class", "displayinfo svelte-1nqhjp3");
			toggle_class(span0, "filterExpanded", /*filterValue*/ ctx[6]);
			add_location(span0, file, 1089, 12, 31133);
			attr_dev(span1, "class", "btn reload tooltip svelte-1nqhjp3");
			attr_dev(span1, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span1, "loaderror", /*loadError*/ ctx[28]);
			add_location(span1, file, 1092, 12, 31287);
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
				dispose = listen_dev(span1, "click", /*loadMore*/ ctx[35], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty[0] & /*displayposts*/ 4) && t0_value !== (t0_value = /*displayposts*/ ctx[2].length + "")) set_data_dev(t0, t0_value);
			if ((!current || dirty[0] & /*posts*/ 1) && t2_value !== (t2_value = /*posts*/ ctx[0].length + "")) set_data_dev(t2, t2_value);

			if (dirty[0] & /*filterValue*/ 64) {
				toggle_class(span0, "filterExpanded", /*filterValue*/ ctx[6]);
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

			if (dirty[0] & /*loadError*/ 268435456) {
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
		source: "(1089:10) {#if !tinygoto}",
		ctx
	});

	return block;
}

// (1096:14) {:else}
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
		source: "(1096:14) {:else}",
		ctx
	});

	return block;
}

// (1094:14) {#if loading}
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
		source: "(1094:14) {#if loading}",
		ctx
	});

	return block;
}

// (1106:0) {#if $prefetch}
function create_if_block(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = /*nexturls*/ ctx[8];
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
			add_location(div, file, 1106, 2, 31673);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls, $lores*/ 536871168 | dirty[1] & /*$hires*/ 2) {
				each_value = /*nexturls*/ ctx[8];
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
		source: "(1106:0) {#if $prefetch}",
		ctx
	});

	return block;
}

// (1120:8) {:else}
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
			add_location(img, file, 1120, 10, 32224);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].default)) {
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
		source: "(1120:8) {:else}",
		ctx
	});

	return block;
}

// (1118:34) 
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
			add_location(img, file, 1118, 10, 32141);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.default)) {
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
		source: "(1118:34) ",
		ctx
	});

	return block;
}

// (1116:8) {#if nexturl.is_album}
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
			add_location(img, file, 1116, 10, 32030);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].default)) {
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
		source: "(1116:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1109:6) {#if $hires}
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
		source: "(1109:6) {#if $hires}",
		ctx
	});

	return block;
}

// (1112:8) {:else}
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
			add_location(img, file, 1112, 10, 31914);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].url)) {
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
		source: "(1112:8) {:else}",
		ctx
	});

	return block;
}

// (1110:8) {#if nexturl.is_album}
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
			add_location(img, file, 1110, 10, 31818);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(img.src, img_src_value = /*nexturl*/ ctx[103].preview.img.album[0].hires)) {
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
		source: "(1110:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1124:6) {#if nexturl.is_video}
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
			add_location(video, file, 1124, 8, 32332);
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
		source: "(1124:6) {#if nexturl.is_video}",
		ctx
	});

	return block;
}

// (1136:12) {:else}
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
			add_location(source, file, 1136, 14, 32780);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].default)) {
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
		source: "(1136:12) {:else}",
		ctx
	});

	return block;
}

// (1129:12) {#if nexturl.preview}
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
		source: "(1129:12) {#if nexturl.preview}",
		ctx
	});

	return block;
}

// (1126:10) {#if $lores}
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
			add_location(source, file, 1126, 12, 32407);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.lores)) {
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
		source: "(1126:10) {#if $lores}",
		ctx
	});

	return block;
}

// (1130:14) {#if nexturl.preview.vid.webm}
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
			add_location(source, file, 1130, 16, 32563);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.webm)) {
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
		source: "(1130:14) {#if nexturl.preview.vid.webm}",
		ctx
	});

	return block;
}

// (1133:14) {#if nexturl.preview.vid.mp4}
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
			add_location(source, file, 1133, 16, 32685);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, source, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*nexturls*/ 256 && !src_url_equal(source.src, source_src_value = /*nexturl*/ ctx[103].preview.vid.mp4)) {
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
		source: "(1133:14) {#if nexturl.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (1108:4) {#each nexturls as nexturl (nexturl.preview.img.default)}
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
		source: "(1108:4) {#each nexturls as nexturl (nexturl.preview.img.default)}",
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
		if (/*currpost*/ ctx[7].dims && /*currpost*/ ctx[7].dims.width > 0) return create_if_block_28;
		return create_else_block_8;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*currpost*/ ctx[7].subreddit && create_if_block_27(ctx);

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
		if (/*currpost*/ ctx[7].is_image && !/*currpost*/ ctx[7].is_album) return create_if_block_20;
		if (/*currpost*/ ctx[7].is_video && /*renderVideo*/ ctx[27]) return create_if_block_21;
		if (/*currpost*/ ctx[7].is_album) return create_if_block_25;
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
			const head_nodes = query_selector_all('[data-svelte=\"svelte-ppmq07\"]', document_1.head);
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
			attr_dev(div0, "class", "title svelte-1nqhjp3");
			toggle_class(div0, "hide", !/*uiVisible*/ ctx[13] || !/*titleVisible*/ ctx[15]);
			toggle_class(div0, "favorite", /*currpost*/ ctx[7].favorite);
			add_location(div0, file, 952, 4, 25404);
			attr_dev(span, "class", "btn cog svelte-1nqhjp3");
			toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			toggle_class(span, "hide", /*uiVisible*/ ctx[13] == false);
			add_location(span, file, 966, 6, 25852);
			attr_dev(div1, "class", "div svelte-1nqhjp3");
			toggle_class(div1, "hide", /*uiVisible*/ ctx[13] == false);
			add_location(div1, file, 969, 6, 26035);
			attr_dev(div2, "class", "settings svelte-1nqhjp3");
			add_location(div2, file, 964, 4, 25816);
			attr_dev(div3, "class", "main-media-container svelte-1nqhjp3");
			add_location(div3, file, 973, 4, 26192);
			attr_dev(div4, "class", "hero svelte-1nqhjp3");
			add_location(div4, file, 951, 2, 25381);
			attr_dev(div5, "class", "wrapper svelte-1nqhjp3");
			toggle_class(div5, "hide-cursor", /*hideCursor*/ ctx[14]);
			add_location(div5, file, 950, 0, 25324);
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
					listen_dev(window_1, "keydown", /*keydown*/ ctx[50], false, false, false),
					listen_dev(window_1, "wheel", /*wheel*/ ctx[49], false, false, false),
					listen_dev(span, "click", /*toggleSettings*/ ctx[45], false, false, false)
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

			if (/*currpost*/ ctx[7].subreddit) {
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

			if (dirty[0] & /*uiVisible, titleVisible*/ 40960) {
				toggle_class(div0, "hide", !/*uiVisible*/ ctx[13] || !/*titleVisible*/ ctx[15]);
			}

			if (dirty[0] & /*currpost*/ 128) {
				toggle_class(div0, "favorite", /*currpost*/ ctx[7].favorite);
			}

			if (dirty[0] & /*showSettings*/ 67108864) {
				toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			}

			if (dirty[0] & /*uiVisible*/ 8192) {
				toggle_class(span, "hide", /*uiVisible*/ ctx[13] == false);
			}

			const settings_changes = {};

			if (!updating_showSettings && dirty[0] & /*showSettings*/ 67108864) {
				updating_showSettings = true;
				settings_changes.showSettings = /*showSettings*/ ctx[26];
				add_flush_callback(() => updating_showSettings = false);
			}

			settings.$set(settings_changes);

			if (dirty[0] & /*uiVisible*/ 8192) {
				toggle_class(div1, "hide", /*uiVisible*/ ctx[13] == false);
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

			if (dirty[0] & /*hideCursor*/ 16384) {
				toggle_class(div5, "hide-cursor", /*hideCursor*/ ctx[14]);
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
	let $apiKey;
	let $portraitLandscape;
	let $imageVideo;
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
	component_subscribe($$self, autoplay, $$value => $$invalidate(10, $autoplay = $$value));
	validate_store(favorite, 'favorite');
	component_subscribe($$self, favorite, $$value => $$invalidate(76, $favorite = $$value));
	validate_store(over18, 'over18');
	component_subscribe($$self, over18, $$value => $$invalidate(57, $over18 = $$value));
	validate_store(apiKey, 'apiKey');
	component_subscribe($$self, apiKey, $$value => $$invalidate(58, $apiKey = $$value));
	validate_store(portraitLandscape, 'portraitLandscape');
	component_subscribe($$self, portraitLandscape, $$value => $$invalidate(59, $portraitLandscape = $$value));
	validate_store(imageVideo, 'imageVideo');
	component_subscribe($$self, imageVideo, $$value => $$invalidate(11, $imageVideo = $$value));
	validate_store(prefetchNum, 'prefetchNum');
	component_subscribe($$self, prefetchNum, $$value => $$invalidate(60, $prefetchNum = $$value));
	validate_store(muted, 'muted');
	component_subscribe($$self, muted, $$value => $$invalidate(12, $muted = $$value));
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
		$$invalidate(5, loading = true);
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
		$$invalidate(5, loading = false);
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

	// Only show settings if we have no valid API key AND no posts loaded
	// Settings window will only appear when user manually clicks the settings button
	// No automatic popup on refresh or load
	function goto$1(i) {
		$$invalidate(4, albumindex = 0);
		$$invalidate(9, index = i);
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
			$$invalidate(9, index = displayposts.length - 1);
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

		$$invalidate(9, index += 1);
		if ($autoplay) stopAndStartAutoPlay();
	}

	async function itemPrev() {
		if (index === 0) return;
		$$invalidate(9, index -= 1);
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
			$$invalidate(14, hideCursor = false); // Ensure cursor is visible

			if (hideCursorTimerId) {
				clearTimeout(hideCursorTimerId); // Clear any lingering timer
				hideCursorTimerId = 0;
			}

			return; // Stop here, no further action needed
		}

		// If the UI is hidden, we manage cursor visibility based on inactivity.
		$$invalidate(14, hideCursor = false); // Show cursor immediately on mouse movement

		if (hideCursorTimerId) {
			clearTimeout(hideCursorTimerId); // Clear previous timer
		}

		hideCursorTimerId = setTimeout(
			() => {
				hideCursorTimerId = 0;
				$$invalidate(14, hideCursor = true); // Hide cursor after 3 seconds of inactivity
			},
			3000
		);
	}

	function toggleTitleVisibility() {
		$$invalidate(15, titleVisible = !titleVisible);
	}

	function toggleUIVisiblity() {
		$$invalidate(13, uiVisible = !uiVisible);
		showhidestr = uiVisible ? "Hide (h)" : "Show (h)";

		if (hideCursorTimerId) {
			clearTimeout(hideCursorTimerId);
			hideCursorTimerId = 0;
		}

		if (!uiVisible) {
			$$invalidate(14, hideCursor = true);
		} else {
			$$invalidate(14, hideCursor = false);
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
		$$invalidate(6, filterValue);
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
		faImage: faImage$1.faImage,
		faVideo: faVideo$1.faVideo,
		faFav: faStar$2.faStar,
		faUnFav: faStar$1.faStar,
		faSearch: faSearch$1.faSearch,
		faSync: faSync$1.faSync,
		faSpinner: faSpinner$1.faSpinner,
		faPlusCircle: faPlusCircle.faPlusCircle,
		faMinusCircle: faMinusCircle$1.faMinusCircle,
		faShow: faEye.faEye,
		faHide: faEyeSlash$1.faEyeSlash,
		faColumns: faTh$1.faTh,
		faFullscreen: faExpandArrowsAlt$1.faExpandArrowsAlt,
		faPortrait: faMobileAlt$1.faMobileAlt,
		faLandscape: faDesktop$1.faDesktop,
		AutoComplete: SimpleAutocomplete,
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
		$apiKey,
		$portraitLandscape,
		$imageVideo,
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
		if ('uiVisible' in $$props) $$invalidate(13, uiVisible = $$props.uiVisible);
		if ('hideCursor' in $$props) $$invalidate(14, hideCursor = $$props.hideCursor);
		if ('hideCursorTimerId' in $$props) hideCursorTimerId = $$props.hideCursorTimerId;
		if ('titleVisible' in $$props) $$invalidate(15, titleVisible = $$props.titleVisible);
		if ('numFavorite' in $$props) $$invalidate(3, numFavorite = $$props.numFavorite);
		if ('tinygoto' in $$props) $$invalidate(16, tinygoto = $$props.tinygoto);
		if ('title' in $$props) $$invalidate(17, title = $$props.title);
		if ('albumindex' in $$props) $$invalidate(4, albumindex = $$props.albumindex);
		if ('blogIdentifier' in $$props) blogIdentifier = $$props.blogIdentifier;
		if ('loading' in $$props) $$invalidate(5, loading = $$props.loading);
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
		if ('filterValue' in $$props) $$invalidate(6, filterValue = $$props.filterValue);
		if ('subredditSearchValue' in $$props) $$invalidate(80, subredditSearchValue = $$props.subredditSearchValue);
		if ('showSettings' in $$props) $$invalidate(26, showSettings = $$props.showSettings);
		if ('currpost' in $$props) $$invalidate(7, currpost = $$props.currpost);
		if ('nexturls' in $$props) $$invalidate(8, nexturls = $$props.nexturls);
		if ('index' in $$props) $$invalidate(9, index = $$props.index);
		if ('renderVideo' in $$props) $$invalidate(27, renderVideo = $$props.renderVideo);
		if ('skipRenderVideo' in $$props) $$invalidate(56, skipRenderVideo = $$props.skipRenderVideo);
		if ('loadError' in $$props) $$invalidate(28, loadError = $$props.loadError);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*posts, filterValue, $imageVideo*/ 2113 | $$self.$$.dirty[1] & /*$over18, $portraitLandscape*/ 335544320) {
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

		if ($$self.$$.dirty[0] & /*displayposts, index, currpost, albumindex, nexturls, filterValue*/ 980 | $$self.$$.dirty[1] & /*$prefetchNum, res*/ 537919488) {
			{
				if (displayposts[index]) {
					$$invalidate(7, currpost = JSON.parse(JSON.stringify(displayposts[index])));
					let _nexturls = [];
					_nexturls = [currpost, ...displayposts.slice(index + 1, index + $prefetchNum + 1)];

					$$invalidate(8, nexturls = _nexturls.map(function (item) {
						if (item.is_album) {
							return item.preview.img.album.slice(albumindex, albumindex + $prefetchNum + 1);
						} else {
							return item;
						}
					}).flat());

					console.log(nexturls);
					$$invalidate(8, nexturls = uniqBy(nexturls, () => item => item.preview.img.default));
				} else if (filterValue) {
					// We're here because user filtered the list
					// Unfortunately the filtered list is smaller than the current index
					// set index to last item
					if (displayposts.length > 0) {
						console.log("setting index from ", index, " to ", displayposts.length);
						$$invalidate(9, index = displayposts.length - 1);
						console.log("loading more ..");
						loadMore();
					} else {
						// nothing was filtered
						$$invalidate(9, index = 0);

						$$invalidate(7, currpost = {
							title: "Nothing to show. Try changing filters or tweak/update URL."
						});
					}
				} else {
					if (res && res.res.ok) {
						// No media found
						$$invalidate(7, currpost = {
							title: "Nothing to show. Try changing filters or tweak/update URL."
						});
					} else if (res && !res.res.ok) {
						// Check if it's an API key error
						console.log("API Error Response:", res);

						// Handle API errors without automatically showing settings
						res.res.res || res.res || "";

						$$invalidate(7, currpost = { title: "Error loading posts" });
					} else {
						// Default
						$$invalidate(7, currpost = { title: "Loading .." });
					}

					$$invalidate(8, nexturls = []);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*currpost, albumindex*/ 144) {
			{
				if (currpost.is_album) {
					$$invalidate(17, title = `(${albumindex + 1}/${currpost.preview.img.album.length}) ${currpost.title}`);
				} else {
					$$invalidate(17, title = currpost.title);
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
					$$invalidate(16, tinygoto = numGotoControlsRows > 3);
				} else if ($gotoElWidth > 800) {
					// padding on right side
					let numGotoControlsInOneRow = ($gotoElWidth - (154 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					$$invalidate(16, tinygoto = numGotoControlsRows > 3);
				} else {
					// no padding
					let numGotoControlsInOneRow = ($gotoElWidth - (14 + 14)) / 32;

					let numGotoControlsRows = (displayposts.length + 5) / numGotoControlsInOneRow;
					$$invalidate(16, tinygoto = numGotoControlsRows > 3);
				}
			}
		}

		if ($$self.$$.dirty[1] & /*res*/ 1048576) {
			$$invalidate(28, loadError = res && !res.res.ok);
		}

		if ($$self.$$.dirty[0] & /*currpost*/ 128 | $$self.$$.dirty[1] & /*skipRenderVideo*/ 33554432) {
			{
				if (!skipRenderVideo) reMountVideo(currpost.preview);
				$$invalidate(56, skipRenderVideo = false);
			}
		}

		if ($$self.$$.dirty[0] & /*displayposts, numFavorite, $autoplay, filterValue, $muted, $imageVideo*/ 7244 | $$self.$$.dirty[1] & /*$over18, $portraitLandscape*/ 335544320) {
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

		if ($$self.$$.dirty[0] & /*posts, loading*/ 33 | $$self.$$.dirty[1] & /*$apiKey*/ 134217728) {
			// Watch for API key changes and reload data when a valid key is set
			if ($apiKey && $apiKey !== '' && posts.length === 0 && !loading) {
				// Only reload if we have a valid API key, no posts loaded, and not currently loading
				if ($apiKey) {
					reloadData();
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
		loading,
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
		$apiKey,
		$portraitLandscape,
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

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*params*/ ctx[53] === undefined && !('params' in props)) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'params'");
		}

		if (/*slugstr*/ ctx[1] === undefined && !('slugstr' in props)) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'slugstr'");
		}

		if (/*res*/ ctx[51] === undefined && !('res' in props)) {
			console_1.warn("<FullscreenLayout> was created without expected prop 'res'");
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVsbHNjcmVlbkxheW91dC41MjU3NDdhNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVVcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVNdXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGF1c2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRG9uYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4cGFuZEFsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEaWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBob3RvVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW1hZ2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMvZmFTdGFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWludXNDaXJjbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXllU2xhc2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhwYW5kQXJyb3dzQWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1vYmlsZUFsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEZXNrdG9wLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdmVsdGUtYXV0b2NvbXBsZXRlL3NyYy9TaW1wbGVBdXRvY29tcGxldGUuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC5zaHVmZmxlL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1waXBlYWJsZS1zdG9yZS9pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvc3RvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXBpcGVhYmxlLXN0b3JlL29wZXJhdG9ycy9kZWJvdW5jZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvb3BlcmF0b3JzL3N0YXJ0V2l0aC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Z1bGxzY3JlZW5MYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBUdW1ibHIgQVBJIGtleVxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnT0F1dGggQ29uc3VtZXIgS2V5IEdvZXMgSGVyZSc7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd2b2x1bWUtdXAnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMjgnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yMTUuMDMgNzEuMDVMMTI2LjA2IDE2MEgyNGMtMTMuMjYgMC0yNCAxMC43NC0yNCAyNHYxNDRjMCAxMy4yNSAxMC43NCAyNCAyNCAyNGgxMDIuMDZsODguOTcgODguOTVjMTUuMDMgMTUuMDMgNDAuOTcgNC40NyA0MC45Ny0xNi45N1Y4OC4wMmMwLTIxLjQ2LTI1Ljk2LTMxLjk4LTQwLjk3LTE2Ljk3em0yMzMuMzItNTEuMDhjLTExLjE3LTcuMzMtMjYuMTgtNC4yNC0zMy41MSA2Ljk1LTcuMzQgMTEuMTctNC4yMiAyNi4xOCA2Ljk1IDMzLjUxIDY2LjI3IDQzLjQ5IDEwNS44MiAxMTYuNiAxMDUuODIgMTk1LjU4IDAgNzguOTgtMzkuNTUgMTUyLjA5LTEwNS44MiAxOTUuNTgtMTEuMTcgNy4zMi0xNC4yOSAyMi4zNC02Ljk1IDMzLjUgNy4wNCAxMC43MSAyMS45MyAxNC41NiAzMy41MSA2Ljk1QzUyOC4yNyA0MzkuNTggNTc2IDM1MS4zMyA1NzYgMjU2UzUyOC4yNyA3Mi40MyA0NDguMzUgMTkuOTd6TTQ4MCAyNTZjMC02My41My0zMi4wNi0xMjEuOTQtODUuNzctMTU2LjI0LTExLjE5LTcuMTQtMjYuMDMtMy44Mi0zMy4xMiA3LjQ2cy0zLjc4IDI2LjIxIDcuNDEgMzMuMzZDNDA4LjI3IDE2NS45NyA0MzIgMjA5LjExIDQzMiAyNTZzLTIzLjczIDkwLjAzLTYzLjQ4IDExNS40MmMtMTEuMTkgNy4xNC0xNC41IDIyLjA3LTcuNDEgMzMuMzYgNi41MSAxMC4zNiAyMS4xMiAxNS4xNCAzMy4xMiA3LjQ2QzQ0Ny45NCAzNzcuOTQgNDgwIDMxOS41NCA0ODAgMjU2em0tMTQxLjc3LTc2Ljg3Yy0xMS41OC02LjMzLTI2LjE5LTIuMTYtMzIuNjEgOS40NS02LjM5IDExLjYxLTIuMTYgMjYuMiA5LjQ1IDMyLjYxQzMyNy45OCAyMjguMjggMzM2IDI0MS42MyAzMzYgMjU2YzAgMTQuMzgtOC4wMiAyNy43Mi0yMC45MiAzNC44MS0xMS42MSA2LjQxLTE1Ljg0IDIxLTkuNDUgMzIuNjEgNi40MyAxMS42NiAyMS4wNSAxNS44IDMyLjYxIDkuNDUgMjguMjMtMTUuNTUgNDUuNzctNDUgNDUuNzctNzYuODhzLTE3LjU0LTYxLjMyLTQ1Ljc4LTc2Ljg2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVZvbHVtZVVwID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3ZvbHVtZS1tdXRlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNmE5JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3pNNDYxLjY0IDI1Nmw0NS42NC00NS42NGM2LjMtNi4zIDYuMy0xNi41MiAwLTIyLjgybC0yMi44Mi0yMi44MmMtNi4zLTYuMy0xNi41Mi02LjMtMjIuODIgMEw0MTYgMjEwLjM2bC00NS42NC00NS42NGMtNi4zLTYuMy0xNi41Mi02LjMtMjIuODIgMGwtMjIuODIgMjIuODJjLTYuMyA2LjMtNi4zIDE2LjUyIDAgMjIuODJMMzcwLjM2IDI1NmwtNDUuNjMgNDUuNjNjLTYuMyA2LjMtNi4zIDE2LjUyIDAgMjIuODJsMjIuODIgMjIuODJjNi4zIDYuMyAxNi41MiA2LjMgMjIuODIgMEw0MTYgMzAxLjY0bDQ1LjY0IDQ1LjY0YzYuMyA2LjMgMTYuNTIgNi4zIDIyLjgyIDBsMjIuODItMjIuODJjNi4zLTYuMyA2LjMtMTYuNTIgMC0yMi44Mkw0NjEuNjQgMjU2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVZvbHVtZU11dGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAncGxheSc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA0Yic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQyNC40IDIxNC43TDcyLjQgNi42QzQzLjgtMTAuMyAwIDYuMSAwIDQ3LjlWNDY0YzAgMzcuNSA0MC43IDYwLjEgNzIuNCA0MS4zbDM1Mi0yMDhjMzEuNC0xOC41IDMxLjUtNjQuMSAwLTgyLjZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUGxheSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwYXVzZSc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA0Yyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE0NCA0NzlINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4Vjc5YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDk2YzI2LjUgMCA0OCAyMS41IDQ4IDQ4djM1MmMwIDI2LjUtMjEuNSA0OC00OCA0OHptMzA0LTQ4Vjc5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC05NmMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVBhdXNlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2RvbmF0ZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjRiOSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI1NiA0MTZjMTE0LjkgMCAyMDgtOTMuMSAyMDgtMjA4UzM3MC45IDAgMjU2IDAgNDggOTMuMSA0OCAyMDhzOTMuMSAyMDggMjA4IDIwOHpNMjMzLjggOTcuNFY4MC42YzAtOS4yIDcuNC0xNi42IDE2LjYtMTYuNmgxMS4xYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnYxN2MxNS41LjggMzAuNSA2LjEgNDMgMTUuNCA1LjYgNC4xIDYuMiAxMi4zIDEuMiAxNy4xTDMwNiAxNDUuNmMtMy44IDMuNy05LjUgMy44LTE0IDEtNS40LTMuNC0xMS40LTUuMS0xNy44LTUuMWgtMzguOWMtOSAwLTE2LjMgOC4yLTE2LjMgMTguMyAwIDguMiA1IDE1LjUgMTIuMSAxNy42bDYyLjMgMTguN2MyNS43IDcuNyA0My43IDMyLjQgNDMuNyA2MC4xIDAgMzQtMjYuNCA2MS41LTU5LjEgNjIuNHYxNi44YzAgOS4yLTcuNCAxNi42LTE2LjYgMTYuNmgtMTEuMWMtOS4yIDAtMTYuNi03LjQtMTYuNi0xNi42di0xN2MtMTUuNS0uOC0zMC41LTYuMS00My0xNS40LTUuNi00LjEtNi4yLTEyLjMtMS4yLTE3LjFsMTYuMy0xNS41YzMuOC0zLjcgOS41LTMuOCAxNC0xIDUuNCAzLjQgMTEuNCA1LjEgMTcuOCA1LjFoMzguOWM5IDAgMTYuMy04LjIgMTYuMy0xOC4zIDAtOC4yLTUtMTUuNS0xMi4xLTE3LjZsLTYyLjMtMTguN2MtMjUuNy03LjctNDMuNy0zMi40LTQzLjctNjAuMS4xLTM0IDI2LjQtNjEuNSA1OS4xLTYyLjR6TTQ4MCAzNTJoLTMyLjVjLTE5LjYgMjYtNDQuNiA0Ny43LTczIDY0aDYzLjhjNS4zIDAgOS42IDMuNiA5LjYgOHYxNmMwIDQuNC00LjMgOC05LjYgOEg3My42Yy01LjMgMC05LjYtMy42LTkuNi04di0xNmMwLTQuNCA0LjMtOCA5LjYtOGg2My44Yy0yOC40LTE2LjMtNTMuMy0zOC03My02NEgzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2OTZjMCAxNy43IDE0LjMgMzIgMzIgMzJoNDQ4YzE3LjcgMCAzMi0xNC4zIDMyLTMydi05NmMwLTE3LjctMTQuMy0zMi0zMi0zMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFEb25hdGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZXhwYW5kLWFsdCc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjQyNCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTIxMi42ODYgMzE1LjMxNEwxMjAgNDA4bDMyLjkyMiAzMS4wMjljMTUuMTIgMTUuMTIgNC40MTIgNDAuOTcxLTE2Ljk3IDQwLjk3MWgtMTEyQzEwLjY5NyA0ODAgMCA0NjkuMjU1IDAgNDU2VjM0NGMwLTIxLjM4MiAyNS44MDMtMzIuMDkgNDAuOTIyLTE2Ljk3MUw3MiAzNjBsOTIuNjg2LTkyLjY4NmM2LjI0OC02LjI0OCAxNi4zNzktNi4yNDggMjIuNjI3IDBsMjUuMzczIDI1LjM3M2M2LjI0OSA2LjI0OCA2LjI0OSAxNi4zNzggMCAyMi42Mjd6bTIyLjYyOC0xMTguNjI4TDMyOCAxMDRsLTMyLjkyMi0zMS4wMjlDMjc5Ljk1OCA1Ny44NTEgMjkwLjY2NiAzMiAzMTIuMDQ4IDMyaDExMkM0MzcuMzAzIDMyIDQ0OCA0Mi43NDUgNDQ4IDU2djExMmMwIDIxLjM4Mi0yNS44MDMgMzIuMDktNDAuOTIyIDE2Ljk3MUwzNzYgMTUybC05Mi42ODYgOTIuNjg2Yy02LjI0OCA2LjI0OC0xNi4zNzkgNi4yNDgtMjIuNjI3IDBsLTI1LjM3My0yNS4zNzNjLTYuMjQ5LTYuMjQ4LTYuMjQ5LTE2LjM3OCAwLTIyLjYyN3onO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFFeHBhbmRBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZGljZSc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjUyMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTU5MiAxOTJINDczLjI2YzEyLjY5IDI5LjU5IDcuMTIgNjUuMi0xNyA4OS4zMkwzMjAgNDE3LjU4VjQ2NGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDIyNGMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjI0MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek00ODAgMzc2Yy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHptLTQ2LjM3LTE4Ni43TDI1OC43IDE0LjM3Yy0xOS4xNi0xOS4xNi01MC4yMy0xOS4xNi02OS4zOSAwTDE0LjM3IDE4OS4zYy0xOS4xNiAxOS4xNi0xOS4xNiA1MC4yMyAwIDY5LjM5TDE4OS4zIDQzMy42M2MxOS4xNiAxOS4xNiA1MC4yMyAxOS4xNiA2OS4zOSAwTDQzMy42MyAyNTguN2MxOS4xNi0xOS4xNyAxOS4xNi01MC4yNCAwLTY5LjR6TTk2IDI0OGMtMTMuMjUgMC0yNC0xMC43NS0yNC0yNCAwLTEzLjI2IDEwLjc1LTI0IDI0LTI0czI0IDEwLjc0IDI0IDI0YzAgMTMuMjUtMTAuNzUgMjQtMjQgMjR6bTEyOCAxMjhjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0em0wLTEyOGMtMTMuMjUgMC0yNC0xMC43NS0yNC0yNCAwLTEzLjI2IDEwLjc1LTI0IDI0LTI0czI0IDEwLjc0IDI0IDI0YzAgMTMuMjUtMTAuNzUgMjQtMjQgMjR6bTAtMTI4Yy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHptMTI4IDEyOGMtMTMuMjUgMC0yNC0xMC43NS0yNC0yNCAwLTEzLjI2IDEwLjc1LTI0IDI0LTI0czI0IDEwLjc0IDI0IDI0YzAgMTMuMjUtMTAuNzUgMjQtMjQgMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRGljZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwaG90by12aWRlbyc7XG52YXIgd2lkdGggPSA2NDA7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjg3Yyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTYwOCAwSDE2MGEzMiAzMiAwIDAgMC0zMiAzMnY5NmgxNjBWNjRoMTkydjMyMGgxMjhhMzIgMzIgMCAwIDAgMzItMzJWMzJhMzIgMzIgMCAwIDAtMzItMzJ6TTIzMiAxMDNhOSA5IDAgMCAxLTkgOWgtMzBhOSA5IDAgMCAxLTktOVY3M2E5IDkgMCAwIDEgOS05aDMwYTkgOSAwIDAgMSA5IDl6bTM1MiAyMDhhOSA5IDAgMCAxLTkgOWgtMzBhOSA5IDAgMCAxLTktOXYtMzBhOSA5IDAgMCAxIDktOWgzMGE5IDkgMCAwIDEgOSA5em0wLTEwNGE5IDkgMCAwIDEtOSA5aC0zMGE5IDkgMCAwIDEtOS05di0zMGE5IDkgMCAwIDEgOS05aDMwYTkgOSAwIDAgMSA5IDl6bTAtMTA0YTkgOSAwIDAgMS05IDloLTMwYTkgOSAwIDAgMS05LTlWNzNhOSA5IDAgMCAxIDktOWgzMGE5IDkgMCAwIDEgOSA5em0tMTY4IDU3SDMyYTMyIDMyIDAgMCAwLTMyIDMydjI4OGEzMiAzMiAwIDAgMCAzMiAzMmgzODRhMzIgMzIgMCAwIDAgMzItMzJWMTkyYTMyIDMyIDAgMCAwLTMyLTMyek05NiAyMjRhMzIgMzIgMCAxIDEtMzIgMzIgMzIgMzIgMCAwIDEgMzItMzJ6bTI4OCAyMjRINjR2LTMybDY0LTY0IDMyIDMyIDEyOC0xMjggOTYgOTZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUGhvdG9WaWRlbyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdpbWFnZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAzZSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ2NCA0NDhINDhjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWMTEyYzAtMjYuNTEgMjEuNDktNDggNDgtNDhoNDE2YzI2LjUxIDAgNDggMjEuNDkgNDggNDh2Mjg4YzAgMjYuNTEtMjEuNDkgNDgtNDggNDh6TTExMiAxMjBjLTMwLjkyOCAwLTU2IDI1LjA3Mi01NiA1NnMyNS4wNzIgNTYgNTYgNTYgNTYtMjUuMDcyIDU2LTU2LTI1LjA3Mi01Ni01Ni01NnpNNjQgMzg0aDM4NFYyNzJsLTg3LjUxNS04Ny41MTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwyMDggMzIwbC01NS41MTUtNTUuNTE1Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNjQgMzM2djQ4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUltYWdlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3ZpZGVvJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDNkJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzM2LjIgNjRINDcuOEMyMS40IDY0IDAgODUuNCAwIDExMS44djI4OC40QzAgNDI2LjYgMjEuNCA0NDggNDcuOCA0NDhoMjg4LjRjMjYuNCAwIDQ3LjgtMjEuNCA0Ny44LTQ3LjhWMTExLjhjMC0yNi40LTIxLjQtNDcuOC00Ny44LTQ3Ljh6bTE4OS40IDM3LjdMNDE2IDE3Ny4zdjE1Ny40bDEwOS42IDc1LjVjMjEuMiAxNC42IDUwLjQtLjMgNTAuNC0yNS44VjEyNy41YzAtMjUuNC0yOS4xLTQwLjQtNTAuNC0yNS44eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVZpZGVvID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXInO1xudmFyIGljb25OYW1lID0gJ3N0YXInO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMDUnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ001MjguMSAxNzEuNUwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDBMMTk0IDE1MC4yIDQ3LjkgMTcxLjVjLTI2LjIgMy44LTM2LjcgMzYuMS0xNy43IDU0LjZsMTA1LjcgMTAzLTI1IDE0NS41Yy00LjUgMjYuMyAyMy4yIDQ2IDQ2LjQgMzMuN0wyODggNDM5LjZsMTMwLjcgNjguN2MyMy4yIDEyLjIgNTAuOS03LjQgNDYuNC0zMy43bC0yNS0xNDUuNSAxMDUuNy0xMDNjMTktMTguNSA4LjUtNTAuOC0xNy43LTU0LjZ6TTM4OC42IDMxMi4zbDIzLjcgMTM4LjRMMjg4IDM4NS40bC0xMjQuMyA2NS4zIDIzLjctMTM4LjQtMTAwLjYtOTggMTM5LTIwLjIgNjIuMi0xMjYgNjIuMiAxMjYgMTM5IDIwLjItMTAwLjYgOTh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3RhciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzZWFyY2gnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMDInO1xudmFyIHN2Z1BhdGhEYXRhID0gJ001MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVNlYXJjaCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzeW5jJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDIxJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDQwLjY1IDEyLjU3bDQgODIuNzdBMjQ3LjE2IDI0Ny4xNiAwIDAgMCAyNTUuODMgOEMxMzQuNzMgOCAzMy45MSA5NC45MiAxMi4yOSAyMDkuODJBMTIgMTIgMCAwIDAgMjQuMDkgMjI0aDQ5LjA1YTEyIDEyIDAgMCAwIDExLjY3LTkuMjYgMTc1LjkxIDE3NS45MSAwIDAgMSAzMTctNTYuOTRsLTEwMS40Ni00Ljg2YTEyIDEyIDAgMCAwLTEyLjU3IDEydjQ3LjQxYTEyIDEyIDAgMCAwIDEyIDEySDUwMGExMiAxMiAwIDAgMCAxMi0xMlYxMmExMiAxMiAwIDAgMC0xMi0xMmgtNDcuMzdhMTIgMTIgMCAwIDAtMTEuOTggMTIuNTd6TTI1NS44MyA0MzJhMTc1LjYxIDE3NS42MSAwIDAgMS0xNDYtNzcuOGwxMDEuOCA0Ljg3YTEyIDEyIDAgMCAwIDEyLjU3LTEydi00Ny40YTEyIDEyIDAgMCAwLTEyLTEySDEyYTEyIDEyIDAgMCAwLTEyIDEyVjUwMGExMiAxMiAwIDAgMCAxMiAxMmg0Ny4zNWExMiAxMiAwIDAgMCAxMi0xMi42bC00LjE1LTgyLjU3QTI0Ny4xNyAyNDcuMTcgMCAwIDAgMjU1LjgzIDUwNGMxMjEuMTEgMCAyMjEuOTMtODYuOTIgMjQzLjU1LTIwMS44MmExMiAxMiAwIDAgMC0xMS44LTE0LjE4aC00OS4wNWExMiAxMiAwIDAgMC0xMS42NyA5LjI2QTE3NS44NiAxNzUuODYgMCAwIDEgMjU1LjgzIDQzMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTeW5jID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NwaW5uZXInO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxMTAnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMDQgNDhjMCAyNi41MS0yMS40OSA0OC00OCA0OHMtNDgtMjEuNDktNDgtNDggMjEuNDktNDggNDgtNDggNDggMjEuNDkgNDggNDh6bS00OCAzNjhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6bTIwOC0yMDhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDgtMjEuNDktNDgtNDgtNDh6TTk2IDI1NmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4UzAgMjI5LjQ5IDAgMjU2czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4em0xMi45MjIgOTkuMDc4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5MS00OC00OC00OHptMjk0LjE1NiAwYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4YzAtMjYuNTA5LTIxLjQ5LTQ4LTQ4LTQ4ek0xMDguOTIyIDYwLjkyMmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OTEtNDgtNDgtNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3Bpbm5lciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtaW51cy1jaXJjbGUnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNTYnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4ek0xMjQgMjk2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTU2YzAtNi42IDUuNC0xMiAxMi0xMmgyNjRjNi42IDAgMTIgNS40IDEyIDEydjU2YzAgNi42LTUuNCAxMi0xMiAxMkgxMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhTWludXNDaXJjbGUgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZXllLXNsYXNoJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDcwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzIwIDQwMGMtNzUuODUgMC0xMzcuMjUtNTguNzEtMTQyLjktMTMzLjExTDcyLjIgMTg1LjgyYy0xMy43OSAxNy4zLTI2LjQ4IDM1LjU5LTM2LjcyIDU1LjU5YTMyLjM1IDMyLjM1IDAgMCAwIDAgMjkuMTlDODkuNzEgMzc2LjQxIDE5Ny4wNyA0NDggMzIwIDQ0OGMyNi45MSAwIDUyLjg3LTQgNzcuODktMTAuNDZMMzQ2IDM5Ny4zOWExNDQuMTMgMTQ0LjEzIDAgMCAxLTI2IDIuNjF6bTMxMy44MiA1OC4xbC0xMTAuNTUtODUuNDRhMzMxLjI1IDMzMS4yNSAwIDAgMCA4MS4yNS0xMDIuMDcgMzIuMzUgMzIuMzUgMCAwIDAgMC0yOS4xOUM1NTAuMjkgMTM1LjU5IDQ0Mi45MyA2NCAzMjAgNjRhMzA4LjE1IDMwOC4xNSAwIDAgMC0xNDcuMzIgMzcuN0w0NS40NiAzLjM3QTE2IDE2IDAgMCAwIDIzIDYuMThMMy4zNyAzMS40NUExNiAxNiAwIDAgMCA2LjE4IDUzLjlsNTg4LjM2IDQ1NC43M2ExNiAxNiAwIDAgMCAyMi40Ni0yLjgxbDE5LjY0LTI1LjI3YTE2IDE2IDAgMCAwLTIuODItMjIuNDV6bS0xODMuNzItMTQybC0zOS4zLTMwLjM4QTk0Ljc1IDk0Ljc1IDAgMCAwIDQxNiAyNTZhOTQuNzYgOTQuNzYgMCAwIDAtMTIxLjMxLTkyLjIxQTQ3LjY1IDQ3LjY1IDAgMCAxIDMwNCAxOTJhNDYuNjQgNDYuNjQgMCAwIDEtMS41NCAxMGwtNzMuNjEtNTYuODlBMTQyLjMxIDE0Mi4zMSAwIDAgMSAzMjAgMTEyYTE0My45MiAxNDMuOTIgMCAwIDEgMTQ0IDE0NGMwIDIxLjYzLTUuMjkgNDEuNzktMTMuOSA2MC4xMXonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFFeWVTbGFzaCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0aCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwYSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE0OS4zMzMgNTZ2ODBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDI0Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRWNTZjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0aDEwMS4zMzNjMTMuMjU1IDAgMjQgMTAuNzQ1IDI0IDI0em0xODEuMzM0IDI0MHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDIwNS4zMzNjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTAxLjMzM2MxMy4yNTYgMCAyNC4wMDEtMTAuNzQ1IDI0LjAwMS0yNHptMzItMjQwdjgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNEg0ODhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgzODYuNjY3Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6bS0zMiA4MFY1NmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjA1LjMzM2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NiAwIDI0LjAwMS0xMC43NDUgMjQuMDAxLTI0em0tMjA1LjMzNCA1NkgyNGMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0ek0wIDM3NnY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTAxLjMzM2MxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyNGMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0em0zODYuNjY3LTU2SDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgzODYuNjY3Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0em0wIDE2MEg0ODhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMzg2LjY2N2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHpNMTgxLjMzMyAzNzZ2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjA1LjMzM2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2V4cGFuZC1hcnJvd3MtYWx0JztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMzFlJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDQ4IDM0NHYxMTJhMjMuOTQgMjMuOTQgMCAwIDEtMjQgMjRIMzEyYy0yMS4zOSAwLTMyLjA5LTI1LjktMTctNDFsMzYuMi0zNi4yTDIyNCAyOTUuNiAxMTYuNzcgNDAyLjkgMTUzIDQzOWMxNS4wOSAxNS4xIDQuMzkgNDEtMTcgNDFIMjRhMjMuOTQgMjMuOTQgMCAwIDEtMjQtMjRWMzQ0YzAtMjEuNCAyNS44OS0zMi4xIDQxLTE3bDM2LjE5IDM2LjJMMTg0LjQ2IDI1NiA3Ny4xOCAxNDguNyA0MSAxODVjLTE1LjEgMTUuMS00MSA0LjQtNDEtMTdWNTZhMjMuOTQgMjMuOTQgMCAwIDEgMjQtMjRoMTEyYzIxLjM5IDAgMzIuMDkgMjUuOSAxNyA0MWwtMzYuMiAzNi4yTDIyNCAyMTYuNGwxMDcuMjMtMTA3LjNMMjk1IDczYy0xNS4wOS0xNS4xLTQuMzktNDEgMTctNDFoMTEyYTIzLjk0IDIzLjk0IDAgMCAxIDI0IDI0djExMmMwIDIxLjQtMjUuODkgMzIuMS00MSAxN2wtMzYuMTktMzYuMkwyNjMuNTQgMjU2bDEwNy4yOCAxMDcuM0w0MDcgMzI3LjFjMTUuMS0xNS4yIDQxLTQuNSA0MSAxNi45eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUV4cGFuZEFycm93c0FsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtb2JpbGUtYWx0JztcbnZhciB3aWR0aCA9IDMyMDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmM2NkJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjcyIDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djQxNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyMjRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6TTE2MCA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMi0xNC4zIDMyLTMyIDMyem0xMTItMTA4YzAgNi42LTUuNCAxMi0xMiAxMkg2MGMtNi42IDAtMTItNS40LTEyLTEyVjYwYzAtNi42IDUuNC0xMiAxMi0xMmgyMDBjNi42IDAgMTIgNS40IDEyIDEydjMxMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFNb2JpbGVBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZGVza3RvcCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjEwOCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMTkybC0xNiA0OGgtNzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRoMjcyYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0aC03MmwtMTYtNDhoMTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYgMzUySDY0VjY0aDQ0OHYyODh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRGVza3RvcCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiPHNjcmlwdD5cbiAgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgIHRoZSB1c2VyIGNhbiBzZWxlY3QgZnJvbVxuICBleHBvcnQgbGV0IGl0ZW1zID0gW107XG5cbiAgLy8gZnVuY3Rpb24gdG8gdXNlIHRvIGdldCBhbGwgaXRlbXMgKGFsdGVybmF0aXZlIHRvIHByb3ZpZGluZyBpdGVtcylcbiAgZXhwb3J0IGxldCBzZWFyY2hGdW5jdGlvbiA9IGZhbHNlO1xuXG4gIC8vIGZpZWxkIG9mIGVhY2ggaXRlbSB0aGF0J3MgdXNlZCBmb3IgdGhlIGxhYmVscyBpbiB0aGUgbGlzdFxuICBleHBvcnQgbGV0IGxhYmVsRmllbGROYW1lID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGtleXdvcmRzRmllbGROYW1lID0gbGFiZWxGaWVsZE5hbWU7XG4gIGV4cG9ydCBsZXQgdmFsdWVGaWVsZE5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgZXhwb3J0IGxldCBsYWJlbEZ1bmN0aW9uID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQgfHwgaXRlbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbEZpZWxkTmFtZSA/IGl0ZW1bbGFiZWxGaWVsZE5hbWVdIDogaXRlbTtcbiAgfTtcblxuICBleHBvcnQgbGV0IGtleXdvcmRzRnVuY3Rpb24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCB8fCBpdGVtID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGtleXdvcmRzRmllbGROYW1lID8gaXRlbVtrZXl3b3Jkc0ZpZWxkTmFtZV0gOiBsYWJlbEZ1bmN0aW9uKGl0ZW0pO1xuICB9O1xuXG4gIGV4cG9ydCBsZXQgdmFsdWVGdW5jdGlvbiA9IGZ1bmN0aW9uKGl0ZW0sIGZvcmNlU2luZ2xlID0gZmFsc2UpIHtcbiAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBpZiAoIW11bHRpcGxlIHx8IGZvcmNlU2luZ2xlKSB7XG4gICAgICByZXR1cm4gdmFsdWVGaWVsZE5hbWUgPyBpdGVtW3ZhbHVlRmllbGROYW1lXSA6IGl0ZW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtLm1hcChpID0+ICh2YWx1ZUZpZWxkTmFtZSA/IGlbdmFsdWVGaWVsZE5hbWVdIDogaSkpO1xuICAgIH1cbiAgfTtcblxuICBleHBvcnQgbGV0IGtleXdvcmRzQ2xlYW5GdW5jdGlvbiA9IGZ1bmN0aW9uKGtleXdvcmRzKSB7XG4gICAgcmV0dXJuIGtleXdvcmRzO1xuICB9O1xuXG4gIGV4cG9ydCBsZXQgdGV4dENsZWFuRnVuY3Rpb24gPSBmdW5jdGlvbih1c2VyRW50ZXJlZFRleHQpIHtcbiAgICByZXR1cm4gdXNlckVudGVyZWRUZXh0O1xuICB9O1xuXG4gIC8vIGV2ZW50c1xuICBleHBvcnQgbGV0IGJlZm9yZUNoYW5nZSA9IGZ1bmN0aW9uKG9sZFNlbGVjdGVkSXRlbSwgbmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGV4cG9ydCBsZXQgb25DaGFuZ2UgPSBmdW5jdGlvbihuZXdTZWxlY3RlZEl0ZW0pIHt9O1xuICBleHBvcnQgbGV0IG9uRm9jdXMgPSBmdW5jdGlvbigpIHt9O1xuICBleHBvcnQgbGV0IG9uQmx1ciA9IGZ1bmN0aW9uKCkge307XG4gIGV4cG9ydCBsZXQgb25DcmVhdGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uQ3JlYXRlOiBcIiArIHRleHQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBCZWhhdmlvdXIgcHJvcGVydGllc1xuICBleHBvcnQgbGV0IHNlbGVjdEZpcnN0SWZFbXB0eSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG1pbkNoYXJhY3RlcnNUb1NlYXJjaCA9IDE7XG4gIGV4cG9ydCBsZXQgbWF4SXRlbXNUb1Nob3dJbkxpc3QgPSAwO1xuICBleHBvcnQgbGV0IG11bHRpcGxlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY3JlYXRlID0gZmFsc2U7XG5cbiAgLy8gaWdub3JlcyB0aGUgYWNjZW50cyB3aGVuIG1hdGNoaW5nIGl0ZW1zXG4gIGV4cG9ydCBsZXQgaWdub3JlQWNjZW50cyA9IHRydWU7XG5cbiAgLy8gYWxsIHRoZSBpbnB1dCBrZXl3b3JkcyBzaG91bGQgYmUgbWF0Y2hlZCBpbiB0aGUgaXRlbSBrZXl3b3Jkc1xuICBleHBvcnQgbGV0IG1hdGNoQWxsS2V5d29yZHMgPSB0cnVlO1xuXG4gIC8vIHNvcnRzIHRoZSBpdGVtcyBieSB0aGUgbnVtYmVyIG9mIG1hdGNoaW5rIGtleXdvcmRzXG4gIGV4cG9ydCBsZXQgc29ydEJ5TWF0Y2hlZEtleXdvcmRzID0gZmFsc2U7XG5cbiAgLy8gYWxsb3cgdXNlcnMgdG8gdXNlIGEgY3VzdG9tIGl0ZW0gZmlsdGVyIGZ1bmN0aW9uXG4gIGV4cG9ydCBsZXQgaXRlbUZpbHRlckZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuXG4gIC8vIGFsbG93IHVzZXJzIHRvIHVzZSBhIGN1c3RvbSBpdGVtIHNvcnQgZnVuY3Rpb25cbiAgZXhwb3J0IGxldCBpdGVtU29ydEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRvIG5vdCBhbGxvdyByZS1zZWxlY3Rpb24gYWZ0ZXIgaW5pdGlhbCBzZWxlY3Rpb25cbiAgZXhwb3J0IGxldCBsb2NrID0gZmFsc2U7XG5cbiAgLy8gZGVsYXkgdG8gd2FpdCBhZnRlciBhIGtleXByZXNzIHRvIHNlYXJjaCBmb3IgbmV3IGl0ZW1zXG4gIGV4cG9ydCBsZXQgZGVsYXkgPSAwO1xuXG4gIC8vIHRydWUgdG8gcGVyZm9ybSBsb2NhbCBmaWx0ZXJpbmcgb2YgaXRlbXMsIGV2ZW4gaWYgc2VhcmNoRnVuY3Rpb24gaXMgcHJvdmlkZWRcbiAgZXhwb3J0IGxldCBsb2NhbEZpbHRlcmluZyA9IHRydWU7XG5cbiAgLy8gVUkgcHJvcGVydGllc1xuXG4gIC8vIG9wdGlvbiB0byBoaWRlIHRoZSBkcm9wZG93biBhcnJvd1xuICBleHBvcnQgbGV0IGhpZGVBcnJvdyA9IGZhbHNlO1xuXG4gIC8vIG9wdGlvbiB0byBzaG93IGNsZWFyIHNlbGVjdGlvbiBidXR0b25cbiAgZXhwb3J0IGxldCBzaG93Q2xlYXIgPSBmYWxzZTtcblxuICAvLyBvcHRpb24gdG8gc2hvdyBsb2FkaW5nIGluZGljYXRvciB3aGVuIHRoZSBhc3luYyBmdW5jdGlvbiBpcyBleGVjdXRlZFxuICBleHBvcnQgbGV0IHNob3dMb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgLy8gdGV4dCBkaXNwbGF5ZWQgd2hlbiBubyBpdGVtcyBtYXRjaCB0aGUgaW5wdXQgdGV4dFxuICBleHBvcnQgbGV0IG5vUmVzdWx0c1RleHQgPSBcIk5vIHJlc3VsdHMgZm91bmRcIjtcblxuICAvLyB0ZXh0IGRpc3BsYXllZCB3aGVuIGFzeW5jIGRhdGEgaXMgYmVpbmcgbG9hZGVkXG4gIGV4cG9ydCBsZXQgbG9hZGluZ1RleHQgPSBcIkxvYWRpbmcgcmVzdWx0cy4uLlwiO1xuXG4gIC8vIHRleHQgZGlzcGxheWVkIHdoZW4gYXN5bmMgZGF0YSBpcyBiZWluZyBsb2FkZWRcbiAgZXhwb3J0IGxldCBjcmVhdGVUZXh0ID0gXCJOb3QgZm91bmQsIGFkZCBhbnl3YXk/XCI7XG5cbiAgLy8gdGhlIHRleHQgZGlzcGxheWVkIHdoZW4gbm8gb3B0aW9uIGlzIHNlbGVjdGVkXG4gIGV4cG9ydCBsZXQgcGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG5cbiAgLy8gYXBwbHkgYSBjbGFzc05hbWUgdG8gdGhlIGNvbnRyb2xcbiAgZXhwb3J0IGxldCBjbGFzc05hbWUgPSB1bmRlZmluZWQ7XG5cbiAgLy8gSFRNTCBpbnB1dCBVSSBwcm9wZXJ0aWVzXG4gIC8vIGFwcGx5IGEgY2xhc3NOYW1lIHRvIHRoZSBpbnB1dCBjb250cm9sXG4gIGV4cG9ydCBsZXQgaW5wdXRDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gIC8vIGFwcGx5IGEgaWQgdG8gdGhlIGlucHV0IGNvbnRyb2xcbiAgZXhwb3J0IGxldCBpbnB1dElkID0gdW5kZWZpbmVkO1xuICAvLyBnZW5lcmF0ZSBhbiBIVE1MIGlucHV0IHdpdGggdGhpcyBuYW1lXG4gIGV4cG9ydCBsZXQgbmFtZSA9IHVuZGVmaW5lZDtcbiAgLy8gZ2VuZXJhdGUgYSA8c2VsZWN0PiB0YWcgdGhhdCBob2xkcyB0aGUgdmFsdWVcbiAgZXhwb3J0IGxldCBzZWxlY3ROYW1lID0gdW5kZWZpbmVkO1xuICAvLyBhcHBseSBhIGlkIHRvIHRoZSA8c2VsZWN0PlxuICBleHBvcnQgbGV0IHNlbGVjdElkID0gdW5kZWZpbmVkO1xuICAvLyBhZGQgdGhlIHRpdGxlIHRvIHRoZSBIVE1MIGlucHV0XG4gIGV4cG9ydCBsZXQgdGl0bGUgPSB1bmRlZmluZWQ7XG4gIC8vIGVuYWJsZSB0aGUgaHRtbDUgYXV0b2NvbXBsZXRpb24gdG8gdGhlIEhUTUwgaW5wdXRcbiAgZXhwb3J0IGxldCBodG1sNWF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgLy8gbWFrZSB0aGUgaW5wdXQgcmVhZG9ubHlcbiAgZXhwb3J0IGxldCByZWFkb25seSA9IHVuZGVmaW5lZDtcbiAgLy8gYXBwbHkgYSBjbGFzc05hbWUgdG8gdGhlIGRyb3Bkb3duIGRpdlxuICBleHBvcnQgbGV0IGRyb3Bkb3duQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuICAvLyBhZGRzIHRoZSBkaXNhYmxlZCB0YWcgdG8gdGhlIEhUTUwgaW5wdXRcbiAgZXhwb3J0IGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGV4cG9ydCBsZXQgZGVidWcgPSBmYWxzZTtcblxuICAvLyAtLS0gUHVibGljIFN0YXRlIC0tLS1cblxuICAvLyBzZWxlY3RlZCBpdGVtIHN0YXRlXG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRJdGVtID0gbXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBoaWdobGlnaHRlZEl0ZW0gPSB1bmRlZmluZWQ7XG5cbiAgLy8gLS0tIEludGVybmFsIFN0YXRlIC0tLS1cbiAgY29uc3QgdW5pcXVlSWQgPSBcInNhdXRvY29tcGxldGUtXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblxuICAvLyBIVE1MIGVsZW1lbnRzXG4gIGxldCBpbnB1dDtcbiAgbGV0IGxpc3Q7XG5cbiAgLy8gVUkgc3RhdGVcbiAgbGV0IG9wZW5lZCA9IGZhbHNlO1xuICBsZXQgbG9hZGluZyA9IGZhbHNlO1xuICBsZXQgaGlnaGxpZ2h0SW5kZXggPSAtMTtcbiAgZXhwb3J0IGxldCB0ZXh0O1xuICBsZXQgZmlsdGVyZWRUZXh0TGVuZ3RoID0gMDtcblxuICAvLyB2aWV3IG1vZGVsXG4gIGxldCBmaWx0ZXJlZExpc3RJdGVtcztcbiAgbGV0IGxpc3RJdGVtcyA9IFtdO1xuXG4gIC8vIHJlcXVlc3RzL3Jlc3BvbnNlcyBjb3VudGVyc1xuICBsZXQgbGFzdFJlcXVlc3RJZCA9IDA7XG4gIGxldCBsYXN0UmVzcG9uc2VJZCA9IDA7XG5cbiAgLy8gb3RoZXIgc3RhdGVcbiAgbGV0IGlucHV0RGVsYXlUaW1lb3V0O1xuXG4gIC8vIC0tLSBGdW5jdGlvbnMgLS0tXG4gIGZ1bmN0aW9uIHNhZmVTdHJpbmdGdW5jdGlvbih0aGVGdW5jdGlvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIHRoZUZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiTm90IGEgZnVuY3Rpb246IFwiICsgdGhlRnVuY3Rpb24gKyBcIiwgYXJndW1lbnQ6IFwiICsgYXJndW1lbnRcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBvcmlnaW5hbFJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWxSZXN1bHQgPSB0aGVGdW5jdGlvbihhcmd1bWVudCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJFcnJvciBleGVjdXRpbmcgQXV0b2NvbXBsZXRlIGZ1bmN0aW9uIG9uIHZhbHVlOiBcIiArXG4gICAgICAgICAgYXJndW1lbnQgK1xuICAgICAgICAgIFwiIGZ1bmN0aW9uOiBcIiArXG4gICAgICAgICAgdGhlRnVuY3Rpb25cbiAgICAgICk7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSBvcmlnaW5hbFJlc3VsdDtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgfHwgcmVzdWx0ID09PSBudWxsKSB7XG4gICAgICByZXN1bHQgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzYWZlTGFiZWxGdW5jdGlvbihpdGVtKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbEZ1bmN0aW9uOiBcIiArIGxhYmVsRnVuY3Rpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2FmZUxhYmVsRnVuY3Rpb24sIGl0ZW06IFwiICsgaXRlbSk7XG4gICAgcmV0dXJuIHNhZmVTdHJpbmdGdW5jdGlvbihsYWJlbEZ1bmN0aW9uLCBpdGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhZmVLZXl3b3Jkc0Z1bmN0aW9uKGl0ZW0pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhZmVLZXl3b3Jkc0Z1bmN0aW9uXCIpO1xuICAgIGNvbnN0IGtleXdvcmRzID0gc2FmZVN0cmluZ0Z1bmN0aW9uKGtleXdvcmRzRnVuY3Rpb24sIGl0ZW0pO1xuICAgIGxldCByZXN1bHQgPSBzYWZlU3RyaW5nRnVuY3Rpb24oa2V5d29yZHNDbGVhbkZ1bmN0aW9uLCBrZXl3b3Jkcyk7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICByZXN1bHQgPSByZW1vdmVBY2NlbnRzKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJFeHRyYWN0ZWQga2V5d29yZHM6ICdcIiArXG4gICAgICAgICAgcmVzdWx0ICtcbiAgICAgICAgICBcIicgZnJvbSBpdGVtOiBcIiArXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlTGlzdEl0ZW1zKCkge1xuICAgIGxldCB0aW1lcklkO1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgdGltZXJJZCA9IGBBdXRvY29tcGxldGUgcHJlcGFyZSBsaXN0ICR7XG4gICAgICAgIGlucHV0SWQgPyBgKGlkOiAke2lucHV0SWR9KWAgOiBcIlwiXG4gICAgICB9YDtcbiAgICAgIGNvbnNvbGUudGltZSh0aW1lcklkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJlcGFyZSBpdGVtcyB0byBzZWFyY2hcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZW1zOiBcIiArIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIkF1dG9jb21wbGV0ZSBpdGVtcyAvIHNlYXJjaCBmdW5jdGlvbiBkaWQgbm90IHJldHVybiBhcnJheSBidXRcIixcbiAgICAgICAgaXRlbXNcbiAgICAgICk7XG4gICAgICBpdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IGl0ZW1zID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZ2V0TGlzdEl0ZW0oaXRlbSk7XG4gICAgICAgIGlmIChsaXN0SXRlbSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuZGVmaW5lZCBpdGVtIGZvcjogXCIsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RJdGVtc1tpXSA9IGxpc3RJdGVtO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhsaXN0SXRlbXMubGVuZ3RoICsgXCIgaXRlbXMgdG8gc2VhcmNoXCIpO1xuICAgICAgY29uc29sZS50aW1lRW5kKHRpbWVySWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpc3RJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8ga2V5d29yZHMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGl0ZW1cbiAgICAgIGtleXdvcmRzOiBzYWZlS2V5d29yZHNGdW5jdGlvbihpdGVtKSxcbiAgICAgIC8vIGl0ZW0gbGFiZWxcbiAgICAgIGxhYmVsOiBzYWZlTGFiZWxGdW5jdGlvbihpdGVtKSxcbiAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2lhbCBpdGVtXG4gICAgICBpdGVtOiBpdGVtXG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tIFJlYWN0aXZpdHkgLS1cbiAgJDogaXRlbXMsIHByZXBhcmVMaXN0SXRlbXMoKTtcblxuICBmdW5jdGlvbiBvblNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgdmFsdWUgPSB2YWx1ZUZ1bmN0aW9uKHNlbGVjdGVkSXRlbSk7XG4gICAgdGV4dCA9ICFtdWx0aXBsZSA/IHNhZmVMYWJlbEZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkgOiBcIlwiO1xuXG4gICAgZmlsdGVyZWRMaXN0SXRlbXMgPSBsaXN0SXRlbXM7XG4gICAgb25DaGFuZ2Uoc2VsZWN0ZWRJdGVtKTtcbiAgfVxuXG4gICQ6IHNlbGVjdGVkSXRlbSwgb25TZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG5cbiAgJDogaGlnaGxpZ2h0ZWRJdGVtID1cbiAgICBmaWx0ZXJlZExpc3RJdGVtcyAmJlxuICAgIGhpZ2hsaWdodEluZGV4ICYmXG4gICAgaGlnaGxpZ2h0SW5kZXggPj0gMCAmJlxuICAgIGhpZ2hsaWdodEluZGV4IDwgZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoXG4gICAgICA/IGZpbHRlcmVkTGlzdEl0ZW1zW2hpZ2hsaWdodEluZGV4XS5pdGVtXG4gICAgICA6IG51bGw7XG5cbiAgJDogc2hvd0xpc3QgPVxuICAgIG9wZW5lZCAmJiAoKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHx8IGZpbHRlcmVkVGV4dExlbmd0aCA+IDApO1xuXG4gICQ6IGNsZWFyYWJsZSA9IHNob3dDbGVhciB8fCAoKGxvY2sgfHwgbXVsdGlwbGUpICYmIHNlbGVjdGVkSXRlbSk7XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVVzZXJFbnRlcmVkVGV4dCh1c2VyRW50ZXJlZFRleHQpIHtcbiAgICBpZiAodXNlckVudGVyZWRUZXh0ID09PSB1bmRlZmluZWQgfHwgdXNlckVudGVyZWRUZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0RmlsdGVyZWQgPSB1c2VyRW50ZXJlZFRleHRcbiAgICAgIC5yZXBsYWNlKC9bJi9cXFxcIywrKCkkfiUuJ1wiOio/PD57fV0vZywgXCIgXCIpXG4gICAgICAudHJpbSgpO1xuXG4gICAgZmlsdGVyZWRUZXh0TGVuZ3RoID0gdGV4dEZpbHRlcmVkLmxlbmd0aDtcblxuICAgIGlmIChtaW5DaGFyYWN0ZXJzVG9TZWFyY2ggPiAxKSB7XG4gICAgICBpZiAoZmlsdGVyZWRUZXh0TGVuZ3RoIDwgbWluQ2hhcmFjdGVyc1RvU2VhcmNoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuVXNlckVudGVyZWRUZXh0ID0gdGV4dENsZWFuRnVuY3Rpb24odGV4dEZpbHRlcmVkKTtcbiAgICBjb25zdCB0ZXh0RmlsdGVyZWRMb3dlckNhc2UgPSBjbGVhblVzZXJFbnRlcmVkVGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiQ2hhbmdlIHVzZXIgZW50ZXJlZCB0ZXh0ICdcIiArXG4gICAgICAgICAgdXNlckVudGVyZWRUZXh0ICtcbiAgICAgICAgICBcIicgaW50byAnXCIgK1xuICAgICAgICAgIHRleHRGaWx0ZXJlZExvd2VyQ2FzZSArXG4gICAgICAgICAgXCInXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0RmlsdGVyZWRMb3dlckNhc2U7XG4gIH1cblxuICBmdW5jdGlvbiBudW1iZXJPZk1hdGNoZXMobGlzdEl0ZW0sIHNlYXJjaFdvcmRzKSB7XG4gICAgaWYgKCFsaXN0SXRlbSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbUtleXdvcmRzID0gbGlzdEl0ZW0ua2V5d29yZHM7XG5cbiAgICBsZXQgbWF0Y2hlcyA9IDA7XG4gICAgc2VhcmNoV29yZHMuZm9yRWFjaChzZWFyY2hXb3JkID0+IHtcbiAgICAgIGlmIChpdGVtS2V5d29yZHMuaW5jbHVkZXMoc2VhcmNoV29yZCkpIHtcbiAgICAgICAgbWF0Y2hlcysrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICB0aW1lcklkID0gYEF1dG9jb21wbGV0ZSBzZWFyY2ggJHtpbnB1dElkID8gYChpZDogJHtpbnB1dElkfSlgIDogXCJcIn0pYDtcbiAgICAgIGNvbnNvbGUudGltZSh0aW1lcklkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoaW5nIHVzZXIgZW50ZXJlZCB0ZXh0OiAnXCIgKyB0ZXh0ICsgXCInXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRGaWx0ZXJlZCA9IHByZXBhcmVVc2VyRW50ZXJlZFRleHQodGV4dCk7XG5cbiAgICBpZiAodGV4dEZpbHRlcmVkID09PSBcIlwiKSB7XG4gICAgICBpZiAoc2VhcmNoRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHJlcnVuIHRoZSBzZWFyY2hcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGVudGVyZWQgdGV4dCBpcyBlbXB0eSBjbGVhciBsaXN0IG9mIGl0ZW1zXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJlZExpc3RJdGVtcyA9IGxpc3RJdGVtcztcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlVzZXIgZW50ZXJlZCB0ZXh0IGlzIGVtcHR5IHNldCB0aGUgbGlzdCBvZiBpdGVtcyB0byBhbGwgaXRlbXNcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNsb3NlSWZNaW5DaGFyc1RvU2VhcmNoUmVhY2hlZCgpO1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCh0aW1lcklkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXNlYXJjaEZ1bmN0aW9uKSB7XG4gICAgICBwcm9jZXNzTGlzdEl0ZW1zKHRleHRGaWx0ZXJlZCk7XG4gICAgfVxuXG4gICAgLy8gZXh0ZXJuYWwgc2VhcmNoIHdoaWNoIHByb3ZpZGVzIGl0ZW1zXG4gICAgZWxzZSB7XG4gICAgICBsYXN0UmVxdWVzdElkID0gbGFzdFJlcXVlc3RJZCArIDE7XG4gICAgICBjb25zdCBjdXJyZW50UmVxdWVzdElkID0gbGFzdFJlcXVlc3RJZDtcbiAgICAgIGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAvLyBzZWFyY2hGdW5jdGlvbiBpcyBhIGdlbmVyYXRvclxuICAgICAgaWYgKHNlYXJjaEZ1bmN0aW9uLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXN5bmNHZW5lcmF0b3JGdW5jdGlvblwiKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2Ygc2VhcmNoRnVuY3Rpb24odGV4dEZpbHRlcmVkKSkge1xuICAgICAgICAgIC8vIGEgY2h1bmsgb2YgYW4gb2xkIHJlc3BvbnNlOiB0aHJvdyBpdCBhd2F5XG4gICAgICAgICAgaWYgKGN1cnJlbnRSZXF1ZXN0SWQgPCBsYXN0UmVzcG9uc2VJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGEgY2h1bmsgZm9yIGEgbmV3IHJlc3BvbnNlOiByZXNldCB0aGUgaXRlbSBsaXN0XG4gICAgICAgICAgaWYgKGN1cnJlbnRSZXF1ZXN0SWQgPiBsYXN0UmVzcG9uc2VJZCkge1xuICAgICAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYXN0UmVzcG9uc2VJZCA9IGN1cnJlbnRSZXF1ZXN0SWQ7XG4gICAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIC4uLmNodW5rXTtcbiAgICAgICAgICBwcm9jZXNzTGlzdEl0ZW1zKHRleHRGaWx0ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVyZSB3YXMgbm90aGluZyBpbiB0aGUgY2h1bmtcbiAgICAgICAgaWYgKGxhc3RSZXNwb25zZUlkIDwgY3VycmVudFJlcXVlc3RJZCkge1xuICAgICAgICAgIGxhc3RSZXNwb25zZUlkID0gY3VycmVudFJlcXVlc3RJZDtcbiAgICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICAgIHByb2Nlc3NMaXN0SXRlbXModGV4dEZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZWFyY2hGdW5jdGlvbiBpcyBhIHJlZ3VsYXIgZnVuY3Rpb25cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgc2VhcmNoRnVuY3Rpb24odGV4dEZpbHRlcmVkKTtcblxuICAgICAgICAvLyBJZiBhIHJlc3BvbnNlIHRvIGEgbmV3ZXIgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZFxuICAgICAgICAvLyB3aGlsZSByZXNwb25zZXMgdG8gdGhpcyByZXF1ZXN0IHdlcmUgYmVpbmcgbG9hZGVkLFxuICAgICAgICAvLyB0aGVuIHdlIGNhbiBqdXN0IHRocm93IGF3YXkgdGhpcyBvdXRkYXRlZCByZXN1bHRzLlxuICAgICAgICBpZiAoY3VycmVudFJlcXVlc3RJZCA8IGxhc3RSZXNwb25zZUlkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdFJlc3BvbnNlSWQgPSBjdXJyZW50UmVxdWVzdElkO1xuICAgICAgICBpdGVtcyA9IHJlc3VsdDtcbiAgICAgICAgcHJvY2Vzc0xpc3RJdGVtcyh0ZXh0RmlsdGVyZWQpO1xuICAgICAgfVxuXG4gICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLnRpbWVFbmQodGltZXJJZCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBmb3VuZCBcIiArIGZpbHRlcmVkTGlzdEl0ZW1zLmxlbmd0aCArIFwiIGl0ZW1zXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRJdGVtRmlsdGVyRnVuY3Rpb24obGlzdEl0ZW0sIHNlYXJjaFdvcmRzKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBudW1iZXJPZk1hdGNoZXMobGlzdEl0ZW0sIHNlYXJjaFdvcmRzKTtcbiAgICBpZiAobWF0Y2hBbGxLZXl3b3Jkcykge1xuICAgICAgcmV0dXJuIG1hdGNoZXMgPj0gc2VhcmNoV29yZHMubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyA+IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdEl0ZW1Tb3J0RnVuY3Rpb24ob2JqMSwgb2JqMiwgc2VhcmNoV29yZHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgbnVtYmVyT2ZNYXRjaGVzKG9iajIsIHNlYXJjaFdvcmRzKSAtIG51bWJlck9mTWF0Y2hlcyhvYmoxLCBzZWFyY2hXb3JkcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0xpc3RJdGVtcyh0ZXh0RmlsdGVyZWQpIHtcbiAgICAvLyBjbGVhbnMsIGZpbHRlcnMsIG9yZGVycywgYW5kIGhpZ2hsaWdodHMgdGhlIGxpc3QgaXRlbXNcbiAgICBwcmVwYXJlTGlzdEl0ZW1zKCk7XG5cbiAgICBjb25zdCB0ZXh0RmlsdGVyZWRXaXRob3V0QWNjZW50cyA9IGlnbm9yZUFjY2VudHNcbiAgICAgID8gcmVtb3ZlQWNjZW50cyh0ZXh0RmlsdGVyZWQpXG4gICAgICA6IHRleHRGaWx0ZXJlZDtcbiAgICBjb25zdCBzZWFyY2hXb3JkcyA9IHRleHRGaWx0ZXJlZFdpdGhvdXRBY2NlbnRzLnNwbGl0KC9cXHMrL2cpO1xuXG4gICAgLy8gbG9jYWwgc2VhcmNoXG4gICAgbGV0IHRlbXBmaWx0ZXJlZExpc3RJdGVtcztcbiAgICBpZiAobG9jYWxGaWx0ZXJpbmcpIHtcbiAgICAgIGlmIChpdGVtRmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgdGVtcGZpbHRlcmVkTGlzdEl0ZW1zID0gbGlzdEl0ZW1zLmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgaXRlbUZpbHRlckZ1bmN0aW9uKGl0ZW0uaXRlbSwgc2VhcmNoV29yZHMpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMgPSBsaXN0SXRlbXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICBkZWZhdWx0SXRlbUZpbHRlckZ1bmN0aW9uKGl0ZW0sIHNlYXJjaFdvcmRzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVNvcnRGdW5jdGlvbikge1xuICAgICAgICB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMgPSB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PlxuICAgICAgICAgIGl0ZW1Tb3J0RnVuY3Rpb24oaXRlbTEuaXRlbSwgaXRlbTIuaXRlbSwgc2VhcmNoV29yZHMpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc29ydEJ5TWF0Y2hlZEtleXdvcmRzKSB7XG4gICAgICAgICAgdGVtcGZpbHRlcmVkTGlzdEl0ZW1zID0gdGVtcGZpbHRlcmVkTGlzdEl0ZW1zLnNvcnQoKGl0ZW0xLCBpdGVtMikgPT5cbiAgICAgICAgICAgIGRlZmF1bHRJdGVtU29ydEZ1bmN0aW9uKGl0ZW0xLCBpdGVtMiwgc2VhcmNoV29yZHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMgPSBsaXN0SXRlbXM7XG4gICAgfVxuXG4gICAgY29uc3QgaGxmaWx0ZXIgPSBoaWdobGlnaHRGaWx0ZXIoc2VhcmNoV29yZHMsIFwibGFiZWxcIik7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0SXRlbXNIaWdobGlnaHRlZCA9IHRlbXBmaWx0ZXJlZExpc3RJdGVtcy5tYXAoaGxmaWx0ZXIpO1xuXG4gICAgZmlsdGVyZWRMaXN0SXRlbXMgPSBmaWx0ZXJlZExpc3RJdGVtc0hpZ2hsaWdodGVkO1xuICAgIGNsb3NlSWZNaW5DaGFyc1RvU2VhcmNoUmVhY2hlZCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gJDogdGV4dCwgc2VhcmNoKCk7XG5cbiAgZnVuY3Rpb24gc2VsZWN0TGlzdEl0ZW0obGlzdEl0ZW0pIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0TGlzdEl0ZW1cIiwgbGlzdEl0ZW0pO1xuICAgIH1cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGxpc3RJdGVtICYmIGNyZWF0ZSkge1xuICAgICAgLy8gYWxsb3cgdW5kZWZpbmVkIGl0ZW1zIGlmIGNyZWF0ZSBpcyBlbmFibGVkXG4gICAgICBjb25zdCBjcmVhdGVkSXRlbSA9IG9uQ3JlYXRlKHRleHQpO1xuICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBjcmVhdGVkSXRlbSkge1xuICAgICAgICBwcmVwYXJlTGlzdEl0ZW1zKCk7XG4gICAgICAgIGZpbHRlcmVkTGlzdEl0ZW1zID0gbGlzdEl0ZW1zO1xuICAgICAgICBjb25zdCBpbmRleCA9IGZpbmRJdGVtSW5kZXgoY3JlYXRlZEl0ZW0sIGZpbHRlcmVkTGlzdEl0ZW1zKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBoaWdobGlnaHRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGxpc3RJdGVtID0gZmlsdGVyZWRMaXN0SXRlbXNbaGlnaGxpZ2h0SW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBsaXN0SXRlbSkge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBsaXN0SXRlbSBpcyB1bmRlZmluZWQuIENhbiBub3Qgc2VsZWN0LmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlbGVjdGVkSXRlbSA9IGxpc3RJdGVtLml0ZW07XG4gICAgaWYgKGJlZm9yZUNoYW5nZShzZWxlY3RlZEl0ZW0sIG5ld1NlbGVjdGVkSXRlbSkpIHtcbiAgICAgIC8vIHNpbXBsZSBzZWxlY3Rpb25cbiAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkOyAvLyB0cmlnZ2VycyBjaGFuZ2UgZXZlbiBpZiB0aGUgdGhlIHNhbWUgaXRlbSBpcyBzZWxlY3RlZFxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBuZXdTZWxlY3RlZEl0ZW07XG4gICAgICB9XG4gICAgICAvLyBmaXJzdCBzZWxlY3Rpb24gb2YgbXVsdGlwbGUgb25lc1xuICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkSXRlbSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBbbmV3U2VsZWN0ZWRJdGVtXTtcbiAgICAgIH1cbiAgICAgIC8vIHNlbGVjdGluZyBzb21ldGhpbmcgYWxyZWFkeSBzZWxlY3RlZCA9PiB1bnNlbGVjdCBpdFxuICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRJdGVtLmluY2x1ZGVzKG5ld1NlbGVjdGVkSXRlbSkpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtLmZpbHRlcihpID0+IGkgIT09IG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgICAvLyBhZGRzIHRoZSBlbGVtZW50IHRvIHRoZSBzZWxlY3Rpb25cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBbLi4uc2VsZWN0ZWRJdGVtLCBuZXdTZWxlY3RlZEl0ZW1dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdEl0ZW0oKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdEl0ZW1cIiwgaGlnaGxpZ2h0SW5kZXgpO1xuICAgIH1cbiAgICBjb25zdCBsaXN0SXRlbSA9IGZpbHRlcmVkTGlzdEl0ZW1zW2hpZ2hsaWdodEluZGV4XTtcbiAgICBpZiAoc2VsZWN0TGlzdEl0ZW0obGlzdEl0ZW0pKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXAoKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVwXCIpO1xuICAgIH1cblxuICAgIG9wZW4oKTtcbiAgICBpZiAoaGlnaGxpZ2h0SW5kZXggPiAwKSB7XG4gICAgICBoaWdobGlnaHRJbmRleC0tO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bigpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKTtcbiAgICB9XG5cbiAgICBvcGVuKCk7XG4gICAgaWYgKGhpZ2hsaWdodEluZGV4IDwgZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgaGlnaGxpZ2h0SW5kZXgrKztcbiAgICB9XG5cbiAgICBoaWdobGlnaHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodCgpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlnaGxpZ2h0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gXCIuc2VsZWN0ZWRcIjtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VhY2hpbmcgRE9NIGVsZW1lbnQ6IFwiICsgcXVlcnkgKyBcIiBpbiBcIiArIGxpc3QpO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGxpc3QgJiYgbGlzdC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgZWwuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Nyb2xsaW5nIHNlbGVjdGVkIGl0ZW0gaW50byB2aWV3XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiQ291bGQgbm90IHNjcm9sbCBzZWxlY3RlZCBpdGVtIGludG8gdmlldywgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCBub3Qgc3VwcG9ydGVkXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTZWxlY3RlZCBpdGVtIG5vdCBmb3VuZCB0byBzY3JvbGwgaW50byB2aWV3XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTGlzdEl0ZW1DbGljayhsaXN0SXRlbSkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbkxpc3RJdGVtQ2xpY2tcIik7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdExpc3RJdGVtKGxpc3RJdGVtKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uRG9jdW1lbnRDbGljazogXCIgKyBKU09OLnN0cmluZ2lmeShlLmNvbXBvc2VkUGF0aCgpKSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGVcbiAgICAgICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgICAgIC5zb21lKHBhdGggPT4gcGF0aC5jbGFzc0xpc3QgJiYgcGF0aC5jbGFzc0xpc3QuY29udGFpbnModW5pcXVlSWQpKVxuICAgICkge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Eb2N1bWVudENsaWNrIGluc2lkZVwiKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlc2V0TGlzdFRvQWxsSXRlbXNBbmRPcGVuKCk7XG4gICAgICBoaWdobGlnaHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Eb2N1bWVudENsaWNrIG91dHNpZGVcIik7XG4gICAgICB9XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uS2V5RG93blwiKTtcbiAgICB9XG5cbiAgICBsZXQga2V5ID0gZS5rZXk7XG4gICAgaWYgKGtleSA9PT0gXCJUYWJcIiAmJiBlLnNoaWZ0S2V5KSBrZXkgPSBcIlNoaWZ0VGFiXCI7XG4gICAgY29uc3QgZm5tYXAgPSB7XG4gICAgICBUYWI6IG9wZW5lZCA/IGRvd24uYmluZCh0aGlzKSA6IG51bGwsXG4gICAgICBTaGlmdFRhYjogb3BlbmVkID8gdXAuYmluZCh0aGlzKSA6IG51bGwsXG4gICAgICBBcnJvd0Rvd246IGRvd24uYmluZCh0aGlzKSxcbiAgICAgIEFycm93VXA6IHVwLmJpbmQodGhpcyksXG4gICAgICBFc2NhcGU6IG9uRXNjLmJpbmQodGhpcyksXG4gICAgICBCYWNrc3BhY2U6XG4gICAgICAgIG11bHRpcGxlICYmIHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0ubGVuZ3RoICYmICF0ZXh0XG4gICAgICAgICAgPyBvbkJhY2tzcGFjZS5iaW5kKHRoaXMpXG4gICAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgICBjb25zdCBmbiA9IGZubWFwW2tleV07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBmbihlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbktleVByZXNzKGUpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25LZXlQcmVzc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBvcGVuZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkVudGVyKCkge1xuICAgIHNlbGVjdEl0ZW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW5wdXQoZSkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbklucHV0XCIpO1xuICAgIH1cblxuICAgIHRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoaW5wdXREZWxheVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpbnB1dERlbGF5VGltZW91dCk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpbnB1dERlbGF5VGltZW91dCA9IHNldFRpbWVvdXQocHJvY2Vzc0lucHV0LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3NJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2VsZWN0SXRlbSh0YWcpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidW5zZWxlY3RJdGVtXCIsIHRhZyk7XG4gICAgfVxuICAgIHNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbS5maWx0ZXIoaSA9PiBpICE9PSB0YWcpO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSW5wdXQoKSB7XG4gICAgaWYgKHNlYXJjaCgpKSB7XG4gICAgICBoaWdobGlnaHRJbmRleCA9IDA7XG4gICAgICBvcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25JbnB1dENsaWNrKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbklucHV0Q2xpY2tcIik7XG4gICAgfVxuICAgIHJlc2V0TGlzdFRvQWxsSXRlbXNBbmRPcGVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkVzYyhlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uRXNjXCIpO1xuICAgIH1cblxuICAgIC8vaWYgKHRleHQpIHJldHVybiBjbGVhcigpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CYWNrc3BhY2UoZSkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbkJhY2tzcGFjZVwiKTtcbiAgICB9XG5cbiAgICB1bnNlbGVjdEl0ZW0oc2VsZWN0ZWRJdGVtW3NlbGVjdGVkSXRlbS5sZW5ndGggLSAxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkZvY3VzSW50ZXJuYWwoKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uRm9jdXNcIik7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpO1xuXG4gICAgcmVzZXRMaXN0VG9BbGxJdGVtc0FuZE9wZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ckludGVybmFsKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbkJsdXJcIik7XG4gICAgfVxuXG4gICAgb25CbHVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldExpc3RUb0FsbEl0ZW1zQW5kT3BlbigpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzZXRMaXN0VG9BbGxJdGVtc0FuZE9wZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBmaWx0ZXJlZExpc3RJdGVtcyA9IGxpc3RJdGVtcztcbiAgICB9XG5cbiAgICAvLyBXaGVuIGFuIGFzeW5jIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZCwgdGhlIGl0ZW0gbGlzdFxuICAgIC8vIG11c3QgYmUgbG9hZGVkIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQuXG4gICAgZWxzZSBpZiAoIWxpc3RJdGVtcy5sZW5ndGggJiYgc2VsZWN0ZWRJdGVtICYmIHNlYXJjaEZ1bmN0aW9uKSB7XG4gICAgICBzZWFyY2goKTtcbiAgICB9XG5cbiAgICBvcGVuKCk7XG5cbiAgICAvLyBmaW5kIHNlbGVjdGVkIGl0ZW1cbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJTZWFyY2hpbmcgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW06IFwiICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRJdGVtKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleCA9IGZpbmRJdGVtSW5kZXgoc2VsZWN0ZWRJdGVtLCBmaWx0ZXJlZExpc3RJdGVtcyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBoaWdobGlnaHRJbmRleCA9IGluZGV4O1xuICAgICAgICBoaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSXRlbUluZGV4KGl0ZW0sIGl0ZW1zKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbmRpbmcgaW5kZXggZm9yIGl0ZW1cIiwgaXRlbSk7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gaXRlbXNbaV07XG4gICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGxpc3RJdGVtKSB7XG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBsaXN0SXRlbSAke2l9IGlzIHVuZGVmaW5lZC4gU2tpcHBpbmcuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFwiICsgaSArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGxpc3RJdGVtKSk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSA9PSBsaXN0SXRlbS5pdGVtKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIGluZGV4IGZvciBpdGVtOiBcIiArIGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vdCBmb3VuZCBpbmRleCBmb3IgaXRlbTogXCIgKyBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgc2VhcmNoIHRleHQgaGFzIG1vcmUgdGhhbiB0aGUgbWluIGNoYXJzIHJlcXVpcmVkXG4gICAgaWYgKGlzTWluQ2hhcnNUb1NlYXJjaFJlYWNoZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VcIik7XG4gICAgfVxuICAgIG9wZW5lZCA9IGZhbHNlO1xuICAgIGxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICghdGV4dCAmJiBzZWxlY3RGaXJzdElmRW1wdHkpIHtcbiAgICAgIGhpZ2hsaWdodEluZGV4ID0gMDtcbiAgICAgIHNlbGVjdEl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc01pbkNoYXJzVG9TZWFyY2hSZWFjaGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICBtaW5DaGFyYWN0ZXJzVG9TZWFyY2ggPiAxICYmIGZpbHRlcmVkVGV4dExlbmd0aCA8IG1pbkNoYXJhY3RlcnNUb1NlYXJjaFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUlmTWluQ2hhcnNUb1NlYXJjaFJlYWNoZWQoKSB7XG4gICAgaWYgKGlzTWluQ2hhcnNUb1NlYXJjaFJlYWNoZWQoKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJcIik7XG4gICAgfVxuXG4gICAgdGV4dCA9IFwiXCI7XG4gICAgc2VsZWN0ZWRJdGVtID0gbXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0RmlsdGVyKGtleXdvcmRzLCBmaWVsZCkge1xuICAgIHJldHVybiBpdGVtID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGl0ZW1bZmllbGRdO1xuXG4gICAgICBjb25zdCBuZXdJdGVtID0gT2JqZWN0LmFzc2lnbih7IGhpZ2hsaWdodGVkOiB1bmRlZmluZWQgfSwgaXRlbSk7XG4gICAgICBuZXdJdGVtLmhpZ2hsaWdodGVkID0gbGFiZWw7XG5cbiAgICAgIGNvbnN0IGxhYmVsTG93ZXJjYXNlID0gbGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGxhYmVsTG93ZXJjYXNlTm9BYyA9IGlnbm9yZUFjY2VudHNcbiAgICAgICAgPyByZW1vdmVBY2NlbnRzKGxhYmVsTG93ZXJjYXNlKVxuICAgICAgICA6IGxhYmVsTG93ZXJjYXNlO1xuXG4gICAgICBpZiAoa2V5d29yZHMgJiYga2V5d29yZHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5d29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQga2V5d29yZCA9IGtleXdvcmRzW2ldO1xuICAgICAgICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICAgICAgICBrZXl3b3JkID0gcmVtb3ZlQWNjZW50cyhrZXl3b3JkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qga2V5d29yZExlbiA9IGtleXdvcmQubGVuZ3RoO1xuXG4gICAgICAgICAgbGV0IHBvczEgPSAwO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBvczEgPSBsYWJlbExvd2VyY2FzZU5vQWMuaW5kZXhPZihrZXl3b3JkLCBwb3MxKTtcbiAgICAgICAgICAgIGlmIChwb3MxID49IDApIHtcbiAgICAgICAgICAgICAgbGV0IHBvczIgPSBwb3MxICsga2V5d29yZExlbjtcbiAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goW3BvczEsIHBvczJdKTtcbiAgICAgICAgICAgICAgcG9zMSA9IHBvczI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAocG9zMSAhPT0gLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qga2V5d29yZFBhdHRlcm5zID0gbmV3IFNldCgpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYWlyID0gcG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9zMSA9IHBhaXJbMF07XG4gICAgICAgICAgICBjb25zdCBwb3MyID0gcGFpclsxXTtcblxuICAgICAgICAgICAgY29uc3Qga2V5d29yZFBhdHRlcm4gPSBsYWJlbExvd2VyY2FzZS5zdWJzdHJpbmcocG9zMSwgcG9zMik7XG4gICAgICAgICAgICBrZXl3b3JkUGF0dGVybnMuYWRkKGtleXdvcmRQYXR0ZXJuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQga2V5d29yZFBhdHRlcm4gb2Yga2V5d29yZFBhdHRlcm5zKSB7XG4gICAgICAgICAgICAvLyBGSVhNRSBwc3Q6IHdvcmthcm9uZCBmb3Igd3JvbmcgcmVwbGFjZW1lbnQgPGI+IHRhZ3NcbiAgICAgICAgICAgIGlmIChrZXl3b3JkUGF0dGVybiA9PT0gXCJiXCIpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKFwiKFwiICsga2V5d29yZFBhdHRlcm4gKyBcIilcIiwgXCJpZ1wiKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3SGlnaGxpZ2h0ZWQgPSBuZXdJdGVtLmhpZ2hsaWdodGVkLnJlcGxhY2UoXG4gICAgICAgICAgICAgIHJlZyxcbiAgICAgICAgICAgICAgXCI8Yj4kMTwvYj5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uaGlnaGxpZ2h0ZWQgPSBuZXdIaWdobGlnaHRlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFjY2VudHMoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbmZpcm1lZChsaXN0SXRlbSkge1xuICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbS5pbmNsdWRlcyhsaXN0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsaXN0SXRlbSA9PSBzZWxlY3RlZEl0ZW07XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYXV0b2NvbXBsZXRlIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiAyLjI1ZW07XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlOm5vdCguaGlkZS1hcnJvdyk6bm90KC5pcy1sb2FkaW5nKTo6YWZ0ZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDAuNjI1ZW07XG4gICAgbWFyZ2luLXRvcDogLTAuNDM3NWVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgd2lkdGg6IDAuNjI1ZW07XG4gICAgYm9yZGVyLWNvbG9yOiAjMzI3M2RjO1xuICAgIHJpZ2h0OiAxLjEyNWVtO1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlLnNob3ctY2xlYXI6bm90KC5oaWRlLWFycm93KTo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAyLjNlbTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMTFweDtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGU6bm90KC5oaWRlLWFycm93KSAuYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS5zaG93LWNsZWFyOm5vdCguaGlkZS1hcnJvdykgLmF1dG9jb21wbGV0ZS1pbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMy4yZW07XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS5oaWRlLWFycm93LnNob3ctY2xlYXIgLmF1dG9jb21wbGV0ZS1pbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB0b3A6IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTUgKiAoMXJlbSArIDEwcHgpICsgMTVweCk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS1saXN0OmVtcHR5IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5hdXRvY29tcGxldGUtbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS5jb25maXJtZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODlmZWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTY5ZTI7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0tbm8tcmVzdWx0cyB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0tY3JlYXRlIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1sb2FkaW5nIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUtbGlzdC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlLnNob3ctY2xlYXIgLmF1dG9jb21wbGV0ZS1jbGVhci1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwLjFlbTtcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjZlbTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB6LWluZGV4OiA0O1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZTpub3QoLnNob3ctY2xlYXIpIC5hdXRvY29tcGxldGUtY2xlYXItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZSBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlLmlzLW11bHRpcGxlIC5pbnB1dC1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gICAgcGFkZGluZy1yaWdodDogMC40ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuaXMtbXVsdGlwbGUgLnRhZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuaXMtbXVsdGlwbGUgLnRhZy5pcy1kZWxldGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuaXMtbXVsdGlwbGUgLnRhZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuaXMtbXVsdGlwbGUgLmF1dG9jb21wbGV0ZS1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxIDEgNTBweDtcbiAgICBtaW4td2lkdGg6IDNlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2XG4gIGNsYXNzPVwie2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfVxuICB7aGlkZUFycm93IHx8ICFpdGVtcy5sZW5ndGggPyAnaGlkZS1hcnJvdycgOiAnJ31cbiAge211bHRpcGxlID8gJ2lzLW11bHRpcGxlJyA6ICcnfSBhdXRvY29tcGxldGUgc2VsZWN0IGlzLWZ1bGx3aWR0aCB7dW5pcXVlSWR9XCJcbiAgY2xhc3M6c2hvdy1jbGVhcj17Y2xlYXJhYmxlfVxuICBjbGFzczppcy1sb2FkaW5nPXtzaG93TG9hZGluZ0luZGljYXRvciAmJiBsb2FkaW5nfT5cbiAgPHNlbGVjdCBuYW1lPXtzZWxlY3ROYW1lfSBpZD17c2VsZWN0SWR9IHttdWx0aXBsZX0+XG4gICAgeyNpZiAhbXVsdGlwbGUgJiYgdmFsdWV9XG4gICAgICA8b3B0aW9uIHt2YWx1ZX0gc2VsZWN0ZWQ+e3RleHR9PC9vcHRpb24+XG4gICAgezplbHNlIGlmIG11bHRpcGxlICYmIHNlbGVjdGVkSXRlbX1cbiAgICAgIHsjZWFjaCBzZWxlY3RlZEl0ZW0gYXMgaX1cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsdWVGdW5jdGlvbihpLCB0cnVlKX0gc2VsZWN0ZWQ+XG4gICAgICAgICAge3NhZmVMYWJlbEZ1bmN0aW9uKGkpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuICA8L3NlbGVjdD5cbiAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgIHsjaWYgbXVsdGlwbGUgJiYgc2VsZWN0ZWRJdGVtfVxuICAgICAgeyNlYWNoIHNlbGVjdGVkSXRlbSBhcyB0YWdJdGVtfVxuICAgICAgICA8c2xvdFxuICAgICAgICAgIG5hbWU9XCJ0YWdcIlxuICAgICAgICAgIGxhYmVsPXtzYWZlTGFiZWxGdW5jdGlvbih0YWdJdGVtKX1cbiAgICAgICAgICBpdGVtPXt0YWdJdGVtfVxuICAgICAgICAgIHt1bnNlbGVjdEl0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzIGhhcy1hZGRvbnNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnXCI+e3NhZmVMYWJlbEZ1bmN0aW9uKHRhZ0l0ZW0pfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzPVwidGFnIGlzLWRlbGV0ZVwiXG4gICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0PXt1bnNlbGVjdEl0ZW0odGFnSXRlbSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2xvdD5cbiAgICAgIHsvZWFjaH1cbiAgICB7L2lmfVxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgY2xhc3M9XCJ7aW5wdXRDbGFzc05hbWUgPyBpbnB1dENsYXNzTmFtZSA6ICcnfSBpbnB1dCBhdXRvY29tcGxldGUtaW5wdXRcIlxuICAgICAgaWQ9e2lucHV0SWQgPyBpbnB1dElkIDogJyd9XG4gICAgICBhdXRvY29tcGxldGU9e2h0bWw1YXV0b2NvbXBsZXRlID8gJ29uJyA6ICdzb21lLW90aGVyLXRleHQnfVxuICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAge25hbWV9XG4gICAgICB7ZGlzYWJsZWR9XG4gICAgICB7dGl0bGV9XG4gICAgICByZWFkb25seT17cmVhZG9ubHkgfHwgKGxvY2sgJiYgc2VsZWN0ZWRJdGVtKX1cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBiaW5kOnZhbHVlPXt0ZXh0fVxuICAgICAgb246aW5wdXQ9e29uSW5wdXR9XG4gICAgICBvbjpmb2N1cz17b25Gb2N1c0ludGVybmFsfVxuICAgICAgb246Ymx1cj17b25CbHVySW50ZXJuYWx9XG4gICAgICBvbjprZXlkb3duPXtvbktleURvd259XG4gICAgICBvbjpjbGljaz17b25JbnB1dENsaWNrfVxuICAgICAgb246a2V5cHJlc3M9e29uS2V5UHJlc3N9IC8+XG4gICAgeyNpZiBjbGVhcmFibGV9XG4gICAgICA8c3BhbiBvbjpjbGljaz17Y2xlYXJ9IGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNsZWFyLWJ1dHRvblwiPiYjMTAwMDY7PC9zcGFuPlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ7ZHJvcGRvd25DbGFzc05hbWUgPyBkcm9wZG93bkNsYXNzTmFtZSA6ICcnfSBhdXRvY29tcGxldGUtbGlzdCB7c2hvd0xpc3QgPyAnJyA6ICdoaWRkZW4nfVxuICAgIGlzLWZ1bGx3aWR0aFwiXG4gICAgYmluZDp0aGlzPXtsaXN0fT5cbiAgICB7I2lmIGZpbHRlcmVkTGlzdEl0ZW1zICYmIGZpbHRlcmVkTGlzdEl0ZW1zLmxlbmd0aCA+IDB9XG4gICAgICB7I2VhY2ggZmlsdGVyZWRMaXN0SXRlbXMgYXMgbGlzdEl0ZW0sIGl9XG4gICAgICAgIHsjaWYgbGlzdEl0ZW0gJiYgKG1heEl0ZW1zVG9TaG93SW5MaXN0IDw9IDAgfHwgaSA8IG1heEl0ZW1zVG9TaG93SW5MaXN0KX1cbiAgICAgICAgICB7I2lmIGxpc3RJdGVtfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImF1dG9jb21wbGV0ZS1saXN0LWl0ZW0ge2kgPT09IGhpZ2hsaWdodEluZGV4ID8gJ3NlbGVjdGVkJyA6ICcnfVwiXG4gICAgICAgICAgICAgIGNsYXNzOmNvbmZpcm1lZD17aXNDb25maXJtZWQobGlzdEl0ZW0uaXRlbSl9XG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBvbkxpc3RJdGVtQ2xpY2sobGlzdEl0ZW0pfVxuICAgICAgICAgICAgICBvbjpwb2ludGVyZW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRJbmRleCA9IGk7XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8c2xvdFxuICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICBpdGVtPXtsaXN0SXRlbS5pdGVtfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtsaXN0SXRlbS5oaWdobGlnaHRlZCA/IGxpc3RJdGVtLmhpZ2hsaWdodGVkIDogbGlzdEl0ZW0ubGFiZWx9PlxuICAgICAgICAgICAgICAgIHsjaWYgbGlzdEl0ZW0uaGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgICAgICAgICB7QGh0bWwgbGlzdEl0ZW0uaGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAge0BodG1sIGxpc3RJdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvaWZ9XG4gICAgICB7L2VhY2h9XG5cbiAgICAgIHsjaWYgbWF4SXRlbXNUb1Nob3dJbkxpc3QgPiAwICYmIGZpbHRlcmVkTGlzdEl0ZW1zLmxlbmd0aCA+IG1heEl0ZW1zVG9TaG93SW5MaXN0fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1uby1yZXN1bHRzXCI+XG4gICAgICAgICAgLi4ue2ZpbHRlcmVkTGlzdEl0ZW1zLmxlbmd0aCAtIG1heEl0ZW1zVG9TaG93SW5MaXN0fSByZXN1bHRzIG5vdCBzaG93blxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgezplbHNlIGlmIGxvYWRpbmcgJiYgbG9hZGluZ1RleHR9XG4gICAgICA8ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1sb2FkaW5nXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsb2FkaW5nXCIge2xvYWRpbmdUZXh0fT57bG9hZGluZ1RleHR9PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgezplbHNlIGlmIGNyZWF0ZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLWNyZWF0ZVwiIG9uOmNsaWNrPXtzZWxlY3RJdGVtfT5cbiAgICAgICAgPHNsb3QgbmFtZT1cImNyZWF0ZVwiIHtjcmVhdGVUZXh0fT57Y3JlYXRlVGV4dH08L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICB7OmVsc2UgaWYgbm9SZXN1bHRzVGV4dH1cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLW5vLXJlc3VsdHNcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cIm5vLXJlc3VsdHNcIiB7bm9SZXN1bHRzVGV4dH0+e25vUmVzdWx0c1RleHR9PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgey9pZn1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN2ZWx0ZTp3aW5kb3cgb246Y2xpY2s9e29uRG9jdW1lbnRDbGlja30gLz5cbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDgsXG4gICAgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHRoZSBtYXhpbXVtIGxlbmd0aCBhbmQgaW5kZXggb2YgYW4gYXJyYXkuICovXG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZjAnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy52YWx1ZXNgIGFuZCBgXy52YWx1ZXNJbmAgd2hpY2ggY3JlYXRlcyBhblxuICogYXJyYXkgb2YgYG9iamVjdGAgcHJvcGVydHkgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5IG5hbWVzXG4gKiBvZiBgcHJvcHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gZ2V0IHZhbHVlcyBmb3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VWYWx1ZXMob2JqZWN0LCBwcm9wcykge1xuICByZXR1cm4gYXJyYXlNYXAocHJvcHMsIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBpdGVyYXRvcmAgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVyYXRvciBUaGUgaXRlcmF0b3IgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpdGVyYXRvclRvQXJyYXkoaXRlcmF0b3IpIHtcbiAgdmFyIGRhdGEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoIShkYXRhID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgcmVzdWx0LnB1c2goZGF0YS52YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlKSB8fCBbXTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLml0ZXJhdG9yIDogdW5kZWZpbmVkLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVGbG9vciA9IE1hdGguZmxvb3IsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCksXG4gICAgbmF0aXZlUmFuZG9tID0gTWF0aC5yYW5kb207XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsYW1wYCB3aGljaCBkb2Vzbid0IGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgVGhlIG51bWJlciB0byBjbGFtcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbG93ZXJdIFRoZSBsb3dlciBib3VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB1cHBlciBUaGUgdXBwZXIgYm91bmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjbGFtcGVkIG51bWJlci5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsYW1wKG51bWJlciwgbG93ZXIsIHVwcGVyKSB7XG4gIGlmIChudW1iZXIgPT09IG51bWJlcikge1xuICAgIGlmICh1cHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBudW1iZXIgPSBudW1iZXIgPD0gdXBwZXIgPyBudW1iZXIgOiB1cHBlcjtcbiAgICB9XG4gICAgaWYgKGxvd2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG51bWJlciA9IG51bWJlciA+PSBsb3dlciA/IG51bWJlciA6IGxvd2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yYW5kb21gIHdpdGhvdXQgc3VwcG9ydCBmb3IgcmV0dXJuaW5nXG4gKiBmbG9hdGluZy1wb2ludCBudW1iZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbG93ZXIgVGhlIGxvd2VyIGJvdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBib3VuZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHJhbmRvbSBudW1iZXIuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSYW5kb20obG93ZXIsIHVwcGVyKSB7XG4gIHJldHVybiBsb3dlciArIG5hdGl2ZUZsb29yKG5hdGl2ZVJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEdldHMgYG5gIHJhbmRvbSBlbGVtZW50cyBhdCB1bmlxdWUga2V5cyBmcm9tIGBjb2xsZWN0aW9uYCB1cCB0byB0aGVcbiAqIHNpemUgb2YgYGNvbGxlY3Rpb25gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzYW1wbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW249MV0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBzYW1wbGUuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSByYW5kb20gZWxlbWVudHMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc2FtcGxlU2l6ZShbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzMsIDFdXG4gKlxuICogXy5zYW1wbGVTaXplKFsxLCAyLCAzXSwgNCk7XG4gKiAvLyA9PiBbMiwgMywgMV1cbiAqL1xuZnVuY3Rpb24gc2FtcGxlU2l6ZShjb2xsZWN0aW9uLCBuLCBndWFyZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRvQXJyYXkoY29sbGVjdGlvbiksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICBpZiAoKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgbiwgZ3VhcmQpIDogbiA9PT0gdW5kZWZpbmVkKSkge1xuICAgIG4gPSAxO1xuICB9IGVsc2Uge1xuICAgIG4gPSBiYXNlQ2xhbXAodG9JbnRlZ2VyKG4pLCAwLCBsZW5ndGgpO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHZhciByYW5kID0gYmFzZVJhbmRvbShpbmRleCwgbGFzdEluZGV4KSxcbiAgICAgICAgdmFsdWUgPSByZXN1bHRbcmFuZF07XG5cbiAgICByZXN1bHRbcmFuZF0gPSByZXN1bHRbaW5kZXhdO1xuICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTtcbiAgfVxuICByZXN1bHQubGVuZ3RoID0gbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHNodWZmbGVkIHZhbHVlcywgdXNpbmcgYSB2ZXJzaW9uIG9mIHRoZVxuICogW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXItWWF0ZXNfc2h1ZmZsZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNodWZmbGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBzaHVmZmxlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zaHVmZmxlKFsxLCAyLCAzLCA0XSk7XG4gKiAvLyA9PiBbNCwgMSwgMywgMl1cbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBzYW1wbGVTaXplKGNvbGxlY3Rpb24sIE1BWF9BUlJBWV9MRU5HVEgpO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0FycmF5KHsgJ2EnOiAxLCAnYic6IDIgfSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiBfLnRvQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddXG4gKlxuICogXy50b0FycmF5KDEpO1xuICogLy8gPT4gW11cbiAqXG4gKiBfLnRvQXJyYXkobnVsbCk7XG4gKiAvLyA9PiBbXVxuICovXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyBzdHJpbmdUb0FycmF5KHZhbHVlKSA6IGNvcHlBcnJheSh2YWx1ZSk7XG4gIH1cbiAgaWYgKGl0ZXJhdG9yU3ltYm9sICYmIHZhbHVlW2l0ZXJhdG9yU3ltYm9sXSkge1xuICAgIHJldHVybiBpdGVyYXRvclRvQXJyYXkodmFsdWVbaXRlcmF0b3JTeW1ib2xdKCkpO1xuICB9XG4gIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgZnVuYyA9IHRhZyA9PSBtYXBUYWcgPyBtYXBUb0FycmF5IDogKHRhZyA9PSBzZXRUYWcgPyBzZXRUb0FycmF5IDogdmFsdWVzKTtcblxuICByZXR1cm4gZnVuYyh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydHkgdmFsdWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLnZhbHVlcyhuZXcgRm9vKTtcbiAqIC8vID0+IFsxLCAyXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8udmFsdWVzKCdoaScpO1xuICogLy8gPT4gWydoJywgJ2knXVxuICovXG5mdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPyBiYXNlVmFsdWVzKG9iamVjdCwga2V5cyhvYmplY3QpKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNodWZmbGU7XG4iLCJcbmZ1bmN0aW9uIG5vb3AoKSB7IH1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBoYXNfY2FuY2VsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmNhbmNlbCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IHsgbm9vcCwgcnVuX2FsbCwgaXNfZnVuY3Rpb24sIHNhZmVfbm90X2VxdWFsLCBpc19wcm9taXNlLCBoYXNfY2FuY2VsIH07XG4iLCJcbmltcG9ydCB7bm9vcCwgaXNfZnVuY3Rpb24sIHJ1bl9hbGx9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICBjb25zdCB7c3Vic2NyaWJlLCBwaXBlfSA9IHdyaXRhYmxlKHZhbHVlLCBzdGFydCk7XG4gICAgcmV0dXJuIHsgc3Vic2NyaWJlLCBwaXBlIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgc1sxXSgpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBwaXBlKC4uLm9wZXJhdG9ycykge1xuICAgICAgICByZXR1cm4gb3BlcmF0b3JzLnJlZHVjZSgoc3JjLCBvcGVyYXRvcikgPT4gb3BlcmF0b3Ioc3JjLCB2YWx1ZSksIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlLCBwaXBlIH07XG59XG5cblxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICogQHBhcmFtIHtTdG9yZXN9IHN0b3JlcyBpbnB1dCBzdG9yZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oU3RvcmVzPSwgZnVuY3Rpb24oKik9KToqfWZuIGZ1bmN0aW9uIGNhbGxiYWNrIHRoYXQgYWdncmVnYXRlcyB0aGUgdmFsdWVzXG4gKiBAcGFyYW0geyo9fWluaXRpYWxfdmFsdWUgd2hlbiB1c2VkIGFzeW5jaHJvbm91c2x5XG4gKi9cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3RvcmUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IHdyaXRhYmxlLCByZWFkYWJsZSwgZGVyaXZlZCB9O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJcbmltcG9ydCBfZGVib3VuY2UgZnJvbSBcImxvZGFzaC9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHtyZWFkYWJsZX0gZnJvbSBcIi4uL3N0b3JlLmpzXCI7XG5cbi8qKlxuICogIGRlYm91bmNlXG4gKlxuICogIEJhc2VkIG9uIGxvZGFzaCBvcHRpb25zOlxuICpcbiAqICBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiAgQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqICBAcmV0dXJucyB7e3N1YnNjcmliZSwgcGlwZSwgY2FuY2VsLCBmbHVzaH19XG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2Uod2FpdCwgb3B0aW9ucykge1xuXG4gICAgcmV0dXJuIHNyYyA9PiB7XG4gICAgICAgIGxldCBkZWJvdW5jZWQgPSBfZGVib3VuY2UoKHYsc2V0KSA9PiBzZXQodiksIHdhaXQsIG9wdGlvbnMpO1xuICAgICAgICBsZXQge2NhbmNlbCwgZmx1c2h9ID0gZGVib3VuY2VkO1xuICAgICAgICBsZXQge3N1YnNjcmliZSwgcGlwZX09IHJlYWRhYmxlKHVuZGVmaW5lZCwgc2V0ID0+IHtcbiAgICAgICAgICAgIGxldCB1bnN1YiA9IHNyYy5zdWJzY3JpYmUodiA9PiBkZWJvdW5jZWQodixzZXQpKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7c3Vic2NyaWJlLCBwaXBlLCBjYW5jZWwsIGZsdXNofVxuICAgIH1cblxufVxuXG4vKipcbiAqICB0aHJvdHRsZVxuICpcbiAqICBVc2VzIGRlYm91bmNlIHdpdGggbWF4V2FpdCBzZXQgKGFzIGRvZXMgbG9kYXNoKVxuICpcbiAqICBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiAgQHJldHVybnMge3tzdWJzY3JpYmUsIHBpcGUsIGNhbmNlbCwgZmx1c2h9fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZSh3YWl0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRlYm91bmNlKHdhaXQsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgJ21heFdhaXQnOiB3YWl0LFxuICAgIH0pO1xufVxuXG4iLCJcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXG4vKipcbiAqIHN0YXJ0V2l0aFxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Z1bmN0aW9uKHtzdWJzY3JpYmUsIHBpcGV9KToge3N1YnNjcmliZSwgcGlwZX19IFJlYWRhYmxlIG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFdpdGgodmFsdWUpIHtcblxuICAgIHJldHVybiAoe3N1YnNjcmliZSwgcGlwZX0pID0+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcGUoLi4ub3BlcmF0b3JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhdG9ycy5yZWR1Y2UoKHNyYywgb3BlcmF0b3IpID0+IG9wZXJhdG9yKHNyYyksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgSWNvbiBmcm9tIFwiZmEtc3ZlbHRlL3NyYy9JY29uLnN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBmYVZvbHVtZVVwIGFzIGZhU291bmRPbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVVcFwiO1xuICBpbXBvcnQgeyBmYVZvbHVtZU11dGUgYXMgZmFTb3VuZE9mZiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVNdXRlXCI7XG4gIGltcG9ydCB7IGZhUGxheSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbGF5XCI7XG4gIGltcG9ydCB7IGZhUGF1c2UgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGF1c2VcIjtcbiAgaW1wb3J0IHsgZmFDb2cgYXMgZmFTZXR0aW5ncyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDb2dcIjtcbiAgaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUhvbWVcIjtcbiAgaW1wb3J0IHsgZmFEb25hdGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRG9uYXRlXCI7XG4gIGltcG9ydCB7IGZhRXhwYW5kQWx0IGFzIGZhRXhwYW5kIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4cGFuZEFsdFwiO1xuICBpbXBvcnQgeyBmYUNsb3VkRG93bmxvYWRBbHQgYXMgZmFEb3dubG9hZCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDbG91ZERvd25sb2FkQWx0XCI7XG4gIGltcG9ydCB7IGZhRGljZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEaWNlXCI7XG4gIGltcG9ydCB7IGZhUGhvdG9WaWRlbyBhcyBmYUltYWdlVmlkZW8gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGhvdG9WaWRlb1wiO1xuICBpbXBvcnQgeyBmYUltYWdlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUltYWdlXCI7XG4gIGltcG9ydCB7IGZhVmlkZW8gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVmlkZW9cIjtcbiAgaW1wb3J0IHsgZmFTdGFyIGFzIGZhRmF2IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXJcIjtcbiAgaW1wb3J0IHsgZmFTdGFyIGFzIGZhVW5GYXYgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMvZmFTdGFyXCI7XG4gIGltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaFwiO1xuICBpbXBvcnQgeyBmYVN5bmMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY1wiO1xuICBpbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Bpbm5lclwiO1xuICBpbXBvcnQgeyBmYVBsdXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1c0NpcmNsZVwiO1xuICBpbXBvcnQgeyBmYU1pbnVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1pbnVzQ2lyY2xlXCI7XG4gIGltcG9ydCB7IGZhRXllIGFzIGZhU2hvdyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeWVcIjtcbiAgaW1wb3J0IHsgZmFFeWVTbGFzaCBhcyBmYUhpZGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXllU2xhc2hcIjtcbiAgaW1wb3J0IHsgZmFUaCBhcyBmYUNvbHVtbnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGhcIjtcbiAgaW1wb3J0IHsgZmFFeHBhbmRBcnJvd3NBbHQgYXMgZmFGdWxsc2NyZWVuIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4cGFuZEFycm93c0FsdFwiO1xuXG4gIGltcG9ydCB7IGZhTW9iaWxlQWx0IGFzIGZhUG9ydHJhaXQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTW9iaWxlQWx0XCI7XG4gIGltcG9ydCB7IGZhRGVza3RvcCBhcyBmYUxhbmRzY2FwZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEZXNrdG9wXCI7XG5cbiAgaW1wb3J0IEF1dG9Db21wbGV0ZSBmcm9tIFwic2ltcGxlLXN2ZWx0ZS1hdXRvY29tcGxldGVcIjtcblxuICBpbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3Muc3ZlbHRlXCI7XG5cbiAgaW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IHsgZ290byBhcyBhaHJlZiB9IGZyb20gXCJAc2FwcGVyL2FwcFwiO1xuXG4gIGltcG9ydCBzaHVmZmxlIGZyb20gXCJsb2Rhc2guc2h1ZmZsZVwiO1xuXG4gIGltcG9ydCB7IEFQSV9LRVkgfSBmcm9tIFwiLi4vY29uZmlnLmpzXCI7XG4gIGltcG9ydCB7IGdldF90dW1ibHJfcG9zdHMsIHF1ZXJ5cCB9IGZyb20gXCIuLi9fdHVtYmxyX3V0aWxzLnRzXCI7XG5cbiAgXG5cbiAgaW1wb3J0IHsgd3JpdGFibGUsIHRocm90dGxlLCBzdGFydFdpdGggfSBmcm9tIFwic3ZlbHRlLXBpcGVhYmxlLXN0b3JlXCI7XG5cbiAgaW1wb3J0IHtcbiAgICBhdXRvcGxheSxcbiAgICBhdXRvcGxheWludGVydmFsLFxuICAgIGltYWdlVmlkZW8sXG4gICAgcG9ydHJhaXRMYW5kc2NhcGUsXG4gICAgZmF2b3JpdGUsXG4gICAgb3ZlcjE4LFxuICAgIHByZWZldGNoLFxuICAgIHByZWZldGNoTnVtLFxuICAgIGhpcmVzLFxuICAgIGxvcmVzLFxuICAgIG11dGVkLFxuICAgIGxheW91dCxcbiAgICBtdWx0aXJlZGRpdCxcbiAgICBvbGRyZWRkaXQsXG4gICAgaGlkZVVJb25TdGFydCxcbiAgICBhcGlLZXlcbiAgfSBmcm9tIFwiLi4vX3ByZWZzXCI7XG4gIGF1dG9wbGF5LnVzZUxvY2FsU3RvcmFnZShmYWxzZSk7XG4gIGF1dG9wbGF5aW50ZXJ2YWwudXNlTG9jYWxTdG9yYWdlKDMpO1xuICBpbWFnZVZpZGVvLnVzZUxvY2FsU3RvcmFnZSgwKTtcbiAgcG9ydHJhaXRMYW5kc2NhcGUudXNlTG9jYWxTdG9yYWdlKDApO1xuICBmYXZvcml0ZS51c2VMb2NhbFN0b3JhZ2Uoe30pO1xuICBvdmVyMTgudXNlTG9jYWxTdG9yYWdlKDEpO1xuICBtdWx0aXJlZGRpdC51c2VMb2NhbFN0b3JhZ2Uoe30pO1xuICBwcmVmZXRjaC51c2VMb2NhbFN0b3JhZ2UodHJ1ZSk7XG4gIHByZWZldGNoTnVtLnVzZUxvY2FsU3RvcmFnZSg1MCk7XG4gIGhpcmVzLnVzZUxvY2FsU3RvcmFnZShmYWxzZSk7XG4gIGxvcmVzLnVzZUxvY2FsU3RvcmFnZSh0cnVlKTtcbiAgb2xkcmVkZGl0LnVzZUxvY2FsU3RvcmFnZShmYWxzZSk7XG4gIG11dGVkLnVzZUxvY2FsU3RvcmFnZSh0cnVlKTtcbiAgbGF5b3V0LnVzZUxvY2FsU3RvcmFnZSgwKTtcbiAgaGlkZVVJb25TdGFydC51c2VMb2NhbFN0b3JhZ2UoZmFsc2UpO1xuICBhcGlLZXkudXNlTG9jYWxTdG9yYWdlKCcnKTtcblxuICBleHBvcnQgbGV0IHBhcmFtcywgc2x1Z3N0cjtcbiAgZXhwb3J0IGxldCBwb3N0cyA9IFtdO1xuICBleHBvcnQgbGV0IGFmdGVyID0gbnVsbDtcbiAgZXhwb3J0IGxldCByZXM7XG4gIGV4cG9ydCBsZXQgbW9kZSA9IFwidHVtYmxyXCI7XG4gIGV4cG9ydCBsZXQgcGFnZVR5cGUgPSBcInVzZXJcIjtcblxuICBjb25zb2xlLmxvZyhcIlBvc3RzIGZyb20gQVBJOlwiLCBwb3N0cyk7XG5cbiAgbGV0IGRhdGE7XG4gIGxldCBkaXNwbGF5cG9zdHMgPSBbXTtcbiAgY29uc29sZS5sb2coXCJEaXNwbGF5IFBvc3RzIChpbml0aWFsKTpcIiwgZGlzcGxheXBvc3RzKTtcbiAgbGV0IHVpVmlzaWJsZSA9ICEkaGlkZVVJb25TdGFydDtcbiAgbGV0IGhpZGVDdXJzb3IgPSAkaGlkZVVJb25TdGFydDtcbiAgbGV0IGhpZGVDdXJzb3JUaW1lcklkID0gMDtcbiAgbGV0IHRpdGxlVmlzaWJsZSA9IHRydWU7XG4gIGxldCBudW1GYXZvcml0ZTtcbiAgbGV0IHRpbnlnb3RvO1xuICBsZXQgdGl0bGU7XG4gIGxldCBhbGJ1bWluZGV4ID0gMDtcblxuICAkOiB7XG4gICAgaWYgKGN1cnJwb3N0LmlzX2FsYnVtKSB7XG4gICAgICB0aXRsZSA9IGAoJHthbGJ1bWluZGV4ICsgMX0vJHtjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bS5sZW5ndGh9KSAke1xuICAgICAgICBjdXJycG9zdC50aXRsZVxuICAgICAgfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gY3VycnBvc3QudGl0bGU7XG4gICAgfVxuICB9XG5cbiAgbGV0IGJsb2dJZGVudGlmaWVyO1xuXG4gICQ6IGJsb2dJZGVudGlmaWVyID0gc2x1Z3N0cjtcblxuICAkOiB7XG4gICAgaWYgKCRnb3RvRWxXaWR0aCA+IDEwMDApIHtcbiAgICAgIC8vIHBhZGRpbmcgb24gYm90aCBzaWRlc1xuICAgICAgbGV0IG51bUdvdG9Db250cm9sc0luT25lUm93ID0gKCRnb3RvRWxXaWR0aCAtIDE1NCAqIDIpIC8gMzI7XG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzUm93cyA9XG4gICAgICAgIChkaXNwbGF5cG9zdHMubGVuZ3RoICsgNSkgLyBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdztcbiAgICAgIHRpbnlnb3RvID0gbnVtR290b0NvbnRyb2xzUm93cyA+IDM7XG4gICAgfSBlbHNlIGlmICgkZ290b0VsV2lkdGggPiA4MDApIHtcbiAgICAgIC8vIHBhZGRpbmcgb24gcmlnaHQgc2lkZVxuICAgICAgbGV0IG51bUdvdG9Db250cm9sc0luT25lUm93ID0gKCRnb3RvRWxXaWR0aCAtICgxNTQgKyAxNCkpIC8gMzI7XG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzUm93cyA9XG4gICAgICAgIChkaXNwbGF5cG9zdHMubGVuZ3RoICsgNSkgLyBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdztcbiAgICAgIHRpbnlnb3RvID0gbnVtR290b0NvbnRyb2xzUm93cyA+IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vIHBhZGRpbmdcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdyA9ICgkZ290b0VsV2lkdGggLSAoMTQgKyAxNCkpIC8gMzI7XG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzUm93cyA9XG4gICAgICAgIChkaXNwbGF5cG9zdHMubGVuZ3RoICsgNSkgLyBudW1Hb3RvQ29udHJvbHNJbk9uZVJvdztcbiAgICAgIHRpbnlnb3RvID0gbnVtR290b0NvbnRyb2xzUm93cyA+IDM7XG4gICAgfVxuICB9XG5cbiAgLy8gMTQ0MCBpcyB0byBzZXQgbnVtQ29scyB0byAzLiBTZXR0aW5nIHRvIGAwYCB3b3VsZCBtZWFuIHdlIHN0YXJ0IHdpdGggMSBjb2wsIGFuZCB0aGVuIHF1aWNrbHkgdXBkYXRlIHRvIDMgb24gZGVza3RvcC5cbiAgY29uc3QgX2dvdG9FbFdpZHRoID0gd3JpdGFibGUoMTQ0MCk7XG4gIGNvbnN0IGdvdG9FbFdpZHRoID0gX2dvdG9FbFdpZHRoLnBpcGUodGhyb3R0bGUoNTAwKSwgc3RhcnRXaXRoKDE0NDApKTtcblxuICAkOiBsb2FkRXJyb3IgPSByZXMgJiYgIXJlcy5yZXMub2s7XG4gIGxldCBsb2FkaW5nID0gZmFsc2U7XG4gIGxldCByZWxvYWRzdHIgPSBcIkxvYWQgbW9yZVwiO1xuICBsZXQgbmF2aWdhdGlvbiA9IGZhbHNlO1xuXG4gIGxldCBpbWFnZVZpZGVvU3RyID0gXCJcIjtcbiAgbGV0IHBvcnRyYWl0TGFuZHNjYXBlU3RyID0gXCJcIjtcbiAgbGV0IGRvd25sb2Fkc3RyID0gXCJcIjtcbiAgbGV0IGF1dG9wbGF5c3RyID0gXCJcIjtcbiAgbGV0IG92ZXIxOHN0ciA9IFwiXCI7XG4gIGxldCBkZWVwc2VhcmNoc3RyID0gXCJcIjsgLy8gRGVjbGFyZSBkZWVwc2VhcmNoc3RyXG4gIFxuICBsZXQgc2hvd2hpZGVzdHIgPSBcIlNob3cgKGgpXCI7XG4gIGxldCBtdXRlZHN0ciA9IFwiU291bmQgT2ZmXCI7XG5cbiAgbGV0IGF1dG9wbGF5dGltZXI7XG5cbiAgbGV0IGZpbHRlclJlZjtcbiAgbGV0IGZpbHRlckV4cGFuZGVkID0gZmFsc2U7XG4gIGxldCBmaWx0ZXJWYWx1ZSA9IFwiXCI7XG4gIGxldCBzdWJyZWRkaXRTZWFyY2hWYWx1ZSA9IFwiXCI7IC8vIERlY2xhcmUgc3VicmVkZGl0U2VhcmNoVmFsdWVcblxuICBsZXQgc2hvd1NldHRpbmdzID0gZmFsc2U7XG5cbiAgbGV0IGN1cnJwb3N0ID0geyB0aXRsZTogXCJMb2FkaW5nIC4uXCIgfTtcbiAgbGV0IG5leHR1cmxzID0gW107XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBhc3luYyBmdW5jdGlvbiBsb2FkTW9yZSgpIHtcbiAgICBpZiAobG9hZGluZykgcmV0dXJuO1xuXG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgcmVsb2Fkc3RyID0gXCJMb2FkaW5nIC4uXCI7XG5cbiAgICBsZXQgbmV3cG9zdHM7XG5cbiAgICBpZiAobW9kZSA9PT0gXCJ0dW1ibHJcIikge1xuICAgICAgbGV0IHVzZUFwaUtleSA9ICRhcGlLZXkgfHwgQVBJX0tFWTtcbiAgICAgIGxldCB1cmw7XG4gICAgICBpZiAocGFnZVR5cGUgPT09ICdzZWFyY2gnKSB7XG4gICAgICAgIHVybCA9IGBodHRwczovL2FwaS50dW1ibHIuY29tL3YyL3RhZ2dlZD90YWc9JHtibG9nSWRlbnRpZmllcn0mYXBpX2tleT0ke3VzZUFwaUtleX0mYmVmb3JlPSR7YWZ0ZXIgfHwgJyd9JiR7cXVlcnlwKHBhcmFtcyl9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IGBodHRwczovL2FwaS50dW1ibHIuY29tL3YyL2Jsb2cvJHtibG9nSWRlbnRpZmllcn0vcG9zdHM/YXBpX2tleT0ke3VzZUFwaUtleX0mb2Zmc2V0PSR7YWZ0ZXIgfHwgJyd9JiR7cXVlcnlwKHBhcmFtcyl9YDtcbiAgICAgIH1cblxuICAgICAgKHtcbiAgICAgICAgcG9zdHM6IG5ld3Bvc3RzLFxuICAgICAgICBhZnRlcixcbiAgICAgICAgLi4ucmVzXG4gICAgICB9ID0gYXdhaXQgZ2V0X3R1bWJscl9wb3N0cyh1cmwpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gQVBJIFJlc3BvbnNlIChyZXMgb2JqZWN0KTpcIiwgcmVzKTtcbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gTmV3IHBvc3RzIHJlY2VpdmVkOlwiLCBuZXdwb3N0cy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBDdXJyZW50IHBvc3RzIGFycmF5IGJlZm9yZSBjb21iaW5pbmc6XCIsIHBvc3RzLmxlbmd0aCk7XG5cbiAgICAvLyBsb2FkIGBmYXZvcml0ZWAgZnJvbSBsb2NhbHN0b3JhZ2VcbiAgICBmb3IgKGxldCBwIG9mIG5ld3Bvc3RzKSB7XG4gICAgICBwW1wiZmF2b3JpdGVcIl0gPSAhISgoJGZhdm9yaXRlIHx8IHt9KVtwLnVybF0/LmZhdm9yaXRlKTtcbiAgICB9XG5cbiAgICAvLyBDb21iaW5lIGBwb3N0c2AgYW5kIGBuZXdwb3N0c2AgYW5kIHJlbW92ZSBkdXBsaWNhdGVzIGZyb20gbXVsdGlwbGUgbmV0d29yayByZXF1ZXN0c1xuICAgIHBvc3RzID0gWy4uLnBvc3RzLCAuLi5uZXdwb3N0c10ucmVkdWNlKFxuICAgICAgKHIsIGkpID0+ICghci5zb21lKChqKSA9PiBpLmlkID09PSBqLmlkKSA/IFsuLi5yLCBpXSA6IHIpLFxuICAgICAgW11cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBQb3N0cyBhZnRlciBpbml0aWFsIGNvbWJpbmUgKGJlZm9yZSBVUkwgZGVkdXBlKTogXCIsIHBvc3RzLmxlbmd0aCk7XG5cbiAgICAvLyBSZW1vdmUgZHVwbGljYXRlcywgYmFzZWQgb24gYHVybGBcbiAgICBwb3N0cyA9IHBvc3RzLmZpbHRlcigodiwgaSwgYSkgPT4gYS5maW5kSW5kZXgoKHQpID0+IHQudXJsID09IHYudXJsKSA9PT0gaSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gQWZ0ZXIgZGVkdXBlL1RvdGFsIGxvYWRlZDogXCIsIHBvc3RzLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIE5leHQgJ2FmdGVyJyB2YWx1ZTpcIiwgYWZ0ZXIpO1xuXG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIHJlbG9hZHN0ciA9IFwiTG9hZCBtb3JlXCI7XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAvLyBBbHdheXMgdHJ5IHRvIGxvYWQgZGF0YSBvbiBtb3VudCwgcmVnYXJkbGVzcyBvZiBBUEkga2V5IHN0YXR1c1xuICAgIGxvYWRNb3JlKCk7XG4gICAgLy8gU3RhcnQgYXV0b3BsYXkgYnkgZGVmYXVsdFxuICAgIGlmICgkYXV0b3BsYXkpIHtcbiAgICAgIHN0YXJ0QXV0b1BsYXkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QXV0b1BsYXkoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnU1RBUlQnKVxuICAgIGF1dG9wbGF5dGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBJZiBgYXV0b3BsYXlgIGlzIG9mZiBhbmQgaXQgaXMgYSB2aWRlbywgdGhlIHZpZGVvIHdpbGwgcHJvZ3Jlc3MgYnkgaXRzZWxmIHZpYSBvbjplbmRlZFxuICAgICAgaWYgKCRhdXRvcGxheSAmJiBjdXJycG9zdC5pc19pbWFnZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tIGlORVhUJylcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICghJGF1dG9wbGF5ICYmIGN1cnJwb3N0LmlzX3ZpZGVvKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0gdk5FWFQnKVxuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSwgJGF1dG9wbGF5aW50ZXJ2YWwgKiAxMDAwKTtcblxuICAgIGF1dG9wbGF5LnNldCh0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgaWYgKGN1cnJwb3N0LmlzX2FsYnVtICYmIGFsYnVtaW5kZXggPiAwKSB7XG4gICAgICBhbGJ1bVByZXYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbVByZXYoKTtcbiAgICAgIGF3YWl0IHRpY2soKTsgLy8gRW5zdXJlIGN1cnJwb3N0IGlzIHVwZGF0ZWRcbiAgICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSkge1xuICAgICAgICBhbGJ1bWluZGV4ID0gY3VycnBvc3QucHJldmlldy5pbWcuYWxidW0ubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSAmJiAhaXNFbmRPZkFsYnVtKCkpIHtcbiAgICAgIGFsYnVtTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtTmV4dCgpO1xuICAgICAgYXdhaXQgdGljaygpOyAvLyBFbnN1cmUgY3VycnBvc3QgaXMgdXBkYXRlZFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvUGxheSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdTVE9QJylcbiAgICBjbGVhckludGVydmFsKGF1dG9wbGF5dGltZXIpO1xuICAgIGF1dG9wbGF5LnNldChmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQW5kU3RhcnRBdXRvUGxheSgpIHtcbiAgICBzdG9wQXV0b1BsYXkoKTtcblxuICAgIHN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUF1dG9QbGF5KCkge1xuICAgIGlmICgkYXV0b3BsYXkpIHtcbiAgICAgIHN0b3BBdXRvUGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW1hZ2VWaWRlbygpIHtcbiAgICAkaW1hZ2VWaWRlbyA9ICRpbWFnZVZpZGVvICsgMTtcblxuICAgIGlmICgkaW1hZ2VWaWRlbyA9PSAzKSB7XG4gICAgICAkaW1hZ2VWaWRlbyA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5pcUJ5KGEsIGtleSkge1xuICAgIHZhciBzZWVuID0ge307XG4gICAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGsgPSBrZXkoaXRlbSk7XG4gICAgICAgIHJldHVybiBzZWVuLmhhc093blByb3BlcnR5KGspID8gZmFsc2UgOiAoc2VlbltrXSA9IHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXV0ZWQoKSB7XG4gICAgJG11dGVkID0gISRtdXRlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBvcnRyYWl0TGFuZHNjYXBlKCkge1xuICAgICRwb3J0cmFpdExhbmRzY2FwZSA9ICRwb3J0cmFpdExhbmRzY2FwZSArIDE7XG5cbiAgICBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDMpIHtcbiAgICAgICRwb3J0cmFpdExhbmRzY2FwZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlbmRlclZpZGVvID0gdHJ1ZTtcblxuICAvLyBTb21lIG9wZXJhdGlvbnMgbGlrZSBmYXYvdW5mYXYgY2F1c2VzIHZpZGVvIHRvIHJlLXJlbmRlclxuICAvLyBzaW5jZSB3ZSdyZSBjaGFuZ2luZyBwb3N0LmZhdm9yaXRlLiBUaGlzIHNob3VsZCBoZWxwIHNraXAgaXRcbiAgbGV0IHNraXBSZW5kZXJWaWRlbyA9IGZhbHNlO1xuXG4gICQ6IHtcbiAgICBpZiAoIXNraXBSZW5kZXJWaWRlbykgcmVNb3VudFZpZGVvKGN1cnJwb3N0LnByZXZpZXcpO1xuICAgIHNraXBSZW5kZXJWaWRlbyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVNb3VudFZpZGVvKCkge1xuICAgIHJlbmRlclZpZGVvID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiAocmVuZGVyVmlkZW8gPSB0cnVlKSwgMCk7XG4gIH1cblxuICAkOiB7XG4gICAgLy8gU3VicmVkZGl0IHNlYXJjaFxuICAgIGlmIChzdWJyZWRkaXRTZWFyY2hWYWx1ZSkge1xuICAgICAgLy9zdWJyZWRkaXRTZWFyY2hWaXNpYmxlID0gZmFsc2U7XG4gICAgICAvL2FocmVmKGAvci8ke3N1YnJlZGRpdFNlYXJjaFZhbHVlfWApO1xuICAgICAgLy9zdWJyZWRkaXRTZWFyY2hWYWx1ZSA9IFwiXCI7XG4gICAgICAvL3N1YnJlZGRpdFNlYXJjaFZhbHVlUmF3ID0gXCJcIjtcbiAgICAgIGp1bXBUb1N1YlJlZGRpdChzdWJyZWRkaXRTZWFyY2hWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIG51bUZhdm9yaXRlID0gZGlzcGxheXBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mYXZvcml0ZSA9PSB0cnVlKS5sZW5ndGg7XG5cbiAgICBpZiAoIW51bUZhdm9yaXRlKSB7XG4gICAgICBkb3dubG9hZHN0ciA9IGBOb3RoaW5nIHRvIGRvd25sb2FkYDtcbiAgICB9IGVsc2UgaWYgKG51bUZhdm9yaXRlID09IDEpIHtcbiAgICAgIGRvd25sb2Fkc3RyID0gYERvd25sb2FkICR7bnVtRmF2b3JpdGV9IGZpbGVgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb3dubG9hZHN0ciA9IGBEb3dubG9hZCAke251bUZhdm9yaXRlfSBmaWxlc2A7XG4gICAgfVxuICAgIGF1dG9wbGF5c3RyID0gYEF1dG9wbGF5IGlzICR7JGF1dG9wbGF5ID8gXCJvblwiIDogXCJvZmZcIn1gO1xuICAgIGRlZXBzZWFyY2hzdHIgPSBgU2VhcmNoIGZvciAke2ZpbHRlclZhbHVlfWA7XG5cbiAgICBtdXRlZHN0ciA9IGBTb3VuZCAkeyRtdXRlZCA/IFwib2ZmXCIgOiBcIm9uXCJ9YDtcblxuICAgIGlmICgkb3ZlcjE4ID09IDApIHtcbiAgICAgIG92ZXIxOHN0ciA9IFwibnNmdyBvZmZcIjtcbiAgICB9IGVsc2UgaWYgKCRvdmVyMTggPT0gMSkge1xuICAgICAgb3ZlcjE4c3RyID0gXCJuc2Z3IG9uXCI7XG4gICAgfSBlbHNlIGlmICgkb3ZlcjE4ID09IDIpIHtcbiAgICAgIG92ZXIxOHN0ciA9IFwibnNmdyBvbmx5XCI7XG4gICAgfVxuXG4gICAgaWYgKCRpbWFnZVZpZGVvID09IDApIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgYm90aCBpbWFnZSBhbmQgdmlkZW9cIjtcbiAgICB9IGVsc2UgaWYgKCRpbWFnZVZpZGVvID09IDEpIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgdmlkZW9zIG9ubHlcIjtcbiAgICB9IGVsc2UgaWYgKCRpbWFnZVZpZGVvID09IDIpIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgaW1hZ2VzIG9ubHlcIjtcbiAgICB9XG5cbiAgICBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDApIHtcbiAgICAgIHBvcnRyYWl0TGFuZHNjYXBlU3RyID0gXCJTaG93IGFsbCBtZWRpYVwiO1xuICAgIH0gZWxzZSBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDEpIHtcbiAgICAgIHBvcnRyYWl0TGFuZHNjYXBlU3RyID0gXCJTaG93IG9ubHkgcG9ydHJhaXQgbWVkaWFcIjtcbiAgICB9IGVsc2UgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAyKSB7XG4gICAgICBwb3J0cmFpdExhbmRzY2FwZVN0ciA9IFwiU2hvdyBvbmx5IGxhbmRzY2FwZSBtZWRpYVwiO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBpZiAoZGlzcGxheXBvc3RzW2luZGV4XSkge1xuICAgICAgY3VycnBvc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRpc3BsYXlwb3N0c1tpbmRleF0pKTtcblxuICAgICAgbGV0IF9uZXh0dXJscyA9IFtdO1xuXG4gICAgICBfbmV4dHVybHMgPSBbXG4gICAgICAgIGN1cnJwb3N0LFxuICAgICAgICAuLi5kaXNwbGF5cG9zdHMuc2xpY2UoaW5kZXggKyAxLCBpbmRleCArICRwcmVmZXRjaE51bSArIDEpXG4gICAgICBdO1xuXG4gICAgICBuZXh0dXJscyA9IF9uZXh0dXJsc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXNfYWxidW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByZXZpZXcuaW1nLmFsYnVtLnNsaWNlKFxuICAgICAgICAgICAgICBhbGJ1bWluZGV4LFxuICAgICAgICAgICAgICBhbGJ1bWluZGV4ICsgJHByZWZldGNoTnVtICsgMVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhuZXh0dXJscyk7XG4gICAgICBuZXh0dXJscyA9IHVuaXFCeShuZXh0dXJscywgKCkgPT4gKGl0ZW0pID0+IGl0ZW0ucHJldmlldy5pbWcuZGVmYXVsdCk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJWYWx1ZSkge1xuICAgICAgLy8gV2UncmUgaGVyZSBiZWNhdXNlIHVzZXIgZmlsdGVyZWQgdGhlIGxpc3RcblxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGUgZmlsdGVyZWQgbGlzdCBpcyBzbWFsbGVyIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgIC8vIHNldCBpbmRleCB0byBsYXN0IGl0ZW1cbiAgICAgIGlmIChkaXNwbGF5cG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgaW5kZXggZnJvbSBcIiwgaW5kZXgsIFwiIHRvIFwiLCBkaXNwbGF5cG9zdHMubGVuZ3RoKTtcbiAgICAgICAgaW5kZXggPSBkaXNwbGF5cG9zdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIG1vcmUgLi5cIik7XG4gICAgICAgIGxvYWRNb3JlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIHdhcyBmaWx0ZXJlZFxuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGN1cnJwb3N0ID0ge1xuICAgICAgICAgIHRpdGxlOiBcIk5vdGhpbmcgdG8gc2hvdy4gVHJ5IGNoYW5naW5nIGZpbHRlcnMgb3IgdHdlYWsvdXBkYXRlIFVSTC5cIlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzICYmIHJlcy5yZXMub2spIHtcbiAgICAgICAgLy8gTm8gbWVkaWEgZm91bmRcbiAgICAgICAgY3VycnBvc3QgPSB7XG4gICAgICAgICAgdGl0bGU6IFwiTm90aGluZyB0byBzaG93LiBUcnkgY2hhbmdpbmcgZmlsdGVycyBvciB0d2Vhay91cGRhdGUgVVJMLlwiXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHJlcyAmJiAhcmVzLnJlcy5vaykge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFuIEFQSSBrZXkgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coXCJBUEkgRXJyb3IgUmVzcG9uc2U6XCIsIHJlcyk7XG4gICAgICAgIFxuICAgICAgICAvLyBIYW5kbGUgQVBJIGVycm9ycyB3aXRob3V0IGF1dG9tYXRpY2FsbHkgc2hvd2luZyBzZXR0aW5nc1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSByZXMucmVzLnJlcyB8fCByZXMucmVzIHx8IFwiXCI7XG4gICAgICAgIGN1cnJwb3N0ID0geyB0aXRsZTogXCJFcnJvciBsb2FkaW5nIHBvc3RzXCIgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlZmF1bHRcbiAgICAgICAgY3VycnBvc3QgPSB7IHRpdGxlOiBcIkxvYWRpbmcgLi5cIiB9O1xuICAgICAgfVxuXG4gICAgICBuZXh0dXJscyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBsZXQgdG1wID0gW107XG5cbiAgICBpZiAoJG92ZXIxOCA9PSAwKSB7XG4gICAgICB0bXAgPSBwb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ub3ZlcjE4ID09IGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCRvdmVyMTggPT0gMSkge1xuICAgICAgdG1wID0gcG9zdHM7XG4gICAgfSBlbHNlIGlmICgkb3ZlcjE4ID09IDIpIHtcbiAgICAgIHRtcCA9IHBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vdmVyMTggPT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlclZhbHVlKSB7XG4gICAgICBza2lwUmVuZGVyVmlkZW8gPSB0cnVlO1xuICAgICAgdG1wID0gdG1wLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgICAgaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEZpbHRlciBvbmx5IHZpZGVvc1xuICAgIGlmICgkaW1hZ2VWaWRlbyA9PSAxKSB7XG4gICAgICB0bXAgPSB0bXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzX3ZpZGVvKTtcbiAgICB9XG4gICAgLy8gRmlsdGVyIG9ubHkgaW1hZ2VzXG4gICAgZWxzZSBpZiAoJGltYWdlVmlkZW8gPT0gMikge1xuICAgICAgdG1wID0gdG1wLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pc19pbWFnZSk7XG4gICAgfVxuXG4gICAgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAxKSB7XG4gICAgICB0bXAgPSB0bXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRpbXMud2lkdGggLyBpdGVtLmRpbXMuaGVpZ2h0IDw9IDEuMik7XG4gICAgfSBlbHNlIGlmICgkcG9ydHJhaXRMYW5kc2NhcGUgPT0gMikge1xuICAgICAgdG1wID0gdG1wLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5kaW1zLndpZHRoIC8gaXRlbS5kaW1zLmhlaWdodCA+IDEuMik7XG4gICAgfVxuXG4gICAgZGlzcGxheXBvc3RzID0gdG1wO1xuICB9XG5cbiAgLy8gV2F0Y2ggZm9yIEFQSSBrZXkgY2hhbmdlcyBhbmQgcmVsb2FkIGRhdGEgd2hlbiBhIHZhbGlkIGtleSBpcyBzZXRcbiAgJDogaWYgKCRhcGlLZXkgJiYgJGFwaUtleSAhPT0gJycgJiYgcG9zdHMubGVuZ3RoID09PSAwICYmICFsb2FkaW5nKSB7XG4gICAgLy8gT25seSByZWxvYWQgaWYgd2UgaGF2ZSBhIHZhbGlkIEFQSSBrZXksIG5vIHBvc3RzIGxvYWRlZCwgYW5kIG5vdCBjdXJyZW50bHkgbG9hZGluZ1xuICAgIGlmIChBUElfS0VZICE9PSAnT0F1dGggQ29uc3VtZXIgS2V5IEdvZXMgSGVyZScgfHwgJGFwaUtleSkge1xuICAgICAgcmVsb2FkRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBzZXR0aW5ncyBpZiB3ZSBoYXZlIG5vIHZhbGlkIEFQSSBrZXkgQU5EIG5vIHBvc3RzIGxvYWRlZFxuICAvLyBTZXR0aW5ncyB3aW5kb3cgd2lsbCBvbmx5IGFwcGVhciB3aGVuIHVzZXIgbWFudWFsbHkgY2xpY2tzIHRoZSBzZXR0aW5ncyBidXR0b25cbiAgLy8gTm8gYXV0b21hdGljIHBvcHVwIG9uIHJlZnJlc2ggb3IgbG9hZFxuXG4gIGZ1bmN0aW9uIGdvdG8oaSkge1xuICAgIGFsYnVtaW5kZXggPSAwO1xuICAgIGluZGV4ID0gaTtcblxuICAgIGxldCBpdGVtTnVtID0gZGlzcGxheXBvc3RzLmxlbmd0aCAtIGluZGV4O1xuXG4gICAgLy8gSWYgYXV0b3BsYXkgaXMgb24gYW5kIHdlJ3JlIGp1bXBpbmcgdG8gMiBvciAzLCB3ZSBtdXN0IGxvYWRcbiAgICBpZiAoKGl0ZW1OdW0gPT0gMiB8fCBpdGVtTnVtID09IDMpICYmICRhdXRvcGxheSkge1xuICAgICAgY29uc29sZS5sb2coXCJbZ290by10by0yLzNdOiBsb2FkaW5nIC4uXCIpO1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG5cbiAgICAvLyBMYXN0IGl0ZW1cbiAgICBpZiAoaXRlbU51bSA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJbZ290by10by1sYXN0aXRlbV06IGxvYWRpbmcgLi5cIik7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIGlmICgkYXV0b3BsYXkpIHN0b3BBbmRTdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxvYWREYXRhKCkge1xuICAgIC8vIEFsd2F5cyByZWxvYWQgZGF0YSwgbGV0IHRoZSBBUEkgaGFuZGxlIGVycm9yc1xuICAgIHBvc3RzID0gW107XG4gICAgZGlzcGxheXBvc3RzID0gW107XG4gICAgYWZ0ZXIgPSBudWxsO1xuICAgIGxvYWRNb3JlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB2aWRlb2VuZGVkKCkge1xuICAgIGl0ZW1OZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpdGVtTmV4dCgpIHtcbiAgICBhbGJ1bWluZGV4ID0gMDsgLy8gQWx3YXlzIHJlc2V0IGFsYnVtIGluZGV4IHRvIDAgd2hlbiBtb3ZpbmcgdG8gYSBuZXcgcG9zdFxuICAgIGxldCBpdGVtTnVtID0gZGlzcGxheXBvc3RzLmxlbmd0aCAtIDEgLSBpbmRleDtcblxuICAgIC8vIExhc3QgaXRlbSwgZG9udCBnbyBwYXN0IHRoZSBsYXN0IGl0ZW1cbiAgICBpZiAoaXRlbU51bSA8PSAxKSB7XG4gICAgICBpbmRleCA9IGRpc3BsYXlwb3N0cy5sZW5ndGggLSAxO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIltsYXN0aXRlbSwgYXV0b3BsYXkrZmlsdGVyP106IGxvYWRpbmcgbW9yZSAuLlwiKTtcbiAgICAgIC8vIFJlYWNoZWQgbGFzdCBpdGVtLCBwb3NzaWJseSBieSBhdXRvcGxheSArIGZpbHRlclxuICAgICAgbG9hZE1vcmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF1dG8gdHJpZ2dlciBvbiB0aGUgbGFzdCA0dGggaXRlbVxuICAgIGlmIChpdGVtTnVtID09PSA0IHx8IGl0ZW1OdW0gPT09IDMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWzR0aCBsYXN0IGl0ZW0sIG5vcm1hbF06IGxvYWRpbmcgbW9yZSAuLlwiKTtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UncmUgYXQgM3JkLzJuZCBsYXN0IGl0ZW0gd2l0aCBhIGZpbHRlciwgdGhlIHVzZXJcbiAgICAvLyBwb3NzaWJseSBqdXN0IGZpbHRlcmVkIHRoZSBsaXN0IGFuZCBlbmRlZCB1cCBoZXJlLlxuICAgIC8vIHRyaWdnZXIgYSBsb2FkIG1vcmUuIFdlIGRvbnQgd2FudCB0byBkbyBpdCBhbHdheXMgc2luY2VcbiAgICAvLyB3ZSBub3JtYWxseSB0cmlnZ2VyIGxvYWRtb3JlIEAzcmQgbGFzdCBpdGVtLiBBbHdheXMgZG9pbmcgaXRcbiAgICAvLyBXb3VsZCBlbmQgdXAgd2l0aCAyIHJlcXVlc3RzIHRvIHJlZGRpdC5jb21cbiAgICBpZiAoaXRlbU51bSA9PT0gMiAmJiBmaWx0ZXJWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJbMm5kIGxhc3QgaXRlbSwgZmlsdGVyaW5nP106IGxvYWRpbmcgbW9yZSAuLlwiKTtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gMTtcblxuICAgIGlmICgkYXV0b3BsYXkpIHN0b3BBbmRTdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBpdGVtUHJldigpIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHJldHVybjtcbiAgICBpbmRleCAtPSAxO1xuXG4gICAgYWxidW1pbmRleCA9IDA7IC8vIEFsd2F5cyByZXNldCBhbGJ1bSBpbmRleCB0byAwIHdoZW4gbW92aW5nIHRvIGEgbmV3IHBvc3RcblxuICAgIGF3YWl0IHRpY2soKTsgLy8gRW5zdXJlIGN1cnJwb3N0IGlzIHVwZGF0ZWQgYmVmb3JlIGFjY2Vzc2luZyBpdHMgcHJvcGVydGllc1xuXG4gICAgaWYgKGRpc3BsYXlwb3N0cy5sZW5ndGggLSBpbmRleCA9PT0gMykge1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG4gICAgaWYgKCRhdXRvcGxheSkgc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5ib2R5O1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IC8vIGFsdGVybmF0aXZlIHN0YW5kYXJkIG1ldGhvZFxuICAgICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50XG4gICAgKSB7XG4gICAgICAvLyBjdXJyZW50IHdvcmtpbmcgbWV0aG9kc1xuICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICAgIGlmICghdWlWaXNpYmxlKSB7XG4gICAgICAgIHRvZ2dsZVVJVmlzaWJsaXR5KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZW0ubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgIGVsZW0ubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBlbGVtLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgICBpZiAodWlWaXNpYmxlKSB7XG4gICAgICAgIHRvZ2dsZVVJVmlzaWJsaXR5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25WaWRlb1BsYXllckNsaWNrZWQoZXYpIHtcbiAgICBjb25zdCByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvcGxheWVyaWQnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXYub2Zmc2V0WCAvIHIud2lkdGg7XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IDEvNTtcblxuICAgIGlmICh4IDwgYWN0aXZlUGFydCkge1xuICAgICAgaXRlbVByZXYoKTtcbiAgICB9IGVsc2UgaWYgKHggPiAoMS1hY3RpdmVQYXJ0KSkge1xuICAgICAgaXRlbU5leHQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVIaWRlQ3Vyc29yKCkge1xuICAgIC8vIElmIHRoZSBVSSBpcyBjdXJyZW50bHkgdmlzaWJsZSwgdGhlIGN1cnNvciBzaG91bGQgYWx3YXlzIGJlIHZpc2libGUuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzZXQgYSB0aW1lciB0byBoaWRlIGl0IGluIHRoaXMgc3RhdGUuXG4gICAgaWYgKHVpVmlzaWJsZSkge1xuICAgICAgaGlkZUN1cnNvciA9IGZhbHNlOyAvLyBFbnN1cmUgY3Vyc29yIGlzIHZpc2libGVcbiAgICAgIGlmIChoaWRlQ3Vyc29yVGltZXJJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaGlkZUN1cnNvclRpbWVySWQpOyAvLyBDbGVhciBhbnkgbGluZ2VyaW5nIHRpbWVyXG4gICAgICAgIGhpZGVDdXJzb3JUaW1lcklkID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybjsgLy8gU3RvcCBoZXJlLCBubyBmdXJ0aGVyIGFjdGlvbiBuZWVkZWRcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgVUkgaXMgaGlkZGVuLCB3ZSBtYW5hZ2UgY3Vyc29yIHZpc2liaWxpdHkgYmFzZWQgb24gaW5hY3Rpdml0eS5cbiAgICBoaWRlQ3Vyc29yID0gZmFsc2U7IC8vIFNob3cgY3Vyc29yIGltbWVkaWF0ZWx5IG9uIG1vdXNlIG1vdmVtZW50XG4gICAgaWYgKGhpZGVDdXJzb3JUaW1lcklkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaGlkZUN1cnNvclRpbWVySWQpOyAvLyBDbGVhciBwcmV2aW91cyB0aW1lclxuICAgIH1cbiAgICBoaWRlQ3Vyc29yVGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaGlkZUN1cnNvclRpbWVySWQgPSAwO1xuICAgICAgaGlkZUN1cnNvciA9IHRydWU7IC8vIEhpZGUgY3Vyc29yIGFmdGVyIDMgc2Vjb25kcyBvZiBpbmFjdGl2aXR5XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVUaXRsZVZpc2liaWxpdHkoKSB7XG4gICAgdGl0bGVWaXNpYmxlID0gIXRpdGxlVmlzaWJsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVVJVmlzaWJsaXR5KCkge1xuICAgIHVpVmlzaWJsZSA9ICF1aVZpc2libGU7XG5cbiAgICBzaG93aGlkZXN0ciA9IHVpVmlzaWJsZSA/IFwiSGlkZSAoaClcIiA6IFwiU2hvdyAoaClcIjtcblxuICAgIGlmIChoaWRlQ3Vyc29yVGltZXJJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGhpZGVDdXJzb3JUaW1lcklkKTtcbiAgICAgIGhpZGVDdXJzb3JUaW1lcklkID0gMDtcbiAgICB9XG5cbiAgICBpZiAoIXVpVmlzaWJsZSkge1xuICAgICAgaGlkZUN1cnNvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVDdXJzb3IgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTZXR0aW5ncygpIHtcbiAgICBzaG93U2V0dGluZ3MgPSAhc2hvd1NldHRpbmdzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ290b0RlZXBTZWFyY2goKSB7XG4gICAgbGV0IHByZWZpeCA9IFwiXCI7XG4gICAgaWYgKHNsdWdzdHIpIHtcbiAgICAgIHByZWZpeCA9IGAvci8ke3N1YnJlZGRpdH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmaXggPSBgYDtcbiAgICB9XG5cbiAgICBuYXZpZ2F0aW9uID0gdHJ1ZTtcbiAgICBhaHJlZihcbiAgICAgIGAke3ByZWZpeH0vc2VhcmNoP3E9JHtmaWx0ZXJWYWx1ZX0mcmVzdHJpY3Rfc3I9b24maW5jbHVkZV9vdmVyXzE4PW9uJnNvcnQ9cmVsZXZhbnQmdD1hbGxgXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVTZXR0aW5ncygpIHtcbiAgICBzaG93U2V0dGluZ3MgPSBmYWxzZTtcbiAgfVxuXG4gIFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGV4cGFuZEZpbHRlcigpIHtcbiAgICBmaWx0ZXJFeHBhbmRlZCA9IHRydWU7XG5cbiAgICBhd2FpdCB0aWNrKCk7XG5cbiAgICAvLyBGb2N1cyB0aGUgaW5wdXQgaWYgd2UganVzdCBvcGVuZWQgaXRcbiAgICBpZiAoZmlsdGVyRXhwYW5kZWQpIGZpbHRlclJlZi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcigpIHtcbiAgICBmaWx0ZXJFeHBhbmRlZCA9ICFmaWx0ZXJFeHBhbmRlZDtcblxuICAgIGF3YWl0IHRpY2soKTtcbiAgICAvLyBGb2N1cyB0aGUgaW5wdXQgaWYgd2UganVzdCBvcGVuZWQgaXRcbiAgICBpZiAoZmlsdGVyRXhwYW5kZWQpIGZpbHRlclJlZi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkRmlsZXMoKSB7XG4gICAgd2luZG93Lm9wZW4oXCIvZG93bmxvYWRcIiwgXCJfYmxhbmtcIik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzaHVmZmxlRmlsZXMoKSB7XG4gICAgZGlzcGxheXBvc3RzID0gc2h1ZmZsZShkaXNwbGF5cG9zdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3Blbk1lZGlhKCkge1xuICAgIHdpbmRvdy5vcGVuKGN1cnJwb3N0LnBlcm1hbGluaywgXCJfYmxhbmtcIik7XG4gIH1cblxuICBcblxuICBmdW5jdGlvbiBjb3B5U3JjVG9DbGlwYm9hcmQoKSB7XG4gICAgbGV0IHRleHQ7XG4gICAgaWYgKFxuICAgICAgY3VycnBvc3QudXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3YucmVkZC5pdC9cIikgfHxcbiAgICAgIGN1cnJwb3N0LnVybC5pbmNsdWRlcyhcInJlZGdpZnMuY29tXCIpXG4gICAgKSB7XG4gICAgICB0ZXh0ID0gY3VycnBvc3QucHJldmlldy52aWQubXA0O1xuICAgIH0gZWxzZSBpZiAoY3VycnBvc3QuaXNfaW1hZ2UgJiYgIWN1cnJwb3N0LmlzX2FsYnVtKSB7XG4gICAgICB0ZXh0ID0gY3VycnBvc3QudXJsO1xuICAgIH0gZWxzZSBpZiAoY3VycnBvc3QuaXNfdmlkZW8pIHtcbiAgICAgIHRleHQgPSBjdXJycG9zdC51cmw7XG4gICAgfSBlbHNlIGlmIChjdXJycG9zdC5pc19hbGJ1bSkge1xuICAgICAgaWYgKGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmlzX3ZpZGVvKSB7XG4gICAgICAgIHRleHQgPSBjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5oaXJlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5oaXJlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgICAud3JpdGVUZXh0KHRleHQpXG4gICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhgQ29waWVkOiAke3RleHR9YCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlT3ZlcjE4KCkge1xuICAgICRvdmVyMTggPSAkb3ZlcjE4ICsgMTtcblxuICAgIGlmICgkb3ZlcjE4ID09IDMpIHtcbiAgICAgICRvdmVyMTggPSAwO1xuICAgIH1cbiAgICBvdmVyMTguc2V0KCRvdmVyMTgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsRmF2b3JpdGUocmVtb3ZlQWxsRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgIHNraXBSZW5kZXJWaWRlbyA9IHRydWU7XG5cbiAgICBmb3IgKGNvbnN0IFtpLCBwb3N0XSBvZiBkaXNwbGF5cG9zdHMuZW50cmllcygpKSB7XG4gICAgICAvLyBGb3IgcmVhY3Rpdml0eVxuICAgICAgZGlzcGxheXBvc3RzW2ldLmZhdm9yaXRlID0gZmFsc2U7XG5cbiAgICAgIC8vIElmIHJlbW92ZUFsbEZyb21Mb2NhbFN0b3JhZ2UgaXMgdHJ1ZSwgdGhlbiB3ZSdsbCByZW1vdmUgZXZlcnl0aGlnbiBpbiBvbmUgc2hvdFxuICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBvbmUgYnkgb25lXG4gICAgICBpZiAocmVtb3ZlQWxsRnJvbUxvY2FsU3RvcmFnZSA9PSBmYWxzZSkge1xuICAgICAgICAvLyBMb2NhbHN0b3JhZ2VcbiAgICAgICAgJGZhdm9yaXRlW3Bvc3QudXJsXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgJGZhdm9yaXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkZmF2b3JpdGUpKTtcblxuICAgICAgICBmYXZvcml0ZS5zZXQoJGZhdm9yaXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlQWxsRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgZmF2b3JpdGUuc2V0KHt9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGUoKSB7XG4gICAgc2tpcFJlbmRlclZpZGVvID0gdHJ1ZTtcbiAgICBkaXNwbGF5cG9zdHNbaW5kZXhdLmZhdm9yaXRlID0gIWRpc3BsYXlwb3N0c1tpbmRleF0uZmF2b3JpdGU7XG5cbiAgICBsZXQgdXJsID0gZGlzcGxheXBvc3RzW2luZGV4XS51cmw7XG4gICAgJGZhdm9yaXRlW3VybF0gPSB1bmRlZmluZWQ7XG4gICAgJGZhdm9yaXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkZmF2b3JpdGUpKTtcbiAgICAkZmF2b3JpdGVbdXJsXSA9IGRpc3BsYXlwb3N0c1tpbmRleF07XG4gICAgZmF2b3JpdGUuc2V0KCRmYXZvcml0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGJ1bVByZXYoKSB7XG4gICAgaWYgKCFjdXJycG9zdC5pc19hbGJ1bSkgcmV0dXJuO1xuICAgIGFsYnVtaW5kZXggLT0gMTtcbiAgICBpZiAoJGF1dG9wbGF5KSBzdG9wQW5kU3RhcnRBdXRvUGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbmRPZkFsYnVtKCkge1xuICAgIHJldHVybiBhbGJ1bWluZGV4ID09IGN1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtLmxlbmd0aCAtIDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0YXJ0T2ZBbGJ1bSgpIHtcbiAgICByZXR1cm4gYWxidW1pbmRleCA9PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxidW1OZXh0KCkge1xuICAgIGlmICghY3VycnBvc3QuaXNfYWxidW0pIHJldHVybjtcblxuICAgIGlmIChpc0VuZE9mQWxidW0oKSkge1xuICAgICAgYWxidW1pbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsYnVtaW5kZXggKz0gMTtcbiAgICB9XG5cbiAgICBpZiAoJGF1dG9wbGF5KSBzdG9wQW5kU3RhcnRBdXRvUGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2hlZWwoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgbmV4dCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgcHJldigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcbiAgICAvLyB1cFxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDM4KSB7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuXG4gICAgLy8gZG93blxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7XG4gICAgICBwcmV2KCk7XG4gICAgfVxuXG4gICAgLy8gc1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDgzKSB7XG4gICAgICB0b2dnbGVNdXRlZCgpO1xuICAgIH1cblxuICAgIC8vIHEsIHBcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4MSB8fCBldmVudC5rZXlDb2RlID09IDgwKSB7XG4gICAgICB0b2dnbGVBdXRvUGxheSgpO1xuICAgIH1cblxuICAgIC8vIGZcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA3MCAmJiAhZXZlbnQuY3RybEtleSkge1xuICAgICAgdG9nZ2xlRnVsbHNjcmVlbigpO1xuICAgIH1cblxuICAgIC8vIHNsYXNoLCBmXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTkxKSB7XG4gICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgIC8vIFdlIG5lZWQgdGhpcywgb3RoZXJ3aXNlIGZpbHRlciBib3ggd2lsbCBoYXZlICcvJyBiZWNhdXNlIG9mIGF1dG9mb2N1c1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyB4XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gODgpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICByZW1vdmVBbGxGYXZvcml0ZShldmVudC5jdHJsS2V5KTsgLy8gaWYgY3RybCtzaGlmdCt4IGlzIHJlbW92ZSBldmVyeXRoaW5nIGZyb20gbG9jYWxzdG9yYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVGYXZvcml0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDc5KSB7XG4gICAgICBvcGVuTWVkaWEoKTtcbiAgICB9XG5cbiAgICAvLyBpXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNzMpIHtcbiAgICAgIG9wZW5NZWRpYSgpO1xuICAgIH1cblxuICAgIC8vIG9cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA3OSkge1xuICAgICAgd2luZG93Lm9wZW4oY3VycnBvc3QucGVybWFsaW5rLCBcIl9ibGFua1wiKTtcbiAgICB9XG5cbiAgICAvLyBoXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNzIpIHtcbiAgICAgIHRvZ2dsZVVJVmlzaWJsaXR5KCk7XG4gICAgfVxuXG4gICAgLy8gdFxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDg0KSB7XG4gICAgICB0b2dnbGVUaXRsZVZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICAvLyB2XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTE4KSB7XG4gICAgICB0b2dnbGVJbWFnZVZpZGVvKCk7XG4gICAgfVxuXG4gICAgLy8gY1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDY3KSB7XG4gICAgICBjb3B5U3JjVG9DbGlwYm9hcmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuID0gZXZlbnQua2V5Q29kZSAtIDQ4O1xuICAgIGlmIChuID49IDAgJiYgbiA8PSAzKSB7XG4gICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb3BsYXllcmlkJyk7XG4gICAgICB2aWRlby5jdXJyZW50VGltZSA9IG4gKiB2aWRlby5kdXJhdGlvbiAvIDQ7XG4gICAgfVxuXG4gICAgLy8gTGVmdCBBcnJvdywgYSwgaywgUGFnZS11cFxuICAgIGlmIChcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gMzcgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gNjUgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gNzUgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gMzNcbiAgICApIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb3BsYXllcmlkJyk7XG4gICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lIC09IDU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtUHJldigpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSaWdodCBBcnJvdywgZCwgaiwgU3BhY2UsIFBhZ2UtZG93blxuICAgIGVsc2UgaWYgKFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSAzOSB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSA2OCB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSA3NCB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSAzMiB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSAzNFxuICAgICkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvcGxheWVyaWQnKTtcbiAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgKz0gNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1OZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgb246a2V5ZG93bj17a2V5ZG93bn0gb246d2hlZWw9e3doZWVsfSAvPlxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+dHVtYmxycHggLSB7c2x1Z3N0ciA/IGB0LyR7c2x1Z3N0cn1gIDogXCJ0dW1ibHIuY29tXCJ9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgY2xhc3M6aGlkZS1jdXJzb3I9XCJ7aGlkZUN1cnNvcn1cIj5cbiAgPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIiBjbGFzczpoaWRlPVwieyF1aVZpc2libGUgfHwgIXRpdGxlVmlzaWJsZX1cIiBjbGFzczpmYXZvcml0ZT1cIntjdXJycG9zdC5mYXZvcml0ZX1cIj5cbiAgICAgIHsjaWYgY3VycnBvc3QuZGltcyAmJiBjdXJycG9zdC5kaW1zLndpZHRoID4gMH1cbiAgICAgICAge3RpdGxlfSAoe2N1cnJwb3N0LmRpbXMud2lkdGh9eHtjdXJycG9zdC5kaW1zLmhlaWdodH0pXG4gICAgICB7OmVsc2V9XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIHsvaWZ9XG4gICAgICB7I2lmIGN1cnJwb3N0LnN1YnJlZGRpdH1cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1YnJlZGRpdFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidXNlclwiPntjdXJycG9zdC5hdXRob3JwfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nc1wiPlxuICAgICAgXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0biBjb2dcIiBvbjpjbGljaz1cInt0b2dnbGVTZXR0aW5nc31cIiBjbGFzczpzaG93U2V0dGluZ3M9XCJ7c2hvd1NldHRpbmdzfVwiIGNsYXNzOmhpZGU9XCJ7dWlWaXNpYmxlID09IGZhbHNlfVwiPlxuICAgICAgICA8SWNvbiBpY29uPVwie2ZhU2V0dGluZ3N9XCI+PC9JY29uPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImRpdlwiIGNsYXNzOmhpZGU9XCJ7dWlWaXNpYmxlID09IGZhbHNlfVwiPlxuICAgICAgICA8U2V0dGluZ3MgYmluZDpzaG93U2V0dGluZ3Mgb246YXBpS2V5Q2hhbmdlPXtyZWxvYWREYXRhfT48L1NldHRpbmdzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tbWVkaWEtY29udGFpbmVyXCI+XG4gICAgICB7I2lmIGN1cnJwb3N0LmlzX2ltYWdlICYmICFjdXJycG9zdC5pc19hbGJ1bX1cbiAgICAgICAgPGltZyBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy5pbWcuZGVmYXVsdH1cIiBhbHQ9XCJ7Y3VycnBvc3QudGl0bGV9XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoOyBvYmplY3QtZml0OiBjb250YWluO1wiPlxuICAgICAgezplbHNlIGlmIGN1cnJwb3N0LmlzX3ZpZGVvICYmIHJlbmRlclZpZGVvfVxuICAgICAgICA8dmlkZW8gY2xhc3M9XCJ2aWRlb1wiIGF1dG9wbGF5IGxvb3A9XCJ7ISRhdXRvcGxheX1cIiBwbGF5c2lubGluZSBtdXRlZD1cInskbXV0ZWR9XCIgb246ZW5kZWQ9XCJ7dmlkZW9lbmRlZH1cIiBvbjpkYmxjbGljaz1cInt0b2dnbGVGdWxsc2NyZWVufVwiIGNsYXNzOmhpZGUtY3Vyc29yPVwie2hpZGVDdXJzb3J9XCIgb246bW91c2Vtb3ZlPVwie3RvZ2dsZUhpZGVDdXJzb3J9XCIgaWQ9XCJ2aWRlb3BsYXllcmlkXCIgb246Y2xpY2s9XCJ7b25WaWRlb1BsYXllckNsaWNrZWR9XCI+XG4gICAgICAgICAgeyNpZiAkbG9yZXN9XG4gICAgICAgICAgICA8c291cmNlIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LnZpZC5sb3Jlc31cIj5cbiAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICB7I2lmIGN1cnJwb3N0LnByZXZpZXcudmlkLndlYm19XG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie2N1cnJwb3N0LnByZXZpZXcudmlkLndlYm19XCI+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgeyNpZiBjdXJycG9zdC5wcmV2aWV3LnZpZC5tcDR9XG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie2N1cnJwb3N0LnByZXZpZXcudmlkLm1wNH1cIj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgPC92aWRlbz5cbiAgICAgIHs6ZWxzZSBpZiBjdXJycG9zdC5pc19hbGJ1bX1cbiAgICAgICAgeyNpZiBjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5pc192aWRlb31cbiAgICAgICAgICA8dmlkZW8gY2xhc3M9XCJ2aWRlb1wiIGF1dG9wbGF5IGxvb3A9XCJ7ISRhdXRvcGxheX1cIiBwbGF5c2lubGluZSBtdXRlZD1cInskbXV0ZWR9XCIgb246ZW5kZWQ9XCJ7dmlkZW9lbmRlZH1cIiBvbjpkYmxjbGljaz1cInt0b2dnbGVGdWxsc2NyZWVufVwiIGNsYXNzOmhpZGUtY3Vyc29yPVwie2hpZGVDdXJzb3J9XCIgb246bW91c2Vtb3ZlPVwie3RvZ2dsZUhpZGVDdXJzb3J9XCIgb246Y2xpY2s9XCJ7b25WaWRlb1BsYXllckNsaWNrZWR9XCI+XG4gICAgICAgICAgICA8c291cmNlIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5oaXJlc31cIj5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgPGltZyBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uZGVmYXVsdH1cIiBhbHQ9XCJ7Y3VycnBvc3QudGl0bGV9XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoOyBvYmplY3QtZml0OiBjb250YWluO1wiPlxuICAgICAgICB7L2lmfVxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cbiAgICBcbiAgICB7I2lmIGRpc3BsYXlwb3N0cy5sZW5ndGggfHwgcG9zdHMubGVuZ3RofVxuICAgICAgPGRpdiBjbGFzcz1cImdvdG9cIiBjbGFzczp0aW55Z290bz1cInt0aW55Z290b31cIiBjbGFzczpoaWRlPVwie3VpVmlzaWJsZSA9PSBmYWxzZX1cIiBiaW5kOmNsaWVudFdpZHRoPVwieyRfZ290b0VsV2lkdGh9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG53cmFwcGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gcGxheXBhdXNlIHRvb2x0aXBcIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwie2F1dG9wbGF5c3RyfVwiXG4gICAgICAgICAgICBjbGFzczpwbGF5PVwieyRhdXRvcGxheX1cIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7dG9nZ2xlQXV0b1BsYXl9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwieyRhdXRvcGxheSA/IGZhUGF1c2UgOiBmYVBsYXl9XCI+PC9JY29uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBkb3dubG9hZCB0b29sdGlwXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie2Rvd25sb2FkRmlsZXN9XCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIntkb3dubG9hZHN0cn1cIlxuICAgICAgICAgICAgY2xhc3M6ZGxyZWFkeT1cIntudW1GYXZvcml0ZX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFEb3dubG9hZH1cIj48L0ljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGRpY2UgdG9vbHRpcFwiXG4gICAgICAgICAgICBvbjpjbGljaz1cIntzaHVmZmxlRmlsZXN9XCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIlNodWZmbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFEaWNlfVwiPjwvSWNvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gaW1hZ2V2aWRlbyB0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIntpbWFnZVZpZGVvU3RyfVwiXG4gICAgICAgICAgICBvbjpjbGljaz1cInt0b2dnbGVJbWFnZVZpZGVvfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyNpZiAkaW1hZ2VWaWRlbyA9PSAwfVxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhSW1hZ2VWaWRlb31cIj48L0ljb24+XG4gICAgICAgICAgICB7OmVsc2UgaWYgJGltYWdlVmlkZW8gPT0gMX1cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYVZpZGVvfVwiPjwvSWNvbj5cbiAgICAgICAgICAgIHs6ZWxzZSBpZiAkaW1hZ2VWaWRlbyA9PSAyfVxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhSW1hZ2V9XCI+PC9JY29uPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gbXV0ZWQgdG9vbHRpcFwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJ7bXV0ZWRzdHJ9XCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie3RvZ2dsZU11dGVkfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cInskbXV0ZWQgPyBmYVNvdW5kT2ZmIDogZmFTb3VuZE9ufVwiPjwvSWNvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgeyNpZiB0aW55Z290b31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIHJlbG9hZCB0b29sdGlwXCIgZGF0YS10b29sdGlwPVwie3JlbG9hZHN0cn1cIiBvbjpjbGljaz1cIntsb2FkTW9yZX1cIiBjbGFzczpsb2FkZXJyb3I9XCJ7bG9hZEVycm9yfVwiPlxuICAgICAgICAgICAgICB7I2lmIGxvYWRpbmd9XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYVNwaW5uZXJ9XCI+PC9JY29uPlxuICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYVN5bmN9XCI+PC9JY29uPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gZmlsdGVyIHRvb2x0aXBcIlxuICAgICAgICAgICAgY2xhc3M6ZmlsdGVyRXhwYW5kZWQ9XCJ7ZmlsdGVyRXhwYW5kZWR9XCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie3RvZ2dsZUZpbHRlcn1cIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiRmlsdGVyICggLyApXCJcbiAgICAgICAgICAgIGJpbmQ6dGhpcz1cIntmaWx0ZXJSZWZ9XCJcbiAgICAgICAgICAgIGNsYXNzOmRscmVhZHk9XCJ7bnVtRmF2b3JpdGV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7I2lmIGZpbHRlckV4cGFuZGVkfVxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgYmluZDp2YWx1ZT1cIntmaWx0ZXJWYWx1ZX1cIiBcbiAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb24gXG4gICAgICAgICAgICAgICAgb246a2V5ZG93bnxzdG9wUHJvcGFnYXRpb24gXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIHBvc3RzLi4uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU2VhcmNofVwiPjwvSWNvbj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsjaWYgZmlsdGVyVmFsdWV9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBkZWVwc2VhcmNoIHRvb2x0aXBcIiBkYXRhLXRvb2x0aXA9XCJ7ZGVlcHNlYXJjaHN0cn1cIiBvbjpjbGljaz1cIntnb3RvRGVlcFNlYXJjaH1cIj5cbiAgICAgICAgICAgICAgPHA+ZGVlcCBzZWFyY2gg8J+gkjwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm51bXN3cmFwcGVyXCI+XG4gICAgICAgICAgeyNlYWNoIGRpc3BsYXlwb3N0cyBhcyBwb3N0LCBpIChwb3N0LmlkICsgcG9zdC51cmwpfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1zXCJcbiAgICAgICAgICAgICAgY2xhc3M6Y3Vycm51bT1cIntpbmRleCA9PT0gaX1cIlxuICAgICAgICAgICAgICBjbGFzczphbGJ1bT1cIntjdXJycG9zdC5pc19hbGJ1bX1cIlxuICAgICAgICAgICAgICBjbGFzczpmYXZvcml0ZT1cIntkaXNwbGF5cG9zdHNbaV0uZmF2b3JpdGV9XCJcbiAgICAgICAgICAgICAgY2xhc3M6b3ZlcjE4PVwie2Rpc3BsYXlwb3N0c1tpXS5vdmVyMTh9XCJcbiAgICAgICAgICAgICAgb246Y2xpY2s9XCJ7ZnVuY3Rpb24oKXtnb3RvKGkpfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwic21hbGxcIiBhbHQ9XCJ7ZGlzcGxheXBvc3RzW2ldLnRpdGxlfVwiIHNyYz1cIntkaXNwbGF5cG9zdHNbaV0udGh1bWJuYWlsfVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtYWxsXCIgY2xhc3M6Y3Vycj1cIntpbmRleCA9PT0gaX1cIiBjbGFzczphbGJ1bT1cIntjdXJycG9zdC5pc19hbGJ1bX1cIj57aSsxfTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgeyNpZiAhdGlueWdvdG99XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpc3BsYXlpbmZvXCIgY2xhc3M6ZmlsdGVyRXhwYW5kZWQ9XCJ7ZmlsdGVyVmFsdWV9XCI+XG4gICAgICAgICAgICAgIDxwPntkaXNwbGF5cG9zdHMubGVuZ3RofS97cG9zdHMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIHJlbG9hZCB0b29sdGlwXCIgZGF0YS10b29sdGlwPVwie3JlbG9hZHN0cn1cIiBvbjpjbGljaz1cIntsb2FkTW9yZX1cIiBjbGFzczpsb2FkZXJyb3I9XCJ7bG9hZEVycm9yfVwiPlxuICAgICAgICAgICAgICB7I2lmIGxvYWRpbmd9XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYVNwaW5uZXJ9XCI+PC9JY29uPlxuICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYVN5bmN9XCI+PC9JY29uPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgey9pZn1cbiAgPC9kaXY+XG48L2Rpdj5cbnsjaWYgJHByZWZldGNofVxuICA8ZGl2IGNsYXNzPVwicHJlZmV0Y2hcIj5cbiAgICB7I2VhY2ggbmV4dHVybHMgYXMgbmV4dHVybCAobmV4dHVybC5wcmV2aWV3LmltZy5kZWZhdWx0KX1cbiAgICAgIHsjaWYgJGhpcmVzfVxuICAgICAgICB7I2lmIG5leHR1cmwuaXNfYWxidW19XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaC1oaXJlc1wiIHNyYz1cIntuZXh0dXJsLnByZXZpZXcuaW1nLmFsYnVtWzBdLmhpcmVzfVwiPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaC1oaXJlc1wiIHNyYz1cIntuZXh0dXJsLnVybH1cIj5cbiAgICAgICAgey9pZn1cbiAgICAgIHs6ZWxzZX1cbiAgICAgICAgeyNpZiBuZXh0dXJsLmlzX2FsYnVtfVxuICAgICAgICAgIDxpbWcgYWx0PVwicHJlZmV0Y2hcIiBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LmltZy5hbGJ1bVswXS5kZWZhdWx0fVwiPlxuICAgICAgICB7OmVsc2UgaWYgbmV4dHVybC5wcmV2aWV3fVxuICAgICAgICAgIDxpbWcgYWx0PVwicHJlZmV0Y2hcIiBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LmltZy5kZWZhdWx0fVwiPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaFwiIHNyYz1cIntuZXh0dXJsLmRlZmF1bHR9XCI+XG4gICAgICAgIHsvaWZ9XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiBuZXh0dXJsLmlzX3ZpZGVvfVxuICAgICAgICA8dmlkZW8gcGxheXNpbmxpbmUgYXV0b3BsYXkgbG9vcCBtdXRlZD5cbiAgICAgICAgICB7I2lmICRsb3Jlc31cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie25leHR1cmwucHJldmlldy52aWQubG9yZXN9XCI+XG4gICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgeyNpZiBuZXh0dXJsLnByZXZpZXd9XG4gICAgICAgICAgICAgIHsjaWYgbmV4dHVybC5wcmV2aWV3LnZpZC53ZWJtfVxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie25leHR1cmwucHJldmlldy52aWQud2VibX1cIj5cbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgeyNpZiBuZXh0dXJsLnByZXZpZXcudmlkLm1wNH1cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIntuZXh0dXJsLnByZXZpZXcudmlkLm1wNH1cIj5cbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7bmV4dHVybC5kZWZhdWx0fVwiPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgey9pZn1cbiAgICB7L2VhY2h9XG4gIDwvZGl2Plxuey9pZn1cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XG46Z2xvYmFsKGh0bWwpLCA6Z2xvYmFsKGJvZHkpXG4gIG1hcmdpbjogMFxuICBwYWRkaW5nOiAwXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgb3ZlcmZsb3c6IGhpZGRlblxuXG5AbWl4aW4gaG92ZXIoKVxuICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6Y29hcnNlKVxuICAgICY6aG92ZXJcbiAgICAgIEBjb250ZW50XG5cbiR5ZWxsb3c6ICMwMGI0ZDhcblxuJHRleHQtY29sb3I6ICNmYWZhZmFcbiRhY2NlbnQtY29sb3I6IHdoaXRlXG4kZmF2b3JpdGUtY29sb3I6ICNmYmJjMDRcbiRmYXZvcml0ZS1ib3JkZXItY29sb3I6ICNlMzc0MDBcbiRvdmVyMTgtY29sb3I6ICNlYTQzMzVcbiRvdmVyMTgtYm9yZGVyLWNvbG9yOiAjZWE0MzM1XG4kaXNtdWx0aS1jb2xvcjogI2VhNDMzNVxuJGlzbm90bXVsdGktY29sb3I6ICMzNGE4NTNcblxuLmhpZGUtY3Vyc29yXG4gIGN1cnNvcjogbm9uZVxuXG4uaGlkZVxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcblxuLndyYXBwZXJcbiAgaGVpZ2h0OiAxMDB2aFxuXG4gIGRpc3BsYXk6IGdyaWRcbiAganVzdGlmeS1pdGVtczogY2VudGVyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuICAuaGVyb1xuICAgIGhlaWdodDogMTAwdmhcbiAgICB3aWR0aDogMTAwdndcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuICAgIC50aXRsZVxuICAgICAgei1pbmRleDogMTBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgbGVmdDogMXJlbVxuICAgICAgdG9wOiAxcmVtXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIDAuOTUpXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweClcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvclxuICAgICAgZm9udC1zaXplOiAxLjJyZW1cbiAgICAgIG1heC13aWR0aDogNzclXG4gICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpXG5cbiAgICAuc2V0dGluZ3NcbiAgICAgIHotaW5kZXg6IDEwXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgIHRvcDogMXJlbVxuICAgICAgcmlnaHQ6IDFyZW1cblxuICAgIC5tYWluLW1lZGlhLWNvbnRhaW5lclxuICAgICAgZmxleC1ncm93OiAxXG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgd2lkdGg6IDEwMCVcbiAgICAgIGhlaWdodDogMTAwJVxuXG4gICAgICBpbWcsIHZpZGVvXG4gICAgICAgIG1heC13aWR0aDogMTAwJVxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW5cblxuICAgIC5nb3RvXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgICAgei1pbmRleDogNVxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIDAuNylcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KVxuICAgICAgYm90dG9tOiAwXG4gICAgICBkaXNwbGF5OiBncmlkXG4gICAgICBncmlkLXJvdy1nYXA6IDhweFxuICAgICAgcGFkZGluZzogMS41cmVtIDJyZW1cbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcbiAgICAgIG1hcmdpbjogMXJlbVxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSlcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwcHgsIDFmcikpXG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMylcblxuICAgICAgJi50aW55Z290b1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyXG5cbiAgICAgICAgLmJ0bndyYXBwZXJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMnB4LCAxZnIpKVxuICAgICAgICAgIGRpc3BsYXk6IGdyaWRcblxuICAgICAgICAubnVtc3dyYXBwZXJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFyZW0sIGF1dG8pKVxuICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWRcbiAgICAgICAgICBncmlkLWdhcDogMC4ycmVtXG5cblxuICAgICAgICAgIC5udW1zXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSh3aGl0ZSwgMzAlKVxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZVxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDBweFxuXG4gICAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkeWVsbG93ICFpbXBvcnRhbnRcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG5cbiAgICAgICAgICAgICYuY3Vycm51bVxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHllbGxvdyAhaW1wb3J0YW50XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTgwLCAyMTYsIDAuMilcblxuICAgICAgICAgICAgICAmLmFsYnVtXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCAkeWVsbG93ICFpbXBvcnRhbnRcblxuICAgICAgICAgICAgJi5mYXZvcml0ZVxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGZhdm9yaXRlLWNvbG9yXG5cbiAgICAgICAgICAgICYub3ZlcjE4XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkb3ZlcjE4LWNvbG9yXG5cbiAgICAgICAgICBwXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXG5cbiAgICAgICAgICAucmVsb2FkXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyXG5cbiAgICAgIC5idG53cmFwcGVyLCAubnVtc3dyYXBwZXJcbiAgICAgICAgZGlzcGxheTogY29udGVudHNcblxuICAgICAgLmJ0bndyYXBwZXJcblxuICAgICAgICAucmVsb2FkXG4gICAgICAgICAgYm90dG9tOiAtMXB4XG5cbiAgICAgIC5udW1zd3JhcHBlclxuXG4gICAgICAgIC5kaXNwbGF5aW5mb1xuICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDFcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbVxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcblxuICAgICAgICAgIHBcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgIC5idG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIHBhZGRpbmc6IDhweFxuICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgNjAlKVxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2VcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgIG1pbi13aWR0aDogNDBweFxuICAgICAgICBoZWlnaHQ6IDQwcHhcblxuICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG5cbiAgICAgICAgJi5yZWxvYWRcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICAgICAgICYubG9hZGVycm9yXG4gICAgICAgICAgICBjb2xvcjogJG92ZXIxOC1jb2xvclxuXG4gICAgICAgICYuZGVlcHNlYXJjaFxuICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDRcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTgwLCAyMTYsIDAuMSlcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE4MCwgMjE2LCAwLjMpXG5cbiAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjE2LCAwLjIpXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTgwLCAyMTYsIDAuNSlcblxuICAgICAgICAgIHBcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW1cblxuICAgICAgICAmLm92ZXIxOHdyYXBwZXJcblxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuXG4gICAgICAgICAgJi5vdmVyMThcblxuICAgICAgICAgICAgcFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHdoaXRlLCAzMCUpXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKHdoaXRlLCAzMCUpXG5cbiAgICAgICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEod2hpdGUsIDYwJSlcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgNjAlKVxuXG4gICAgICAgICAgcFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEzcHhcbiAgICAgICAgICAgIHdpZHRoOiA1OHB4XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWZcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgICAgdG9wOiAtMXB4XG5cbiAgICAgICAgJi5pbWFnZXZpZGVvXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLmxheW91dFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG5cbiAgICAgICAgICAmLmFjdGl2ZVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjE2LCAwLjIpXG5cbiAgICAgICAgJi5tdXRlZFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgJi5maWx0ZXJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbVxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQyLCA0MiwgMC44KVxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgNjgsIDY4LCAwLjgpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHhcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZVxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuXG4gICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHllbGxvd1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxODAsIDIxNiwgMC4yKVxuXG4gICAgICAgICYuY29nXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cbiAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIDAuOTUpXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2VcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMylcblxuICAgICAgICAgIEBpbmNsdWRlIGhvdmVyKClcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC45NSlcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcblxuICAgICAgICAmLnBvcnRyYWl0bGFuZHNjYXBlXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICAgJiA6Z2xvYmFsKC5sYW5kc2NhcGUpXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpXG5cbiAgICAgICAgJi5kaWNlXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICYuZG93bmxvYWRcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHRcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbVxuICAgICAgICAgIGJvdHRvbTogMnB4XG5cbiAgICAgICAgICAmLmRscmVhZHlcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRmYXZvcml0ZS1jb2xvciwgOTAlKVxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGhvdmVyKClcbiAgICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3dcblxuICAgICAgICAmLnBsYXlwYXVzZVxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIHRvcDogMXB4XG5cbiAgICAgICAgICAvLyBXaGVuIGl0IGlzIHBsYXkgaWNvbiwgbWFrZSBpdCB3aGl0ZVxuICAgICAgICAgICYucGxheVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLmZpbHRlclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIHRvcDogMXB4XG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAgICYuZmlsdGVyLmZpbHRlckV4cGFuZGVkXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAzXG4gICAgICAgICAgICB0b3A6IC0ycHhcblxuICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg6IDg1JVxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHdoaXRlLCA2MCUpXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgIHNwYW5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICAgICAgJi5mYXZvcml0ZVxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkZmF2b3JpdGUtY29sb3JcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcbiAgICAgICAgICAgIGNvbG9yOiAkZmF2b3JpdGUtY29sb3JcblxuICAgICAgICAgIGltZy5zbWFsbFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcblxuICAgICAgICAmLm92ZXIxOFxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJG92ZXIxOC1jb2xvclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRvdmVyMTgtYm9yZGVyLWNvbG9yXG5cbiAgICAgICAgICBpbWcuc21hbGxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG92ZXIxOC1ib3JkZXItY29sb3JcblxuICAgICAgICBwLnNtYWxsXG4gICAgICAgICAgbWFyZ2luOiAwIDJweFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApXG5cbiAgICAgICAgICAmLmN1cnJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQtY29sb3IgIWltcG9ydGFudFxuXG4gICAgICAgICAgICAmLmFsYnVtXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgaW1nLnNtYWxsXG4gICAgICAgICAgei1pbmRleDogMTBcbiAgICAgICAgICB3aWR0aDogMHB4XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgIGJvdHRvbTogMzVweFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihibGFjaywgMzAlKVxuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHhcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyXG5cbiAgICAgICAgJjpob3ZlciBwLnNtYWxsXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQtY29sb3IgIWltcG9ydGFudFxuXG4gICAgICAgICY6aG92ZXIgaW1nXG4gICAgICAgICAgd2lkdGg6IGF1dG9cbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4XG4gICAgICAgICAgb3BhY2l0eTogMVxuXG4gICAgLnN1YnJlZGRpdHNlYXJjaHdyYXBwZXJcblxuICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgd2lkdGg6IDEwMHZ3XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KVxuICAgICAgei1pbmRleDoxNVxuXG4gICAgICAuc3VicmVkZGl0c2VhcmNoXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBsZWZ0OiA1MCVcbiAgICAgICAgdG9wOiA1MCVcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbiAgICAgICAgZGlzcGxheTogZ3JpZFxuXG5cbiAgICAgICAgLmhlYWRlciBcbiAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG5cblxuICAgICAgOmdsb2JhbCguaW5wdXQtY29udGFpbmVyKVxuICAgICAgICBoZWlnaHQ6IDQwcHhcblxuICAgICAgOmdsb2JhbCguaW5wdXQtY29udGFpbmVyIGlucHV0KVxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHhcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSh3aGl0ZSwgNjAlKVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcblxuICAgICAgOmdsb2JhbCguYXV0b2NvbXBsZXRlLWxpc3QpXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTUgKiAoMXJlbSArIDEwcHgpIC0gMTVweCkgIWltcG9ydGFudFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICAgICAgICBib3JkZXI6IG5vbmVcblxuICAgICAgOmdsb2JhbCguYXV0b2NvbXBsZXRlLWxpc3QgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0pXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdCAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1jcmVhdGUpXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdCAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS5zZWxlY3RlZClcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YWIwMDM4XG5cbiAgICAgIDpnbG9iYWwoLmF1dG9jb21wbGV0ZS1saXN0IC5hdXRvY29tcGxldGUtbGlzdC1pdGVtIGIpXG4gICAgICAgIGNvbG9yOiAkeWVsbG93XG5cbiAgICAuaW1hZ2VcbiAgICAgIGhlaWdodDogMTAwdmhcbiAgICAgIHdpZHRoOiAxMDB2d1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcblxuICAgIC52aWRlb1xuICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgd2lkdGg6IDEwMHZ3XG4gICAgICBvYmplY3QtZml0OiBjb250YWluXG5cbiAgLnByZWZldGNoXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgdG9wOiAwXG4gICAgbGVmdDogMFxuICAgIHdpZHRoOiAxcHhcbiAgICBoZWlnaHQ6IDFweFxuICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICBvcGFjaXR5OiAwXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweClcbiAgICAuaGVyb1xuICAgICAgLmdvdG9cbiAgICAgICAgcGFkZGluZzogMXJlbSAxMXJlbSAxcmVtIDFyZW1cblxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpXG4gICAgLmhlcm9cbiAgICAgIC5nb3RvXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggMzJweCAzMnB4IDMycHggMzJweCByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMnB4LCAxZnIpKVxuICAgICAgICAvL2dyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmclxuXG4gICAgICAgICYudGlueWdvdG9cblxuICAgICAgICAgIC5udW1zXG4gICAgICAgICAgICBoZWlnaHQ6IDAuMXJlbSAhaW1wb3J0YW50XG4gICAgICAgIGltZy5zbWFsbFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmVcblxuLnRvb2x0aXBcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6IDJcbiAgY3Vyc29yOiBwb2ludGVyXG5cbi50dGJlZm9yZVxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgYm90dG9tOiAxMjAlXG4gIGxlZnQ6IDUwJVxuICBtYXJnaW4tYm90dG9tOiA1cHhcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4XG4gIHBhZGRpbmc6IDVweCA0cHhcbiAgd2lkdGg6IG1heC1jb250ZW50XG4gIGJvcmRlci1yYWRpdXM6IDNweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICBjb2xvcjogI2ZmZlxuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDkwJSlcbiAgY29sb3I6IGJsYWNrXG5cbiAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICBmb250LXNpemU6IDAuOHJlbVxuICBsaW5lLWhlaWdodDogMS4yXG5cbi50dGFmdGVyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDEyMCVcbiAgbGVmdDogNTAlXG4gIG1hcmdpbi1sZWZ0OiAtNXB4XG4gIHdpZHRoOiAwXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKHdoaXRlLCA5MCUpXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnRcbiAgY29udGVudDogXCIgXCJcbiAgZm9udC1zaXplOiAwXG4gIGxpbmUtaGVpZ2h0OiAwXG5cbi50b29sdGlwXG4gICY6YmVmb3JlLCAmOmFmdGVyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXG4gICAgb3BhY2l0eTogMFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG5cbiAgJjpiZWZvcmVcbiAgICBAZXh0ZW5kIC50dGJlZm9yZVxuXG4gICYuYm90dG9tOmJlZm9yZVxuICAgIEBleHRlbmQgLnR0YmVmb3JlXG4gICAgYm90dG9tOiAtMTcwJVxuXG4gICY6YWZ0ZXJcbiAgICBAZXh0ZW5kIC50dGFmdGVyXG5cbiAgJi5ib3R0b206YWZ0ZXJcbiAgICBAZXh0ZW5kIC50dGFmdGVyXG4gICAgYm90dG9tOiAtNDAlXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDkwJSlcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnRcblxuICAmOmhvdmVyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcbiAgICAgIG9wYWNpdHk6IDFcblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiTkFOIiwic3ltYm9sVGFnIiwicmVJc0JhZEhleCIsInJlSXNCaW5hcnkiLCJyZUlzT2N0YWwiLCJmcmVlUGFyc2VJbnQiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZnJlZVNlbGYiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdFRvU3RyaW5nIiwiU3ltYm9sIiwiTWFwIiwiUHJvbWlzZSIsIlNldCIsImJhc2VHZXRUYWciLCJpc09iamVjdCIsImlzT2JqZWN0TGlrZSIsImlzU3ltYm9sIiwidG9OdW1iZXIiLCJ0cmltbWVkRW5kSW5kZXgiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiYmFzZVRyaW0iLCJkZWJvdW5jZSIsIm5vdyIsIl9kZWJvdW5jZSIsImZhUGF1c2UiLCJmYVBsYXkiLCJmYURvd25sb2FkIiwiZmFEaWNlIiwiZmFTb3VuZE9mZiIsImZhU291bmRPbiIsImZhSW1hZ2UiLCJmYVZpZGVvIiwiZmFJbWFnZVZpZGVvIiwiZmFTeW5jIiwiZmFTcGlubmVyIiwiZmFTZWFyY2giLCJmYVNldHRpbmdzIiwiZ290byIsImFocmVmIiwic2h1ZmZsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNZLE1BQUMsT0FBTyxHQUFHOzs7QUNBdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ25CLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUMzQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQUksU0FBUyxHQUFHLEVBQUUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQzdCLEVBQUUsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDMUIsRUFBRSxPQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzVCO0FBQ0EsRUFBRSxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQ3pFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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
