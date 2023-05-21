import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-pink-500 text-center font-semibold text-2xl'>Our Gallery</h1>
            <div className='parent grid md:grid-cols-3 gap-5 gallery-parent mx-auto'>
            
            
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div>
            <img src="https://img.freepik.com/free-psd/cute-car-isolated_23-2150427698.jpg?size=626&ext=jpg&ga=GA1.2.1501440922.1673154209&semt=ais" alt="" className='h-full w-full' />
            </div>
            </div>
            
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div>
            <img src="https://img.freepik.com/free-photo/closeup-old-mini-police-car-toy_181624-45993.jpg?size=626&ext=jpg&ga=GA1.2.1501440922.1673154209&semt=ais" alt="" className='h-full w-full'/>
            </div>
            </div>
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div>
            <img src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?size=626&ext=jpg&ga=GA1.1.1501440922.1673154209&semt=ais" alt="" className='h-full w-full'/>
            </div>
            </div>
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div>
            <img src="https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?size=626&ext=jpg&ga=GA1.2.1501440922.1673154209&semt=ais" alt="" className='h-full w-full'/>
            </div>
            </div>
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div>
            <img src="https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-81053.jpg?size=626&ext=jpg&ga=GA1.1.1501440922.1673154209&semt=ais" alt="" className='h-full w-full'/>
            </div>
            </div>
            <div className='my-5 box mx-auto w-11/12 h-96'>
            <span className='borderLine'></span>
            <div> <img src="https://img.freepik.com/free-photo/fun-trex-3d-illustration_183364-81258.jpg?size=626&ext=jpg&ga=GA1.2.1501440922.1673154209&semt=ais" alt="" className='h-full w-full'/></div>
            </div>
            
        </div>
        </div>
    );
};

export default Gallery;