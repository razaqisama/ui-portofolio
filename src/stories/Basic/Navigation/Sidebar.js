import { useState } from "react";

export const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(false);
    console.log(isOpened);
    
    return (
        <div className={`absolute left-0 h-screen w-[90px] ${isOpened ? "w-[360px]" : "w-[90px]" } bg-gradient-to-tr from-[#5915EE] to-indigo-500 flex flex-row transition-[width] ease-in-out duration-300 overflow-hidden`}>
            <div className="min-w-[90px] flex flex-col justify-between py-4 items-center text-white overflow-y-scroll">
                <div className="flex flex-col justify-center items-center mt-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100"></div>
                    <p className="text-xs py-1">BRAND HUB</p>
                </div>
                <div className="flex flex-col space-y-8 h-full justify-center mt-8">
                    
                    <div className="flex flex-col justify-center items-center">
                        <div className="group cursor-pointer p-2 bg-white hover:bg-[#350b93] shadow-lg rounded-md active:rounded-xl text-[#5915EE] hover:text-white transition-[border-radius_background_color] duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <p className="text-xs font-thin py-2">Home</p>
                    </div>

                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpened(!isOpened);
                        }} 
                        className="flex flex-col justify-center items-center">
                        <div className={`group cursor-pointer p-2 bg-white hover:bg-[#350b93] shadow-lg rounded-md active:rounded-xl text-[#5915EE] hover:text-white transition-[border-radius_background_color] duration-300 ease-in-out`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                        </div>
                        <p className="text-xs font-thin py-2">Menu 1</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="group cursor-pointer p-2 bg-white hover:bg-[#350b93] shadow-lg rounded-md active:rounded-xl text-[#5915EE] hover:text-white transition-[border-radius_background_color] duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-xs font-thin py-2">Menu 2</p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <div className="group cursor-pointer p-2 bg-white hover:bg-[#350b93] shadow-lg rounded-md active:rounded-xl text-[#5915EE] hover:text-white transition-[border-radius_background_color] duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <p className="text-xs font-thin py-2">Menu 3</p>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center mt-8">
                    <div className="group cursor-pointer p-2 bg-white hover:bg-[#350b93] shadow-lg rounded-md active:rounded-xl text-[#5915EE] hover:text-white transition-[border-radius_background_color] duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <p className="text-xs font-thin py-2">Sign Out</p>
                </div>
            </div>
            <div className={`min-w-[270px] flex-auto flex flex-col justify-center items-end py-16 space-y-8`}>
                <div className="relative group cursor-pointer relative text-2xl text-white pr-4 pl-16 py-2 bg-blue-400 rounded-l-full bg-[#350b93] bg-opacity-40 shadow-lg">
                    <p className="relative z-[99]">Menu Options 1</p>
                    <div className="w-full h-full absolute bg-[#350b93] top-0 left-0 rounded-l-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></div>
                </div>
                <div className="relative group cursor-pointer relative text-2xl text-white pr-4 pl-16 py-2 bg-blue-400 rounded-l-full bg-[#350b93] bg-opacity-40 shadow-lg">
                    <p className="relative z-[99]">Menu Options 2</p>
                    <div className="w-full h-full absolute bg-[#350b93] top-0 left-0 rounded-l-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></div>
                </div>
                <div className="relative group cursor-pointer relative text-2xl text-white pr-4 pl-16 py-2 bg-blue-400 rounded-l-full bg-[#350b93] bg-opacity-40 shadow-lg">
                    <p className="relative z-[99]">Menu Options 3</p>
                    <div className="w-full h-full absolute bg-[#350b93] top-0 left-0 rounded-l-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></div>
                </div>
                <div className="relative group cursor-pointer relative text-2xl text-white pr-4 pl-16 py-2 bg-blue-400 rounded-l-full bg-[#350b93] bg-opacity-40 shadow-lg">
                    <p className="relative z-[99]">Menu Options 4</p>
                    <div className="w-full h-full absolute bg-[#350b93] top-0 left-0 rounded-l-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></div>
                </div>
                <div className="relative group cursor-pointer relative text-2xl text-white pr-4 pl-16 py-2 bg-blue-400 rounded-l-full bg-[#350b93] bg-opacity-40 shadow-lg">
                    <p className="relative z-[99]">Menu Options 5</p>
                    <div className="w-full h-full absolute bg-[#350b93] top-0 left-0 rounded-l-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></div>
                </div>

            </div>
        </div>

    )
}