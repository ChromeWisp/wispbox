import Footer from '../src/Footer.svelte';
import { render } from '@testing-library/svelte';

describe('Footer', () => {
  it('renders without error', () => {
    expect(() => render(Footer)).not.toThrow();
  });
});