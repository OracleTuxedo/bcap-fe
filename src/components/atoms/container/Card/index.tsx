import { Card } from '@nextui-org/react';
import { AtomCardI } from './card.interface';

const CustomCard = ({ children }: AtomCardI) => {
  return <Card className="max-w-[370px] max-h-[760px]">{children}</Card>;
};

export default CustomCard;
