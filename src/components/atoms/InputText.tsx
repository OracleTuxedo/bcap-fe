import { InputTypeEnum } from '@/enums';
import { Input } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import Text from './Text';

export interface InputInterface {
  name: string;
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
  label?: string;
}
const InputText = ({
  name,
  value,
  onChangeHandler,
  full = false,
  label,
}: InputInterface) => {
  return (
    <>
      {label && <Text>{label}</Text>}
      <Input
        className={`
                  flex
                  ${full && 'flex-1'}
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
    </>
  );
};

export default InputText;
