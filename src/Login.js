import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'

function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        
        if (email === "valid@email.com" && password === "validpassword") {
            
            navigate('/dashboard'); 
        }
    }

    return (
        <div className='login'>
            <img src='https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg' className='login_logo' alt='Login Logo' />
            <div className='login_container'>
                <h1>Login to Facebook</h1>
                <form>
                    <center>
                        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </center>
                    <center>
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </center>
                    <center>
                        <button type='button' className='login_login' onClick={handleLogin}>
                            Login
                        </button>
                    </center>
                    <center>
                        <div className='sideinfo'>
                            <h5>Forgotten Password</h5>
                            <h5 className='dot'>.</h5>
                            <Link to='/register' style={{ textDecoration: "none" }}>
                                <h5 className='rtd'>Signup For Facebook</h5>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    );
}

export default Login;

