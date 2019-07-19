import Icon from '../src/Icon.svelte';
import { render } from '@testing-library/svelte';

describe('Icon', () => {
  it('renders without error', () => {
    expect(() => render(Icon)).not.toThrow();
  });
});