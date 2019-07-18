import NAME from '../src/NAME.svelte';
import { render } from '@testing-library/svelte';

describe('NAME', () => {
  it('renders without error', () => {
    expect(() => render(NAME)).not.toThrow();
  });
});