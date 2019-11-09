import PortfolioItem from '../src/PortfolioItem.svelte';
import { render, waitForElement } from '@testing-library/svelte';

describe('PortfolioItem', () => {
  it('renders the content', () => {
    fetch.stub('/content/portfolio/item-name/content.md').with('# Title');

    const wrapper = render(PortfolioItem, { props: { name: 'item-name' }});

    return waitForElement(() => wrapper.getByText('Title'));
  });

  afterEach(() => fetch.reset());
});