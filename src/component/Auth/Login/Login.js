import React from 'react';

const Login = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Login Now</h1>
            <form className="login-form">
                <label for="username">Username</label>
                <input type="email" placeholder="Your Email" />
                <label for="password">Password</label>
                <input type="password" placeholder="password" />
                <button>Sing In</button>
            </form>
        </div>
    );
};

export default Login;