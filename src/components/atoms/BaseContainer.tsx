import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type ContainerProps = {
  isFlex?: boolean;
  flexSize?: number;
  row?: boolean;
  color?: string;
  center? : boolean;
  spaceEvenly? : boolean;
  horizonPad? : string;
  verticalPad? : string;
  children: ReactNode;
};

const BaseContainer = ({
  isFlex,
  flexSize,
  row,
  color,
  center,
  spaceEvenly,
  horizonPad,
  verticalPad,
  children
}: ContainerProps) => {
  return (
    <Box
      sx={{
        display : isFlex ? 'flex' : '',
        flex : flexSize ?? 1,
        bgcolor : color,
        flexDirection : row ? 'row' : 'column',
        alignItems : center ? 'center' : '',
        justifyContent : spaceEvenly ? 'space-evenly' : '',
        paddingX : horizonPad,
        paddingY : verticalPad,
      }}
    >
      {children}
    </Box>
  );
};

export default BaseContainer;
