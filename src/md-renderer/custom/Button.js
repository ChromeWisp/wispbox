import { Rule, ProductionBuilder } from '../parsing';

export default class Button extends Rule {
  constructor(context) {
    super(/^@button\[(.*?)\]\((.*?)\)/, context);
  }

  text() {
    return this.match[1];
  }

  link() {
    return this.match[2];
  }

  produce() {
    return new ProductionBuilder()
      .component('a')
      .props({
        className: 'button',
        href: this.link(),
        target: '_blank'
      })
      .children(this.text())
      .build();
  }
}