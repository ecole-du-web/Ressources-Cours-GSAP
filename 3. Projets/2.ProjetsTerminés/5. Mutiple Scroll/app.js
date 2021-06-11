const longMountain = document.querySelector(".home-mountains img:nth-child(1)");
const title = document.querySelector('h1');


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


