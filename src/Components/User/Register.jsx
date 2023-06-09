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
        <div className="bg-[url('https://r4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-08869d3810a06c28a09cf1be487204ea.jpg')] py-20 bg-no-repeat">
            <form className='grid w-96 mx-auto gap-10  bg-transparent border border-gray-200 p-5 rounded-md' onSubmit={handleRegister}>
            <h1 className='text-center font-semibold text-2xl text-white'>Register</h1>
            <div className='grid'>
            <span className='text-white ml-2'>Name</span>
            <input type="name" name='name' required className='border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            <div className='grid'>
            <span className='text-white ml-2'>Email</span>
            <input type="email" name='email' required className='border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            <div className='grid'>
            <span className='text-white ml-2'>Password</span>
            <input type="password" name='password' required className='border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            <div className='grid'>
            <span className='text-white ml-2'>Image</span>
            <input type="url" name='image' required className='border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            
            
            
            
            <div className='flex gap-2'>
            <p className='text-white'>Already have account?</p><Link to="/login" className='text-white'>Login</Link>
            </div>
            {
                faulty? <p className='text-red-500'>{faulty} Please Try Again</p> : ''
            }
            <input type="submit" value="Register" className='cursor-pointer btn btn-outline btn-accent'/>
        </form>
        </div>
    );
};

export default Register;