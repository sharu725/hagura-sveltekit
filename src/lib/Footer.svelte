<script>
  import { darkMode } from "$lib/stores";
  let thisYear = new Date().getFullYear();
</script>

<footer>
  <div class="links">
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
    <a href="https://github.com/sharu725/hagura-sveltekit">Github</a>
    <button on:click={() => ($darkMode = !$darkMode)}>Dark/Light</button>
  </div>
  <p class="copyrights">
    <small
      >Copyrights &copy; {thisYear} by Hagura - Light! | Developed by
      <a href="http://webjeda.com">webjeda</a>
    </small>
  </p>
</footer>

<style>
  button {
    padding: 0;
    background: none;
    border: none;
    font-size: var(--font-size-default);
    box-shadow: none;
    color: var(--brand-color);
  }
  button:hover {
    background: none;
    box-shadow: none;
    color: var(--text-color);
  }
</style>
