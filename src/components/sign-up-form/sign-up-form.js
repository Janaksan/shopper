import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input'
import './sign-up-form.scss'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {

    const [formField, setFormField] = useState(defaultFormFields)



    const { displayName, email, password, confirmPassword } = formField

    console.log('formField :>> ', formField);

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

            console.log('email :>> ', email);
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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'Display Name'}
                    type={'text'}
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName} />

                <FormInput
                    label={'Email'}
                    type={'email'}
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />

                <FormInput
                    label={'Password'}
                    type={'password'}
                    required
                    name='password'
                    onChange={handleChange}
                    value={password} />

                <FormInput
                    label={'Confirm Password'}
                    type={'password'}
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword} />

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    )
}
