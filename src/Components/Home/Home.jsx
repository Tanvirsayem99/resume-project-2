import React from 'react';
import useTile from '../../hooks/useTitle';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';

const Home = () => {
    useTile('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;