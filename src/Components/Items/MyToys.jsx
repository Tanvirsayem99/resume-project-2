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
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  const handlesortHigh = () => {
    
    const result = items.sort((a, b)=> ( b.price - a.price ))
    
  setValue(result)
  setValue([])
}
  const handlesortLow = () => {
    setValue('')
    const result = items.sort((a, b)=> (a.price - b.price ))
    
  setValue(result)
  setValue([])
}
  return (
    <div className="w-11/12 mx-auto">
      <div className="justify-end my-10 flex gap-5">
        <button onClick={handlesortHigh}>price High To Low</button>
        <button onClick={handlesortLow}>Sort By Price</button>
      </div>
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
          <tbody className="w-11/12 mx-auto">
            {value.length !== 0? value.map((e) => (
              <MySingleToys key={e._id} data={e}></MySingleToys>
            )) :items.map((e) => (
              <MySingleToys key={e._id} data={e}></MySingleToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
