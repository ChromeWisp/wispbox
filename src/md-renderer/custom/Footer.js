import { Rule, ProductionBuilder } from '../parsing';

export default class Footer extends Rule {
  constructor(context) {
    super(/^@footer((.|\n|\r)*)/, context);
  }

  rest() {
    return this.match[1];
  }

  produce() {
    return new ProductionBuilder()
      .component('footer')
      .children(this.context.asBlock.parse(this.rest()))
      .build();
  }
}