import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Banner/>
            <div className='container mt-4 '>
                <div className='row'>
                    {
                        items.slice(0, 6).map(item => <Item
                            item={item}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;