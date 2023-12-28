import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyChwDMdugnRWF8Fc1iBZIEbpxRgs0FAURw",
  authDomain: "scentsymphony-c4fde.firebaseapp.com",
  projectId: "scentsymphony-c4fde",
  storageBucket: "scentsymphony-c4fde.appspot.com",
  messagingSenderId: "313184551572",
  appId: "1:313184551572:web:168b5e44325664b65d2a81",
  measurementId: "G-0C3KNWD5SZ",
});

export const auth = getAuth(firebaseApp);

export default firebaseApp;
