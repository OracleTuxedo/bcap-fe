import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type ContainerProps = {
  children: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Box>{children}</Box>;
};
