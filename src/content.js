export default {
  section: name => fetch(`/content/sections/${name}.md`).then(res => res.text()),
  about: {
    content: () => fetch(`/content/about/content.md`).then(res => res.text()),
    image: '/content/about/image.png'
  },
  portfolio: {
    order: () => fetch('/content/portfolio/order.txt')
      .then(res => res.text())
      .then(items => items.split(/\r?\n/).filter(item => item.trim().length > 0)),
    item: name => ({
      content: () => fetch(`/content/portfolio/${name}/content.md`).then(res => res.text())
    })
  }
};