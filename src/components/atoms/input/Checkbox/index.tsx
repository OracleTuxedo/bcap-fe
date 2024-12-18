import { Checkbox } from '@nextui-org/react';
import { AtomCheckboxI } from './input-checkbox.interface';

const InputCheckbox = ({
  name,
  label,
  value,
  onChangeHandler,
}: AtomCheckboxI) => {
  return (
    <div className={` flex flex-1 px-6 items-center`}>
      <Checkbox
        id={`checkbox-${name}`}
        isSelected={value}
        onValueChange={onChangeHandler}
        size="lg"
        radius="sm"
      >
        {label}
      </Checkbox>
    </div>
  );
};

export default InputCheckbox;
