import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIUvVUmB6_TeyAViM2tm6io8kYD8tIZDU",
  authDomain: "laddooflex.firebaseapp.com",
  projectId: "laddooflex",
  storageBucket: "laddooflex.appspot.com",
  messagingSenderId: "302227846108",
  appId: "1:302227846108:web:882045fbfbd2dafdbb9519",
  measurementId: "G-ZMGN82PE8L"
};
firebase.initializeApp(firebaseConfig);
const storage =firebase.storage();
export default storage;