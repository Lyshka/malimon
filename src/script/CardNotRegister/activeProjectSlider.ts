import Swiper from "swiper";
import "swiper/css";

new Swiper("#activeProjectSlider", {
  breakpoints: {
    1150: {
      spaceBetween: 20,
      slidesPerView: 1,
      width: 484.5,
    },
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
      width: 184,
    },
  },
});
