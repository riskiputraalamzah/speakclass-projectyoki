const toggle = document.querySelector(".hamburger-menu");
const targetMenu = document.querySelector(".my-nav .menu");
toggle.addEventListener("click", function () {
  targetMenu.classList.toggle("show");
});
