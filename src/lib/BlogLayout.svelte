<script>
  export let title;
  export let description;
  export let date;
</script>

<h1 class="headline">{title}</h1>
<p class="date">{date}</p>
<div class="post">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
