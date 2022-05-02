import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDxb6zkjH1f-sWhT4omhBtU5uKl5UnZE9w",
  authDomain: "smartphone-warehouse-ebc90.firebaseapp.com",
  projectId: "smartphone-warehouse-ebc90",
  storageBucket: "smartphone-warehouse-ebc90.appspot.com",
  messagingSenderId: "576930670658",
  appId: "1:576930670658:web:5d2673fe9bbb7cd70e65db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export default auth;