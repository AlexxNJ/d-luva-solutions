//===== BACKGROUND IMAGES =====/
let headerParallax = document.querySelector('#bg-image-header');
let bodySectionParallax = document.querySelector('#bg-image-fourth-section')

//===== TEXTS (LEFT COLUMN - FIRST SECTION) =====/
let leftTextFS = document.querySelector('.title-first-section');
let leftSubtitleFS = document.querySelector('.paragraph-first-section');


//===== CARDS (RIGHT COLUMN - FIRST SECTION) =====/
let cardLeftOne = document.querySelector('.card-l-col-one');
let cardRightOne = document.querySelector('.card-r-col-one');
let cardLeftTwo = document.querySelector('.card-l-col-two');
let cardRightTwo = document.querySelector('.card-r-col-two');

//===== CONTENT CARDS (RIGHT COLUMN - FIRST SECTION) =====/
let iconLeftOne = document.querySelector('#icon-l-col-one');
let iconRightOne = document.querySelector('#icon-r-col-one');
let iconLeftTwo = document.querySelector('#icon-l-col-two');
let iconRightTwo = document.querySelector('#icon-r-col-two');

let titleLeftOne = document.querySelector('#title-l-col-one');
let titleRightOne = document.querySelector('#title-r-col-one');
let titleLeftTwo = document.querySelector('#title-l-col-two');
let titleRightTwo = document.querySelector('#title-r-col-two');

let textLeftOne = document.querySelector('#text-l-col-one');
let textRightOne = document.querySelector('#text-r-col-one');
let textLeftTwo = document.querySelector('#text-l-col-two');
let textRightTwo = document.querySelector('#text-r-col-two');

let borderLeftOne = document.querySelector('#border-l-col-one');
let borderRightOne = document.querySelector('#border-r-col-one');
let borderLeftTwo = document.querySelector('#border-l-col-two');
let borderRightTwo = document.querySelector('#border-r-col-two');

//===== TEXTS (SECOND SECTION) =====/
let leftTitleSS = document.querySelector('.title-second-section');
let fTextSS = document.querySelector('#f-text-second-section');
let sTextSS = document.querySelector('#s-text-second-section');

//===== TEXTS & CARDS (THIRD SECTION) =====/
let titleTS = document.querySelector('.title-third-section');
let iconsHTS = document.querySelectorAll('.title-how')
let textsHTS = document.querySelectorAll('.text-how')
let bordersHTS = document.querySelectorAll('.border-how')

//===== OUR CLIENTS (FOURTH SECTION) =====/
let titleCFS = document.querySelector('.title-our-partners');
let imgCFS = document.querySelectorAll('.img-logo-client')

//===== FOOTER (FOURTH SECTION) =====/
let titleFFS = document.querySelector('.title-footer-fs');
let textsFFS = document.querySelectorAll('.p-footer-fs')


function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    let parallaxBgBody = bodySectionParallax.getBoundingClientRect().top

    // GET TOP PX TEXTS (FIRST SECTION)
    let pLeftTextFS = leftTextFS.getBoundingClientRect().top
    let pLeftSubtitleFS = leftSubtitleFS.getBoundingClientRect().top

    // GET TOP PX CARDS (FIRST SECTION)
    let pCardLeftOne = cardLeftOne.getBoundingClientRect().top
    let pCardRightOne = cardRightOne.getBoundingClientRect().top
    let pCardLeftTwo = cardLeftTwo.getBoundingClientRect().top
    let pCardRightTwo = cardRightTwo.getBoundingClientRect().top

    // GET TOP PX CONTENT CARDS (FIRST SECTION)
    let pIconLeftOne = iconLeftOne.getBoundingClientRect().top
    let pIconRightOne = iconRightOne.getBoundingClientRect().top
    let pIconLeftTwo = iconLeftTwo.getBoundingClientRect().top
    let pIconRightTwo = iconRightTwo.getBoundingClientRect().top

    let pTitleLeftOne = titleLeftOne.getBoundingClientRect().top
    let pTitleRightOne = titleRightOne.getBoundingClientRect().top
    let pTitleLeftTwo = titleLeftTwo.getBoundingClientRect().top
    let pTitleRightTwo = titleRightTwo.getBoundingClientRect().top

    let pTextLeftOne = textLeftOne.getBoundingClientRect().top
    let pTextRightOne = textRightOne.getBoundingClientRect().top
    let pTextLeftTwo = textLeftTwo.getBoundingClientRect().top
    let pTextRightTwo = textRightTwo.getBoundingClientRect().top

    let pBorderLeftOne = borderLeftOne.getBoundingClientRect().top
    let pBorderRightOne = borderRightOne.getBoundingClientRect().top
    let pBorderLeftTwo = borderLeftTwo.getBoundingClientRect().top
    let pBorderRightTwo = borderRightTwo.getBoundingClientRect().top

    // GET TOP PX TEXTS (SECOND SECTION)
    let pLeftTitleSS = leftTitleSS.getBoundingClientRect().top
    let pFTextSS = fTextSS.getBoundingClientRect().top

    // GET TOP PX TEXTS & CARDS (THIRD SECTION)
    let ptitleTS = titleTS.getBoundingClientRect().top
    let aPIconsHTS = []
    let aPTextsHTS = []
    let aPBordersHTS = []

    for (let i = 0; i < iconsHTS.length; i++) {
        aPIconsHTS.push(iconsHTS[i].getBoundingClientRect().top)
        aPTextsHTS.push(textsHTS[i].getBoundingClientRect().top)
        aPBordersHTS.push(bordersHTS[i].getBoundingClientRect().top)
    }

    // GET TOP PX OUR CLIENTS (FIFTH SECTION)
    let ptitleCFS = titleCFS.getBoundingClientRect().top
    let aPImgCFS = [];

    for (let i = 0; i < imgCFS.length; i++) {
        aPImgCFS.push(imgCFS[i].getBoundingClientRect().top)
    }

    // GET TOP PX FOOTER (FIFTH SECTION)
    let ptitleFFS = titleFFS.getBoundingClientRect().top
    let aPTextsFFS = []

    for (let i = 0; i < textsFFS.length; i++) {
        aPTextsFFS.push(textsFFS[i].getBoundingClientRect().top)
    }
    
    let viewportSize = window.innerHeight;
    
    // ANIMATION BACKGROUND HEADER IMAGE
    headerParallax.style.transform = `translateY(${scrollTop * 0.6}px)`;

    // ANIMATION IMAGE BODY 
    // console.log(parallaxBgBody, viewportSize);
    // console.log(parallaxBgBody * -0.1);
    if (parallaxBgBody<viewportSize) {
        bodySectionParallax.style.transform = `translateX(${parallaxBgBody * 0.2}px)`;
    }

    // console.log(pLeftTextFS, viewportSize);

    // ANIMATION TEXTS (FIRST SECTION)
    if (pLeftTextFS<viewportSize) {
        leftTextFS.style.animation = 'showTextLeftFullRes 2s'
    }
    if (pLeftSubtitleFS<viewportSize) {
        leftSubtitleFS.style.animation = 'showTextLeftFullRes 2s'
    }


    // ANIMATION CARDS (FIRST SECTION)
    if (pCardLeftOne<viewportSize) {
        cardLeftOne.style.animation = 'showCardUpFullRes 1.5s'
    }
    if (pCardRightOne<viewportSize) {
        cardRightOne.style.animation = 'showCardUpFullRes 1.5s'
    }
    if (pCardLeftTwo<viewportSize) {
        cardLeftTwo.style.animation = 'showCardUpFullRes 1.5s'
    }
    if (pCardRightTwo<viewportSize) {
        cardRightTwo.style.animation = 'showCardUpFullRes 1.5s'
    }

    // ANIMATION CONTENT CARDS (FIRST SECTION)
    if (pIconLeftOne<viewportSize) {
        iconLeftOne.style.animation = 'showContentCardLeftFullRes 1s'
    }
    if (pIconRightOne<viewportSize) {
        iconRightOne.style.animation = 'showContentCardLeftFullRes 1s'
    }
    if (pIconLeftTwo<viewportSize) {
        iconLeftTwo.style.animation = 'showContentCardLeftFullRes 1s'
    }
    if (pIconRightTwo<viewportSize) {
        iconRightTwo.style.animation = 'showContentCardLeftFullRes 1s'
    }

    if (pTitleLeftOne<viewportSize) {
        titleLeftOne.style.animation = 'showContentCardLeftFullRes 1.5s'
    }
    if (pTitleRightOne<viewportSize) {
        titleRightOne.style.animation = 'showContentCardLeftFullRes 1.5s'
    }
    if (pTitleLeftTwo<viewportSize) {
        titleLeftTwo.style.animation = 'showContentCardLeftFullRes 1.5s'
    }
    if (pTitleRightTwo<viewportSize) {
        titleRightTwo.style.animation = 'showContentCardLeftFullRes 1.5s'
    }

    if (pTextLeftOne<viewportSize) {
        textLeftOne.style.animation = 'showContentCardLeftFullRes 2s'
    }
    if (pTextRightOne<viewportSize) {
        textRightOne.style.animation = 'showContentCardLeftFullRes 2s'
    }
    if (pTextLeftTwo<viewportSize) {
        textLeftTwo.style.animation = 'showContentCardLeftFullRes 2s'
    }
    if (pTextRightTwo<viewportSize) {
        textRightTwo.style.animation = 'showContentCardLeftFullRes 2s'
    }

    if (pBorderLeftOne<viewportSize) {
        borderLeftOne.style.animation = 'showBorderCardFullRes 2s'
    }
    if (pBorderRightOne<viewportSize) {
        borderRightOne.style.animation = 'showBorderCardFullRes 2s'
    }
    if (pBorderLeftTwo<viewportSize) {
        borderLeftTwo.style.animation = 'showBorderCardFullRes 2s'
    }
    if (pBorderRightTwo<viewportSize) {
        borderRightTwo.style.animation = 'showBorderCardFullRes 2s'
    }

    // TEXTS (SECOND SECTION)
    if (pLeftTitleSS<viewportSize) {
        leftTitleSS.style.animation = 'showCardUpFullRes 2.5s'
    }
    if (pFTextSS<viewportSize) {
        fTextSS.style.animation = 'showTextLeftFullRes 2.5s'
        sTextSS.style.animation = 'showTextLeftFullRes 2.5s'
    }

    // TEXTS & CARDS (THIRD SECTION)
    if (ptitleTS<viewportSize) {
        titleTS.style.animation = 'showCardUpFullRes 1s'
    }
    
    let sAnimationTS = 1;
    for (let i = 0; i < aPIconsHTS.length; i++) {
        if (aPIconsHTS[i]<viewportSize) {
            iconsHTS[i].style.animation = `showContentCardLeftFullRes ${sAnimationTS}s`
            sAnimationTS = sAnimationTS + 0.2
        }
        if (aPTextsHTS[i]<viewportSize) {
            textsHTS[i].style.animation = `showContentCardLeftFullRes ${sAnimationTS}s`
            sAnimationTS = sAnimationTS + 0.1
        }
        if (aPBordersHTS[i]<viewportSize) {
            bordersHTS[i].style.animation = `showBorderCardFullRes ${sAnimationTS}s`
            sAnimationTS = sAnimationTS + 0.1
        }   
    }

    // OUR CLIENTS (FIFTH SECTION)
    if (ptitleCFS<viewportSize) {
        titleCFS.style.animation = 'showContentCardLeftFullRes 1s'
    }

    let sAnimationFS = 1.2;
    for (let i = 0; i < aPImgCFS.length; i++) {
        if (aPImgCFS[i]<viewportSize) {
            imgCFS[i].style.animation = `showContentCardLeftFullRes ${sAnimationFS}s`
            sAnimationFS = sAnimationFS + 0.2
        }
    }

    // FOOTER (FIFTH SECTION)
    if (ptitleFFS<viewportSize) {
        titleFFS.style.animation = 'showCardUpFullRes 1.5s'
    }

    for (let i = 0; i < aPTextsFFS.length; i++) {
        if (aPTextsFFS[i]<viewportSize) {
            textsFFS[i].style.animation = `showContentCardLeftFullRes 1.5s`
        }
    }
}

window.addEventListener('scroll', scrollParallax);




// TOGGLE MENU
const navToggle = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("nav-menu_visible");
})