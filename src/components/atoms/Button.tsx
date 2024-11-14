import { ButtonTypeEnum } from "@/enums";
import { ReactNode } from "react";

export interface ButtonInterface {
    type?: ButtonTypeEnum;
    white? : boolean
    children : ReactNode;
    onClickHandler : () => void;
}

const Button = ( { type, white, onClickHandler, children} : ButtonInterface ) => {
    let bgColor : string = 'bg-main-normal hover:bg-main-active';
    switch (type) {
        case ButtonTypeEnum.WARNING:
            bgColor = 'bg-warning-normal hover:bg-warning-active'
            break;
        case ButtonTypeEnum.DISABLE:
            bgColor = 'bg-disable'
            break;
        case ButtonTypeEnum.DANGER:
            bgColor = 'bg-danger-normal hover:bg-danger-active'
            break;
        case ButtonTypeEnum.SUCCESS:
            bgColor = 'bg-success-normal hover:bg-success-active'
            break;
        default:
            break;
    }

    return (
        <button onClick={onClickHandler}
            className={`
                flex flex-1
                px-8 py-2
                rounded-lg
                ${bgColor}
                ${white ? 'text-white' : 'text-black'}
            `}
        >
            {children}
        </button>
    )
}

export default Button;