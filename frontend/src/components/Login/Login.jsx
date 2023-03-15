import React, { useState } from 'react'
import './Login.css'

import { login } from "../../redux/apiClint";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state?.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
        if (error === false) {
            return navigate('/')
        } else {
            return navigate('/login')
        }
    };

    return (
        <div className='contain'>
            <h1>facebook</h1>
            <h2>Facebook helps you connect and share with the people in your life.</h2>
            <form className="log" onSubmit={handleClick} disabled={isFetching}>
                <input type="text" className="email-phon" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className='submit' value='Log in' />
                <h3>Forgotten password?</h3>
                <hr />
                <input type="submit" className='new-account' value='create new account' />
            </form>
        </div>
    )
}

export default Login