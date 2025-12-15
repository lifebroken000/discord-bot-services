import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7jaB0RW-Ibr316JOn0Gkq239bQl_Hni8",
  authDomain: "discordbotwork-b9990.firebaseapp.com",
  projectId: "discordbotwork-b9990",
  storageBucket: "discordbotwork-b9990.firebasestorage.app",
  messagingSenderId: "668231822956",
  appId: "1:668231822956:web:e4f36833ffeb81b66f7249"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// This runs on index.html (main page)
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // if not logged in → redirect to login page
    window.location.href = "login.html";
  }
});
