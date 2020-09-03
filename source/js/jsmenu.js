var navMain = document.querySelector(".main-nav");
var openMenu = document.querySelector(".main-nav--open");
var closeMenu = document.querySelector(".main-nav--close");
var navToggle = document.querySelector(".page-header__button");
var openButton = document.querySelector(".page-header__button--open");
var closeButton = document.querySelector(".page-header__button--close");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--close");
navToggle.classList.add("page-header__button--open");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMain.classList.toggle("main-nav--close");
  navMain.classList.toggle("main-nav--open");
  navToggle.classList.toggle("page-header__button--open");
  navToggle.classList.toggle("page-header__button--close");
});
