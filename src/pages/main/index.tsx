import { Main } from '@/features/main';
import { ReactElement } from 'react';

const MainPage = () => {
  return <Main />;
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default MainPage;
