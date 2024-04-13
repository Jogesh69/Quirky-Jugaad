
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth ,googleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
 

  const firebaseConfig = {
    apiKey: "AIzaSyB7e4WnP-a5bnIlJ430xFEgy_u-H2zUA20",
    authDomain: "quirky-jugaad-e0565.firebaseapp.com",
    projectId: "quirky-jugaad-e0565",
    storageBucket: "quirky-jugaad-e0565.appspot.com",
    messagingSenderId: "917834876130",
    appId: "1:917834876130:web:fad64680f50f1120478abb",
    measurementId: "G-0T2RDLBK6R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  auth.languagecode = 'en'
  const provider = new googleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function()
  {
 
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFormResult(result);
        const user= result.user;
        console.log(user);
        window.location.href = "loggedin.html";


    }).catch((error) => {
           const errorCode = error.Code;
           const errorMessage = error.Message;
    })


})