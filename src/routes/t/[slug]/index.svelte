<script context="module">
  // TODO: Replace with your actual Tumblr API key
  const API_KEY = 'ru6b4z2sDMz7h0WyCULiNuqqgDfgubrdQZtZrVUkXQGkzFPTrF';

  export async function preload({ path, params, query }) {
    if (typeof window === "undefined") return;

    let blogIdentifier = params.slug;
    let url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${API_KEY}&${queryp(query)}`;

    let { posts, res, after } = await get_tumblr_posts(url);

    return { posts, after, res, slugstr: blogIdentifier };
  }
</script>

<script>
  import FullscreenLayout from "../../../components/FullscreenLayout.svelte";

  import { get_tumblr_posts, queryp } from "../../../_tumblr_utils.ts";

  import { stores } from "@sapper/app";
  const { page } = stores();

  import { favorite, layout } from "../../../_prefs";
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
    FullscreenLayout({slugstr}, {posts}, {res}, {after}, params='{$page.query}')
</template>