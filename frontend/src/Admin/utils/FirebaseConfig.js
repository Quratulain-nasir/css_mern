import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA6R6Vt6dWDmt57OfwGv1KdGnx5he_w9Lg",
    authDomain: "mern-3e255.firebaseapp.com",
    projectId: "mern-3e255",
    storageBucket: "mern-3e255.appspot.com",
    messagingSenderId: "663210948207",
    appId: "1:663210948207:web:e5bb92e8958f337b84bf9a",
    measurementId: "G-4CQ9DTXP5G"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)