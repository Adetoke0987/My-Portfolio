gsap.set("#tftoke", { perspective: 400 });

gsap.from(".horizontal-rule, .mainimg,.soc, #p2, #stag, #my-name, #tftoke, #third, #part1, .hii> i", {
  duration: 5,
  opacity: 0,
  scale: 0,
  y: 10,
  rotationX: 70,
  transformOrigin: "10% 20% -30",
  ease: "back",
  stagger: 0.01
});



gsap.registerPlugin(ScrollTrigger);

  // Animate the About Me content onto the screen from the right
  gsap.from("#myvideo", {
    x: "100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#myvideo",
      start: "top center", // Adjust as needed
      end: "center center", // Adjust as needed
      scrub: 1
    }
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#state > div", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
          trigger: "#state",
          start: "top center+=100",
          end: "center center",
          scrub: 1
      }
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#flexproject > div", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
          trigger: "#flexproject",
          start: "top center+=100",
          end: "center center",
          scrub: 1
      }
  });


  gsap.registerPlugin(ScrollTrigger);
    
  // Animation for the what i do container onto the screen 
  gsap.from(".inner", {
    x: "100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".inner",
      start: "top center", // Adjust as needed
      end: "center center", // Adjust as needed
      scrub: 1
    }
  });

  
  gsap.from(".inner1", {
    x: "-100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".inner1",
      start: "center center", // Adjust as needed
      end: "top center", // Adjust as needed
      scrub: 1
    }
  });


  gsap.from(".inner2", {
    x: "100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".inner2",
      start: "bottom center", // Adjust as needed
      end: "top center", // Adjust as needed
      scrub: 1
    }
  });
  
  














































































// JavaScript function to toggle dark mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Toggle icon between toggle-off and toggle-on
  const modeToggleBtn = document.querySelector('.mode-toggle-btn');
  if (body.classList.contains('dark-mode')) {
      modeToggleBtn.classList.remove('fa-toggle-off');
      modeToggleBtn.classList.add('fa-toggle-on');
  } else {
      modeToggleBtn.classList.remove('fa-toggle-on');
      modeToggleBtn.classList.add('fa-toggle-off');
  }
}


function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}





