import { textFieldVariantEnum } from '@/enums';
import { selectOption } from '@/types';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

type dropdownProps = {
    title: string;
    value: string;
    variant?: textFieldVariantEnum;
    full? : boolean;
    data : selectOption[];
    onChangeHandler: (event: SelectChangeEvent) => void;
};

const Dropdown = ({
    title,
    value,
    variant = textFieldVariantEnum.STANDARD,
    full = false,
    data,
    onChangeHandler,
}: dropdownProps) => {
    return (
            <Select
                id={title}
                onChange={onChangeHandler}
                value={value}
                fullWidth={full}
                margin='dense'
            >
                {data.map((optionValue) => (
                    <MenuItem key={optionValue.value} value={optionValue.value}>
                        {optionValue.label}
                    </MenuItem>
                ))}
            </Select>
    );
};

export default Dropdown;
