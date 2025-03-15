import React, {useRef} from "react";
/* import Mockup1 from "../../assets/images/MacBook_Mockup1.png"; */

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Carousel = () => {
    const img = document.querySelectorAll(".img");
    const wrapper = document.querySelector(".wrapper");
    const imagesAndChilds = [];

    function handleOnWheel(e: Event) {
        e.preventDefault();
        console.log(e);
    }
    wrapper?.addEventListener("wheel", (e) => {
        e.preventDefault();

        console.log(e);
        /*  if(e.deltaY>0){

        } */
    });

    return (
        <div onWheel={handleOnWheel} className="wrapper relative w-full aspect-[10/6] overflow-hidden">
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
            <div className="img absolute aspect-[10/6] z-10 w-full grid place-items-center origin-[center_-150%] pointer-events-none">
                <img className="w-1/3  transition-all" src="/MacBook_Mockup1.png" alt="" />
            </div>
        </div>
    );
};

export default Carousel;
