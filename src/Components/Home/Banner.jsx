import React from 'react';
import banner from '../../../public/banner.png'
import colors from '../../../public/colors.png'

const Banner = () => {
    return (
        <div className='h-[80vh] flex flex-col mx-auto w-11/12 md:flex-row  relative'>
            <div className='text-center md:text-left'>
                <p>Available In This Site</p>
                <p>You Can Buy Many Cars Toy, </p>
            </div>
            <div>
                <img src={banner} alt="" className='car md:w-6/12 md:absolute md:bottom-0 md:right-0'/>
                <img src={colors} alt="" className='color absolute top-0 md:right-12 -z-10 md:w-3/6'/>
            </div>
        </div>
    );
};

export default Banner;