import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type ContainerProps = {
  row?: boolean;
  color?: string;
  children: ReactNode;
};

const BaseContainer = ({ row = false, color, children }: ContainerProps) => {
  return (
    <Box
      sx={{
        display : 'flex',
        flex : 1,
        bgcolor : color,
        flexDirection : row ? 'row' : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        paddingX : 1
      }}
    >
      {children}
    </Box>
  );
};

export default BaseContainer;
