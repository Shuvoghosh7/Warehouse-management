import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="my-2">

            <footer className="text-center text-lg-start footer-container bg-dark" >
                <div className='d-flex justify-content-between py-3 px-2'>
                    <div>
                        <p className='text-light '>Get Connected with us on social networks:</p>
                    </div>
                    <div>
                        <div className="container ">
                            <BsFacebook className='text-light me-2 h3' />
                            <AiFillGoogleCircle className='text-light h3' />
                            <AiFillTwitterCircle className='text-light me-2 h3' />
                            <FaInstagramSquare className='text-light h3' />


                        </div>
                    </div>
                </div>
                <div className='px-4 py-3  d-flex justify-content-between'>
                    <div className='text-light'>
                        <h6>COMPANY NAME</h6>
                        <p>smartphone warehouse</p>
                    </div>
                    <div className='text-light'>
                        <h6>OUR  BRAND</h6>
                        <p>samsung</p>
                        <p>xiaomi</p>
                        <p>apple</p>
                        <p>phones</p>
                    </div>
                    <div className='text-light'>
                        <h6>CONTACT</h6>
                        <p><GoHome className='me-2' />Sector-11,Road-12,House-02,uttara</p>
                        <p><AiOutlineMail className='me-2' /> expression@gmail.com</p>
                        <p><FiPhoneCall className='me-2' />01772385111</p>
                        <p><FiPhoneCall className='me-2' /> 01623795232</p>
                    </div>
                </div>

                <div className="text-center text-white p-3">
                    <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>

                </div>

            </footer>

        </div>
    );
};

export default Footer;