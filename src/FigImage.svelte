<script>
  export let src = ''
  export let alt = ''
</script>

<figure class={$$props.class}>
  <img src={src} alt={alt} />
</figure>

<style>
  figure {
    border: 1em solid var(--color-offgrey);
  }

  figure img {
    width: 100%;
    display: block;
  }
</style>