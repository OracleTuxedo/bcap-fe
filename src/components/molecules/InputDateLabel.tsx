import { ChangeEvent } from "react";
import { BaseContainer, InputDate, Label } from "../atoms"
import SettingsIcon from '@mui/icons-material/Settings';

export interface InputDateLabelProps {
    startId : string;
    endId : string;
    name : string;
    startValue : string | undefined;
    endValue : string | undefined;
    required?: boolean;
    size?: number;
    StartOnChangeHandler : (event : ChangeEvent<HTMLInputElement>) => void;
    EndOnChangeHandler : (event : ChangeEvent<HTMLInputElement>) => void;
}

const InputDateLabel = ({
    startId,
    endId,
    name,
    startValue,
    endValue,
    required,
    size,
    StartOnChangeHandler,
    EndOnChangeHandler,
} : InputDateLabelProps ) => {
    return (
        <BaseContainer isFlex row flexSize={size}>
            {required && <SettingsIcon color="error" style={{height : 9, width : 9, top : 0, left : 0}} />}
            <BaseContainer row center isFlex>
                <Label size={12}>
                    {name}
                </Label>
                <InputDate
                    id={startId}
                    date={startValue}
                    onChangeHandler={StartOnChangeHandler}
                />
                <Label>~</Label>
                <InputDate
                    id={endId}
                    date={endValue}
                    onChangeHandler={EndOnChangeHandler}
                />
            </BaseContainer>
        </BaseContainer>
    )
}

export default InputDateLabel;