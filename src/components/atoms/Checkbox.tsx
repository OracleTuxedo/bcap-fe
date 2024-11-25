import { Checkbox } from '@nextui-org/react';

export interface CheckBoxInterface {
  name: string;
  label?: string;
  value: boolean;
  onChangeHandler: () => void;
}

const CheckBox = ({
  name,
  label,
  value,
  onChangeHandler,
}: CheckBoxInterface) => {
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

export default CheckBox;
