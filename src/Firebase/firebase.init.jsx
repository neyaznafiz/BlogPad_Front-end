import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyDTKBbM8PzkOVK5uSZzAGJ1JEv_C-7TqWM",
  authDomain:"blogpad-n.firebaseapp.com",
  projectId:"blogpad-n",
  storageBucket:"blogpad-n.appspot.com",
  messagingSenderId:"656298257409",
  appId:"1:656298257409:web:da48f08db821c5beaa2400",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
