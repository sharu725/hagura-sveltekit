<script>
  import "../app.postcss";
  import "../style.css";
</script>

<div class="body-wrapper max-w-screen-md mx-auto mb-10">
  <header>
    <a href="/">
      <div class="home" />
    </a>
  </header>
  <slot />
  <div>
    <p>
      <a href="https://github.com/sharu725/hagura-sveltekit">Github</a>
    </p>
  </div>
</div>
