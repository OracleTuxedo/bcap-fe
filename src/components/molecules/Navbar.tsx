import { DomainHashmap, MenuInfo } from '@/config/menu';
import { useState } from 'react';

type NavbarMenuProps = {
  domainName: string;
  isNavbarHover: boolean;
  extractedInfo: DomainHashmap;
};

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
  domainName,
  isNavbarHover,
  extractedInfo,
}) => {
  const [activeHref, setActiveHref] = useState<string>('');

  const domainMenu: { [key: string]: MenuInfo } = {};

  if (extractedInfo && domainName) {
    const tolowercasedDomainName = domainName.toLowerCase();

    for (const menuKey in extractedInfo) {
    }
  }
};
