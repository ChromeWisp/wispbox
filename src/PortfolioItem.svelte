<script>
  import FigImage from './FigImage.svelte';
  import render from './md-renderer';
  import content from './content';
  import LoadingIcon from './LoadingIcon.svelte';

  export let name;

  const text = content.portfolio.item(name).content()
</script>

<article class="portfolio-item">
  {#await text}
    <section><LoadingIcon /></section>
  {:then text}
    <section class="inner-item">
      {@html render(text)}
    </section>
    <FigImage class="inner-item" src={`content/portfolio/${name}/gallery/image.png`} alt={name} />
  {/await}
</article>

<style>
  .portfolio-item {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    margin: 1em 1em 3em;
    padding-bottom: 1em;
    border-bottom: 0.125em solid var(--color-offgrey);
  }

  .portfolio-item :global(.inner-item) {
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

  .portfolio-item :global(.skills-list) {
    list-style: none;
    margin: 1em 0 0 0.5em;
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

  .portfolio-item :global(footer) {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-left: -0.25em;
  }

  .portfolio-item :global(footer .button) {
    margin: 0.25em;
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
  }
</style>