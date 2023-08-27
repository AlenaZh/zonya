let header = document.querySelector(".header");
let menuToggle = document.querySelector(".header__toggle");

header.classList.remove('header--nojs');
header.classList.remove('header--opened');
header.classList.add('header--closed');

menuToggle.addEventListener('click', function(){
  if(header.classList.contains("header--opened")){
    header.classList.remove("header--opened");
    header.classList.add("header--closed");
  }else{
    header.classList.remove("header--closed");
    header.classList.add("header--opened");
  }

  if(menuToggle.classList.contains("header__toggle--closed")){
    menuToggle.classList.remove("header__toggle--closed");
    menuToggle.classList.add("header__toggle--opened");
  }else{
    menuToggle.classList.remove("header__toggle--opened");
    menuToggle.classList.add("header__toggle--closed");
  }
});