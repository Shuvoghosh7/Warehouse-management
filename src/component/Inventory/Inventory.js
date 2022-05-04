import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct/useProduct';

const Inventory = () => {
    const { inventoryId } = useParams()
    const [product] = useProduct(inventoryId)
    console.log(product)
    const[ss,setss]=useState([])
    console.log(ss)
   
    const handleUpdate = (event) => {
        event.preventDefault();
        const x=product.quantity -1
        fetch(`http://localhost:5000/product/${inventoryId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ x}),
        })
          .then((res) => res.json())
          .then((data) => setss(data));
      };
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
            <button className='btn btn-outline-success rounded-pill' onClick={handleUpdate}>Delivered</button>
            <Link className='btn btn-outline-success rounded-pill' to="/manageInventory">Manage Inventory</Link>
        </div>
    </div>
);
};

export default Inventory;