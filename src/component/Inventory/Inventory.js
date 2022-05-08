import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



const Inventory = () => {
    const { inventoryId } = useParams()
   
    const [reload, setReload] = useState(false)
    const[product,setProduct]=useState([])
    useEffect(() => {
        const url = `https://mysterious-river-94324.herokuapp.com/product/${inventoryId}`
        fetch(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const addQuantity = (event) => {
    
        const newquantity = event.target.quantity.value;
        if (newquantity !== " ") {
            const addQuantity = parseInt(product.quantity) + parseInt(newquantity)
            const url = `https://mysterious-river-94324.herokuapp.com/product/${inventoryId}`
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ addQuantity }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setReload(!reload)
                    console.log('success', data)
                    event.target.reset();
                });
        }
         
    }
    const reduceQuantity=(productId)=>{
            const quantityReduce=product.quantity - 1
            const url = `https://mysterious-river-94324.herokuapp.com/products/${productId}`
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantityReduce }),
            })
                .then((res) => res.json())
                .then((data) => {
                    // window.location.reload(); 
                    // setReload(reload)
                    window.location.reload(false);
                    
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
                <button className='btn btn-outline-success rounded-pill' onClick={()=>reduceQuantity(inventoryId)}>Delivered</button>
                <Link className='btn btn-outline-success rounded-pill' to="/manageInventory">Manage Inventory</Link>
            </div>
            <form className="text-center" onSubmit={addQuantity}>
                <input className='mt-2 rounded' type="text" name="quantity" id="" />
                <input className='mt-2 btn btn-outline-success rounded-pill' type="submit" value="Add quantity" />
            </form>

        </div>
    );
};

export default Inventory;