
gsap.to(".bloop", {
    scrollTrigger: ".bloop", // start animation when ".box" enters the viewport
    x: 20,
  });

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
