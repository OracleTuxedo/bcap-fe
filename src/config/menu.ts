export type MenuInfo = {
  alt: string;
  label: string;
  href?: string;
  subMenu?: MenuHashmap;
};

type MenuHashmap = {
  [key: string]: MenuInfo;
};

export type DomainHashmapContent = {
  label: string;
  default: string;
  menu: MenuHashmap;
};

export type DomainHashmap = {
  [key: string]: DomainHashmapContent;
};

export type DefaultHashmap = {
  [key: string]: string;
};

export const defaultMenu: DefaultHashmap = {
  DASHBOARD: 'DASHBOARD',
  MERCHANT: 'MERCHANT',
  AUTHORIZATION: 'AUTHORIZATION',
  CNS: 'CNS',
};

export const domainMenu: DomainHashmap = {
  DASHBOARD: {
    label: 'menu.dashboard',
    default: 'Dashboard',
    menu: {
      DASHBOARD: {
        alt: 'DSB',
        label: 'Dashboard',
        href: '/dashboard',
      },
    },
  },
  MERCHANT: {
    label: 'menu.merchant',
    default: 'Merchant',
    menu: {
      MERCHANTRISKMANAGEMENT: {
        alt: 'MRM',
        label: 'Merchant Risk Management',
        subMenu: {
          FRAUD: {
            alt: 'FR',
            label: 'Fraud',
            subMenu: {
              MERCHANTFRAUDMONITORING: {
                alt: 'MFN',
                label: 'Merchant Fraud Monitoring',
                href: '/merchant/merchant-risk-management/fraud/merchant-fraud-monitoring',
              },
            },
          },
        },
      },
    },
  },
};
