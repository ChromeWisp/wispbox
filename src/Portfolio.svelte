<script>
  import PortfolioItem from './PortfolioItem.svelte';
  import content from './content';
  import { anchors } from './anchors';
  import LoadingIcon from './LoadingIcon.svelte';
  
  const items = content.portfolio.order()
</script>

<section id={anchors.portfolio}>
  {#await items}
    <LoadingIcon />
  {:then items}
    {#each items as item}
      <PortfolioItem name={item} />
    {/each}
  {/await}
</section>
