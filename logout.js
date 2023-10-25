// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

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

// Getting HTML elements
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginButton = document.getElementById("loginButton");
var loginError = document.getElementById("loginError");

// Function to enable or disable the login button
function setLoginButtonState(isEnabled) {
  loginButton.disabled = !isEnabled;
}

// Function for user sign-out
function signOut() {
  auth.signOut().then(function() {
    // Sign-out successful.
    window.location.href = "login.html"; // Redirect to the login page or another appropriate page.
  }).catch(function(error) {
    // An error happened, handle it as needed.
    console.error("Error during sign out: " + error.message);
  });
}

// Event listener for the log out button
loginButton.addEventListener("click", logout);
