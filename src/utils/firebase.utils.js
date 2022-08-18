import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword

} from "firebase/auth"

import {
    doc,
    getDoc,
    getFirestore,
    setDoc

} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwdBkEbUDVSQUmHHA4mceAU5CYn0BqWr0",
    authDomain: "shopper-7d11a.firebaseapp.com",
    projectId: "shopper-7d11a",
    storageBucket: "shopper-7d11a.appspot.com",
    messagingSenderId: "804086741177",
    appId: "1:804086741177:web:75c7bee8195a130f994368"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// console.log(firebaseApp, 'firebaseApp')

//Initialize google auth provider
const googleAuthProvider = new GoogleAuthProvider();



googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
})

// console.log('googleAuthProvider', googleAuthProvider)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider)



const db = getFirestore()

//create new user from auth.
//if user already exsit its will return user 
//else it's will create new user
export const createUserDocumentFromAuth = async (userAuth, additonalInfo = {}) => {

    console.log('userAuth :>> ', userAuth);

    // if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log('userDocRef :>> ', userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth

        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additonalInfo
            })

        } catch (error) {
            console.log('error :>> ', error);
            return error.message
        }
    }

    return userDocRef
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}