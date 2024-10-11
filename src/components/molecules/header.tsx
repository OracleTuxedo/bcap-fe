import { Box } from '@mui/material';

type headerProps = {
  title: string;
};

const Header = ({ title = 'title' }: headerProps) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '10vh',
        bgcolor: '#D7D7D7',
        margin: '0 0 1em 0',
      }}
    >
      {title}
    </Box>
  );
};

export default Header;
