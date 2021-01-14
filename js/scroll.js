'use strict';

function animation (e){
    e.preventDefault();
    console.log(document.querySelector(this.getAttribute('href')));
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'        
    });    
}

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', animation);
});

let scroll = document.querySelector(".scroll");
let scrollTop = document.querySelector(".scrollTop");

document.querySelector('.html, body').onscroll = lgScroll;
function lgScroll(e) {
    let distance = document.querySelector('html,body').scrollTop;    
    scroll.classList.remove("d-none");
    scrollTop.classList.add("d-none");   

    if (distance === 0) {
        scroll.classList.add("d-none");
        scrollTop.classList.remove("d-none");
    }
}
