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
