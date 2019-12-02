<script>
  import PortfolioItem from './PortfolioItem.svelte';
  import content from './content';
  import { anchors } from './anchors';
  
  const items = content.portfolio.order()
</script>

<section id={anchors.portfolio}>
  {#await items}
    <p>Waiting...</p>
  {:then items}
    {#each items as item}
      <PortfolioItem name={item} />
    {/each}
  {/await}
</section>
