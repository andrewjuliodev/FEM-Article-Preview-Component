const share = document.querySelector(".socials");
const popup = document.querySelector(".popupCombo");
const global = document.querySelector(".global");

share.addEventListener("click", function () {
  if (popup.style.display === "none") {
    popup.style.display = "inline";
  } else {
    window.addEventListener("mouseup", function (e) {
      if (e.target.class !== global && e.target.class !== global) {
        popup.style.display = "none";
      }
    });
  }
});
