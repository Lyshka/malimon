import { isMobileDevice } from "./utils";

const menuMobileFooter = document.querySelectorAll(".menuMobileFooter");

menuMobileFooter.forEach((element) => {
  const button = element.querySelector("button");
  const menu = element.querySelector(".menuList");

  if (!button || !menu) {
    return;
  }

  button.onclick = () => {
    if (isMobileDevice()) {
      menu.classList.toggle("open");
      button.classList.toggle("open");
    }
  };
});
