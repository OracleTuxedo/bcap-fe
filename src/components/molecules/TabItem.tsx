import { Text } from "../atoms";
import { SizeEnum, TabEnum, TextColorEnum, WeightEnum } from '@/enums';

export interface TabItemInterface {
    active : TabEnum;
    tabName : TabEnum;
    onClickHandler : () => void;
}

const TabItem = ({active, tabName, onClickHandler} : TabItemInterface) => {
    return(
        <button
            className={`
                px-4 py-1
                ${active === tabName && 'bg-yellow rounded-t-md'}
            `}
            onClick={onClickHandler}
        >
            <Text 
                color={active === tabName ? TextColorEnum.BLACK: TextColorEnum.WHITE}
                size={SizeEnum.MEDIUM}
                weight={active === tabName ? WeightEnum.BOLD : WeightEnum.NORMAL}
            >{tabName}</Text>
        </button>
    );
}

export default TabItem;