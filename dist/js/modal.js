'use strict';

const body = document.querySelector('body');
const buttonPrivacy = document.querySelector(".privacy");
const buttonTerms = document.querySelector(".terms");
const buttonFAQ = document.querySelector(".FAQ");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const iclose = document.querySelector(".iclose");
const okey = document.querySelector(".modal__okey");
const title = document.querySelector(".modal__title");


const modalWindow = (modalTitle) => {
    modal.setAttribute("class", "modal animation");
    modal.setAttribute("style", "display: block");
    overlay.setAttribute("style", "display: block");  
    title.textContent = modalTitle;     
}

const backToMain = () => {    
    modal.setAttribute("class", "modal animation2");
    setTimeout(function () {
        overlay.setAttribute("style", "display: none");
        modal.setAttribute("style", "display: none");
    }, 900);
}

buttonPrivacy.addEventListener('click', () => modalWindow("Privacy"));
buttonTerms.addEventListener('click', () => modalWindow("Terms"));
buttonFAQ.addEventListener('click', () => modalWindow("FAQ"));
iclose.addEventListener('click', backToMain);
okey.addEventListener('click', backToMain);
overlay.addEventListener('click', backToMain);