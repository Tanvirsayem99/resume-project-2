import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';
const ShopCategory = () => {
      const [items, setItems] = useState([])
      const[loader, setLoader] = useState(true)
      const[loaders, setLoaders] = useState(true)
     useEffect(()=>{
      fetch(`https://assignment-11-rho.vercel.app/home/car`)
      .then(res => res.json())
      .then(data => {setItems(data), setLoaders(false)})
     },[]) 
    
      const handleCategory = event =>{
        fetch(`https://assignment-11-rho.vercel.app/home/${event}`)
      .then(res => res.json())
      .then(data => {setItems(data), setLoader(false)})
      }
    return (
        <Tabs className="w-11/12 mx-auto">
    
    <TabList>
      <Tab><p onClick={()=>handleCategory('car')}>sports car</p></Tab>
      <Tab><p onClick={()=>handleCategory('truck')}>truck</p></Tab>
      <Tab><p onClick={()=>handleCategory('policeCar')}>policeCar</p></Tab>
    </TabList>
  

    <TabPanel>
      <SingleCategory items ={items} loaders={loaders}></SingleCategory>
    </TabPanel>
    <TabPanel>
    <SingleCategory items ={items} loaders={loaders}></SingleCategory>
    </TabPanel>
    <TabPanel>
    <SingleCategory items ={items} loaders={loaders}></SingleCategory>
    </TabPanel>
  </Tabs>
    );
};

export default ShopCategory;