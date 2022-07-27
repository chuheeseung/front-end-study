// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAhuglCKvaZ8wuJ1XnB_NMl55lFXXjqi0w",
  authDomain: "react-firebase-chat-app-fcf07.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-app-fcf07-default-rtdb.firebaseio.com/",
  projectId: "react-firebase-chat-app-fcf07",
  storageBucket: "react-firebase-chat-app-fcf07.appspot.com",
  messagingSenderId: "395480710178",
  appId: "1:395480710178:web:f2c013c982fb8217bd5e7b",
  measurementId: "G-C84X532PP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;