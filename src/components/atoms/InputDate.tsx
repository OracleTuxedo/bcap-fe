import { textFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputDateProps = {
  id: string;
  title?: string;
  date?: string;
  variant?: textFieldVariantEnum;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDate = ({
  id,
  title,
  date,
  variant = textFieldVariantEnum.STANDARD,
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
    />
  );
};

export default InputDate;
