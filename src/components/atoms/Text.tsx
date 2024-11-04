export interface TextInterface {
    children : string
}

const Text = ( {children} : TextInterface ) => {
    return (
        <p
            className={`
            bg-amber-600
            `}
        >
            {children}
        </p>
    )
}

export default Text;