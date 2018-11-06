var openMenuElement = document.querySelector('.nav__button-open');
var closeMenuElement = document.querySelector('.nav__button-close');

var menu = document.querySelector('.nav__list');
var header = document.querySelector('.header');
var nav = document.querySelector('.nav__container');
var headerContent = document.querySelector('.header__content');
var navClose = document.querySelector('.nav__partial');
var headerBanner = document.querySelector('.header__banner');
var headerText = document.querySelector('.header__text');

closeMenuElement.classList.remove('nav__button-close--hidden');
navClose.classList.remove('nav__all');
header.classList.remove('header--menu');
nav.classList.remove('nav__container--all-menu');
openMenuElement.classList.remove('nav__button-hidden');
menu.classList.add('nav__list--hidden');
closeMenuElement.classList.add('nav__button-hidden');
if (headerText) {
  headerText.classList.remove('header__text--title');
}

if (headerContent) {
  headerContent.classList.remove('header__content--open-menu');
  headerBanner.classList.remove('header__banner--open-menu');
}

openMenuElement.addEventListener('click', function() {
  navClose.classList.add('nav__all');
  header.classList.add('header--menu');
  nav.classList.add('nav__container--all-menu');
  openMenuElement.classList.add('nav__button-hidden');
  menu.classList.remove('nav__list--hidden');
  closeMenuElement.classList.remove('nav__button-hidden');

  if (headerContent) {
    headerContent.classList.add('header__content--open-menu');
    headerBanner.classList.add('header__banner--open-menu');
  }
  if (headerText) {
    headerText.classList.add('header__text--title');
  }
});

closeMenuElement.addEventListener('click', function() {
  navClose.classList.remove('nav__all');
  header.classList.remove('header--menu');
  nav.classList.remove('nav__container--all-menu');
  openMenuElement.classList.remove('nav__button-hidden');
  menu.classList.add('nav__list--hidden');
  closeMenuElement.classList.add('nav__button-hidden');

  if (headerContent) {
    headerContent.classList.remove('header__content--open-menu');
    headerBanner.classList.remove('header__banner--open-menu');
  }
  if (headerText) {
    headerText.classList.remove('header__text--title');
  }
});
