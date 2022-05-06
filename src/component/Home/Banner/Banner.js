import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/banner/Banner1.png'
import Banner2 from '../../../images/banner/Banner2.png'
import Banner3 from '../../../images/banner/Banner3.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />               
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />     
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;