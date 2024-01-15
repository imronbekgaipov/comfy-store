import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi2v19Cqtof_EDNOkKq_zc9FJdXZhV5EU",
  authDomain: "comfy-store-ded17.firebaseapp.com",
  projectId: "comfy-store-ded17",
  storageBucket: "comfy-store-ded17.appspot.com",
  messagingSenderId: "784728961960",
  appId: "1:784728961960:web:db7db2c2bf2e4ed777e39d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
