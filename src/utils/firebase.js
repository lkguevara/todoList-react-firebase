import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCpOgJSQlRniGyXhtuJAbMy9QDalCRiM0I",
    authDomain: "todo-list-7776e.firebaseapp.com",
    projectId: "todo-list-7776e",
    storageBucket: "todo-list-7776e.appspot.com",
    messagingSenderId: "245380279887",
    appId: "1:245380279887:web:23bc6ab98c1ed9b2b5043a"
};

export default firebase.initializeApp(firebaseConfig);