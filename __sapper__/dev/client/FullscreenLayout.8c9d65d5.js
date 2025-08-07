import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, a as validate_slots, q as validate_each_argument, j as empty, k as insert_hydration_dev, t as transition_in, o as group_outros, g as transition_out, l as check_outros, r as destroy_each, n as detach_dev, u as create_slot, w as update_slot_base, x as get_all_dirty_from_scope, y as get_slot_changes, z as element, A as text, B as claim_element, C as children, D as claim_text, E as attr_dev, F as add_location, G as append_hydration_dev, H as listen_dev, I as noop$1, J as space, K as claim_space, L as toggle_class, M as set_input_value, N as prop_dev, O as run_all, P as binding_callbacks, Q as set_data_dev, R as prevent_default, T as is_function, U as HtmlTagHydration, V as claim_html_tag, W as bind, v as validate_store, c as component_subscribe, X as onMount, Y as tick, Z as goto, _ as validate_each_keys, e as create_component, f as claim_component, $ as add_render_callback, m as mount_component, a0 as add_resize_listener, a1 as update_keyed_each, h as destroy_component, a2 as src_url_equal, a3 as query_selector_all, a4 as add_flush_callback, a5 as set_store_value, a6 as bubble, a7 as destroy_block, a8 as set_style, a9 as stop_propagation } from './client.1606be1f.js';
import { c as createCommonjsModule, a as commonjsGlobal, I as Icon, b as faCog, S as Settings, d as autoplay, f as favorite, o as over18, p as portraitLandscape, i as imageVideo, e as prefetchNum, m as muted, g as autoplayinterval, h as apiKey, j as hideUIonStart, k as lores, n as prefetch, q as hires, r as multireddit, s as oldreddit, l as layout, t as faCloudDownloadAlt } from './Settings.2b093148.js';
import { f as faHome } from './faHome.e8b8c34b.js';
import { f as faStar$2, a as faPlusCircle, b as faEye } from './faEye.273a49b7.js';

// TODO: Replace with your actual Tumblr API key
const API_KEY = 'YOUR_TUMBLR_API_KEY';

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

// (938:6) {:else}
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
		source: "(938:6) {:else}",
		ctx
	});

	return block;
}

// (936:6) {#if currpost.dims && currpost.dims.width > 0}
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
		source: "(936:6) {#if currpost.dims && currpost.dims.width > 0}",
		ctx
	});

	return block;
}

// (941:6) {#if currpost.subreddit}
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
			attr_dev(p, "class", "user svelte-bmoemd");
			add_location(p, file, 942, 10, 24871);
			attr_dev(div, "class", "subreddit");
			add_location(div, file, 941, 8, 24837);
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
		source: "(941:6) {#if currpost.subreddit}",
		ctx
	});

	return block;
}

// (972:34) 
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
		source: "(972:34) ",
		ctx
	});

	return block;
}

// (959:49) 
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
			attr_dev(video, "class", "video svelte-bmoemd");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[9];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[11];
			attr_dev(video, "id", "videoplayerid");
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(video, file, 959, 8, 25591);
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
		source: "(959:49) ",
		ctx
	});

	return block;
}

// (957:6) {#if currpost.is_image && !currpost.is_album}
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
			attr_dev(img, "class", "svelte-bmoemd");
			add_location(img, file, 957, 8, 25423);
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
		source: "(957:6) {#if currpost.is_image && !currpost.is_album}",
		ctx
	});

	return block;
}

// (977:8) {:else}
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
			attr_dev(img, "class", "svelte-bmoemd");
			add_location(img, file, 977, 10, 26678);
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
		source: "(977:8) {:else}",
		ctx
	});

	return block;
}

// (973:8) {#if currpost.preview.img.album[albumindex].is_video}
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
			add_location(source, file, 974, 12, 26571);
			attr_dev(video, "class", "video svelte-bmoemd");
			video.autoplay = true;
			video.loop = video_loop_value = !/*$autoplay*/ ctx[9];
			video.playsInline = true;
			video.muted = /*$muted*/ ctx[11];
			toggle_class(video, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(video, file, 973, 10, 26321);
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
		source: "(973:8) {#if currpost.preview.img.album[albumindex].is_video}",
		ctx
	});

	return block;
}

// (963:10) {:else}
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
		source: "(963:10) {:else}",
		ctx
	});

	return block;
}

// (961:10) {#if $lores}
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
			add_location(source, file, 961, 12, 25883);
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
		source: "(961:10) {#if $lores}",
		ctx
	});

	return block;
}

// (964:12) {#if currpost.preview.vid.webm}
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
			add_location(source, file, 964, 14, 26003);
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
		source: "(964:12) {#if currpost.preview.vid.webm}",
		ctx
	});

	return block;
}

// (967:12) {#if currpost.preview.vid.mp4}
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
			add_location(source, file, 967, 14, 26121);
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
		source: "(967:12) {#if currpost.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (983:4) {#if displayposts.length || posts.length}
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
			attr_dev(span0, "class", "btn playpause tooltip svelte-bmoemd");
			attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			toggle_class(span0, "play", /*$autoplay*/ ctx[9]);
			add_location(span0, file, 985, 10, 27059);
			attr_dev(span1, "class", "btn download tooltip svelte-bmoemd");
			attr_dev(span1, "data-tooltip", /*downloadstr*/ ctx[20]);
			toggle_class(span1, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span1, file, 992, 10, 27317);
			attr_dev(span2, "class", "btn dice tooltip svelte-bmoemd");
			attr_dev(span2, "data-tooltip", "Shuffle");
			add_location(span2, file, 999, 10, 27560);
			attr_dev(span3, "class", "btn imagevideo tooltip svelte-bmoemd");
			attr_dev(span3, "data-tooltip", /*imageVideoStr*/ ctx[19]);
			add_location(span3, file, 1005, 10, 27746);
			attr_dev(span4, "class", "btn muted tooltip svelte-bmoemd");
			attr_dev(span4, "data-tooltip", /*mutedstr*/ ctx[23]);
			add_location(span4, file, 1017, 10, 28181);
			attr_dev(span5, "class", "btn filter tooltip svelte-bmoemd");
			attr_dev(span5, "data-tooltip", "Filter ( / )");
			toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			toggle_class(span5, "dlready", /*numFavorite*/ ctx[3]);
			add_location(span5, file, 1032, 10, 28746);
			attr_dev(div0, "class", "btnwrapper svelte-bmoemd");
			add_location(div0, file, 984, 8, 27024);
			attr_dev(div1, "class", "numswrapper svelte-bmoemd");
			add_location(div1, file, 1051, 8, 29479);
			attr_dev(div2, "class", "goto svelte-bmoemd");
			add_render_callback(() => /*div2_elementresize_handler*/ ctx[67].call(div2));
			toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[15]);
			toggle_class(div2, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(div2, file, 983, 6, 26900);
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
			/*span5_binding*/ ctx[65](span5);
			append_hydration_dev(div0, t6);
			if (if_block3) if_block3.m(div0, null);
			append_hydration_dev(div2, t7);
			append_hydration_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			append_hydration_dev(div1, t8);
			if (if_block4) if_block4.m(div1, null);
			div2_resize_listener = add_resize_listener(div2, /*div2_elementresize_handler*/ ctx[67].bind(div2));
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
			if (dirty[0] & /*$autoplay*/ 512) icon0_changes.icon = /*$autoplay*/ ctx[9] ? faPause$1.faPause : faPlay$1.faPlay;
			icon0.$set(icon0_changes);

			if (!current || dirty[0] & /*autoplaystr*/ 2097152) {
				attr_dev(span0, "data-tooltip", /*autoplaystr*/ ctx[21]);
			}

			if (dirty[0] & /*$autoplay*/ 512) {
				toggle_class(span0, "play", /*$autoplay*/ ctx[9]);
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

			if (dirty[0] & /*filterExpanded*/ 33554432) {
				toggle_class(span5, "filterExpanded", /*filterExpanded*/ ctx[25]);
			}

			if (dirty[0] & /*numFavorite*/ 8) {
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

			if (dirty[0] & /*tinygoto*/ 32768) {
				toggle_class(div2, "tinygoto", /*tinygoto*/ ctx[15]);
			}

			if (dirty[0] & /*uiVisible*/ 4096) {
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
			/*span5_binding*/ ctx[65](null);
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
		source: "(983:4) {#if displayposts.length || posts.length}",
		ctx
	});

	return block;
}

// (1014:39) 
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
		source: "(1014:39) ",
		ctx
	});

	return block;
}

// (1012:39) 
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
		source: "(1012:39) ",
		ctx
	});

	return block;
}

// (1010:12) {#if $imageVideo == 0}
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
		source: "(1010:12) {#if $imageVideo == 0}",
		ctx
	});

	return block;
}

// (1024:10) {#if tinygoto}
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
			attr_dev(span, "class", "btn reload tooltip svelte-bmoemd");
			attr_dev(span, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span, "loaderror", /*loadError*/ ctx[28]);
			add_location(span, file, 1024, 12, 28422);
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
		source: "(1024:10) {#if tinygoto}",
		ctx
	});

	return block;
}

// (1028:14) {:else}
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
		source: "(1028:14) {:else}",
		ctx
	});

	return block;
}

// (1026:14) {#if loading}
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
		source: "(1026:14) {#if loading}",
		ctx
	});

	return block;
}

// (1042:12) {:else}
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
		source: "(1042:12) {:else}",
		ctx
	});

	return block;
}

// (1040:12) {#if filterExpanded}
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
			input = claim_element(nodes, "INPUT", { type: true, class: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "text");
			attr_dev(input, "class", "svelte-bmoemd");
			add_location(input, file, 1040, 14, 29046);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, input, anchor);
			set_input_value(input, /*filterValue*/ ctx[5]);

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_input_handler*/ ctx[64]),
					listen_dev(input, "click", stop_propagation(/*click_handler*/ ctx[61]), false, false, true),
					listen_dev(input, "keydown", stop_propagation(/*keydown_handler*/ ctx[62]), false, false, true)
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
		source: "(1040:12) {#if filterExpanded}",
		ctx
	});

	return block;
}

// (1046:10) {#if filterValue}
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
			attr_dev(p, "class", "svelte-bmoemd");
			add_location(p, file, 1047, 14, 29398);
			attr_dev(span, "class", "btn deepsearch tooltip svelte-bmoemd");
			attr_dev(span, "data-tooltip", /*deepsearchstr*/ ctx[22]);
			add_location(span, file, 1046, 12, 29287);
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
		source: "(1046:10) {#if filterValue}",
		ctx
	});

	return block;
}

// (1053:10) {#each displayposts as post, i (post.id + post.url)}
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
		return /*click_handler_1*/ ctx[66](/*i*/ ctx[108]);
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
			attr_dev(img, "class", "small svelte-bmoemd");
			attr_dev(img, "alt", img_alt_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].title);
			if (!src_url_equal(img.src, img_src_value = /*displayposts*/ ctx[2][/*i*/ ctx[108]].thumbnail)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 1060, 14, 29878);
			attr_dev(p, "class", "small svelte-bmoemd");
			toggle_class(p, "curr", /*index*/ ctx[8] === /*i*/ ctx[108]);
			toggle_class(p, "album", /*currpost*/ ctx[6].is_album);
			add_location(p, file, 1061, 14, 29976);
			attr_dev(span, "class", "nums svelte-bmoemd");
			toggle_class(span, "currnum", /*index*/ ctx[8] === /*i*/ ctx[108]);
			toggle_class(span, "album", /*currpost*/ ctx[6].is_album);
			toggle_class(span, "favorite", /*displayposts*/ ctx[2][/*i*/ ctx[108]].favorite);
			toggle_class(span, "over18", /*displayposts*/ ctx[2][/*i*/ ctx[108]].over18);
			add_location(span, file, 1053, 12, 29580);
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
		source: "(1053:10) {#each displayposts as post, i (post.id + post.url)}",
		ctx
	});

	return block;
}

// (1065:10) {#if !tinygoto}
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
			attr_dev(p, "class", "svelte-bmoemd");
			add_location(p, file, 1066, 14, 30218);
			attr_dev(span0, "class", "displayinfo svelte-bmoemd");
			toggle_class(span0, "filterExpanded", /*filterValue*/ ctx[5]);
			add_location(span0, file, 1065, 12, 30140);
			attr_dev(span1, "class", "btn reload tooltip svelte-bmoemd");
			attr_dev(span1, "data-tooltip", /*reloadstr*/ ctx[18]);
			toggle_class(span1, "loaderror", /*loadError*/ ctx[28]);
			add_location(span1, file, 1068, 12, 30294);
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

			if (dirty[0] & /*filterValue*/ 32) {
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
		source: "(1065:10) {#if !tinygoto}",
		ctx
	});

	return block;
}

// (1072:14) {:else}
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
		source: "(1072:14) {:else}",
		ctx
	});

	return block;
}

// (1070:14) {#if loading}
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
		source: "(1070:14) {#if loading}",
		ctx
	});

	return block;
}

// (1082:0) {#if $prefetch}
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
			add_location(div, file, 1082, 2, 30680);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
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
		source: "(1082:0) {#if $prefetch}",
		ctx
	});

	return block;
}

// (1096:8) {:else}
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
			add_location(img, file, 1096, 10, 31231);
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
		source: "(1096:8) {:else}",
		ctx
	});

	return block;
}

// (1094:34) 
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
			add_location(img, file, 1094, 10, 31148);
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
		source: "(1094:34) ",
		ctx
	});

	return block;
}

// (1092:8) {#if nexturl.is_album}
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
			add_location(img, file, 1092, 10, 31037);
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
		source: "(1092:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1085:6) {#if $hires}
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
		source: "(1085:6) {#if $hires}",
		ctx
	});

	return block;
}

// (1088:8) {:else}
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
			add_location(img, file, 1088, 10, 30921);
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
		source: "(1088:8) {:else}",
		ctx
	});

	return block;
}

// (1086:8) {#if nexturl.is_album}
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
			add_location(img, file, 1086, 10, 30825);
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
		source: "(1086:8) {#if nexturl.is_album}",
		ctx
	});

	return block;
}

// (1100:6) {#if nexturl.is_video}
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
			add_location(video, file, 1100, 8, 31339);
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
		source: "(1100:6) {#if nexturl.is_video}",
		ctx
	});

	return block;
}

// (1112:12) {:else}
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
			add_location(source, file, 1112, 14, 31787);
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
		source: "(1112:12) {:else}",
		ctx
	});

	return block;
}

// (1105:12) {#if nexturl.preview}
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
		source: "(1105:12) {#if nexturl.preview}",
		ctx
	});

	return block;
}

// (1102:10) {#if $lores}
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
			add_location(source, file, 1102, 12, 31414);
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
		source: "(1102:10) {#if $lores}",
		ctx
	});

	return block;
}

// (1106:14) {#if nexturl.preview.vid.webm}
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
			add_location(source, file, 1106, 16, 31570);
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
		source: "(1106:14) {#if nexturl.preview.vid.webm}",
		ctx
	});

	return block;
}

// (1109:14) {#if nexturl.preview.vid.mp4}
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
			add_location(source, file, 1109, 16, 31692);
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
		source: "(1109:14) {#if nexturl.preview.vid.mp4}",
		ctx
	});

	return block;
}

// (1084:4) {#each nexturls as nexturl (nexturl.preview.img.default)}
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
		source: "(1084:4) {#each nexturls as nexturl (nexturl.preview.img.default)}",
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
		/*settings_showSettings_binding*/ ctx[63](value);
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
			attr_dev(div0, "class", "title svelte-bmoemd");
			toggle_class(div0, "hide", !/*uiVisible*/ ctx[12] || !/*titleVisible*/ ctx[14]);
			toggle_class(div0, "favorite", /*currpost*/ ctx[6].favorite);
			add_location(div0, file, 934, 4, 24540);
			attr_dev(span, "class", "btn cog svelte-bmoemd");
			toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			toggle_class(span, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(span, file, 948, 6, 24988);
			attr_dev(div1, "class", "div svelte-bmoemd");
			toggle_class(div1, "hide", /*uiVisible*/ ctx[12] == false);
			add_location(div1, file, 951, 6, 25171);
			attr_dev(div2, "class", "settings svelte-bmoemd");
			add_location(div2, file, 946, 4, 24952);
			attr_dev(div3, "class", "main-media-container svelte-bmoemd");
			add_location(div3, file, 955, 4, 25328);
			attr_dev(div4, "class", "hero svelte-bmoemd");
			add_location(div4, file, 933, 2, 24517);
			attr_dev(div5, "class", "wrapper svelte-bmoemd");
			toggle_class(div5, "hide-cursor", /*hideCursor*/ ctx[13]);
			add_location(div5, file, 932, 0, 24460);
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

			if (dirty[0] & /*uiVisible, titleVisible*/ 20480) {
				toggle_class(div0, "hide", !/*uiVisible*/ ctx[12] || !/*titleVisible*/ ctx[14]);
			}

			if (dirty[0] & /*currpost*/ 64) {
				toggle_class(div0, "favorite", /*currpost*/ ctx[6].favorite);
			}

			if (dirty[0] & /*showSettings*/ 67108864) {
				toggle_class(span, "showSettings", /*showSettings*/ ctx[26]);
			}

			if (dirty[0] & /*uiVisible*/ 4096) {
				toggle_class(span, "hide", /*uiVisible*/ ctx[12] == false);
			}

			const settings_changes = {};

			if (!updating_showSettings && dirty[0] & /*showSettings*/ 67108864) {
				updating_showSettings = true;
				settings_changes.showSettings = /*showSettings*/ ctx[26];
				add_flush_callback(() => updating_showSettings = false);
			}

			settings.$set(settings_changes);

			if (dirty[0] & /*uiVisible*/ 4096) {
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

			if (dirty[0] & /*hideCursor*/ 8192) {
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
	let $prefetchNum;
	let $muted;
	let $autoplayinterval;
	let $apiKey;
	let $gotoElWidth;
	let $hideUIonStart;
	let $lores;
	let $_gotoElWidth;
	let $prefetch;
	let $hires;
	validate_store(autoplay, 'autoplay');
	component_subscribe($$self, autoplay, $$value => $$invalidate(9, $autoplay = $$value));
	validate_store(favorite, 'favorite');
	component_subscribe($$self, favorite, $$value => $$invalidate(75, $favorite = $$value));
	validate_store(over18, 'over18');
	component_subscribe($$self, over18, $$value => $$invalidate(57, $over18 = $$value));
	validate_store(portraitLandscape, 'portraitLandscape');
	component_subscribe($$self, portraitLandscape, $$value => $$invalidate(58, $portraitLandscape = $$value));
	validate_store(imageVideo, 'imageVideo');
	component_subscribe($$self, imageVideo, $$value => $$invalidate(10, $imageVideo = $$value));
	validate_store(prefetchNum, 'prefetchNum');
	component_subscribe($$self, prefetchNum, $$value => $$invalidate(59, $prefetchNum = $$value));
	validate_store(muted, 'muted');
	component_subscribe($$self, muted, $$value => $$invalidate(11, $muted = $$value));
	validate_store(autoplayinterval, 'autoplayinterval');
	component_subscribe($$self, autoplayinterval, $$value => $$invalidate(76, $autoplayinterval = $$value));
	validate_store(apiKey, 'apiKey');
	component_subscribe($$self, apiKey, $$value => $$invalidate(77, $apiKey = $$value));
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
	component_subscribe($$self, gotoElWidth, value => $$invalidate(60, $gotoElWidth = value));
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
		$portraitLandscape,
		$imageVideo,
		$prefetchNum,
		$muted,
		$autoplayinterval,
		$apiKey,
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

		if ($$self.$$.dirty[0] & /*displayposts, index, currpost, albumindex, nexturls, filterValue*/ 500 | $$self.$$.dirty[1] & /*$prefetchNum, res*/ 269484032) {
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
						// Invalid subreddit
						$$invalidate(6, currpost = { title: "Error" });
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

		if ($$self.$$.dirty[0] & /*displayposts*/ 4 | $$self.$$.dirty[1] & /*$gotoElWidth*/ 536870912) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVsbHNjcmVlbkxheW91dC44YzlkNjVkNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVVcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWb2x1bWVNdXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGF1c2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRG9uYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4cGFuZEFsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEaWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBob3RvVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW1hZ2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVmlkZW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMvZmFTdGFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNwaW5uZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWludXNDaXJjbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXllU2xhc2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhwYW5kQXJyb3dzQWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1vYmlsZUFsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEZXNrdG9wLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdmVsdGUtYXV0b2NvbXBsZXRlL3NyYy9TaW1wbGVBdXRvY29tcGxldGUuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC5zaHVmZmxlL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1waXBlYWJsZS1zdG9yZS9pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvc3RvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXBpcGVhYmxlLXN0b3JlL29wZXJhdG9ycy9kZWJvdW5jZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtcGlwZWFibGUtc3RvcmUvb3BlcmF0b3JzL3N0YXJ0V2l0aC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Z1bGxzY3JlZW5MYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBUdW1ibHIgQVBJIGtleVxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSAnWU9VUl9UVU1CTFJfQVBJX0tFWSc7XG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3ZvbHVtZS11cCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAyOCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTIxNS4wMyA3MS4wNUwxMjYuMDYgMTYwSDI0Yy0xMy4yNiAwLTI0IDEwLjc0LTI0IDI0djE0NGMwIDEzLjI1IDEwLjc0IDI0IDI0IDI0aDEwMi4wNmw4OC45NyA4OC45NWMxNS4wMyAxNS4wMyA0MC45NyA0LjQ3IDQwLjk3LTE2Ljk3Vjg4LjAyYzAtMjEuNDYtMjUuOTYtMzEuOTgtNDAuOTctMTYuOTd6bTIzMy4zMi01MS4wOGMtMTEuMTctNy4zMy0yNi4xOC00LjI0LTMzLjUxIDYuOTUtNy4zNCAxMS4xNy00LjIyIDI2LjE4IDYuOTUgMzMuNTEgNjYuMjcgNDMuNDkgMTA1LjgyIDExNi42IDEwNS44MiAxOTUuNTggMCA3OC45OC0zOS41NSAxNTIuMDktMTA1LjgyIDE5NS41OC0xMS4xNyA3LjMyLTE0LjI5IDIyLjM0LTYuOTUgMzMuNSA3LjA0IDEwLjcxIDIxLjkzIDE0LjU2IDMzLjUxIDYuOTVDNTI4LjI3IDQzOS41OCA1NzYgMzUxLjMzIDU3NiAyNTZTNTI4LjI3IDcyLjQzIDQ0OC4zNSAxOS45N3pNNDgwIDI1NmMwLTYzLjUzLTMyLjA2LTEyMS45NC04NS43Ny0xNTYuMjQtMTEuMTktNy4xNC0yNi4wMy0zLjgyLTMzLjEyIDcuNDZzLTMuNzggMjYuMjEgNy40MSAzMy4zNkM0MDguMjcgMTY1Ljk3IDQzMiAyMDkuMTEgNDMyIDI1NnMtMjMuNzMgOTAuMDMtNjMuNDggMTE1LjQyYy0xMS4xOSA3LjE0LTE0LjUgMjIuMDctNy40MSAzMy4zNiA2LjUxIDEwLjM2IDIxLjEyIDE1LjE0IDMzLjEyIDcuNDZDNDQ3Ljk0IDM3Ny45NCA0ODAgMzE5LjU0IDQ4MCAyNTZ6bS0xNDEuNzctNzYuODdjLTExLjU4LTYuMzMtMjYuMTktMi4xNi0zMi42MSA5LjQ1LTYuMzkgMTEuNjEtMi4xNiAyNi4yIDkuNDUgMzIuNjFDMzI3Ljk4IDIyOC4yOCAzMzYgMjQxLjYzIDMzNiAyNTZjMCAxNC4zOC04LjAyIDI3LjcyLTIwLjkyIDM0LjgxLTExLjYxIDYuNDEtMTUuODQgMjEtOS40NSAzMi42MSA2LjQzIDExLjY2IDIxLjA1IDE1LjggMzIuNjEgOS40NSAyOC4yMy0xNS41NSA0NS43Ny00NSA0NS43Ny03Ni44OHMtMTcuNTQtNjEuMzItNDUuNzgtNzYuODZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVm9sdW1lVXAgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndm9sdW1lLW11dGUnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y2YTknO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yMTUuMDMgNzEuMDVMMTI2LjA2IDE2MEgyNGMtMTMuMjYgMC0yNCAxMC43NC0yNCAyNHYxNDRjMCAxMy4yNSAxMC43NCAyNCAyNCAyNGgxMDIuMDZsODguOTcgODguOTVjMTUuMDMgMTUuMDMgNDAuOTcgNC40NyA0MC45Ny0xNi45N1Y4OC4wMmMwLTIxLjQ2LTI1Ljk2LTMxLjk4LTQwLjk3LTE2Ljk3ek00NjEuNjQgMjU2bDQ1LjY0LTQ1LjY0YzYuMy02LjMgNi4zLTE2LjUyIDAtMjIuODJsLTIyLjgyLTIyLjgyYy02LjMtNi4zLTE2LjUyLTYuMy0yMi44MiAwTDQxNiAyMTAuMzZsLTQ1LjY0LTQ1LjY0Yy02LjMtNi4zLTE2LjUyLTYuMy0yMi44MiAwbC0yMi44MiAyMi44MmMtNi4zIDYuMy02LjMgMTYuNTIgMCAyMi44MkwzNzAuMzYgMjU2bC00NS42MyA0NS42M2MtNi4zIDYuMy02LjMgMTYuNTIgMCAyMi44MmwyMi44MiAyMi44MmM2LjMgNi4zIDE2LjUyIDYuMyAyMi44MiAwTDQxNiAzMDEuNjRsNDUuNjQgNDUuNjRjNi4zIDYuMyAxNi41MiA2LjMgMjIuODIgMGwyMi44Mi0yMi44MmM2LjMtNi4zIDYuMy0xNi41MiAwLTIyLjgyTDQ2MS42NCAyNTZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVm9sdW1lTXV0ZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwbGF5JztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDRiJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDI0LjQgMjE0LjdMNzIuNCA2LjZDNDMuOC0xMC4zIDAgNi4xIDAgNDcuOVY0NjRjMCAzNy41IDQwLjcgNjAuMSA3Mi40IDQxLjNsMzUyLTIwOGMzMS40LTE4LjUgMzEuNS02NC4xIDAtODIuNnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQbGF5ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3BhdXNlJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDRjJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTQ0IDQ3OUg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWNzljMC0yNi41IDIxLjUtNDggNDgtNDhoOTZjMjYuNSAwIDQ4IDIxLjUgNDggNDh2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4em0zMDQtNDhWNzljMC0yNi41LTIxLjUtNDgtNDgtNDhoLTk2Yy0yNi41IDAtNDggMjEuNS00OCA0OHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoOTZjMjYuNSAwIDQ4LTIxLjUgNDgtNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUGF1c2UgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZG9uYXRlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNGI5JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU2IDQxNmMxMTQuOSAwIDIwOC05My4xIDIwOC0yMDhTMzcwLjkgMCAyNTYgMCA0OCA5My4xIDQ4IDIwOHM5My4xIDIwOCAyMDggMjA4ek0yMzMuOCA5Ny40VjgwLjZjMC05LjIgNy40LTE2LjYgMTYuNi0xNi42aDExLjFjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42djE3YzE1LjUuOCAzMC41IDYuMSA0MyAxNS40IDUuNiA0LjEgNi4yIDEyLjMgMS4yIDE3LjFMMzA2IDE0NS42Yy0zLjggMy43LTkuNSAzLjgtMTQgMS01LjQtMy40LTExLjQtNS4xLTE3LjgtNS4xaC0zOC45Yy05IDAtMTYuMyA4LjItMTYuMyAxOC4zIDAgOC4yIDUgMTUuNSAxMi4xIDE3LjZsNjIuMyAxOC43YzI1LjcgNy43IDQzLjcgMzIuNCA0My43IDYwLjEgMCAzNC0yNi40IDYxLjUtNTkuMSA2Mi40djE2LjhjMCA5LjItNy40IDE2LjYtMTYuNiAxNi42aC0xMS4xYy05LjIgMC0xNi42LTcuNC0xNi42LTE2LjZ2LTE3Yy0xNS41LS44LTMwLjUtNi4xLTQzLTE1LjQtNS42LTQuMS02LjItMTIuMy0xLjItMTcuMWwxNi4zLTE1LjVjMy44LTMuNyA5LjUtMy44IDE0LTEgNS40IDMuNCAxMS40IDUuMSAxNy44IDUuMWgzOC45YzkgMCAxNi4zLTguMiAxNi4zLTE4LjMgMC04LjItNS0xNS41LTEyLjEtMTcuNmwtNjIuMy0xOC43Yy0yNS43LTcuNy00My43LTMyLjQtNDMuNy02MC4xLjEtMzQgMjYuNC02MS41IDU5LjEtNjIuNHpNNDgwIDM1MmgtMzIuNWMtMTkuNiAyNi00NC42IDQ3LjctNzMgNjRoNjMuOGM1LjMgMCA5LjYgMy42IDkuNiA4djE2YzAgNC40LTQuMyA4LTkuNiA4SDczLjZjLTUuMyAwLTkuNi0zLjYtOS42LTh2LTE2YzAtNC40IDQuMy04IDkuNi04aDYzLjhjLTI4LjQtMTYuMy01My4zLTM4LTczLTY0SDMyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY5NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg0NDhjMTcuNyAwIDMyLTE0LjMgMzItMzJ2LTk2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYURvbmF0ZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdleHBhbmQtYWx0JztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNDI0JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjEyLjY4NiAzMTUuMzE0TDEyMCA0MDhsMzIuOTIyIDMxLjAyOWMxNS4xMiAxNS4xMiA0LjQxMiA0MC45NzEtMTYuOTcgNDAuOTcxaC0xMTJDMTAuNjk3IDQ4MCAwIDQ2OS4yNTUgMCA0NTZWMzQ0YzAtMjEuMzgyIDI1LjgwMy0zMi4wOSA0MC45MjItMTYuOTcxTDcyIDM2MGw5Mi42ODYtOTIuNjg2YzYuMjQ4LTYuMjQ4IDE2LjM3OS02LjI0OCAyMi42MjcgMGwyNS4zNzMgMjUuMzczYzYuMjQ5IDYuMjQ4IDYuMjQ5IDE2LjM3OCAwIDIyLjYyN3ptMjIuNjI4LTExOC42MjhMMzI4IDEwNGwtMzIuOTIyLTMxLjAyOUMyNzkuOTU4IDU3Ljg1MSAyOTAuNjY2IDMyIDMxMi4wNDggMzJoMTEyQzQzNy4zMDMgMzIgNDQ4IDQyLjc0NSA0NDggNTZ2MTEyYzAgMjEuMzgyLTI1LjgwMyAzMi4wOS00MC45MjIgMTYuOTcxTDM3NiAxNTJsLTkyLjY4NiA5Mi42ODZjLTYuMjQ4IDYuMjQ4LTE2LjM3OSA2LjI0OC0yMi42MjcgMGwtMjUuMzczLTI1LjM3M2MtNi4yNDktNi4yNDgtNi4yNDktMTYuMzc4IDAtMjIuNjI3eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUV4cGFuZEFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdkaWNlJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmNTIyJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTkyIDE5Mkg0NzMuMjZjMTIuNjkgMjkuNTkgNy4xMiA2NS4yLTE3IDg5LjMyTDMyMCA0MTcuNThWNDY0YzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMjI0YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMjQwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6TTQ4MCAzNzZjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0em0tNDYuMzctMTg2LjdMMjU4LjcgMTQuMzdjLTE5LjE2LTE5LjE2LTUwLjIzLTE5LjE2LTY5LjM5IDBMMTQuMzcgMTg5LjNjLTE5LjE2IDE5LjE2LTE5LjE2IDUwLjIzIDAgNjkuMzlMMTg5LjMgNDMzLjYzYzE5LjE2IDE5LjE2IDUwLjIzIDE5LjE2IDY5LjM5IDBMNDMzLjYzIDI1OC43YzE5LjE2LTE5LjE3IDE5LjE2LTUwLjI0IDAtNjkuNHpNOTYgMjQ4Yy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHptMTI4IDEyOGMtMTMuMjUgMC0yNC0xMC43NS0yNC0yNCAwLTEzLjI2IDEwLjc1LTI0IDI0LTI0czI0IDEwLjc0IDI0IDI0YzAgMTMuMjUtMTAuNzUgMjQtMjQgMjR6bTAtMTI4Yy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHptMC0xMjhjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0em0xMjggMTI4Yy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFEaWNlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3Bob3RvLXZpZGVvJztcbnZhciB3aWR0aCA9IDY0MDtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmODdjJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNjA4IDBIMTYwYTMyIDMyIDAgMCAwLTMyIDMydjk2aDE2MFY2NGgxOTJ2MzIwaDEyOGEzMiAzMiAwIDAgMCAzMi0zMlYzMmEzMiAzMiAwIDAgMC0zMi0zMnpNMjMyIDEwM2E5IDkgMCAwIDEtOSA5aC0zMGE5IDkgMCAwIDEtOS05VjczYTkgOSAwIDAgMSA5LTloMzBhOSA5IDAgMCAxIDkgOXptMzUyIDIwOGE5IDkgMCAwIDEtOSA5aC0zMGE5IDkgMCAwIDEtOS05di0zMGE5IDkgMCAwIDEgOS05aDMwYTkgOSAwIDAgMSA5IDl6bTAtMTA0YTkgOSAwIDAgMS05IDloLTMwYTkgOSAwIDAgMS05LTl2LTMwYTkgOSAwIDAgMSA5LTloMzBhOSA5IDAgMCAxIDkgOXptMC0xMDRhOSA5IDAgMCAxLTkgOWgtMzBhOSA5IDAgMCAxLTktOVY3M2E5IDkgMCAwIDEgOS05aDMwYTkgOSAwIDAgMSA5IDl6bS0xNjggNTdIMzJhMzIgMzIgMCAwIDAtMzIgMzJ2Mjg4YTMyIDMyIDAgMCAwIDMyIDMyaDM4NGEzMiAzMiAwIDAgMCAzMi0zMlYxOTJhMzIgMzIgMCAwIDAtMzItMzJ6TTk2IDIyNGEzMiAzMiAwIDEgMS0zMiAzMiAzMiAzMiAwIDAgMSAzMi0zMnptMjg4IDIyNEg2NHYtMzJsNjQtNjQgMzIgMzIgMTI4LTEyOCA5NiA5NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQaG90b1ZpZGVvID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2ltYWdlJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDNlJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDY0IDQ0OEg0OGMtMjYuNTEgMC00OC0yMS40OS00OC00OFYxMTJjMC0yNi41MSAyMS40OS00OCA0OC00OGg0MTZjMjYuNTEgMCA0OCAyMS40OSA0OCA0OHYyODhjMCAyNi41MS0yMS40OSA0OC00OCA0OHpNMTEyIDEyMGMtMzAuOTI4IDAtNTYgMjUuMDcyLTU2IDU2czI1LjA3MiA1NiA1NiA1NiA1Ni0yNS4wNzIgNTYtNTYtMjUuMDcyLTU2LTU2LTU2ek02NCAzODRoMzg0VjI3MmwtODcuNTE1LTg3LjUxNWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDIwOCAzMjBsLTU1LjUxNS01NS41MTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2NCAzMzZ2NDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhSW1hZ2UgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndmlkZW8nO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwM2QnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMzYuMiA2NEg0Ny44QzIxLjQgNjQgMCA4NS40IDAgMTExLjh2Mjg4LjRDMCA0MjYuNiAyMS40IDQ0OCA0Ny44IDQ0OGgyODguNGMyNi40IDAgNDcuOC0yMS40IDQ3LjgtNDcuOFYxMTEuOGMwLTI2LjQtMjEuNC00Ny44LTQ3LjgtNDcuOHptMTg5LjQgMzcuN0w0MTYgMTc3LjN2MTU3LjRsMTA5LjYgNzUuNWMyMS4yIDE0LjYgNTAuNC0uMyA1MC40LTI1LjhWMTI3LjVjMC0yNS40LTI5LjEtNDAuNC01MC40LTI1Ljh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVmlkZW8gPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcic7XG52YXIgaWNvbk5hbWUgPSAnc3Rhcic7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwNSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUyOC4xIDE3MS41TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNnpNMzg4LjYgMzEyLjNsMjMuNyAxMzguNEwyODggMzg1LjRsLTEyNC4zIDY1LjMgMjMuNy0xMzguNC0xMDAuNi05OCAxMzktMjAuMiA2Mi4yLTEyNiA2Mi4yIDEyNiAxMzkgMjAuMi0xMDAuNiA5OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTdGFyID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NlYXJjaCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNSA0NDIuN0w0MDUuMyAzNDNjLTQuNS00LjUtMTAuNi03LTE3LTdIMzcyYzI3LjYtMzUuMyA0NC03OS43IDQ0LTEyOEM0MTYgOTMuMSAzMjIuOSAwIDIwOCAwUzAgOTMuMSAwIDIwOHM5My4xIDIwOCAyMDggMjA4YzQ4LjMgMCA5Mi43LTE2LjQgMTI4LTQ0djE2LjNjMCA2LjQgMi41IDEyLjUgNyAxN2w5OS43IDk5LjdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMjguMy0yOC4zYzkuNC05LjQgOS40LTI0LjYuMS0zNHpNMjA4IDMzNmMtNzAuNyAwLTEyOC01Ny4yLTEyOC0xMjggMC03MC43IDU3LjItMTI4IDEyOC0xMjggNzAuNyAwIDEyOCA1Ny4yIDEyOCAxMjggMCA3MC43LTU3LjIgMTI4LTEyOCAxMjh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2VhcmNoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3N5bmMnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMjEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000NDAuNjUgMTIuNTdsNCA4Mi43N0EyNDcuMTYgMjQ3LjE2IDAgMCAwIDI1NS44MyA4QzEzNC43MyA4IDMzLjkxIDk0LjkyIDEyLjI5IDIwOS44MkExMiAxMiAwIDAgMCAyNC4wOSAyMjRoNDkuMDVhMTIgMTIgMCAwIDAgMTEuNjctOS4yNiAxNzUuOTEgMTc1LjkxIDAgMCAxIDMxNy01Ni45NGwtMTAxLjQ2LTQuODZhMTIgMTIgMCAwIDAtMTIuNTcgMTJ2NDcuNDFhMTIgMTIgMCAwIDAgMTIgMTJINTAwYTEyIDEyIDAgMCAwIDEyLTEyVjEyYTEyIDEyIDAgMCAwLTEyLTEyaC00Ny4zN2ExMiAxMiAwIDAgMC0xMS45OCAxMi41N3pNMjU1LjgzIDQzMmExNzUuNjEgMTc1LjYxIDAgMCAxLTE0Ni03Ny44bDEwMS44IDQuODdhMTIgMTIgMCAwIDAgMTIuNTctMTJ2LTQ3LjRhMTIgMTIgMCAwIDAtMTItMTJIMTJhMTIgMTIgMCAwIDAtMTIgMTJWNTAwYTEyIDEyIDAgMCAwIDEyIDEyaDQ3LjM1YTEyIDEyIDAgMCAwIDEyLTEyLjZsLTQuMTUtODIuNTdBMjQ3LjE3IDI0Ny4xNyAwIDAgMCAyNTUuODMgNTA0YzEyMS4xMSAwIDIyMS45My04Ni45MiAyNDMuNTUtMjAxLjgyYTEyIDEyIDAgMCAwLTExLjgtMTQuMThoLTQ5LjA1YTEyIDEyIDAgMCAwLTExLjY3IDkuMjZBMTc1Ljg2IDE3NS44NiAwIDAgMSAyNTUuODMgNDMyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVN5bmMgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3Bpbm5lcic7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjExMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTMwNCA0OGMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4cy00OC0yMS40OS00OC00OCAyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OHptLTQ4IDM2OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHptMjA4LTIwOGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHMyMS40OSA0OCA0OCA0OCA0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OHpNOTYgMjU2YzAtMjYuNTEtMjEuNDktNDgtNDgtNDhTMCAyMjkuNDkgMCAyNTZzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDh6bTEyLjkyMiA5OS4wNzhjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDkxLTQ4LTQ4LTQ4em0yOTQuMTU2IDBjLTI2LjUxIDAtNDggMjEuNDktNDggNDhzMjEuNDkgNDggNDggNDggNDgtMjEuNDkgNDgtNDhjMC0yNi41MDktMjEuNDktNDgtNDgtNDh6TTEwOC45MjIgNjAuOTIyYy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4czIxLjQ5IDQ4IDQ4IDQ4IDQ4LTIxLjQ5IDQ4LTQ4LTIxLjQ5MS00OC00OC00OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTcGlubmVyID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ21pbnVzLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA1Nic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6TTEyNCAyOTZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNTZjMC02LjYgNS40LTEyIDEyLTEyaDI2NGM2LjYgMCAxMiA1LjQgMTIgMTJ2NTZjMCA2LjYtNS40IDEyLTEyIDEySDEyNHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFNaW51c0NpcmNsZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdleWUtc2xhc2gnO1xudmFyIHdpZHRoID0gNjQwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNzAnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zMjAgNDAwYy03NS44NSAwLTEzNy4yNS01OC43MS0xNDIuOS0xMzMuMTFMNzIuMiAxODUuODJjLTEzLjc5IDE3LjMtMjYuNDggMzUuNTktMzYuNzIgNTUuNTlhMzIuMzUgMzIuMzUgMCAwIDAgMCAyOS4xOUM4OS43MSAzNzYuNDEgMTk3LjA3IDQ0OCAzMjAgNDQ4YzI2LjkxIDAgNTIuODctNCA3Ny44OS0xMC40NkwzNDYgMzk3LjM5YTE0NC4xMyAxNDQuMTMgMCAwIDEtMjYgMi42MXptMzEzLjgyIDU4LjFsLTExMC41NS04NS40NGEzMzEuMjUgMzMxLjI1IDAgMCAwIDgxLjI1LTEwMi4wNyAzMi4zNSAzMi4zNSAwIDAgMCAwLTI5LjE5QzU1MC4yOSAxMzUuNTkgNDQyLjkzIDY0IDMyMCA2NGEzMDguMTUgMzA4LjE1IDAgMCAwLTE0Ny4zMiAzNy43TDQ1LjQ2IDMuMzdBMTYgMTYgMCAwIDAgMjMgNi4xOEwzLjM3IDMxLjQ1QTE2IDE2IDAgMCAwIDYuMTggNTMuOWw1ODguMzYgNDU0LjczYTE2IDE2IDAgMCAwIDIyLjQ2LTIuODFsMTkuNjQtMjUuMjdhMTYgMTYgMCAwIDAtMi44Mi0yMi40NXptLTE4My43Mi0xNDJsLTM5LjMtMzAuMzhBOTQuNzUgOTQuNzUgMCAwIDAgNDE2IDI1NmE5NC43NiA5NC43NiAwIDAgMC0xMjEuMzEtOTIuMjFBNDcuNjUgNDcuNjUgMCAwIDEgMzA0IDE5MmE0Ni42NCA0Ni42NCAwIDAgMS0xLjU0IDEwbC03My42MS01Ni44OUExNDIuMzEgMTQyLjMxIDAgMCAxIDMyMCAxMTJhMTQzLjkyIDE0My45MiAwIDAgMSAxNDQgMTQ0YzAgMjEuNjMtNS4yOSA0MS43OS0xMy45IDYwLjExeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUV5ZVNsYXNoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3RoJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDBhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTQ5LjMzMyA1NnY4MGMwIDEzLjI1NS0xMC43NDUgMjQtMjQgMjRIMjRjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNFY1NmMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoMTAxLjMzM2MxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR6bTE4MS4zMzQgMjQwdi04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjA1LjMzM2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NiAwIDI0LjAwMS0xMC43NDUgMjQuMDAxLTI0em0zMi0yNDB2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0SDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRWNTZjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDM4Ni42NjdjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHptLTMyIDgwVjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU2IDAgMjQuMDAxLTEwLjc0NSAyNC4wMDEtMjR6bS0yMDUuMzM0IDU2SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjR6TTAgMzc2djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6bTM4Ni42NjctNTZINDg4YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDM4Ni42NjdjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjR6bTAgMTYwSDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgzODYuNjY3Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0ek0xODEuMzMzIDM3NnY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTAxLjMzM2MxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVGggPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZXhwYW5kLWFycm93cy1hbHQnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YzMWUnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000NDggMzQ0djExMmEyMy45NCAyMy45NCAwIDAgMS0yNCAyNEgzMTJjLTIxLjM5IDAtMzIuMDktMjUuOS0xNy00MWwzNi4yLTM2LjJMMjI0IDI5NS42IDExNi43NyA0MDIuOSAxNTMgNDM5YzE1LjA5IDE1LjEgNC4zOSA0MS0xNyA0MUgyNGEyMy45NCAyMy45NCAwIDAgMS0yNC0yNFYzNDRjMC0yMS40IDI1Ljg5LTMyLjEgNDEtMTdsMzYuMTkgMzYuMkwxODQuNDYgMjU2IDc3LjE4IDE0OC43IDQxIDE4NWMtMTUuMSAxNS4xLTQxIDQuNC00MS0xN1Y1NmEyMy45NCAyMy45NCAwIDAgMSAyNC0yNGgxMTJjMjEuMzkgMCAzMi4wOSAyNS45IDE3IDQxbC0zNi4yIDM2LjJMMjI0IDIxNi40bDEwNy4yMy0xMDcuM0wyOTUgNzNjLTE1LjA5LTE1LjEtNC4zOS00MSAxNy00MWgxMTJhMjMuOTQgMjMuOTQgMCAwIDEgMjQgMjR2MTEyYzAgMjEuNC0yNS44OSAzMi4xLTQxIDE3bC0zNi4xOS0zNi4yTDI2My41NCAyNTZsMTA3LjI4IDEwNy4zTDQwNyAzMjcuMWMxNS4xLTE1LjIgNDEtNC41IDQxIDE2Ljl6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRXhwYW5kQXJyb3dzQWx0ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ21vYmlsZS1hbHQnO1xudmFyIHdpZHRoID0gMzIwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YzY2QnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNzIgMEg0OEMyMS41IDAgMCAyMS41IDAgNDh2NDE2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDIyNGMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHpNMTYwIDQ4MGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyLTE0LjMgMzItMzIgMzJ6bTExMi0xMDhjMCA2LjYtNS40IDEyLTEyIDEySDYwYy02LjYgMC0xMi01LjQtMTItMTJWNjBjMC02LjYgNS40LTEyIDEyLTEyaDIwMGM2LjYgMCAxMiA1LjQgMTIgMTJ2MzEyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYU1vYmlsZUFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdkZXNrdG9wJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTA4JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFEZXNrdG9wID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCI8c2NyaXB0PlxuICAvLyB0aGUgbGlzdCBvZiBpdGVtcyAgdGhlIHVzZXIgY2FuIHNlbGVjdCBmcm9tXG4gIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcblxuICAvLyBmdW5jdGlvbiB0byB1c2UgdG8gZ2V0IGFsbCBpdGVtcyAoYWx0ZXJuYXRpdmUgdG8gcHJvdmlkaW5nIGl0ZW1zKVxuICBleHBvcnQgbGV0IHNlYXJjaEZ1bmN0aW9uID0gZmFsc2U7XG5cbiAgLy8gZmllbGQgb2YgZWFjaCBpdGVtIHRoYXQncyB1c2VkIGZvciB0aGUgbGFiZWxzIGluIHRoZSBsaXN0XG4gIGV4cG9ydCBsZXQgbGFiZWxGaWVsZE5hbWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQga2V5d29yZHNGaWVsZE5hbWUgPSBsYWJlbEZpZWxkTmFtZTtcbiAgZXhwb3J0IGxldCB2YWx1ZUZpZWxkTmFtZSA9IHVuZGVmaW5lZDtcblxuICBleHBvcnQgbGV0IGxhYmVsRnVuY3Rpb24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCB8fCBpdGVtID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsRmllbGROYW1lID8gaXRlbVtsYWJlbEZpZWxkTmFtZV0gOiBpdGVtO1xuICB9O1xuXG4gIGV4cG9ydCBsZXQga2V5d29yZHNGdW5jdGlvbiA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4ga2V5d29yZHNGaWVsZE5hbWUgPyBpdGVtW2tleXdvcmRzRmllbGROYW1lXSA6IGxhYmVsRnVuY3Rpb24oaXRlbSk7XG4gIH07XG5cbiAgZXhwb3J0IGxldCB2YWx1ZUZ1bmN0aW9uID0gZnVuY3Rpb24oaXRlbSwgZm9yY2VTaW5nbGUgPSBmYWxzZSkge1xuICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQgfHwgaXRlbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIGlmICghbXVsdGlwbGUgfHwgZm9yY2VTaW5nbGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZUZpZWxkTmFtZSA/IGl0ZW1bdmFsdWVGaWVsZE5hbWVdIDogaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW0ubWFwKGkgPT4gKHZhbHVlRmllbGROYW1lID8gaVt2YWx1ZUZpZWxkTmFtZV0gOiBpKSk7XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydCBsZXQga2V5d29yZHNDbGVhbkZ1bmN0aW9uID0gZnVuY3Rpb24oa2V5d29yZHMpIHtcbiAgICByZXR1cm4ga2V5d29yZHM7XG4gIH07XG5cbiAgZXhwb3J0IGxldCB0ZXh0Q2xlYW5GdW5jdGlvbiA9IGZ1bmN0aW9uKHVzZXJFbnRlcmVkVGV4dCkge1xuICAgIHJldHVybiB1c2VyRW50ZXJlZFRleHQ7XG4gIH07XG5cbiAgLy8gZXZlbnRzXG4gIGV4cG9ydCBsZXQgYmVmb3JlQ2hhbmdlID0gZnVuY3Rpb24ob2xkU2VsZWN0ZWRJdGVtLCBuZXdTZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgZXhwb3J0IGxldCBvbkNoYW5nZSA9IGZ1bmN0aW9uKG5ld1NlbGVjdGVkSXRlbSkge307XG4gIGV4cG9ydCBsZXQgb25Gb2N1cyA9IGZ1bmN0aW9uKCkge307XG4gIGV4cG9ydCBsZXQgb25CbHVyID0gZnVuY3Rpb24oKSB7fTtcbiAgZXhwb3J0IGxldCBvbkNyZWF0ZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25DcmVhdGU6IFwiICsgdGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEJlaGF2aW91ciBwcm9wZXJ0aWVzXG4gIGV4cG9ydCBsZXQgc2VsZWN0Rmlyc3RJZkVtcHR5ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbWluQ2hhcmFjdGVyc1RvU2VhcmNoID0gMTtcbiAgZXhwb3J0IGxldCBtYXhJdGVtc1RvU2hvd0luTGlzdCA9IDA7XG4gIGV4cG9ydCBsZXQgbXVsdGlwbGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjcmVhdGUgPSBmYWxzZTtcblxuICAvLyBpZ25vcmVzIHRoZSBhY2NlbnRzIHdoZW4gbWF0Y2hpbmcgaXRlbXNcbiAgZXhwb3J0IGxldCBpZ25vcmVBY2NlbnRzID0gdHJ1ZTtcblxuICAvLyBhbGwgdGhlIGlucHV0IGtleXdvcmRzIHNob3VsZCBiZSBtYXRjaGVkIGluIHRoZSBpdGVtIGtleXdvcmRzXG4gIGV4cG9ydCBsZXQgbWF0Y2hBbGxLZXl3b3JkcyA9IHRydWU7XG5cbiAgLy8gc29ydHMgdGhlIGl0ZW1zIGJ5IHRoZSBudW1iZXIgb2YgbWF0Y2hpbmsga2V5d29yZHNcbiAgZXhwb3J0IGxldCBzb3J0QnlNYXRjaGVkS2V5d29yZHMgPSBmYWxzZTtcblxuICAvLyBhbGxvdyB1c2VycyB0byB1c2UgYSBjdXN0b20gaXRlbSBmaWx0ZXIgZnVuY3Rpb25cbiAgZXhwb3J0IGxldCBpdGVtRmlsdGVyRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgLy8gYWxsb3cgdXNlcnMgdG8gdXNlIGEgY3VzdG9tIGl0ZW0gc29ydCBmdW5jdGlvblxuICBleHBvcnQgbGV0IGl0ZW1Tb3J0RnVuY3Rpb24gPSB1bmRlZmluZWQ7XG5cbiAgLy8gZG8gbm90IGFsbG93IHJlLXNlbGVjdGlvbiBhZnRlciBpbml0aWFsIHNlbGVjdGlvblxuICBleHBvcnQgbGV0IGxvY2sgPSBmYWxzZTtcblxuICAvLyBkZWxheSB0byB3YWl0IGFmdGVyIGEga2V5cHJlc3MgdG8gc2VhcmNoIGZvciBuZXcgaXRlbXNcbiAgZXhwb3J0IGxldCBkZWxheSA9IDA7XG5cbiAgLy8gdHJ1ZSB0byBwZXJmb3JtIGxvY2FsIGZpbHRlcmluZyBvZiBpdGVtcywgZXZlbiBpZiBzZWFyY2hGdW5jdGlvbiBpcyBwcm92aWRlZFxuICBleHBvcnQgbGV0IGxvY2FsRmlsdGVyaW5nID0gdHJ1ZTtcblxuICAvLyBVSSBwcm9wZXJ0aWVzXG5cbiAgLy8gb3B0aW9uIHRvIGhpZGUgdGhlIGRyb3Bkb3duIGFycm93XG4gIGV4cG9ydCBsZXQgaGlkZUFycm93ID0gZmFsc2U7XG5cbiAgLy8gb3B0aW9uIHRvIHNob3cgY2xlYXIgc2VsZWN0aW9uIGJ1dHRvblxuICBleHBvcnQgbGV0IHNob3dDbGVhciA9IGZhbHNlO1xuXG4gIC8vIG9wdGlvbiB0byBzaG93IGxvYWRpbmcgaW5kaWNhdG9yIHdoZW4gdGhlIGFzeW5jIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkXG4gIGV4cG9ydCBsZXQgc2hvd0xvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAvLyB0ZXh0IGRpc3BsYXllZCB3aGVuIG5vIGl0ZW1zIG1hdGNoIHRoZSBpbnB1dCB0ZXh0XG4gIGV4cG9ydCBsZXQgbm9SZXN1bHRzVGV4dCA9IFwiTm8gcmVzdWx0cyBmb3VuZFwiO1xuXG4gIC8vIHRleHQgZGlzcGxheWVkIHdoZW4gYXN5bmMgZGF0YSBpcyBiZWluZyBsb2FkZWRcbiAgZXhwb3J0IGxldCBsb2FkaW5nVGV4dCA9IFwiTG9hZGluZyByZXN1bHRzLi4uXCI7XG5cbiAgLy8gdGV4dCBkaXNwbGF5ZWQgd2hlbiBhc3luYyBkYXRhIGlzIGJlaW5nIGxvYWRlZFxuICBleHBvcnQgbGV0IGNyZWF0ZVRleHQgPSBcIk5vdCBmb3VuZCwgYWRkIGFueXdheT9cIjtcblxuICAvLyB0aGUgdGV4dCBkaXNwbGF5ZWQgd2hlbiBubyBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgZXhwb3J0IGxldCBwbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcblxuICAvLyBhcHBseSBhIGNsYXNzTmFtZSB0byB0aGUgY29udHJvbFxuICBleHBvcnQgbGV0IGNsYXNzTmFtZSA9IHVuZGVmaW5lZDtcblxuICAvLyBIVE1MIGlucHV0IFVJIHByb3BlcnRpZXNcbiAgLy8gYXBwbHkgYSBjbGFzc05hbWUgdG8gdGhlIGlucHV0IGNvbnRyb2xcbiAgZXhwb3J0IGxldCBpbnB1dENsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgLy8gYXBwbHkgYSBpZCB0byB0aGUgaW5wdXQgY29udHJvbFxuICBleHBvcnQgbGV0IGlucHV0SWQgPSB1bmRlZmluZWQ7XG4gIC8vIGdlbmVyYXRlIGFuIEhUTUwgaW5wdXQgd2l0aCB0aGlzIG5hbWVcbiAgZXhwb3J0IGxldCBuYW1lID0gdW5kZWZpbmVkO1xuICAvLyBnZW5lcmF0ZSBhIDxzZWxlY3Q+IHRhZyB0aGF0IGhvbGRzIHRoZSB2YWx1ZVxuICBleHBvcnQgbGV0IHNlbGVjdE5hbWUgPSB1bmRlZmluZWQ7XG4gIC8vIGFwcGx5IGEgaWQgdG8gdGhlIDxzZWxlY3Q+XG4gIGV4cG9ydCBsZXQgc2VsZWN0SWQgPSB1bmRlZmluZWQ7XG4gIC8vIGFkZCB0aGUgdGl0bGUgdG8gdGhlIEhUTUwgaW5wdXRcbiAgZXhwb3J0IGxldCB0aXRsZSA9IHVuZGVmaW5lZDtcbiAgLy8gZW5hYmxlIHRoZSBodG1sNSBhdXRvY29tcGxldGlvbiB0byB0aGUgSFRNTCBpbnB1dFxuICBleHBvcnQgbGV0IGh0bWw1YXV0b2NvbXBsZXRlID0gdW5kZWZpbmVkO1xuICAvLyBtYWtlIHRoZSBpbnB1dCByZWFkb25seVxuICBleHBvcnQgbGV0IHJlYWRvbmx5ID0gdW5kZWZpbmVkO1xuICAvLyBhcHBseSBhIGNsYXNzTmFtZSB0byB0aGUgZHJvcGRvd24gZGl2XG4gIGV4cG9ydCBsZXQgZHJvcGRvd25DbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gIC8vIGFkZHMgdGhlIGRpc2FibGVkIHRhZyB0byB0aGUgSFRNTCBpbnB1dFxuICBleHBvcnQgbGV0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgZXhwb3J0IGxldCBkZWJ1ZyA9IGZhbHNlO1xuXG4gIC8vIC0tLSBQdWJsaWMgU3RhdGUgLS0tLVxuXG4gIC8vIHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgZXhwb3J0IGxldCBzZWxlY3RlZEl0ZW0gPSBtdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IHZhbHVlID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGhpZ2hsaWdodGVkSXRlbSA9IHVuZGVmaW5lZDtcblxuICAvLyAtLS0gSW50ZXJuYWwgU3RhdGUgLS0tLVxuICBjb25zdCB1bmlxdWVJZCA9IFwic2F1dG9jb21wbGV0ZS1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIC8vIEhUTUwgZWxlbWVudHNcbiAgbGV0IGlucHV0O1xuICBsZXQgbGlzdDtcblxuICAvLyBVSSBzdGF0ZVxuICBsZXQgb3BlbmVkID0gZmFsc2U7XG4gIGxldCBsb2FkaW5nID0gZmFsc2U7XG4gIGxldCBoaWdobGlnaHRJbmRleCA9IC0xO1xuICBleHBvcnQgbGV0IHRleHQ7XG4gIGxldCBmaWx0ZXJlZFRleHRMZW5ndGggPSAwO1xuXG4gIC8vIHZpZXcgbW9kZWxcbiAgbGV0IGZpbHRlcmVkTGlzdEl0ZW1zO1xuICBsZXQgbGlzdEl0ZW1zID0gW107XG5cbiAgLy8gcmVxdWVzdHMvcmVzcG9uc2VzIGNvdW50ZXJzXG4gIGxldCBsYXN0UmVxdWVzdElkID0gMDtcbiAgbGV0IGxhc3RSZXNwb25zZUlkID0gMDtcblxuICAvLyBvdGhlciBzdGF0ZVxuICBsZXQgaW5wdXREZWxheVRpbWVvdXQ7XG5cbiAgLy8gLS0tIEZ1bmN0aW9ucyAtLS1cbiAgZnVuY3Rpb24gc2FmZVN0cmluZ0Z1bmN0aW9uKHRoZUZ1bmN0aW9uLCBhcmd1bWVudCkge1xuICAgIGlmICh0eXBlb2YgdGhlRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJOb3QgYSBmdW5jdGlvbjogXCIgKyB0aGVGdW5jdGlvbiArIFwiLCBhcmd1bWVudDogXCIgKyBhcmd1bWVudFxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG9yaWdpbmFsUmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbFJlc3VsdCA9IHRoZUZ1bmN0aW9uKGFyZ3VtZW50KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIkVycm9yIGV4ZWN1dGluZyBBdXRvY29tcGxldGUgZnVuY3Rpb24gb24gdmFsdWU6IFwiICtcbiAgICAgICAgICBhcmd1bWVudCArXG4gICAgICAgICAgXCIgZnVuY3Rpb246IFwiICtcbiAgICAgICAgICB0aGVGdW5jdGlvblxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IG9yaWdpbmFsUmVzdWx0O1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAgIHJlc3VsdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhZmVMYWJlbEZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsRnVuY3Rpb246IFwiICsgbGFiZWxGdW5jdGlvbik7XG4gICAgLy8gY29uc29sZS5sb2coXCJzYWZlTGFiZWxGdW5jdGlvbiwgaXRlbTogXCIgKyBpdGVtKTtcbiAgICByZXR1cm4gc2FmZVN0cmluZ0Z1bmN0aW9uKGxhYmVsRnVuY3Rpb24sIGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FmZUtleXdvcmRzRnVuY3Rpb24oaXRlbSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2FmZUtleXdvcmRzRnVuY3Rpb25cIik7XG4gICAgY29uc3Qga2V5d29yZHMgPSBzYWZlU3RyaW5nRnVuY3Rpb24oa2V5d29yZHNGdW5jdGlvbiwgaXRlbSk7XG4gICAgbGV0IHJlc3VsdCA9IHNhZmVTdHJpbmdGdW5jdGlvbihrZXl3b3Jkc0NsZWFuRnVuY3Rpb24sIGtleXdvcmRzKTtcbiAgICByZXN1bHQgPSByZXN1bHQudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIHJlc3VsdCA9IHJlbW92ZUFjY2VudHMocmVzdWx0KTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIkV4dHJhY3RlZCBrZXl3b3JkczogJ1wiICtcbiAgICAgICAgICByZXN1bHQgK1xuICAgICAgICAgIFwiJyBmcm9tIGl0ZW06IFwiICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVMaXN0SXRlbXMoKSB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICB0aW1lcklkID0gYEF1dG9jb21wbGV0ZSBwcmVwYXJlIGxpc3QgJHtcbiAgICAgICAgaW5wdXRJZCA/IGAoaWQ6ICR7aW5wdXRJZH0pYCA6IFwiXCJcbiAgICAgIH1gO1xuICAgICAgY29uc29sZS50aW1lKHRpbWVySWQpO1xuICAgICAgY29uc29sZS5sb2coXCJQcmVwYXJlIGl0ZW1zIHRvIHNlYXJjaFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXRlbXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiQXV0b2NvbXBsZXRlIGl0ZW1zIC8gc2VhcmNoIGZ1bmN0aW9uIGRpZCBub3QgcmV0dXJuIGFycmF5IGJ1dFwiLFxuICAgICAgICBpdGVtc1xuICAgICAgKTtcbiAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gaXRlbXMgPyBpdGVtcy5sZW5ndGggOiAwO1xuICAgIGxpc3RJdGVtcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBnZXRMaXN0SXRlbShpdGVtKTtcbiAgICAgICAgaWYgKGxpc3RJdGVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5kZWZpbmVkIGl0ZW0gZm9yOiBcIiwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEl0ZW1zW2ldID0gbGlzdEl0ZW07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RJdGVtcy5sZW5ndGggKyBcIiBpdGVtcyB0byBzZWFyY2hcIik7XG4gICAgICBjb25zb2xlLnRpbWVFbmQodGltZXJJZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBrZXl3b3JkcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgaXRlbVxuICAgICAga2V5d29yZHM6IHNhZmVLZXl3b3Jkc0Z1bmN0aW9uKGl0ZW0pLFxuICAgICAgLy8gaXRlbSBsYWJlbFxuICAgICAgbGFiZWw6IHNhZmVMYWJlbEZ1bmN0aW9uKGl0ZW0pLFxuICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaWFsIGl0ZW1cbiAgICAgIGl0ZW06IGl0ZW1cbiAgICB9O1xuICB9XG5cbiAgLy8gLS0gUmVhY3Rpdml0eSAtLVxuICAkOiBpdGVtcywgcHJlcGFyZUxpc3RJdGVtcygpO1xuXG4gIGZ1bmN0aW9uIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICB2YWx1ZSA9IHZhbHVlRnVuY3Rpb24oc2VsZWN0ZWRJdGVtKTtcbiAgICB0ZXh0ID0gIW11bHRpcGxlID8gc2FmZUxhYmVsRnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSA6IFwiXCI7XG5cbiAgICBmaWx0ZXJlZExpc3RJdGVtcyA9IGxpc3RJdGVtcztcbiAgICBvbkNoYW5nZShzZWxlY3RlZEl0ZW0pO1xuICB9XG5cbiAgJDogc2VsZWN0ZWRJdGVtLCBvblNlbGVjdGVkSXRlbUNoYW5nZWQoKTtcblxuICAkOiBoaWdobGlnaHRlZEl0ZW0gPVxuICAgIGZpbHRlcmVkTGlzdEl0ZW1zICYmXG4gICAgaGlnaGxpZ2h0SW5kZXggJiZcbiAgICBoaWdobGlnaHRJbmRleCA+PSAwICYmXG4gICAgaGlnaGxpZ2h0SW5kZXggPCBmaWx0ZXJlZExpc3RJdGVtcy5sZW5ndGhcbiAgICAgID8gZmlsdGVyZWRMaXN0SXRlbXNbaGlnaGxpZ2h0SW5kZXhdLml0ZW1cbiAgICAgIDogbnVsbDtcblxuICAkOiBzaG93TGlzdCA9XG4gICAgb3BlbmVkICYmICgoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkgfHwgZmlsdGVyZWRUZXh0TGVuZ3RoID4gMCk7XG5cbiAgJDogY2xlYXJhYmxlID0gc2hvd0NsZWFyIHx8ICgobG9jayB8fCBtdWx0aXBsZSkgJiYgc2VsZWN0ZWRJdGVtKTtcblxuICBmdW5jdGlvbiBwcmVwYXJlVXNlckVudGVyZWRUZXh0KHVzZXJFbnRlcmVkVGV4dCkge1xuICAgIGlmICh1c2VyRW50ZXJlZFRleHQgPT09IHVuZGVmaW5lZCB8fCB1c2VyRW50ZXJlZFRleHQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRGaWx0ZXJlZCA9IHVzZXJFbnRlcmVkVGV4dFxuICAgICAgLnJlcGxhY2UoL1smL1xcXFwjLCsoKSR+JS4nXCI6Kj88Pnt9XS9nLCBcIiBcIilcbiAgICAgIC50cmltKCk7XG5cbiAgICBmaWx0ZXJlZFRleHRMZW5ndGggPSB0ZXh0RmlsdGVyZWQubGVuZ3RoO1xuXG4gICAgaWYgKG1pbkNoYXJhY3RlcnNUb1NlYXJjaCA+IDEpIHtcbiAgICAgIGlmIChmaWx0ZXJlZFRleHRMZW5ndGggPCBtaW5DaGFyYWN0ZXJzVG9TZWFyY2gpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5Vc2VyRW50ZXJlZFRleHQgPSB0ZXh0Q2xlYW5GdW5jdGlvbih0ZXh0RmlsdGVyZWQpO1xuICAgIGNvbnN0IHRleHRGaWx0ZXJlZExvd2VyQ2FzZSA9IGNsZWFuVXNlckVudGVyZWRUZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJDaGFuZ2UgdXNlciBlbnRlcmVkIHRleHQgJ1wiICtcbiAgICAgICAgICB1c2VyRW50ZXJlZFRleHQgK1xuICAgICAgICAgIFwiJyBpbnRvICdcIiArXG4gICAgICAgICAgdGV4dEZpbHRlcmVkTG93ZXJDYXNlICtcbiAgICAgICAgICBcIidcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRGaWx0ZXJlZExvd2VyQ2FzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG51bWJlck9mTWF0Y2hlcyhsaXN0SXRlbSwgc2VhcmNoV29yZHMpIHtcbiAgICBpZiAoIWxpc3RJdGVtKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtS2V5d29yZHMgPSBsaXN0SXRlbS5rZXl3b3JkcztcblxuICAgIGxldCBtYXRjaGVzID0gMDtcbiAgICBzZWFyY2hXb3Jkcy5mb3JFYWNoKHNlYXJjaFdvcmQgPT4ge1xuICAgICAgaWYgKGl0ZW1LZXl3b3Jkcy5pbmNsdWRlcyhzZWFyY2hXb3JkKSkge1xuICAgICAgICBtYXRjaGVzKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIHRpbWVySWQgPSBgQXV0b2NvbXBsZXRlIHNlYXJjaCAke2lucHV0SWQgPyBgKGlkOiAke2lucHV0SWR9KWAgOiBcIlwifSlgO1xuICAgICAgY29uc29sZS50aW1lKHRpbWVySWQpO1xuICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hpbmcgdXNlciBlbnRlcmVkIHRleHQ6ICdcIiArIHRleHQgKyBcIidcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dEZpbHRlcmVkID0gcHJlcGFyZVVzZXJFbnRlcmVkVGV4dCh0ZXh0KTtcblxuICAgIGlmICh0ZXh0RmlsdGVyZWQgPT09IFwiXCIpIHtcbiAgICAgIGlmIChzZWFyY2hGdW5jdGlvbikge1xuICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcmVydW4gdGhlIHNlYXJjaFxuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZW50ZXJlZCB0ZXh0IGlzIGVtcHR5IGNsZWFyIGxpc3Qgb2YgaXRlbXNcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlcmVkTGlzdEl0ZW1zID0gbGlzdEl0ZW1zO1xuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiVXNlciBlbnRlcmVkIHRleHQgaXMgZW1wdHkgc2V0IHRoZSBsaXN0IG9mIGl0ZW1zIHRvIGFsbCBpdGVtc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvc2VJZk1pbkNoYXJzVG9TZWFyY2hSZWFjaGVkKCk7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKHRpbWVySWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc2VhcmNoRnVuY3Rpb24pIHtcbiAgICAgIHByb2Nlc3NMaXN0SXRlbXModGV4dEZpbHRlcmVkKTtcbiAgICB9XG5cbiAgICAvLyBleHRlcm5hbCBzZWFyY2ggd2hpY2ggcHJvdmlkZXMgaXRlbXNcbiAgICBlbHNlIHtcbiAgICAgIGxhc3RSZXF1ZXN0SWQgPSBsYXN0UmVxdWVzdElkICsgMTtcbiAgICAgIGNvbnN0IGN1cnJlbnRSZXF1ZXN0SWQgPSBsYXN0UmVxdWVzdElkO1xuICAgICAgbG9hZGluZyA9IHRydWU7XG5cbiAgICAgIC8vIHNlYXJjaEZ1bmN0aW9uIGlzIGEgZ2VuZXJhdG9yXG4gICAgICBpZiAoc2VhcmNoRnVuY3Rpb24uY29uc3RydWN0b3IubmFtZSA9PT0gXCJBc3luY0dlbmVyYXRvckZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzZWFyY2hGdW5jdGlvbih0ZXh0RmlsdGVyZWQpKSB7XG4gICAgICAgICAgLy8gYSBjaHVuayBvZiBhbiBvbGQgcmVzcG9uc2U6IHRocm93IGl0IGF3YXlcbiAgICAgICAgICBpZiAoY3VycmVudFJlcXVlc3RJZCA8IGxhc3RSZXNwb25zZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYSBjaHVuayBmb3IgYSBuZXcgcmVzcG9uc2U6IHJlc2V0IHRoZSBpdGVtIGxpc3RcbiAgICAgICAgICBpZiAoY3VycmVudFJlcXVlc3RJZCA+IGxhc3RSZXNwb25zZUlkKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhc3RSZXNwb25zZUlkID0gY3VycmVudFJlcXVlc3RJZDtcbiAgICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgLi4uY2h1bmtdO1xuICAgICAgICAgIHByb2Nlc3NMaXN0SXRlbXModGV4dEZpbHRlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZXJlIHdhcyBub3RoaW5nIGluIHRoZSBjaHVua1xuICAgICAgICBpZiAobGFzdFJlc3BvbnNlSWQgPCBjdXJyZW50UmVxdWVzdElkKSB7XG4gICAgICAgICAgbGFzdFJlc3BvbnNlSWQgPSBjdXJyZW50UmVxdWVzdElkO1xuICAgICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgICAgcHJvY2Vzc0xpc3RJdGVtcyh0ZXh0RmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNlYXJjaEZ1bmN0aW9uIGlzIGEgcmVndWxhciBmdW5jdGlvblxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzZWFyY2hGdW5jdGlvbih0ZXh0RmlsdGVyZWQpO1xuXG4gICAgICAgIC8vIElmIGEgcmVzcG9uc2UgdG8gYSBuZXdlciByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkXG4gICAgICAgIC8vIHdoaWxlIHJlc3BvbnNlcyB0byB0aGlzIHJlcXVlc3Qgd2VyZSBiZWluZyBsb2FkZWQsXG4gICAgICAgIC8vIHRoZW4gd2UgY2FuIGp1c3QgdGhyb3cgYXdheSB0aGlzIG91dGRhdGVkIHJlc3VsdHMuXG4gICAgICAgIGlmIChjdXJyZW50UmVxdWVzdElkIDwgbGFzdFJlc3BvbnNlSWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0UmVzcG9uc2VJZCA9IGN1cnJlbnRSZXF1ZXN0SWQ7XG4gICAgICAgIGl0ZW1zID0gcmVzdWx0O1xuICAgICAgICBwcm9jZXNzTGlzdEl0ZW1zKHRleHRGaWx0ZXJlZCk7XG4gICAgICB9XG5cbiAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUudGltZUVuZCh0aW1lcklkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIGZvdW5kIFwiICsgZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoICsgXCIgaXRlbXNcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdEl0ZW1GaWx0ZXJGdW5jdGlvbihsaXN0SXRlbSwgc2VhcmNoV29yZHMpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IG51bWJlck9mTWF0Y2hlcyhsaXN0SXRlbSwgc2VhcmNoV29yZHMpO1xuICAgIGlmIChtYXRjaEFsbEtleXdvcmRzKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyA+PSBzZWFyY2hXb3Jkcy5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXRjaGVzID4gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0SXRlbVNvcnRGdW5jdGlvbihvYmoxLCBvYmoyLCBzZWFyY2hXb3Jkcykge1xuICAgIHJldHVybiAoXG4gICAgICBudW1iZXJPZk1hdGNoZXMob2JqMiwgc2VhcmNoV29yZHMpIC0gbnVtYmVyT2ZNYXRjaGVzKG9iajEsIHNlYXJjaFdvcmRzKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTGlzdEl0ZW1zKHRleHRGaWx0ZXJlZCkge1xuICAgIC8vIGNsZWFucywgZmlsdGVycywgb3JkZXJzLCBhbmQgaGlnaGxpZ2h0cyB0aGUgbGlzdCBpdGVtc1xuICAgIHByZXBhcmVMaXN0SXRlbXMoKTtcblxuICAgIGNvbnN0IHRleHRGaWx0ZXJlZFdpdGhvdXRBY2NlbnRzID0gaWdub3JlQWNjZW50c1xuICAgICAgPyByZW1vdmVBY2NlbnRzKHRleHRGaWx0ZXJlZClcbiAgICAgIDogdGV4dEZpbHRlcmVkO1xuICAgIGNvbnN0IHNlYXJjaFdvcmRzID0gdGV4dEZpbHRlcmVkV2l0aG91dEFjY2VudHMuc3BsaXQoL1xccysvZyk7XG5cbiAgICAvLyBsb2NhbCBzZWFyY2hcbiAgICBsZXQgdGVtcGZpbHRlcmVkTGlzdEl0ZW1zO1xuICAgIGlmIChsb2NhbEZpbHRlcmluZykge1xuICAgICAgaWYgKGl0ZW1GaWx0ZXJGdW5jdGlvbikge1xuICAgICAgICB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMgPSBsaXN0SXRlbXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICBpdGVtRmlsdGVyRnVuY3Rpb24oaXRlbS5pdGVtLCBzZWFyY2hXb3JkcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBmaWx0ZXJlZExpc3RJdGVtcyA9IGxpc3RJdGVtcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgIGRlZmF1bHRJdGVtRmlsdGVyRnVuY3Rpb24oaXRlbSwgc2VhcmNoV29yZHMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtU29ydEZ1bmN0aW9uKSB7XG4gICAgICAgIHRlbXBmaWx0ZXJlZExpc3RJdGVtcyA9IHRlbXBmaWx0ZXJlZExpc3RJdGVtcy5zb3J0KChpdGVtMSwgaXRlbTIpID0+XG4gICAgICAgICAgaXRlbVNvcnRGdW5jdGlvbihpdGVtMS5pdGVtLCBpdGVtMi5pdGVtLCBzZWFyY2hXb3JkcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzb3J0QnlNYXRjaGVkS2V5d29yZHMpIHtcbiAgICAgICAgICB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMgPSB0ZW1wZmlsdGVyZWRMaXN0SXRlbXMuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PlxuICAgICAgICAgICAgZGVmYXVsdEl0ZW1Tb3J0RnVuY3Rpb24oaXRlbTEsIGl0ZW0yLCBzZWFyY2hXb3JkcylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBmaWx0ZXJlZExpc3RJdGVtcyA9IGxpc3RJdGVtcztcbiAgICB9XG5cbiAgICBjb25zdCBobGZpbHRlciA9IGhpZ2hsaWdodEZpbHRlcihzZWFyY2hXb3JkcywgXCJsYWJlbFwiKTtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3RJdGVtc0hpZ2hsaWdodGVkID0gdGVtcGZpbHRlcmVkTGlzdEl0ZW1zLm1hcChobGZpbHRlcik7XG5cbiAgICBmaWx0ZXJlZExpc3RJdGVtcyA9IGZpbHRlcmVkTGlzdEl0ZW1zSGlnaGxpZ2h0ZWQ7XG4gICAgY2xvc2VJZk1pbkNoYXJzVG9TZWFyY2hSZWFjaGVkKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAkOiB0ZXh0LCBzZWFyY2goKTtcblxuICBmdW5jdGlvbiBzZWxlY3RMaXN0SXRlbShsaXN0SXRlbSkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RMaXN0SXRlbVwiLCBsaXN0SXRlbSk7XG4gICAgfVxuICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgbGlzdEl0ZW0gJiYgY3JlYXRlKSB7XG4gICAgICAvLyBhbGxvdyB1bmRlZmluZWQgaXRlbXMgaWYgY3JlYXRlIGlzIGVuYWJsZWRcbiAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtID0gb25DcmVhdGUodGV4dCk7XG4gICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGNyZWF0ZWRJdGVtKSB7XG4gICAgICAgIHByZXBhcmVMaXN0SXRlbXMoKTtcbiAgICAgICAgZmlsdGVyZWRMaXN0SXRlbXMgPSBsaXN0SXRlbXM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmluZEl0ZW1JbmRleChjcmVhdGVkSXRlbSwgZmlsdGVyZWRMaXN0SXRlbXMpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGhpZ2hsaWdodEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgbGlzdEl0ZW0gPSBmaWx0ZXJlZExpc3RJdGVtc1toaWdobGlnaHRJbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGxpc3RJdGVtKSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGxpc3RJdGVtIGlzIHVuZGVmaW5lZC4gQ2FuIG5vdCBzZWxlY3QuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRJdGVtID0gbGlzdEl0ZW0uaXRlbTtcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKHNlbGVjdGVkSXRlbSwgbmV3U2VsZWN0ZWRJdGVtKSkge1xuICAgICAgLy8gc2ltcGxlIHNlbGVjdGlvblxuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7IC8vIHRyaWdnZXJzIGNoYW5nZSBldmVuIGlmIHRoZSB0aGUgc2FtZSBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IG5ld1NlbGVjdGVkSXRlbTtcbiAgICAgIH1cbiAgICAgIC8vIGZpcnN0IHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBvbmVzXG4gICAgICBlbHNlIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IFtuZXdTZWxlY3RlZEl0ZW1dO1xuICAgICAgfVxuICAgICAgLy8gc2VsZWN0aW5nIHNvbWV0aGluZyBhbHJlYWR5IHNlbGVjdGVkID0+IHVuc2VsZWN0IGl0XG4gICAgICBlbHNlIGlmIChzZWxlY3RlZEl0ZW0uaW5jbHVkZXMobmV3U2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW0uZmlsdGVyKGkgPT4gaSAhPT0gbmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZHMgdGhlIGVsZW1lbnQgdG8gdGhlIHNlbGVjdGlvblxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IFsuLi5zZWxlY3RlZEl0ZW0sIG5ld1NlbGVjdGVkSXRlbV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0SXRlbSgpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0SXRlbVwiLCBoaWdobGlnaHRJbmRleCk7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RJdGVtID0gZmlsdGVyZWRMaXN0SXRlbXNbaGlnaGxpZ2h0SW5kZXhdO1xuICAgIGlmIChzZWxlY3RMaXN0SXRlbShsaXN0SXRlbSkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cCgpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidXBcIik7XG4gICAgfVxuXG4gICAgb3BlbigpO1xuICAgIGlmIChoaWdobGlnaHRJbmRleCA+IDApIHtcbiAgICAgIGhpZ2hsaWdodEluZGV4LS07XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpO1xuICAgIH1cblxuICAgIG9wZW4oKTtcbiAgICBpZiAoaGlnaGxpZ2h0SW5kZXggPCBmaWx0ZXJlZExpc3RJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBoaWdobGlnaHRJbmRleCsrO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJoaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBcIi5zZWxlY3RlZFwiO1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJTZWFjaGluZyBET00gZWxlbWVudDogXCIgKyBxdWVyeSArIFwiIGluIFwiICsgbGlzdCk7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gbGlzdCAmJiBsaXN0LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIGlmIChlbCkge1xuICAgICAgaWYgKHR5cGVvZiBlbC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTY3JvbGxpbmcgc2VsZWN0ZWQgaXRlbSBpbnRvIHZpZXdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJDb3VsZCBub3Qgc2Nyb2xsIHNlbGVjdGVkIGl0ZW0gaW50byB2aWV3LCBzY3JvbGxJbnRvVmlld0lmTmVlZGVkIG5vdCBzdXBwb3J0ZWRcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlNlbGVjdGVkIGl0ZW0gbm90IGZvdW5kIHRvIHNjcm9sbCBpbnRvIHZpZXdcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25MaXN0SXRlbUNsaWNrKGxpc3RJdGVtKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTGlzdEl0ZW1DbGlja1wiKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0TGlzdEl0ZW0obGlzdEl0ZW0pKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrKGUpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25Eb2N1bWVudENsaWNrOiBcIiArIEpTT04uc3RyaW5naWZ5KGUuY29tcG9zZWRQYXRoKCkpKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZVxuICAgICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgICAgLnNvbWUocGF0aCA9PiBwYXRoLmNsYXNzTGlzdCAmJiBwYXRoLmNsYXNzTGlzdC5jb250YWlucyh1bmlxdWVJZCkpXG4gICAgKSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRvY3VtZW50Q2xpY2sgaW5zaWRlXCIpO1xuICAgICAgfVxuICAgICAgLy8gcmVzZXRMaXN0VG9BbGxJdGVtc0FuZE9wZW4oKTtcbiAgICAgIGhpZ2hsaWdodCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRvY3VtZW50Q2xpY2sgb3V0c2lkZVwiKTtcbiAgICAgIH1cbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25LZXlEb3duXCIpO1xuICAgIH1cblxuICAgIGxldCBrZXkgPSBlLmtleTtcbiAgICBpZiAoa2V5ID09PSBcIlRhYlwiICYmIGUuc2hpZnRLZXkpIGtleSA9IFwiU2hpZnRUYWJcIjtcbiAgICBjb25zdCBmbm1hcCA9IHtcbiAgICAgIFRhYjogb3BlbmVkID8gZG93bi5iaW5kKHRoaXMpIDogbnVsbCxcbiAgICAgIFNoaWZ0VGFiOiBvcGVuZWQgPyB1cC5iaW5kKHRoaXMpIDogbnVsbCxcbiAgICAgIEFycm93RG93bjogZG93bi5iaW5kKHRoaXMpLFxuICAgICAgQXJyb3dVcDogdXAuYmluZCh0aGlzKSxcbiAgICAgIEVzY2FwZTogb25Fc2MuYmluZCh0aGlzKSxcbiAgICAgIEJhY2tzcGFjZTpcbiAgICAgICAgbXVsdGlwbGUgJiYgc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5sZW5ndGggJiYgIXRleHRcbiAgICAgICAgICA/IG9uQmFja3NwYWNlLmJpbmQodGhpcylcbiAgICAgICAgICA6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IGZuID0gZm5tYXBba2V5XTtcbiAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGZuKGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5UHJlc3MoZSkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvbktleVByZXNzXCIpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIG9wZW5lZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25FbnRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW50ZXIoKSB7XG4gICAgc2VsZWN0SXRlbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25JbnB1dChlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uSW5wdXRcIik7XG4gICAgfVxuXG4gICAgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChpbnB1dERlbGF5VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlucHV0RGVsYXlUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGlucHV0RGVsYXlUaW1lb3V0ID0gc2V0VGltZW91dChwcm9jZXNzSW5wdXQsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc0lucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5zZWxlY3RJdGVtKHRhZykge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJ1bnNlbGVjdEl0ZW1cIiwgdGFnKTtcbiAgICB9XG4gICAgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtLmZpbHRlcihpID0+IGkgIT09IHRhZyk7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NJbnB1dCgpIHtcbiAgICBpZiAoc2VhcmNoKCkpIHtcbiAgICAgIGhpZ2hsaWdodEluZGV4ID0gMDtcbiAgICAgIG9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbklucHV0Q2xpY2soKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uSW5wdXRDbGlja1wiKTtcbiAgICB9XG4gICAgcmVzZXRMaXN0VG9BbGxJdGVtc0FuZE9wZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRXNjKGUpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25Fc2NcIik7XG4gICAgfVxuXG4gICAgLy9pZiAodGV4dCkgcmV0dXJuIGNsZWFyKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJhY2tzcGFjZShlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uQmFja3NwYWNlXCIpO1xuICAgIH1cblxuICAgIHVuc2VsZWN0SXRlbShzZWxlY3RlZEl0ZW1bc2VsZWN0ZWRJdGVtLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRm9jdXNJbnRlcm5hbCgpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25Gb2N1c1wiKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCk7XG5cbiAgICByZXNldExpc3RUb0FsbEl0ZW1zQW5kT3BlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVySW50ZXJuYWwoKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uQmx1clwiKTtcbiAgICB9XG5cbiAgICBvbkJsdXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0TGlzdFRvQWxsSXRlbXNBbmRPcGVuKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJyZXNldExpc3RUb0FsbEl0ZW1zQW5kT3BlblwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGZpbHRlcmVkTGlzdEl0ZW1zID0gbGlzdEl0ZW1zO1xuICAgIH1cblxuICAgIC8vIFdoZW4gYW4gYXN5bmMgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLCB0aGUgaXRlbSBsaXN0XG4gICAgLy8gbXVzdCBiZSBsb2FkZWQgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZC5cbiAgICBlbHNlIGlmICghbGlzdEl0ZW1zLmxlbmd0aCAmJiBzZWxlY3RlZEl0ZW0gJiYgc2VhcmNoRnVuY3Rpb24pIHtcbiAgICAgIHNlYXJjaCgpO1xuICAgIH1cblxuICAgIG9wZW4oKTtcblxuICAgIC8vIGZpbmQgc2VsZWN0ZWQgaXRlbVxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIlNlYXJjaGluZyBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbTogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEl0ZW0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZEl0ZW1JbmRleChzZWxlY3RlZEl0ZW0sIGZpbHRlcmVkTGlzdEl0ZW1zKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGhpZ2hsaWdodEluZGV4ID0gaW5kZXg7XG4gICAgICAgIGhpZ2hsaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRJdGVtSW5kZXgoaXRlbSwgaXRlbXMpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmluZGluZyBpbmRleCBmb3IgaXRlbVwiLCBpdGVtKTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgbGlzdEl0ZW0pIHtcbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGxpc3RJdGVtICR7aX0gaXMgdW5kZWZpbmVkLiBTa2lwcGluZy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gXCIgKyBpICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtID09IGxpc3RJdGVtLml0ZW0pIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgaW5kZXggZm9yIGl0ZW06IFwiICsgaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm90IGZvdW5kIGluZGV4IGZvciBpdGVtOiBcIiArIGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRoZSBzZWFyY2ggdGV4dCBoYXMgbW9yZSB0aGFuIHRoZSBtaW4gY2hhcnMgcmVxdWlyZWRcbiAgICBpZiAoaXNNaW5DaGFyc1RvU2VhcmNoUmVhY2hlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJjbG9zZVwiKTtcbiAgICB9XG4gICAgb3BlbmVkID0gZmFsc2U7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0ZXh0ICYmIHNlbGVjdEZpcnN0SWZFbXB0eSkge1xuICAgICAgaGlnaGxpZ2h0SW5kZXggPSAwO1xuICAgICAgc2VsZWN0SXRlbSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTWluQ2hhcnNUb1NlYXJjaFJlYWNoZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG1pbkNoYXJhY3RlcnNUb1NlYXJjaCA+IDEgJiYgZmlsdGVyZWRUZXh0TGVuZ3RoIDwgbWluQ2hhcmFjdGVyc1RvU2VhcmNoXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlSWZNaW5DaGFyc1RvU2VhcmNoUmVhY2hlZCgpIHtcbiAgICBpZiAoaXNNaW5DaGFyc1RvU2VhcmNoUmVhY2hlZCgpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhclwiKTtcbiAgICB9XG5cbiAgICB0ZXh0ID0gXCJcIjtcbiAgICBzZWxlY3RlZEl0ZW0gPSBtdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHRGaWx0ZXIoa2V5d29yZHMsIGZpZWxkKSB7XG4gICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgbGV0IGxhYmVsID0gaXRlbVtmaWVsZF07XG5cbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBPYmplY3QuYXNzaWduKHsgaGlnaGxpZ2h0ZWQ6IHVuZGVmaW5lZCB9LCBpdGVtKTtcbiAgICAgIG5ld0l0ZW0uaGlnaGxpZ2h0ZWQgPSBsYWJlbDtcblxuICAgICAgY29uc3QgbGFiZWxMb3dlcmNhc2UgPSBsYWJlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgbGFiZWxMb3dlcmNhc2VOb0FjID0gaWdub3JlQWNjZW50c1xuICAgICAgICA/IHJlbW92ZUFjY2VudHMobGFiZWxMb3dlcmNhc2UpXG4gICAgICAgIDogbGFiZWxMb3dlcmNhc2U7XG5cbiAgICAgIGlmIChrZXl3b3JkcyAmJiBrZXl3b3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXl3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBrZXl3b3JkID0ga2V5d29yZHNbaV07XG4gICAgICAgICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgICAgICAgIGtleXdvcmQgPSByZW1vdmVBY2NlbnRzKGtleXdvcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBrZXl3b3JkTGVuID0ga2V5d29yZC5sZW5ndGg7XG5cbiAgICAgICAgICBsZXQgcG9zMSA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgcG9zMSA9IGxhYmVsTG93ZXJjYXNlTm9BYy5pbmRleE9mKGtleXdvcmQsIHBvczEpO1xuICAgICAgICAgICAgaWYgKHBvczEgPj0gMCkge1xuICAgICAgICAgICAgICBsZXQgcG9zMiA9IHBvczEgKyBrZXl3b3JkTGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChbcG9zMSwgcG9zMl0pO1xuICAgICAgICAgICAgICBwb3MxID0gcG9zMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IHdoaWxlIChwb3MxICE9PSAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBrZXl3b3JkUGF0dGVybnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBwb3NpdGlvbnNbaV07XG4gICAgICAgICAgICBjb25zdCBwb3MxID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IHBvczIgPSBwYWlyWzFdO1xuXG4gICAgICAgICAgICBjb25zdCBrZXl3b3JkUGF0dGVybiA9IGxhYmVsTG93ZXJjYXNlLnN1YnN0cmluZyhwb3MxLCBwb3MyKTtcbiAgICAgICAgICAgIGtleXdvcmRQYXR0ZXJucy5hZGQoa2V5d29yZFBhdHRlcm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBrZXl3b3JkUGF0dGVybiBvZiBrZXl3b3JkUGF0dGVybnMpIHtcbiAgICAgICAgICAgIC8vIEZJWE1FIHBzdDogd29ya2Fyb25kIGZvciB3cm9uZyByZXBsYWNlbWVudCA8Yj4gdGFnc1xuICAgICAgICAgICAgaWYgKGtleXdvcmRQYXR0ZXJuID09PSBcImJcIikge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoXCIoXCIgKyBrZXl3b3JkUGF0dGVybiArIFwiKVwiLCBcImlnXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdIaWdobGlnaHRlZCA9IG5ld0l0ZW0uaGlnaGxpZ2h0ZWQucmVwbGFjZShcbiAgICAgICAgICAgICAgcmVnLFxuICAgICAgICAgICAgICBcIjxiPiQxPC9iPlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmV3SXRlbS5oaWdobGlnaHRlZCA9IG5ld0hpZ2hsaWdodGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWNjZW50cyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29uZmlybWVkKGxpc3RJdGVtKSB7XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtLmluY2x1ZGVzKGxpc3RJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxpc3RJdGVtID09IHNlbGVjdGVkSXRlbTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5hdXRvY29tcGxldGUge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBoZWlnaHQ6IDIuMjVlbTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGU6bm90KC5oaWRlLWFycm93KTpub3QoLmlzLWxvYWRpbmcpOjphZnRlciB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC42MjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMC40Mzc1ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB3aWR0aDogMC42MjVlbTtcbiAgICBib3JkZXItY29sb3I6ICMzMjczZGM7XG4gICAgcmlnaHQ6IDEuMTI1ZW07XG4gICAgei1pbmRleDogNDtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuc2hvdy1jbGVhcjpub3QoLmhpZGUtYXJyb3cpOjphZnRlciB7XG4gICAgcmlnaHQ6IDIuM2VtO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZSAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5hdXRvY29tcGxldGUtaW5wdXQge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZTpub3QoLmhpZGUtYXJyb3cpIC5hdXRvY29tcGxldGUtaW5wdXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLnNob3ctY2xlYXI6bm90KC5oaWRlLWFycm93KSAuYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjJlbTtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLmhpZGUtYXJyb3cuc2hvdy1jbGVhciAuYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogOTk7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRvcDogMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxNSAqICgxcmVtICsgMTBweCkgKyAxNXB4KTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWxpc3Q6ZW1wdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUtbGlzdC1pdGVtLmNvbmZpcm1lZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4OWZlZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNjllMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1uby1yZXN1bHRzIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1jcmVhdGUge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIC5hdXRvY29tcGxldGUtbGlzdC1pdGVtLWxvYWRpbmcge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS1saXN0LmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuc2hvdy1jbGVhciAuYXV0b2NvbXBsZXRlLWNsZWFyLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuMWVtO1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuNmVtO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlOm5vdCguc2hvdy1jbGVhcikgLmF1dG9jb21wbGV0ZS1jbGVhci1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYXV0b2NvbXBsZXRlIHNlbGVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hdXRvY29tcGxldGUuaXMtbXVsdGlwbGUgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS5pcy1tdWx0aXBsZSAudGFnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS5pcy1tdWx0aXBsZSAudGFnLmlzLWRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS5pcy1tdWx0aXBsZSAudGFncyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS5pcy1tdWx0aXBsZSAuYXV0b2NvbXBsZXRlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSA1MHB4O1xuICAgIG1pbi13aWR0aDogM2VtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXZcbiAgY2xhc3M9XCJ7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gIHtoaWRlQXJyb3cgfHwgIWl0ZW1zLmxlbmd0aCA/ICdoaWRlLWFycm93JyA6ICcnfVxuICB7bXVsdGlwbGUgPyAnaXMtbXVsdGlwbGUnIDogJyd9IGF1dG9jb21wbGV0ZSBzZWxlY3QgaXMtZnVsbHdpZHRoIHt1bmlxdWVJZH1cIlxuICBjbGFzczpzaG93LWNsZWFyPXtjbGVhcmFibGV9XG4gIGNsYXNzOmlzLWxvYWRpbmc9e3Nob3dMb2FkaW5nSW5kaWNhdG9yICYmIGxvYWRpbmd9PlxuICA8c2VsZWN0IG5hbWU9e3NlbGVjdE5hbWV9IGlkPXtzZWxlY3RJZH0ge211bHRpcGxlfT5cbiAgICB7I2lmICFtdWx0aXBsZSAmJiB2YWx1ZX1cbiAgICAgIDxvcHRpb24ge3ZhbHVlfSBzZWxlY3RlZD57dGV4dH08L29wdGlvbj5cbiAgICB7OmVsc2UgaWYgbXVsdGlwbGUgJiYgc2VsZWN0ZWRJdGVtfVxuICAgICAgeyNlYWNoIHNlbGVjdGVkSXRlbSBhcyBpfVxuICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZUZ1bmN0aW9uKGksIHRydWUpfSBzZWxlY3RlZD5cbiAgICAgICAgICB7c2FmZUxhYmVsRnVuY3Rpb24oaSl9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIHsvaWZ9XG4gIDwvc2VsZWN0PlxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgeyNpZiBtdWx0aXBsZSAmJiBzZWxlY3RlZEl0ZW19XG4gICAgICB7I2VhY2ggc2VsZWN0ZWRJdGVtIGFzIHRhZ0l0ZW19XG4gICAgICAgIDxzbG90XG4gICAgICAgICAgbmFtZT1cInRhZ1wiXG4gICAgICAgICAgbGFiZWw9e3NhZmVMYWJlbEZ1bmN0aW9uKHRhZ0l0ZW0pfVxuICAgICAgICAgIGl0ZW09e3RhZ0l0ZW19XG4gICAgICAgICAge3Vuc2VsZWN0SXRlbX0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWdcIj57c2FmZUxhYmVsRnVuY3Rpb24odGFnSXRlbSl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0YWcgaXMtZGVsZXRlXCJcbiAgICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHQ9e3Vuc2VsZWN0SXRlbSh0YWdJdGVtKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuICAgICAgey9lYWNofVxuICAgIHsvaWZ9XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBjbGFzcz1cIntpbnB1dENsYXNzTmFtZSA/IGlucHV0Q2xhc3NOYW1lIDogJyd9IGlucHV0IGF1dG9jb21wbGV0ZS1pbnB1dFwiXG4gICAgICBpZD17aW5wdXRJZCA/IGlucHV0SWQgOiAnJ31cbiAgICAgIGF1dG9jb21wbGV0ZT17aHRtbDVhdXRvY29tcGxldGUgPyAnb24nIDogJ3NvbWUtb3RoZXItdGV4dCd9XG4gICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICB7bmFtZX1cbiAgICAgIHtkaXNhYmxlZH1cbiAgICAgIHt0aXRsZX1cbiAgICAgIHJlYWRvbmx5PXtyZWFkb25seSB8fCAobG9jayAmJiBzZWxlY3RlZEl0ZW0pfVxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIGJpbmQ6dmFsdWU9e3RleHR9XG4gICAgICBvbjppbnB1dD17b25JbnB1dH1cbiAgICAgIG9uOmZvY3VzPXtvbkZvY3VzSW50ZXJuYWx9XG4gICAgICBvbjpibHVyPXtvbkJsdXJJbnRlcm5hbH1cbiAgICAgIG9uOmtleWRvd249e29uS2V5RG93bn1cbiAgICAgIG9uOmNsaWNrPXtvbklucHV0Q2xpY2t9XG4gICAgICBvbjprZXlwcmVzcz17b25LZXlQcmVzc30gLz5cbiAgICB7I2lmIGNsZWFyYWJsZX1cbiAgICAgIDxzcGFuIG9uOmNsaWNrPXtjbGVhcn0gY2xhc3M9XCJhdXRvY29tcGxldGUtY2xlYXItYnV0dG9uXCI+JiMxMDAwNjs8L3NwYW4+XG4gICAgey9pZn1cbiAgPC9kaXY+XG4gIDxkaXZcbiAgICBjbGFzcz1cIntkcm9wZG93bkNsYXNzTmFtZSA/IGRyb3Bkb3duQ2xhc3NOYW1lIDogJyd9IGF1dG9jb21wbGV0ZS1saXN0IHtzaG93TGlzdCA/ICcnIDogJ2hpZGRlbid9XG4gICAgaXMtZnVsbHdpZHRoXCJcbiAgICBiaW5kOnRoaXM9e2xpc3R9PlxuICAgIHsjaWYgZmlsdGVyZWRMaXN0SXRlbXMgJiYgZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoID4gMH1cbiAgICAgIHsjZWFjaCBmaWx0ZXJlZExpc3RJdGVtcyBhcyBsaXN0SXRlbSwgaX1cbiAgICAgICAgeyNpZiBsaXN0SXRlbSAmJiAobWF4SXRlbXNUb1Nob3dJbkxpc3QgPD0gMCB8fCBpIDwgbWF4SXRlbXNUb1Nob3dJbkxpc3QpfVxuICAgICAgICAgIHsjaWYgbGlzdEl0ZW19XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWxpc3QtaXRlbSB7aSA9PT0gaGlnaGxpZ2h0SW5kZXggPyAnc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgY2xhc3M6Y29uZmlybWVkPXtpc0NvbmZpcm1lZChsaXN0SXRlbS5pdGVtKX1cbiAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG9uTGlzdEl0ZW1DbGljayhsaXN0SXRlbSl9XG4gICAgICAgICAgICAgIG9uOnBvaW50ZXJlbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxzbG90XG4gICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgIGl0ZW09e2xpc3RJdGVtLml0ZW19XG4gICAgICAgICAgICAgICAgbGFiZWw9e2xpc3RJdGVtLmhpZ2hsaWdodGVkID8gbGlzdEl0ZW0uaGlnaGxpZ2h0ZWQgOiBsaXN0SXRlbS5sYWJlbH0+XG4gICAgICAgICAgICAgICAgeyNpZiBsaXN0SXRlbS5oaWdobGlnaHRlZH1cbiAgICAgICAgICAgICAgICAgIHtAaHRtbCBsaXN0SXRlbS5oaWdobGlnaHRlZH1cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICB7QGh0bWwgbGlzdEl0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgey9pZn1cbiAgICAgIHsvZWFjaH1cblxuICAgICAgeyNpZiBtYXhJdGVtc1RvU2hvd0luTGlzdCA+IDAgJiYgZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoID4gbWF4SXRlbXNUb1Nob3dJbkxpc3R9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLW5vLXJlc3VsdHNcIj5cbiAgICAgICAgICAuLi57ZmlsdGVyZWRMaXN0SXRlbXMubGVuZ3RoIC0gbWF4SXRlbXNUb1Nob3dJbkxpc3R9IHJlc3VsdHMgbm90IHNob3duXG4gICAgICAgIDwvZGl2PlxuICAgICAgey9pZn1cbiAgICB7OmVsc2UgaWYgbG9hZGluZyAmJiBsb2FkaW5nVGV4dH1cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLWxvYWRpbmdcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxvYWRpbmdcIiB7bG9hZGluZ1RleHR9Pntsb2FkaW5nVGV4dH08L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICB7OmVsc2UgaWYgY3JlYXRlfVxuICAgICAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS1saXN0LWl0ZW0tY3JlYXRlXCIgb246Y2xpY2s9e3NlbGVjdEl0ZW19PlxuICAgICAgICA8c2xvdCBuYW1lPVwiY3JlYXRlXCIge2NyZWF0ZVRleHR9PntjcmVhdGVUZXh0fTwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIHs6ZWxzZSBpZiBub1Jlc3VsdHNUZXh0fVxuICAgICAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS1saXN0LWl0ZW0tbm8tcmVzdWx0c1wiPlxuICAgICAgICA8c2xvdCBuYW1lPVwibm8tcmVzdWx0c1wiIHtub1Jlc3VsdHNUZXh0fT57bm9SZXN1bHRzVGV4dH08L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3ZlbHRlOndpbmRvdyBvbjpjbGljaz17b25Eb2N1bWVudENsaWNrfSAvPlxuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTEsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOCxcbiAgICBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdGhlIG1heGltdW0gbGVuZ3RoIGFuZCBpbmRleCBvZiBhbiBhcnJheS4gKi9cbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gNDI5NDk2NzI5NTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9NYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnZhbHVlc2AgYW5kIGBfLnZhbHVlc0luYCB3aGljaCBjcmVhdGVzIGFuXG4gKiBhcnJheSBvZiBgb2JqZWN0YCBwcm9wZXJ0eSB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkgbmFtZXNcbiAqIG9mIGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBnZXQgdmFsdWVzIGZvci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVZhbHVlcyhvYmplY3QsIHByb3BzKSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGl0ZXJhdG9yYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdG9yIFRoZSBpdGVyYXRvciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yVG9BcnJheShpdGVyYXRvcikge1xuICB2YXIgZGF0YSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICghKGRhdGEgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVRvQXJyYXkoc3RyaW5nKVxuICAgIDogYXNjaWlUb0FycmF5KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgaXRlcmF0b3JTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXRlcmF0b3IgOiB1bmRlZmluZWQsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUZsb29yID0gTWF0aC5mbG9vcixcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KSxcbiAgICBuYXRpdmVSYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xhbXBgIHdoaWNoIGRvZXNuJ3QgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBUaGUgbnVtYmVyIHRvIGNsYW1wLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsb3dlcl0gVGhlIGxvd2VyIGJvdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBib3VuZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNsYW1wZWQgbnVtYmVyLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xhbXAobnVtYmVyLCBsb3dlciwgdXBwZXIpIHtcbiAgaWYgKG51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaWYgKHVwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG51bWJlciA9IG51bWJlciA8PSB1cHBlciA/IG51bWJlciA6IHVwcGVyO1xuICAgIH1cbiAgICBpZiAobG93ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtYmVyID0gbnVtYmVyID49IGxvd2VyID8gbnVtYmVyIDogbG93ZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJhbmRvbWAgd2l0aG91dCBzdXBwb3J0IGZvciByZXR1cm5pbmdcbiAqIGZsb2F0aW5nLXBvaW50IG51bWJlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb3dlciBUaGUgbG93ZXIgYm91bmQuXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGJvdW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgcmFuZG9tIG51bWJlci5cbiAqL1xuZnVuY3Rpb24gYmFzZVJhbmRvbShsb3dlciwgdXBwZXIpIHtcbiAgcmV0dXJuIGxvd2VyICsgbmF0aXZlRmxvb3IobmF0aXZlUmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlciArIDEpKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogR2V0cyBgbmAgcmFuZG9tIGVsZW1lbnRzIGF0IHVuaXF1ZSBrZXlzIGZyb20gYGNvbGxlY3Rpb25gIHVwIHRvIHRoZVxuICogc2l6ZSBvZiBgY29sbGVjdGlvbmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNhbXBsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNhbXBsZS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHJhbmRvbSBlbGVtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zYW1wbGVTaXplKFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbMywgMV1cbiAqXG4gKiBfLnNhbXBsZVNpemUoWzEsIDIsIDNdLCA0KTtcbiAqIC8vID0+IFsyLCAzLCAxXVxuICovXG5mdW5jdGlvbiBzYW1wbGVTaXplKGNvbGxlY3Rpb24sIG4sIGd1YXJkKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdG9BcnJheShjb2xsZWN0aW9uKSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChjb2xsZWN0aW9uLCBuLCBndWFyZCkgOiBuID09PSB1bmRlZmluZWQpKSB7XG4gICAgbiA9IDE7XG4gIH0gZWxzZSB7XG4gICAgbiA9IGJhc2VDbGFtcCh0b0ludGVnZXIobiksIDAsIGxlbmd0aCk7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgdmFyIHJhbmQgPSBiYXNlUmFuZG9tKGluZGV4LCBsYXN0SW5kZXgpLFxuICAgICAgICB2YWx1ZSA9IHJlc3VsdFtyYW5kXTtcblxuICAgIHJlc3VsdFtyYW5kXSA9IHJlc3VsdFtpbmRleF07XG4gICAgcmVzdWx0W2luZGV4XSA9IHZhbHVlO1xuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBuO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygc2h1ZmZsZWQgdmFsdWVzLCB1c2luZyBhIHZlcnNpb24gb2YgdGhlXG4gKiBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlci1ZYXRlc19zaHVmZmxlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2h1ZmZsZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNodWZmbGUoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFs0LCAxLCAzLCAyXVxuICovXG5mdW5jdGlvbiBzaHVmZmxlKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIHNhbXBsZVNpemUoY29sbGVjdGlvbiwgTUFYX0FSUkFZX0xFTkdUSCk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvQXJyYXkoeyAnYSc6IDEsICdiJzogMiB9KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIF8udG9BcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvQXJyYXkoMSk7XG4gKiAvLyA9PiBbXVxuICpcbiAqIF8udG9BcnJheShudWxsKTtcbiAqIC8vID0+IFtdXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHN0cmluZ1RvQXJyYXkodmFsdWUpIDogY29weUFycmF5KHZhbHVlKTtcbiAgfVxuICBpZiAoaXRlcmF0b3JTeW1ib2wgJiYgdmFsdWVbaXRlcmF0b3JTeW1ib2xdKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yVG9BcnJheSh2YWx1ZVtpdGVyYXRvclN5bWJvbF0oKSk7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICBmdW5jID0gdGFnID09IG1hcFRhZyA/IG1hcFRvQXJyYXkgOiAodGFnID09IHNldFRhZyA/IHNldFRvQXJyYXkgOiB2YWx1ZXMpO1xuXG4gIHJldHVybiBmdW5jKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSB2YWx1ZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8udmFsdWVzKG5ldyBGb28pO1xuICogLy8gPT4gWzEsIDJdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy52YWx1ZXMoJ2hpJyk7XG4gKiAvLyA9PiBbJ2gnLCAnaSddXG4gKi9cbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA/IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2h1ZmZsZTtcbiIsIlxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGhhc19jYW5jZWwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUuY2FuY2VsID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgeyBub29wLCBydW5fYWxsLCBpc19mdW5jdGlvbiwgc2FmZV9ub3RfZXF1YWwsIGlzX3Byb21pc2UsIGhhc19jYW5jZWwgfTtcbiIsIlxuaW1wb3J0IHtub29wLCBpc19mdW5jdGlvbiwgcnVuX2FsbH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0gdmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcn1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuICAgIGNvbnN0IHtzdWJzY3JpYmUsIHBpcGV9ID0gd3JpdGFibGUodmFsdWUsIHN0YXJ0KTtcbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHBpcGUgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBzWzFdKCk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBpcGUoLi4ub3BlcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRvcnMucmVkdWNlKChzcmMsIG9wZXJhdG9yKSA9PiBvcGVyYXRvcihzcmMsIHZhbHVlKSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUsIHBpcGUgfTtcbn1cblxuXG4vKipcbiAqIERlcml2ZWQgdmFsdWUgc3RvcmUgYnkgc3luY2hyb25pemluZyBvbmUgb3IgbW9yZSByZWFkYWJsZSBzdG9yZXMgYW5kXG4gKiBhcHBseWluZyBhbiBhZ2dyZWdhdGlvbiBmdW5jdGlvbiBvdmVyIGl0cyBpbnB1dCB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0b3Jlc30gc3RvcmVzIGlucHV0IHN0b3Jlc1xuICogQHBhcmFtIHtmdW5jdGlvbihTdG9yZXM9LCBmdW5jdGlvbigqKT0pOip9Zm4gZnVuY3Rpb24gY2FsbGJhY2sgdGhhdCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXNcbiAqIEBwYXJhbSB7Kj19aW5pdGlhbF92YWx1ZSB3aGVuIHVzZWQgYXN5bmNocm9ub3VzbHlcbiAqL1xuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdG9yZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgd3JpdGFibGUsIHJlYWRhYmxlLCBkZXJpdmVkIH07XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIlxuaW1wb3J0IF9kZWJvdW5jZSBmcm9tIFwibG9kYXNoL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQge3JlYWRhYmxlfSBmcm9tIFwiLi4vc3RvcmUuanNcIjtcblxuLyoqXG4gKiAgZGVib3VuY2VcbiAqXG4gKiAgQmFzZWQgb24gbG9kYXNoIG9wdGlvbnM6XG4gKlxuICogIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqICBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqICBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogIEByZXR1cm5zIHt7c3Vic2NyaWJlLCBwaXBlLCBjYW5jZWwsIGZsdXNofX1cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSh3YWl0LCBvcHRpb25zKSB7XG5cbiAgICByZXR1cm4gc3JjID0+IHtcbiAgICAgICAgbGV0IGRlYm91bmNlZCA9IF9kZWJvdW5jZSgodixzZXQpID0+IHNldCh2KSwgd2FpdCwgb3B0aW9ucyk7XG4gICAgICAgIGxldCB7Y2FuY2VsLCBmbHVzaH0gPSBkZWJvdW5jZWQ7XG4gICAgICAgIGxldCB7c3Vic2NyaWJlLCBwaXBlfT0gcmVhZGFibGUodW5kZWZpbmVkLCBzZXQgPT4ge1xuICAgICAgICAgICAgbGV0IHVuc3ViID0gc3JjLnN1YnNjcmliZSh2ID0+IGRlYm91bmNlZCh2LHNldCkpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtzdWJzY3JpYmUsIHBpcGUsIGNhbmNlbCwgZmx1c2h9XG4gICAgfVxuXG59XG5cbi8qKlxuICogIHRocm90dGxlXG4gKlxuICogIFVzZXMgZGVib3VuY2Ugd2l0aCBtYXhXYWl0IHNldCAoYXMgZG9lcyBsb2Rhc2gpXG4gKlxuICogIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqICBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqICBAcmV0dXJucyB7e3N1YnNjcmliZSwgcGlwZSwgY2FuY2VsLCBmbHVzaH19XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKHdhaXQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZGVib3VuY2Uod2FpdCwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgfSk7XG59XG5cbiIsIlxuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnLi4vc3RvcmUuanMnXG5cbi8qKlxuICogc3RhcnRXaXRoXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oe3N1YnNjcmliZSwgcGlwZX0pOiB7c3Vic2NyaWJlLCBwaXBlfX0gUmVhZGFibGUgb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0V2l0aCh2YWx1ZSkge1xuXG4gICAgcmV0dXJuICh7c3Vic2NyaWJlLCBwaXBlfSkgPT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwZSguLi5vcGVyYXRvcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3JzLnJlZHVjZSgoc3JjLCBvcGVyYXRvcikgPT4gb3BlcmF0b3Ioc3JjKSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCBJY29uIGZyb20gXCJmYS1zdmVsdGUvc3JjL0ljb24uc3ZlbHRlXCI7XG4gIGltcG9ydCB7IGZhVm9sdW1lVXAgYXMgZmFTb3VuZE9uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVZvbHVtZVVwXCI7XG4gIGltcG9ydCB7IGZhVm9sdW1lTXV0ZSBhcyBmYVNvdW5kT2ZmIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVZvbHVtZU11dGVcIjtcbiAgaW1wb3J0IHsgZmFQbGF5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsYXlcIjtcbiAgaW1wb3J0IHsgZmFQYXVzZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQYXVzZVwiO1xuICBpbXBvcnQgeyBmYUNvZyBhcyBmYVNldHRpbmdzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNvZ1wiO1xuICBpbXBvcnQgeyBmYUhvbWUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSG9tZVwiO1xuICBpbXBvcnQgeyBmYURvbmF0ZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEb25hdGVcIjtcbiAgaW1wb3J0IHsgZmFFeHBhbmRBbHQgYXMgZmFFeHBhbmQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhwYW5kQWx0XCI7XG4gIGltcG9ydCB7IGZhQ2xvdWREb3dubG9hZEFsdCBhcyBmYURvd25sb2FkIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNsb3VkRG93bmxvYWRBbHRcIjtcbiAgaW1wb3J0IHsgZmFEaWNlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYURpY2VcIjtcbiAgaW1wb3J0IHsgZmFQaG90b1ZpZGVvIGFzIGZhSW1hZ2VWaWRlbyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQaG90b1ZpZGVvXCI7XG4gIGltcG9ydCB7IGZhSW1hZ2UgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW1hZ2VcIjtcbiAgaW1wb3J0IHsgZmFWaWRlbyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFWaWRlb1wiO1xuICBpbXBvcnQgeyBmYVN0YXIgYXMgZmFGYXYgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3RhclwiO1xuICBpbXBvcnQgeyBmYVN0YXIgYXMgZmFVbkZhdiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucy9mYVN0YXJcIjtcbiAgaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoXCI7XG4gIGltcG9ydCB7IGZhU3luYyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jXCI7XG4gIGltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTcGlubmVyXCI7XG4gIGltcG9ydCB7IGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzQ2lyY2xlXCI7XG4gIGltcG9ydCB7IGZhTWludXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWludXNDaXJjbGVcIjtcbiAgaW1wb3J0IHsgZmFFeWUgYXMgZmFTaG93IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV5ZVwiO1xuICBpbXBvcnQgeyBmYUV5ZVNsYXNoIGFzIGZhSGlkZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeWVTbGFzaFwiO1xuICBpbXBvcnQgeyBmYVRoIGFzIGZhQ29sdW1ucyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaFwiO1xuICBpbXBvcnQgeyBmYUV4cGFuZEFycm93c0FsdCBhcyBmYUZ1bGxzY3JlZW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhwYW5kQXJyb3dzQWx0XCI7XG5cbiAgaW1wb3J0IHsgZmFNb2JpbGVBbHQgYXMgZmFQb3J0cmFpdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNb2JpbGVBbHRcIjtcbiAgaW1wb3J0IHsgZmFEZXNrdG9wIGFzIGZhTGFuZHNjYXBlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYURlc2t0b3BcIjtcblxuICBpbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gXCJzaW1wbGUtc3ZlbHRlLWF1dG9jb21wbGV0ZVwiO1xuXG4gIGltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5ncy5zdmVsdGVcIjtcblxuICBpbXBvcnQgeyBvbk1vdW50LCB0aWNrIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBnb3RvIGFzIGFocmVmIH0gZnJvbSBcIkBzYXBwZXIvYXBwXCI7XG5cbiAgaW1wb3J0IHNodWZmbGUgZnJvbSBcImxvZGFzaC5zaHVmZmxlXCI7XG5cbiAgaW1wb3J0IHsgQVBJX0tFWSB9IGZyb20gXCIuLi9jb25maWcuanNcIjtcbiAgaW1wb3J0IHsgZ2V0X3R1bWJscl9wb3N0cywgcXVlcnlwIH0gZnJvbSBcIi4uL190dW1ibHJfdXRpbHMudHNcIjtcblxuICBcblxuICBpbXBvcnQgeyB3cml0YWJsZSwgdGhyb3R0bGUsIHN0YXJ0V2l0aCB9IGZyb20gXCJzdmVsdGUtcGlwZWFibGUtc3RvcmVcIjtcblxuICBpbXBvcnQge1xuICAgIGF1dG9wbGF5LFxuICAgIGF1dG9wbGF5aW50ZXJ2YWwsXG4gICAgaW1hZ2VWaWRlbyxcbiAgICBwb3J0cmFpdExhbmRzY2FwZSxcbiAgICBmYXZvcml0ZSxcbiAgICBvdmVyMTgsXG4gICAgcHJlZmV0Y2gsXG4gICAgcHJlZmV0Y2hOdW0sXG4gICAgaGlyZXMsXG4gICAgbG9yZXMsXG4gICAgbXV0ZWQsXG4gICAgbGF5b3V0LFxuICAgIG11bHRpcmVkZGl0LFxuICAgIG9sZHJlZGRpdCxcbiAgICBoaWRlVUlvblN0YXJ0LFxuICAgIGFwaUtleVxuICB9IGZyb20gXCIuLi9fcHJlZnNcIjtcbiAgYXV0b3BsYXkudXNlTG9jYWxTdG9yYWdlKGZhbHNlKTtcbiAgYXV0b3BsYXlpbnRlcnZhbC51c2VMb2NhbFN0b3JhZ2UoMyk7XG4gIGltYWdlVmlkZW8udXNlTG9jYWxTdG9yYWdlKDApO1xuICBwb3J0cmFpdExhbmRzY2FwZS51c2VMb2NhbFN0b3JhZ2UoMCk7XG4gIGZhdm9yaXRlLnVzZUxvY2FsU3RvcmFnZSh7fSk7XG4gIG92ZXIxOC51c2VMb2NhbFN0b3JhZ2UoMSk7XG4gIG11bHRpcmVkZGl0LnVzZUxvY2FsU3RvcmFnZSh7fSk7XG4gIHByZWZldGNoLnVzZUxvY2FsU3RvcmFnZSh0cnVlKTtcbiAgcHJlZmV0Y2hOdW0udXNlTG9jYWxTdG9yYWdlKDUwKTtcbiAgaGlyZXMudXNlTG9jYWxTdG9yYWdlKGZhbHNlKTtcbiAgbG9yZXMudXNlTG9jYWxTdG9yYWdlKHRydWUpO1xuICBvbGRyZWRkaXQudXNlTG9jYWxTdG9yYWdlKGZhbHNlKTtcbiAgbXV0ZWQudXNlTG9jYWxTdG9yYWdlKHRydWUpO1xuICBsYXlvdXQudXNlTG9jYWxTdG9yYWdlKDApO1xuICBoaWRlVUlvblN0YXJ0LnVzZUxvY2FsU3RvcmFnZShmYWxzZSk7XG4gIGFwaUtleS51c2VMb2NhbFN0b3JhZ2UoJycpO1xuXG4gIGV4cG9ydCBsZXQgcGFyYW1zLCBzbHVnc3RyO1xuICBleHBvcnQgbGV0IHBvc3RzID0gW107XG4gIGV4cG9ydCBsZXQgYWZ0ZXIgPSBudWxsO1xuICBleHBvcnQgbGV0IHJlcztcbiAgZXhwb3J0IGxldCBtb2RlID0gXCJ0dW1ibHJcIjtcbiAgZXhwb3J0IGxldCBwYWdlVHlwZSA9IFwidXNlclwiO1xuXG4gIGNvbnNvbGUubG9nKFwiUG9zdHMgZnJvbSBBUEk6XCIsIHBvc3RzKTtcblxuICBsZXQgZGF0YTtcbiAgbGV0IGRpc3BsYXlwb3N0cyA9IFtdO1xuICBjb25zb2xlLmxvZyhcIkRpc3BsYXkgUG9zdHMgKGluaXRpYWwpOlwiLCBkaXNwbGF5cG9zdHMpO1xuICBsZXQgdWlWaXNpYmxlID0gISRoaWRlVUlvblN0YXJ0O1xuICBsZXQgaGlkZUN1cnNvciA9ICRoaWRlVUlvblN0YXJ0O1xuICBsZXQgaGlkZUN1cnNvclRpbWVySWQgPSAwO1xuICBsZXQgdGl0bGVWaXNpYmxlID0gdHJ1ZTtcbiAgbGV0IG51bUZhdm9yaXRlO1xuICBsZXQgdGlueWdvdG87XG4gIGxldCB0aXRsZTtcbiAgbGV0IGFsYnVtaW5kZXggPSAwO1xuXG4gICQ6IHtcbiAgICBpZiAoY3VycnBvc3QuaXNfYWxidW0pIHtcbiAgICAgIHRpdGxlID0gYCgke2FsYnVtaW5kZXggKyAxfS8ke2N1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtLmxlbmd0aH0pICR7XG4gICAgICAgIGN1cnJwb3N0LnRpdGxlXG4gICAgICB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUgPSBjdXJycG9zdC50aXRsZTtcbiAgICB9XG4gIH1cblxuICBsZXQgYmxvZ0lkZW50aWZpZXI7XG5cbiAgJDogYmxvZ0lkZW50aWZpZXIgPSBzbHVnc3RyO1xuXG4gICQ6IHtcbiAgICBpZiAoJGdvdG9FbFdpZHRoID4gMTAwMCkge1xuICAgICAgLy8gcGFkZGluZyBvbiBib3RoIHNpZGVzXG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzSW5PbmVSb3cgPSAoJGdvdG9FbFdpZHRoIC0gMTU0ICogMikgLyAzMjtcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNSb3dzID1cbiAgICAgICAgKGRpc3BsYXlwb3N0cy5sZW5ndGggKyA1KSAvIG51bUdvdG9Db250cm9sc0luT25lUm93O1xuICAgICAgdGlueWdvdG8gPSBudW1Hb3RvQ29udHJvbHNSb3dzID4gMztcbiAgICB9IGVsc2UgaWYgKCRnb3RvRWxXaWR0aCA+IDgwMCkge1xuICAgICAgLy8gcGFkZGluZyBvbiByaWdodCBzaWRlXG4gICAgICBsZXQgbnVtR290b0NvbnRyb2xzSW5PbmVSb3cgPSAoJGdvdG9FbFdpZHRoIC0gKDE1NCArIDE0KSkgLyAzMjtcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNSb3dzID1cbiAgICAgICAgKGRpc3BsYXlwb3N0cy5sZW5ndGggKyA1KSAvIG51bUdvdG9Db250cm9sc0luT25lUm93O1xuICAgICAgdGlueWdvdG8gPSBudW1Hb3RvQ29udHJvbHNSb3dzID4gMztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gcGFkZGluZ1xuICAgICAgbGV0IG51bUdvdG9Db250cm9sc0luT25lUm93ID0gKCRnb3RvRWxXaWR0aCAtICgxNCArIDE0KSkgLyAzMjtcbiAgICAgIGxldCBudW1Hb3RvQ29udHJvbHNSb3dzID1cbiAgICAgICAgKGRpc3BsYXlwb3N0cy5sZW5ndGggKyA1KSAvIG51bUdvdG9Db250cm9sc0luT25lUm93O1xuICAgICAgdGlueWdvdG8gPSBudW1Hb3RvQ29udHJvbHNSb3dzID4gMztcbiAgICB9XG4gIH1cblxuICAvLyAxNDQwIGlzIHRvIHNldCBudW1Db2xzIHRvIDMuIFNldHRpbmcgdG8gYDBgIHdvdWxkIG1lYW4gd2Ugc3RhcnQgd2l0aCAxIGNvbCwgYW5kIHRoZW4gcXVpY2tseSB1cGRhdGUgdG8gMyBvbiBkZXNrdG9wLlxuICBjb25zdCBfZ290b0VsV2lkdGggPSB3cml0YWJsZSgxNDQwKTtcbiAgY29uc3QgZ290b0VsV2lkdGggPSBfZ290b0VsV2lkdGgucGlwZSh0aHJvdHRsZSg1MDApLCBzdGFydFdpdGgoMTQ0MCkpO1xuXG4gICQ6IGxvYWRFcnJvciA9IHJlcyAmJiAhcmVzLnJlcy5vaztcbiAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcbiAgbGV0IHJlbG9hZHN0ciA9IFwiTG9hZCBtb3JlXCI7XG4gIGxldCBuYXZpZ2F0aW9uID0gZmFsc2U7XG5cbiAgbGV0IGltYWdlVmlkZW9TdHIgPSBcIlwiO1xuICBsZXQgcG9ydHJhaXRMYW5kc2NhcGVTdHIgPSBcIlwiO1xuICBsZXQgZG93bmxvYWRzdHIgPSBcIlwiO1xuICBsZXQgYXV0b3BsYXlzdHIgPSBcIlwiO1xuICBsZXQgb3ZlcjE4c3RyID0gXCJcIjtcbiAgbGV0IGRlZXBzZWFyY2hzdHIgPSBcIlwiOyAvLyBEZWNsYXJlIGRlZXBzZWFyY2hzdHJcbiAgXG4gIGxldCBzaG93aGlkZXN0ciA9IFwiU2hvdyAoaClcIjtcbiAgbGV0IG11dGVkc3RyID0gXCJTb3VuZCBPZmZcIjtcblxuICBsZXQgYXV0b3BsYXl0aW1lcjtcblxuICBsZXQgZmlsdGVyUmVmO1xuICBsZXQgZmlsdGVyRXhwYW5kZWQgPSBmYWxzZTtcbiAgbGV0IGZpbHRlclZhbHVlID0gXCJcIjtcbiAgbGV0IHN1YnJlZGRpdFNlYXJjaFZhbHVlID0gXCJcIjsgLy8gRGVjbGFyZSBzdWJyZWRkaXRTZWFyY2hWYWx1ZVxuXG4gIGxldCBzaG93U2V0dGluZ3MgPSBmYWxzZTtcblxuICBsZXQgY3VycnBvc3QgPSB7IHRpdGxlOiBcIkxvYWRpbmcgLi5cIiB9O1xuICBsZXQgbmV4dHVybHMgPSBbXTtcblxuICBsZXQgaW5kZXggPSAwO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRNb3JlKCkge1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG5cbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICByZWxvYWRzdHIgPSBcIkxvYWRpbmcgLi5cIjtcblxuICAgIGxldCBuZXdwb3N0cztcblxuICAgIGlmIChtb2RlID09PSBcInR1bWJsclwiKSB7XG4gICAgICBsZXQgdXNlQXBpS2V5ID0gJGFwaUtleSB8fCBBUElfS0VZO1xuICAgICAgbGV0IHVybDtcbiAgICAgIGlmIChwYWdlVHlwZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgdXJsID0gYGh0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvdGFnZ2VkP3RhZz0ke2Jsb2dJZGVudGlmaWVyfSZhcGlfa2V5PSR7dXNlQXBpS2V5fSZiZWZvcmU9JHthZnRlciB8fCAnJ30mJHtxdWVyeXAocGFyYW1zKX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gYGh0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvYmxvZy8ke2Jsb2dJZGVudGlmaWVyfS9wb3N0cz9hcGlfa2V5PSR7dXNlQXBpS2V5fSZvZmZzZXQ9JHthZnRlciB8fCAnJ30mJHtxdWVyeXAocGFyYW1zKX1gO1xuICAgICAgfVxuXG4gICAgICAoe1xuICAgICAgICBwb3N0czogbmV3cG9zdHMsXG4gICAgICAgIGFmdGVyLFxuICAgICAgICAuLi5yZXNcbiAgICAgIH0gPSBhd2FpdCBnZXRfdHVtYmxyX3Bvc3RzKHVybCkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBBUEkgUmVzcG9uc2UgKHJlcyBvYmplY3QpOlwiLCByZXMpO1xuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBOZXcgcG9zdHMgcmVjZWl2ZWQ6XCIsIG5ld3Bvc3RzLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIEN1cnJlbnQgcG9zdHMgYXJyYXkgYmVmb3JlIGNvbWJpbmluZzpcIiwgcG9zdHMubGVuZ3RoKTtcblxuICAgIC8vIGxvYWQgYGZhdm9yaXRlYCBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgIGZvciAobGV0IHAgb2YgbmV3cG9zdHMpIHtcbiAgICAgIHBbXCJmYXZvcml0ZVwiXSA9ICEhKCgkZmF2b3JpdGUgfHwge30pW3AudXJsXT8uZmF2b3JpdGUpO1xuICAgIH1cblxuICAgIC8vIENvbWJpbmUgYHBvc3RzYCBhbmQgYG5ld3Bvc3RzYCBhbmQgcmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBtdWx0aXBsZSBuZXR3b3JrIHJlcXVlc3RzXG4gICAgcG9zdHMgPSBbLi4ucG9zdHMsIC4uLm5ld3Bvc3RzXS5yZWR1Y2UoXG4gICAgICAociwgaSkgPT4gKCFyLnNvbWUoKGopID0+IGkuaWQgPT09IGouaWQpID8gWy4uLnIsIGldIDogciksXG4gICAgICBbXVxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJbbG9hZE1vcmVdIFBvc3RzIGFmdGVyIGluaXRpYWwgY29tYmluZSAoYmVmb3JlIFVSTCBkZWR1cGUpOiBcIiwgcG9zdHMubGVuZ3RoKTtcblxuICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzLCBiYXNlZCBvbiBgdXJsYFxuICAgIHBvc3RzID0gcG9zdHMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmZpbmRJbmRleCgodCkgPT4gdC51cmwgPT0gdi51cmwpID09PSBpKTtcblxuICAgIGNvbnNvbGUubG9nKFwiW2xvYWRNb3JlXSBBZnRlciBkZWR1cGUvVG90YWwgbG9hZGVkOiBcIiwgcG9zdHMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhcIltsb2FkTW9yZV0gTmV4dCAnYWZ0ZXInIHZhbHVlOlwiLCBhZnRlcik7XG5cbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgcmVsb2Fkc3RyID0gXCJMb2FkIG1vcmVcIjtcbiAgfVxuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGxvYWRNb3JlKCk7XG4gICAgLy8gU3RhcnQgYXV0b3BsYXkgYnkgZGVmYXVsdFxuICAgIGlmICgkYXV0b3BsYXkpIHtcbiAgICAgIHN0YXJ0QXV0b1BsYXkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QXV0b1BsYXkoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnU1RBUlQnKVxuICAgIGF1dG9wbGF5dGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBJZiBgYXV0b3BsYXlgIGlzIG9mZiBhbmQgaXQgaXMgYSB2aWRlbywgdGhlIHZpZGVvIHdpbGwgcHJvZ3Jlc3MgYnkgaXRzZWxmIHZpYSBvbjplbmRlZFxuICAgICAgaWYgKCRhdXRvcGxheSAmJiBjdXJycG9zdC5pc19pbWFnZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tIGlORVhUJylcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICghJGF1dG9wbGF5ICYmIGN1cnJwb3N0LmlzX3ZpZGVvKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0gdk5FWFQnKVxuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSwgJGF1dG9wbGF5aW50ZXJ2YWwgKiAxMDAwKTtcblxuICAgIGF1dG9wbGF5LnNldCh0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgaWYgKGN1cnJwb3N0LmlzX2FsYnVtICYmIGFsYnVtaW5kZXggPiAwKSB7XG4gICAgICBhbGJ1bVByZXYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbVByZXYoKTtcbiAgICAgIGF3YWl0IHRpY2soKTsgLy8gRW5zdXJlIGN1cnJwb3N0IGlzIHVwZGF0ZWRcbiAgICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSkge1xuICAgICAgICBhbGJ1bWluZGV4ID0gY3VycnBvc3QucHJldmlldy5pbWcuYWxidW0ubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChjdXJycG9zdC5pc19hbGJ1bSAmJiAhaXNFbmRPZkFsYnVtKCkpIHtcbiAgICAgIGFsYnVtTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtTmV4dCgpO1xuICAgICAgYXdhaXQgdGljaygpOyAvLyBFbnN1cmUgY3VycnBvc3QgaXMgdXBkYXRlZFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvUGxheSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdTVE9QJylcbiAgICBjbGVhckludGVydmFsKGF1dG9wbGF5dGltZXIpO1xuICAgIGF1dG9wbGF5LnNldChmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQW5kU3RhcnRBdXRvUGxheSgpIHtcbiAgICBzdG9wQXV0b1BsYXkoKTtcblxuICAgIHN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUF1dG9QbGF5KCkge1xuICAgIGlmICgkYXV0b3BsYXkpIHtcbiAgICAgIHN0b3BBdXRvUGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW1hZ2VWaWRlbygpIHtcbiAgICAkaW1hZ2VWaWRlbyA9ICRpbWFnZVZpZGVvICsgMTtcblxuICAgIGlmICgkaW1hZ2VWaWRlbyA9PSAzKSB7XG4gICAgICAkaW1hZ2VWaWRlbyA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5pcUJ5KGEsIGtleSkge1xuICAgIHZhciBzZWVuID0ge307XG4gICAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGsgPSBrZXkoaXRlbSk7XG4gICAgICAgIHJldHVybiBzZWVuLmhhc093blByb3BlcnR5KGspID8gZmFsc2UgOiAoc2VlbltrXSA9IHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXV0ZWQoKSB7XG4gICAgJG11dGVkID0gISRtdXRlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBvcnRyYWl0TGFuZHNjYXBlKCkge1xuICAgICRwb3J0cmFpdExhbmRzY2FwZSA9ICRwb3J0cmFpdExhbmRzY2FwZSArIDE7XG5cbiAgICBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDMpIHtcbiAgICAgICRwb3J0cmFpdExhbmRzY2FwZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlbmRlclZpZGVvID0gdHJ1ZTtcblxuICAvLyBTb21lIG9wZXJhdGlvbnMgbGlrZSBmYXYvdW5mYXYgY2F1c2VzIHZpZGVvIHRvIHJlLXJlbmRlclxuICAvLyBzaW5jZSB3ZSdyZSBjaGFuZ2luZyBwb3N0LmZhdm9yaXRlLiBUaGlzIHNob3VsZCBoZWxwIHNraXAgaXRcbiAgbGV0IHNraXBSZW5kZXJWaWRlbyA9IGZhbHNlO1xuXG4gICQ6IHtcbiAgICBpZiAoIXNraXBSZW5kZXJWaWRlbykgcmVNb3VudFZpZGVvKGN1cnJwb3N0LnByZXZpZXcpO1xuICAgIHNraXBSZW5kZXJWaWRlbyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVNb3VudFZpZGVvKCkge1xuICAgIHJlbmRlclZpZGVvID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiAocmVuZGVyVmlkZW8gPSB0cnVlKSwgMCk7XG4gIH1cblxuICAkOiB7XG4gICAgLy8gU3VicmVkZGl0IHNlYXJjaFxuICAgIGlmIChzdWJyZWRkaXRTZWFyY2hWYWx1ZSkge1xuICAgICAgLy9zdWJyZWRkaXRTZWFyY2hWaXNpYmxlID0gZmFsc2U7XG4gICAgICAvL2FocmVmKGAvci8ke3N1YnJlZGRpdFNlYXJjaFZhbHVlfWApO1xuICAgICAgLy9zdWJyZWRkaXRTZWFyY2hWYWx1ZSA9IFwiXCI7XG4gICAgICAvL3N1YnJlZGRpdFNlYXJjaFZhbHVlUmF3ID0gXCJcIjtcbiAgICAgIGp1bXBUb1N1YlJlZGRpdChzdWJyZWRkaXRTZWFyY2hWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIG51bUZhdm9yaXRlID0gZGlzcGxheXBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mYXZvcml0ZSA9PSB0cnVlKS5sZW5ndGg7XG5cbiAgICBpZiAoIW51bUZhdm9yaXRlKSB7XG4gICAgICBkb3dubG9hZHN0ciA9IGBOb3RoaW5nIHRvIGRvd25sb2FkYDtcbiAgICB9IGVsc2UgaWYgKG51bUZhdm9yaXRlID09IDEpIHtcbiAgICAgIGRvd25sb2Fkc3RyID0gYERvd25sb2FkICR7bnVtRmF2b3JpdGV9IGZpbGVgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb3dubG9hZHN0ciA9IGBEb3dubG9hZCAke251bUZhdm9yaXRlfSBmaWxlc2A7XG4gICAgfVxuICAgIGF1dG9wbGF5c3RyID0gYEF1dG9wbGF5IGlzICR7JGF1dG9wbGF5ID8gXCJvblwiIDogXCJvZmZcIn1gO1xuICAgIGRlZXBzZWFyY2hzdHIgPSBgU2VhcmNoIGZvciAke2ZpbHRlclZhbHVlfWA7XG5cbiAgICBtdXRlZHN0ciA9IGBTb3VuZCAkeyRtdXRlZCA/IFwib2ZmXCIgOiBcIm9uXCJ9YDtcblxuICAgIGlmICgkb3ZlcjE4ID09IDApIHtcbiAgICAgIG92ZXIxOHN0ciA9IFwibnNmdyBvZmZcIjtcbiAgICB9IGVsc2UgaWYgKCRvdmVyMTggPT0gMSkge1xuICAgICAgb3ZlcjE4c3RyID0gXCJuc2Z3IG9uXCI7XG4gICAgfSBlbHNlIGlmICgkb3ZlcjE4ID09IDIpIHtcbiAgICAgIG92ZXIxOHN0ciA9IFwibnNmdyBvbmx5XCI7XG4gICAgfVxuXG4gICAgaWYgKCRpbWFnZVZpZGVvID09IDApIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgYm90aCBpbWFnZSBhbmQgdmlkZW9cIjtcbiAgICB9IGVsc2UgaWYgKCRpbWFnZVZpZGVvID09IDEpIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgdmlkZW9zIG9ubHlcIjtcbiAgICB9IGVsc2UgaWYgKCRpbWFnZVZpZGVvID09IDIpIHtcbiAgICAgIGltYWdlVmlkZW9TdHIgPSBcIlNob3cgaW1hZ2VzIG9ubHlcIjtcbiAgICB9XG5cbiAgICBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDApIHtcbiAgICAgIHBvcnRyYWl0TGFuZHNjYXBlU3RyID0gXCJTaG93IGFsbCBtZWRpYVwiO1xuICAgIH0gZWxzZSBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDEpIHtcbiAgICAgIHBvcnRyYWl0TGFuZHNjYXBlU3RyID0gXCJTaG93IG9ubHkgcG9ydHJhaXQgbWVkaWFcIjtcbiAgICB9IGVsc2UgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAyKSB7XG4gICAgICBwb3J0cmFpdExhbmRzY2FwZVN0ciA9IFwiU2hvdyBvbmx5IGxhbmRzY2FwZSBtZWRpYVwiO1xuICAgIH1cbiAgfVxuXG4gICQ6IHtcbiAgICBpZiAoZGlzcGxheXBvc3RzW2luZGV4XSkge1xuICAgICAgY3VycnBvc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRpc3BsYXlwb3N0c1tpbmRleF0pKTtcblxuICAgICAgbGV0IF9uZXh0dXJscyA9IFtdO1xuXG4gICAgICBfbmV4dHVybHMgPSBbXG4gICAgICAgIGN1cnJwb3N0LFxuICAgICAgICAuLi5kaXNwbGF5cG9zdHMuc2xpY2UoaW5kZXggKyAxLCBpbmRleCArICRwcmVmZXRjaE51bSArIDEpXG4gICAgICBdO1xuXG4gICAgICBuZXh0dXJscyA9IF9uZXh0dXJsc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXNfYWxidW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByZXZpZXcuaW1nLmFsYnVtLnNsaWNlKFxuICAgICAgICAgICAgICBhbGJ1bWluZGV4LFxuICAgICAgICAgICAgICBhbGJ1bWluZGV4ICsgJHByZWZldGNoTnVtICsgMVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhuZXh0dXJscyk7XG4gICAgICBuZXh0dXJscyA9IHVuaXFCeShuZXh0dXJscywgKCkgPT4gKGl0ZW0pID0+IGl0ZW0ucHJldmlldy5pbWcuZGVmYXVsdCk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJWYWx1ZSkge1xuICAgICAgLy8gV2UncmUgaGVyZSBiZWNhdXNlIHVzZXIgZmlsdGVyZWQgdGhlIGxpc3RcblxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGUgZmlsdGVyZWQgbGlzdCBpcyBzbWFsbGVyIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgIC8vIHNldCBpbmRleCB0byBsYXN0IGl0ZW1cbiAgICAgIGlmIChkaXNwbGF5cG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgaW5kZXggZnJvbSBcIiwgaW5kZXgsIFwiIHRvIFwiLCBkaXNwbGF5cG9zdHMubGVuZ3RoKTtcbiAgICAgICAgaW5kZXggPSBkaXNwbGF5cG9zdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIG1vcmUgLi5cIik7XG4gICAgICAgIGxvYWRNb3JlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIHdhcyBmaWx0ZXJlZFxuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGN1cnJwb3N0ID0ge1xuICAgICAgICAgIHRpdGxlOiBcIk5vdGhpbmcgdG8gc2hvdy4gVHJ5IGNoYW5naW5nIGZpbHRlcnMgb3IgdHdlYWsvdXBkYXRlIFVSTC5cIlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzICYmIHJlcy5yZXMub2spIHtcbiAgICAgICAgLy8gTm8gbWVkaWEgZm91bmRcbiAgICAgICAgY3VycnBvc3QgPSB7XG4gICAgICAgICAgdGl0bGU6IFwiTm90aGluZyB0byBzaG93LiBUcnkgY2hhbmdpbmcgZmlsdGVycyBvciB0d2Vhay91cGRhdGUgVVJMLlwiXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHJlcyAmJiAhcmVzLnJlcy5vaykge1xuICAgICAgICAvLyBJbnZhbGlkIHN1YnJlZGRpdFxuICAgICAgICBjdXJycG9zdCA9IHsgdGl0bGU6IFwiRXJyb3JcIiB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmYXVsdFxuICAgICAgICBjdXJycG9zdCA9IHsgdGl0bGU6IFwiTG9hZGluZyAuLlwiIH07XG4gICAgICB9XG5cbiAgICAgIG5leHR1cmxzID0gW107XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIGxldCB0bXAgPSBbXTtcblxuICAgIGlmICgkb3ZlcjE4ID09IDApIHtcbiAgICAgIHRtcCA9IHBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vdmVyMTggPT0gZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoJG92ZXIxOCA9PSAxKSB7XG4gICAgICB0bXAgPSBwb3N0cztcbiAgICB9IGVsc2UgaWYgKCRvdmVyMTggPT0gMikge1xuICAgICAgdG1wID0gcG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm92ZXIxOCA9PSB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyVmFsdWUpIHtcbiAgICAgIHNraXBSZW5kZXJWaWRlbyA9IHRydWU7XG4gICAgICB0bXAgPSB0bXAuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVyIG9ubHkgdmlkZW9zXG4gICAgaWYgKCRpbWFnZVZpZGVvID09IDEpIHtcbiAgICAgIHRtcCA9IHRtcC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXNfdmlkZW8pO1xuICAgIH1cbiAgICAvLyBGaWx0ZXIgb25seSBpbWFnZXNcbiAgICBlbHNlIGlmICgkaW1hZ2VWaWRlbyA9PSAyKSB7XG4gICAgICB0bXAgPSB0bXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzX2ltYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoJHBvcnRyYWl0TGFuZHNjYXBlID09IDEpIHtcbiAgICAgIHRtcCA9IHRtcC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGltcy53aWR0aCAvIGl0ZW0uZGltcy5oZWlnaHQgPD0gMS4yKTtcbiAgICB9IGVsc2UgaWYgKCRwb3J0cmFpdExhbmRzY2FwZSA9PSAyKSB7XG4gICAgICB0bXAgPSB0bXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRpbXMud2lkdGggLyBpdGVtLmRpbXMuaGVpZ2h0ID4gMS4yKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5cG9zdHMgPSB0bXA7XG4gIH1cblxuICBmdW5jdGlvbiBnb3RvKGkpIHtcbiAgICBhbGJ1bWluZGV4ID0gMDtcbiAgICBpbmRleCA9IGk7XG5cbiAgICBsZXQgaXRlbU51bSA9IGRpc3BsYXlwb3N0cy5sZW5ndGggLSBpbmRleDtcblxuICAgIC8vIElmIGF1dG9wbGF5IGlzIG9uIGFuZCB3ZSdyZSBqdW1waW5nIHRvIDIgb3IgMywgd2UgbXVzdCBsb2FkXG4gICAgaWYgKChpdGVtTnVtID09IDIgfHwgaXRlbU51bSA9PSAzKSAmJiAkYXV0b3BsYXkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2dvdG8tdG8tMi8zXTogbG9hZGluZyAuLlwiKTtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuXG4gICAgLy8gTGFzdCBpdGVtXG4gICAgaWYgKGl0ZW1OdW0gPT09IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2dvdG8tdG8tbGFzdGl0ZW1dOiBsb2FkaW5nIC4uXCIpO1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJGF1dG9wbGF5KSBzdG9wQW5kU3RhcnRBdXRvUGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkRGF0YSgpIHtcbiAgICBwb3N0cyA9IFtdO1xuICAgIGRpc3BsYXlwb3N0cyA9IFtdO1xuICAgIGFmdGVyID0gbnVsbDtcbiAgICBsb2FkTW9yZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlkZW9lbmRlZCgpIHtcbiAgICBpdGVtTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXRlbU5leHQoKSB7XG4gICAgYWxidW1pbmRleCA9IDA7IC8vIEFsd2F5cyByZXNldCBhbGJ1bSBpbmRleCB0byAwIHdoZW4gbW92aW5nIHRvIGEgbmV3IHBvc3RcbiAgICBsZXQgaXRlbU51bSA9IGRpc3BsYXlwb3N0cy5sZW5ndGggLSAxIC0gaW5kZXg7XG5cbiAgICAvLyBMYXN0IGl0ZW0sIGRvbnQgZ28gcGFzdCB0aGUgbGFzdCBpdGVtXG4gICAgaWYgKGl0ZW1OdW0gPD0gMSkge1xuICAgICAgaW5kZXggPSBkaXNwbGF5cG9zdHMubGVuZ3RoIC0gMTtcblxuICAgICAgY29uc29sZS5sb2coXCJbbGFzdGl0ZW0sIGF1dG9wbGF5K2ZpbHRlcj9dOiBsb2FkaW5nIG1vcmUgLi5cIik7XG4gICAgICAvLyBSZWFjaGVkIGxhc3QgaXRlbSwgcG9zc2libHkgYnkgYXV0b3BsYXkgKyBmaWx0ZXJcbiAgICAgIGxvYWRNb3JlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdXRvIHRyaWdnZXIgb24gdGhlIGxhc3QgNHRoIGl0ZW1cbiAgICBpZiAoaXRlbU51bSA9PT0gNCB8fCBpdGVtTnVtID09PSAzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIls0dGggbGFzdCBpdGVtLCBub3JtYWxdOiBsb2FkaW5nIG1vcmUgLi5cIik7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIGF0IDNyZC8ybmQgbGFzdCBpdGVtIHdpdGggYSBmaWx0ZXIsIHRoZSB1c2VyXG4gICAgLy8gcG9zc2libHkganVzdCBmaWx0ZXJlZCB0aGUgbGlzdCBhbmQgZW5kZWQgdXAgaGVyZS5cbiAgICAvLyB0cmlnZ2VyIGEgbG9hZCBtb3JlLiBXZSBkb250IHdhbnQgdG8gZG8gaXQgYWx3YXlzIHNpbmNlXG4gICAgLy8gd2Ugbm9ybWFsbHkgdHJpZ2dlciBsb2FkbW9yZSBAM3JkIGxhc3QgaXRlbS4gQWx3YXlzIGRvaW5nIGl0XG4gICAgLy8gV291bGQgZW5kIHVwIHdpdGggMiByZXF1ZXN0cyB0byByZWRkaXQuY29tXG4gICAgaWYgKGl0ZW1OdW0gPT09IDIgJiYgZmlsdGVyVmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWzJuZCBsYXN0IGl0ZW0sIGZpbHRlcmluZz9dOiBsb2FkaW5nIG1vcmUgLi5cIik7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIGluZGV4ICs9IDE7XG5cbiAgICBpZiAoJGF1dG9wbGF5KSBzdG9wQW5kU3RhcnRBdXRvUGxheSgpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaXRlbVByZXYoKSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm47XG4gICAgaW5kZXggLT0gMTtcblxuICAgIGFsYnVtaW5kZXggPSAwOyAvLyBBbHdheXMgcmVzZXQgYWxidW0gaW5kZXggdG8gMCB3aGVuIG1vdmluZyB0byBhIG5ldyBwb3N0XG5cbiAgICBhd2FpdCB0aWNrKCk7IC8vIEVuc3VyZSBjdXJycG9zdCBpcyB1cGRhdGVkIGJlZm9yZSBhY2Nlc3NpbmcgaXRzIHByb3BlcnRpZXNcblxuICAgIGlmIChkaXNwbGF5cG9zdHMubGVuZ3RoIC0gaW5kZXggPT09IDMpIHtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuICAgIGlmICgkYXV0b3BsYXkpIHN0b3BBbmRTdGFydEF1dG9QbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fCAvLyBhbHRlcm5hdGl2ZSBzdGFuZGFyZCBtZXRob2RcbiAgICAgIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG4gICAgICBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxuICAgICkge1xuICAgICAgLy8gY3VycmVudCB3b3JraW5nIG1ldGhvZHNcbiAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXVpVmlzaWJsZSkge1xuICAgICAgICB0b2dnbGVVSVZpc2libGl0eSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBlbGVtLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW0ubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBlbGVtLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICBlbGVtLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW0ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlbS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuICAgICAgaWYgKHVpVmlzaWJsZSkge1xuICAgICAgICB0b2dnbGVVSVZpc2libGl0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVmlkZW9QbGF5ZXJDbGlja2VkKGV2KSB7XG4gICAgY29uc3QgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb3BsYXllcmlkJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2Lm9mZnNldFggLyByLndpZHRoO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSAxLzU7XG5cbiAgICBpZiAoeCA8IGFjdGl2ZVBhcnQpIHtcbiAgICAgIGl0ZW1QcmV2KCk7XG4gICAgfSBlbHNlIGlmICh4ID4gKDEtYWN0aXZlUGFydCkpIHtcbiAgICAgIGl0ZW1OZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSGlkZUN1cnNvcigpIHtcbiAgICAvLyBJZiB0aGUgVUkgaXMgY3VycmVudGx5IHZpc2libGUsIHRoZSBjdXJzb3Igc2hvdWxkIGFsd2F5cyBiZSB2aXNpYmxlLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2V0IGEgdGltZXIgdG8gaGlkZSBpdCBpbiB0aGlzIHN0YXRlLlxuICAgIGlmICh1aVZpc2libGUpIHtcbiAgICAgIGhpZGVDdXJzb3IgPSBmYWxzZTsgLy8gRW5zdXJlIGN1cnNvciBpcyB2aXNpYmxlXG4gICAgICBpZiAoaGlkZUN1cnNvclRpbWVySWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVDdXJzb3JUaW1lcklkKTsgLy8gQ2xlYXIgYW55IGxpbmdlcmluZyB0aW1lclxuICAgICAgICBoaWRlQ3Vyc29yVGltZXJJZCA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm47IC8vIFN0b3AgaGVyZSwgbm8gZnVydGhlciBhY3Rpb24gbmVlZGVkXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIFVJIGlzIGhpZGRlbiwgd2UgbWFuYWdlIGN1cnNvciB2aXNpYmlsaXR5IGJhc2VkIG9uIGluYWN0aXZpdHkuXG4gICAgaGlkZUN1cnNvciA9IGZhbHNlOyAvLyBTaG93IGN1cnNvciBpbW1lZGlhdGVseSBvbiBtb3VzZSBtb3ZlbWVudFxuICAgIGlmIChoaWRlQ3Vyc29yVGltZXJJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGhpZGVDdXJzb3JUaW1lcklkKTsgLy8gQ2xlYXIgcHJldmlvdXMgdGltZXJcbiAgICB9XG4gICAgaGlkZUN1cnNvclRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGhpZGVDdXJzb3JUaW1lcklkID0gMDtcbiAgICAgIGhpZGVDdXJzb3IgPSB0cnVlOyAvLyBIaWRlIGN1cnNvciBhZnRlciAzIHNlY29uZHMgb2YgaW5hY3Rpdml0eVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVGl0bGVWaXNpYmlsaXR5KCkge1xuICAgIHRpdGxlVmlzaWJsZSA9ICF0aXRsZVZpc2libGU7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVVSVZpc2libGl0eSgpIHtcbiAgICB1aVZpc2libGUgPSAhdWlWaXNpYmxlO1xuXG4gICAgc2hvd2hpZGVzdHIgPSB1aVZpc2libGUgPyBcIkhpZGUgKGgpXCIgOiBcIlNob3cgKGgpXCI7XG5cbiAgICBpZiAoaGlkZUN1cnNvclRpbWVySWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChoaWRlQ3Vyc29yVGltZXJJZCk7XG4gICAgICBoaWRlQ3Vyc29yVGltZXJJZCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKCF1aVZpc2libGUpIHtcbiAgICAgIGhpZGVDdXJzb3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlQ3Vyc29yID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2V0dGluZ3MoKSB7XG4gICAgc2hvd1NldHRpbmdzID0gIXNob3dTZXR0aW5ncztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvdG9EZWVwU2VhcmNoKCkge1xuICAgIGxldCBwcmVmaXggPSBcIlwiO1xuICAgIGlmIChzbHVnc3RyKSB7XG4gICAgICBwcmVmaXggPSBgL3IvJHtzdWJyZWRkaXR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZml4ID0gYGA7XG4gICAgfVxuXG4gICAgbmF2aWdhdGlvbiA9IHRydWU7XG4gICAgYWhyZWYoXG4gICAgICBgJHtwcmVmaXh9L3NlYXJjaD9xPSR7ZmlsdGVyVmFsdWV9JnJlc3RyaWN0X3NyPW9uJmluY2x1ZGVfb3Zlcl8xOD1vbiZzb3J0PXJlbGV2YW50JnQ9YWxsYFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlU2V0dGluZ3MoKSB7XG4gICAgc2hvd1NldHRpbmdzID0gZmFsc2U7XG4gIH1cblxuICBcblxuICBhc3luYyBmdW5jdGlvbiBleHBhbmRGaWx0ZXIoKSB7XG4gICAgZmlsdGVyRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgYXdhaXQgdGljaygpO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0IGlmIHdlIGp1c3Qgb3BlbmVkIGl0XG4gICAgaWYgKGZpbHRlckV4cGFuZGVkKSBmaWx0ZXJSZWYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgZmlsdGVyRXhwYW5kZWQgPSAhZmlsdGVyRXhwYW5kZWQ7XG5cbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgLy8gRm9jdXMgdGhlIGlucHV0IGlmIHdlIGp1c3Qgb3BlbmVkIGl0XG4gICAgaWYgKGZpbHRlckV4cGFuZGVkKSBmaWx0ZXJSZWYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkb3dubG9hZEZpbGVzKCkge1xuICAgIHdpbmRvdy5vcGVuKFwiL2Rvd25sb2FkXCIsIFwiX2JsYW5rXCIpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2h1ZmZsZUZpbGVzKCkge1xuICAgIGRpc3BsYXlwb3N0cyA9IHNodWZmbGUoZGlzcGxheXBvc3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5NZWRpYSgpIHtcbiAgICB3aW5kb3cub3BlbihjdXJycG9zdC5wZXJtYWxpbmssIFwiX2JsYW5rXCIpO1xuICB9XG5cbiAgXG5cbiAgZnVuY3Rpb24gY29weVNyY1RvQ2xpcGJvYXJkKCkge1xuICAgIGxldCB0ZXh0O1xuICAgIGlmIChcbiAgICAgIGN1cnJwb3N0LnVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly92LnJlZGQuaXQvXCIpIHx8XG4gICAgICBjdXJycG9zdC51cmwuaW5jbHVkZXMoXCJyZWRnaWZzLmNvbVwiKVxuICAgICkge1xuICAgICAgdGV4dCA9IGN1cnJwb3N0LnByZXZpZXcudmlkLm1wNDtcbiAgICB9IGVsc2UgaWYgKGN1cnJwb3N0LmlzX2ltYWdlICYmICFjdXJycG9zdC5pc19hbGJ1bSkge1xuICAgICAgdGV4dCA9IGN1cnJwb3N0LnVybDtcbiAgICB9IGVsc2UgaWYgKGN1cnJwb3N0LmlzX3ZpZGVvKSB7XG4gICAgICB0ZXh0ID0gY3VycnBvc3QudXJsO1xuICAgIH0gZWxzZSBpZiAoY3VycnBvc3QuaXNfYWxidW0pIHtcbiAgICAgIGlmIChjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bVthbGJ1bWluZGV4XS5pc192aWRlbykge1xuICAgICAgICB0ZXh0ID0gY3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uaGlyZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gY3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uaGlyZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgLndyaXRlVGV4dCh0ZXh0KVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coYENvcGllZDogJHt0ZXh0fWApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU92ZXIxOCgpIHtcbiAgICAkb3ZlcjE4ID0gJG92ZXIxOCArIDE7XG5cbiAgICBpZiAoJG92ZXIxOCA9PSAzKSB7XG4gICAgICAkb3ZlcjE4ID0gMDtcbiAgICB9XG4gICAgb3ZlcjE4LnNldCgkb3ZlcjE4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEZhdm9yaXRlKHJlbW92ZUFsbEZyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICBza2lwUmVuZGVyVmlkZW8gPSB0cnVlO1xuXG4gICAgZm9yIChjb25zdCBbaSwgcG9zdF0gb2YgZGlzcGxheXBvc3RzLmVudHJpZXMoKSkge1xuICAgICAgLy8gRm9yIHJlYWN0aXZpdHlcbiAgICAgIGRpc3BsYXlwb3N0c1tpXS5mYXZvcml0ZSA9IGZhbHNlO1xuXG4gICAgICAvLyBJZiByZW1vdmVBbGxGcm9tTG9jYWxTdG9yYWdlIGlzIHRydWUsIHRoZW4gd2UnbGwgcmVtb3ZlIGV2ZXJ5dGhpZ24gaW4gb25lIHNob3RcbiAgICAgIC8vIG5vIG5lZWQgdG8gZG8gaXQgb25lIGJ5IG9uZVxuICAgICAgaWYgKHJlbW92ZUFsbEZyb21Mb2NhbFN0b3JhZ2UgPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gTG9jYWxzdG9yYWdlXG4gICAgICAgICRmYXZvcml0ZVtwb3N0LnVybF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICRmYXZvcml0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJGZhdm9yaXRlKSk7XG5cbiAgICAgICAgZmF2b3JpdGUuc2V0KCRmYXZvcml0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbW92ZUFsbEZyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGZhdm9yaXRlLnNldCh7fSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlKCkge1xuICAgIHNraXBSZW5kZXJWaWRlbyA9IHRydWU7XG4gICAgZGlzcGxheXBvc3RzW2luZGV4XS5mYXZvcml0ZSA9ICFkaXNwbGF5cG9zdHNbaW5kZXhdLmZhdm9yaXRlO1xuXG4gICAgbGV0IHVybCA9IGRpc3BsYXlwb3N0c1tpbmRleF0udXJsO1xuICAgICRmYXZvcml0ZVt1cmxdID0gdW5kZWZpbmVkO1xuICAgICRmYXZvcml0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJGZhdm9yaXRlKSk7XG4gICAgJGZhdm9yaXRlW3VybF0gPSBkaXNwbGF5cG9zdHNbaW5kZXhdO1xuICAgIGZhdm9yaXRlLnNldCgkZmF2b3JpdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxidW1QcmV2KCkge1xuICAgIGlmICghY3VycnBvc3QuaXNfYWxidW0pIHJldHVybjtcbiAgICBhbGJ1bWluZGV4IC09IDE7XG4gICAgaWYgKCRhdXRvcGxheSkgc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRW5kT2ZBbGJ1bSgpIHtcbiAgICByZXR1cm4gYWxidW1pbmRleCA9PSBjdXJycG9zdC5wcmV2aWV3LmltZy5hbGJ1bS5sZW5ndGggLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdGFydE9mQWxidW0oKSB7XG4gICAgcmV0dXJuIGFsYnVtaW5kZXggPT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsYnVtTmV4dCgpIHtcbiAgICBpZiAoIWN1cnJwb3N0LmlzX2FsYnVtKSByZXR1cm47XG5cbiAgICBpZiAoaXNFbmRPZkFsYnVtKCkpIHtcbiAgICAgIGFsYnVtaW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGJ1bWluZGV4ICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKCRhdXRvcGxheSkgc3RvcEFuZFN0YXJ0QXV0b1BsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdoZWVsKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgIG5leHQoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHByZXYoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlkb3duKGV2ZW50KSB7XG4gICAgLy8gdXBcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgICAgbmV4dCgpO1xuICAgIH1cblxuICAgIC8vIGRvd25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgcHJldigpO1xuICAgIH1cblxuICAgIC8vIHNcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4Mykge1xuICAgICAgdG9nZ2xlTXV0ZWQoKTtcbiAgICB9XG5cbiAgICAvLyBxLCBwXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gODEgfHwgZXZlbnQua2V5Q29kZSA9PSA4MCkge1xuICAgICAgdG9nZ2xlQXV0b1BsYXkoKTtcbiAgICB9XG5cbiAgICAvLyBmXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNzAgJiYgIWV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICB9XG5cbiAgICAvLyBzbGFzaCwgZlxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDE5MSkge1xuICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAvLyBXZSBuZWVkIHRoaXMsIG90aGVyd2lzZSBmaWx0ZXIgYm94IHdpbGwgaGF2ZSAnLycgYmVjYXVzZSBvZiBhdXRvZm9jdXNcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLy8geFxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDg4KSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgcmVtb3ZlQWxsRmF2b3JpdGUoZXZlbnQuY3RybEtleSk7IC8vIGlmIGN0cmwrc2hpZnQreCBpcyByZW1vdmUgZXZlcnl0aGluZyBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlRmF2b3JpdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG9cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA3OSkge1xuICAgICAgb3Blbk1lZGlhKCk7XG4gICAgfVxuXG4gICAgLy8gaVxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDczKSB7XG4gICAgICBvcGVuTWVkaWEoKTtcbiAgICB9XG5cbiAgICAvLyBvXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNzkpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGN1cnJwb3N0LnBlcm1hbGluaywgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgLy8gaFxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDcyKSB7XG4gICAgICB0b2dnbGVVSVZpc2libGl0eSgpO1xuICAgIH1cblxuICAgIC8vIHRcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4NCkge1xuICAgICAgdG9nZ2xlVGl0bGVWaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgLy8gdlxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDExOCkge1xuICAgICAgdG9nZ2xlSW1hZ2VWaWRlbygpO1xuICAgIH1cblxuICAgIC8vIGNcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA2Nykge1xuICAgICAgY29weVNyY1RvQ2xpcGJvYXJkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbiA9IGV2ZW50LmtleUNvZGUgLSA0ODtcbiAgICBpZiAobiA+PSAwICYmIG4gPD0gMykge1xuICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9wbGF5ZXJpZCcpO1xuICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSBuICogdmlkZW8uZHVyYXRpb24gLyA0O1xuICAgIH1cblxuICAgIC8vIExlZnQgQXJyb3csIGEsIGssIFBhZ2UtdXBcbiAgICBpZiAoXG4gICAgICBldmVudC5rZXlDb2RlID09IDM3IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDY1IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDc1IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDMzXG4gICAgKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9wbGF5ZXJpZCcpO1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSAtPSA1O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmlnaHQgQXJyb3csIGQsIGosIFNwYWNlLCBQYWdlLWRvd25cbiAgICBlbHNlIGlmIChcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gMzkgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gNjggfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gNzQgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gMzIgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gMzRcbiAgICApIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb3BsYXllcmlkJyk7XG4gICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lICs9IDU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtTmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6d2luZG93IG9uOmtleWRvd249e2tleWRvd259IG9uOndoZWVsPXt3aGVlbH0gLz5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPnR1bWJscnB4IC0ge3NsdWdzdHIgPyBgdC8ke3NsdWdzdHJ9YCA6IFwidHVtYmxyLmNvbVwifTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwid3JhcHBlclwiIGNsYXNzOmhpZGUtY3Vyc29yPVwie2hpZGVDdXJzb3J9XCI+XG4gIDxkaXYgY2xhc3M9XCJoZXJvXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCIgY2xhc3M6aGlkZT1cInshdWlWaXNpYmxlIHx8ICF0aXRsZVZpc2libGV9XCIgY2xhc3M6ZmF2b3JpdGU9XCJ7Y3VycnBvc3QuZmF2b3JpdGV9XCI+XG4gICAgICB7I2lmIGN1cnJwb3N0LmRpbXMgJiYgY3VycnBvc3QuZGltcy53aWR0aCA+IDB9XG4gICAgICAgIHt0aXRsZX0gKHtjdXJycG9zdC5kaW1zLndpZHRofXh7Y3VycnBvc3QuZGltcy5oZWlnaHR9KVxuICAgICAgezplbHNlfVxuICAgICAgICB7dGl0bGV9XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiBjdXJycG9zdC5zdWJyZWRkaXR9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJyZWRkaXRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInVzZXJcIj57Y3VycnBvc3QuYXV0aG9ycH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3NcIj5cbiAgICAgIFxuICAgICAgPHNwYW4gY2xhc3M9XCJidG4gY29nXCIgb246Y2xpY2s9XCJ7dG9nZ2xlU2V0dGluZ3N9XCIgY2xhc3M6c2hvd1NldHRpbmdzPVwie3Nob3dTZXR0aW5nc31cIiBjbGFzczpoaWRlPVwie3VpVmlzaWJsZSA9PSBmYWxzZX1cIj5cbiAgICAgICAgPEljb24gaWNvbj1cIntmYVNldHRpbmdzfVwiPjwvSWNvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZcIiBjbGFzczpoaWRlPVwie3VpVmlzaWJsZSA9PSBmYWxzZX1cIj5cbiAgICAgICAgPFNldHRpbmdzIGJpbmQ6c2hvd1NldHRpbmdzIG9uOmFwaUtleUNoYW5nZT17cmVsb2FkRGF0YX0+PC9TZXR0aW5ncz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLW1lZGlhLWNvbnRhaW5lclwiPlxuICAgICAgeyNpZiBjdXJycG9zdC5pc19pbWFnZSAmJiAhY3VycnBvc3QuaXNfYWxidW19XG4gICAgICAgIDxpbWcgc3JjPVwie2N1cnJwb3N0LnByZXZpZXcuaW1nLmRlZmF1bHR9XCIgYWx0PVwie2N1cnJwb3N0LnRpdGxlfVwiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDsgb2JqZWN0LWZpdDogY29udGFpbjtcIj5cbiAgICAgIHs6ZWxzZSBpZiBjdXJycG9zdC5pc192aWRlbyAmJiByZW5kZXJWaWRlb31cbiAgICAgICAgPHZpZGVvIGNsYXNzPVwidmlkZW9cIiBhdXRvcGxheSBsb29wPVwieyEkYXV0b3BsYXl9XCIgcGxheXNpbmxpbmUgbXV0ZWQ9XCJ7JG11dGVkfVwiIG9uOmVuZGVkPVwie3ZpZGVvZW5kZWR9XCIgb246ZGJsY2xpY2s9XCJ7dG9nZ2xlRnVsbHNjcmVlbn1cIiBjbGFzczpoaWRlLWN1cnNvcj1cIntoaWRlQ3Vyc29yfVwiIG9uOm1vdXNlbW92ZT1cInt0b2dnbGVIaWRlQ3Vyc29yfVwiIGlkPVwidmlkZW9wbGF5ZXJpZFwiIG9uOmNsaWNrPVwie29uVmlkZW9QbGF5ZXJDbGlja2VkfVwiPlxuICAgICAgICAgIHsjaWYgJGxvcmVzfVxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy52aWQubG9yZXN9XCI+XG4gICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgeyNpZiBjdXJycG9zdC5wcmV2aWV3LnZpZC53ZWJtfVxuICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LnZpZC53ZWJtfVwiPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHsjaWYgY3VycnBvc3QucHJldmlldy52aWQubXA0fVxuICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIntjdXJycG9zdC5wcmV2aWV3LnZpZC5tcDR9XCI+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvdmlkZW8+XG4gICAgICB7OmVsc2UgaWYgY3VycnBvc3QuaXNfYWxidW19XG4gICAgICAgIHsjaWYgY3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uaXNfdmlkZW99XG4gICAgICAgICAgPHZpZGVvIGNsYXNzPVwidmlkZW9cIiBhdXRvcGxheSBsb29wPVwieyEkYXV0b3BsYXl9XCIgcGxheXNpbmxpbmUgbXV0ZWQ9XCJ7JG11dGVkfVwiIG9uOmVuZGVkPVwie3ZpZGVvZW5kZWR9XCIgb246ZGJsY2xpY2s9XCJ7dG9nZ2xlRnVsbHNjcmVlbn1cIiBjbGFzczpoaWRlLWN1cnNvcj1cIntoaWRlQ3Vyc29yfVwiIG9uOm1vdXNlbW92ZT1cInt0b2dnbGVIaWRlQ3Vyc29yfVwiIG9uOmNsaWNrPVwie29uVmlkZW9QbGF5ZXJDbGlja2VkfVwiPlxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7Y3VycnBvc3QucHJldmlldy5pbWcuYWxidW1bYWxidW1pbmRleF0uaGlyZXN9XCI+XG4gICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgIDxpbWcgc3JjPVwie2N1cnJwb3N0LnByZXZpZXcuaW1nLmFsYnVtW2FsYnVtaW5kZXhdLmRlZmF1bHR9XCIgYWx0PVwie2N1cnJwb3N0LnRpdGxlfVwiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDsgb2JqZWN0LWZpdDogY29udGFpbjtcIj5cbiAgICAgICAgey9pZn1cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gICAgXG4gICAgeyNpZiBkaXNwbGF5cG9zdHMubGVuZ3RoIHx8IHBvc3RzLmxlbmd0aH1cbiAgICAgIDxkaXYgY2xhc3M9XCJnb3RvXCIgY2xhc3M6dGlueWdvdG89XCJ7dGlueWdvdG99XCIgY2xhc3M6aGlkZT1cInt1aVZpc2libGUgPT0gZmFsc2V9XCIgYmluZDpjbGllbnRXaWR0aD1cInskX2dvdG9FbFdpZHRofVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRud3JhcHBlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIHBsYXlwYXVzZSB0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cInthdXRvcGxheXN0cn1cIlxuICAgICAgICAgICAgY2xhc3M6cGxheT1cInskYXV0b3BsYXl9XCJcbiAgICAgICAgICAgIG9uOmNsaWNrPVwie3RvZ2dsZUF1dG9QbGF5fVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cInskYXV0b3BsYXkgPyBmYVBhdXNlIDogZmFQbGF5fVwiPjwvSWNvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gZG93bmxvYWQgdG9vbHRpcFwiXG4gICAgICAgICAgICBvbjpjbGljaz1cIntkb3dubG9hZEZpbGVzfVwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJ7ZG93bmxvYWRzdHJ9XCJcbiAgICAgICAgICAgIGNsYXNzOmRscmVhZHk9XCJ7bnVtRmF2b3JpdGV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhRG93bmxvYWR9XCI+PC9JY29uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBkaWNlIHRvb2x0aXBcIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7c2h1ZmZsZUZpbGVzfVwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJTaHVmZmxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhRGljZX1cIj48L0ljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGltYWdldmlkZW8gdG9vbHRpcFwiXG4gICAgICAgICAgICBkYXRhLXRvb2x0aXA9XCJ7aW1hZ2VWaWRlb1N0cn1cIlxuICAgICAgICAgICAgb246Y2xpY2s9XCJ7dG9nZ2xlSW1hZ2VWaWRlb31cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsjaWYgJGltYWdlVmlkZW8gPT0gMH1cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYUltYWdlVmlkZW99XCI+PC9JY29uPlxuICAgICAgICAgICAgezplbHNlIGlmICRpbWFnZVZpZGVvID09IDF9XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFWaWRlb31cIj48L0ljb24+XG4gICAgICAgICAgICB7OmVsc2UgaWYgJGltYWdlVmlkZW8gPT0gMn1cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cIntmYUltYWdlfVwiPjwvSWNvbj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIG11dGVkIHRvb2x0aXBcIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwie211dGVkc3RyfVwiXG4gICAgICAgICAgICBvbjpjbGljaz1cInt0b2dnbGVNdXRlZH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJ7JG11dGVkID8gZmFTb3VuZE9mZiA6IGZhU291bmRPbn1cIj48L0ljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsjaWYgdGlueWdvdG99XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biByZWxvYWQgdG9vbHRpcFwiIGRhdGEtdG9vbHRpcD1cIntyZWxvYWRzdHJ9XCIgb246Y2xpY2s9XCJ7bG9hZE1vcmV9XCIgY2xhc3M6bG9hZGVycm9yPVwie2xvYWRFcnJvcn1cIj5cbiAgICAgICAgICAgICAgeyNpZiBsb2FkaW5nfVxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFTcGlubmVyfVwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFTeW5jfVwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGZpbHRlciB0b29sdGlwXCJcbiAgICAgICAgICAgIGNsYXNzOmZpbHRlckV4cGFuZGVkPVwie2ZpbHRlckV4cGFuZGVkfVwiXG4gICAgICAgICAgICBvbjpjbGljaz1cInt0b2dnbGVGaWx0ZXJ9XCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkZpbHRlciAoIC8gKVwiXG4gICAgICAgICAgICBiaW5kOnRoaXM9XCJ7ZmlsdGVyUmVmfVwiXG4gICAgICAgICAgICBjbGFzczpkbHJlYWR5PVwie251bUZhdm9yaXRlfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyNpZiBmaWx0ZXJFeHBhbmRlZH1cbiAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9XCJ7ZmlsdGVyVmFsdWV9XCIgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uIG9uOmtleWRvd258c3RvcFByb3BhZ2F0aW9uIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJ7ZmFTZWFyY2h9XCI+PC9JY29uPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgeyNpZiBmaWx0ZXJWYWx1ZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGRlZXBzZWFyY2ggdG9vbHRpcFwiIGRhdGEtdG9vbHRpcD1cIntkZWVwc2VhcmNoc3RyfVwiIG9uOmNsaWNrPVwie2dvdG9EZWVwU2VhcmNofVwiPlxuICAgICAgICAgICAgICA8cD5kZWVwIHNlYXJjaCDwn6CSPC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibnVtc3dyYXBwZXJcIj5cbiAgICAgICAgICB7I2VhY2ggZGlzcGxheXBvc3RzIGFzIHBvc3QsIGkgKHBvc3QuaWQgKyBwb3N0LnVybCl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bXNcIlxuICAgICAgICAgICAgICBjbGFzczpjdXJybnVtPVwie2luZGV4ID09PSBpfVwiXG4gICAgICAgICAgICAgIGNsYXNzOmFsYnVtPVwie2N1cnJwb3N0LmlzX2FsYnVtfVwiXG4gICAgICAgICAgICAgIGNsYXNzOmZhdm9yaXRlPVwie2Rpc3BsYXlwb3N0c1tpXS5mYXZvcml0ZX1cIlxuICAgICAgICAgICAgICBjbGFzczpvdmVyMTg9XCJ7ZGlzcGxheXBvc3RzW2ldLm92ZXIxOH1cIlxuICAgICAgICAgICAgICBvbjpjbGljaz1cIntmdW5jdGlvbigpe2dvdG8oaSl9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzbWFsbFwiIGFsdD1cIntkaXNwbGF5cG9zdHNbaV0udGl0bGV9XCIgc3JjPVwie2Rpc3BsYXlwb3N0c1tpXS50aHVtYm5haWx9XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic21hbGxcIiBjbGFzczpjdXJyPVwie2luZGV4ID09PSBpfVwiIGNsYXNzOmFsYnVtPVwie2N1cnJwb3N0LmlzX2FsYnVtfVwiPntpKzF9PC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICB7I2lmICF0aW55Z290b31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheWluZm9cIiBjbGFzczpmaWx0ZXJFeHBhbmRlZD1cIntmaWx0ZXJWYWx1ZX1cIj5cbiAgICAgICAgICAgICAgPHA+e2Rpc3BsYXlwb3N0cy5sZW5ndGh9L3twb3N0cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gcmVsb2FkIHRvb2x0aXBcIiBkYXRhLXRvb2x0aXA9XCJ7cmVsb2Fkc3RyfVwiIG9uOmNsaWNrPVwie2xvYWRNb3JlfVwiIGNsYXNzOmxvYWRlcnJvcj1cIntsb2FkRXJyb3J9XCI+XG4gICAgICAgICAgICAgIHsjaWYgbG9hZGluZ31cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3Bpbm5lcn1cIj48L0ljb24+XG4gICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwie2ZhU3luY31cIj48L0ljb24+XG4gICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbjwvZGl2PlxueyNpZiAkcHJlZmV0Y2h9XG4gIDxkaXYgY2xhc3M9XCJwcmVmZXRjaFwiPlxuICAgIHsjZWFjaCBuZXh0dXJscyBhcyBuZXh0dXJsIChuZXh0dXJsLnByZXZpZXcuaW1nLmRlZmF1bHQpfVxuICAgICAgeyNpZiAkaGlyZXN9XG4gICAgICAgIHsjaWYgbmV4dHVybC5pc19hbGJ1bX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoLWhpcmVzXCIgc3JjPVwie25leHR1cmwucHJldmlldy5pbWcuYWxidW1bMF0uaGlyZXN9XCI+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoLWhpcmVzXCIgc3JjPVwie25leHR1cmwudXJsfVwiPlxuICAgICAgICB7L2lmfVxuICAgICAgezplbHNlfVxuICAgICAgICB7I2lmIG5leHR1cmwuaXNfYWxidW19XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaFwiIHNyYz1cIntuZXh0dXJsLnByZXZpZXcuaW1nLmFsYnVtWzBdLmRlZmF1bHR9XCI+XG4gICAgICAgIHs6ZWxzZSBpZiBuZXh0dXJsLnByZXZpZXd9XG4gICAgICAgICAgPGltZyBhbHQ9XCJwcmVmZXRjaFwiIHNyYz1cIntuZXh0dXJsLnByZXZpZXcuaW1nLmRlZmF1bHR9XCI+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8aW1nIGFsdD1cInByZWZldGNoXCIgc3JjPVwie25leHR1cmwuZGVmYXVsdH1cIj5cbiAgICAgICAgey9pZn1cbiAgICAgIHsvaWZ9XG4gICAgICB7I2lmIG5leHR1cmwuaXNfdmlkZW99XG4gICAgICAgIDx2aWRlbyBwbGF5c2lubGluZSBhdXRvcGxheSBsb29wIG11dGVkPlxuICAgICAgICAgIHsjaWYgJGxvcmVzfVxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LnZpZC5sb3Jlc31cIj5cbiAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICB7I2lmIG5leHR1cmwucHJldmlld31cbiAgICAgICAgICAgICAgeyNpZiBuZXh0dXJsLnByZXZpZXcudmlkLndlYm19XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ7bmV4dHVybC5wcmV2aWV3LnZpZC53ZWJtfVwiPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICB7I2lmIG5leHR1cmwucHJldmlldy52aWQubXA0fVxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwie25leHR1cmwucHJldmlldy52aWQubXA0fVwiPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIntuZXh0dXJsLmRlZmF1bHR9XCI+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvdmlkZW8+XG4gICAgICB7L2lmfVxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG57L2lmfVxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbjpnbG9iYWwoaHRtbCksIDpnbG9iYWwoYm9keSlcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxuICBvdmVyZmxvdzogaGlkZGVuXG5cbkBtaXhpbiBob3ZlcigpXG4gIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjpjb2Fyc2UpXG4gICAgJjpob3ZlclxuICAgICAgQGNvbnRlbnRcblxuJHllbGxvdzogI2Y5YWIwMFxuXG4kdGV4dC1jb2xvcjogI2ZhZmFmYVxuJGFjY2VudC1jb2xvcjogd2hpdGVcbiRmYXZvcml0ZS1jb2xvcjogI2ZiYmMwNFxuJGZhdm9yaXRlLWJvcmRlci1jb2xvcjogI2UzNzQwMFxuJG92ZXIxOC1jb2xvcjogI2VhNDMzNVxuJG92ZXIxOC1ib3JkZXItY29sb3I6ICNlYTQzMzVcbiRpc211bHRpLWNvbG9yOiAjZWE0MzM1XG4kaXNub3RtdWx0aS1jb2xvcjogIzM0YTg1M1xuXG4uaGlkZS1jdXJzb3JcbiAgY3Vyc29yOiBub25lXG5cbi5oaWRlXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxuXG4ud3JhcHBlclxuICBoZWlnaHQ6IDEwMHZoXG5cbiAgZGlzcGxheTogZ3JpZFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4gIC5oZXJvXG4gICAgaGVpZ2h0OiAxMDB2aFxuICAgIHdpZHRoOiAxMDB2d1xuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4gICAgLnRpdGxlXG4gICAgICB6LWluZGV4OiAxMFxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBsZWZ0OiAxcmVtXG4gICAgICB0b3A6IDBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KVxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yXG4gICAgICBmb250LXNpemU6IDEuNXJlbVxuICAgICAgbWF4LXdpZHRoOiA3NyVcbiAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuXG4gICAgLnNldHRpbmdzXG4gICAgICB6LWluZGV4OiAxMFxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICB0b3A6IDBcbiAgICAgIHJpZ2h0OiAwXG4gICAgICBjb2xvcjogJHRleHQtY29sb3JcbiAgICAgIGZvbnQtc2l6ZTogMXJlbVxuICAgICAgcGFkZGluZzogMS41cmVtIDJyZW1cblxuICAgIC5tYWluLW1lZGlhLWNvbnRhaW5lclxuICAgICAgZmxleC1ncm93OiAxXG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgd2lkdGg6IDEwMCVcbiAgICAgIGhlaWdodDogMTAwJVxuXG4gICAgICBpbWcsIHZpZGVvXG4gICAgICAgIG1heC13aWR0aDogMTAwJVxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW5cblxuICAgIC5nb3RvXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgICAgei1pbmRleDogNVxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNilcbiAgICAgIGJvdHRvbTogMFxuICAgICAgZGlzcGxheTogZ3JpZFxuICAgICAgZ3JpZC1yb3ctZ2FwOiA1cHhcbiAgICAgIHBhZGRpbmc6IDFyZW0gMTFyZW1cbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yXG4gICAgICB3aWR0aDogMTAwJVxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzJweCwgMWZyKSlcblxuICAgICAgJi50aW55Z290b1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyXG5cbiAgICAgICAgLmJ0bndyYXBwZXJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMnB4LCAxZnIpKVxuICAgICAgICAgIGRpc3BsYXk6IGdyaWRcblxuICAgICAgICAubnVtc3dyYXBwZXJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFyZW0sIGF1dG8pKVxuICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWRcbiAgICAgICAgICBncmlkLWdhcDogMC4ycmVtXG5cblxuICAgICAgICAgIC5udW1zXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSh3aGl0ZSwgMzAlKVxuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgICAgICYuY3Vycm51bVxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgICAgICAgJi5hbGJ1bVxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgICAgICYuZmF2b3JpdGVcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmYXZvcml0ZS1jb2xvclxuXG4gICAgICAgICAgICAmLm92ZXIxOFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJG92ZXIxOC1jb2xvclxuXG4gICAgICAgICAgcFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuXG4gICAgICAgICAgLnJlbG9hZFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMlxuXG4gICAgICAuYnRud3JhcHBlciwgLm51bXN3cmFwcGVyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzXG5cbiAgICAgIC5idG53cmFwcGVyXG5cbiAgICAgICAgLnJlbG9hZFxuICAgICAgICAgIGJvdHRvbTogLTFweFxuXG4gICAgICAubnVtc3dyYXBwZXJcblxuICAgICAgICAuZGlzcGxheWluZm9cbiAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW1cbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHhcblxuICAgICAgICAgIHBcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgIC5idG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHhcbiAgICAgICAgY29sb3I6IHJnYmEod2hpdGUsIDMwJSlcblxuICAgICAgICAmLnJlbG9hZFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgICAgICAgJi5sb2FkZXJyb3JcbiAgICAgICAgICAgIGNvbG9yOiAkb3ZlcjE4LWNvbG9yXG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLmRlZXBzZWFyY2hcbiAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0XG4gICAgICAgICAgYm90dG9tOiAycHhcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuXG4gICAgICAgICAgJjpob3ZlciBwXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudC1jb2xvclxuXG4gICAgICAgICAgcFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbVxuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkYWNjZW50LWNvbG9yLCAzMCUpXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGFjY2VudC1jb2xvciwgMzAlKVxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW1cblxuICAgICAgICAmLm92ZXIxOHdyYXBwZXJcblxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuXG4gICAgICAgICAgJi5vdmVyMThcblxuICAgICAgICAgICAgcFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHdoaXRlLCAzMCUpXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKHdoaXRlLCAzMCUpXG5cbiAgICAgICAgICAgICAgQGluY2x1ZGUgaG92ZXIoKVxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEod2hpdGUsIDYwJSlcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgNjAlKVxuXG4gICAgICAgICAgcFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEzcHhcbiAgICAgICAgICAgIHdpZHRoOiA1OHB4XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWZcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgICAgdG9wOiAtMXB4XG5cbiAgICAgICAgJi5pbWFnZXZpZGVvXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICYubGF5b3V0XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuXG4gICAgICAgICAgJi5hY3RpdmVcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgXG5cbiAgICAgICAgJi5tdXRlZFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXG4gICAgICAgICAgYm90dG9tOiAycHhcbiAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLnBvcnRyYWl0bGFuZHNjYXBlXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICAgJiA6Z2xvYmFsKC5sYW5kc2NhcGUpXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpXG5cbiAgICAgICAgJi5kaWNlXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICBib3R0b206IDJweFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICYuZG93bmxvYWRcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHRcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbVxuICAgICAgICAgIGJvdHRvbTogMnB4XG5cbiAgICAgICAgICAmLmRscmVhZHlcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRmYXZvcml0ZS1jb2xvciwgOTAlKVxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICAgICAgICAgIEBpbmNsdWRlIGhvdmVyKClcbiAgICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3dcblxuICAgICAgICAmLnBsYXlwYXVzZVxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIHRvcDogMXB4XG5cbiAgICAgICAgICAvLyBXaGVuIGl0IGlzIHBsYXkgaWNvbiwgbWFrZSBpdCB3aGl0ZVxuICAgICAgICAgICYucGxheVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAmLmZpbHRlclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIHRvcDogMXB4XG5cbiAgICAgICAgICBAaW5jbHVkZSBob3ZlcigpXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgICAgICAgICYuZmlsdGVyLmZpbHRlckV4cGFuZGVkXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAzXG4gICAgICAgICAgICB0b3A6IC0ycHhcblxuICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg6IDg1JVxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHdoaXRlLCA2MCUpXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlXG5cbiAgICAgIHNwYW5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICAgICAgJi5mYXZvcml0ZVxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkZmF2b3JpdGUtY29sb3JcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcbiAgICAgICAgICAgIGNvbG9yOiAkZmF2b3JpdGUtY29sb3JcblxuICAgICAgICAgIGltZy5zbWFsbFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZmF2b3JpdGUtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnRcblxuICAgICAgICAmLm92ZXIxOFxuXG4gICAgICAgICAgcC5zbWFsbFxuICAgICAgICAgICAgY29sb3I6ICRvdmVyMTgtY29sb3JcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJG92ZXIxOC1jb2xvclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRvdmVyMTgtYm9yZGVyLWNvbG9yXG5cbiAgICAgICAgICBpbWcuc21hbGxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG92ZXIxOC1ib3JkZXItY29sb3JcblxuICAgICAgICBwLnNtYWxsXG4gICAgICAgICAgbWFyZ2luOiAwIDJweFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApXG5cbiAgICAgICAgICAmLmN1cnJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQtY29sb3IgIWltcG9ydGFudFxuXG4gICAgICAgICAgICAmLmFsYnVtXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgJGFjY2VudC1jb2xvciAhaW1wb3J0YW50XG5cbiAgICAgICAgaW1nLnNtYWxsXG4gICAgICAgICAgei1pbmRleDogMTBcbiAgICAgICAgICB3aWR0aDogMHB4XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgIGJvdHRvbTogMzVweFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihibGFjaywgMzAlKVxuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHhcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyXG5cbiAgICAgICAgJjpob3ZlciBwLnNtYWxsXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQtY29sb3IgIWltcG9ydGFudFxuXG4gICAgICAgICY6aG92ZXIgaW1nXG4gICAgICAgICAgd2lkdGg6IGF1dG9cbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4XG4gICAgICAgICAgb3BhY2l0eTogMVxuXG4gICAgLnN1YnJlZGRpdHNlYXJjaHdyYXBwZXJcblxuICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgd2lkdGg6IDEwMHZ3XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KVxuICAgICAgei1pbmRleDoxNVxuXG4gICAgICAuc3VicmVkZGl0c2VhcmNoXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBsZWZ0OiA1MCVcbiAgICAgICAgdG9wOiA1MCVcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbiAgICAgICAgZGlzcGxheTogZ3JpZFxuXG5cbiAgICAgICAgLmhlYWRlciBcbiAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgY29sb3I6IHdoaXRlXG5cblxuICAgICAgOmdsb2JhbCguaW5wdXQtY29udGFpbmVyKVxuICAgICAgICBoZWlnaHQ6IDQwcHhcblxuICAgICAgOmdsb2JhbCguaW5wdXQtY29udGFpbmVyIGlucHV0KVxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHhcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSh3aGl0ZSwgNjAlKVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcblxuICAgICAgOmdsb2JhbCguYXV0b2NvbXBsZXRlLWxpc3QpXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTUgKiAoMXJlbSArIDEwcHgpIC0gMTVweCkgIWltcG9ydGFudFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICAgICAgICBib3JkZXI6IG5vbmVcblxuICAgICAgOmdsb2JhbCguYXV0b2NvbXBsZXRlLWxpc3QgLmF1dG9jb21wbGV0ZS1saXN0LWl0ZW0pXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdCAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1jcmVhdGUpXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuXG4gICAgICA6Z2xvYmFsKC5hdXRvY29tcGxldGUtbGlzdCAuYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS5zZWxlY3RlZClcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YWIwMDM4XG5cbiAgICAgIDpnbG9iYWwoLmF1dG9jb21wbGV0ZS1saXN0IC5hdXRvY29tcGxldGUtbGlzdC1pdGVtIGIpXG4gICAgICAgIGNvbG9yOiAkeWVsbG93XG5cbiAgICAuaW1hZ2VcbiAgICAgIGhlaWdodDogMTAwdmhcbiAgICAgIHdpZHRoOiAxMDB2d1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcblxuICAgIC52aWRlb1xuICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgd2lkdGg6IDEwMHZ3XG4gICAgICBvYmplY3QtZml0OiBjb250YWluXG5cbiAgLnByZWZldGNoXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgdG9wOiAwXG4gICAgbGVmdDogMFxuICAgIHdpZHRoOiAxcHhcbiAgICBoZWlnaHQ6IDFweFxuICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICBvcGFjaXR5OiAwXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweClcbiAgICAuaGVyb1xuICAgICAgLmdvdG9cbiAgICAgICAgcGFkZGluZzogMXJlbSAxMXJlbSAxcmVtIDFyZW1cblxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpXG4gICAgLmhlcm9cbiAgICAgIC5nb3RvXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggMzJweCAzMnB4IDMycHggMzJweCByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMnB4LCAxZnIpKVxuICAgICAgICAvL2dyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmclxuXG4gICAgICAgICYudGlueWdvdG9cblxuICAgICAgICAgIC5udW1zXG4gICAgICAgICAgICBoZWlnaHQ6IDAuMXJlbSAhaW1wb3J0YW50XG4gICAgICAgIGltZy5zbWFsbFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmVcblxuLnRvb2x0aXBcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6IDJcbiAgY3Vyc29yOiBwb2ludGVyXG5cbi50dGJlZm9yZVxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgYm90dG9tOiAxMjAlXG4gIGxlZnQ6IDUwJVxuICBtYXJnaW4tYm90dG9tOiA1cHhcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4XG4gIHBhZGRpbmc6IDVweCA0cHhcbiAgd2lkdGg6IG1heC1jb250ZW50XG4gIGJvcmRlci1yYWRpdXM6IDNweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICBjb2xvcjogI2ZmZlxuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDkwJSlcbiAgY29sb3I6IGJsYWNrXG5cbiAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICBmb250LXNpemU6IDAuOHJlbVxuICBsaW5lLWhlaWdodDogMS4yXG5cbi50dGFmdGVyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDEyMCVcbiAgbGVmdDogNTAlXG4gIG1hcmdpbi1sZWZ0OiAtNXB4XG4gIHdpZHRoOiAwXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKHdoaXRlLCA5MCUpXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnRcbiAgY29udGVudDogXCIgXCJcbiAgZm9udC1zaXplOiAwXG4gIGxpbmUtaGVpZ2h0OiAwXG5cbi50b29sdGlwXG4gICY6YmVmb3JlLCAmOmFmdGVyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXG4gICAgb3BhY2l0eTogMFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG5cbiAgJjpiZWZvcmVcbiAgICBAZXh0ZW5kIC50dGJlZm9yZVxuXG4gICYuYm90dG9tOmJlZm9yZVxuICAgIEBleHRlbmQgLnR0YmVmb3JlXG4gICAgYm90dG9tOiAtMTcwJVxuXG4gICY6YWZ0ZXJcbiAgICBAZXh0ZW5kIC50dGFmdGVyXG5cbiAgJi5ib3R0b206YWZ0ZXJcbiAgICBAZXh0ZW5kIC50dGFmdGVyXG4gICAgYm90dG9tOiAtNDAlXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDkwJSlcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnRcblxuICAmOmhvdmVyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcbiAgICAgIG9wYWNpdHk6IDFcblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiTkFOIiwic3ltYm9sVGFnIiwicmVJc0JhZEhleCIsInJlSXNCaW5hcnkiLCJyZUlzT2N0YWwiLCJmcmVlUGFyc2VJbnQiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZnJlZVNlbGYiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdFRvU3RyaW5nIiwiU3ltYm9sIiwiTWFwIiwiUHJvbWlzZSIsIlNldCIsImJhc2VHZXRUYWciLCJpc09iamVjdCIsImlzT2JqZWN0TGlrZSIsImlzU3ltYm9sIiwidG9OdW1iZXIiLCJ0cmltbWVkRW5kSW5kZXgiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiYmFzZVRyaW0iLCJkZWJvdW5jZSIsIm5vdyIsIl9kZWJvdW5jZSIsImZhUGF1c2UiLCJmYVBsYXkiLCJmYURvd25sb2FkIiwiZmFEaWNlIiwiZmFTb3VuZE9mZiIsImZhU291bmRPbiIsImZhSW1hZ2UiLCJmYVZpZGVvIiwiZmFJbWFnZVZpZGVvIiwiZmFTeW5jIiwiZmFTcGlubmVyIiwiZmFTZWFyY2giLCJmYVNldHRpbmdzIiwiZ290byIsImFocmVmIiwic2h1ZmZsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNZLE1BQUMsT0FBTyxHQUFHOzs7QUNBdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ25CLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUMzQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQUksU0FBUyxHQUFHLEVBQUUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQzdCLEVBQUUsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDMUIsRUFBRSxPQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzVCO0FBQ0EsRUFBRSxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQ3pFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q3pELG1CQUFtQixJQUNwQixZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSx1QkFBdUI7c0JBQ3JELFFBQVEsR0FBRyxtQkFBbUIsR0FBRyxDQUFDOzs7Ozs7b0JBUW5DLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzs7OztTQW1MMUIsZUFBZSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTztxQkFDbkQsZUFBZSxHQUFHLEtBQUs7Ozs7OztvQkFvQnZCLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFFLElBQUksSUFBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRSxNQUFNOztTQUVwRSxXQUFXO3NCQUNkLFdBQVc7ZUFDRixXQUFXLElBQUksQ0FBQztzQkFDekIsV0FBVyxlQUFlLFdBQVc7O3NCQUVyQyxXQUFXLGVBQWUsV0FBVzs7O3FCQUV2QyxXQUFXLGtCQUFrQixTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUs7cUJBQ3JELGFBQWEsaUJBQWlCLFdBQVc7cUJBRXpDLFFBQVEsWUFBWSxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUk7O1FBRXJDLE9BQU8sSUFBSSxDQUFDO0tBQ2QsU0FBUyxHQUFHLFVBQVU7ZUFDYixPQUFPLElBQUksQ0FBQztLQUNyQixTQUFTLEdBQUcsU0FBUztlQUNaLE9BQU8sSUFBSSxDQUFDO0tBQ3JCLFNBQVMsR0FBRyxXQUFXOzs7UUFHckIsV0FBVyxJQUFJLENBQUM7c0JBQ2xCLGFBQWEsR0FBRywyQkFBMkI7ZUFDbEMsV0FBVyxJQUFJLENBQUM7c0JBQ3pCLGFBQWEsR0FBRyxrQkFBa0I7ZUFDekIsV0FBVyxJQUFJLENBQUM7c0JBQ3pCLGFBQWEsR0FBRyxrQkFBa0I7OztRQUdoQyxrQkFBa0IsSUFBSSxDQUFDO0tBQ3pCLG9CQUFvQixHQUFHLGdCQUFnQjtlQUM5QixrQkFBa0IsSUFBSSxDQUFDO0tBQ2hDLG9CQUFvQixHQUFHLDBCQUEwQjtlQUN4QyxrQkFBa0IsSUFBSSxDQUFDO0tBQ2hDLG9CQUFvQixHQUFHLDJCQUEyQjs7Ozs7Ozs7TUE3Q2hELG9CQUFvQjs7Ozs7R0FLdEIsZUFBZSxDQUFDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
