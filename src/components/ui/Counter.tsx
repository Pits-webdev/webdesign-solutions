import {useEffect, useRef} from "react";
import {useMotionValue, motion, animate, useInView, useTransform} from "motion/react";

const Counter: React.FC<{children: React.ReactNode; num: number; char: string; title: string}> = ({
    children,
    num,
    char,
    title,
}) => {
    const count = useMotionValue(0);
    const countRounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "0px 0px -150px 0px"});

    useEffect(() => {
        /*  console.log("Element is in view: ", isInView); */

        if (isInView) {
            const controls = animate(count, num, {duration: 1, ease: [0.474, 0.067, 0.943, 0.433]});
            return () => controls.stop();
        }
    }, [isInView]);

    return (
        <div className="flex flex-col gap-y-4">
            <div className="border border-black border-dashed rounded-3xl p-8 bg-gray-dark">
                <div className="text-4xl sm:text-8xl">
                    <motion.span ref={ref}>{countRounded}</motion.span>
                    <span className="text-accent ml-2 text-3xl sm:text-6xl font-bold">{char}</span>
                </div>
                <p className="font-bold mt-1 text-lg">{title}</p>
            </div>

            {children}
        </div>
    );
};

export default Counter;
