import SocialLinks from '../src/SocialLinks.svelte';
import { render } from '@testing-library/svelte';

describe('SocialLinks', () => {
  it('renders without error', () => {
    expect(() => render(SocialLinks)).not.toThrow();
  });
});