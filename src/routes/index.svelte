<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/posts.json`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  //https://www.npmjs.com/package/svelte-paginate
  import { paginate, PaginationNav } from "svelte-paginate";

  export let posts;

  let items = posts;
  let currentPage = 1;
  let pageSize = 2;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<main>
  <article>
    <h1 class="headline">Hagura - Light!</h1>
    <div class="article-list py-10">
      {#each paginatedItems as { metadata: { title, description, tags, outline, slug }, path }}
        <div class="mb-4">
          <a sveltekit:prefetch href={path.replace(/\.[^/.]+$/, "")}
            ><h2>{title}</h2></a
          >
          <p>{description}</p>
        </div>
      {/each}
    </div>

    <PaginationNav
      totalItems={items.length}
      {pageSize}
      {currentPage}
      limit={1}
      showStepOptions={true}
      on:setPage={(e) => (currentPage = e.detail.page)}
    />
  </article>
</main>

<style>
  @media screen and (max-width: 600px) {
    h2 {
      font-size: var(--font-size-3);
    }
  }
</style>


<svelte:head>
  <title>Hagura - Sveltekit Template</title>
  <meta name="description" content="Hagura - A minimal Sveltekit theme or template which uses mdsvex. Suitable for text based websites and blogs." />
</svelte:head>
