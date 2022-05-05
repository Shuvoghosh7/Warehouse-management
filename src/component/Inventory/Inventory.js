import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct/useProduct';

const Inventory = () => {
    const { inventoryId } = useParams()
    const [product] = useProduct(inventoryId)
    const [isReload, setIsReload] = useState(false);
    console.log(product)
    const updateQuantity = (event) => {
        event.preventDefault();
  const quantity = event.target.quantity.value;
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
               console.log('success',data)
               setIsReload(!isReload)
            });
    }
 
   
   
return (
    <div className='item-container'>
        <div className='text-center'>
            <img src={product.picture} alt="" />
        </div>
        <h6><b>{product.name}</b></h6>
        <p className='text-justify'><b>Description:</b>{product.Description}</p>
        <div className='d-flex'>
            <div>
                <p><b>Price:</b>{product.price}</p>
                <p><b>supplierName:</b>{product.supplierName}</p>

            </div>
            <p><b>Quantity:</b>{product.quantity}</p>
        </div>
        <div className='text-center d-flex justify-content-around'>
            <button className='btn btn-outline-success rounded-pill'>Delivered</button>
            <Link className='btn btn-outline-success rounded-pill' to="/manageInventory">Manage Inventory</Link>
        </div>
        <form onSubmit={updateQuantity}>
            <input type="text" name="quantity" id="" />
            <input type="submit" value="Add quantity" />
        </form>
    </div>
);
};

export default Inventory;