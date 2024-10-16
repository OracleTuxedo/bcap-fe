import React from 'react';
import { Typography } from '@mui/material';
import { LabelVariantEnum } from '@/enums';

type TextProps = {
    children: string;
    variant?: LabelVariantEnum;
    size?: number;
    weight? : number;
};

const Label = ({ children, variant = LabelVariantEnum.BODY1, size, weight }: TextProps) => {
    return (
        <Typography
            variant={variant}
            sx={{
            }}
            fontSize={size}
            fontWeight={weight}
        >
            {children}
        </Typography>
    );
};

export default Label;
