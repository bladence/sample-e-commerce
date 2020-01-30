import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgWCwS_kvExzzfpIZUUaF_2nDwcvY7Y6k",
    authDomain: "sample-e-commerce-a6c78.firebaseapp.com",
    databaseURL: "https://sample-e-commerce-a6c78.firebaseio.com",
    projectId: "sample-e-commerce-a6c78",
    storageBucket: "sample-e-commerce-a6c78.appspot.com",
    messagingSenderId: "977565113831",
    appId: "1:977565113831:web:aef70531802885bec97142",
    measurementId: "G-1R060SCJXF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;