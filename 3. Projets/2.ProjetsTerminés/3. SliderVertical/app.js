window.addEventListener('load', init)

function init(){

    const animation = gsap.timeline({repeat: -1})


    animation 
    .to('.vertical-slider p', {y: 0, autoAlpha: 1, stagger: 1})
    .to('.vertical-slider p', {y: -100, autoAlpha: 0, stagger: 1}, 1)

}