import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

type ContainerProps = {
  children: ReactNode;
};

const BaseContainer = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

export default BaseContainer;
