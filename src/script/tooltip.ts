const tooltipButtonElements = [
  ...document.querySelectorAll(".tooltipButton"),
] as HTMLAreaElement[];

tooltipButtonElements.forEach((tooltipButton) => {
  const tooltipContainer = tooltipButton.querySelector(".tooltipContainer");

  if (!tooltipContainer) {
    return;
  }

  tooltipButton.onmouseover = () => {
    tooltipContainer.classList.add("visible");
  };

  tooltipButton.onmouseout = () => {
    tooltipContainer.classList.remove("visible");
  };
});
