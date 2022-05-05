import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>
                <h1>Oops!</h1>
                <p>404-Page Not Found</p>
                <button className='btn btn-outline-success rounded-pill text-de'><Link to="/">Go To Homepage</Link></button>
            </div>
        </div>
    );
};

export default NotFound;