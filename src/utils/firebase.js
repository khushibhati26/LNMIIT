import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDieI4WX20ECg8T0Mj6E8FSWazCN-xX6_c",
  authDomain: "lnmiit-37bad.firebaseapp.com",
  projectId: "lnmiit-37bad",
  storageBucket: "lnmiit-37bad.firebasestorage.app",
  messagingSenderId: "165705563969",
  appId: "1:165705563969:web:1af55ddad571567aef6bc0",
  measurementId: "G-GJTQ2G1WXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);