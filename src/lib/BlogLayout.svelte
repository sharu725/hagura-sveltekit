<script>
  import { seo } from "$lib/store";

  export let title;
  export let description;
  export let date;

  $seo = {
    title: title,
    description: description,
  };
</script>

<h1 class="font-bold text-6xl mb-4">{title}</h1>
<p class="text-gray-400 mb-2">{date}</p>
<div class="post">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<style>
  .post {
    margin-bottom: 4rem;
  }
</style>
