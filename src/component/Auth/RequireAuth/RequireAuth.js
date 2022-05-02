import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Share/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(user){
        return children;   
    }else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
   
};

export default RequireAuth;