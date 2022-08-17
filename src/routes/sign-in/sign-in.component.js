import React, { Fragment } from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from './../../utils/firebase.utils'

export default function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();

        const userDoc = await createUserDocumentFromAuth(user)

        console.log('userDoc =>', userDoc)

    }
    return (
        <Fragment>
            <div>SignIn</div>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </Fragment>
    )
}
