import { ReactNode } from "react";

export interface BadgeInterface {
    children : ReactNode;
}

const Badge = ( {  children} : BadgeInterface ) => {
    const style = `px-8 py-2 rounded-lg bg-main-normal hover:bg-main-active`;

    return (
        <div
            className={style}
        >
            {children}
        </div>
    )
}

export default Badge;