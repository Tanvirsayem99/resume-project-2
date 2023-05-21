import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import useTile from "../../hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleToys from "./MySingleToys";

const MyToys = () => {
  useTile('My Toy')
  const { user, loading } = useContext(AuthContext);
  const[value, setValue] = useState([])
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-rho.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  const handlesortHigh = () => {
    const result = items.sort((a, b)=> ( b.price - a.price ))
    
  setValue(result)
  setValue([])
}
  const handlesortLow = () => {
    const result = items.sort((a, b)=> (a.price - b.price ))
  setValue(result)
  setValue([])
}
if(items.length == 0){
  return <p>
    No Product Available
  </p>
}
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-semibold text-center my-5 text-3xl">My Toy</h1>
      <div className="justify-end my-10 flex gap-5">
        <button onClick={handlesortHigh} className="btn btn-outline">price High To Low</button>
        <button onClick={handlesortLow} className="btn btn-outline">Price low to high</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="w-11/12 mx-auto">
            
            {value.length !== 0? value.map((e) => (
              <MySingleToys key={e._id} data={e} items = {items} value={value}setItems={setItems} setValue={setValue}></MySingleToys>
            )) :items.map((e) => (
              <MySingleToys key={e._id} data={e} setItems={setItems} items = {items} value={value} setValue={setValue}></MySingleToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
