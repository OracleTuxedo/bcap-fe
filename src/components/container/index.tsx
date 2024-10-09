import React, { ReactNode } from 'react';

type ContainerProps = {
    children : ReactNode;
}

export const Container : React.FC<ContainerProps> = ({
    children
}) => {
    return(
        <view>
            { children }
        </view>
    );
};