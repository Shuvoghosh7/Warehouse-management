import React from 'react';
import samsung from '../../../images/upcomming/samsung.jpg'
import samsungGalaxy from '../../../images/upcomming/samsung-galaxy.jpg'
import xiaomi from '../../../images/upcomming/xiaomi.jpg'
import xiaomi12 from '../../../images/upcomming/xiaomi-12.jpg'
const UpcomingProducts = () => {
    return (
        <div>
            <h3>Upcoming Products in Stock:</h3>
            <div className='d-lg-flex  justify-content-lg-between container'>
                <div>
                    <img src={samsung} alt="" />
                    <h6>Samsung Galaxy S20 FE </h6>
                    <h6>coming soon...</h6>
                </div>
                <div>
                    <img src={samsungGalaxy} alt="" />
                    <h6>Samsung Galaxy A53 5G</h6>
                    <h6>coming soon...</h6>
                </div>
                <div>
                    <img src={xiaomi} alt="" />
                    <h6>Xiaomi Redmi Note 11</h6>
                    <h6>coming soon...</h6>
                </div>
                <div>
                    <img src={xiaomi12} alt="" />
                    <h6>Xiaomi 12</h6>
                    <h6>coming soon...</h6>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProducts;