// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrA3uOJGDEmNu7Demazd-ePZEsj2d-Q1I",
  authDomain: "prepwise-85273.firebaseapp.com",
  projectId: "prepwise-85273",
  storageBucket: "prepwise-85273.firebasestorage.app",
  messagingSenderId: "931233081012",
  appId: "1:931233081012:web:6632744388d1114921d9e1",
  measurementId: "G-T945H6M2HZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize and export Firebase services
export const auth = getAuth(app);
