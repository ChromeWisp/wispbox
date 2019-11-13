<script>
  import content from './content'
  import render from './md-renderer'

  export let name

  const text = content.section(name)
</script>

<section class="centered-section">
  {#await text}
    <p>...</p>
  {:then text}
    {@html render(text)}
  {/await}
</section>

<style>
  .centered-section,
  .centered-section :global(p) {
    text-align: center;
  }

  .centered-section {
    padding: 5em 2em;
    margin: 0 1em 3em;
    border-bottom: 0.125em solid var(--color-offgrey);
  }

  .centered-section :global(h1),
  .centered-section :global(h2),
  .centered-section :global(h3),
  .centered-section :global(h4),
  .centered-section :global(h5),
  .centered-section :global(h6) {
    margin-bottom: 1em;
  }

  @media (min-width: 1024px) {
    .centered-section {
      padding: 5em 5em;
      font-size: 1.25em;
    }
  }
</style>