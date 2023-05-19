import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useTile from '../../hooks/useTitle';

const Details = () => {
    useTile('Toy Details')
    const {id} = useParams();
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = user;
    return (
        <div className='bg-slate-200 p-5 w-5/6 mx-auto grid justify-center gap-5'>
            <img src={picture} alt="" />
            <div className='text-center grid gap-2'>
            <p><b>Toy name: </b> {name}</p>
            <p><b>sellerName: </b> {sellerName}</p>
            <p><b>seller email: </b> {email}</p>
            <p><b>Price: </b> {price}</p>
            <p><b>rating: </b> {rating}</p>
            <p><b>quantity: </b> {quantity}</p>
            <p><b>description: </b> {description}</p>
            </div>
        </div>
    );
};

export default Details;