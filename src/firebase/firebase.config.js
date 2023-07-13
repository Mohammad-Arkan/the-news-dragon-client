// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeMlEUB6ehG82iiymtAIG89IF1FaU5rTw",
  authDomain: "the-news-dragon-74440.firebaseapp.com",
  projectId: "the-news-dragon-74440",
  storageBucket: "the-news-dragon-74440.appspot.com",
  messagingSenderId: "247159664415",
  appId: "1:247159664415:web:2fdef63d563caf81588a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app