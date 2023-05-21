import React from 'react';
import CategoryDetails from './CategoryDetails';

const SingleCategory = ({items, loaders}) => {
    if(loaders){
        return (
            <div className="text-center my-10">
              <button className="btn btn-square loading "></button>
            </div>
          );
    }
    if(items.length == 0){
        return <p className='text-center text-4xl my-44 text-white'>
            No product available
        </p>
    }
    return (
        <div className='grid gap-5 md:grid-cols-3 w-11/12 mx-auto bg-transparent'>
            {
                items.map(item => <CategoryDetails key={item._id} item={item}></CategoryDetails>)
            }
        </div>
    );
};

export default SingleCategory;