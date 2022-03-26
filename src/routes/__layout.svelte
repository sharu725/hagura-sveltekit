<script>
  import "../style.css";
  import { darkMode } from "$lib/stores";
  import Footer from "$lib/Footer.svelte";
</script>

<div class="body" class:dark={$darkMode}>
  <div class="wrapper">
    <header>
      <a href="/">
        <div class="home" />
      </a>
    </header>
    <article>
      <slot />
    </article>
    <Footer />
  </div>
</div>

<svelte:head>
  <meta property="og:image" content="/hagura-sveltekit-template-theme.png" />
</svelte:head>

<style>
  .body {
    color: var(--text-color);
    background-color: var(--bg-color);
    transition: all ease 300ms;
  }

  .wrapper {
    min-height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    padding: var(--size-6) var(--size-2);
  }

  @media screen and (max-width: 600px) {
    .body {
      font-size: var(--font-size-2);
    }
    .wrapper {
      padding: var(--size-3) var(--size-4);
    }
  }
</style>
