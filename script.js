function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
  
    if (name && surname && email) {
      alert(`Welcome ${name} ${surname}! Your registration is successful.`);
      window.location.href = 'studyconnect_home.html'; // Redirect to home page
    } else {
      alert("Please fill in all required fields.");
    }
  }
  // Handle Login
function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // For now, log the input (replace with backend logic later)
  if (email && password) {
      window.location.href = 'studyconnect_home.html';
  }
}