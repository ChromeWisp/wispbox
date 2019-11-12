import { Rule, ProductionBuilder } from '../parsing';

export default class Skills extends Rule {
  constructor(context) {
    super(/^@skills:\s*(.*)/, context);
  }

  skills() {
    return this.match[1].split(/,\s*/);
  }

  produce() {
    return new ProductionBuilder()
      .component('ul')
      .props({
        className: 'skills-list'
      })
      .children(this.skills().map(skill => new ProductionBuilder()
        .component('li')
        .children(skill)
        .build()))
      .build();
  }
}