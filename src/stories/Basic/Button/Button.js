export const Button = ({
    type,
    children,
    className,
    ...props
}) => {
    console.log(props);
    const style = {
        outlined: `
        text-[#5915EE]    
        border-2 border-[#5915EE]
        hover:text-white hover:bg-[#5915EE]
        active:bg-[#3F00CA] active:border-[#3F00CA]
        `,
        solid: `
        text-white
        bg-[#5915EE] 
        hover:bg-[#6D33EC] active:bg-[#5915EE]
        `,
    }

    return (
        <button 
            className={`
                px-8 py-2 
                font-bold
                ${style[type]}
                shadow-lg
                overflow-hidden
                transition duration-300 ease-in-out
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'outlined',
}