import { ReactNode } from "react"

export interface ContainerInterface {
    children : ReactNode
}

const Container = ( {children} : ContainerInterface ) => {
    return (
        <div
            className={`
            bg-amber-600
            `}
        >
            {children}
        </div>
    )
}

export default Container;