import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Itemupdate = () => {
    const { itemId } = useParams()
    const itemUpdate = (event) => {
        event.preventDefault();
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sellStatus= event.target.sellStatus.value;
        const supplierName = event.target.supplierName.value;
        const url = `https://mysterious-river-94324.herokuapp.com/updateItem/${itemId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({price, quantity,sellStatus, supplierName }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast("product update successfully")

            });
    }
    return (
        <div className='login-container'>
            <h4 className='text-center text-success'>Update ITEM HEAR</h4>
            <form onSubmit={itemUpdate} className="login-form">
                <input type="text" name="price" placeholder="Price" />
                <input type="text" name='quantity' placeholder="Quantity" />
                <input type="text" name='sellStatus' placeholder="Sell Status" />
                <input type="text" name='supplierName' placeholder="SupplierName" />
                <button className='btn btn-outline-success rounded-pill'>Update Item</button>
            </form>
        </div>
    );
};

export default Itemupdate;