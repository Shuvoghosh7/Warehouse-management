import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Share/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
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
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Should contain least one digit,one lower case,one upper case and 8 characters!" });
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
            const url = "https://mysterious-river-94324.herokuapp.com/login"
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email
                })
            })
                .then(res => res.json())
                .then(result => {
                    localStorage.setItem('getToken', result.token)
                    navigate(from);
                })
            
        }
    }, [user])
    useEffect(() => {
        toast(hookError?.message)

    }, [hookError])

    if (sending) {
        return <Loading />;
    }
    const resatePassword = async () => {
        const email = userInfo.email
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email your email address');
        } else {
            toast("please enter your email address")
        }
    }
    return (
        <div className='login-container'>
            <h1 className='login-title'>Login Now</h1>
            <form onSubmit={handealLogin} className="login-form">
                <label for="username">Username</label>
                <input type="email" placeholder="Your Email" onChange={handealEmail} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <label for="password">Password</label>
                <div className='possitionR'>
                    <input type={showPass ? "text" : "password"} placeholder="password" onChange={handealPassword} />
                    <p className='possitionA' onClick={() => setPass(!showPass)}><AiFillEye /></p>
                </div>
                {errors?.password && <p className="error-message">{errors.password}</p>}

                <button>Sing In</button>
                <SocialLogin />

            </form>
            <p>Don't Have an account? <Link to="/register">Sing up First</Link></p>
            <button onClick={resatePassword}>Reset Password</button>
        </div>
    );
};

export default Login;