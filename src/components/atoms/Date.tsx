import {
  CalendarDate,
  DatePicker,
  DatePickerProps,
  DateValue,
} from '@nextui-org/react';

export interface DateInterface {
  name: string;
  value?: string;
  onChangeHandler: (e: DateValue) => void;
}

const Date = ({ name, value, onChangeHandler }: DateInterface) => {
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
      label="Date"
      labelPlacement="outside-left"
      showMonthAndYearPickers
      onChange={onChangeHandler}
    />
  );
};

export default Date;
