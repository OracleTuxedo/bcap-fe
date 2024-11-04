export interface TextInterface {
    children : string
}

const Text = ( {children} : TextInterface ) => {
    return (
        <p
            className={`
            text-slate-100
            `}
        >
            {children}
        </p>
    )
}

export default Text;