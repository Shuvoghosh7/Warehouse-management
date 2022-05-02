import React, { useState } from 'react';
import './Register.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookerror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handealEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    }

    const handealPassword = (e) => {
        const passwordRegex = /.{6,8}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 or 8 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }

    }
    const ConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value })
            setErrors({ ...errors, password: "" });
        }
        else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    }
    const handealRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)


    }
    return (
        <div className='login-container'>
            <h1 className='login-title'>Register Now</h1>
            <form onSubmit={handealRegister} className="login-form">
                <label for="username">Username</label>
                <input type="email" placeholder="Your Email" onChange={handealEmail} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <label for="password">Password</label>
                <input type="password" placeholder="password" onChange={handealPassword} />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <label for="password">confirm password</label>
                <input type="password" placeholder="confirm password" onChange={ConfirmPassword} />
                <button>Sing Up</button>
                <div className="social">
                    <div className="go"><FcGoogle />  Google</div>
                    <div className="fb"><BsFacebook /> Facebook</div>
                </div>
            </form>
        </div>
    );
};

export default Register;