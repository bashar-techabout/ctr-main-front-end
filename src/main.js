// About Swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  autoHeight: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: { delay: 4000, disableOnInteraction: false },
  breakpoints: {
    1024: { slidesPerView: 2 },
  },
});
// About Swiper Ends
