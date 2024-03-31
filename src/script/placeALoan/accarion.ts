const accardionBlockElement = document.getElementById(
  "accardionBlock"
) as HTMLElement;

const buttonSelectQuestElements = [
  ...accardionBlockElement.querySelectorAll(".selectQuest"),
] as HTMLElement[];

buttonSelectQuestElements.map((buttonSelectQuest) => {
  buttonSelectQuest.onclick = () => {
    const questId = buttonSelectQuest.dataset["quest"];
    const containerAccardion = accardionBlockElement.querySelector(
      `#${questId}`
    );
    const questAccardionContainerElements = [
      ...document.querySelectorAll(".questAccardionContainer"),
    ] as HTMLElement[];

    questAccardionContainerElements.map((questAccardionContainer) => {
      questAccardionContainer.classList.remove("active");
    });
    containerAccardion?.classList.add("active");

    buttonSelectQuestElements.map((buttonSelectQuest) => {
      buttonSelectQuest.classList.remove("active");
    });

    buttonSelectQuest.classList.add("active");
  };
});

const containerAccardionElemets = [
  ...document.querySelectorAll(".containerAccardion"),
] as HTMLElement[];

containerAccardionElemets.map((containerAccardion) => {
  const buttonAccardion = containerAccardion.querySelector(".buttonAccardion");
  const iconArrow = buttonAccardion?.querySelector(".iconArrow");
  const textAccardion = containerAccardion.querySelector(".textAccardion");

  buttonAccardion?.addEventListener("click", () => {
    iconArrow?.classList.toggle("open");
    textAccardion?.classList.toggle("open");
  });
});