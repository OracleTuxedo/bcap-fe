import { Seo } from '@/components';
import { Navbar, Sidebar } from '@/components/organisms';
import { TabEnum } from '@/enums';
import { useState } from 'react';

const UiPage = () => {
    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

return (
    <div 
        className={`
            flex flex-1 flex-col
            h-screen
        `}
    >
        <Seo title="MAAS UI" />
        <Navbar activeTab={activeTab} setState={setActiveTab} />
        <div 
            className={`
                flex flex-1 flex-row
            `}
        >
            <Sidebar />
            <div
                className={`
                    flex flex-1
                `}
            >
                content
            </div>
        </div>
    </div>
    );
};

export default UiPage;