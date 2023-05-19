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
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
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
    <div>
      <form onSubmit={handleSubmit} className="grid gap-5 w-4/6 mx-auto">
        <input
          type="number"
          name="price"
          defaultValue={user.price}
          className="bg-slate-200 p-1 pl-2"
          placeholder="Enter Price"
          required
        />
        <input
          type="number"
          name="quantity"
          defaultValue={user.quantity}
          className="bg-slate-200 p-1 pl-2"
          placeholder="Enter Quantity"
          required
        />
        <input
          type="text"
          name="description"
          defaultValue={user.description}
          className="bg-slate-200 p-1 pl-2"
          placeholder="Write Description"
          required
        />
        {/* {
                msg? <p className='text-red-500'>{msg}</p> : ''
            } */}
        <input type="submit" className="cursor-pointer" value="Update Toys" />
      </form>
    </div>
  );
};

export default UpdateToy;
