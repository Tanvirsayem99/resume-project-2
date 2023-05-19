import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTile from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    useTile('Register')
    const [faulty, setFaulty] = useState('')
    const {createUser, updateUser, logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const from = '/login'
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        createUser(email, password)
        .then(data =>{
            const loggedUser = data.user
            updateUser(loggedUser, name, image)
            logOut();
            navigate(from, {replace:true});
        })
        .catch(error =>{
            setFaulty(error.message.split(' ')[2].split('/')[1].split(')')[0])
        })
    }
    console.log(faulty)
    return (
        <form className='grid w-96 mx-auto gap-10 bg-orange-200 p-5 rounded-md' onSubmit={handleRegister}>
            <h1 className='text-center font-semibold text-2xl'>Register</h1>
            <input type="name" name='name' required className='bg-slate-200 border border-black'/>
            <input type="email" name='email' required className='bg-slate-200 border border-black'/>
            <input type="password" name='password' required className='bg-slate-200 border border-black'/>
            <input type="url" name='image' required className='bg-slate-200 border border-black'/>
            <div className='flex gap-2'>
            <p>Already have account?</p><Link to="/login">Login</Link>
            </div>
            {
                faulty? <p className='text-red-500'>{faulty} Please Try Again</p> : ''
            }
            <input type="submit" value="Register" className='cursor-pointer'/>
        </form>
    );
};

export default Register;