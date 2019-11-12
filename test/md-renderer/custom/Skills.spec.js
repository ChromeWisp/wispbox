import Skills from '../../../src/md-renderer/custom/Skills'
import Context from '../../../src/md-renderer/parsing/Context';
import Paragraph from '../../../src/md-renderer/parsing/rules/Paragraph';
import Character from '../../../src/md-renderer/parsing/rules/Character';
import Ignore from '../../../src/md-renderer/parsing/rules/Ignore';

describe('Skills Rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Skills();
  });

  describe('matches', () => {
    it('should match skills tag', () => {
      expect(rule.matches('@skills: C++')).toBeTruthy();
    });

    it('should not match ordinary text', () => {
      expect(rule.matches('text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should create production', () => {
      rule.matches('@skills: C++, Javascript');
      
      expect(rule.produce()).toEqual({
        c: 'ul',
        p: {
          className: 'skills-list'
        },
        d: [ {
          c: 'li',
          d: 'C++'
        }, {
          c: 'li',
          d: 'Javascript'
        } ]
      });
    });
  });
});