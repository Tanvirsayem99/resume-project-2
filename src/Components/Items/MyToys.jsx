import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleToys from "./MySingleToys";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  
  return (
    <div className="w-11/12 mx-auto">
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
            {items.map((e) => (
              <MySingleToys key={e._id} data={e}></MySingleToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
