import React from 'react';
import useTile from '../../hooks/useTitle';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopCategory from './ShopCategory';
import StoredToy from './StoredToy';
import TopSelling from './TopSelling';

const Home = () => {
    useTile('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <StoredToy></StoredToy>
            <TopSelling></TopSelling>
        </div>
    );
};

export default Home;