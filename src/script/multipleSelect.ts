const multipleSelectElements = [
  ...document.querySelectorAll(".multipleSelect"),
] as HTMLElement[];

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

  const placeholderFirstText = placeholderSelectMultiple.textContent;

  openMultipleSelect?.addEventListener("click", (event) => {
    event.stopImmediatePropagation();

    iconArrow?.classList.toggle("open");
    multipleSelectList?.classList.toggle("open");

    const multipleSelectButtonElements =
      multipleSelectList?.querySelectorAll("button");

    let arraySelectedValue: string[] = [];

    const selectType = multipleSelect.dataset["selectType"];

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
          if (arraySelectedValue.length && selectType) {
            arraySelectedValue = [];
            arraySelectedValue.push(selectedValue);
          } else {
            arraySelectedValue.push(selectedValue);
          }
        }

        if (arraySelectedValue.length === 0) {
          placeholderSelectMultiple.style.display = "block";
          placeholderSelectMultiple.textContent = placeholderFirstText;
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

        const AllVisibleAdditionalInput = () => {
          visibleAdditionalInput("Иные лица (указать)", "anotherContainer");
          visibleAdditionalInput("Работа", "PlaceOfWorkContainer");
          visibleAdditionalInput(
            "Предпринимательская деятельность",
            "entrepreneurialActivityContainer"
          );
          visibleAdditionalInput("Прочее", "otherContainer");
        };

        AllVisibleAdditionalInput();

        if (!inputValue.form || !openMultipleSelect) return;

        inputValue.form.addEventListener("reset", () => {
          arraySelectedValue = [];
          inputValue.value = "";
          activeSelectMultiple.textContent = placeholderFirstText;
          AllVisibleAdditionalInput();
        });
      };
    });
  });

  if (!inputValue.form || !openMultipleSelect) return;

  inputValue.form.addEventListener("reset", () => {
    inputValue.value = "";
    activeSelectMultiple.textContent = placeholderFirstText;
  });
});
