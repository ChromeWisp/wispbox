<script>
  import FigImage from './FigImage.svelte'
  import content from './content'
  import render from './md-renderer'
  
  const text = content.about.content()
  const image = content.about.image
</script>

<section class="about-me">
  <div class="content">
    {#await text}
      <p>Waiting...</p>
    {:then text}
      {@html render(text)}
    {/await}
  </div>
  <FigImage class="figure" src={image} alt="Brendan Phillips" />
</section>

<style>
  .about-me {
    display: flex;
    flex-direction: column;
    padding: 0 1em;
  }

  .about-me :global(h1) {
    text-align: center;
  }

  .content {
    margin-bottom: 2em;
  }

  @media (min-width: 1024px) {
    .about-me {
      flex-direction: row-reverse;
      padding: 0 1em;
    }

    .about-me :global(h1) {
      text-align: left;
    }

    .content {
      margin-left: 2em;
      flex: 2;
    }

    .about-me :global(.figure) {
      flex: 1;
    }
  }
</style>