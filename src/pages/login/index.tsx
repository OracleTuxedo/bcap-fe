import Image from 'next/image';
import rightSaly from '../../../public/Saly-2.svg';
import leftSaly from '../../../public/Saly-3.svg';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { CustomButton, InputText, Text } from '@/components';
import { ChangeEvent, useState } from 'react';
import { SizeEnum } from '@/enums';

const Login = () => {
  const [usernameSt, setUsernameSt] = useState('');
  const [passwordSt, setPasswordSt] = useState('');

  return (
    <div className="flex flex-row">
      <div className="bg-homepage-primary flex flex-1 h-screen justify-center">
        <Image src={leftSaly} alt="left-image" />
      </div>
      <div className="flex flex-1 h-screen justify-center">
        <Image src={rightSaly} alt="right-image" />
      </div>
      <div className="absolute top-[20%] left-1/2 m-auto">
        <Card className="h-[500px] w-[450px]">
          <CardHeader>
            <Text size={SizeEnum.DOUBLELARGE}>
              Welcome to MAAS System IT
            </Text>
          </CardHeader>
          <CardBody>
            <Text size={SizeEnum.TRIPLELARGE}>Sign in</Text>
            <InputText
              label="Enter your username"
              name="username"
              value={usernameSt}
              onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                setUsernameSt(e.target.value)
              }
            />
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
            <CustomButton onClickHandler={() => console.log('login')}>
              Login
            </CustomButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
