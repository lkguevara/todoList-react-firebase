import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpOgJSQlRniGyXhtuJAbMy9QDalCRiM0I",
    authDomain: "todo-list-7776e.firebaseapp.com",
    projectId: "todo-list-7776e",
    storageBucket: "todo-list-7776e.appspot.com",
    messagingSenderId: "245380279887",
    appId: "1:245380279887:web:23bc6ab98c1ed9b2b5043a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };