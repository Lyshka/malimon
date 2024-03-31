const radioButtonElements = [
  ...document.querySelectorAll(".radioButton"),
] as HTMLElement[];

radioButtonElements.map((radioButton) => {
  const checkedRadioButtonElement = radioButton.querySelector(
    ".checkedRadioButton"
  );
  const inputRadioButtonElement = radioButton.querySelector(
    'input[type="radio"]'
  );

  inputRadioButtonElement?.addEventListener("change", () => {
    radioButtonElements.map((radioButton) => {
      const checkedRadioButtonElement = radioButton.querySelector(
        ".checkedRadioButton"
      );

      if (!checkedRadioButtonElement) return;

      checkedRadioButtonElement.classList.remove("active");
    });

    checkedRadioButtonElement?.classList.add("active");
  });
});
