import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const [name, setUsername] = useState("");
    const [surname, setSureName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("/user/requster", {
                name,
                surname,
                password,
                email,
            })
            navigate('/login')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h1 className='facebook'>facebook</h1>
                <div className="form">
                    <div className="hed">
                        <h3>Create a new account</h3>
                        <h5>It's quick and easy.</h5>
                    </div>
                    <hr />
                    <div className="reg">
                        <div className="name">
                            <input type="text" placeholder='First name' className="first-name" onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder='Surnname' className="sur-name" onChange={(e) => setSureName(e.target.value)} />
                        </div>
                        <input type="text" placeholder='Mobile number or email address' className="phon-email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='New password' className="password" onChange={(e) => setPassword(e.target.value)} />
                        <h5>Date of birth</h5>
                        <input type="date" className="date" />

                        <div className="gender">
                            <input type="radio" id="male" name="fav_language" value="male" />
                            <label htmlFor="male">male</label><br />
                            <input type="radio" id="female" name="fav_language" value="female" />
                            <label htmlFor="female">female</label><br />
                        </div>

                        <h5 className='dep'>People who use our service may have uploaded your contact information to Facebook. Learn more.</h5>
                        <h5 className='dep'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</h5>

                        <input type="submit" className='submit' value='Sign Up' />

                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register