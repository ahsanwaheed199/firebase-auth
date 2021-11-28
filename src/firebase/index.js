import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvLJZg9EiRn0-qaUdlsBUMrfDgLjIrCcs",
  authDomain: "signin-signup-auth-ee965.firebaseapp.com",
  projectId: "signin-signup-auth-ee965",
  storageBucket: "signin-signup-auth-ee965.appspot.com",
  messagingSenderId: "20212879524",
  appId: "1:20212879524:web:10cbab2e2afeb67a081631"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);