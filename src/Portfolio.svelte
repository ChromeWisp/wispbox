<script>
  import PortfolioItem from './PortfolioItem.svelte';
  import content from './content'
  
  const items = content.portfolio.order()
</script>

<a name="portfolio" />
<section>
  {#await items}
    <p>Waiting...</p>
  {:then items}
    {#each items as item}
      <PortfolioItem name={item} />
    {/each}
  {/await}
</section>
