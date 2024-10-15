import { labelVariantEnum, textFieldVariantEnum } from "@/enums";
import { BaseContainer, InputText, Label } from "../atoms"
import { Grid2 } from "@mui/material";

export interface inputRowProps {
    id : string;
    name : string;
    value : string;
    onChangeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRow = ({ id, name, value, onChangeHandler } : inputRowProps) => {
    return (
        <Grid2 container >
            <Grid2 size={6}
                bgcolor="#E9F2FF"
                textAlign={'end'}
                alignContent={'center'}
            >
                <Label variant={labelVariantEnum.BODY1}>{name}</Label>
            </Grid2>
            <Grid2 size={6} >
                <InputText
                    id={id}
                    onChangeHandler={onChangeHandler}
                    value={value}
                    variant={textFieldVariantEnum.OUTLINED}
                />
            </Grid2>
        </Grid2>
    )
}

export default InputRow;