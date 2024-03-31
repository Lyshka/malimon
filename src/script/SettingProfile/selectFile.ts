const containerFilesElements = [
  ...document.querySelectorAll(".containerFiles"),
] as HTMLElement[];

containerFilesElements.map((containerFiles) => {
  const inputFileElement = containerFiles.querySelector(
    "input[type='file']"
  ) as HTMLInputElement;
  const containerFilesList = containerFiles.querySelector(
    ".containerFilesList"
  );

  if (!containerFilesList) return;

  inputFileElement.onchange = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;
    const firstFourFiles = Array.from(files).slice(0, 4);

    const FilesButtons = firstFourFiles
      .map(({ name, type }) => {
        const fileExtension = type.split("/").pop(); // Получение расширения файла
        return `
        <button
        type="button"
        class="py-3 px-5 flex text-left items-center justify-between gap-2.5 deleteFile"
      >
        <span class="text-base">${name.slice(0, 5)}.${fileExtension}</span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2.91L13.09 0L8 5.09L2.91 0L0 2.91L5.09 8L0 13.09L2.91 16L8 10.91L13.09 16L16 13.09L10.91 8L16 2.91Z"
            fill="white"
          />
        </svg>
      </button>
        `;
      })
      .join("");

    containerFilesList.innerHTML = FilesButtons;

    const deleteFileButtonElements = [
      ...containerFilesList.querySelectorAll(".deleteFile"),
    ] as HTMLElement[];

    deleteFileButtonElements.map((deleteFileButton) => {
      deleteFileButton.onclick = () => {
        deleteFileButton.remove();
      };
    });
  };
});
