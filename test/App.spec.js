import App from '../src/App.svelte';
import { render } from '@testing-library/svelte';

describe('App', () => {
  it('should show the name', () => {
    const wrapper = render(App, { props: { name: 'name' } });
    expect(wrapper.getByText('Hello name!'));
  });
});