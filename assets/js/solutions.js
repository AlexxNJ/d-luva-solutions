let headerParallax = document.querySelector('#bg-image-header');
let bodySectionParallax = document.querySelector('.bg-left-footer-solution')


function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    let viewportSize = window.innerHeight;
    let parallaxBgBody = bodySectionParallax.getBoundingClientRect().top

    // ANIMATION BACKGROUND HEADER IMAGE
    headerParallax.style.transform = `translateY(${scrollTop * 0.6}px)`;

    // ANIMATION IMAGE BODY 
    if (parallaxBgBody<viewportSize) {
        bodySectionParallax.style.transform = `translateX(${parallaxBgBody * 0.1}px)`;
    }
}

window.addEventListener('scroll', scrollParallax);