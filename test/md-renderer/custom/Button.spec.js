import Button from '../../../src/md-renderer/custom/Button'

describe('Button Rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Button();
  });

  describe('matches', () => {
    it('should match button tag', () => {
      expect(rule.matches('@button[text](http://link.com)')).toBeTruthy();
    });

    it('should not match ordinary text', () => {
      expect(rule.matches('text')).toBeFalsy();
    });

    it('should not match when missing text', () => {
      expect(rule.matches('@button(http://link.com)')).toBeFalsy();
    });
    
    it('should not match when missing link', () => {
      expect(rule.matches('@button[text]')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should create production', () => {
      rule.matches('@button[text](http://link.com)');
      
      expect(rule.produce()).toEqual({
        c: 'a',
        p: {
          className: 'button',
          href: 'http://link.com',
          target: '_blank'
        },
        d: 'text'
      });
    });
  });
});