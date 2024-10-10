import { buttonVariantEnum } from '@/enums';
import { Button } from '@mui/material';
type buttonSearchProps = {
  title: string;
  variant: buttonVariantEnum;
  color?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton = ({
  variant,
  title,
  color,
  onClickHandler,
}: buttonSearchProps) => {
  return (
    <Button
      sx={{
        bgcolor: color,
      }}
      variant={variant}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
