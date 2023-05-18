import React from 'react';

const SingleToy = ({data}) => {
    console.log(data)
    const {category, description, email, name, picture, price, quantity,
    rating, sellerName} = data;
    return (
        <div>
            this is SingleToy
        </div>
    );
};

export default SingleToy;