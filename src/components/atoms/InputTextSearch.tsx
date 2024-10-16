import { TextFieldVariantEnum } from '@/enums';
import { InputAdornment, TextField } from '@mui/material';
import { ReactNode } from 'react';

type inputTextSearchProps = {
    id: string;
    title?: string;
    value?: string;
    variant?: TextFieldVariantEnum;
    full? : boolean;
    icon : ReactNode;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTextSearch = ({
    id,
    title,
    value,
    variant = TextFieldVariantEnum.OUTLINED,
    full = false,
    icon,
    onChangeHandler,
}: inputTextSearchProps) => {
    return (
        <TextField
            margin={'normal'}
            id={id}
            name={title}
            type="text"
            label={title}
            onChange={onChangeHandler}
            value={value}
            variant={variant}
            fullWidth={full}
            sx={{
            }}
            slotProps={{
                input : {
                    endAdornment : (
                        <InputAdornment position='end'>
                            {icon}
                        </InputAdornment>
                    )
                }
            }}
        />
    );
};

export default InputTextSearch;
