import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {

    const [formField, setFormField] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formField

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
    }

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })

            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already exsit")
            } else {
                console.error(error);
            }

        }
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={handleSubmit}>
                <label>Display Name </label>
                <input type={'text'} required name='displayName' onChange={handleChange} value={displayName} />

                <label>Email</label>
                <input type={'email'} required name='email' onChange={handleChange} value={email} />

                <label>Password</label>
                <input type={'password'} required name='password' onChange={handleChange} value={password} />

                <label>Confirm Password</label>
                <input type={'password'} required name='confirmPassword' onChange={handleChange} value={confirmPassword} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
