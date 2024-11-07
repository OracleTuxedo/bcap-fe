import { InputTypeEnum } from "@/enums"

export interface InputInterface {
    name : string;
    type : InputTypeEnum;
    value : string;
    onChangeHandler : (e : React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ name, type, value, onChangeHandler} : InputInterface) => {
    return(
        <input
            className={`
                mx-2 my-1
                w-ful
                px-4 py-2
                border border-gray
                rounded-lg
                shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent 
                hover:border-gray transition duration-150 ease-in-out
            `}
            name={name}
            type={type}
            value={value}
            onChange={onChangeHandler}
        />
    )
}

export default Input;