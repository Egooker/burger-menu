'use strict';

function menuBar(lineSelector, menuSelector, menuBarSelector, showClass, hideClass) {
    const lines = document.querySelectorAll(lineSelector),
          menu = document.querySelector(menuSelector),
          menuBar = document.querySelector(menuBarSelector);


    menu.addEventListener('click', () => {
        if (menuBar.classList.contains(hideClass)) {
            menuBar.classList.remove(hideClass);
            menuBar.classList.add(showClass);
        } else if (menuBar.classList.contains(showClass)) {
            menuBar.classList.remove(showClass);
            menuBar.classList.add(hideClass);
        }
        
    });

}

menuBar('.burger__menu span', '.burger__menu', '.menu', 'show', 'hide');