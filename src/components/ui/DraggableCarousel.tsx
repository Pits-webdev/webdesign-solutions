import {useRef} from "react";
import {motion} from "motion/react";

interface NavProps {
    children: React.ReactNode;
}

const DraggableCarousel = ({children}: NavProps) => {
    const carouselRef = useRef(null);

    return (
        <div className="section overflow-clip">
            <motion.div ref={carouselRef} className="carousel">
                <motion.div
                    drag="x"
                    dragConstraints={carouselRef}
                    className="inner flex gap-5 w-fit hover:cursor-grab active:cursor-grabbing"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DraggableCarousel;
