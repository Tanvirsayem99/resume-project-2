import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleToy from './SingleToy';

const AllToys = () => {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(items => setDatas(items))
    },[])
    return (
        <div>
            {
                datas.map(e => <SingleToy key={e._id} data={e} ></SingleToy>)
            }
        </div>
    );
};

export default AllToys;