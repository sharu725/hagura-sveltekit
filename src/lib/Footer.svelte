<script>
  import { darkMode } from "$lib/stores";
  const thisYear = new Date().getFullYear();
</script>

<footer>
  <div class="links">
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
    <a href="https://github.com/sharu725/hagura-sveltekit">Download</a>

    <span
      aria-label="Switch Dark or Light Mode"
      title="Switch Dark or Light Mode"
      class="mode"
      class:light-mode={$darkMode}
      class:dark-mode={!$darkMode}
      on:click={() => ($darkMode = !$darkMode)}
    />
  </div>
  <p class="copyrights">
    <small
      >Copyrights &copy; {thisYear} | Developed by
      <a href="http://webjeda.com">webjeda</a>
    </small>
  </p>
</footer>

<style>
  footer {
    margin: var(--size-8) 0;
  }

  .links a {
    margin-right: var(--size-2);
  }

  .mode {
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    height: var(--font-size-default);
    width: var(--font-size-default);
    background-position: center;
    display: inline-block;
    vertical-align: middle;
    transition-duration: 300ms;
  }

  .dark-mode {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='%23999'%3E%3Cpath d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /%3E%3C/svg%3E");
  }

  .light-mode {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='orange'%3E%3Cpath fill-rule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  }
</style>
