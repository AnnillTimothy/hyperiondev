// New GSAP timeline to handle how elements load
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", {y:"0%", duration: 1.5, stagger: 0.25 });
tl.to(".text", {y:"-100%", duration: .5 });
tl.to(".slider", {y: "-100%", duration: 1, delay: 1 }, "-=1.5");
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo("nav", {opacity: 0}, {duration: 1, opacity: 1}, "-=.5");
tl.fromTo(".hero", {opacity: 0}, {duration: 1, opacity: 1});
tl.fromTo(".circle-img", {opacity: 0}, {duration: .5, opacity: 1});
tl.fromTo("#bg", {opacity: 0}, {duration: 1, opacity: 1}), "-=.5";
tl.fromTo("footer", {opacity: 0}, {duration: 1, opacity: 1}), "-=1";

// Display NAV on click of burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

const navLinks = () => {
    const hoverNav = document.querySelector('.hover-nav');
    const hoverNavActive = document.querySelector('.hover-nav-links');

    hoverNav.addEventListener('click', () => {
        hoverNavActive.classList.toggle('hover-nav-active');
    });
}

// Continuous animations that trigger on load
const triangle = document.querySelector('.triangle');
        
        // GSAP continuous animation function (without using fromto repeat)
        function animateTriangle() {
            gsap.to(triangle, {
                x: 20, // Target X position (end point)
                y: 200, // Target Y position (end point)
                duration: 2, // Animation duration in seconds
                repeat: -1, // Infinite repetition (-1 for continuous)
                yoyo: true, // Reverse animation on each repeat
                ease: 'power1.inOut', // Easing function (optional)
            });
        }

const circle = document.querySelector('.circle');
    
        function animateCircle() {
            gsap.to(circle, {
                x: -300, 
                duration: 1, 
                repeat: -1, 
                yoyo: true, 
                ease: 'power1.inOut', 
            });
        }

const circleBg = document.querySelector('.circle-img');
        
        function animateSide() {
            gsap.to(circleBg, {
                x: -30, 
                duration: 3, 
                repeat: -1, 
                yoyo: true, 
                ease: 'power1.inOut', 
            });
        }


const app = () => {
    navSlide();
    navLinks();
    animateTriangle();
    animateCircle();
    animateSide();
}

app();

//Checkbox that displays bootcamps
const checkbox = document.getElementById('showHideCheckbox');
const content1Div = document.getElementById('content1');
const content2Div = document.getElementById('content2');
const content3Div = document.getElementById('content3');

checkbox.addEventListener('change', function() {

    // Toggle the display of the content divs based on the checkbox state
    if (checkbox.checked) {
        content1Div.style.display = 'none';
        content2Div.style.display = 'none';
        content3Div.style.display = 'flex';
    } else {
        content1Div.style.display = 'flex';
        content2Div.style.display = 'flex';
        content3Div.style.display = 'none';
    }
});

//SCROLLMAGIC
const laptop = document.querySelector(".laptop-img");
const bootcamp = document.querySelector(".bootcamp");

const controller = new ScrollMagic.Controller();

// TweenMax.set for instant trigger animations
let laptopAnim = TweenMax.to(laptop, {opacity: 0, duration: 1});

// This makes the laptop image dissappear when triggered
let aboutScene = new ScrollMagic.Scene({
    duration: 3,
    triggerElement: bootcamp,
    triggerHook: 0,
  })
    .setTween(laptopAnim)
    .addTo(controller);

const drink = document.querySelector(".drink-img");
const mentor = document.querySelector(".mentoring-img");
    
// GSAP TimelineMax instance to manage multiple animations
const tlMax = new TimelineMax();

// Animations to add
tlMax.to(drink, {opacity: 0, duration: .1});
tlMax.to(mentor, {opacity: 1, duration: .1}), "-=1";

// ScrollMagic scene with the timeline as the tween
let scene = new ScrollMagic.Scene({
  duration: 0, // Set duration to 0 for instant trigger
  triggerElement: bootcamp,
  triggerHook: 0
})
.setTween(tlMax) // Use the timeline as the tween 
.addTo(controller);

let ctaAnim = TweenMax.to(laptop, {opacity: 1, duration: 3});

// This makes the laptop image reappear when triggered
let ctaScene = new ScrollMagic.Scene({
    duration: 3,
    triggerElement: ".cta",
    triggerHook: 0,
  })
    .setTween(ctaAnim)
    .addTo(controller);