import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Images/download1.jpg";

function Testimonials() {
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
        <div className="h-[600px] bg-orange-50 py-20 ">
            <Slider {...settings}>
                <div className=" bg-orange-200 rounded-full  px-10 py-10">
                    <img src={img1}
                        className="rounded-full h-40 mx-auto flex justify-center items-center "/>
                    <h3 className="font-bold text-xl font-sans text-center">Shirley Fultz</h3>
                    <h4 className="font-sans text-lg text-center">Designer</h4>
                    <p className="font-sans text-lg text-center">
                        It's freeing to be able to catch up on customized news and not be
                                                                                                                                  distracted by a social media element on the same site
                    </p>
                </div>
                <div className=" bg-orange-200  rounded-full  px-10 py-10">
                    <img src={img1}
                        className="rounded-full  h-40 mx-auto flex justify-center items-center "/>
                    <h3 className="font-bold text-xl font-sans text-center">Daniel Keystone</h3>
                    <h4 className="font-sans text-lg text-center">Designer</h4>
                    <p className="font-sans text-lg text-center">
                        The simple and intuitive design makes it easy for me use. I highly
                                                                                                                                  recommend Furniro to my peers.
                    </p>
                </div>
                <div className=" bg-orange-200 rounded-full  px-10 py-10">
                    <img src={img1}
                        className="rounded-full  h-40 mx-auto flex justify-center items-center"/>
                    <h3 className="font-bold text-xl font-sans text-center">Theo Sorel</h3>
                    <h4 className="font-sans text-lg text-center">Designer</h4>
                    <p className="font-sans text-lg text-center">
                        I enjoy catching up with Furniro on my laptop, or on my phone when
                                                                                                                                  I'm on the go! It's a great thing.
                    </p>
                </div>

            </Slider>
        </div>

    )
}

export default Testimonials;
