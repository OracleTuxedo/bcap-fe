import { textFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputTextProps = {
    title: string;
    value?: string;
    variant?: textFieldVariantEnum;
    full? : boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({
    title,
    value,
    variant = textFieldVariantEnum.STANDARD,
    full = false,
    onChangeHandler,
}: inputTextProps) => {
    return (
        <TextField
            margin={'normal'}
            id={title}
            name={title}
            type="text"
            label={title}
            onChange={onChangeHandler}
            value={value}
            variant={variant}
            fullWidth={full}
        />
    );
};

export default InputText;
