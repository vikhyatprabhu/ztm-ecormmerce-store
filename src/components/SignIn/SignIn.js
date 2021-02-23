import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './Signin.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email + " " + password)
    setEmail('')
    setPassword('')
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }



  return (
    <div className='sign-in'>
      <h2> I already have an account</h2>
      <span> Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" type="email" value={email} required handleChange={handleEmailChange} />
        <FormInput label="Password" name="password" type="password" value={password} required handleChange={handlePasswordChange} />
        <div className='buttons'>
          <CustomButton type="submit" onClick={signInWithGoogle}> {' '}
        Sign In </CustomButton>
          <CustomButton isGoogleSignIn type="submit" onClick={signInWithGoogle}> {' '}
        Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
