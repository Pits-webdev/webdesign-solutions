import React, {useEffect} from "react";
import {useAnimate, useInView} from "motion/react";

interface NavProps {
    children: React.ReactNode;
}

const MarqueeEffect = ({children}: NavProps) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, {margin: "0px 0px 0px 0px"});

    useEffect(() => {
        if (isInView) {
            animate(scope.current, {x: ["0%", "-50%"]}, {duration: 15, repeat: Infinity, ease: "linear"});
        } else {
            animate(scope.current, {x: "0%"});
        }
    }, [isInView]);

    return (
        <div className="w-full marquee-text overflow-clip">
            <div className="marquee-track pl-20 flex gap-20 w-max" ref={scope}>
                {children}
            </div>
        </div>
    );
};

export default MarqueeEffect;
