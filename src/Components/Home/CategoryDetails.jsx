import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({item}) => {
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = item;
    return (
        <div className='bg-transparent border border-sky-500 rounded-md  my-5 p-1'>
            <div className=''>
                <img src={picture} alt="" className='w-full h-56' />
            </div>
            <div className='p-5 text-center grid gap-3'>
                <p className='text-white'><b>name: </b> {name}</p>
                <p className='text-white'><b>price: </b>{price}</p>
                <p className='text-white'><b>rating: </b>{rating}</p>
                <Link to={`/details/${item._id}`} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>View details</Link>
        
            </div>
        </div>
    );
};

export default CategoryDetails;