// import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { CustomContainer, Seo } from '@/components/atoms';

const LandingPage = () => {

  return (
    <>
      <Seo title="MAAS" />
      <CustomContainer>HELLO WORLD</CustomContainer>
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default LandingPage;
