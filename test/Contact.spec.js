import Contact from '../src/Contact.svelte';
import { render } from '@testing-library/svelte';

describe('Contact', () => {
  it('renders without error', () => {
    expect(() => render(Contact)).not.toThrow();
  });
});