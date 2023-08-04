const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", {y:"0%", duration: 1.5, stagger: 0.25 });
tl.to(".text", {y:"-100%", duration: .5 });
tl.to(".slider", {y: "-100%", duration: 1, delay: 1 }, "-=1.5");
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo("nav", {opacity: 0}, {duration: 1, opacity: 1}, "-=.5");
tl.fromTo(".hero", {opacity: 0}, {duration: 1, opacity: 1});
tl.fromTo(".courses-section", {opacity: 0}, {duration: 1, opacity: 1}), "-=1";

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


const app = () => {
    navSlide();
    navLinks();
}

app();

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
