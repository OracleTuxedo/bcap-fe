import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';


const LandingPage = () => {
    const router = useRouter();

    const onSuccess = () => {
        const redirect = router.query.redirect as string;
        router.replace(redirect || '/main');
    };

    return (
        <>
        <Seo title="MAAS" />
        <view>
            HELLO WORLD
        </view>
        </>
    );
};

LandingPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <>{page}</>;
};

export default LandingPage;