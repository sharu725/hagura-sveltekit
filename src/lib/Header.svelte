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

<style>
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
    height: 50px;
    width: 50px;
  }
  .home:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1000px) {
    .home {
      top: 90%;
      left: 90%;
      height: 30px;
      width: 30px;
      opacity: 0.9;
    }
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
</style>
