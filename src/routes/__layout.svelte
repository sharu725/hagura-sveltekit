<script>
  import "../app.postcss";
  import "../style.css";
</script>

<div class="body-wrapper max-w-screen-md mx-auto">
  <slot />
</div>

<svelte:head>
  <title>Hagura - Light</title>
  <meta
    name="description"
    content="Hagura is a light-weight theme/template built for sveltekit"
  />
</svelte:head>
