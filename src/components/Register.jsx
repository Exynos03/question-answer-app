import React from 'react';
import { useState } from 'react';
import { firebaseFuntions } from "../config/firebase";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register } = firebaseFuntions;
    const navigate = useNavigate();

    const handleSubmit = () => {
        register({ firstName, lastName, email, password });
        navigate('/');
    }

return (
    <div>
        <label>First Name
            <input 
                type='text'
                required
                placeholder='First Name'
                onChange={(e) => {setFirstName(e.target.value)}}
            />
        </label>

        <label>Last Name
            <input
                type='text'
                required
                placeholder='Last Name'
                onChange={(e) => {setLastName(e.target.value)}}
            />
        </label>

        <label> Email
            <input 
                type='email'
                required
                placeholder='Email'
                onChange={(e) => {setEmail(e.target.value)}}
            />
        </label>

        <label> Password
            <input 
                type='password'
                required
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
            />
        </label>

        <button onClick={handleSubmit}>Register</button>
    </div>
)
}

export default Register
