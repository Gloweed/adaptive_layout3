"use strict"

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

burger.addEventListener('click', function (event) {
    if (event.target.closest('.header__burger')) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock')
    }
});