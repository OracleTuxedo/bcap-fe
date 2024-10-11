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
            gutterBottom
        >
            {children}
        </Typography>
    );
};

export default Label;
