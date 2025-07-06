alert("Bienvenue sur NovaKits !");

const burger = document.getElementById("burger-menu");
const sideNav = document.getElementById("side-nav");

burger.addEventListener("click", function() {
  sideNav.classList.toggle("open");
});

document.addEventListener("click", function(event) {
  if (
    !sideNav.contains(event.target) &&
    !burger.contains(event.target) &&
    sideNav.classList.contains("open")
  ) {
    sideNav.classList.remove("open");
  }
});
