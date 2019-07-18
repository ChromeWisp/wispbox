import Landing from '../src/Landing.svelte';
import { render } from '@testing-library/svelte';

describe('Landing', () => {
  it('renders without error', () => {
    expect(() => render(Landing)).not.toThrow();
  });
});