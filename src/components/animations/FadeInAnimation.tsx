import React from "react";
import {motion} from "motion/react";

interface NavProps {
    children: React.ReactNode;
}

const FadeInAnimation = ({children}: NavProps) => {
    const variants = {
        hidden: {opacity: 0, y: 80},
        visible: {opacity: 1, y: 0},
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, ease: "easeInOut"}}
        >
            {children}
        </motion.div>
    );
};

export default FadeInAnimation;
