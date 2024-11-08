import { ReactNode } from "react"

export interface ContainerInterface {
    row? : boolean;
    gap? : boolean;
    border? : boolean;
    children : ReactNode
}

const Container = ( {row = false, gap = true, border = false, children} : ContainerInterface ) => {
    return (
        <div
            className={`
                flex ${row ? 'flex-row' : 'flex-col'}
                ${gap ? 'mx-2 my-1' : 'm-0'}
                ${border ? 'border' : ''}
            `}
        >
            {children}
        </div>
    )
}

export default Container;