import { TextFieldSizeEnum, TextFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputTextProps = {
    id : string;
    title?: string;
    value?: string;
    variant?: TextFieldVariantEnum;
    size?: TextFieldSizeEnum;
    full? : boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({
    id,
    title,
    value,
    variant = TextFieldVariantEnum.OUTLINED,
    size = TextFieldSizeEnum.SMALL,
    full = false,
    onChangeHandler,
}: inputTextProps) => {
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
                display : 'flex',
                flex : 1,
            }}
            size={size}
        />
    );
};

export default InputText;
