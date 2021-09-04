const share = document.querySelector(".socials");

const main = document.querySelector("main");

share.addEventListener("click", function () {
  const popup = document.querySelector(".popupCombo");
  if (popup.style.display === "none") {
    popup.style.display = "inline";
  } else {
    popup.style.display = "none";
  }
});
