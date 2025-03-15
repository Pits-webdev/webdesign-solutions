import {useEffect, useState, useRef} from "react";
import {motion} from "motion/react";

const FollowMouse = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
    const ballSize = 18;
    const mousePos = useRef({x: 0, y: 0});
    const rafId = useRef<number | null>(null);

    // pos: Speichert die aktuelle Position des Balls
    //ballSize: Definiert die Größe des Balls
    //mousePos: Speichert die Mausposition (mit useRef, damit sich Werte nicht bei jedem Render zurücksetzen)
    //rafId: Speichert die ID des Animation Frames

    useEffect(() => {
        const updatePosition = () => {
            // Berechnung der Distanz zwischen Maus und Ball
            const dx = mousePos.current.x - pos.x - 1;
            const dy = mousePos.current.y - pos.y + (ballSize / 2 + 2);

            // Sanfte Bewegung durch Interpolation
            setPos((prev) => ({
                x: prev.x + dx * 0.03, // 0.03 bestimmt die Geschwindigkeit
                y: prev.y + dy * 0.03,
            }));

            // Nächsten Frame anfordern
            rafId.current = requestAnimationFrame(updatePosition);
        };

        //Die updatePosition Funktion berechnet die neue Position des Balls
        //dx und dy sind die Abstände zwischen Maus und Ball
        //Der Faktor 0.03 sorgt für eine sanfte Bewegung (je kleiner, desto sanfter)
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: e.clientX - ballSize / 2,
                y: e.clientY - ballSize / 2,
            };
        };
        //Aktualisiert die Mausposition bei jeder Bewegung
        //Zentriert den Ball auf den Mauszeiger durch Abzug der halben Ballgröße

        window.addEventListener("mousemove", handleMouseMove);
        rafId.current = requestAnimationFrame(updatePosition);

        //Räumt Event-Listener auf wenn die Komponente unmounted
        //Stoppt die Animation
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [pos]);

    return (
        <motion.div
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
            id="ball"
            className="z-[9999] size-[18px] fixed top-0 left-0 rounded-full bg-accent"
        ></motion.div>
    );
};

export default FollowMouse;
