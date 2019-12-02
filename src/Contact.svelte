<script>
  import { anchors } from './anchors'
</script>

<section id={anchors.contact} class="contact">
  <h1 class="title">Let's get in touch!</h1>
  <p class="info">Feel free to drop me a message! Whether it be about work, games, or just to say hi, I'd be happy to talk.</p>
  <form class="contact-form">
    <label><span class="label-name required">Name</span> <input type="text" name="name" required /></label>
    <label><span class="label-name required">Email</span> <input type="email" name="email" required /></label>
    <label><span class="label-name">Company</span> <input type="text" name="company" /></label>
    <label><span class="label-name required">Message</span> <textarea name="message" required></textarea></label>
    <button>Send me an email!</button>
  </form>
</section>

<style>
  .contact {
    padding: 1em;
  }

  .title, .info {
    text-align: center;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin: auto;
  }

  .contact-form label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  .contact-form button {
    align-self: center;
  }

  .label-name {
    display: inline-block;
  }

  .label-name.required::after {
    display: inline-block;
    content: '*';
    margin: 0.125em;
    color: var(--color-teal);
  }
</style>