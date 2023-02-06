const button = document.querySelector("#nav-button");
const leftNavigation = document.querySelector("#left-navigation");

function toggleVisibility() {
    this.classList.toggle("active")
    leftNavigation.classList.toggle("active");
}

button.addEventListener("click", toggleVisibility)