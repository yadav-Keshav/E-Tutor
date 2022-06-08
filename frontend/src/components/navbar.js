import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import logo from '../download.jfif';
export default function Navbar() {
    const dispatch = useDispatch();
    const auth = useSelector(State => State.auth);
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <a href='/' className='log'>E-Tutor</a>
                </li>
                <li>
                    <div className='search'>
                        <img src={logo}></img>
                        <input placeholder='Search for anything'></input>
                    </div>
                </li>
                <li>
                    <a>Teach on E-Tutor</a>
                </li>
                <li>
                    <a>My-Learning</a>
                </li>
                {
                    auth.isLoggedIn===true? (<li>
                        <a href='/profile'>{auth.userInfo.name}</a>
                    </li>) : (<li>
                        <a href='/signin'>Sign In</a>
                    </li>)
                }
            </ul>
        </div>
    )
}
