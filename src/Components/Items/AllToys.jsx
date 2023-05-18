import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleToy from './SingleToy';

const AllToys = () => {
    const [datas, setDatas] = useState([])
    const [count, setCount] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(items => {
            setDatas(items.slice(0,20))
        })
        
    },[])
    
    

    const handleSearch = event =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        fetch(`http://localhost:5000/allToys/${name}`)
        .then(res => res.json())
        .then(data => setDatas(data))
        form.reset()
        
    }
    return (
        <div className='w-11/12 mx-auto'>
            <form className='text-center my-10' onSubmit={() =>handleSearch (event)}>
                <input type="text" name="name" className='bg-slate-200 pl-2 py-2 rounded-lg w-96' placeholder='Search item' />
                <input type="submit"  />
            </form>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='w-11/12 mx-auto'>
      
      {
                datas.map(e => <SingleToy  key={e._id} data={e} ></SingleToy>)
            }
      
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllToys;