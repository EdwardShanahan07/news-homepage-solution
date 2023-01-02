function toggleNav() {
  document.querySelector("header").classList.toggle("active");
}

document.querySelector("#openNav").addEventListener("click", toggleNav);

document.querySelector("#closeNav").addEventListener("click", toggleNav);
