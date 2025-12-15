import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7jaB0RW-Ibr316JOn0Gkq239bQl_Hni8",
  authDomain: "discordbotwork-b9990.firebaseapp.com",
  projectId: "discordbotwork-b9990",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("orderForm");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to order!");
    window.location.href = "login.html";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form[0].value;
  const email = form[1].value;
  const req = form[2].value;

  await addDoc(collection(db, "orders"), {
    name,
    email,
    req,
    createdAt: new Date()
  });

  alert("Order sent successfully!");
  form.reset();
});
