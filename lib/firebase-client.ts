import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCfqShykQW7bbMmTLuVTUSEHjQv6VGubmM",
  authDomain: "kyomo-1590f.firebaseapp.com",
  databaseURL:
    "https://kyomo-1590f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kyomo-1590f",
  storageBucket: "kyomo-1590f.appspot.com",
  messagingSenderId: "394693689778",
  appId: "1:394693689778:web:bf156337e34577d10be4ab",
  measurementId: "G-4YE6DS8DZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
