// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAziR5tMVMXv7zkD3bzIu-84MWmNY9evVE",
  authDomain: "proyectoppw-c1a57.firebaseapp.com",
  databaseURL: "https://proyectoppw-c1a57-default-rtdb.firebaseio.com",
  projectId: "proyectoppw-c1a57",
  storageBucket: "proyectoppw-c1a57.appspot.com",
  messagingSenderId: "479818422556",
  appId: "1:479818422556:web:e03eea95f4ca1ab00f42d9",
  measurementId: "G-END951XFQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
