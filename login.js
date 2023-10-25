// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

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

// Function for user login
function login(e) {
  e.preventDefault();
  setLoginButtonState(false); // Disable the button during login

  var email = loginEmail.value;
  var password = loginPassword.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      loginError.textContent = ""; // Clear any previous error message
      // Redirect the user to the dashboard or another page
      window.location.href = "index.html";
    })
    .catch(function (error) {
      loginError.textContent = "Error: " + error.message;
      setLoginButtonState(true); // Re-enable the login button
    });
}

// Event listener for the login form
loginButton.addEventListener("click", login);
