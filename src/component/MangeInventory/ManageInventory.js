import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handealDelait = (delitId) => {
        const proceed = window.confirm("are you confirm,Delit This Item?")
        if (proceed) {
            const url = `http://localhost:5000/product/${delitId}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = product.filter(pd => pd._id !== delitId)
                    setProduct(remaining)

                })
        }
    }

    return (
        <div className='mt-3 container'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">SupplierName</th>
                        <th scope="col">Button</th>
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
                                    <td><button className='btn text-danger' onClick={() => handealDelait(value._id)}><RiDeleteBin6Fill /></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <Link className='btn btn-outline-success rounded-pill' to="/addItem">Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;