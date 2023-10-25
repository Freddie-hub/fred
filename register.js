// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK2KH2u6bk4S50w-2o1K352b72pslTpCc",
  authDomain: "signup-form-8c21f.firebaseapp.com",
  projectId: "signup-form-8c21f",
  storageBucket: "signup-form-8c21f.appspot.com",
  messagingSenderId: "8554987574",
  appId: "1:8554987574:web:4564f1d57c932b30b0d897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to enable or disable the signup button
function setSignupButtonState(isEnabled) {
  const signupButton = document.getElementById("signupButton");
  signupButton.disabled = !isEnabled;
}

// Function for starting data
function signup() {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");
  const password = document.getElementById("password");
  const errorDisplay = document.getElementById("errorDisplay");

  setSignupButtonState(false); // Disable the button during registration

  const obj = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    contact: contact.value,
    password: password.value
  }

  // Simple form validation (you can add more checks as needed)
  if (!obj.firstname || !obj.lastname || !obj.email || !obj.contact || !obj.password) {
    errorDisplay.textContent = "Please fill in all required fields.";
    setSignupButtonState(true); // Re-enable the button
    return;
  }

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
      errorDisplay.textContent = "Signup successful";

      // Redirect to index.html upon successful registration
      window.location.href = "index.html";
    })
    .catch(function(error) {
      errorDisplay.textContent = "Error: " + error.message;
      setSignupButtonState(true); // Re-enable the button
    });
}

const signupButton = document.getElementById("signupButton");
signupButton.addEventListener("click", signup);
