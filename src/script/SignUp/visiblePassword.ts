const passwordContainerElements = [
  ...document.querySelectorAll(".passwordContainer"),
] as HTMLElement[];

passwordContainerElements.map((passwordContainer) => {
  const passwordInput = passwordContainer.querySelector(
    'input[type="password"]'
  ) as HTMLInputElement;
  const visiblePassword = passwordContainer.querySelector(".visiblePassword");

  let visible = false;

  visiblePassword?.addEventListener("click", () => {
    const visibleIconElement = visiblePassword.children[0];
    const unVisibleIconElement = visiblePassword.children[1];

    visible = !visible;

    if (visible) {
      visibleIconElement.classList.toggle("visible");
      unVisibleIconElement.classList.toggle("visible");

      passwordInput.type = "text";
    } else {
      visibleIconElement.classList.toggle("visible");
      unVisibleIconElement.classList.toggle("visible");

      passwordInput.type = "password";
    }
  });
});
