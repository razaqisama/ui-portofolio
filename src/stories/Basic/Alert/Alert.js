export const Alert = ({
    message,
    type
}) => {
    console.log(type)
    const icon = {
        "info": 
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        "warning": 
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>,
        "error": 
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        "success": 
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
    }

    const style = {
        "info": "bg-blue-400",
        "warning": "bg-yellow-400",
        "error": "bg-red-400",
        "success": "bg-green-400 "
    }
    
    return (
        <div className={`flex flex-row ${style[type]} hover:bg-opacity-80 py-4 rounded-md shadow-md cursor-pointer`}>
            {icon[type] ? icon[type] : icon["info"]}
            <p>{message}</p>
        </div>
    )
}

Alert.defaultProps = {
    type: "info",
    message: "Some nice message alert!"
}