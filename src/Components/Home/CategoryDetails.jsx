import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({item}) => {
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = item;
    return (
        <div className='bg-slate-400 border border-black rounded-md'>
            <div className='w-full p-5'>
                <img src={picture} alt="" />
            </div>
            <div className='p-5 text-center grid gap-3'>
                <p><b>name: </b> {name}</p>
                <p><b>price: </b>{price}</p>
                <p><b>rating: </b>{rating}</p>
                <Link to={`/details/${item._id}`} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>View details</Link>
        
            </div>
        </div>
    );
};

export default CategoryDetails;