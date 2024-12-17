import { Card, CardBody } from '@nextui-org/react';
import { ReactNode } from 'react';

interface CardI {
  children: ReactNode;
}

const CustomCard = ({ children }: CardI) => {
  return (
    <Card className="max-w-[370px] max-h-[760px]">
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CustomCard;
