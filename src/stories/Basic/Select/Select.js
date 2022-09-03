export const Select = ({
    title,
    options,
}) => {
    return (
        <div className="border-[1px] border-[#5915EE] px-2 py-2 rounded-md shadow-md">
            <select className="w-full bg-transparent">
                <option selected disabled>{title}</option>
                {options.map((item, index) => {
                   return <option key={index} value={item.value}>{item.title}</option>
                })}
            </select>
        </div>
    )
}

Select.defaultProps = {
    title: "Select Items",
    options: [
        {
            title: "A",
            value: "A",
            props: {}
        },
        {
            title: "B",
            value: "B",
            props: {}
        },
        {
            title: "C",
            value: "C",
            props: {}
        },
        {
            title: "D",
            value: "D",
            props: {}
        },
    ]
}