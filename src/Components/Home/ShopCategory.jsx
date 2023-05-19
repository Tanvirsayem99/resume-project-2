import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';
const ShopCategory = () => {
      const [items, setItems] = useState([])
      const[loader, setLoader] = useState(true)
     useEffect(()=>{
      fetch(`http://localhost:5000/home/car`)
      .then(res => res.json())
      .then(data => {setItems(data), setLoader(false)})
     },[]) 
    
      const handleCategory = event =>{
        fetch(`http://localhost:5000/home/${event}`)
      .then(res => res.json())
      .then(data => {setItems(data), setLoader(false)})
      }
    return (
        <Tabs>
    <TabList>
      <Tab><p onClick={()=>handleCategory('car')}>normal car</p></Tab>
      <Tab><p onClick={()=>handleCategory('truck')}>truck</p></Tab>
      <Tab><p onClick={()=>handleCategory('policeCar')}>policeCar</p></Tab>
    </TabList>

    <TabPanel>
      <SingleCategory items ={items} loader={loader}></SingleCategory>
    </TabPanel>
    <TabPanel>
    <SingleCategory items ={items}></SingleCategory>
    </TabPanel>
    <TabPanel>
    <SingleCategory items ={items}></SingleCategory>
    </TabPanel>
  </Tabs>
    );
};

export default ShopCategory;