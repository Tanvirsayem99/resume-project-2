import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTile from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';

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
        <form className='grid w-96 mx-auto gap-10 bg-orange-200 p-5 rounded-md' onSubmit={handleLogin}>
            <h1 className='text-center font-semibold text-2xl'>Login</h1>
            <input type="email" name='email' required className='bg-slate-200 border border-black'/>
            <input type="password" name='password' required className='bg-slate-200 border border-black'/>
            <div className='flex gap-2'>
            <p>don't have account?</p><Link to="/register">Register</Link>
            </div>
            {
                faulty? <p className='text-red-500'>{faulty} Please Try Again</p> : ''
            }
            <input type="submit" value="Login" className='cursor-pointer'/>
            <div onClick={handleGoogleLogin} className="cursor-pointer">Google login</div>
        </form>
    );
};

export default Login;