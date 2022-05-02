import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const [showPass, setPass] = useState(false)
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
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
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
    const handealLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    useEffect(() => {
        toast(hookError?.message)

    }, [hookError])


    return (
        <div className='login-container'>
            <h1 className='login-title'>Login Now</h1>
            <form onSubmit={handealLogin} className="login-form">
                <label for="username">Username</label>
                <input type="email" placeholder="Your Email" onChange={handealEmail} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <label for="password">Password</label>
                <div className='possitionR'>
                    <input type={showPass?"text":"password"} placeholder="password" onChange={handealPassword} />
                    <p className='possitionA' onClick={() => setPass(!showPass)}><AiFillEye /></p>
                </div>
                {errors?.password && <p className="error-message">{errors.password}</p>}

                <button>Sing In</button>
            </form>
            <p>Don't Have an account? <Link to="/register">Sing up First</Link></p>
        </div>
    );
};

export default Login;