import Portfolio from '../src/Portfolio.svelte';
import { render, waitForElement } from '@testing-library/svelte';

describe('Portfolio', () => {
  it('renders each portfolio item', () => {
    fetch.stub('/content/portfolio/order.txt').with('apple\norange');
    fetch.stub('/content/portfolio/apple/content.md').with('# Apple');
    fetch.stub('/content/portfolio/orange/content.md').with('# Orange');

    const wrapper = render(Portfolio);

    return Promise.all([
      waitForElement(() => wrapper.findByText('Apple')),
      waitForElement(() => wrapper.findByText('Orange'))
    ])
  });
});