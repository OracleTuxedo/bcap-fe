import { labelVariantEnum, textFieldVariantEnum } from "@/enums";
import { BaseContainer, InputText, Label } from "../atoms"

export interface inputRowProps {
    id : string;
    name : string;
    value : string;
    onChangeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRow = ({ id, name, value, onChangeHandler } : inputRowProps) => {
    return (
        <BaseContainer row>
            <Label variant={labelVariantEnum.BODY1}>{name}</Label>
            <InputText
                id={id}
                onChangeHandler={onChangeHandler}
                value={value}
                variant={textFieldVariantEnum.OUTLINED}
            />
        </BaseContainer>
    )
}

export default InputRow;