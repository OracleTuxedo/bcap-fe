import { selectOption } from "@/types";
import { BaseContainer, Dropdown, Label } from "../atoms"
import SettingsIcon from '@mui/icons-material/Settings';
import { SelectChangeEvent } from "@mui/material";

export interface DropdownLabelProps {
    id : string;
    name : string;
    value : string;
    required?: boolean;
    data : selectOption[];
    size? : number;
    onChangeHandler : (event : SelectChangeEvent) => void;
}

const DropdownLabel = ({
    id,
    name,
    value,
    required,
    data,
    size,
    onChangeHandler
} : DropdownLabelProps ) => {
    return (
        <BaseContainer row isFlex flexSize={size}>
            {required && <SettingsIcon color="error" style={{height : 9, width : 9, top : 0, left : 0}} />}
            <BaseContainer row center isFlex>
                <Label size={12}>
                    {name}
                </Label>
                <Dropdown
                    id={id}
                    value={value}
                    data={data}
                    onChangeHandler={onChangeHandler}
                    full
                />
            </BaseContainer>
        </BaseContainer>
    )
}

export default DropdownLabel;