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
    display: flex;
    flex-direction: column;
  }

  .portfolio-item :global(h1) {
    text-align: center;
  }

  .portfolio-item figure {
    border: 1em solid var(--color-offgrey);
  }

  .portfolio-item figure img {
    width: 100%;
    display: block;
  }

  .portfolio-item :global(.skills-list) {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.875em;
    color: var(--color-teal);
    text-align: right;
    font-style: italic;
    flex: 1;
  }

  .portfolio-item :global(.skills-list li) {
    display: inline-block;
  }

  .portfolio-item :global(.skills-list li::after) {
    content: ',';
    margin-right: 0.125em;
  }

  .portfolio-item :global(.skills-list li:last-child::after) {
    content: '';
    margin-right: 0;
  }

  @media (min-width: 1024px) {
    .portfolio-item {
      flex-direction: row;
    }

    .portfolio-item section {
      padding-right: 1em;
    }

    .portfolio-item :global(h1) {
      font-size: 2.25em;
      text-align: left;
    }

    .portfolio-item :global(footer) {
      flex: 1;
      display: flex;
      align-items: flex-end;
    }
  }
</style>