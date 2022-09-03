import { useState } from 'react';
import {
    Button
} from '../Button/Button';

export const Navbar = ({
    menu = [],
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(0);

    return (
        <div 
            className="flex flex-row justify-between bg-indigo-500 items-center px-8 rounded-b-xl shadow-lg">
            <div className="select-none cursor-pointer flex flex-row text-2xl lg:text-4xl font-bold bg-[#5915EE] text-white py-2 my-2 rounded-md px-4 justify-center items-center space-x-2">
                <p className="">Brand</p>
                <p className="text-pink-400">Hub</p>
            </div>
            <div 
            onMouseLeave={(e) => {
                e.preventDefault();
                setIsHovering(false);
            }}
            className="hidden lg:flex relative flex-row relative text-sm">
                <div 
                    className={`z-[1] absolute h-full bg-[#5915EE] transition duration-300 ease-in-out ${isHovering ? '' : 'bg-opacity-0' }`}
                    style={{
                        width: `${90 / (menu.length + 1)}%`,
                        transform: `translateX(${hoveredMenu * 100}%)`
                    }}
                    ></div>
                {menu.map((item, index) => {
                    return (
                        <div
                            onMouseEnter={(e) => {
                                e.preventDefault();
                                setIsHovering(true);
                                setHoveredMenu(index);
                            }} 
                            key={index} 
                            className={`z-[2] py-6 px-8 text-white transition duration-300 ease-in-out cursor-pointer select-none`}>{item}</div>
                    )
                })}
                <div className="ml-12 flex items-center">
                    <Button type="solid">Sign Up</Button>
                </div>
            </div>

            {/* MOBILE  */}
            <div className="lg:hidden cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5915EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    menu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]
}

//${isHovering ? index === hoveredMenu ? "text-white" : "text-[#5915EE]" : 'text-[#5915EE]'}