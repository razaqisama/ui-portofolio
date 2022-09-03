import { useState } from "react"

export const Checkbox = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div 
            onClick={(e) => {
                e.preventDefault()
                setChecked(!checked)
            }}
            className={`relative overflow-hidden cursor-pointer text-white border-[1px] border-[#491AB0] w-[20px] h-[20px] flex justify-center items-center rounded-md shadow-md`}>
            <div className={`absolute w-full h-full bg-[#5915EE] text-white transform transition duration-[500ms] ease-in-out ${checked ? "translate-y-0" : "translate-y-full"} flex justify-center items-center top-0 left-0`}>
            </div>
            <div className={`absolute w-full h-full bg-[#5915EE] text-white transform transition duration-[500ms] ease-in-out ${checked ? "translate-y-0" : "-translate-y-full"} flex justify-center items-center top-0 left-0`}>
            </div>
            <div className={`absolute w-full h-full bg-[#5915EE] text-white transform transition duration-[500ms] ease-in-out ${checked ? "translate-x-0" : "-translate-x-full"} flex justify-center items-center top-0 left-0`}>
            </div>
            <div className={`absolute w-full h-full bg-[#5915EE] text-white transform transition duration-[500ms] ease-in-out ${checked ? "translate-x-0" : "translate-x-full"} flex justify-center items-center top-0 left-0`}>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="z-[99] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>  
        </div>
    )
}

Checkbox.defaultProps = {

}