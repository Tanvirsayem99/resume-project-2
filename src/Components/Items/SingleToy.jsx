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
                sellerName? <td>{sellerName}</td>: ''
            }
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><Link to={`/details/${data._id}`} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>View details</Link></td>
            
            
        </tr>
    );
};

export default SingleToy;