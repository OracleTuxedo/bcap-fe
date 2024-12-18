import { ReactNode } from 'react';

export interface AtomContainerI {
  row?: boolean;
  gap?: boolean;
  border?: boolean;
  round?: boolean;
  children: ReactNode;
}
