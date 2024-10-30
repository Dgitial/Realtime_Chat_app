import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatappreact-1a7e6.firebaseapp.com",
  projectId: "chatappreact-1a7e6",
  storageBucket: "chatappreact-1a7e6.appspot.com",
  messagingSenderId: "457615587262",
  appId: "1:457615587262:web:8a9406f0fc81541a2cabef",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
