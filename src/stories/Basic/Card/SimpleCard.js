export const SimpleCard = () => {
    return (
        <div className="flex flex-col w-[360px] h-[520px] rounded-md overflow-hidden">
            <div className="w-full h-2/3 overflow-hidden">
                <img 
                    className="w-full"
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="test"
                ></img>
            </div>
            <div className="flex flex-col h-1/3 bg-gradient-to-br from-[#5915EE] to-indigo-500 text-white">
                <div className="flex-auto px-2">
                    <p className="text-2xl py-2">Some Nice Title</p>
                    <p>This is some nice description for your images it will give you this ... if the text got too long, </p>
                </div>
                <div className="flex flex-row border-t-[1px] border-[#491AB0]">
                    <div className="cursor-pointer flex flex-col flex-auto justify-center items-center hover:bg-[#491AB0] transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p>Detail</p>
                    </div>
                    <div className="cursor-pointer flex flex-col flex-auto justify-center items-center border-x-[1px] border-[#491AB0] py-2 hover:bg-[#491AB0] transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <p>Edit</p>
                    </div>
                    <div className="cursor-pointer flex flex-col flex-auto justify-center items-center hover:bg-[#491AB0] transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <p>Delete</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

SimpleCard.defaultProps = {
    
}