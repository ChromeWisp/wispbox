import { Parser } from './parsing';
import Footer from './custom/Footer';
import Skills from './custom/Skills';

const props = p => {
  if(p)
    return ' ' + Object.entries(p).map(([key, value]) =>
      `${key === 'className' ? 'class' : key}="${value}"`
    ).join(' ');
  else
    return '';
};

const render = value => {
  if(Array.isArray(value)) {
    return value.map(render).join('');
  } else if(value && value.c) {
    return `<${value.c}${props(value.p)}>${render(value.d)}</${value.c}>`
  } else {
    return value;
  }
};

export default md => render(Parser
  .withBlockRules([Footer, Skills])
  .parse(md));
