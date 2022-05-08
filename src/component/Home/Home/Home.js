import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Item from '../Item/Item';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://mysterious-river-94324.herokuapp.com/product/')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
  
    return (
        <div>
            <Banner/>
            <Brands/>
            <div className='container mt-4 '>
                <div className='row'>
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        />)
                    }
                </div>
            </div>
            <UpcomingProducts/>
        </div>
    );
};

export default Home;