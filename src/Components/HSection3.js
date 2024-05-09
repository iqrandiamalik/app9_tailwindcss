import React from 'react';
import img1bed from '../Images/bed.webp';


function HSection3() {
    return (
        <div className='flex flex-col justify-center lg:justify-evenly mx-16 sm:flex-row sm:flex-wrap '>
            <div className='text-center lg:flex lg:flex-col lg:justify-center lg:items-center'>
                <h2 className='text-4xl font-bold font-[poppins] py-2'>50+ Beautiful rooms 
                                                                                                    inspiration</h2>
                <p className='py-2'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button type="button" className=' bg-yellow-600 border-2 text-white py-2 px-8 hover:cursor-pointer hover:border-2 hover: border-yellow-600 hover:bg-white hover:text-yellow-600'>Explore Now</button>
            </div>
            <img src={img1bed}
                className='py-10 px-5'></img>
        </div>
    )
}

export default HSection3;
