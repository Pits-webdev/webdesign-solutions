import {useRef} from "react";

import {motion} from "motion/react";
import images from "../../data/draggableImages";

const DraggableCarousel = () => {
    const carouselRef = useRef(null);
    //console.log(images);
    return (
        <div className="section overflow-clip">
            <motion.div ref={carouselRef} className="carousel">
                <motion.div
                    drag="x"
                    dragConstraints={carouselRef}
                    className="inner flex gap-5 w-fit hover:cursor-grab active:cursor-grabbing"
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-[400px] h-[320px]  pointer-events-none">
                            <img src={image.src} alt="porjekte" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DraggableCarousel;
