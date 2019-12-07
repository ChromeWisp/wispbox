<script>
  import { goto, anchors } from './anchors'
  import SocialLinks from './SocialLinks.svelte'
</script>

<section class="landing">
  <video muted loop autoplay poster="assets/ribbon-street.png" class="background">
    <source src="assets/ribbon-street.webm" type="video/webm" />
    <source src="assets/ribbon-street.mp4" type="video/mp4" />
  </video>
  <p class="introduction">I'm <span class="atomic"><em>Brendan Phillips</em>,</span> game designer and programmer.</p>
  <nav class="navigation">
    <ul class="horizontal-list">
      <li><button on:click={() => goto(anchors.portfolio)}>Portfolio</button></li>
      <li><button on:click={() => goto(anchors.about)}>About</button></li>
      <li><button on:click={() => goto(anchors.contact)}>Contact</button></li>
    </ul>
  </nav>
  <SocialLinks class="social-section" />
</section>

<style>
  .landing {
    position: relative;
    background-color: rgba(25, 22, 34, 0.75);
    color: var(--color-offwhite);
    min-height: 100vh;
    font-size: 2.25em;
    padding: 15vh 0.5em 0.5em;
    overflow: hidden;
  }

  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  @media (min-aspect-ratio: 3/2) {
    .background {
      width: 100%;
    }
  }

  @media (max-aspect-ratio: 3/2) {
    .background {
      height: 100%;
    }
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

  .landing :global(.social-section) {
    padding: 1.5em 0;
    font-size: 0.333em;
  }

  @media (min-width: 1024px) {
    .landing {
      font-size: 4em;
      padding-top: 20vh;
    }
  }
</style>