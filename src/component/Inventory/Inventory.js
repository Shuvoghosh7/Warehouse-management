import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct/useProduct';

const Inventory = () => {
    const{inventoryId}=useParams()
    const[product]=useProduct(inventoryId)
    return (
        <div>
            <h1>Hello:{product.name}</h1>
        </div>
    );
};

export default Inventory;