import { useState } from "react"

export const Tabs = ({
    menu
}) => {
    const [selectedMenu, setSelectedMenu] = useState(0)

    return (
        <div className="relative h-[45px] rounded-t-md bg-[#5915EE] flex flex-col justify-center text-white text-lg font-bold">
            <div 
                className="absolute h-[60px] bg-[#5915EE] border--[1px] border-[#491AB0] shadow-xl flex justify-center items-center bottom-0 rounded-t-md transition duration-300"
                style={{
                    width: `${100 / (menu.length)}%`,
                    transform: `translateX(${selectedMenu * 100}%)`
                }}
            ></div>
            <div className="absolute h-full w-full flex flex-row justify-between bg-red-400  opacity-[0] z-[500]">
                {menu.map((item, index) => {
                    return (
                        <>
                            <div
                                key={index} 
                                className={`cursor-pointer flex-auto`}  
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedMenu(index)
                                }}  
                            ></div>
                        </>
                    )
                })}
            </div>
            <div className="relative flex flex-row justify-between">
                {menu.map((item, index) => {
                    return (
                        <>
                            <p 
                                key={index} 
                                className={`z-[99] py-1 text-center flex-auto transform transition duration-300 ease-in-out ${(selectedMenu === index) ? "-translate-y-[50%]" : ""}`}  
                            >{item}</p>
                        </>
                    )
                })}
            </div>
        </div>

    )
}

Tabs.defaultProps = {
    menu: [
        "Tab 1", 
        "Tab 2", 
        "Tab 3",
        "Tab 4", 
        "Tab 5", 
        "Tab 6",
    ]
}