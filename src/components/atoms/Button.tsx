export interface ButtonInterface {
    text : string
}

const Button = ( {text} : ButtonInterface ) => {
    return (
        <button
            className="px-3 bg-blue-500"
        >
            {text}
        </button>
    )
}

export default Button;