import { ReactNode } from 'react';

export interface BadgeInterface {
  children: ReactNode;
}

const Badge = ({ children }: BadgeInterface) => {
  return (
    <div
      className={`
                mx-2 my-1
                px-8 py-2
                rounded-lg
                bg-main-normal hover:bg-main-active
            `}
    >
      {children}
    </div>
  );
};

export default Badge;
