import React from "react";

function HSection1() {
    return (
        <div className="relative h-[730px] bg-no-repeat bg-[url(./Images/scandinavian-interior-mockup-wall-decal-background.webp)]">
            <div className="absolute top-52 right-0 sm:right-20 w-[343px] sm:w-[543px] md:w-[643px] h-[343px] sm:h-[443px] border rounded-2xl bg-orange-100 py-10 sm:py-20 px-5 sm:px-10">
                <h2 className="font-bold text-xl font-[poppins] sm:text-2xl">New Arrival</h2>
                <h1 className="font-bold text-4xl text-yellow-600 sm:text-6xl">Discover Our New Arrival</h1>
                <p className="py-3 text-black font-[poppins]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button type="submit" className="my-6 sm:my-10 py-2 sm:py-4 px-10 sm:px-16 text-white font-[poppins] bg-yellow-600 hover:cursor-pointer hover:border-2 hover: border-yellow-600 hover:bg-white hover:text-yellow-600">BUY NOW</button>
            </div>
        </div>
    )
}

export default HSection1;
