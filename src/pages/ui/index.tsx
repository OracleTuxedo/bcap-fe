import { Seo } from '@/components';
import { Navbar } from '@/components/organisms';
import { TabEnum } from '@/enums';
import { useState } from 'react';

const UiPage = () => {
    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

return (
    <>
        <Seo title="MAAS UI" />
        <Navbar activeTab={activeTab} setState={setActiveTab} />
    </>
    );
};

export default UiPage;