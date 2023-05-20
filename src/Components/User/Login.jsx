import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTile from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import bgImg from '../../../public/bg-img.jpg'

const Login = () => {
    useTile('Login')
    const [faulty, setFaulty] = useState('')
    const {loginUSer, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
  

    const handleLogin = event =>{
        event.preventDefault();
        setFaulty('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUSer(email, password)
        .then(data =>{
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(error =>{
            setFaulty(error.message.split(' ')[2].split('/')[1].split(')')[0])
        })
    }
    const handleGoogleLogin =() =>{
        setFaulty('')
        googleLogin()
        .then(data =>{
            
            navigate(from, {replace:true})
        })
        .catch(error =>{
            setFaulty(error.message.split(' ')[2].split('/')[1].split(')')[0])
        })
    }
    return (
        <div className="bg-[url('https://r4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-08869d3810a06c28a09cf1be487204ea.jpg')] py-20 bg-no-repeat">
            <form className='grid w-96 mx-auto gap-10 bg-transparent border border-gray-200 p-5 rounded-md' onSubmit={handleLogin}>
            <h1 className='text-center font-semibold text-2xl text-white'>Login</h1>
            <div className='grid'>
            <span className='text-white ml-2'>Email</span>
            <input type="email" name='email' required className=' border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            <div className='grid'>
                <span className='text-white ml-2'>Password</span>
            <input type="password" name='password' required className=' border-b-2 bg-transparent focus:bg-white duration-1000 transition outline-none py-2'/>
            </div>
            <div className='flex gap-2'>
            <p className='text-white'>don't have account?</p><Link className='text-white' to="/register">Register</Link>
            </div>
            {
                faulty? <p className='text-red-500'>{faulty} Please Try Again</p> : ''
            }
            <input type="submit" value="Login" className='cursor-pointer btn btn-outline btn-accent'/>
            <div onClick={handleGoogleLogin} className="cursor-pointer btn btn-accent">Google login</div>
            
        </form>
        </div>
    );
};

export default Login;