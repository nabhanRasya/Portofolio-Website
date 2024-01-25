let openHam = document.querySelector("#humburger--button");
let navigationItems = document.querySelector("#sidebar--link");

const hamburgerEvent = (navigation, open) => {
  navigationItems.style.display = navigation;
  openHam.style.display = open;
};

openHam.addEventListener("click", () => hamburgerEvent(navigation));
