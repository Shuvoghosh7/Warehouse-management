import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, loading, googleError] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    if (user) {
        const url = "http://localhost:5000/login"
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email:user.email
            })
        })
            .then(res => res.json())
            .then(result => {
                localStorage.setItem('getToken',result.token)
                navigate(from, { replace: true });
            })
    }
    useEffect(() => {
        toast(googleError?.message)

    }, [googleError])
    return (
        <div>
            <div className="social">
                <div className="go" onClick={() => signInWithGoogle()}><FcGoogle />  Google</div>
                <div className="fb"><BsFacebook /> Facebook</div>
            </div>
        </div>
    );
};

export default SocialLogin;