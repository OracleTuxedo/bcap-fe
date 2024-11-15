import { ChangeEvent } from "react";

export interface InputTextInterface {
    name            : string;
    value?          : string;
    onChangeHandler : (e : ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ name, value, onChangeHandler } : InputTextInterface) => {
    return(
        <input
            name={name}
            type="search"
            className={`
                mx-2
                p-1
                border border-sidebar-normal
                shadow-sm
            `}
            value={value}
            onChange={onChangeHandler}
        />
    );
}

export default InputText;