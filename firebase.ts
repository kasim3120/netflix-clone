// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosU5R_3wAD1QcPMYLkhOEBAQcSXUN05E",
  authDomain: "netflix-clone-fddd8.firebaseapp.com",
  projectId: "netflix-clone-fddd8",
  storageBucket: "netflix-clone-fddd8.appspot.com",
  messagingSenderId: "1021599893206",
  appId: "1:1021599893206:web:1e590b4e18a17d836b6b77",
  measurementId: "G-VCKPFEXXTP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }