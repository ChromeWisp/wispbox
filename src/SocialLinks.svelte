<script>
  import Icon from './Icon.svelte';
</script>

<ul class="social">
  <li><a class="social-link" href="https://twitter.com/ChromeWisp" title="Twitter" target="_blank"><Icon icon="twitter" /></a></li>
  <li><a class="social-link" href="https://www.linkedin.com/in/phillipsbrendan/" title="LinkedIn" target="_blank"><Icon icon="linkedin" /></a></li>
</ul>

<style>
  .social {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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