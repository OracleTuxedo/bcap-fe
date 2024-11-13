import { Navbar, Seo, Sidebar } from '@/components';
import { TabEnum } from '@/enums';
import { ReactNode, useState } from 'react';

export interface MainLayoutInterface {
    title : string;
    children : ReactNode
}

const MainLayout = ({ title, children } : MainLayoutInterface) => {
    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

return (
    <div 
        className={`
            flex flex-1 flex-col
            h-screen
        `}
    >
        <Seo title={title} />
        <Navbar activeTab={activeTab} setState={setActiveTab} />
        <div className='flex flex-1'>
            <Sidebar />
            {children}
        </div>
    </div>
    );
};

export default MainLayout;