import React from 'react';
import { Typography } from '@mui/material';
import { labelVariantEnum } from '@/enums';

type TextProps = {
    children: string;
    variant : labelVariantEnum;
};

const Label = ({ children, variant = labelVariantEnum.H2 }: TextProps) => {
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
