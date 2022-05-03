import React, { useEffect, useState } from 'react';
import ShowAllProduct from './ShowAllProduct';

const ManageInventory = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='mt-3'>
            <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Description</th>
                        <th scope="col">quantity</th>
                        <th scope="col">supplierName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.Description}</td>
                                    <td>{value.quantity}</td>
                                    <td>{value.supplierName}</td>
                                    <td>{value.supplierName}</td>
                                    <td>{value.supplierName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;