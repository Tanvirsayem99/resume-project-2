import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;