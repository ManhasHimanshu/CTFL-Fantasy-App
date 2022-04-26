// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuIgicqr9LTEQWeHTvucwt-9bxMnyr9uo",
  authDomain: "ctfl-fantasy-app-908f8.firebaseapp.com",
  projectId: "ctfl-fantasy-app-908f8",
  storageBucket: "ctfl-fantasy-app-908f8.appspot.com",
  messagingSenderId: "35602710740",
  appId: "1:35602710740:web:060b382d0fc64219767b41",
  measurementId: "G-W3NZV0K3QK"
};

// Initialize Firebase
let app;
if (firebase.apps.length ===0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}
const analytics = getAnalytics(app);