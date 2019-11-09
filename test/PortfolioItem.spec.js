import PortfolioItem from '../src/PortfolioItem.svelte';
import { render } from '@testing-library/svelte';

describe('PortfolioItem', () => {
  it('renders without error', () => {
    expect(() => render(PortfolioItem)).not.toThrow();
  });
});