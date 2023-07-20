// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {getFirestore,collection, addDoc} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2EV_FBcri18AbmhwQECMqSMIs1Kd56Y",
  authDomain: "signup-7e3f9.firebaseapp.com",
  projectId: "signup-7e3f9",
  storageBucket: "signup-7e3f9.appspot.com",
  messagingSenderId: "353076194026",
  appId: "1:353076194026:web:874be5e1f541519fb78593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let btn = document.getElementById("btn");

// console.log(document.getElementById("btn"));
// console.log(email);
// console.log(password);
btn.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: document.getElementById('un').value,
          // last: document.getElementById('ln').value,
          // born: document.getElementById('age').value
        });
        console.log("Document written with ID: ", docRef.id);
      } 
        catch (e) {
        console.error("Error adding document: ", e);
      }
      window.location.href='./signup.html#log'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
});
