const backgroundImg = document.querySelector(".home-mountains");
const longMountain = document.querySelector(".home-mountains img:nth-child(1)");
const rightRock = document.querySelector(".home-mountains img:nth-child(2)");
const bottomRock = document.querySelector(".home-mountains img:nth-child(3)");
const pic = document.querySelector(".home-mountains img:nth-child(4)");

const title = document.querySelector('h1');

gsap.to(backgroundImg, {
  scrollTrigger: {
    trigger: 'home-mountains',
    scrub: true,
    pin: true,
  }
});


gsap.to(longMountain, {
    scrollTrigger: {
      trigger:  'home-mountains',
      scrub: true,
    },
    y : 100
  });
  
  gsap.to(title, {
    scrollTrigger: {
      trigger:  'home-mountains',
      scrub: true,
    },
    y : 500
  });


