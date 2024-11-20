import { ReactNode } from 'react';

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <div
            className={`
                flex flex-1
            `}
        >
            {children}
        </div>
    );
};