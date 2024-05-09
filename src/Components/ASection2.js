import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1bed from '../Images/bed.webp';
import img2chair from '../Images/chairs.webp';

function Sliders() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="lg:ml-auto lg:mr-auto lg:bg-yellow-600 lg:px-56">
            <Slider {...settings} className=" h-4/5 bg-orange-100 lg:bg-orange-50 py-40">
                <div>
                    <img src={img1bed}
                        className="m-auto lg:w-2/5 w-2/5 h-auto "/></div>
                <div>
                    <img src={img2chair}
                        className="m-auto lg:w-2/5  w-2/5 h-auto"/>
                </div>
            </Slider>
        </div>


    );
}

export default Sliders;