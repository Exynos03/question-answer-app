import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        try{
            signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }

    return (
    <div>
        <label>
            Email
            <input type='email' required placeholder='Email'  onChange={(e) => {setEmail(e.target.value)}} />
        </label>
        <label>
            Password
            <input type='password' required placeholder='Password'  onChange={(e) => {setPassword(e.target.value)}}/>
        </label>
        <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login
