export interface TextInterface {
    children : string
}

const Text = ( {children} : TextInterface ) => {
    return (
        <p
            className={`
            text-white
            `}
        >
            {children}
        </p>
    )
}

export default Text;