import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const MyItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myitem, setMyitem] = useState([])
    console.log(myitem)

    useEffect(() => {
        const url = "http://localhost:5000/myitem?email=user.email";
        fetch(url, {
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("getToken")}`,
            },
        })
            .then(res => res.json())
            .then(data => setMyitem(data))
    }, [user.email])
    return (
        <div>
            <h1>MY Item:{myitem.length}</h1>
            <h1>MY Item:{user.email}</h1>
        </div>
    );
};

export default MyItem;