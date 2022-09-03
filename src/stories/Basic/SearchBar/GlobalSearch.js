import { useState } from "react";

export const GlobalSearch = () => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <div 
            className={`w-full flex ${openSearch ? "h-[320px] bg-gray-100" : "h-[50px]"} rounded-xl flex-col p-2 overflow-hidden transition-[height,background] ease-in-out duration-300`}>
            <div className="flex flex-row bg-white p-1 rounded-full border-[1px] shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenSearch(true);
                    }}
                    onFocus={(e) => {
                        e.preventDefault();
                        setOpenSearch(true);
                    }}
                    onBlur={(e) => {
                        e.preventDefault();
                        setOpenSearch(false);
                    }}
                    placeholder="Search" className="w-full outline-none bg-transparent px-2"></input>
            </div>
            <p className="mt-3">Recent Searches</p>
            <div className="flex flex-col overflow-scroll">
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
               <div className="cursor-pointer mx-2 py-2 px-2 hover:bg-[#5915EE] hover:text-white rounded-md">Some of your nice searches</div>
            </div>
        </div>
    )
}

GlobalSearch.defaultProps = {

}