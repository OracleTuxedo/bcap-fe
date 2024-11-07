import { ReactNode } from "react"

export interface ContainerInterface {
    row? : boolean;
    children : ReactNode
}

const Container = ( {row = false, children} : ContainerInterface ) => {
    return (
        <div
            className={`
                flex ${row ? 'flex-row' : 'flex-col'}
                mx-2 my-1
            `}
        >
            {children}
        </div>
    )
}

export default Container;