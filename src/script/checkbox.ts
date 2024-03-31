const chexboxElements = document.querySelectorAll(".chexbox");

chexboxElements.forEach((checkboxContainer) => {
  const checkIcon = checkboxContainer.querySelector(".checkIcon");
  const inputElement = checkboxContainer.querySelector("input");

  if (!inputElement) return;
  inputElement.onchange = () => {
    checkIcon?.classList.toggle("active");
  };
});
