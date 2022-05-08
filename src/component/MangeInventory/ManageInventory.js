import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const ManageInventory = () => {
    const [user] = useAuthState(auth );
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const navigate=useNavigate()
    const ItemDetails = (itemDetails) => {
        navigate(`/itemupdate/${itemDetails}`)
    }
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
    /* const handealMyitem=(item)=>{
        const{name,picture,price,quantity,sellStatus,supplierName,Description}=item
        // console.log(name,user.email)
        fetch('http://localhost:5000/myItem', {
            method: 'POST',
            body: JSON.stringify({
                name,
                picture,
                price,
                Description,
                quantity,
                sellStatus,
                supplierName,
                email:user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast("item added successfully!")
            });
    } */
    return (
        <div className='mt-3 container'>
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
                        product.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.Description}</td>
                                    <td>{value.quantity}</td>
                                    <td>{value.sellStatus}</td>
                                    <td>{value.supplierName}</td>
                                    <td className='d-flex justify-content-center align-items-center'>
                                        <button onClick={()=>ItemDetails(value._id)} className='btn btn-outline-success rounded-pill' >updateItem</button>
                                        {/* <button onClick={()=>handealMyitem(value)}>
                                            my item
                                        </button> */}
                                        <button className='btn text-danger' onClick={() => handealDelait(value._id)}><RiDeleteBin6Fill /></button></td>
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