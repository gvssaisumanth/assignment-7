let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");
let closeBtn = document.querySelector(".nav i");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

closeBtn.onclick = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
