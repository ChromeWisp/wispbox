import CenteredSection from '../src/CenteredSection.svelte';
import { render } from '@testing-library/svelte';

describe('CenteredSection', () => {
  it('renders without error', () => {
    expect(() => render(CenteredSection, { props: {name: ''}})).not.toThrow();
  });
});