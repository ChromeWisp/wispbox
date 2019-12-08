<div class="loading-icon">
  <div class="pixel" style="animation-delay: -500ms;"></div>
  <div class="pixel" style="animation-delay: 0ms;"></div>
  <div class="pixel" style="animation-delay: 500ms;"></div>
</div>

<style>
  @keyframes pixel-blink {
    0% {
      background-color: var(--color-offgrey);
    }

    67% {
      background: var(--color-lightgrey);
    }

    100% {
      background-color: var(--color-offgrey);
    }
  }

  .loading-icon {
    display: flex;
    justify-content: center;
  }

  .pixel {
    width: 0.5em;
    height: 0.5em;
    background-color: var(--color-offgrey);
    margin: 0 0.125em;
    animation: pixel-blink 1500ms step-end infinite;
  }
</style>