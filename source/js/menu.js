var openMenu = document.querySelector('.nav__button-open');
var closeMenu = document.querySelector('.nav__button-close');
var menuElement = document.querySelector(".nav__list");

openMenu.addEventListener('click', function() {
  menuElement.style = ('display: block');
})

closeMenu.addEventListener('click', function() {
  menuElement.style = ('display: none');
})
