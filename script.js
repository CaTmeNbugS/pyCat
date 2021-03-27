const search = document.querySelector(".searchContainer");
const menu = document.querySelector(".menuContainer");
const width = document.querySelector("body");
const label = document.querySelector(".labelContainer");
const navMenu = document.querySelector(".navMenu");
const searchI = document.querySelector(".fa-search");
const filterContainer = document.querySelector(`.iconContainer`);
 search.style.marginLeft = width.offsetWidth / 2 -menu.offsetWidth -label.offsetWidth -search.offsetWidth / 2 + `px`;
   filterContainer.style.marginLeft = (width.offsetWidth - search.offsetWidth - search.offsetLeft - filterContainer.offsetWidth) / 2 + 100 + `px`;

menu.addEventListener("click", function () {
  line = document.querySelectorAll(".chtMenu");
  navMenu.classList.toggle("show");
  line[0].classList.toggle("close");
  line[2].classList.toggle("Close");
  line[1].classList.toggle("Close");
});

searchI.addEventListener("click", function () {
  search.classList.toggle("Show");
})


const buttons = document.querySelectorAll(".ripplrEffect");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let x = event.clientX - btn.offsetLeft;
    let y = event.clientY - btn.offsetTop;

    let ripple = document.createElement("span");
    ripple.style.left = x + `px`;
    ripple.style.top = y + `px`;
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });

});

