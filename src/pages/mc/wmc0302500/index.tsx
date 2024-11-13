import { Button, Header } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { ReactElement, useState } from 'react';

const onClickSearch = () => {
  console.log('test');
};

const handlerDownloadButton = () => {};

const WMC0302500 = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favoriteHandler = () => {
      setIsFavorite((prev) => !prev);
  };

  return (
    <MainLayout
      screenId='MC0302500'
      screenName='Merchant Info. Change History'
      isFavorite={isFavorite}
      favoriteHandler={favoriteHandler}
    >
      test
    </MainLayout>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
