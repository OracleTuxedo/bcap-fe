import React, { ReactNode } from 'react';
import { Container } from "@mui/material";

export enum containerSizeEnum {
  EXTRASMALL = 'xs',
  SMALL = 'sm',
  MEDIUM  = 'md',
  LARGE  = 'lg',
  EXTRALARGE  = 'xl',
}

type ContainerProps = {
  size? : containerSizeEnum;
  children: ReactNode;
};

const CustomContainer = ({ size = containerSizeEnum.EXTRALARGE, children } : ContainerProps) => {
  return (
  <Container maxWidth={size}>
    {children}
  </Container>);
};

export default CustomContainer;