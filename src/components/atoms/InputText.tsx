import { textFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputTextProps = {
    id : string;
    title?: string;
    value?: string;
    variant?: textFieldVariantEnum;
    full? : boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({
    id,
    title,
    value,
    variant = textFieldVariantEnum.STANDARD,
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
                marginY : 2,
                marginX : 1,
            }}
        />
    );
};

export default InputText;
