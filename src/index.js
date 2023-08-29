const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  effect: 'coverflow',
  slidesPerView: 4,
  centeredSlide: true,
  autoplay: {
    delay: 1000,
  },
});
