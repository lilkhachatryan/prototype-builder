import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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

export const fireStore = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const signOut = () => firebaseAuth.signOut();
export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    // Get a reference to the place in DB where user profile might be.
    const userRef = fireStore.doc(`users/${user.uid}`);

    // Go and fetch document form that location.
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const createdAt = new Date();
        const { email } = user;
        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            });
        } catch (ex) {
            console.error('Error creating a user:', ex);
        }
    }

    return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await fireStore
            .collection('users')
            .doc('uid')
            .get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (ex) {
        console.error('get user document', ex);
    }
};

export default firebase;
