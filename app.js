let iframe = document.getElementById('iframeAudio');
let audiotag = document.getElementById('playAudio');

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
  iframe.remove();
    // $('#iframeAudio').remove()
}
else {
  audiotag.remove();
    // $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}


setTimeout(() => {
  audiotag.play();
}, 900);


gsap.to(".navbar", {
  ease: Expo.easeInOut,
  transform: "translateX(0%)",
  duration: 2,
});

gsap.to(".plane-img", {
  ease: Expo.easeInOut,
  opacity: 1,
  transform: "scale(1)",
  duration: 2.5,
  delay: 1
});

gsap.to(".image", {
  ease: Expo.easeInOut,
  opacity: 1,
  transform: "translateY(-10rem)",
  duration: 3.5,
  delay: 1.5,
});
gsap.to(".image", {
  ease: Expo.easeInOut,
  opacity: 1,
  transform: "translateY(0rem)",
  duration: 1,
  delay: 5,
});


gsap.to(".heading",{
    opacity: 1,
    transform: "translateY(0rem)",
    duration: 1.3,
    delay: 5.5
})

