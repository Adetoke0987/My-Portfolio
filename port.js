let nameContainer = document.getElementById("my-name");
        let fullName = "Adetoke Durojaiye";
        let charIndex = 0;

        function displayFullName() {
            const displayedText = fullName.substring(0, charIndex + 1);
            nameContainer.innerHTML = '<span style="font-weight: 300; color: black;">I\'m</span> ' + displayedText + (charIndex % 2 === 0 ? "|" : "");
            nameContainer.style.opacity = 1;

            if (charIndex < fullName.length) {
                charIndex++;
            } else {
                setTimeout(() => {
                    nameContainer.style.opacity = 0;
                    charIndex = 0;
                }, 1000);
            }
        }

        displayFullName();

        setInterval(displayFullName, 150);


// Function to toggle visibility of project info
function toggleProjectInfo(projectId) {
  var projectInfoContainer = document.getElementById(`projectInfoContainer${projectId}`);
  if (projectInfoContainer.style.display === "none" || projectInfoContainer.style.display === "") {
      projectInfoContainer.style.display = "block";
  } else {
      projectInfoContainer.style.display = "none";
  }
}



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




//testimonial array
document.addEventListener("DOMContentLoaded", function() {
  const testimonials = [
      {
          name: "Olatunji Yusuf",
          position: "Business Developer",
          message: "Adetoke is a highly dedicated and enthusiastic Software Engineer. In our collaboration, I witnessed her exceptional problem-solving skills and strong attention to detail. Adetoke approaches challenges with a positive attitude, always eager to learn and improve. Her commitment to delivering high-quality code and her collaborative nature make her a valuable asset to any software development team. I have no doubt that Adetoke will continue to excel in her career as a Software Engineer.",
          image: "./assest/yk.jpg"
      },
      {
          name: "Roselyn Otunomeruke",
          position: "Software Engineer",
          message: "Adetoke Durojaiye is an exceptional individual who embodies professionalism, resilience, and excellence. I confidently recommend Adetoke for any leadership role, knowing she can drive success and inspire others.",
          image: "./assest/roselyn.jpg"
      }
      // Add more testimonials as needed
  ];

  const testimonialContainer = document.getElementById("testimonialsContainer");

  function displayRandomTestimonial() {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      const randomTestimonial = testimonials[randomIndex];

      const testimonialHTML = `
          <div id="test">
              <div>
                  <img src="${randomTestimonial.image}" alt="" width="190px" style="margin-top: 30px;">
              </div>
              <div class="refloop">
                  <i class="fa fa-4x fa-quote-left" id="left"></i>
                  <p id="ref">${randomTestimonial.message}</p>
                  <i class="fa fa-4x fa-quote-right" id="right"></i>
                  <div id="name">
                      <h1>${randomTestimonial.name}</h1>
                      <h4>${randomTestimonial.position}</h4>
                  </div>
              </div>
          </div>
      `;

      testimonialContainer.innerHTML = testimonialHTML;
  }

  // Initial display of random testimonial
  displayRandomTestimonial();

  // Set interval to display new random testimonial every 10 seconds
  setInterval(() => {
      displayRandomTestimonial();
  }, 10000); // Change interval time (in milliseconds) as needed
});





//Gsap
gsap.from(".soc, #AB h3, #my-name, #tftoke, #p2", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1
});

gsap.registerPlugin(ScrollTrigger);

    gsap.from("#dodo > div", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#dodo",
            start: "top center+=100",
            end: "center center",
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

    gsap.from("#flexproject", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: " #flexproject",
            start: "top center+=100",
            end: "center center",
            scrub: 1
        }
    });
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#ccword", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#ccword",
            start: "top center+=100",
            end: "center center",
            scrub: 1
        }
    });



// Animate the project portfolio container onto the screen from the right
gsap.from("#slag", {
  x: "100%",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#slag",
    start: "top center", 
    end: "center center",
    scrub: 1
  }
});
   





gsap.registerPlugin(ScrollTrigger);

    gsap.from("#get, #flexproject", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#get, #flexproject",
            start: "top center+=100",
            end: "center center",
            scrub: 1
        }
    });


   







//form field
function composeEmail() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const { name, email, budget, description } = Object.fromEntries(formData);

  const subject = 'New Project Inquiry';
  const message = `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nDescription: ${description}`;

  const mailToLink = `mailto:adetokedurojaiye@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Open the default email client with pre-filled email content
  window.location.href = mailToLink;

  //to reset
  form.reset();
}






