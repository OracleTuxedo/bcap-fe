import { ButtonTypeEnum } from '@/enums';
import { ReactNode } from 'react';

export interface AtomButtonBaseI {
  type?: ButtonTypeEnum;
  children: ReactNode;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
