import React from 'react';

const AddItem = () => {
    const addNewItem = event => {
        event.preventDefault();
        const picture = event.target.picture.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const Description = event.target.Description.value;
       
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        console.log(Description)
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({picture,name,price,Description,quantity,supplierName})
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div className='login-container'>
            <h4 className='text-center text-success'>ADD NEW ITEM HEAR</h4>
            <form onSubmit={addNewItem} className="login-form">

                <input type="text" name="picture" placeholder="image Url"/>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="price" placeholder="Price" />
                <input type="text" name="Description" placeholder="description" />
                
                <input type="text" name='quantity' placeholder="Quantity" />
                <input type="text" name='supplierName' placeholder="SupplierName" />
                <button className='btn btn-outline-success rounded-pill'>Add New Item</button>
            </form>
        </div>
    );
};

export default AddItem;