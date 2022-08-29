<script>
  export let data;
  const { posts } = data;
</script>

<main>
  <article>
    <h1 class="headline">Hagura - Light!</h1>
    <div class="article-list py-10">
      {#each posts as { metadata: { title, description, tags, outline, slug }, path }}
        <div class="mb-4">
          <a
            sveltekit:prefetch
            href={path.replace("+page.md", "").replace("+page.svx", "")}
            ><h2>{title}</h2></a
          >
          <p>{description}</p>
        </div>
      {/each}
    </div>
  </article>
</main>

<svelte:head>
  <title>Hagura - Sveltekit Template</title>
  <meta
    name="description"
    content="Chola - A minimal Sveltekit theme or template which uses mdsvex. Suitable for text based websites and blogs."
  />
</svelte:head>

<style>
  @media screen and (max-width: 600px) {
    h2 {
      font-size: var(--font-size-3);
    }
  }
</style>
