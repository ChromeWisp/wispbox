import App from './App.svelte';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default new App({
  target: document.body
});