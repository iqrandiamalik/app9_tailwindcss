import React from 'react';

function Footer() {
    return (
        <div className='px-16 py-10 bg-orange-50 '>
            <div className='flex flex-wrap justify-between xl:justify-normal'>
                <div className='my-4 '>
                    <h1 className='font-sans font-bold text-2xl '>Funiro</h1>
                    <p className='font-sans text-lg px-4 '>400 University Drive Suite 200 Coral Gables,
                                                                                                                                        FL 33134 USA</p>
                </div>
                <div className='my-4 xl:px-32  '>
                    <h2 className='font-sans font-bold text-xl '>Links</h2>
                    <ul className='  flex flex-wrap lg:flex-col '>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Home</li>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Shop</li>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>About</li>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Contact</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <h2 className='font-sans font-bold text-xl '>Help</h2>
                    <ul className='flex lg:flex-col '>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Payment Options</li>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Returns</li>
                        <li className='px-4 cursor-pointer text-lg pt-5 hover:underline hover:decoration-2'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className='my-4 '>
                <h2 className='font-sans font-bold text-xl '>Newsletter</h2>
                <input type="email" placeholder='Enter Your Email Address' className='placeholder:text-lg border-black w-52 h-12 pt-5 mx-4 bg-orange-50 border-b-2'></input>
                <button className=" mx-4 font-bold px-2 border-b-2 border-black text-black text-lg" type="submit">SUBSCRIBE</button>
            </div>
            <hr className='mt-10'></hr>
            <div>
                <p className='my-10 text-xl'>All Rights Reserved 2023</p>
            </div>
        </div>
    )
}

export default Footer;
