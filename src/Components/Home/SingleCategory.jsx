import React from 'react';
import CategoryDetails from './CategoryDetails';

const SingleCategory = ({items}) => {
    
    return (
        <div className='grid gap-5 md:grid-cols-3 w-11/12 mx-auto'>
            {
                items.map(item => <CategoryDetails key={item._id} item={item}></CategoryDetails>)
            }
        </div>
    );
};

export default SingleCategory;