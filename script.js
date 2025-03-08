// انتخاب عناصر
const buttons = document.querySelectorAll(".button-click");
const modals = document.querySelectorAll(".modal");
const blurBackground = document.getElementById("blurBackground");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    blurBackground.style.display = "block";
  });
});

modals.forEach((modal) => {
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    blurBackground.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  if (event.target === blurBackground) {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
    blurBackground.style.display = "none";
  }
});
