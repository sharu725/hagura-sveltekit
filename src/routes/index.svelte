<script context="module">
  const posts = import.meta.glob("./blog/*.{md,svx}");

  let body = [];

  for (const path in posts) {
    body.push(
      posts[path]().then(({ metadata }) => {
        return {
          metadata,
          path,
        };
      })
    );
  }
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    const res = await Promise.all(body);
    const posts = res;
    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import { paginate, PaginationNav } from "svelte-paginate";
  import { seo } from "$lib/store";
  //https://www.npmjs.com/package/svelte-paginate

  export let posts;

  let items = posts;
  let currentPage = 1;
  let pageSize = 2;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  $seo = {
    title: "Hagura - Light",
    description: "Hagura is a light-weight theme/template built for sveltekit.",
  };
</script>

<main>
  <article>
    <h1 class="headline text-7xl leading-relaxed font-black font-display mb-4">
      Hagura - Light!
    </h1>
    <div class="article-list">
      {#each paginatedItems as { metadata: { title, description, tags, outline, slug }, path }}
        <div class="mb-4">
          <a sveltekit:prefetch href={path.replace(/\.[^/.]+$/, "")}
            ><h2 class="text-3xl leading-relaxed">{title}</h2></a
          >
          <p>{description}</p>
        </div>
      {/each}
    </div>
    <div class="mx-auto">
      <PaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    </div>
  </article>
</main>
