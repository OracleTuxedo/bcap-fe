import { Input } from '@nextui-org/react';
import { AtomInputTextI } from './input-text.interface';
import { LabelText } from '../../label';

const InputText = ({
  name,
  value,
  onChangeHandler,
  label,
}: AtomInputTextI) => {
  return (
    <div>
      <LabelText>{label}</LabelText>
      <Input
        className={`
          flex
          border border-gray
          shadow-md
          focus:outline-none focus:ring focus:ring-secondary focus:border-transparent
          hover:border-gray transition duration-150
          rounded-none
      `}
        name={name}
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputText;
