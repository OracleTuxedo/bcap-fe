import { InputTypeEnum } from '@/enums';
import { Input } from '@nextui-org/react';
import { ChangeEvent } from 'react';

export interface InputInterface {
  name: string;
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({ name, value, onChangeHandler }: InputInterface) => {
  return (
    <Input
      className={`
                flex
                flex-1
                border border-gray
                shadow-sm
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
                hover:border-gray transition duration-150 ease-in-out
            `}
      name={name}
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default InputText;
