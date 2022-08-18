import React, { Fragment, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from './../../utils/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form'

export default function SignIn() {

    useEffect(() => {

        async function fetchRedirectResult() {
            const response = await getRedirectResult(auth)

            console.log('response :>> ', response);

            if (response) {
                const userDoc = await createUserDocumentFromAuth(response.user)

                console.log('userDoc :>> ', userDoc);
            }

        }

        fetchRedirectResult()
    }, [])


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDoc = await createUserDocumentFromAuth(user)

    }

    return (
        <Fragment>
            <div>SignIn</div>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>

            <SignUpForm />
        </Fragment>
    )
}
