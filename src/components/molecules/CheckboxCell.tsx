import { Checkbox, Container, Text } from "../atoms";
import { CheckBoxInterface } from "../atoms/Checkbox";

export interface CheckboxCellInterface extends CheckBoxInterface {
    label : string;
}

const CheckboxCell = ({ label, name, onChangeHandler, value } : CheckboxCellInterface) => {
    return(
        <>
            <Container gap border>
                <Text>{label}</Text>
            </Container>
            <Container gap border>
                <Checkbox name={name} onChangeHandler={onChangeHandler} value={value} />
            </Container>
        </>
    )
}

export default CheckboxCell;