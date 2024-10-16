import { TextFieldVariantEnum } from '@/enums';
import { TextField } from '@mui/material';
import React from 'react';

type inputDateProps = {
  id: string;
  title?: string;
  date?: string | undefined;
  variant?: TextFieldVariantEnum;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputDate = ({
  id,
  title,
  date,
  variant = TextFieldVariantEnum.OUTLINED,
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
      }}
    />
  );
};

export default InputDate;
