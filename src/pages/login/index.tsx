import Image from 'next/image';
import rightSaly from '../../../public/Saly-2.svg';
import leftSaly from '../../../public/Saly-3.svg';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { ButtonBase, InputText, LabelText } from '@/components';
import { ChangeEvent, useState } from 'react';
import { SizeEnum, TextColorEnum } from '@/enums';
import LabelTitle from '@/components/atoms/label/title';

const Login = () => {
  const [usernameSt, setUsernameSt] = useState('');
  const [passwordSt, setPasswordSt] = useState('');

  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-homepage-primary flex flex-1 h-screen justify-center">
          <Image src={leftSaly} alt="left-image" />
        </div>
        <div className="flex flex-1 h-screen justify-center">
          <Image src={rightSaly} alt="right-image" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card className="h-[450px] w-[400px] p-2">
          <CardHeader>
            <LabelText size={SizeEnum.DOUBLELARGE}>
              Welcome to MAAS System IT
            </LabelText>
          </CardHeader>
          <CardBody>
            <LabelTitle>Sign in</LabelTitle>
            <div>
              <InputText
                label="Enter your username"
                name="username"
                value={usernameSt}
                onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsernameSt(e.target.value)
                }
              />
            </div>
            <InputText
              label="Enter your Password"
              name="password"
              value={passwordSt}
              onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                setPasswordSt(e.target.value)
              }
            />
          </CardBody>
          <CardFooter>
            <ButtonBase onClickHandler={() => console.log('login')}>
              <LabelText color={TextColorEnum.WHITE}>Login</LabelText>
            </ButtonBase>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
