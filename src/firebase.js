import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAvkHF57qYlHDpjrf2mMzyJ4Cp32E1rl2M",
    authDomain: "add-objects.firebaseapp.com",
    databaseURL: "https://add-objects.firebaseio.com",
    projectId: "add-objects",
    storageBucket: "add-objects.appspot.com",
    messagingSenderId: "885648500880",
    appId: "1:885648500880:web:4623605b1f6515557c1015",
    measurementId: "G-ZC4Y0YGCPZ"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();



export default firebase;
