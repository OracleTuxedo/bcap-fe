import { LabelVariantEnum } from '@/enums';
import { Box, IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type headerProps = {
  title: string;
  onClickHandler?: () => void;
};

const PopupHeader = ({ title, onClickHandler }: headerProps) => {
  const TextStyle = {
    marginX: 2,
  };
  return (
    <Box
      sx={{
        height: '4em',

        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingY: '0.5em',
        alignItems: 'center',
        borderBottom: 1,
        bgcolor: 'primary.main',
        borderBottomColor: 'disabled.main',
      }}
    >
      <Typography
        variant={LabelVariantEnum.BODY1}
        align="left"
        sx={{ ...TextStyle }}
        fontWeight={800}
        fontSize={20}
        color="secondary.main"
      >
        {title}
      </Typography>
      <IconButton
        sx={{
          marginLeft: 'auto',
          color: 'secondary.main',
        }}
        onClick={onClickHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default PopupHeader;
