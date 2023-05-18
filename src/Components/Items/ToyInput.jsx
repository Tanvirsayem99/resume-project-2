import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ToyInput = () => {
    const {user} = useContext(AuthContext);
    const [category, setCategory] = useState('')
    const handleOp = event =>{
        setCategory(event.target.value) 
    }
    
    const handleSubmit = event =>{
        event.preventDefault();
       
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const items = {
            picture,
            name, sellerName, email, category, price, rating, quantity, description,
        }
        fetch('http://localhost:5000/addToys',{
            method : 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify(items)
        }
        )
    }
    
       
    return (
        <form onSubmit={handleSubmit} className="grid gap-5 w-4/6 mx-auto">
            <input type="url" name='picture' className='bg-slate-200 p-1 pl-2' placeholder='Enter Photo URL'/>
            <input type="name" name='name' className='bg-slate-200 p-1 pl-2' placeholder='Enter Toy name'/>
            {
                user?.displayName? <input type="text" name='sellerName' className='bg-slate-200 p-1 pl-2'defaultValue={user?.displayName} readOnly  /> : ''
            }
            {
                user?.email? <input type="text" name='email' className='bg-slate-200 p-1 pl-2'defaultValue={user?.email} readOnly  /> : ''
            }
            <select onClick={handleOp}>
                <option value="cars">cars</option>
                <option value="helicopter">helicopter</option>
                <option value="helicopter">helicopter</option>
            </select>
            <input type="text" name='price' className='bg-slate-200 p-1 pl-2' placeholder='Enter Price'/>
            <input type="text" name='rating' className='bg-slate-200 p-1 pl-2' placeholder='Enter Rating'/>
            <input type="text" name='quantity' className='bg-slate-200 p-1 pl-2' placeholder='Enter Quantity'/>
            <input type="text" name='description' className='bg-slate-200 p-1 pl-2' placeholder='Write Description'/>
            <input type="submit" />
    </form>
    );
};

export default ToyInput;