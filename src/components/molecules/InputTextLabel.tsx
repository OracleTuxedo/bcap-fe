import { ChangeEvent } from "react";
import { BaseContainer, InputText, Label } from "../atoms"
import SettingsIcon from '@mui/icons-material/Settings';

export interface InputTextLabelProps {
    id : string;
    name : string;
    value : string;
    required?: boolean;
    size? : number;
    onChangeHandler : (event : ChangeEvent<HTMLInputElement>) => void;
}

const InputTextLabel = ({
    id,
    name,
    value,
    required,
    size,
    onChangeHandler
} : InputTextLabelProps ) => {
    return (
        <BaseContainer row isFlex flexSize={size}>
            {required && <SettingsIcon color="error" style={{height : 9, width : 9, top : 0, left : 0}} />}
            <BaseContainer row center>
                <Label size={12}>
                    {name}
                </Label>
                <InputText
                    id={id}
                    value={value}
                    onChangeHandler={onChangeHandler}
                />
            </BaseContainer>
        </BaseContainer>
    )
}

export default InputTextLabel;