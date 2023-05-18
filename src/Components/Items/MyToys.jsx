import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const[items, setItems] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[user])
    console.log(items)
    return (
        <div>
            this is my toys;
        </div>
    );
};

export default MyToys;