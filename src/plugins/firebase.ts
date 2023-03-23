import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD3i3rOREpJHYC_mtwXYNJwi7-xf_B8_Io",
  authDomain: "jackpot-7ff13.firebaseapp.com",
  projectId: "jackpot-7ff13",
  storageBucket: "jackpot-7ff13.appspot.com",
  messagingSenderId: "455686047978",
  appId: "1:455686047978:web:c14c64ae1ab810b66eaf93",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db, doc, setDoc,
};
