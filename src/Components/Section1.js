import React from "react";
import logo from "../Images/Meubel House_Logos-05.png";
import img1 from "../Images/section1_img.webp";

function Section1(props) {

    return (
        <div className="relative group">
            <img src={img1}
                alt="image"
                className="h-96 w-full object-cover  "/>
            <div className="w-full pt-32 h-96 top-0 -left-full absolute bg-opacity-50 ease-in duration-500 bg-white group-hover:left-0">
                <div className="flex justify-center items-center">
                    <img className="  px-1 cursor-pointer"
                        src={logo}/>
                </div>
                <h1 className=" text-center  text-5xl font-bold">{props.name}</h1>
                <p className=" text-center  text-lg font-medium">{props.description}</p>
            </div>
        </div>
    )
};


export default Section1;
