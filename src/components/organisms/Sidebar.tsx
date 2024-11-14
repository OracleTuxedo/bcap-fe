
import { useState } from "react";
import { SidebarItem } from "../molecules";
import { HiOutlineBars3 } from "react-icons/hi2";

export interface SidebarInterface {}

export enum MenuTabEnum {
    MENU = "Menus",
    FAVORITES = "Favorites",
}

export interface MenuItem {
    name: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { name: 'Merchant', children: [{ name: 'Merchant Info. Change History' }]},
];

const Sidebar = () => {

    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [favoriteTab, setFavoriteTab] = useState<MenuTabEnum>(MenuTabEnum.MENU);

    const handleToggle = (name: string) => {
        setActiveItem(activeItem === name ? null : name);
    };

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            className={`
                bg-sidebar-normal
                text-white
                ${isCollapsed ? 'w-12' : 'w-60'}
                transition-width duration-300 p-0
            `}
        >
            <div
                className={`
                    flex flex-row
                    items-center
                `}
            >
                {!isCollapsed && (
                <div 
                    className={`
                        px-1
                    `}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        className={`
                            w-48
                            p-1
                            rounded
                            bg-sidebar-normal
                            focus:bg-sidebar-active
                            border border-1 border-sidebar-active
                            text-white
                        `}
                    />
                </div>
                )}

                <button
                    className={`
                        flex
                        h-12 w-12
                        text-xl
                        hover:bg-sidebar-active
                        justify-center items-center
                    `}
                    onClick={toggleCollapse}
                >
                    <HiOutlineBars3 />
                </button>
            </div>

            {!isCollapsed && 
                <SidebarItem
                    activeItem={activeItem}
                    favoriteTab={favoriteTab}
                    handleToggle={handleToggle}
                    menuItems={menuItems}
                    setTab={setFavoriteTab}
                />
            }

        </div>
    );

}

export default Sidebar;