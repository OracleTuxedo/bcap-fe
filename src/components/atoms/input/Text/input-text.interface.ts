import { ChangeEvent } from 'react';

export interface AtomInputTextI {
  name: string;
  value: string;
  label: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
}
