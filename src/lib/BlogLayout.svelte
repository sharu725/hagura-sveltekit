<script>
  export let title, description, date;
</script>

{#if title}
  <h1 class="headline">{title}</h1>
{/if}
{#if date}
  <p class="date">{date}</p>
{/if}
<div class="post">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
