export const ButtonIcon = ({
    children,
    ...props
}) => {
    return (
        <button 
            className="w-[35px] h-[35px] rounded-md flex justify-center items-center bg-[#5915EE] hover:bg-[#491AB0] transition duration-300 ease-in-out text-white shadow-md"
            {...props}
            >
            {children}
        </button>
    )
}


ButtonIcon.defaultProps = {

}