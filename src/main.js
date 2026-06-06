import './style.css'
import './swiper-bundle.min.css'
import swiperScriptUrl from './JS/swiper-bundle.min.js?url'

/*=============== HOME SPLIT TEXT ===============*/


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

loadSwiper().then((Swiper) => {
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

    }
  })
})


/*=============== WORK TABS ===============*/
 
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {

  tab.addEventListener('click',() => {
    const targetSelector = tab.dataset.target,
    targetContent = document.querySelector(targetSelector)

    if (!targetContent) return

    tabContents.forEach((content) => content.classList.remove('work_active'))
    tabs.forEach((t) => t.classList.remove('work_active'))

    tab.classList.add('work_active')
    targetContent.classList.add('work_active')
  })
});


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact_button'),
copyEmail = document.getElementById('contact_email').textContent

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    setTimeout(() => {
      copyBtn.innerHTML = 'Copy E-mail <i class="ri-file-copy-line"></i>'
    } , 2000)
  })
})
/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY
  sections.forEach(section => {
    const id = section.id,
    top = section.offsetTop - 50,
    height = section.offsetHeight,
    link = document.querySelector('#nav-menu a[href*=' + id + ']')
    if(!link) return

    link.classList.toggle('active-link' , scrollY > top && scrollY <= top + height)
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
