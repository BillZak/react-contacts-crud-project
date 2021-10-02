import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyA0Ob0agddSMgU_AKG044p6AZeiIuGBSdw",
  authDomain: "contacts-app-ca6e8.firebaseapp.com",
  projectId: "contacts-app-ca6e8",
  storageBucket: "contacts-app-ca6e8.appspot.com",
  messagingSenderId: "965641354183",
  appId: "1:965641354183:web:101d97b23b06c26550f7e2"
};


firebase.initializeApp(firebaseConfig);

export default firebase;