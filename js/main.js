
AOS.init({ once: true, duration: 700 });

// HERO Swiper
const heroSwiper = new Swiper('.hero-swiper', {
  effect: 'fade',
  speed: 800,
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: '.hero .swiper-pagination', clickable: true }
});

// Featured Projects Swiper - 2 cards per view on desktop
const projSwiper = new Swiper('.projects-swiper', {
  loop: true,
  spaceBetween: 16,
  autoplay: { delay: 2800, disableOnInteraction: false },
  slidesPerView: 1,
  breakpoints: {
    480: { slidesPerView: 1.1, spaceBetween: 16 },
    640: { slidesPerView: 1.3, spaceBetween: 18 },
    900: { slidesPerView: 2, spaceBetween: 18 }
  },
  navigation: { nextEl: '.projects-swiper .swiper-button-next', prevEl: '.projects-swiper .swiper-button-prev' },
  pagination: { el: '.projects-swiper .swiper-pagination', clickable: true }
});

// Ready projects Swiper
const readySwiper = new Swiper('.ready-swiper', {
  loop: true,
  spaceBetween: 12,
  centeredSlides: false,
  slidesPerView: 1,
  breakpoints: {
    480: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 16 },
    640: { slidesPerView: 1.5, centeredSlides: true, spaceBetween: 16 },
    768: { slidesPerView: 2.2, centeredSlides: true, spaceBetween: 16 },
    1024: { slidesPerView: 3.2, centeredSlides: true, spaceBetween: 16 }
  },
  autoplay: { delay: 2300, disableOnInteraction: false },
  pagination: { el: '.ready-swiper .swiper-pagination', clickable: true }
});

// Shine section activation on scroll
const shine = document.querySelector('.shine-section');
const cb = () => {
  if (!shine) return;
  const r = shine.getBoundingClientRect();
  if (r.top < window.innerHeight * 0.7) shine.classList.add('active');
};
window.addEventListener('scroll', cb); cb();

// Disable right-click & drag on owner cards
document.addEventListener('contextmenu', (e)=>{
  if (e.target.closest('.protected')) e.preventDefault();
}, {passive:false});
document.querySelectorAll('.protected img').forEach(img=>{
  img.setAttribute('draggable','false');
  img.addEventListener('dragstart', e=>e.preventDefault());
});

// Timed call popup: show after 5s then auto-hide after another 6s
const pop = document.getElementById('call-pop');
setTimeout(()=>{
  if(pop){ pop.classList.add('show'); setTimeout(()=>pop.classList.remove('show'), 6000); }
}, 5000);
if(pop) pop.querySelector('.close').addEventListener('click', ()=>pop.classList.remove('show'));


// Swiper init for Why Choose Us
var whySwiper = new Swiper('.whySwiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if(mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on navigation links
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}
