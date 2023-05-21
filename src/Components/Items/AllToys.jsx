import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTile from '../../hooks/useTitle';
import SingleToy from './SingleToy';
import icon from '../../../public/search.png'
const AllToys = () => {
  useTile('All Toy')
    const [datas, setDatas] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
        fetch('https://assignment-11-rho.vercel.app/allToys')
        .then(res => res.json())
        .then(items => {
            setDatas(items),
            setLoader(false)
        })
        
    },[])
    
    

    const handleSearch = event =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        fetch(`https://assignment-11-rho.vercel.app/allToys/${name}`)
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
        <div className='bg-black'>
          <div className='w-11/12 mx-auto py-10'>
            <form className='text-center my-10' onSubmit={() =>handleSearch (event)}>
                <div className='relative w-96 mx-auto'>
                <input type="text" name="name" className='bg-transparent border-2 pl-4 p-3 text-white w-full rounded-3xl border-sky-500 outline-none pl-2' placeholder='Search item' />
                <button className='text-white'><img src={icon} alt="" className='w-8 absolute top-3 right-2 ' /></button>
                </div>
                
            </form>
            <div className="overflow-x-auto bg-transparent">
  <table className="table w-full bg-transparent">
    <thead>
      <tr className='bg-transparent'>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Seller</th>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Toy Name</th>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Category</th>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Price</th>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Quantity</th>
        <th className='bg-transparent text-white hover:bg-sky-500 hover:text-white border-2 border-white'>Action</th>
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
        </div>
    );
};

export default AllToys;