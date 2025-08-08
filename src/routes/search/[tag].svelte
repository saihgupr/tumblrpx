<script context="module">
  import { API_KEY } from '../../config.js';

  export async function preload({ path, params, query }) {
    if (typeof window === "undefined") return;

    let tag = params.tag;

    // Check if we have a valid API key before making the request
    if (API_KEY === 'OAuth Consumer Key Goes Here') {
      // Return empty data to let the client handle API key setup
      return { 
        posts: [], 
        after: null, 
        res: { ok: false, res: "Invalid API key. Please set your Tumblr API key in settings." }, 
        slugstr: tag 
      };
    }

    let url = `https://api.tumblr.com/v2/tagged?tag=${tag}&api_key=${API_KEY}&${queryp(query)}`;

    let { posts, res, after } = await get_tumblr_posts(url);

    return { posts, after, res, slugstr: tag };
  }
</script>

<script>
  import FullscreenLayout from "../../components/FullscreenLayout.svelte";

  import { get_tumblr_posts, queryp } from "../../_tumblr_utils.ts";

  import { stores } from "@sapper/app";
  const { page } = stores();

  import { favorite, layout } from "../../_prefs";
  favorite.useLocalStorage({});
  layout.useLocalStorage(0);

  export let posts = [];
  export let res;
  export let after;
  export let slugstr;

  // Load `favorite` from localstorage
  for (let p of posts) {
    p["favorite"] = !!($favorite[p.url]?.favorite);
  }
</script>

<template lang="pug">
  +if('$layout == 0')
    FullscreenLayout({slugstr}, {posts}, {res}, {after}, params='{$page.query}', pageType='search')
</template>