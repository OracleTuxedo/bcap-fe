import { dropdownOptionsInterface } from "@/types";
import { ChangeEvent } from "react";

export interface DropdownInterface {
    name : string;
    options : dropdownOptionsInterface[];
    value? : string;
    onChangeHandler : (e : ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ name, options, value, onChangeHandler } : DropdownInterface) => {
    return (
        <select
            name={name}
            className={`
                mx-2
                p-1
                border border-sidebar-normal
                shadow-sm
            `}
            value={value}
            onChange={onChangeHandler}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;