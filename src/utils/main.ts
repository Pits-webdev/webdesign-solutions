import Lenis from "lenis";

export const scroll = () => {
    const lenis = new Lenis({
        lerp: 0.1,
        duration: 0.9,
        //easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        easing: (t) => 1 - Math.pow(1 - t, 3.25),
        smoothWheel: true,
    });

    /* lenis.on("scroll", (e: any) => {
        //todo
    }); */

    const raf = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
};

scroll();
