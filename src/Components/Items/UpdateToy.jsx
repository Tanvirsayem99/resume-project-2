import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTile from "../../hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateToy = () => {
  useTile('Update Toy')
  const user = useLoaderData();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const items = { price, quantity, description };
    fetch(`https://assignment-11-rho.vercel.app/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Toy data has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="bg-black py-10">
      <form onSubmit={handleSubmit} className="grid gap-5 w-4/6 mx-auto">
      <h1 className="text-center text-2xl font-bold text-sky-500 font-serif">UPDATE A TOY</h1>
      <div className="boss w-full relative">
      <span className="text-sky-500">Price</span>
      <input
        type="number"
        name="price"
        defaultValue={user?.price}
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        required
        placeholder="|"
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Quantity</span>
      <input
        type="number"
        name="quantity"
        defaultValue={user?.quantity}
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        required
        placeholder="|"
      />
      </div>
        <div className="boss w-full relative">
      <span className="text-sky-500">Description</span>
      <textarea name="description"  cols="30" rows="10" defaultValue={user?.description} className="field  w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"></textarea>
      </div>
        {/* {
                msg? <p className='text-red-500'>{msg}</p> : ''
            } */}
         <div className="text-center">
      <input type="submit" value="Update" className="cursor-pointer py-1 px-5 text-white hover:bg-sky-500 border-2  border-sky-500" />
      </div>
      </form>
    </div>
  );
};

export default UpdateToy;
