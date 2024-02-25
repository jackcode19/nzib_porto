import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgaNoEZvbGL0JtMQ58-q3pupf2A-ACspo",
  authDomain: "nzib-porto.firebaseapp.com",
  projectId: "nzib-porto",
  storageBucket: "nzib-porto.appspot.com",
  messagingSenderId: "354053006565",
  appId: "1:354053006565:web:a9c52c165293b50680a00c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imagesDb = getStorage(app);
export const dataDb = getFirestore(app);
export const auth = getAuth(app);