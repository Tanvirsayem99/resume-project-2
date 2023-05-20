import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTile from "../../hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const ToyInput = () => {
  useTile('Add a Toy')
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [msg, setMsg] = useState("");
  const handleOp = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMsg("");
    const form = event.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    if (category == "Select a category") {
      return setMsg("please select At least one category");
    }

    const items = {
      picture,
      name,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      description,
    };
    fetch("https://assignment-11-rho.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((data) => {
        console.log(data),
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your toy data has been saved",
            showConfirmButton: false,
            timer: 1500,
          }),
          form.reset();
      })
      .then((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 w-4/6 mx-auto">
      <input
        type="url"
        name="picture"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Enter Photo URL"
        required
      />
      <input
        type="name"
        name="name"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Enter Toy name"
        required
      />
      {user?.displayName ? (
        <input
          type="text"
          name="sellerName"
          className="bg-slate-200 p-1 pl-2"
          defaultValue={user?.displayName}
          readOnly
        />
      ) : (
        ""
      )}
      {user?.email ? (
        <input
          type="text"
          name="email"
          className="bg-slate-200 p-1 pl-2"
          defaultValue={user?.email}
          readOnly
        />
      ) : (
        ""
      )}
      <select
        onClick={handleOp}
        className="select select-bordered w-full max-w-xs"
      >
        <option defaultValue=" ">Select a category</option>
        <option value="car">normal car</option>
        <option value="truck">truck</option>
        <option value="policeCar">mini police car</option>
      </select>
      <input
        type="number"
        name="price"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Enter Price"
        required
      />
      <input
        type="number"
        name="rating"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Enter Rating"
        required
      />
      <input
        type="number"
        name="quantity"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Enter Quantity"
        required
      />
      <input
        type="text"
        name="description"
        className="bg-slate-200 p-1 pl-2"
        placeholder="Write Description"
        required
      />
      {msg ? <p className="text-red-500">{msg}</p> : ""}
      <input type="submit" className="cursor-pointer" />
    </form>
  );
};

export default ToyInput;
