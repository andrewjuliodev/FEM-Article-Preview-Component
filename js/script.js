const share = document.querySelector(".socials");
const popup = document.querySelector(".popupCombo");

share.addEventListener("click", function () {
  if (popup.style.display === "none") {
    popup.style.display = "inline";
  } else {
    popup.style.display = "none";
  }
});

popup.addEventListener("click", function () {
  popup.style.display = "none";
});
