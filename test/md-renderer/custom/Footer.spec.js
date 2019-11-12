import Footer from '../../../src/md-renderer/custom/Footer'
import Context from '../../../src/md-renderer/parsing/Context';
import Paragraph from '../../../src/md-renderer/parsing/rules/Paragraph';
import Character from '../../../src/md-renderer/parsing/rules/Character';
import Ignore from '../../../src/md-renderer/parsing/rules/Ignore';

describe('Footer Rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Footer(new Context([Paragraph, Ignore], [Character]));
  });

  describe('matches', () => {
    it('should match footer tag', () => {
      expect(rule.matches('@footer\nhello')).toBeTruthy();
    });

    it('should not match ordinary text', () => {
      expect(rule.matches('text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should create production', () => {
      rule.matches('@footer\nhello');
      
      expect(rule.produce()).toEqual({
        c: 'footer',
        d: {
          c: 'p',
          d: 'hello'
        }
      });
    });
  });
});