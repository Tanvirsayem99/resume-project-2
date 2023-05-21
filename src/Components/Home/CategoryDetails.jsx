import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({item}) => {
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = item;
    return (
        <div className='bg-transparent border border-sky-500 rounded-md  my-5 p-1 shadow-2xl shadow-black'>
            <div className=''>
                <img src={picture} alt="" className='w-full h-56' />
            </div>
            <div className='p-5 text-center grid gap-3'>
                <p><b>name: </b> {name}</p>
                <p><b>price: </b>{price}</p>
                <p><b>rating: </b>{rating}</p>
                <div className='my-2'>
                <Link to={`/details/${item._id}`} className='bg-transparent border-2 border-sky-500 py-2 px-4 rounded-md hover:bg-lime-400 transition-all'>View details</Link>
                </div>
        
            </div>
        </div>
    );
};

export default CategoryDetails;