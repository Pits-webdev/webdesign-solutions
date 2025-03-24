import {twMerge} from "tailwind-merge";
import React, {useState} from "react";
import {navigation} from "../../data/navigation";

interface NavProps {
    children: React.ReactNode;
    pathname: string;
}

const Navbar = ({children, pathname}: NavProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMobileMenu = () => {
        setMobileOpen((prev) => !prev);
    };

    //TODO - remove console.log not working in production
    console.log(pathname);

    return (
        <header className="h-16 text-base bg-white sticky top-0 z-50 border-b border-b-gray-dark">
            <nav className="relative px-10 h-full flex items-center justify-between">
                <div className="max-w-[280px] flex justify-start items-center">
                    <a className="flex flex-col sm:flex-row sm:items-center space-x-2" href="/webdesign-solutions">
                        {/* Logo */}
                        {children}

                        <span className="font-bold sm:text-lg">Webdesign Solution</span>
                    </a>
                </div>
                <ul className="hidden xl:flex justify-center space-x-12">
                    {navigation.map(({path, title}) => (
                        <li key={title}>
                            <a className="relative group" href={path}>
                                {title}

                                {pathname === path ? (
                                    <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-accent"></span>
                                ) : (
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 transition-[width]  duration-500 bg-accent group-hover:w-full"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="max-w-[280px] flex items-center justify-end">
                    <div className="hidden xl:flex items-center space-x-4 ">
                        <a
                            className={twMerge(
                                "inline-flex items-center gap-3 group  transition duration-500  text-white h-10 pl-[4px] pr-3 rounded-full overflow-hidden",
                                "hover:bg-accent bg-gray-dark text-text-black"
                            )}
                            href="/webdesign-solutions/kontakt"
                        >
                            {/* Icon */}
                            <div className="w-[32px] h-[32px] bg-white flex items-center justify-end rounded-full overflow-hidden">
                                <div className="group-hover:translate-x-[34px] flex gap-4 transition duration-500 mr-[7px] text-text-black">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-4.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-4.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Text */}

                            <div className="h-[24px]">
                                <div className="group-hover:-translate-y-[40px] transition duration-500">
                                    <div className="flex justify-center items-center flex-col gap-4">
                                        <p className="text-base">Kontakt aufnehmen</p>
                                        <p className="text-base text-text-white">Kontakt aufnehmen</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button className="flex xl:hidden cursor-pointer" onClick={handleMobileMenu}>
                        {mobileOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* mobile nav */}
                {mobileOpen && (
                    <div className="absolute left-0 top-20 w-full h-full px-10 xl:hidden">
                        <ul className=" flex flex-col gap-y-2 bg-accent rounded-[20px] p-8">
                            <div className="text-text-white text-xl inline-flex justify-between items-center border-b border-b-[#ffffff]/50 pb-1 mb-2 ">
                                <h5 className="text-text-white text-2xl">Menu</h5>
                            </div>
                            {navigation.map(({path, title}) => (
                                <li className="text-2xl text-text-white " key={title}>
                                    <a
                                        className="inline-block hover:translate-x-3 transition-all duration-300"
                                        href={path}
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
