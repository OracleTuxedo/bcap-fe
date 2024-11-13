import { Header, Navbar, Seo, Sidebar } from '@/components';
import { TabEnum } from '@/enums';
import { ReactNode, useState } from 'react';

export interface MainLayoutInterface {
    screenId : string;
    screenName : string;
    isFavorite : boolean;
    favoriteHandler : () => void;
    children : ReactNode;
}

const MainLayout = ({ screenId, screenName, isFavorite, favoriteHandler, children } : MainLayoutInterface) => {
    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

return (
    <div 
        className={`
            flex flex-1 flex-col
            h-screen
        `}
    >
        <Seo title={screenName} />
        <Navbar activeTab={activeTab} setState={setActiveTab} />
        <div className='flex flex-1'>
            <Sidebar />
            <div
                className={`
                    flex flex-1 flex-col
                `}
            >
            <Header
                screenId={screenId}
                screenName={screenName}
                isFavorite={isFavorite}
                favoriteHandler={favoriteHandler}
            />
                <div
                    className={`
                        flex flex-1
                    `}
                >
                    {children}
                </div>
            </div>
        </div>
    </div>
    );
};

export default MainLayout;