import App from '../src/App.svelte';
import { render } from '@testing-library/svelte';

describe('App', () => {
  it('renders without error', () => {
    expect(() => render(App)).not.toThrow();
  });
});