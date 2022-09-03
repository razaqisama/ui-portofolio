import { InputLabel } from "./InputLabel"

export const Input = ({
    type
}) => {
    const types = {
        "text": <InputLabel />
    }

    return (
        <>
            {types[type]}
        </>
    )
}

Input.defaultProps = {
    type: "text"
}