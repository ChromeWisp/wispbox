<script>
  import Icon from './Icon.svelte';
</script>

<footer class="footer">
  <a class="social-link" href="https://twitter.com/ChromeWisp" title="Twitter" target="_blank"><Icon icon="twitter" /></a>
  <a class="social-link" href="https://www.linkedin.com/in/phillipsbrendan/" title="LinkedIn" target="_blank"><Icon icon="linkedin" /></a>
</footer>

<style>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em 0;
    background: var(--color-grey);
  }

  .social-link {
    color: var(--color-offwhite);
    display: block;
    font-size: 1.5em;
    margin: 0 0.5em;
  }

  .social-link:hover {
    color: var(--color-teal);
  }
</style>