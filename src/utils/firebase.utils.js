import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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

const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider)


//create new user from auth.
//if user already exsit its will return user 
//else it's will create new user
export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth

        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })

        } catch (error) {
            return error.message
        }
    }

    return userDocRef
}