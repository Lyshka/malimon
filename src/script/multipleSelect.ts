const multipleSelectElements = document.querySelectorAll(".multipleSelect");

multipleSelectElements.forEach((multipleSelect) => {
  const openMultipleSelect = multipleSelect.querySelector(
    ".openMultipleSelect"
  );
  const activeSelectMultiple = multipleSelect.querySelector(
    ".activeSelectMultiple"
  );
  const placeholderSelectMultiple = multipleSelect.querySelector(
    ".placeholderSelectMultiple"
  ) as HTMLElement;
  const iconArrow = multipleSelect.querySelector(".iconArrow");
  const multipleSelectList = multipleSelect.querySelector(
    ".multipleSelectList"
  );
  const inputValue = multipleSelect.querySelector(
    ".inputValue"
  ) as HTMLInputElement;

  if (!activeSelectMultiple) return;

  openMultipleSelect?.addEventListener("click", (event) => {
    event.stopImmediatePropagation();

    iconArrow?.classList.toggle("open");
    multipleSelectList?.classList.toggle("open");

    const multipleSelectButtonElements =
      multipleSelectList?.querySelectorAll("button");

    let arraySelectedValue: string[] = [];

    multipleSelectButtonElements?.forEach((multipleSelectButton) => {
      multipleSelectButton.onclick = () => {
        const selectedValue = multipleSelectButton.textContent as string;

        placeholderSelectMultiple.style.display = "none";
        placeholderSelectMultiple.textContent = "";
        activeSelectMultiple.textContent = "";

        const isSelected = arraySelectedValue.find(
          (el) => el === selectedValue
        );

        if (isSelected) {
          arraySelectedValue = arraySelectedValue.filter(
            (el) => el !== selectedValue
          );
        } else {
          arraySelectedValue.push(selectedValue);
        }

        if (arraySelectedValue.length === 0) {
          placeholderSelectMultiple.style.display = "block";
          placeholderSelectMultiple.textContent =
            "Выберите поручителей по займу";
          activeSelectMultiple.appendChild(placeholderSelectMultiple);
        } else {
          activeSelectMultiple.innerHTML = arraySelectedValue
            .map(
              (value) => `
            <span class="cursor-pointer flex items-center gap-[5px] flex-shrink-0">
              ${value}
            </span>
          `
            )
            .join("");
        }

        inputValue.value = arraySelectedValue.map((value) => value).join("");

        const visibleAdditionalInput = (value: string, selector: string) => {
          const isAnother = arraySelectedValue.find((el) => {
            const trimValue = el.trim();

            const conditions = trimValue === value;

            return conditions;
          });

          const anotherContainer = document.querySelector(`.${selector}`);

          if (isAnother) {
            anotherContainer?.classList.add("active");
          } else {
            anotherContainer?.classList.remove("active");
          }
        };

        visibleAdditionalInput("Иные лица (указать)", "anotherContainer");
        visibleAdditionalInput("Работа", "PlaceOfWorkContainer");
        visibleAdditionalInput(
          "Предпринимательская деятельность",
          "entrepreneurialActivityContainer"
        );
        visibleAdditionalInput("Прочее", "otherContainer");
      };
    });
  });
});
