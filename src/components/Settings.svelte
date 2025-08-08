<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import Icon from "fa-svelte/src/Icon.svelte";
  import { faCog as faSettings } from "@fortawesome/free-solid-svg-icons/faCog";
  import { faTimes as faClose } from "@fortawesome/free-solid-svg-icons/faTimes";

  export let showSettings;

  import {
    autoplayinterval,
    scrollspeed,
    prefetch,
    prefetchNum,
    numCols,
    hires,
    lores,
    oldreddit,
    imageVideo,
    portraitLandscape,
    muted,
    hideUIonStart,
    apiKey
  } from "../_prefs";
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
  hideUIonStart.useLocalStorage(true);
  apiKey.useLocalStorage('');

  function hideSettings() {
    showSettings = false;
  }

  let activeTab = 1;

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
  let _hideUIonStart = $hideUIonStart;
  let _apiKey = $apiKey;

  $: hideUIonStart.set(_hideUIonStart);
  $: {
    apiKey.set(_apiKey);
    if (_apiKey) {
      dispatch('apiKeyChange', _apiKey);
    }
  }

  let imagesVideoStates = [
    "Both images and videos",
    "Videos only",
    "Images only"
  ];
  let portraitLandscapeStates = [
    "Both landscape and portrait",
    "Portrait only",
    "Landscape only"
  ];

  $: {
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

  function toggleOldReddit() {
    _oldreddit = !_oldreddit;
    oldreddit.set(_oldreddit);
  }

  function toggleImageVideo() {
    _imageVideo = _imageVideo + 1;
    if (_imageVideo == 3) {
      _imageVideo = 0;
    }
    imageVideo.set(_imageVideo);
  }
  
  function togglePortraitLandscape() {
    _portraitLandscape = _portraitLandscape + 1;
    if (_portraitLandscape == 3) {
      _portraitLandscape = 0;
    }
    portraitLandscape.set(_portraitLandscape);
  }

  function toggleHiRes() {
    _hires = !_hires;
    hires.set(_hires);
  }

  function toggleLoRes() {
    _lores = !_lores;
    lores.set(_lores);
  }

  function toggleMuted() {
    _muted = !_muted;
    muted.set(_muted);
  }

  function toggleHideUIonStart() {
    _hideUIonStart = !_hideUIonStart;
    hideUIonStart.set(_hideUIonStart);
  }
</script>

<template lang="pug">
.settingspanel(class:showSettings='{showSettings}')
  .head
    Icon(icon="{faSettings}")
    | Settings
  .close(on:click='{hideSettings}')
    Icon(icon="{faClose}")
  .contents
    .nav
      div(class:active='{activeTab == 1}', on:click='{function(){activeTab = 1}}') General
      div(class:active='{activeTab == 2}', on:click='{function(){activeTab = 2}}') Keybindings
    .options
      div.option(class:active='{activeTab == 1}')
        .item
          span.text Autoplay Duration (seconds)
          span.input
            input(type="number", bind:value='{_autoplayinterval}', min="0", max="60")
        .item
          span.text Scroll Speed (0-20)
          span.input
            input(type="number", bind:value='{_scrollspeed}', min="0", max="20")
        .item
          span.text Prefetch Count
          span.input
            input(type="number", bind:value='{_prefetchNum}', min="1", max="200")
        .item
          span.text Hide UI on Startup
          label.switch
            input(type="checkbox", bind:checked='{_hideUIonStart}')
            span.slider.round
        .item
          span.text Tumblr API Key
          span.input
            input(type="text", bind:value='{_apiKey}', placeholder="Enter your OAuth Consumer Key")
          .api-key-help
            a(href="https://www.tumblr.com/oauth/apps", target="_blank") Get API Key Here
      div.option(class:active='{activeTab == 2}')
        .item
          span.text Play / Pause
          span.key q
          span.key p
        .item
          span.text Next Item
          span.key Space
          span.key Right
          span.key d
          span.key j
          span.key Page-down
        .item
          span.text Previous Item
          span.key Left
          span.key a
          span.key k
          span.key Page-up
        .item
          span.text Next Album Item
          span.key Up
        .item
          span.text Previous Album Item
          span.key Down
        .item
          span.text Toggle UI
          span.key h
        .item
          span.text Toggle Sound
          span.key s
        .item
          span.text Open on Tumblr
          span.key o
</template>

<style lang="sass">
@mixin hover()
  @media not all and (pointer: coarse)
    &:hover
      @content

$yellow: #00b4d8
$text-color: #fafafa
$accent-color: white
$favorite-color: #fbbc04
$favorite-border-color: #e37400
$over18-color: #ea4335
$over18-border-color: #ea4335

.settingspanel
  position: fixed
  background-color: #1a1a1a
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  width: 800px
  height: 520px
  border-radius: 12px
  border: none
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)
  backdrop-filter: blur(20px)
  padding: 0
  display: none
  overflow: hidden
  z-index: 9999

  grid-template-rows: [head-start] 60px [head-end contents-start] 1fr [contents-end]

  &.showSettings
    display: grid
    grid-gap: 0

  .head
    grid-row: head
    display: flex
    align-items: center
    justify-content: center
    background-color: #222
    color: #fff
    font-size: 18px
    font-weight: 600
    border-bottom: 1px solid #333
    position: relative

    :global(svg)
      margin-right: 10px
      width: 20px
      height: 20px

  .close
    position: absolute
    top: 15px
    right: 20px
    color: #888
    cursor: pointer
    width: 30px
    height: 30px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 6px
    transition: all 0.2s ease

    @include hover()
      background-color: #333
      color: #fff

    :global(svg)
      width: 16px
      height: 16px

  .contents
    grid-row: contents
    display: grid
    grid-template-columns: 180px 1fr
    overflow: hidden
    user-select: none
    background-color: #1a1a1a

    .nav
      font-size: 14px
      font-weight: 400
      background-color: #222
      border-right: 1px solid #333
      padding: 20px 0
      display: flex
      flex-direction: column
      gap: 0
      align-items: stretch

      div
        padding: 12px 20px
        cursor: pointer
        transition: all 0.2s ease
        color: #ccc
        border-left: 3px solid transparent

        @include hover()
          background-color: #2a2a2a
          color: #fff

        &.active
          background-color: #2a2a2a
          color: #fff
          border-left-color: $yellow

    .options
      background-color: #1a1a1a
      border-left: none
      overflow-y: auto
      padding: 15px 20px 10px 20px
      max-height: 100%

      .option
        display: none

        &.active
          display: block

        .item
          padding: 8px 0
          margin: 0
          border-bottom: 1px solid #333
          display: flex
          align-items: center
          justify-content: flex-start
          min-height: 40px
          flex-wrap: wrap
          gap: 20px

          &:last-child
            border-bottom: none

          .text
            color: #fff
            font-size: 14px
            font-weight: 400
            min-width: 200px
            white-space: nowrap
            flex-shrink: 0

          .key
            color: #ccc
            margin: 0 4px
            border: 1px solid #555
            border-radius: 6px
            padding: 6px 8px
            font-size: 12px
            font-weight: 500
            white-space: nowrap

          .api-key-help
            margin: 0
            font-size: 12px
            flex-shrink: 0
            
            a
              color: $yellow
              text-decoration: none
              transition: all 0.2s ease
              
              @include hover()
                text-decoration: underline
                opacity: 0.8

          .input
            display: flex
            flex-direction: column
            align-items: flex-start
            min-width: 300px
            flex-shrink: 0
            gap: 5px

            input
              border: 1px solid #444
              background-color: #2a2a2a
              color: #fff
              padding: 8px 12px
              border-radius: 6px
              width: 300px
              font-size: 14px
              transition: all 0.2s ease
              
              &:focus
                outline: none
                border-color: $yellow
                box-shadow: 0 0 0 2px rgba(0, 180, 216, 0.2)
              
              &[type="number"]
                width: 100px

          .button
            border: 1px solid #444
            background-color: #2a2a2a
            margin: 0 5px
            padding: 8px 12px
            border-radius: 6px
            cursor: pointer
            color: #fff
            transition: all 0.2s ease

            @include hover()
              background-color: #333
              border-color: #555

  .switch
    position: relative
    display: inline-block
    width: 50px
    height: 24px

    input
      opacity: 0
      width: 0
      height: 0

    .slider
      position: absolute
      cursor: pointer
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #444
      transition: 0.3s
      border-radius: 24px

      &:before
        position: absolute
        content: ""
        height: 18px
        width: 18px
        left: 3px
        bottom: 3px
        background-color: white
        transition: 0.3s
        border-radius: 50%

    input:checked + .slider
      background-color: $yellow

    input:focus + .slider
      box-shadow: 0 0 1px $yellow

    input:checked + .slider:before
      transform: translateX(26px)

    &.round .slider
      border-radius: 24px

      &:before
        border-radius: 50%

@media (max-width: 800px)
  .settingspanel
    width: 90vw
    height: 80vh
    max-width: 600px
    max-height: 500px

  .contents
    grid-template-columns: 150px 1fr

  .options
    padding: 20px

  .item
    flex-direction: column
    align-items: flex-start
    gap: 10px

    .input
      align-items: flex-start
      width: 100%

      input
        width: 100%
        max-width: 300px
</style>
