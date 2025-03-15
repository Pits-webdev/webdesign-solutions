import {useEffect, useRef} from "react";
import {useMotionValue, motion, animate, useInView, useTransform} from "motion/react";

const MotionTest = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0px 0px -50px 0px"});

    useEffect(() => {
        /*  console.log("Element is in view: ", isInView); */
        if (isInView) {
            const controls = animate(count, 100, {duration: 1, ease: [0.474, 0.067, 0.943, 0.433]});
            return () => controls.stop();
        }
    }, [isInView]);
    return (
        <section className="mt-28 ">
            <motion.h2 ref={ref}>{rounded}</motion.h2>
        </section>
    );
};

export default MotionTest;
