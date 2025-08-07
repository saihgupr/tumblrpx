<script>
  import FullscreenLayout from "../../../components/FullscreenLayout.svelte";
  import { stores } from "@sapper/app";
  const { page } = stores();

  export let slugstr = $page.params.slug;
</script>

<FullscreenLayout {slugstr} params={$page.query} />
