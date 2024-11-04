import { ReactNode } from "react"

export interface ContainerInterface {
    children : ReactNode
}

const Container = ( {children} : ContainerInterface ) => {
    return (
        <div
            className={`
            `}
        >
            {children}
        </div>
    )
}

export default Container;