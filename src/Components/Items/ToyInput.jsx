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
   <div className="bg-black">
     <form onSubmit={handleSubmit} className="grid gap-5 md:w-2/4 w-11/12 mx-auto py-10">
      <h1 className="text-center text-2xl font-bold text-sky-500 font-serif">SUBMIT A TOY</h1>
      <div className="boss w-full relative">
      <span className="text-sky-500">Photo Url</span>
      <input
        type="url"
        name="picture"
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        required
        placeholder="|"
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Toy Name</span>
      <input
        type="name"
        name="name"
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        placeholder="|"
        required
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Seller Name</span>
      {user?.displayName ? (
        <input
          type="text"
          name="sellerName"
          className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
          defaultValue={user?.displayName}
          readOnly
        />
      ) : (
        ""
      )}
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Email</span>
      {user?.email ? (
        <input
          type="text"
          name="email"
          className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
          defaultValue={user?.email}
          readOnly
        />
      ) : (
        ""
      )}
      </div>
      
      
      
      <div className="grid w-full relative">
      <span className="text-sky-500">Email</span>
      <select
        onClick={handleOp}
        className="select select-bordered w-full max-w-xs bg-transparent text-white "
      >
        <option defaultValue=" " className="text-black hidden" >Select a category</option>
        <option value="car" className="text-black">normal car</option>
        <option value="truck" className="text-black">truck</option>
        <option value="policeCar" className="text-black">mini police car</option>
      </select>
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Price</span>
      <input
        type="number"
        name="price"
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        placeholder="|"
        required
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Rating</span>
      <input
        type="number"
        name="rating"
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        placeholder="|"
        required
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Quantity</span>
      <input
        type="number"
        name="quantity"
        className="field w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"
        placeholder="|"
        required
      />
      </div>
      <div className="boss w-full relative">
      <span className="text-sky-500">Description</span>
      <textarea name="description"  cols="30" rows="10" placeholder="|" className="field  w-full bg-transparent text-white p-1 pl-2 outline-none border-b-4 border-sky-500"></textarea>
      </div>
      
      
      {msg ? <p className="text-red-500">{msg}</p> : ""}
      <div className="text-center">
      <input type="submit" className="cursor-pointer py-1 px-5 text-white hover:bg-sky-500 border-2  border-sky-500" />
      </div>
    </form>
   </div>
  );
};

export default ToyInput;
