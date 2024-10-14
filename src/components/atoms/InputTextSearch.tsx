import { textFieldVariantEnum } from '@/enums';
import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { ReactNode } from 'react';

type inputTextSearchProps = {
    title: string;
    value?: string;
    variant?: textFieldVariantEnum;
    full? : boolean;
    icon : ReactNode;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTextSearch = ({
    title,
    value,
    variant = textFieldVariantEnum.STANDARD,
    full = false,
    icon,
    onChangeHandler,
}: inputTextSearchProps) => {
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
            slotProps={{
                input : {
                    endAdornment : (
                        <InputAdornment position='end'>
                            <Search/>
                        </InputAdornment>
                    )
                }
            }}
        />
    );
};

export default InputTextSearch;
