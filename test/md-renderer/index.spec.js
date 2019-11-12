import render from '../../src/md-renderer'

const md = `
# Title

This is a paragraph with **strong** and _emphasized_ text.

This is another paragraph.
`;

describe('html-renderer', () => {
  it('renders markdown as html', () => {
    const result = render(md);

    expect(result).toEqual('<h1>Title</h1><p>This is a paragraph with <strong>strong</strong> and <em>emphasized</em> text.</p><p>This is another paragraph.</p>');
  });
});