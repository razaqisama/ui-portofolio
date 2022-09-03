export const Label = ({
    text
}) => {
    return (
        <div className="flex justify-center items-center rounded-md bg-[#5915EE] text-white shadow-md px-4 text-sm w-max">
            {text}
        </div>
    )
}

Label.defaultProps = {
    text: "This is label"
}