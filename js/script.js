console.log("helloworld");

const nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
