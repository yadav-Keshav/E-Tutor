import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
export default function Signup() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        const { data } = await axios.post('http://localhost:4001/api/v1/auth/login', { email, password });
        console.log(data);
    }



    // JSX code for Register form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter Name' />
                    {renderErrorMessage("name")}
                </div>
                <div className="input-container">
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter Email' />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter Password' />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    return (
        <div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    );
}
