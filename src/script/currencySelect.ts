const currencySelectElements = document.querySelectorAll(".currencySelect");

currencySelectElements.forEach((currencySelect) => {
  const currencyCurrent = currencySelect.querySelector(".currencyCurrent");
  const currencyList = currencySelect.querySelector(".currencyList");
  const currencyValue = currencySelect.querySelector(
    ".currencyValue"
  ) as HTMLInputElement;
  const iconArrow = currencySelect.querySelector(".iconArrow");

  if (!currencyCurrent || !currencyValue) return;

  currencySelect.addEventListener("click", () => {
    currencyList?.classList.toggle("open");
    iconArrow?.classList.toggle("open");

    const currencyButtonElements = currencyList?.querySelectorAll("button");

    currencyButtonElements?.forEach((currencyButton) => {
      currencyButton.onclick = () => {
        const activeCurrency = currencyButton.dataset["currency"] as string;

        currencyCurrent.textContent = activeCurrency;
        currencyValue.value = activeCurrency;
      };
    });
  });
});
