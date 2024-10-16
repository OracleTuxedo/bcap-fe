import React from 'react';
import { Typography } from '@mui/material';
import { LabelVariantEnum } from '@/enums';

type TextProps = {
    children: string;
    variant : LabelVariantEnum;
};

const Label = ({ children, variant = LabelVariantEnum.H2 }: TextProps) => {
    return (
        <Typography
            variant={variant}
            sx={{
                marginY : 2,
                marginX : 1,
            }}
        >
            {children}
        </Typography>
    );
};

export default Label;
