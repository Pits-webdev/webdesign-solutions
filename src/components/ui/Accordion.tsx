import {useState} from "react";
import {twMerge} from "tailwind-merge";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function handleAccordion(index: number) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className="max-w-[920px] mx-auto">
            {/* Item 1 */}
            <div
                className="accorionItem border-b border-b-black border-dashed"
                data-state={activeIndex === 0 ? "open" : "closed"}
            >
                <div className="accordionTitle py-1">
                    <h3 className="!text-xl">
                        <button
                            onClick={() => handleAccordion(0)}
                            className="w-full h-12 flex justify-between items-center cursor-pointer"
                            data-state={activeIndex === 0 ? "open" : "closed"}
                        >
                            UI/UX Design
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={twMerge(
                                    "size-5 pointer-events-none transition-transform duration-700",
                                    activeIndex === 0 ? "rotate-180" : ""
                                )}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </h3>
                </div>
                <div
                    className={twMerge(
                        "accordionContent overflow-hidden transition-all duration-700",
                        activeIndex === 0 ? "max-h-[400px]" : "max-h-0"
                    )}
                >
                    <p className="pb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis commodi laboriosam
                        quasi quisquam, totam officiis eum ratione aut quaerat non nulla natus et sint! Dolores
                        voluptatibus mollitia veritatis dolorum eligendi sapiente, molestias tenetur!
                    </p>
                </div>
            </div>

            {/* Item 2 */}
            <div
                className="accorionItem border-b border-b-black border-dashed"
                data-state={activeIndex === 1 ? "open" : "closed"}
            >
                <div className="accordionTitle py-1">
                    <h3 className="!text-xl">
                        <button
                            onClick={() => handleAccordion(1)}
                            className="w-full h-12 flex justify-between items-center cursor-pointer"
                            data-state={activeIndex === 1 ? "open" : "closed"}
                        >
                            Responsive Design
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={twMerge(
                                    "size-5 pointer-events-none transition-transform duration-700",
                                    activeIndex === 1 ? "rotate-180" : ""
                                )}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </h3>
                </div>
                <div
                    className={twMerge(
                        "accordionContent overflow-hidden transition-all duration-700",
                        activeIndex === 1 ? "max-h-[400px]" : "max-h-0"
                    )}
                >
                    <p className="pb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis commodi laboriosam
                        quasi quisquam, totam officiis eum ratione aut quaerat non nulla natus et sint! Dolores
                        voluptatibus mollitia veritatis dolorum eligendi sapiente, molestias tenetur!
                    </p>
                </div>
            </div>

            {/* Item 3 */}
            <div
                className="accorionItem border-b border-b-black border-dashed"
                data-state={activeIndex === 2 ? "open" : "closed"}
            >
                <div className="accordionTitle py-1">
                    <h3 className="!text-xl">
                        <button
                            onClick={() => handleAccordion(2)}
                            className="w-full h-12 flex justify-between items-center cursor-pointer"
                            data-state={activeIndex === 2 ? "open" : "closed"}
                        >
                            Web Entwicklung
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={twMerge(
                                    "size-5 pointer-events-none transition-transform duration-700",
                                    activeIndex === 2 ? "rotate-180" : ""
                                )}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </h3>
                </div>
                <div
                    className={twMerge(
                        "accordionContent overflow-hidden transition-all duration-700",
                        activeIndex === 2 ? "max-h-[400px]" : "max-h-0"
                    )}
                >
                    <p className="pb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis commodi laboriosam
                        quasi quisquam, totam officiis eum ratione aut quaerat non nulla natus et sint! Dolores
                        voluptatibus mollitia veritatis dolorum eligendi sapiente, molestias tenetur!
                    </p>
                </div>
            </div>

            {/* Item 4 */}
            <div
                className="accorionItem border-b border-b-black border-dashed"
                data-state={activeIndex === 3 ? "open" : "closed"}
            >
                <div className="accordionTitle py-1">
                    <h3 className="!text-xl">
                        <button
                            onClick={() => handleAccordion(3)}
                            className="w-full h-12 flex justify-between items-center cursor-pointer"
                            data-state={activeIndex === 3 ? "open" : "closed"}
                        >
                            Seo
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={twMerge(
                                    "size-5 pointer-events-none transition-transform duration-700",
                                    activeIndex === 3 ? "rotate-180" : ""
                                )}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </h3>
                </div>
                <div
                    className={twMerge(
                        "accordionContent overflow-hidden transition-all duration-700",
                        activeIndex === 3 ? "max-h-[400px]" : "max-h-0"
                    )}
                >
                    <p className="pb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis commodi laboriosam
                        quasi quisquam, totam officiis eum ratione aut quaerat non nulla natus et sint! Dolores
                        voluptatibus mollitia veritatis dolorum eligendi sapiente, molestias tenetur!
                    </p>
                </div>
            </div>

            {/* Repeat the same pattern for items 2-4, just change the index in handleAccordion(1), handleAccordion(2), etc */}
        </div>
    );
};

export default Accordion;
