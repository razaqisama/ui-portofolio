import { useState } from "react"

export const Toggle = ({
    type
}) => {
    const [isTrue, setIsTrue] = useState(false);
    const toggles = {
        simple: "w-[40px] h-[20px]",
        short: "w-[40px] h-[12px]"

    }
    return (
        <div 
            onClick={(e) => {
                e.preventDefault();
                setIsTrue(!isTrue);
            }}
            className={`relative cursor-pointer ${toggles[type]} flex items-center rounded-full ${isTrue ? "bg-[#5915EE]" : "bg-gray-300"} border-gray-400 transition duration-300 ease-in-out ${isTrue ? " shadow-[inset_0px_0px_7px_-6px_#fff,_inset_2px_2px_7px_-6px_#fff]" : " shadow-[inset_0px_0px_7px_-6px,_inset_2px_2px_7px_-6px]"}`}>
            <div className={`absolute flex items-center justify-center w-[50%] ${isTrue ? "translate-x-full" : ""} transition ease-in-out duration-[100]`}>
                <div className={` min-w-[18px] max-w-[18px] min-h-[18px] max-h-[18px] rounded-full bg-white border-[1px] ${isTrue ? "border-[#491AB0]" : "border-gray-400"} transition duration-300 ease-in-out`}></div>
            </div>
        </div>
    )
}

Toggle.defaultProps = {
    type: 'simple'
}