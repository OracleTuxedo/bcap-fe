import { ReactNode } from "react";

export interface BadgeInterface {
    children : ReactNode;
}

const Badge = ( {  children} : BadgeInterface ) => {

    return (
        <div
            className={`
                px-8 py-2
                rounded-lg
                bg-main-normal hover:bg-main-active
            `}
        >
            {children}
        </div>
    )
}

export default Badge;