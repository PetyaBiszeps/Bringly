import { scrollActive, scrollHeader, scrollUp } from './src/js/scroll.js'
import { linkAction, showMenu } from './src/js/menu.js'
import { animations } from './src/js/animations.js'
import { switchTheme } from './src/js/theme.js'

// constants
const navLink = document.querySelectorAll('.nav__link')

// Methods
async function inlineSvgs() {
  const placeholders = document.querySelectorAll('[data-inline-svg]')

  await Promise.all([...placeholders].map(async placeholder => {
    const response = await fetch(placeholder.dataset.inlineSvg)

    placeholder.outerHTML = await response.text()
  }))
}

// Menu Actions
showMenu('nav__toggle', 'nav__menu')
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Actions
window.addEventListener('scroll', scrollActive)
window.addEventListener('scroll', scrollHeader)
window.addEventListener('scroll', scrollUp)

// Switch Theme
switchTheme()

// Animations
inlineSvgs().then(animations)
