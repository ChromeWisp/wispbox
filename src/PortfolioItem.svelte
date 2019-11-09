<article class="portfolio-item">
  <section>
    <h1>Pit Stop Panic</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum erat, hendrerit nec orci sed, mollis auctor sem.</p>
    <p>Proin condimentum scelerisque nisi pulvinar pulvinar. Nunc sit amet orci non erat viverra sollicitudin.</p>
  </section>
  <figure>
    <img src="assets/PSPMainMenu.png" alt="img" />
  </figure>
</article>

<style>
  .portfolio-item {
    display: flex;
    flex-direction: column-reverse;
    margin: 1em 1em 2em;
    padding-bottom: 1em;
    border-bottom: 2px solid #333;
  }

  .portfolio-item > * {
    flex: 1;
  }

  .portfolio-item section {
    padding: 1em 0;
  }

  .portfolio-item p {
    font-size: 1.125em;
  }

  .portfolio-item h1 {
    font-size: 2em;
    text-align: center;
  }

  .portfolio-item figure img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .portfolio-item {
      flex-direction: row;
    }

    .portfolio-item section {
      flex-direction: row;
      padding-right: 1em;
    }

    .portfolio-item h1 {
      font-size: 2.25em;
      text-align: left;
    }
  }
</style>