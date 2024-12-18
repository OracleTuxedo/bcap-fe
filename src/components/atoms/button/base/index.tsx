import { ButtonTypeEnum } from '@/enums';
import { Button } from '@nextui-org/react';
import { AtomButtonBaseI } from './button-base.interface';

const ButtonBase = ({
  type,
  onClickHandler,
  children,
}: AtomButtonBaseI) => {
  let color: string = 'bg-primary hover:bg-main-active';
  switch (type) {
    case ButtonTypeEnum.WARNING:
      color = 'bg-warning-normal hover:bg-warning-active';
      break;
    case ButtonTypeEnum.DISABLE:
      color = 'bg-disable';
      break;
    case ButtonTypeEnum.DANGER:
      color = 'bg-danger-normal hover:bg-danger-active';
      break;
    case ButtonTypeEnum.SUCCESS:
      color = 'bg-success-normal hover:bg-success-active';
      break;
    default:
      break;
  }

  return (
    <Button
      onClick={onClickHandler}
      className={`
                flex flex-1
                mx-2 my-1
                px-8 py-2
                rounded-lg
                ${color}
            `}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
