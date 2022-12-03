const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.blog__btn-next',
    prevEl: '.blog__btn-prev',
  },
});