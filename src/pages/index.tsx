// import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components';

const LandingPage = () => {

  return (
    <>
      <Seo title="MAAS" />
      <div>MAAS Web Front End</div>
    </>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default LandingPage;