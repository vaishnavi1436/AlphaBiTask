// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1FMozeEYomrw3KZ3r8YfLLiGs1SDhxUc",
  authDomain: "giphyhub-41816.firebaseapp.com",
  projectId: "giphyhub-41816",
  storageBucket: "giphyhub-41816.appspot.com",
  messagingSenderId: "252737075496",
  appId: "1:252737075496:web:0d3a3c2084ffefdcfef81d",
  measurementId: "G-96RZ0KNJTF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app,auth};
