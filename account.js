// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB10QX6zgoxnC0i35topItjWiiVtrJEg7c",
  authDomain: "home-haven.firebaseapp.com",
  projectId: "home-haven",
  storageBucket: "home-haven.appspot.com",
  messagingSenderId: "1032235983512",
  appId: "1:1032235983512:web:a7873b055bd1bccc6d26ed",
  measurementId: "G-LM60KQ2DH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();



const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignupPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account Created");
        window.location = "./patientPortal.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error Occurred. Try Again");
        window.alert(errorMessage);

      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;
  var isVerified = true;

  if (isVerified) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("Success! Welcome Back");
        window.location = "patientPortal.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
        // window.alert("Error Occurred. Try Again")
      });
  }
 });

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

