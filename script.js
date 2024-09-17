const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".remove-button");
  if (clickedButton) {
    clickedButton.parentNode.remove();
  }
});
