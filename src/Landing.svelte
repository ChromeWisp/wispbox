<script>
  import { goto, anchors } from './anchors'
</script>

<section class="landing">
  <p class="introduction">I'm <span class="atomic"><em>Brendan Phillips</em>,</span> game designer and programmer.</p>
  <nav class="navigation">
    <ul class="horizontal-list">
      <li><button on:click={() => goto(anchors.portfolio)}>Portfolio</button></li>
      <li><button on:click={() => goto(anchors.about)}>About</button></li>
      <li><button on:click={() => goto(anchors.contact)}>Contact</button></li>
    </ul>
  </nav>
</section>

<style>
  .landing {
    position: relative;
    background-color: rgba(25, 22, 34, 0.75);
    color: var(--color-offwhite);
    min-height: 90vh;
    font-size: 2.25em;
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
    image-rendering: pixelated;
    z-index: -1;
  }

  .introduction {
    text-align: center;
    font-weight: 300;
  }

  .atomic {
    display: inline-block;
  }

  .navigation {
    font-size: 0.5em;
  }

  .horizontal-list {
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .horizontal-list li {
    margin: 0 0.5em 1em;
  }

  @media (min-width: 1024px) {
    .landing {
      font-size: 4em;
      padding-top: 20vh;
    }
  }
</style>