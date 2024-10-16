import { LabelVariantEnum } from '@/enums';
import { Box, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type headerProps = {
  screenId : string;
  title: string;
  isFavorite : Boolean;
  onClickHandler : () => void;
};

const Header = ({ screenId, title, isFavorite, onClickHandler}: headerProps) => {
  const TextStyle = {
    marginX : 2
  }
  return (
    <Box
      sx={{
        height: '4em',
        display : 'flex',
        flex : 1,
        flexDirection : 'row',
        paddingY : '0.5em',
        alignItems : 'center',
        borderBottom : 1,
        borderBottomColor : 'disabled.main'
      }}
    >
      <IconButton color={isFavorite ? 'warning' : 'default'} onClick={onClickHandler}>
        <StarIcon />
      </IconButton>
      <Box
        sx={{
          bgcolor : 'primary.light',
          borderRadius : '4px'
        }}
      >
        <Typography
          variant={LabelVariantEnum.BODY1}
          align="left"
          sx={{...TextStyle}}
          color='white'
          fontWeight={600}
          fontSize={15}
        >
          {screenId}
        </Typography>
      </Box>
      <Typography
        variant={LabelVariantEnum.BODY1}
        align="left"
        sx={{...TextStyle}}
        fontWeight={800}
        fontSize={20}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
