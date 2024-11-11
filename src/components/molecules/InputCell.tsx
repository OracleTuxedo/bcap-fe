import { ReactNode } from "react";
import { Container, Text } from "../atoms";

export interface InputCellInterface {
    label : string;
    children : ReactNode
}

const InputCell = ({ label, children} : InputCellInterface) => {
    return(
        <Container border row round>
            <div className={`
            flex
            flex-1
            justify-end
            bg-tertiary
            rounded-l
            `}>
                <Text>{label}</Text>
            </div>
            {children}
        </Container>
    )
}

export default InputCell;