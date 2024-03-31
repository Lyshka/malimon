const containerItemQuestMobileElements = [
  ...document.querySelectorAll(".containerItemQuestMobile"),
] as HTMLElement[];

containerItemQuestMobileElements.map((containerItemQuestMobile) => {
  const containerAccardionMobile = containerItemQuestMobile.querySelector(
    ".containerAccardionMobile"
  );
  const buttonQuestMobile =
    containerItemQuestMobile.querySelector(".buttonQuestMobile");
  const iconArrow = buttonQuestMobile?.querySelector(".iconArrow");

  buttonQuestMobile?.addEventListener("click", () => {
    containerAccardionMobile?.classList.toggle("open");
    iconArrow?.classList.toggle("open");
  });
});
