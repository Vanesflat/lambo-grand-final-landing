const mobileMenuBtn = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.header__menu-mobile');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__menu-mobile--open');
  mobileMenuBtn.classList.toggle('header__menu-button--active');
});

// Слайдкер Swiper API
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.blog__btn-next',
    prevEl: '.blog__btn-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// Карта Google API
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;