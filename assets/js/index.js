//===== BACKGROUND IMAGES =====/
let headerParallax = document.querySelector('#bg-image-header');
let bodySectionParallax = document.querySelector('#bg-image-fourth-section')


function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    let parallaxBgBody = bodySectionParallax.getBoundingClientRect().top
    let viewportSize = window.innerHeight;
    
    // ANIMATION BACKGROUND HEADER IMAGE
    headerParallax.style.transform = `translateY(${scrollTop * 0.6}px)`;

    // ANIMATION IMAGE BODY 
    if (parallaxBgBody<viewportSize) {
        bodySectionParallax.style.transform = `translateX(${parallaxBgBody * 0.1}px)`;
    }

}

window.addEventListener('scroll', scrollParallax);




