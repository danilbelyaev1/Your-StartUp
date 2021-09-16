'use strict';
window.addEventListener('DOMContentLoaded', function () {
    
//SLIDER PORTFOLIO
let slideIndex = 1,
    slides = document.querySelectorAll('.slide'),
    slidesAnim = document.querySelectorAll('.slider .slide-img'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right');

showSlides(slideIndex);

function showSlides(n) {
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}
slides.forEach((item) => item.style.display = 'none');
slides[slideIndex - 1].style.display = 'flex';

}
animSlides();

function animSlides() {
slides.forEach((item) => {
    if (item.style.display == 'flex') {
        setTimeout(() => {
            item.classList.remove('anim');
        }, 100);
    } else {
        setTimeout(() => {
            item.classList.add('anim');
        }, 100);
    }
});

}

arrowLeft.addEventListener('click', function () {
showSlides(slideIndex = slideIndex - 1);
animSlides();
});
arrowRight.addEventListener('click', function () {
showSlides(slideIndex = slideIndex + 1);
animSlides();
});
//chechbox
let checkbox = document.querySelector('.checkbox');
let choose = document.querySelector('.choose');
checkbox.addEventListener('click', ()=>{
    if (choose.style.display=='none'){
        choose.style.display='flex';
    } else {
        choose.style.display='none'; 
    }
});

//geography-anim
let geographyImg = document.querySelector('.geography');
let geographyImgAnim = document.querySelector('.geography-bg');
    geographyImg.addEventListener('mouseenter',()=>{
        animGeography();
        geographyImgAnim.style.display='flex';
    });
    geographyImg.addEventListener('mouseleave',()=>{
        animGeography();
        geographyImgAnim.style.display='none';
    });
    
animGeography();
function animGeography() {
    if(geographyImgAnim.style.display=='flex'){
        setTimeout(()=>{
            geographyImgAnim.classList.add('anim');
        }, 100);
    } else {
        setTimeout(()=>{
            geographyImgAnim.classList.remove('anim');
        }, 100);
    }
}

//HAMBURG
    const menu = document.querySelector('.menu'),
    li = document.querySelectorAll('li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    li.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

