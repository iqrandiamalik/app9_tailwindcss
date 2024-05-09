import React from "react";
import img2 from "../Images/Image-living-room.webp";
import img3 from "../Images/Mask Group.webp";
import img1 from "../Images/image-106.webp";

function HSection2() {
    const pics = [
        {
            id: 1,
            title: "Dining",
            image: img1
        }, {
            id: 2,
            title: "Living",
            image: img2
        }, {
            id: 3,
            title: "Bedroom",
            image: img3
        }
    ]

    return (
        <div className="py-10 text-center font-[poppins]">
            <h2 className="font-bold text-3xl">Browse The Range</h2>
            <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-center py-5 flex-wrap">
                {
                pics.map(pic => (
                    <div key={
                        pic.id
                    }>
                        <img src={
                                pic.image
                            }
                            className=" px-5 border rounded-3xl"></img>
                        <h2 className="py-2 font-bold text-xl">
                            {
                            pic.title
                        }</h2>
                    </div>
                ))
            } </div>
        </div>
    )
}

export default HSection2;
