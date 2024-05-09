import React from 'react';
import img1syltherine from "../Images/syltherine.webp";
import img2leviosa from "../Images/leviosa.webp";
import img3lolito from "../Images/lolito.webp";
import img4respira from "../Images/respira.webp";

const Card = () => {

    const cards = [
        {
            id: 1,
            title: 'Syltherine',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img1syltherine
        },
        {
            id: 2,
            title: 'Leviosa',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img2leviosa
        },
        {
            id: 3,
            title: 'Lolito',
            content: 'Luxury big sofa',
            price: 'Rp 2,700,000',
            image: img3lolito
        },
        {
            id: 4,
            title: 'Respira',
            content: 'Outdoor bar table and stool',
            price: 'Rp 500,000',
            "image": img4respira
        }, {
            id: 5,
            title: 'Syltherine',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img1syltherine
        }, {
            id: 6,
            title: 'Leviosa',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img2leviosa
        }, {
            id: 7,
            title: 'Lolito',
            content: 'Luxury big sofa',
            price: 'Rp 2,700,000',
            image: img3lolito
        }, {
            id: 8,
            title: 'Respira',
            content: 'Outdoor bar table and stool',
            price: 'Rp 500,000',
            "image": img4respira
        }, {
            id: 9,
            title: 'Syltherine',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img1syltherine
        }, {
            id: 10,
            title: 'Leviosa',
            content: 'Stylish cafe chair',
            price: 'Rp 2,500,000',
            image: img2leviosa
        }, {
            id: 11,
            title: 'Lolito',
            content: 'Luxury big sofa',
            price: 'Rp 2,700,000',
            image: img3lolito
        }, {
            id: 12,
            title: 'Respira',
            content: 'Outdoor bar table and stool',
            price: 'Rp 500,000',
            "image": img4respira
        },
    ]
    return (
        <div className='my-6 flex flex-wrap justify-center '>
            {
            cards.map(card => (
                <div key={
                        card.id
                    }
                    className=' mx-3 my-6 w-72 h-[446px] bg-gray-100 rounded-lg relative group hover:opacity-70'>

                    <img src={
                        card.image
                    }></img>
                    <div className='px-4'>
                        <h2 className='text-2xl font-bold'>
                            {
                            card.title
                        }</h2>
                        <p className='text-lg'>
                            {
                            card.content
                        }</p>
                        <p className='text-xl'>
                            {
                            card.price
                        }</p>
                    </div>
                    <div className=" w-72 h-[316px] top-0 absolute transition-all ease-in  opacity-0 duration-500 invisible flex flex-col justify-center items-center  group-hover:visible  group-hover:opacity-100">
                        <button type="button" className="my-5 py-2 px-10 bg-white border-orange-300 border-2 text-orange-300 text-lg font-bold hover:border-orange-400 hover:text-orange-400 ">Add to cart</button>
                        <div className='my-5 space-x-5 flex '>
                            <span className='flex cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white"/>
                                </svg>
                                <p className='-mt-1 text-white'>Share</p>
                            </span>
                            <span className='flex cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white"/>
                                </svg>
                                <p className='-mt-1 text-white'>Compare</p>
                            </span>
                            <span className='flex cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z" stroke="white" stroke-width="1.8"/>
                                </svg>
                                <p className='-mt-1 text-white'>Like</p>
                            </span>

                        </div>
                    </div>

                </div>
            ))
        } </div>
    )
};


export default Card;
