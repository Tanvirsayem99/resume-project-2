import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {loginUSer} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUSer(email, password)
        .then(data =>{
            form.reset()
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
            <input type="submit" value="Login" className='cursor-pointer'/>
        </form>
    );
};

export default Login;