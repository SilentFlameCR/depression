import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAqH2KEDvVEOumGhOdxoAzKyqBVqQ6W9B8",
    authDomain: "depression-15a63.firebaseapp.com",
    databaseURL: "https://depression-15a63.firebaseio.com",
    projectId: "depression-15a63",
    storageBucket: "depression-15a63.appspot.com",
    messagingSenderId: "90598308780"
};
firebase.initializeApp(config);
export default firebase;