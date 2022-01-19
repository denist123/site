"use strict"

const iconMenu = document.querySelector('.menu__burger');
if (iconMenu) {
   const menuList = document.querySelector('.menu__list');
   const btn = document.querySelector('.menu__burger');
   btn.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuList.classList.toggle('responsive');
   });
}