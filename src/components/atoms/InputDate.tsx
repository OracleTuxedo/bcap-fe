import { textFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputDateProps = {
  title: string;
  date?: string;
  variant?: textFieldVariantEnum;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDate = ({
  title,
  date,
  variant = textFieldVariantEnum.STANDARD,
  onChangeHandler,
}: inputDateProps) => {
  return (
    <TextField
      sx={
        {
          // padding: '0.25rem 0.5rem',
          // margin: '1rem 2rem',
          // width: '10vw',
          // height: '2vh',
        }
      }
      id={title}
      type="date"
      onChange={onChangeHandler}
      value={date ?? new Date()}
      variant={variant}
    />
  );
};

export default InputDate;
