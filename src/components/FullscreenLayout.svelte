<script>
  import Icon from "fa-svelte/src/Icon.svelte";
  import { faVolumeUp as faSoundOn } from "@fortawesome/free-solid-svg-icons/faVolumeUp";
  import { faVolumeMute as faSoundOff } from "@fortawesome/free-solid-svg-icons/faVolumeMute";
  import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
  import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";
  import { faCog as faSettings } from "@fortawesome/free-solid-svg-icons/faCog";
  import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
  import { faDonate } from "@fortawesome/free-solid-svg-icons/faDonate";
  import { faExpandAlt as faExpand } from "@fortawesome/free-solid-svg-icons/faExpandAlt";
  import { faCloudDownloadAlt as faDownload } from "@fortawesome/free-solid-svg-icons/faCloudDownloadAlt";
  import { faDice } from "@fortawesome/free-solid-svg-icons/faDice";
  import { faPhotoVideo as faImageVideo } from "@fortawesome/free-solid-svg-icons/faPhotoVideo";
  import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
  import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
  import { faStar as faFav } from "@fortawesome/free-solid-svg-icons/faStar";
  import { faStar as faUnFav } from "@fortawesome/free-regular-svg-icons/faStar";
  import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
  import { faSync } from "@fortawesome/free-solid-svg-icons/faSync";
  import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
  import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
  import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";
  import { faEye as faShow } from "@fortawesome/free-solid-svg-icons/faEye";
  import { faEyeSlash as faHide } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
  import { faTh as faColumns } from "@fortawesome/free-solid-svg-icons/faTh";
  import { faExpandArrowsAlt as faFullscreen } from "@fortawesome/free-solid-svg-icons/faExpandArrowsAlt";

  import { faMobileAlt as faPortrait } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
  import { faDesktop as faLandscape } from "@fortawesome/free-solid-svg-icons/faDesktop";

  import AutoComplete from "simple-svelte-autocomplete";

  import Settings from "./Settings.svelte";

  import { onMount, tick } from "svelte";
  import { goto as ahref } from "@sapper/app";

  import shuffle from "lodash.shuffle";

  import { get_tumblr_posts, queryp } from "../_tumblr_utils.ts";

  

  import { writable, throttle, startWith } from "svelte-pipeable-store";

  import {
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
    hideUIonStart
  } from "../_prefs";
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

  export let params, slugstr;
  export let posts;
  export let after;
  export let res;
  export let mode = "tumblr";
  export let pageType = "user";

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

  $: {
    if (currpost.is_album) {
      title = `(${albumindex + 1}/${currpost.preview.img.album.length}) ${
        currpost.title
      }`;
    } else {
      title = currpost.title;
    }
  }

  let blogIdentifier;

  $: blogIdentifier = slugstr;

  $: {
    if ($gotoElWidth > 1000) {
      // padding on both sides
      let numGotoControlsInOneRow = ($gotoElWidth - 154 * 2) / 32;
      let numGotoControlsRows =
        (displayposts.length + 5) / numGotoControlsInOneRow;
      tinygoto = numGotoControlsRows > 3;
    } else if ($gotoElWidth > 800) {
      // padding on right side
      let numGotoControlsInOneRow = ($gotoElWidth - (154 + 14)) / 32;
      let numGotoControlsRows =
        (displayposts.length + 5) / numGotoControlsInOneRow;
      tinygoto = numGotoControlsRows > 3;
    } else {
      // no padding
      let numGotoControlsInOneRow = ($gotoElWidth - (14 + 14)) / 32;
      let numGotoControlsRows =
        (displayposts.length + 5) / numGotoControlsInOneRow;
      tinygoto = numGotoControlsRows > 3;
    }
  }

  // 1440 is to set numCols to 3. Setting to `0` would mean we start with 1 col, and then quickly update to 3 on desktop.
  const _gotoElWidth = writable(1440);
  const gotoElWidth = _gotoElWidth.pipe(throttle(500), startWith(1440));

  $: loadError = res && !res.res.ok;
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
    if (!after) return;

    loading = true;
    reloadstr = "Loading ..";

    let newposts;

    if (mode === "tumblr") {
      let url;
      if (pageType === 'search') {
        url = `https://api.tumblr.com/v2/tagged?tag=${blogIdentifier}&api_key=ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF&before=${after}&${queryp(params)}`;
      } else {
        url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF&offset=${after}&${queryp(params)}`;
      }

      ({
        posts: newposts,
        after,
        ...res
      } = await get_tumblr_posts(url));
    }

    console.log("[loadMore] API Response (res object):", res);
    console.log("[loadMore] New posts received:", newposts.length);
    console.log("[loadMore] Current posts array before combining:", posts.length);

    // load `favorite` from localstorage
    for (let p of newposts) {
      p["favorite"] = !!(($favorite || {})[p.url]?.favorite);
    }

    // Combine `posts` and `newposts` and remove duplicates from multiple network requests
    posts = [...posts, ...newposts].reduce(
      (r, i) => (!r.some((j) => i.id === j.id) ? [...r, i] : r),
      []
    );
    console.log("[loadMore] Posts after initial combine (before URL dedupe): ", posts.length);

    // Remove duplicates, based on `url`
    posts = posts.filter((v, i, a) => a.findIndex((t) => t.url == v.url) === i);

    console.log("[loadMore] After dedupe/Total loaded: ", posts.length);
    console.log("[loadMore] Next 'after' value:", after);

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
    autoplaytimer = setInterval(() => {
      // If `autoplay` is off and it is a video, the video will progress by itself via on:ended
      if ($autoplay && currpost.is_image) {
        //console.log('---- iNEXT')
        next();
      } else if (!$autoplay && currpost.is_video) {
        //console.log('---- vNEXT')
        next();
      }
    }, $autoplayinterval * 1000);

    autoplay.set(true);
  }

  async function prev() {
    if (currpost.is_album && albumindex > 0) {
      albumPrev();
    } else {
      itemPrev();
      await tick(); // Ensure currpost is updated
      if (currpost.is_album) {
        albumindex = currpost.preview.img.album.length - 1;
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
    $imageVideo = $imageVideo + 1;

    if ($imageVideo == 3) {
      $imageVideo = 0;
    }
  }

  function uniqBy(a, key) {
    var seen = {};
    return a.filter(function(item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  function toggleMuted() {
    $muted = !$muted;
  }

  function togglePortraitLandscape() {
    $portraitLandscape = $portraitLandscape + 1;

    if ($portraitLandscape == 3) {
      $portraitLandscape = 0;
    }
  }

  let renderVideo = true;

  // Some operations like fav/unfav causes video to re-render
  // since we're changing post.favorite. This should help skip it
  let skipRenderVideo = false;

  $: {
    if (!skipRenderVideo) reMountVideo(currpost.preview);
    skipRenderVideo = false;
  }

  function reMountVideo() {
    renderVideo = false;
    setTimeout(() => (renderVideo = true), 0);
  }

  $: {
    // Subreddit search
    if (subredditSearchValue) {
      //subredditSearchVisible = false;
      //ahref(`/r/${subredditSearchValue}`);
      //subredditSearchValue = "";
      //subredditSearchValueRaw = "";
      jumpToSubReddit(subredditSearchValue);
    }
  }

  $: {
    numFavorite = displayposts.filter((item) => item.favorite == true).length;

    if (!numFavorite) {
      downloadstr = `Nothing to download`;
    } else if (numFavorite == 1) {
      downloadstr = `Download ${numFavorite} file`;
    } else {
      downloadstr = `Download ${numFavorite} files`;
    }
    autoplaystr = `Autoplay is ${$autoplay ? "on" : "off"}`;
    deepsearchstr = `Search for ${filterValue}`;

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

  $: {
    if (displayposts[index]) {
      currpost = JSON.parse(JSON.stringify(displayposts[index]));

      let _nexturls = [];

      _nexturls = [
        currpost,
        ...displayposts.slice(index + 1, index + $prefetchNum + 1)
      ];

      nexturls = _nexturls
        .map(function (item) {
          if (item.is_album) {
            return item.preview.img.album.slice(
              albumindex,
              albumindex + $prefetchNum + 1
            );
          } else {
            return item;
          }
        })
        .flat();

      console.log(nexturls);
      nexturls = uniqBy(nexturls, () => (item) => item.preview.img.default);
    } else if (filterValue) {
      // We're here because user filtered the list

      // Unfortunately the filtered list is smaller than the current index
      // set index to last item
      if (displayposts.length > 0) {
        console.log("setting index from ", index, " to ", displayposts.length);
        index = displayposts.length - 1;
        console.log("loading more ..");
        loadMore();
      } else {
        // nothing was filtered
        index = 0;
        currpost = {
          title: "Nothing to show. Try changing filters or tweak/update URL."
        };
      }
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

  $: {
    let tmp = [];

    if ($over18 == 0) {
      tmp = posts.filter((item) => item.over18 == false);
    } else if ($over18 == 1) {
      tmp = posts;
    } else if ($over18 == 2) {
      tmp = posts.filter((item) => item.over18 == true);
    }

    if (filterValue) {
      skipRenderVideo = true;
      tmp = tmp.filter((item) =>
        item.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    // Filter only videos
    if ($imageVideo == 1) {
      tmp = tmp.filter((item) => item.is_video);
    }
    // Filter only images
    else if ($imageVideo == 2) {
      tmp = tmp.filter((item) => item.is_image);
    }

    if ($portraitLandscape == 1) {
      tmp = tmp.filter((item) => item.dims.width / item.dims.height <= 1.2);
    } else if ($portraitLandscape == 2) {
      tmp = tmp.filter((item) => item.dims.width / item.dims.height > 1.2);
    }

    displayposts = tmp;
  }

  function goto(i) {
    albumindex = 0;
    index = i;

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

  function videoended() {
    itemNext();
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

  async function itemPrev() {
    if (index === 0) return;
    index -= 1;

    albumindex = 0; // Always reset album index to 0 when moving to a new post

    await tick(); // Ensure currpost is updated before accessing its properties

    if (displayposts.length - index === 3) {
      loadMore();
    }
    if ($autoplay) stopAndStartAutoPlay();
  }

  function toggleFullscreen() {
    var elem = document.body;
    if (
      document.fullscreenElement || // alternative standard method
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
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
    const activePart = 1/5;

    if (x < activePart) {
      itemPrev();
    } else if (x > (1-activePart)) {
      itemNext();
    }
  }

  function toggleHideCursor() {
    // If the UI is currently visible, the cursor should always be visible.
    // We don't want to set a timer to hide it in this state.
    if (uiVisible) {
      hideCursor = false; // Ensure cursor is visible
      if (hideCursorTimerId) {
        clearTimeout(hideCursorTimerId); // Clear any lingering timer
        hideCursorTimerId = 0;
      }
      return; // Stop here, no further action needed
    }

    // If the UI is hidden, we manage cursor visibility based on inactivity.
    hideCursor = false; // Show cursor immediately on mouse movement
    if (hideCursorTimerId) {
      clearTimeout(hideCursorTimerId); // Clear previous timer
    }
    hideCursorTimerId = setTimeout(() => {
      hideCursorTimerId = 0;
      hideCursor = true; // Hide cursor after 3 seconds of inactivity
    }, 3000);
  }

  function toggleTitleVisibility() {
    titleVisible = !titleVisible;
  }

  function toggleUIVisiblity() {
    uiVisible = !uiVisible;

    showhidestr = uiVisible ? "Hide (h)" : "Show (h)";

    if (hideCursorTimerId) {
      clearTimeout(hideCursorTimerId);
      hideCursorTimerId = 0;
    }

    if (!uiVisible) {
      hideCursor = true;
    } else {
      hideCursor = false;
    }
  }

  function toggleSettings() {
    showSettings = !showSettings;
  }

  function gotoDeepSearch() {
    let prefix = "";
    if (slugstr) {
      prefix = `/r/${subreddit}`;
    } else {
      prefix = ``;
    }

    navigation = true;
    ahref(
      `${prefix}/search?q=${filterValue}&restrict_sr=on&include_over_18=on&sort=relevant&t=all`
    );
  }

  function hideSettings() {
    showSettings = false;
  }

  

  async function expandFilter() {
    filterExpanded = true;

    await tick();

    // Focus the input if we just opened it
    if (filterExpanded) filterRef.querySelector("input").focus();
  }

  async function toggleFilter() {
    filterExpanded = !filterExpanded;

    await tick();
    // Focus the input if we just opened it
    if (filterExpanded) filterRef.querySelector("input").focus();
  }

  async function downloadFiles() {
    window.open("/download", "_blank");
  }

  async function shuffleFiles() {
    displayposts = shuffle(displayposts);
  }

  function openMedia() {
    window.open(currpost.permalink, "_blank");
  }

  

  function copySrcToClipboard() {
    let text;
    if (
      currpost.url.startsWith("https://v.redd.it/") ||
      currpost.url.includes("redgifs.com")
    ) {
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

    navigator.clipboard
      .writeText(text)
      .then(() => console.log(`Copied: ${text}`));
  }

  function toggleOver18() {
    $over18 = $over18 + 1;

    if ($over18 == 3) {
      $over18 = 0;
    }
    over18.set($over18);
  }

  function removeAllFavorite(removeAllFromLocalStorage) {
    skipRenderVideo = true;

    for (const [i, post] of displayposts.entries()) {
      // For reactivity
      displayposts[i].favorite = false;

      // If removeAllFromLocalStorage is true, then we'll remove everythign in one shot
      // no need to do it one by one
      if (removeAllFromLocalStorage == false) {
        // Localstorage
        $favorite[post.url] = undefined;
        $favorite = JSON.parse(JSON.stringify($favorite));

        favorite.set($favorite);
      }
    }

    if (removeAllFromLocalStorage) {
      favorite.set({});
    }
  }
  function toggleFavorite() {
    skipRenderVideo = true;
    displayposts[index].favorite = !displayposts[index].favorite;

    let url = displayposts[index].url;
    $favorite[url] = undefined;
    $favorite = JSON.parse(JSON.stringify($favorite));
    $favorite[url] = displayposts[index];
    favorite.set($favorite);
  }

  function albumPrev() {
    if (!currpost.is_album) return;
    albumindex -= 1;
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
      albumindex = 0;
    } else {
      albumindex += 1;
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
    if (
      event.keyCode == 37 ||
      event.keyCode == 65 ||
      event.keyCode == 75 ||
      event.keyCode == 33
    ) {
      if (event.shiftKey) {
        const video = document.getElementById('videoplayerid');
        video.currentTime -= 5;
      } else {
        itemPrev();
      }
    }
    // Right Arrow, d, j, Space, Page-down
    else if (
      event.keyCode == 39 ||
      event.keyCode == 68 ||
      event.keyCode == 74 ||
      event.keyCode == 32 ||
      event.keyCode == 34
    ) {
      if (event.shiftKey) {
        const video = document.getElementById('videoplayerid');
        video.currentTime += 5;
      } else {
        itemNext();
      }
    }
  }
</script>

<svelte:window on:keydown={keydown} on:wheel={wheel} />
<svelte:head>
  <title>tumblrpx - {slugstr ? `t/${slugstr}` : "tumblr.com"}</title>
</svelte:head>

<div class="wrapper" class:hide-cursor="{hideCursor}">
  <div class="hero">
    <div class="title" class:hide="{!uiVisible || !titleVisible}" class:favorite="{currpost.favorite}">
      {#if currpost.dims && currpost.dims.width > 0}
        {title} ({currpost.dims.width}x{currpost.dims.height})
      {:else}
        {title}
      {/if}
      {#if currpost.subreddit}
        <div class="subreddit">
          <p class="user">{currpost.authorp}</p>
        </div>
      {/if}
    </div>
    <div class="settings">
      
      <span class="btn cog" on:click="{toggleSettings}" class:showSettings="{showSettings}" class:hide="{uiVisible == false}">
        <Icon icon="{faSettings}"></Icon>
      </span>
      <div class="div" class:hide="{uiVisible == false}">
        <Settings bind:showSettings></Settings>
      </div>
    </div>
    <div class="main-media-container">
      {#if currpost.is_image && !currpost.is_album}
        <img src="{currpost.preview.img.default}" alt="{currpost.title}" style="height: 100vh; object-fit: contain;">
      {:else if currpost.is_video && renderVideo}
        <video class="video" autoplay loop="{!$autoplay}" playsinline muted="{$muted}" on:ended="{videoended}" on:dblclick="{toggleFullscreen}" class:hide-cursor="{hideCursor}" on:mousemove="{toggleHideCursor}" id="videoplayerid" on:click="{onVideoPlayerClicked}">
          {#if $lores}
            <source src="{currpost.preview.vid.lores}">
          {:else}
            {#if currpost.preview.vid.webm}
              <source src="{currpost.preview.vid.webm}">
            {/if}
            {#if currpost.preview.vid.mp4}
              <source src="{currpost.preview.vid.mp4}">
            {/if}
          {/if}
        </video>
      {:else if currpost.is_album}
        {#if currpost.preview.img.album[albumindex].is_video}
          <video class="video" autoplay loop="{!$autoplay}" playsinline muted="{$muted}" on:ended="{videoended}" on:dblclick="{toggleFullscreen}" class:hide-cursor="{hideCursor}" on:mousemove="{toggleHideCursor}" on:click="{onVideoPlayerClicked}">
            <source src="{currpost.preview.img.album[albumindex].hires}">
          </video>
        {:else}
          <img src="{currpost.preview.img.album[albumindex].default}" alt="{currpost.title}" style="height: 100vh; object-fit: contain;">
        {/if}
      {/if}
    </div>
    
    {#if displayposts.length || posts.length}
      <div class="goto" class:tinygoto="{tinygoto}" class:hide="{uiVisible == false}" bind:clientWidth="{$_gotoElWidth}">
        <div class="btnwrapper">
          <span class="btn playpause tooltip"
            data-tooltip="{autoplaystr}"
            class:play="{$autoplay}"
            on:click="{toggleAutoPlay}"
          >
            <Icon icon="{$autoplay ? faPause : faPlay}"></Icon>
          </span>
          <span class="btn download tooltip"
            on:click="{downloadFiles}"
            data-tooltip="{downloadstr}"
            class:dlready="{numFavorite}"
          >
            <Icon icon="{faDownload}"></Icon>
          </span>
          <span class="btn dice tooltip"
            on:click="{shuffleFiles}"
            data-tooltip="Shuffle"
          >
            <Icon icon="{faDice}"></Icon>
          </span>
          <span class="btn imagevideo tooltip"
            data-tooltip="{imageVideoStr}"
            on:click="{toggleImageVideo}"
          >
            {#if $imageVideo == 0}
              <Icon icon="{faImageVideo}"></Icon>
            {:else if $imageVideo == 1}
              <Icon icon="{faVideo}"></Icon>
            {:else if $imageVideo == 2}
              <Icon icon="{faImage}"></Icon>
            {/if}
          </span>
          <span class="btn muted tooltip"
            data-tooltip="{mutedstr}"
            on:click="{toggleMuted}"
          >
            <Icon icon="{$muted ? faSoundOff : faSoundOn}"></Icon>
          </span>
          {#if tinygoto}
            <span class="btn reload tooltip" data-tooltip="{reloadstr}" on:click="{loadMore}" class:loaderror="{loadError}">
              {#if loading}
                <Icon icon="{faSpinner}"></Icon>
              {:else}
                <Icon icon="{faSync}"></Icon>
              {/if}
            </span>
          {/if}
          <span class="btn filter tooltip"
            class:filterExpanded="{filterExpanded}"
            on:click="{toggleFilter}"
            data-tooltip="Filter ( / )"
            bind:this="{filterRef}"
            class:dlready="{numFavorite}"
          >
            {#if filterExpanded}
              <input bind:value="{filterValue}" on:click|stopPropagation on:keydown|stopPropagation type="text">
            {:else}
              <Icon icon="{faSearch}"></Icon>
            {/if}
          </span>
          {#if filterValue}
            <span class="btn deepsearch tooltip" data-tooltip="{deepsearchstr}" on:click="{gotoDeepSearch}">
              <p>deep search 🠒</p>
            </span>
          {/if}
        </div>
        <div class="numswrapper">
          {#each displayposts as post, i (post.id + post.url)}
            <span class="nums"
              class:currnum="{index === i}"
              class:album="{currpost.is_album}"
              class:favorite="{displayposts[i].favorite}"
              class:over18="{displayposts[i].over18}"
              on:click="{function(){goto(i)}}"
            >
              <img class="small" alt="{displayposts[i].title}" src="{displayposts[i].thumbnail}">
              <p class="small" class:curr="{index === i}" class:album="{currpost.is_album}">{i+1}</p>
            </span>
          {/each}
          {#if !tinygoto}
            <span class="displayinfo" class:filterExpanded="{filterValue}">
              <p>{displayposts.length}/{posts.length}</p>
            </span>
            <span class="btn reload tooltip" data-tooltip="{reloadstr}" on:click="{loadMore}" class:loaderror="{loadError}">
              {#if loading}
                <Icon icon="{faSpinner}"></Icon>
              {:else}
                <Icon icon="{faSync}"></Icon>
              {/if}
            </span>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
{#if $prefetch}
  <div class="prefetch">
    {#each nexturls as nexturl (nexturl.preview.img.default)}
      {#if $hires}
        {#if nexturl.is_album}
          <img alt="prefetch-hires" src="{nexturl.preview.img.album[0].hires}">
        {:else}
          <img alt="prefetch-hires" src="{nexturl.url}">
        {/if}
      {:else}
        {#if nexturl.is_album}
          <img alt="prefetch" src="{nexturl.preview.img.album[0].default}">
        {:else if nexturl.preview}
          <img alt="prefetch" src="{nexturl.preview.img.default}">
        {:else}
          <img alt="prefetch" src="{nexturl.default}">
        {/if}
      {/if}
      {#if nexturl.is_video}
        <video playsinline autoplay loop muted>
          {#if $lores}
            <source src="{nexturl.preview.vid.lores}">
          {:else}
            {#if nexturl.preview}
              {#if nexturl.preview.vid.webm}
                <source src="{nexturl.preview.vid.webm}">
              {/if}
              {#if nexturl.preview.vid.mp4}
                <source src="{nexturl.preview.vid.mp4}">
              {/if}
            {:else}
              <source src="{nexturl.default}">
            {/if}
          {/if}
        </video>
      {/if}
    {/each}
  </div>
{/if}

<style lang="sass">
:global(html), :global(body)
  margin: 0
  padding: 0
  box-sizing: border-box
  overflow: hidden

@mixin hover()
  @media not all and (pointer:coarse)
    &:hover
      @content

$yellow: #f9ab00

$text-color: #fafafa
$accent-color: white
$favorite-color: #fbbc04
$favorite-border-color: #e37400
$over18-color: #ea4335
$over18-border-color: #ea4335
$ismulti-color: #ea4335
$isnotmulti-color: #34a853

.hide-cursor
  cursor: none

.hide
  display: none !important

.wrapper
  height: 100vh

  display: grid
  justify-items: center
  align-items: center

  .hero
    height: 100vh
    width: 100vw
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center

    .title
      z-index: 10
      position: absolute
      left: 1rem
      top: 0
      background-color: rgba(0, 0, 0, 0.4)
      color: $text-color
      font-size: 1.5rem
      max-width: 77%
      padding: 1rem
      border-radius: 3px

    .settings
      z-index: 10
      position: absolute
      top: 0
      right: 0
      color: $text-color
      font-size: 1rem
      padding: 1.5rem 2rem

    .main-media-container
      flex-grow: 1
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 100%

      img, video
        max-width: 100%
        max-height: 100%
        object-fit: contain

    .goto
      user-select: none
      z-index: 5
      position: absolute
      background-color: rgba(0, 0, 0, 0.6)
      bottom: 0
      display: grid
      grid-row-gap: 5px
      padding: 1rem 11rem
      border-radius: 3px
      color: $text-color
      width: 100%
      grid-template-columns: repeat(auto-fill, minmax(32px, 1fr))

      &.tinygoto
        grid-template-rows: auto 1fr
        grid-template-columns: 1fr

        .btnwrapper
          grid-template-columns: repeat(auto-fill, minmax(32px, 1fr))
          display: grid

        .numswrapper
          grid-template-columns: repeat(auto-fit, minmax(1rem, auto))
          grid-auto-columns: max-content
          display: grid
          grid-gap: 0.2rem


          .nums
            border-bottom: 3px solid rgba(white, 30%)
            height: 1rem
            cursor: pointer

            @include hover()
              border-bottom: 3px solid $accent-color !important

            &.currnum
              border-bottom: 3px solid $accent-color !important

              &.album
                border-bottom: 3px dotted $accent-color !important

            &.favorite
              border-bottom: 3px solid $favorite-color

            &.over18
              border-bottom: 3px solid $over18-color

          p
            display: none

          .reload
            grid-column: span 2

      .btnwrapper, .numswrapper
        display: contents

      .btnwrapper

        .reload
          bottom: -1px

      .numswrapper

        .displayinfo
          grid-column: span 1
          font-size: 0.8rem
          margin-top: 2px

          p
            margin: 0
            text-align: center

      .btn
        text-align: center
        padding-top: 2px
        color: rgba(white, 30%)

        &.reload
          cursor: pointer

          &.loaderror
            color: $over18-color

          @include hover()
            color: white

        &.deepsearch
          grid-column: span 4
          bottom: 2px
          cursor: pointer
          justify-self: center

          &:hover p
            color: $accent-color
            border: 1px solid $accent-color

          p
            margin: 0
            font-size: 0.9rem
            color: darken($accent-color, 30%)
            border: 1px solid darken($accent-color, 30%)
            border-radius: 3px
            padding: 0 1rem

        &.over18wrapper

          cursor: pointer
          grid-column: span 2
          justify-self: center

          &.over18

            p
              border: 1px solid rgba(white, 30%)
              color: rgba(white, 30%)

              @include hover()
                border: 1px solid rgba(white, 60%)
                color: rgba(white, 60%)

          p
            font-size: 0.9rem
            border: 1px solid $over18-color
            border-radius: 3px
            color: $over18-color
            margin: 0
            //margin-right: 13px
            width: 58px
            font-family: "Roboto Condensed", sans-serif
            position: relative
            top: -1px

        &.imagevideo
          cursor: pointer
          font-size: 1.4rem
          bottom: 2px
          color: white

        &.layout
          cursor: pointer
          font-size: 1.4rem
          bottom: 2px

          &.active
            color: white
            

        &.muted
          cursor: pointer
          font-size: 1.4rem
          bottom: 2px
          color: white

        &.portraitlandscape
          cursor: pointer
          font-size: 1.4rem
          bottom: 2px
          color: white

          & :global(.landscape)
            transform: rotate(270deg)

        &.dice
          cursor: pointer
          font-size: 1.4rem
          bottom: 2px
          color: white

        &.download
          cursor: default
          font-size: 1.4rem
          bottom: 2px

          &.dlready
            color: rgba($favorite-color, 90%)
            cursor: pointer

            @include hover()
              color: $yellow

        &.playpause
          cursor: pointer
          top: 1px

          // When it is play icon, make it white
          &.play
            color: white

          @include hover()
            color: white

        &.filter
          cursor: pointer
          top: 1px

          @include hover()
            color: white

          &.filter.filterExpanded
            grid-column: span 3
            top: -2px

            input
              width: 85%
              margin-left: 0px
              padding-left: 5px
              padding-right: 5px
              border: 1px solid rgba(white, 60%)
              background-color: rgba(0, 0, 0, 0)
              color: white

      span
        position: relative

        &.favorite

          p.small
            //background-color: $favorite-color
            border-bottom: 3px solid $favorite-border-color !important
            color: $favorite-color

          img.small
            border-color: $favorite-border-color !important

        &.over18

          p.small
            color: $over18-color
            //background-color: $over18-color
            border-bottom: 3px solid $over18-border-color

          img.small
            border-color: $over18-border-color

        p.small
          margin: 0 2px
          text-align: center
          cursor: pointer
          border-bottom: 3px solid rgba(0, 0, 0, 0)

          &.curr
            background-color: rgba(255, 255, 255, 0.2)
            border-bottom: 3px solid $accent-color !important

            &.album
              border-bottom: 3px dashed $accent-color !important

        img.small
          z-index: 10
          width: 0px
          opacity: 0
          position: absolute
          bottom: 35px
          border: 2px solid white
          background-color: lighten(black, 30%)
          min-width: 100px
          pointer-events: none
          object-fit: cover

        &:hover p.small
          background-color: rgba(255, 255, 255, 0.1)
          border-bottom: 3px solid $accent-color !important

        &:hover img
          width: auto
          height: 100px
          opacity: 1

    .subredditsearchwrapper

      height: 100vh
      width: 100vw
      position: absolute
      background-color: rgba(0,0,0,0.7)
      z-index:15

      .subredditsearch
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        display: grid


        .header 
          font-size: 20px
          margin-bottom: 12px
          text-align: center
          color: white


      :global(.input-container)
        height: 40px

      :global(.input-container input)
        padding-left: 5px
        padding-right: 5px
        border: 2px solid rgba(white, 60%)
        background-color: rgba(0, 0, 0, 0)
        color: white
        border-radius: 3px

      :global(.autocomplete-list)
        max-height: calc(15 * (1rem + 10px) - 15px) !important
        background-color: black
        border: none

      :global(.autocomplete-list .autocomplete-list-item)
        color: white
        background-color: black

      :global(.autocomplete-list .autocomplete-list-item-create)
        color: white
        background-color: black

      :global(.autocomplete-list .autocomplete-list-item.selected)
        background-color: #f9ab0038

      :global(.autocomplete-list .autocomplete-list-item b)
        color: $yellow

    .image
      height: 100vh
      width: 100vw
      background-size: contain
      background-repeat: no-repeat
      background-position: center

    .video
      height: 100vh
      width: 100vw
      object-fit: contain

  .prefetch
    position: absolute
    top: 0
    left: 0
    width: 1px
    height: 1px
    overflow: hidden
    opacity: 0

  @media (max-width: 1000px)
    .hero
      .goto
        padding: 1rem 11rem 1rem 1rem

  @media (max-width: 800px)
    .hero
      .goto
        padding: 1rem
        //grid-template-columns: 32px 32px 32px 32px 32px repeat(auto-fit, minmax(32px, 1fr))
        //grid-template-rows: 1fr 1fr

        &.tinygoto

          .nums
            height: 0.1rem !important
        img.small
          display: none

.tooltip
  position: relative
  z-index: 2
  cursor: pointer

.ttbefore
  position: absolute
  bottom: 120%
  left: 50%
  margin-bottom: 5px
  margin-left: -30px
  padding: 5px 4px
  width: max-content
  border-radius: 3px
  background-color: black
  color: #fff

  background-color: rgba(white, 90%)
  color: black

  content: attr(data-tooltip)
  text-align: center
  font-size: 0.8rem
  line-height: 1.2

.ttafter
  position: absolute
  bottom: 120%
  left: 50%
  margin-left: -5px
  width: 0
  border-top: 5px solid rgba(white, 90%)
  border-right: 5px solid transparent
  border-left: 5px solid transparent
  content: " "
  font-size: 0
  line-height: 0

.tooltip
  &:before, &:after
    visibility: hidden
    opacity: 0
    pointer-events: none

  &:before
    @extend .ttbefore

  &.bottom:before
    @extend .ttbefore
    bottom: -170%

  &:after
    @extend .ttafter

  &.bottom:after
    @extend .ttafter
    bottom: -40%
    border-bottom: 5px solid rgba(white, 90%)
    border-top: 5px solid transparent

  &:hover
    &:before, &:after
      visibility: visible
      opacity: 1

</style>