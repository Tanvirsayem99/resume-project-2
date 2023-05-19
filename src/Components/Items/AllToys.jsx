import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTile from '../../hooks/useTitle';
import SingleToy from './SingleToy';

const AllToys = () => {
  useTile('All Toy')
    const [datas, setDatas] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
        fetch('https://assignment-11-server-one-blush.vercel.app/allToys')
        .then(res => res.json())
        .then(items => {
            setDatas(items.slice(0,20)),
            setLoader(false)
        })
        
    },[])
    
    

    const handleSearch = event =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        fetch(`https://assignment-11-server-one-blush.vercel.app/allToys/${name}`)
        .then(res => res.json())
        .then(data => setDatas(data))
        form.reset()
        
    }
    if(loader){
      return (
          <div className="text-center my-10">
            <button className="btn btn-square loading "></button>
          </div>
        );
  }
    return (
        <div className='w-11/12 mx-auto'>
            <form className='text-center my-10' onSubmit={() =>handleSearch (event)}>
                <input type="text" name="name" className='bg-slate-200 pl-2 py-2 rounded-lg w-96' placeholder='Search item' />
                <input type="submit"  />
            </form>
            <div className="overflow-x-auto">
  <table className="table w-full">
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
                datas.map(e => <SingleToy loader={loader} key={e._id} data={e} ></SingleToy>)
            }
      
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllToys;