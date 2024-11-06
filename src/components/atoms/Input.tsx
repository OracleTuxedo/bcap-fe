import { InputTypeEnum } from "@/enums"

export interface InputInterface {
    name : string;
    type : InputTypeEnum;
    value : string;
    onChangeHandler : (e : React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ name, type, value, onChangeHandler} : InputInterface) => {
    return(
        <input name={name} type={type} value={value} onChange={onChangeHandler} />
    )
}

export default Input;