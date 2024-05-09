import React from 'react';
import img1rec36 from "../Images/Rectangle-36.webp";
import img2rec38 from "../Images/Rectangle-38.webp";
import img3rec37 from "../Images/Rectangle-37.webp";
import img4rec39 from "../Images/Rectangle-39.webp";
import img5rec40 from "../Images/Rectangle-40.webp";
import img6rec43 from "../Images/Rectangle-43.webp";
import img7rec45 from "../Images/Rectangle-45.webp";
import img8rec41 from "../Images/Rectangle-41.webp";
import img9rec44 from "../Images/Rectangle-44.webp";

function HSection4() {
    return (
        <div className='wide:flex'>
            <div className='flex flex-wrap py-10 justify-center'>
                <img src={img1rec36}
                    className='px-2 py-2'></img>
                <img src={img2rec38}
                    className='px-2 py-2'></img>
                <img src={img3rec37}
                    className='px-2 py-2'></img>
                <img src={img4rec39}
                    className='px-2 py-2'></img>
            </div>
            <div className='flex justify-center items-center'>
                <img src={img5rec40}></img>
            </div>
            <div className='flex flex-wrap py-10 justify-center'>
                <img src={img6rec43}
                    className='px-2 py-2'></img>
                <img src={img7rec45}
                    className='px-2 py-2'></img>
                <img src={img8rec41}
                    className='px-2 py-2'></img>
                <img src={img9rec44}
                    className='px-2 py-2'></img>
            </div>
        </div>
    )
}

export default HSection4;
