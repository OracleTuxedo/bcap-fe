import { ButtonTypeEnum } from "@/enums";
import { ReactNode } from "react";

export interface ButtonInterface {
    type?: ButtonTypeEnum;
    children : ReactNode;
    onClickHandler : () => void;
}

const Button = ( { type, onClickHandler, children} : ButtonInterface ) => {
    let color : string = 'bg-main-normal hover:bg-main-active';
    switch (type) {
        case ButtonTypeEnum.WARNING:
            color = 'bg-warning-normal hover:bg-warning-active'
            break;
        case ButtonTypeEnum.DISABLE:
            color = 'bg-disable'
            break;
        case ButtonTypeEnum.DANGER:
            color = 'bg-danger-normal hover:bg-danger-active'
            break;
        case ButtonTypeEnum.SUCCESS:
            color = 'bg-success-normal hover:bg-success-active'
            break;
        default:
            break;
    }

    return (
        <button onClick={onClickHandler}
            className={`
                flex flex-1
                px-8 py-2
                rounded-full
                ${color}
            `}
        >
            {children}
        </button>
    )
}

export default Button;