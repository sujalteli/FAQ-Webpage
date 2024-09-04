document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const accordionDescription = accordionItem.querySelector(".description");
    const plusIcon = accordionItem.querySelector(".plus-icon");
    const minusIcon = accordionItem.querySelector(".minus-icon");

    if (accordionDescription.style.maxHeight) {
      accordionDescription.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      // Close all other accordion items
      document.querySelectorAll(".description").forEach((description) => {
        description.style.maxHeight = null;
      });
      document.querySelectorAll(".plus-icon").forEach((icon) => {
        icon.style.display = "block";
      });
      document.querySelectorAll(".minus-icon").forEach((icon) => {
        icon.style.display = "none";
      });

      // Open the clicked accordion item
      accordionDescription.style.maxHeight =
        accordionDescription.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
