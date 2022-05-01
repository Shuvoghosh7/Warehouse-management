import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Item.css'

const Item = ({ item }) => {
    const { name, price, picture, quantity, supplierName, Description } = item
    return (
        <div className='col-md-6 col-lg-4 item-container '>
            <div className='text-center'>
                <img src={picture} alt="" />
            </div>
            <h6><b>{name}</b></h6>
            <p className='text-justify'><b>Description:</b>{Description}</p>
            <div className='d-flex'>
                <div>
                    <p><b>Price:</b>{price}</p>
                    <p><b>supplierName:</b>{supplierName}</p>

                </div>
                <p><b>Quantity:</b>{quantity}</p>
            </div>
            <div className='text-center '>
                <button className='btn btn-outline-success rounded-pill'>Update</button>
            </div>

        </div>

    );
};

export default Item;