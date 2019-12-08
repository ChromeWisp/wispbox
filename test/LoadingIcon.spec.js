import LoadingIcon from '../src/LoadingIcon.svelte';
import { render } from '@testing-library/svelte';

describe('LoadingIcon', () => {
  it('renders without error', () => {
    expect(() => render(LoadingIcon)).not.toThrow();
  });
});