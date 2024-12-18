import { DatePicker } from '@nextui-org/react';
import { atomInputDateI } from './input-date.interface';

const InputDate = ({ name, value, onChangeHandler }: atomInputDateI) => {
  return (
    <DatePicker
      className={`
                flex
                flex-1
                mx-2 my-1
                px-4
                border border-gray
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
                hover:border-gray transition duration-150 ease-in-out
            `}
      name={name}
      value={value}
      label="Date"
      labelPlacement="outside-left"
      showMonthAndYearPickers
      onChange={onChangeHandler}
    />
  );
};

export default InputDate;
