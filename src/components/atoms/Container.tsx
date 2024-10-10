import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

export enum containerSizeEnum {
  EXTRASMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRALARGE = 'xl',
}

type ContainerProps = {
  children: ReactNode;
};

const CustomContainer = ({ children }: ContainerProps) => {
  return <Container sx={{}}>{children}</Container>;
};

export default CustomContainer;
