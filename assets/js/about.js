let headerParallax = document.querySelector('#bg-image-header');
let bodyOurHistory = document.querySelector('.bg-left-our-history')
let bodyValues = document.querySelector('.bg-right-values')

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    let viewportSize = window.innerHeight;
    let parallaxBodyOurHistory = bodyOurHistory.getBoundingClientRect().top
    let parallaxBodyValues = bodyValues.getBoundingClientRect().top

    // ANIMATION BACKGROUND HEADER IMAGE
    headerParallax.style.transform = `translateY(${scrollTop * 0.6}px)`;

    // ANIMATION IMAGE BODY 
    if (parallaxBodyOurHistory<viewportSize) {
        bodyOurHistory.style.transform = `translateX(${parallaxBodyOurHistory * 0.1}px)`;
    }
    if (parallaxBodyValues<viewportSize) {
        bodyValues.style.transform = `translateX(${parallaxBodyValues * 0.1}px)`;
    }
}



window.addEventListener('scroll', scrollParallax);