import { buttonVariantEnum } from '@/enums';
import { Button } from '@mui/material';
type buttonSearchProps = {
  title: string;
  variant: buttonVariantEnum;
  color?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const BaseButton = ({
  variant,
  title,
  color,
  onClickHandler,
}: buttonSearchProps) => {
  return (
    <Button
      sx={{
        bgcolor: color,
        marginY : 2,
        paddingY : 2,
      }}
      variant={variant}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};

export default BaseButton;
