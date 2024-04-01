const elementsWithErrorAttribute = [
  ...document.querySelectorAll("[data-error]"),
] as HTMLElement[];

elementsWithErrorAttribute.map((errorElement) => {
  const isError = errorElement.dataset["error"];
  const isSuccess = errorElement.dataset["success"];

  if (isError) {
    errorElement.classList.add("active");
    errorElement.classList.add("error");
    errorElement.textContent = isError;
  } else {
    errorElement.classList.add("active");
    errorElement.classList.add("success");
    errorElement.textContent = isSuccess || "";
  }
});
