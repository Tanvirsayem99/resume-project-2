import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({data, loader}) => {
    const {category, description, email, name, picture, price, quantity,
    rating, sellerName} = data;
    if(loader){
        return (
            <div className="text-center my-10">
              <button className="btn btn-square loading "></button>
            </div>
          );
    }
    return (
        <tr>
            {
                sellerName? <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'>{sellerName}</td>: ''
            }
        <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'>{name}</td>
        <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'>{category}</td>
        <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'>{price}</td>
        <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'>{quantity}</td>
        <td className='bg-transparent text-sky-500 hover:bg-sky-500 hover:text-white border-2 border-sky-500'><Link to={`/details/${data._id}`} className='bg-transparent border border-purple-600 p-3 rounded-md hover:bg-lime-400 transition-all'>View details</Link></td>
            
            
        </tr>
    );
};

export default SingleToy;