import React from 'react';
import { Link } from 'react-router-dom';
import errors404 from '../../images/errors404.jpg'
const NotFound = () => {
    return (
        <div className='d-lg-flex justify-content-between mt-5 container'>
            <div className='d-flex justify-content-center align-items-center' >
                <div>
                    <h1 className='text-primary'>Oops!</h1>
                    <h4 className='text-danger'>The page you're looking for isn't here.</h4>
                    <h5> You might have the wrong address, or the page may have moved.</h5>
                    <button className='btn btn-outline-success rounded-pill '><Link className='text-decoration-none text-dark' to="/">Go To Homepage</Link></button>
                </div>
            </div>
            <div>
                <img style={{height:"400px"}} className='img-fluid' src={errors404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;