export const Avatar = ({
    name,
    imagesUrl,
    isOnline = 0,
}) => {
    const status = {
        1: "bg-green-500",
        0: "bg-red-500"
    }
    return (
        <div className="relative w-14 h-14 rounded-xl flex justify-center items-center shadow-md">
            <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-xl overflow-hidden">
                <p className="text-2xl font-thin">JR</p>
            </div>
            <div className={`absolute w-4 h-4 bottom-[-5%] right-[-5%] ${status[isOnline]} rounded-full`}></div>
        </div>
    )
}

Avatar.defaultProps = {
    isOnline: 0
}