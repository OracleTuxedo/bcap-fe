import { DateValue } from '@nextui-org/react';

export interface atomInputDateI {
  name: string;
  value?: DateValue | null | undefined;
  onChangeHandler: (e: DateValue) => void;
}
