import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcRe4k3NejWQMEtuJ2i4woDVRQZ33l1Ac",
  authDomain: "institut-sup.firebaseapp.com",
  projectId: "institut-sup",
  storageBucket: "institut-sup.firebasestorage.app",
  messagingSenderId: "228696039151",
  appId: "1:228696039151:web:44960c7aec223cc38e051a",
};

const app = initializeApp(firebaseConfig);

// Exporter les services Firebase pour ton app
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
