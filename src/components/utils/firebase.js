import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_OyKAhI-t47a0XvGsPAETqYzzZJieiU",
  authDomain: "react-34755-2022-eda68.firebaseapp.com",
  projectId: "react-34755-2022-eda68",
  storageBucket: "react-34755-2022-eda68.appspot.com",
  messagingSenderId: "870608084620",
  appId: "1:870608084620:web:f5da4305d2d045ab96e5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()