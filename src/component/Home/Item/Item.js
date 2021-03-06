import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, price, picture, quantity, supplierName, Description, sellStatus } = item
    const { inventoryId } = useParams()
    const navigate = useNavigate()
    const InventoryDetails = (DetailsId) => {
        navigate(`/inventory/${DetailsId}`)
    }

    return (
        <div className='col-md-6 col-lg-4 item-container '>
            <div className='text-center'>
                <img src={picture} alt="" />
            </div>
            <h6><b>{name}</b></h6>
            <p className='text-justify'><b>Description:</b>{Description}</p>
            <div className='d-flex justify-content-around'>
                <div>
                    <p><b>Price:</b>{price}</p>
                    <p><b>supplierName:</b>{supplierName}</p>
                </div>
                <div>
                    <p><b>Quantity:</b>{quantity}</p>
                    <p><b>SellStatus:</b>{sellStatus}</p>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <button className='btn btn-outline-success rounded-pill' onClick={() => InventoryDetails(_id)}>Update</button>

                <Link className='btn btn-outline-success rounded-pill' to="/manageInventory">Manage Inventory</Link>

            </div>

        </div>

    );
};

export default Item;