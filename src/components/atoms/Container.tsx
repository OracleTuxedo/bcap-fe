import { ReactNode } from "react"

export interface ContainerInterface {
    row? : boolean;
    gap? : boolean;
    border? : boolean;
    round? : boolean;
    children : ReactNode
}

const Container = ( {row = false, gap = false, border = false, round = false, children} : ContainerInterface ) => {
    return (
        <div
            className={`
                flex
                flex-1
                ${row ? 'flex-row' : 'flex-col'}
                ${!gap ? 'mx-2 my-1' : ''}
                ${round ? 'rounded-md' : ''}
                ${border ? 'border' : ''}
            `}
        >
            {children}
        </div>
    )
}

export default Container;