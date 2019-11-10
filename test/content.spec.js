import content from '../src/content';

describe('content', () => {
  describe('portfolio', () => {
    it('gets the order of items to show in the portfolio', () => {
      fetch.stub('/content/portfolio/order.txt').with('apple\norange');

      return content.portfolio.order().then(items => {
        expect(items).toEqual(['apple', 'orange']);
      });
    });

    it('ignores blank entries', () => {
      fetch.stub('/content/portfolio/order.txt').with('apple\n \norange\n');

      return content.portfolio.order().then(items => {
        expect(items).toEqual(['apple', 'orange']);
      });
    });
  });
});