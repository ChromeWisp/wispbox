export const anchors = {
  portfolio: 'portfolio',
  about: 'about',
  contact: 'contact'
};

export const goto = name => document.querySelector(`#${name}`).scrollIntoView({
  behavior: 'smooth'
})