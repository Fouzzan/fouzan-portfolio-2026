import './style.css'
import './swiper-bundle.min.css'
import swiperScriptUrl from './JS/swiper-bundle.min.js?url'

/*=============== SWIPER PROJECTS ===============*/
const loadSwiper = () => {
  if (window.Swiper) return Promise.resolve(window.Swiper)

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = swiperScriptUrl
    script.onload = () => resolve(window.Swiper)
    script.onerror = () => reject(new Error('Swiper script failed to load'))
    document.head.appendChild(script)
  })
}

const projectsSwiper = document.querySelector('.projects_swiper')

if (projectsSwiper) {
  loadSwiper()
    .then((Swiper) => {
      new Swiper('.projects_swiper', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        speed: 600,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      })
    })
    .catch((error) => console.error(error))
}

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target
    const targetContent = targetSelector ? document.querySelector(targetSelector) : null

    if (!targetContent) return

    tabContents.forEach((content) => content.classList.remove('work_active'))
    tabs.forEach((item) => item.classList.remove('work_active'))

    tab.classList.add('work_active')
    targetContent.classList.add('work_active')
  })
})

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact_button')
const copyEmailElement = document.getElementById('contact_email')
const copyEmail = copyEmailElement?.textContent?.trim()
const initialCopyLabel = 'Copy E-mail <i class="ri-file-copy-line"></i>'

if (copyBtn && copyEmail) {
  copyBtn.addEventListener('click', () => {
    const writeEmail = navigator.clipboard?.writeText
      ? navigator.clipboard.writeText(copyEmail)
      : Promise.reject(new Error('Clipboard API is unavailable'))

    writeEmail
      .then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

        setTimeout(() => {
          copyBtn.innerHTML = initialCopyLabel
        }, 2000)
      })
      .catch(() => {
        copyBtn.innerHTML = 'Copy failed <i class="ri-error-warning-line"></i>'

        setTimeout(() => {
          copyBtn.innerHTML = initialCopyLabel
        }, 2000)
      })
  })
}

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const footerYear = document.getElementById('footer-year')

if (footerYear) {
  footerYear.textContent = new Date().getFullYear().toString()
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach((section) => {
    const { id } = section
    const top = section.offsetTop - 80
    const height = section.offsetHeight
    const link = document.querySelector(`#nav-menu a[href="#${id}"]`)

    if (!link) return

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })
}

if (sections.length) {
  window.addEventListener('scroll', scrollActive)
  scrollActive()
}

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')

if (cursor) {
  let mouseX = 0
  let mouseY = 0

  const cursorMove = () => {
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = 'translate(-50%, -50%)'

    requestAnimationFrame(cursorMove)
  }

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
  })

  cursorMove()

  document.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hide-cursor')
    })

    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hide-cursor')
    })
  })
}
