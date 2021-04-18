const img1 = document.querySelector('.container-images img:nth-child(1)')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const img3 = document.querySelector('.container-images img:nth-child(3)')
const title = document.querySelector('.title')
const txt = document.querySelector('.txt')

const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power2"
    },
    // repeat: -1,
    // repeatDelay: 0.5,
    // yoyo: true,
    paused: true
    // onComplete: () => console.log("COMPLETE"),
    // onStart: () => console.log("START")
});

TL 
.to(img1, {autoAlpha: 1, y: 0})
.to(img2, {autoAlpha: 1, y: 0})
.to(img3, {autoAlpha: 1, y: 0})
.to(title, {autoAlpha: 1, y: 0})
.add(() => {
    console.log("Fin de timeline");
})
.to(txt, {autoAlpha: 1, y: 0})


setTimeout(() => {
    TL.play()
}, 1000)