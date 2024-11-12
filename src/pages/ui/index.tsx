import { Seo, Text } from '@/components';
import { TextColorEnum } from '@/enums';
import { useState } from 'react';

export enum TabEnum {
    SFA         = "SFA",
    MERCHANT    = "Merchant",
    MMP         = "MMP",
    TMS         = "TMS",
    WDS         = "WDS",
    AUTH        = "Authorization",
    CS          = "C & S",
    METERING    = "Metering",
    ADMIN       = "Admin",
    EXTERNAL    = "External",
    EDUTEST     = "Edu & Test",
}

const UiPage = () => {

    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

return (
    <>
        <Seo title="MAAS UI" />
        <div className={`flex flex-1`}>
            <div className={`bg-secondary flex flex-1 flex-row justify-between border-b-4 border-b-warning-normal`}>
                <img
                    src='/maas-system-it.svg'
                    alt='logo'
                    className='flex p-3'
                    onClick={() => setActiveTab(TabEnum.MERCHANT)}
                />
                <div className={`flex flex-1 flex-row items-end ml-12`}>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.SFA && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.SFA)}
                    >
                        <Text 
                        color={activeTab == TabEnum.SFA ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.SFA}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.MERCHANT && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.MERCHANT)}
                    >
                        <Text 
                        color={activeTab == TabEnum.MERCHANT ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.MERCHANT}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.MMP && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.MMP)}
                    >
                        <Text 
                        color={activeTab == TabEnum.MMP ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.MMP}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.TMS && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.TMS)}
                    >
                        <Text 
                        color={activeTab == TabEnum.TMS ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.TMS}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.WDS && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.WDS)}
                    >
                        <Text 
                        color={activeTab == TabEnum.WDS ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.WDS}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.AUTH && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.AUTH)}
                    >
                        <Text 
                        color={activeTab == TabEnum.AUTH ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.AUTH}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.CS && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.CS)}
                    >
                        <Text 
                        color={activeTab == TabEnum.CS ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.CS}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.METERING && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.METERING)}
                    >
                        <Text 
                        color={activeTab == TabEnum.METERING ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.METERING}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.ADMIN && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.ADMIN)}
                    >
                        <Text 
                        color={activeTab == TabEnum.ADMIN ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.ADMIN}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.EXTERNAL && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.EXTERNAL)}
                    >
                        <Text 
                        color={activeTab == TabEnum.EXTERNAL ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.EXTERNAL}</Text>
                    </div>
                    <div
                        className={`
                            px-4 py-1
                            ${activeTab == TabEnum.EDUTEST && 'bg-warning-normal rounded-t-md'}
                        `}
                        onClick={() => setActiveTab(TabEnum.EDUTEST)}
                    >
                        <Text 
                        color={activeTab == TabEnum.EDUTEST ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                    >{TabEnum.EDUTEST}</Text>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UiPage;