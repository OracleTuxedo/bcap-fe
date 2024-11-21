import { Header, Navbar, Seo, Sidebar } from '@/components';
import { MenuItem } from '@/components/organisms/Sidebar';
import { TabEnum } from '@/enums';
import { ReactNode, useState } from 'react';

export interface MainLayoutInterface {
    screenId : string;
    screenName : string;
    isFavorite : boolean;
    activeTabScreen : TabEnum;
    favoriteHandler : () => void;
    children : ReactNode;
    menuItems : MenuItem[];
    initial : string;
}

const MainLayout = ({ screenId, screenName, isFavorite, activeTabScreen, menuItems, initial, favoriteHandler, children } : MainLayoutInterface) => {
    const [activeTab, setActiveTab] = useState<TabEnum>(activeTabScreen);

    return (
        <div
            className={`
                flex flex-1 flex-col
                h-screen w-full
            `}
        >
            <Seo title={screenName} />
            <Navbar activeTab={activeTab} setState={setActiveTab} />
            <div
                className={`
                    flex flex-row
                `}
            >
                <Sidebar menuItems={menuItems} initial={initial} />
                <div
                    className={`
                        flex flex-1 flex-col
                        w-full
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
                            overflow-auto
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