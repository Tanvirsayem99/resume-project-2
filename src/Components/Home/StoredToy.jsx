import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const StoredToy = () => {
    return (
        <div>
            
            <div data-aos="fade-up-right" className='bg-slate-400 w-2/5 p-5'>
                <p className='text-center my-3'>Truck Toy</p>
                <img src="https://img.freepik.com/free-vector/old-red-truck-white-background_1308-105948.jpg?size=626&ext=jpg&ga=GA1.2.1501440922.1673154209&semt=ais" alt="" />
            </div>
            <div data-aos="fade-down" className='bg-slate-400 w-2/5 p-5 ml-auto'>
                <p>Cars Toy</p>
                <img src="https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?size=626&ext=jpg&ga=GA1.1.1501440922.1673154209&semt=ais" alt="" />
            </div>
            <div data-aos="fade-down" className='bg-slate-400 w-2/5 p-5'>
                <p>Cars Toy</p>
                <img src="https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?size=626&ext=jpg&ga=GA1.1.1501440922.1673154209&semt=ais" alt="" />
            </div>
        </div>
    );
};

export default StoredToy;