import React, { useState } from 'react'
import Login from './login';
import Signup from './signup';
import './login.css';
export default function Auth() {
    const [val, setVal] = useState('signin');
    return (
        <div className="app">
            <div className="login-form">
                <h1>E-Tutor</h1>
                <button onClick={() => setVal('signin')} className={val == 'signin' ? 'check' : 'notcheck'}> Sign In </button>
                <button onClick={() => setVal('signup')} className={val == 'signup' ? 'check' : 'notcheck'}> Sign Up </button>
                {
                    val === 'signin' ? (<Login />) : (<Signup />)
                }
            </div>
        </div>
    )
}
