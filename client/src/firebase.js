// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKkDVMS7ka83_a45xp2W5WIpQk6IwJGc",
  authDomain: "repaso-coder.firebaseapp.com",
  projectId: "repaso-coder",
  storageBucket: "repaso-coder.appspot.com",
  messagingSenderId: "815036485514",
  appId: "1:815036485514:web:06a227f34ad4e1c70b4273"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore(app);

