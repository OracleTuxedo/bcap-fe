import { Seo } from '@/components';
import { Navbar } from '@/components/organisms';
import { TabEnum } from '@/enums';
import { useState } from 'react';

enum MenuTabEnum {
    MENU = "Menus",
    FAVORITES = "Favorites",
}
interface MenuItem {
    name: string;
    children?: MenuItem[];
  }
  
  const menuItems: MenuItem[] = [
    { name: 'Merchant', children: [{ name: 'Merchant Info. Change History' }]},
  ];

const UiPage = () => {
    const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [favoriteTab, setFavoriteTab] = useState<MenuTabEnum>(MenuTabEnum.MENU);

    const handleToggle = (name: string) => {
      setActiveItem(activeItem === name ? null : name);
    };
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

return (
    <div className='flex flex-1 flex-col h-screen bg-danger-normal'>
        <Seo title="MAAS UI" />
        <Navbar activeTab={activeTab} setState={setActiveTab} />
        <div
            className={`
                flex
            `}
        >
            <div className={`bg-sidebar-normal text-white h-screen ${isCollapsed ? 'w-12' : 'w-60'} transition-width duration-300 p-0`}>
                <div className={`
                    flex flex-row
                    items-center
                `}>
                    {!isCollapsed && (
                    <div className="px-1">
                        <input
                            type="text"
                            placeholder="Search"
                            className={`
                                w-full
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
                            h-12 w-12
                            text-xl
                            hover:bg-sidebar-active
                        `}
                        onClick={toggleCollapse}
                    >
                    ☰
                    </button>
                </div>

                {!isCollapsed && 
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
            onClick={() => setFavoriteTab(MenuTabEnum.MENU)}
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
            onClick={() => setFavoriteTab(MenuTabEnum.FAVORITES)}
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
                        <span>{activeItem === item.name ? '▼' : '►'}</span>
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
                }

            </div>
            <div
                className={`
                    flex flex-1
                `}
            >content</div>
        </div>
    </div>
    );
};

export default UiPage;