// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlVOJCeC7Pwd3KfKrf5grVjvR191h4Bw",
  authDomain: "dragon-news-2-fd13c.firebaseapp.com",
  projectId: "dragon-news-2-fd13c",
  storageBucket: "dragon-news-2-fd13c.appspot.com",
  messagingSenderId: "566620456396",
  appId: "1:566620456396:web:51e8bcf16e73062c6e0969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app