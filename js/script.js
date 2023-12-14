const main = document.querySelector("#main");
const sidebar = document.querySelectorAll("#sidebar");
let mainTop = main.offsetTop;

function fixedNav() {
  if (window.scrollY >= mainTop) {
    sidebar.forEach((side) => {
      side.classList.add("position-fixed");
    });
  } else {
    sidebar.forEach((side) => {
      side.classList.remove("position-fixed");
    });
  }
}

window.addEventListener("scroll", fixedNav);

document.querySelectorAll(".menu-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("selected");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".tab-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: false,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
