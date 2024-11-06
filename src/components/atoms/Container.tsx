import { ReactNode } from "react"

export interface ContainerInterface {
    row? : boolean;
    children : ReactNode
}

const Container = ( {row = false, children} : ContainerInterface ) => {
    return (
        <div
            className={`flex ${row ? 'flex-row' : 'flex-col'}`}
        >
            {children}
        </div>
    )
}

export default Container;