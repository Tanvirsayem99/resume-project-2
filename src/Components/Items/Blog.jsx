import React from 'react';
import useTile from '../../hooks/useTitle';

const Blog = () => {
    useTile('Blog')
    return (
        <div>
             <div>
                <h1 className='text-center md:my-5 text-4xl font-serif font-semibold'>Question and Answer</h1>

                <div className='bg-white py-20 grid gap-5 my-10'>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>1.  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>2. Compare SQL and NoSQL databases?</h1>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>3. What is express js? What is Nest JS?</h1>
                    <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection</p>
                </div>
                <div className='w-11/12 mx-auto border border-red-400 p-10'>
                    <h1 className='text-pink-900 text-2xl'>4.What is MongoDB aggregate and how does it work? </h1>
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;