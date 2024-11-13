import { TabEnum } from "@/enums";
import { TabItem } from "../molecules";

export interface NavbarInterface {
    activeTab : TabEnum;
    setState : (value : TabEnum) => void;
}

const Navbar = ({activeTab, setState} : NavbarInterface) => {
    return(
        <div className={`flex`}>
        <div
            className={`
                flex flex-row w-full
                bg-secondary
                border-b-4
                border-b-yellow
            `}>

            <img
                src='/maas-system-it.svg'
                alt='logo'
                className='p-3'
                width={180}
                onClick={() => setState(TabEnum.MERCHANT)}
            />

            <div className={`flex  flex-row items-end ml-12`}>
                <TabItem active={activeTab} tabName={TabEnum.SFA} onClickHandler={() => setState(TabEnum.SFA)}/>
                <TabItem active={activeTab} tabName={TabEnum.MERCHANT} onClickHandler={() => setState(TabEnum.MERCHANT)}/>
                <TabItem active={activeTab} tabName={TabEnum.MMP} onClickHandler={() => setState(TabEnum.MMP)}/>
                <TabItem active={activeTab} tabName={TabEnum.TMS} onClickHandler={() => setState(TabEnum.TMS)}/>
                <TabItem active={activeTab} tabName={TabEnum.WDS} onClickHandler={() => setState(TabEnum.WDS)}/>
                <TabItem active={activeTab} tabName={TabEnum.AUTH} onClickHandler={() => setState(TabEnum.AUTH)}/>
                <TabItem active={activeTab} tabName={TabEnum.CS} onClickHandler={() => setState(TabEnum.CS)}/>
                <TabItem active={activeTab} tabName={TabEnum.METERING} onClickHandler={() => setState(TabEnum.METERING)}/>
                <TabItem active={activeTab} tabName={TabEnum.ADMIN} onClickHandler={() => setState(TabEnum.ADMIN)}/>
                <TabItem active={activeTab} tabName={TabEnum.EXTERNAL} onClickHandler={() => setState(TabEnum.EXTERNAL)}/>
                <TabItem active={activeTab} tabName={TabEnum.EDUTEST} onClickHandler={() => setState(TabEnum.EDUTEST)}/>
            </div>
        </div>
    </div>
    );
}

export default Navbar;