import React, { useEffect, useState } from 'react';
import './Register.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye } from 'react-icons/ai';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        hookerror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [showPass, setPass] = useState(false)
    const [showPass2, setPass2] = useState(false)

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
    useEffect(() => {
        if (hookerror) {
            toast(hookerror?.message)
        }
    }, [hookerror])
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    return (
        <div className='login-container'>
            <h1 className='login-title'>Register Now</h1>
            <form onSubmit={handealRegister} className="login-form">
                <label for="username">Username</label>
                <input type="email" placeholder="Your Email" onChange={handealEmail} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <label for="password">Password</label>
                <div className='possitionR'>
                    <input type={showPass ? "text" : "password"} placeholder="password" onChange={handealPassword} />
                    <p className='possitionA' onClick={() => setPass(!showPass)}><AiFillEye /></p>
                </div>
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <label for="password">confirm password</label>
                <div className='possitionR'>
                    <input type={showPass2? "text":"password"} placeholder="confirm password" onChange={ConfirmPassword} />
                    <p className='possitionA' onClick={() => setPass2(!showPass2)}><AiFillEye /></p>
                </div>
                <button>Sing Up</button>
                <div className="social">
                    <div className="go"><FcGoogle />  Google</div>
                    <div className="fb"><BsFacebook /> Facebook</div>
                </div>
            </form>
            <p>Already Have an Account? <Link to="/login">Sing In</Link></p>

        </div>
    );
};

export default Register;