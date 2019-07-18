<section class="landing">
  <p class="introduction">I'm <span class="atomic"><strong class="name">Brendan Phillips</strong>,</span> game designer and programmer.</p>
</section>

<style>
  .landing {
    position: relative;
    background-color: rgba(25, 22, 34, 0.75);
    color: #fdfdfd;
    height: 90vh;
    font-size: 3em;
    padding: 15vh 0.5em 0;
  }

  .landing::before {
    position: absolute;
    top: 0;
    left: 0;
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

  .introduction {
    text-align: center;
    font-weight: 300;
  }

  .name {
    color: #51d4d5;
    font-weight: inherit;
  }

  .atomic {
    display: inline-block;
  }

  @media (min-width: 1024px) {
    .landing {
      font-size: 5em;
      padding-top: 20vh;
    }
  }
</style>