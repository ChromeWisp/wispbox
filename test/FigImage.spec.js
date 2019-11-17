import FigImage from '../src/FigImage.svelte';
import { render } from '@testing-library/svelte';

describe('FigImage', () => {
  it('renders without error', () => {
    expect(() => render(FigImage)).not.toThrow();
  });
});