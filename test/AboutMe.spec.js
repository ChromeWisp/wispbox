import AboutMe from '../src/AboutMe.svelte';
import { render } from '@testing-library/svelte';

describe('AboutMe', () => {
  it('renders without error', () => {
    expect(() => render(AboutMe)).not.toThrow();
  });
});