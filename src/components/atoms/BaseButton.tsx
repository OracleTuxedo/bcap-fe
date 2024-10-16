import { ButtonVariantEnum } from '@/enums';
import { Button } from '@mui/material';
type buttonSearchProps = {
  title: string;
  variant: ButtonVariantEnum;
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
      }}
      variant={variant}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};

export default BaseButton;
