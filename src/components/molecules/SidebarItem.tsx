import { MenuItem, MenuTabEnum } from "../organisms/Sidebar";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

export interface SidebarItemInterface {
    activeItem : string | null;
    favoriteTab : MenuTabEnum;
    menuItems : MenuItem[]
    setTab : (e : MenuTabEnum) => void;
    handleToggle : (e : string) => void;
}

const SidebarItem = ({ activeItem, favoriteTab, menuItems, setTab, handleToggle } : SidebarItemInterface) => {

    return (
        <>
            <div
                className="flex flex-row"
            >
                <div
                    className={`
                        flex flex-1
                        py-2
                        ${favoriteTab === MenuTabEnum.MENU ? "bg-sidebar-active" : "bg-sidebar-dark"}
                        justify-center
                    `}
                    onClick={() => setTab(MenuTabEnum.MENU)}
                >
                    {MenuTabEnum.MENU}
                </div>
                <div
                    className={`
                        flex flex-1
                        py-2
                        ${favoriteTab === MenuTabEnum.FAVORITES ? "bg-sidebar-active" : "bg-sidebar-dark"}
                        justify-center
                    `}
                    onClick={() => setTab(MenuTabEnum.FAVORITES)}
                >
                    {MenuTabEnum.FAVORITES}
                </div>
            </div>

            <ul className="flex flex-col">
                {menuItems.map((item) => (
                    <li key={item.name} className="p-2">
                        <div
                            className="flex justify-between items-center cursor-pointer hover:bg-sidebar-normal p-2 rounded"
                            onClick={() => handleToggle(item.name)}
                        >
                            <span>{item.name}</span>

                            {item.children && (
                                <span>{activeItem === item.name ? <HiChevronDown /> : <HiChevronRight />}</span>
                            )}
                        </div>

                    {item.children && activeItem === item.name && (
                        <ul className="ml-4">
                            {item.children.map((child) => (
                                <li key={child.name} className="p-2 hover:bg-sidebar-normal rounded">
                                    {child.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    </li>
                ))}
            </ul>
        </>
    );

}

export default SidebarItem;