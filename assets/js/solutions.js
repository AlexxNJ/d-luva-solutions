let headerParallax = document.querySelector('#bg-image-header');
let bodySectionParallax = document.querySelector('.bg-left-footer-solution')

let boxIcons = document.querySelectorAll('.box-icon');
let iconBoxses = document.querySelectorAll('.icon-box');
let borderIconBoxes = document.querySelectorAll('.border-icon-box');
let textIconBoxes = document.querySelectorAll('.text-icon-box');

let titleFooterSolution = document.querySelector('.title-footer-solution');
let textFooterSolution = document.querySelector('.text-footer-solution');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    let viewportSize = window.innerHeight;
    let parallaxBgBody = bodySectionParallax.getBoundingClientRect().top

    // GET SCROLL TOP BOXICONS
    let aBoxIcons = [];
    let aIconBoxes = [];
    let aBorderIconBoxes = [];
    let aTextIconBoxes = [];
    for (let i = 0; i < boxIcons.length; i++) {
        aBoxIcons.push(boxIcons[i].getBoundingClientRect().top);
        aIconBoxes.push(iconBoxses[i].getBoundingClientRect().top);
        aBorderIconBoxes.push(borderIconBoxes[i].getBoundingClientRect().top);
    }

    for (let i = 0; i < textIconBoxes.length; i++) {
        aTextIconBoxes.push(textIconBoxes[i].getBoundingClientRect().top);
    }

    // FOOTER TEXTS

    let sTitleFooterSolution = titleFooterSolution.getBoundingClientRect().top
    let sTextFooterSolution = textFooterSolution.getBoundingClientRect().top

    // ANIMATION BACKGROUND HEADER IMAGE
    headerParallax.style.transform = `translateY(${scrollTop * 0.6}px)`;

    // ANIMATION IMAGE BODY 
    if (parallaxBgBody<viewportSize) {
        bodySectionParallax.style.transform = `translateX(${parallaxBgBody * 0.1}px)`;
    }

    // ANIMATION BOXICONS
    for (let i = 0; i < aBoxIcons.length; i++) {
        if (aBoxIcons[i]<viewportSize) {
            boxIcons[i].style.animation = `showBoxIcons 1s`
        }
        if (aIconBoxes[i]<viewportSize) {
            iconBoxses[i].style.animation = `showIconBox 1s`
        }
        if (aBorderIconBoxes[i]<viewportSize) {
            borderIconBoxes[i].style.animation = `showBorderIconBox 2.5s`
        }
    }

    for (let i = 0; i < aTextIconBoxes.length; i++) {
        if (aTextIconBoxes[i]<viewportSize) {
            textIconBoxes[i].style.animation = `showTextIconBox 2s`
        }
    }

    // ANIMATION FOOTER TEXTS
    if (sTitleFooterSolution<viewportSize) {
        titleFooterSolution.style.animation = `showTextFooter 2s`
    }
    if (sTextFooterSolution<viewportSize) {
        textFooterSolution.style.animation = `showTextFooter 2s`
    }
}

window.addEventListener('scroll', scrollParallax);