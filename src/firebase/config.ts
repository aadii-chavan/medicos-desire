import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA594xxnORgqdKM5hVSy6F7p6LBtVqzkaI",
  authDomain: "medicos-desire.firebaseapp.com",
  projectId: "medicos-desire",
  storageBucket: "medicos-desire.firebasestorage.app",
  messagingSenderId: "992529908711",
  appId: "1:992529908711:web:a72ac5410fb4d9204cf342",
  measurementId: "G-EH91RS7GLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, auth, db }; 