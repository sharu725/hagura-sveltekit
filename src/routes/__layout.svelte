<script>
  import "../../static/global.css";
  import { darkMode } from "$lib/stores";
  import Footer from "$lib/Footer.svelte";
</script>

<div class="body" class:dark={$darkMode}>
  <div class="wrapper">
    <header>
      <a sveltekit:prefetch class="home" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ic"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
          /></svg
        >
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
  .home {
    position: fixed;
    display: grid;
    place-items: center;
    opacity: 0.9;
    top: 50px;
    left: 50px;
    transition-duration: 300ms;
    border-radius: 50%;
    box-shadow: 0 5px 10px var(--shadow-color);
  }
  .home svg {
    height: 40px;
    width: 40px;
  }

  .home:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1000px) {
    .home {
      top: 90%;
      left: 90%;
      opacity: 0.9;
    }
    .home svg {
      height: 30px;
      width: 30px;
    }
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
