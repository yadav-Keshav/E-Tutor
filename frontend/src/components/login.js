import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { login } from '../redux/action/authaction';
export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const auth = useSelector(State => State.auth);
    const navigate = useNavigate();
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
        dispatch(login(email, password));
    }



    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
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
                <div className="button-container">
                    <a href="#">Forgot Password</a>
                </div>
            </form>
        </div>

    );
    useEffect(() => {
        if (auth.isLoggedIn) {
            navigate("/");
        }
    })

    return (
        <div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    );
}
