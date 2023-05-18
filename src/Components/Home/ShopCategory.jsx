import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopCategory = () => {
  const [items, setItems] = useState([])
  const handleCar = category =>{
    useEffect(()=>{
      fetch(`http://localhost:5000/allToys/${category}`)
      .then(res => res.json())
      .then(data => setItems(data))
  },[])
  }
    return (
        <Tabs>
    <TabList>
      <Tab onClick={()=> handleCar("car")}>normal car</Tab>
      <Tab onClick={()=> handleCar("truck")}>truck</Tab>
      <Tab onClick={()=> handleCar("poilice")}>mini police car</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
    );
};

export default ShopCategory;