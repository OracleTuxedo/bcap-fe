import { selectOption } from '@/types';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

type dropdownProps = {
    id: string;
    value: string;
    full? : boolean;
    data : selectOption[];
    onChangeHandler: (event: SelectChangeEvent) => void;
};

const Dropdown = ({
    id,
    value,
    full = false,
    data,
    onChangeHandler,
}: dropdownProps) => {
    return (
        <Select
            id={id}
            onChange={onChangeHandler}
            value={value}
            fullWidth={full}
            sx={{
            }}
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
