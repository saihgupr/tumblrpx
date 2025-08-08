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
        //p autoplay on/off
        //p download files
        //p nsfw on/off
        .item
          span.text Autoplay time (seconds)
          span.input
            input(type="number", bind:value='{_autoplayinterval}')
        .item
          span.text Scroll speed (0-20)
          span.input
            input(type="number", bind:value='{_scrollspeed}')
        //.item
        //  span Favorite
        //    span
        //      span.button Mark all
        //      span.button Unmark all
        //      span.button Unmark all (all subreddits)
        .item
          span.text Prefetch items
          span.input
            input(type="number", bind:value='{_prefetchNum}')
        
        .item
          span.text Hide UI on start
          label.switch
            input(type="checkbox", bind:checked='{_hideUIonStart}')
            span.slider.round
        .item
          span.text Tumblr API Key
          span.input
            input(type="text", bind:value='{_apiKey}', placeholder="OAuth Consumer Key")
          .api-key-help
            a(href="https://www.tumblr.com/oauth/apps", target="_blank") Make One Here
        //p remove duplicates
        //p aggressive caching (thumb vs preview)
      div.option(class:active='{activeTab == 2}')
        .item
          span.text Play / Pause
          span.key q
          span.key p
        .item
          span.text Next item
          span.key Space
          span.key Right
          span.key d
          span.key j
          span.key Page-down
        .item
          span.text Previous item
          span.key Left
          span.key a
          span.key k
          span.key Page-up
        .item
          span.text Next item in the album
          span.key Up
        .item
          span.text Previous item in the album
          span.key Down
        .item
          span.text Hide UI / Controls
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

.settingspanel
  position: fixed
  background-color: black
  left: 25%
  top: 25%
  width: 50%
  height: 50%
  border-radius: 5px
  border: 1px solid white
  padding: 1rem
  display: none

  grid-template-rows: [head-start] 2.5rem [head-end contents-start] 2fr [contents-end]

  &.showSettings
    display: grid
    grid-gap: 1rem

  .contents
    grid-row: contents
    display: grid
    grid-template-columns: 1fr 2fr
    overflow: hidden
    user-select: none

    .nav
      font-size: 1.1rem

      display: grid
      grid-auto-rows: max-content
      grid-gap: 5px

      align-items: center
      justify-items: center

      // flow items one below other
      grid-auto-flow: row

      .active
        background-color: rgba(255, 255, 255, 0.2)
        border-bottom: 3px solid $accent-color

      div
        padding: 0.5rem 1rem
        border-bottom: 3px solid rgba(0, 0, 0, 0)
        width: 100%
        height: 100%
        cursor: pointer

        @include hover()
          background-color: rgba(255, 255, 255, 0.2)
          border-bottom: 3px solid $accent-color

    .options
      background-color: rgba(black, 0%)
      border-left: 1px solid white
      overflow: auto

      .option
        display: none
        padding: 0rem 1rem

        .item
          padding: 0.5rem
          margin: 0.5rem 0

          .text
            margin-right: 10px

          .key
            color: $yellow
            margin: 0 4px
            border: 1px solid $yellow
            border-radius: 3px
            padding: 4px 5px

          .input
            input
              border: 1px solid white
              background-color: rgba(black, 0)
              color: white
              padding: 5px
              width: 100px

          .api-key-help
            margin-top: 5px
            font-size: 0.8rem
            
            a
              color: $yellow
              text-decoration: none
              
              @include hover()
                text-decoration: underline

          .button
            border: 1px solid white
            margin: 0 5px
            padding: 5px
            border-radius: 3px
            cursor: pointer

            @include hover()
              background-color: white
              color: black

      .active
        display: block

  .close
    position: absolute
    top: 1rem
    color: rgba(white, 60%)
    cursor: pointer
    right: 1rem

    @include hover()
      color: white

  .head
    font-size: 1.5rem
    align-self: center

    :global(svg)
      position: relative
      top: 3px
      margin-right: 10px

  @media (max-width: 1600px)
    width: 80%
    left: 10%

  @media (max-width: 1000px)
    width: 90%
    left: 5%

  @media (max-width: 800px)

    .contents
      grid-template-rows: 3rem auto
      grid-template-columns: unset

      .nav
        // flow items to the right
        grid-auto-flow: column
        grid-auto-rows: unset
        grid-auto-columns: max-content

      .options
        border-left-width: 0px
        border-top: 1px solid white

        .option
          padding: 0

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

.switch 
  position: relative
  display: inline-block
  width: 34px
  height: 20px

.switch input 
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
  background-color: #ccc
  -webkit-transition: .4s
  transition: .4s

.slider:before 
  position: absolute
  content: ""
  height: 14px
  width: 14px
  left: 3px
  bottom: 3px
  background-color: white
  -webkit-transition: .4s
  transition: .4s

input:checked + .slider 
  background-color: #2196F3

input:focus + .slider 
  box-shadow: 0 0 1px #2196F3

input:checked + .slider:before 
  -webkit-transform: translateX(14px)
  -ms-transform: translateX(14px)
  transform: translateX(14px)

.slider.round 
  border-radius: 20px

.slider.round:before 
  border-radius: 50%

</style>
