import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

type ContainerProps = {
  row?: boolean;
  children: ReactNode;
};

const BaseContainer = ({ row = false, children }: ContainerProps) => {
  return (
    <Container
      sx={{
        display : 'flex',
        flex : 1,
        bgcolor : 'red',
        flexDirection : row ? 'row' : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly'
      }}
    >
      {children}
    </Container>
  );
};

export default BaseContainer;
