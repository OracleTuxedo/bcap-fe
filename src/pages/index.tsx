// import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { BaseContainer, Seo } from '@/components/atoms';

const LandingPage = () => {

  return (
    <>
      <Seo title="MAAS" />
      <BaseContainer>HELLO WORLD</BaseContainer>
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default LandingPage;
