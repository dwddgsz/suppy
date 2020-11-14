import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA50PXza4v5Gu_Ec0bOvtTJLJVvgFGr5ZM",
    authDomain: "suppy-4d116.firebaseapp.com",
    databaseURL: "https://suppy-4d116.firebaseio.com",
    projectId: "suppy-4d116",
    storageBucket: "suppy-4d116.appspot.com",
    messagingSenderId: "617377298875",
    appId: "1:617377298875:web:2d6836c6bd54a9f939ac9e"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();
firebase.auth();


export default firebase;