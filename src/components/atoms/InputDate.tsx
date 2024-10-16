import { TextFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputDateProps = {
  id: string;
  title?: string;
  date?: string;
  variant?: TextFieldVariantEnum;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDate = ({
  id,
  title,
  date,
  variant = TextFieldVariantEnum.STANDARD,
  onChangeHandler,
}: inputDateProps) => {
  return (
    <TextField
      id={id}
      type="date"
      label={title}
      onChange={onChangeHandler}
      value={date ?? new Date()}
      variant={variant}
      sx={{
        marginY : 2,
        marginX : 1,
      }}
    />
  );
};

export default InputDate;
