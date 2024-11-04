import { PaddingEnum } from "@/enums/tailwind.enum";
import { ReactNode } from "react";

export interface ButtonInterface {
    children : ReactNode;
}

const Button = ( {children} : ButtonInterface ) => {
    return (
        <button
            className={`
                flex flex-1
                bg-sky-600
                p-4
            `}
        >
            {children}
        </button>
    )
}

export default Button;