import { useState } from "react"

export const InputLabel = ({
    label,
    placeholder,
    ...props
}) => {
    const [focused, setFocused] = useState(false)

    const isFocusedStyle = "border-[#5915EE] text-[#5915EE]"
    const isNotFocusedStyle = "border-gray-300 text-gray-500"

    return (
        <div className={`${focused ? isFocusedStyle : isNotFocusedStyle } transition duration-300 ease-in-out relative flex flex-col border-2 px-2 py-1 rounded-md shadow-md`}>
            <p className="text-sm bg-white px-2 absolute top-[-40%]">{label}</p>
            <input 
                className="outline-none px-2 text-gray-700 bg-transparent"
                placeholder={placeholder}
                onFocus={(e)=> {
                    e.preventDefault();
                    setFocused(true)
                }}
                onBlur={(e) => {
                    e.preventDefault();
                    setFocused(false)
                }}
                {...props}
                >

            </input>
        </div>
    )
}


InputLabel.defaultProps = {
    label: "Username",
    placeholder: "Place Holder"
}