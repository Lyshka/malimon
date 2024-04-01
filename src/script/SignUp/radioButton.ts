const radioButtonElements = [
  ...document.querySelectorAll(".radioButton"),
] as HTMLElement[];

const selectTargetText = document.getElementById("selectTargetText");

radioButtonElements.map((radioButton) => {
  const checkedRadioButtonElement = radioButton.querySelector(
    ".checkedRadioButton"
  );
  const inputRadioButtonElement = radioButton.querySelector(
    'input[type="radio"]'
  ) as HTMLInputElement;

  inputRadioButtonElement?.addEventListener("change", () => {
    radioButtonElements.map((radioButton) => {
      const checkedRadioButtonElement = radioButton.querySelector(
        ".checkedRadioButton"
      );

      if (!checkedRadioButtonElement) return;

      checkedRadioButtonElement.classList.remove("active");
    });

    const inputValue = inputRadioButtonElement.value;

    if (!selectTargetText) return;

    if (inputValue === "borrowMoney") {
      selectTargetText.textContent = "Получи деньги на проект";
    } else {
      selectTargetText.textContent = "Получи инвестиции";
    }

    checkedRadioButtonElement?.classList.add("active");
  });
});
