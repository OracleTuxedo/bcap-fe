import { Header } from '@/components';
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
    <MainLayout title='Merchant Info. Change History'>
      <Header
        screenId='MC0302500'
        screenName='Merchant Info. Change History'
        isFavorite={isFavorite}
        favoriteHandler={favoriteHandler}
      />
    </MainLayout>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
