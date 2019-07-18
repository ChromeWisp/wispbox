<section class="landing">
  <p class="intro-text">I'm <strong class="name">Brendan Phillips</strong>, game designer and programmer!</p>
</section>

<style>
  .landing {
    position: relative;
    background-color: #2F2B43B8;
    color: #fdfdfd;
    height: 100vh;
  }

  .landing::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url('assets/cityscape.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    image-rendering: crisp-edges;
    z-index: -1;
  }

  .intro-text {
    font-size: 3em;
    padding: 2em;
  }

  .name {
    color: #51d4d5;
    font-weight: normal;
  }
</style>