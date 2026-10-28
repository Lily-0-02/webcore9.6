import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
console.log('It works!')

let brandsSwiper
let devicesSwiper
let pricesSwiper

function initSwipers() {
  if (window.innerWidth <= 768) {
    if (!brandsSwiper) {
      brandsSwiper = new Swiper('.brands', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.brand-section .swiper-pagination',
          clickable: true
        }
      })
    }

    if (!devicesSwiper) {
      devicesSwiper = new Swiper('.devices', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.devices-section .swiper-pagination',
          clickable: true
        }
      })
    }

    if (!pricesSwiper) {
      pricesSwiper = new Swiper('.prices', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.prices-section .swiper-pagination',
          clickable: true
        }
      })
    }
  } else {
    ;[brandsSwiper, devicesSwiper, pricesSwiper].forEach((swiper) => {
      if (swiper) {
        swiper.destroy(true, true)
      }
    })

    brandsSwiper = null
    devicesSwiper = null
    pricesSwiper = null
  }
}

window.addEventListener('load', initSwipers)
window.addEventListener('resize', initSwipers)
const menu = document.querySelector('.menu')
const openMenuButton = document.querySelector('.js-menu-open')
const closeMenuButton = document.querySelector('.js-menu-close')
const menuOverlay = document.querySelector('.menu-overlay')

if (menu && openMenuButton && closeMenuButton && menuOverlay) {
  const openMenu = () => {
    menu.classList.add('menu--open')
    menuOverlay.classList.add('menu-overlay--open')
    openMenuButton.setAttribute('aria-expanded', 'true')
  }

  const closeMenu = () => {
    menu.classList.remove('menu--open')
    menuOverlay.classList.remove('menu-overlay--open')
    openMenuButton.setAttribute('aria-expanded', 'false')
  }

  openMenuButton.addEventListener('click', openMenu)
  closeMenuButton.addEventListener('click', closeMenu)
  menuOverlay.addEventListener('click', closeMenu)
}
const readMore = document.querySelector('.services__read-more')
const extraText = document.querySelector('.services__text-extra')

readMore.addEventListener('click', function () {
  extraText.classList.toggle('services__text-extra--open')
  readMore.classList.toggle('services__read-more--open')
})
const showAllButton = document.querySelector('.show-all')
const brands = document.querySelector('.brands')
const showAllText = document.querySelector('.show-all__text')

showAllButton.addEventListener('click', function () {
  brands.classList.toggle('brands--open')
  showAllButton.classList.toggle('show-all--open')

  if (brands.classList.contains('brands--open')) {
    showAllText.textContent = 'Скрыть'
  } else {
    showAllText.textContent = 'Показать все'
  }
})
const devicesButton = document.querySelector('.devices-section__show-all')

const devices = document.querySelector('.devices')

const devicesButtonText = document.querySelector(
  '.devices-section__show-all-text'
)

devicesButton.addEventListener('click', function () {
  devices.classList.toggle('devices--open')

  devicesButton.classList.toggle('devices-section__show-all--open')

  if (devices.classList.contains('devices--open')) {
    devicesButtonText.textContent = 'Скрыть'
  } else {
    devicesButtonText.textContent = 'Показать все'
  }
})
const menuItems = document.querySelectorAll('.menu__item')

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((link) => {
      link.classList.remove('menu__item--active')
    })

    item.classList.add('menu__item--active')
  })
})
