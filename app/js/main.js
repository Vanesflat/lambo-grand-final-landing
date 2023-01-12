// Слайдкер Swiper API
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.blog__btn-next',
    prevEl: '.blog__btn-prev',
  },
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