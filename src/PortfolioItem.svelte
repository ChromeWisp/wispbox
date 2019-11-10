<script>
  import render from './md-renderer';
  import content from './content';

  export let name;

  const text = content.portfolio.item(name).content()
</script>

<article class="portfolio-item">
  {#await text}
    <section><p>...</p></section>
  {:then text}
    <section>
      {@html render(text)}
    </section>
    <figure>
      <img src={`content/portfolio/${name}/gallery/image.png`} alt="img" />
    </figure>
  {/await}
</article>

<style>
  .portfolio-item {
    display: flex;
    flex-direction: column-reverse;
    margin: 1em 1em 3em;
    padding-bottom: 1em;
    border-bottom: 0.125em solid var(--color-offgrey);
  }

  .portfolio-item > * {
    flex: 1;
  }

  .portfolio-item section {
    padding: 1em 0;
  }

  .portfolio-item :global(h1) {
    font-size: 2em;
    text-align: center;
  }

  .portfolio-item figure {
    border: 1em solid var(--color-offgrey);
  }

  .portfolio-item figure img {
    width: 100%;
    display: block;
  }

  @media (min-width: 1024px) {
    .portfolio-item {
      flex-direction: row;
    }

    .portfolio-item section {
      flex-direction: row;
      padding-right: 1em;
    }

    .portfolio-item :global(h1) {
      font-size: 2.25em;
      text-align: left;
    }
  }
</style>