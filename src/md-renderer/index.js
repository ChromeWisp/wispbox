import { Parser } from './parsing';
import Footer from './custom/Footer';

const render = value => {
  if(Array.isArray(value)) {
    return value.map(render).join('');
  } else if(value && value.c) {
    return `<${value.c}>${render(value.d)}</${value.c}>`
  } else {
    return value;
  }
};

export default md => render(Parser
  .withBlockRules([Footer])
  .parse(md));
