import { InputTypeEnum } from '@/enums';
import { Input } from '@nextui-org/react';
import { ChangeEvent } from 'react';

export interface InputInterface {
  name: string;
  value: string;
  label: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({
  name,
  value,
  label,
  onChangeHandler,
}: InputInterface) => {
  return (
    <Input
      label={label}
      labelPlacement="outside-left"
      name={name}
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default InputText;
