import { DomainHashmap, domainMenu } from '@/config/menu';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

type NavbarMenuProps = {
  domainName: string;
  navbarActive: boolean;
  extractedInfo: DomainHashmap;
};

export const NavbarItem: React.FC<NavbarMenuProps> = ({
  domainName,
  navbarActive,
  extractedInfo,
}) => {
  const keys = Object.keys(extractedInfo);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          flexFlow: 'row',
          justifyContent: 'space-between',
          width: '100vw',
        }}
      >
        <Box>
          <Typography>test 1</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row',
          }}
        >
          {keys.map((key) => {
            return <Typography key={key}>{key}</Typography>;
          })}
        </Box>
        <Box>
          <Typography>test 3</Typography>
        </Box>
      </Box>
    </>
  );
};
