import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const MyItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItem, setMyItem] = useState([])
    console.log(myItem)
    useEffect(()=>{
        const email=user.email
        const url=`http://localhost:5000/products?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data))
    },[user])
    const handealDelaite = (delitId) => {
        const proceed = window.confirm("are you confirm,Delit This Item?")
        if (proceed) {
            const url = `http://localhost:5000/product/${delitId}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItem.filter(pd => pd._id !== delitId)
                    setMyItem(remaining)

                })
        }

    }
    return (
        <div className='mt-3 container'>
            <h3>User Email:{user.email}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">SellStatus</th>
                        <th scope="col">SupplierName</th>
                        <th scope="col">Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItem.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.Description}</td>
                                    <td>{value.quantity}</td>
                                    <td>{value.sellStatus}</td>
                                    <td>{value.supplierName}</td>
                                    <td className='d-flex justify-content-center align-items-center'>
                                        <button className='btn text-danger' onClick={() => handealDelaite(value._id)}><RiDeleteBin6Fill /></button></td>
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

export default MyItem;