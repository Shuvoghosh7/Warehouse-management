import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate()
    const location =useLocation()
    let from=location.state?.from?.pathname || "/"
    if(user){
        navigate(from,{replase:true})
      }
    return (
        <div>
            <div className="social">
                    <div className="go" onClick={()=>signInWithGoogle()}><FcGoogle />  Google</div>
                    <div className="fb"><BsFacebook /> Facebook</div>
                </div>
        </div>
    );
};

export default SocialLogin;