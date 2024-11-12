import { ReactNode } from "react";
import { Container, Text } from "../atoms";
import { HiCog8Tooth } from 'react-icons/hi2'

export interface InputCellInterface {
    label : string;
    required?: Boolean;
    children : ReactNode
}

const InputCell = ({
    label,
    required = false,
    children
} : InputCellInterface) => {

    return(
        <Container border row round>
            <div className={`
                flex
                flex-1
                bg-tertiary
                rounded-l
                justify-between
                px-1 py-1
            `}>
                <div>
                    {required &&
                        <HiCog8Tooth color="#DC2626" />
                    }
                </div>
                <Text>{label}</Text>
            </div>
            {children}
        </Container>
    );

}

export default InputCell;