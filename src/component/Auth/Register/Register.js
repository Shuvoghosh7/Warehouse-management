import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Register Now</h1>
            <form className="login-form">
            <label for="username">Username</label>
            <input type="email" placeholder="Your Email"/>
            <label for="password">Password</label>
            <input type="password" placeholder="password"/>
            <label for="password">confirm password</label>
            <input type="password" placeholder="confirm password"/>
            <button>Sing Up</button>
            </form>
        </div>
    );
};

export default Register;