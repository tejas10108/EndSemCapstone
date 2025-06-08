import React from 'react';
import './Login.css'; 
import 'typeface-poppins';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate =useNavigate()

    const handlelogin = (e) => {
        navigate('/Pomodoro');
    }


    
    return (
        <div className="login-page">
            <div className="Written">
                <h1>Pomodoro</h1>
                <div className='Main'>
                    <p className='hehe'>Master your time, boost your productivity with the proven Pomodoro Technique</p>
                    <ul>
                        <li>Free to start</li>
                        <li>Customizable timers</li>
                        <li>Detailed analytics</li>
                    </ul>
                </div>
            </div>
            <div className="login-container">
                <h1>Welcome Back</h1>
                <p>Please enter your credentials to log in</p>
                <form onSubmit={handlelogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>
                    <a href="#" className="forgot-link">Forgot Password?</a>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;