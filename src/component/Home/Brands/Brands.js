import React from 'react';
import mi from '../../../images/Brands/mi.png'
import samsung from '../../../images/Brands/Samsung.png'
import apple from '../../../images/Brands/apple.png'
import vivo from '../../../images/Brands/vivo.png'

const Brands = () => {
    return (
        <div className='mt-3'>
            <h3>Available  Brands</h3>
            <div className='d-lg-flex  justify-content-lg-between container sm-text-center'>
                <div>
                    <img  src={mi} alt="" />
                </div>
                <div>
                    <img src={samsung} alt="" />
                </div>
                <div>
                    <img src={apple} alt="" />
                </div>
                <div>
                    <img src={vivo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;