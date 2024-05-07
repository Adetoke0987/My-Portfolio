



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


//form field
function submitForm() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const { name, email, budget, description } = Object.fromEntries(formData);

  const subject = 'New Project Inquiry';
  const message = `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nDescription: ${description}`;

  const mailToLink = `mailto:your_email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Open the default email client with pre-filled email content
  window.location.href = mailToLink;

  // Reset the form after submission
  form.reset();
}






