const location = name => `/content${name}`
const get = loc => fetch(loc).then(res => res.text())

export default {
  section: name => get(location(`/sections/${name}.md`)),
  about: {
    content: () => get(location('/about/content.md')),
    image: location('/about/image.png')
  },
  portfolio: {
    order: () => get(location('/portfolio/order.txt'))
      .then(items => items.split(/\r?\n/).filter(item => item.trim().length > 0)),
    item: name => ({
      content: () => get(location(`/portfolio/${name}/content.md`))
    })
  }
};