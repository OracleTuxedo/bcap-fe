import { Badge, Button, Container, Checkbox, Seo, Text, Date, Input } from '@/components';
import { CheckboxCell } from '@/components/molecules';
import { InputTypeEnum, SizeEnum, TextColorEnum } from '@/enums';
import { useState } from 'react';

const UiPage = () => {
    const [CheckboxState, setCheckboxState] = useState<boolean>(false);
    const [CheckboxCellState, setCheckboxCellState] = useState<boolean>(false);
    const [DateState, setDateState] = useState<string>('');
    const [InputState, setInputState] = useState<string>('');

return (
        <Container>
            <Seo title="MAAS UI" />
            <Container>
                <Text>MAAS Web Front End and UI Page</Text>
                <Button onClickHandler={() => console.log('button is pressed')}>
                    <Text color={TextColorEnum.WHITE} size={SizeEnum.NORMAL}>TEST</Text>
                </Button>
                <Badge>
                    <Text>Tester</Text>
                </Badge>
                <Checkbox name='test' value={CheckboxState} onChangeHandler={() => {setCheckboxState((prev) => !prev)}}/>
                <Date name='date-test' value={DateState} onChangeHandler={(e : React.FormEvent<HTMLInputElement>) => setDateState(e.currentTarget.value)} />
                <Input name='input-test' type={InputTypeEnum.TEXT} value={InputState} onChangeHandler={(e : React.FormEvent<HTMLInputElement>) => setInputState(e.currentTarget.value)} />
            </Container>
            <CheckboxCell label='Test Checkbox' name='test-checkbox' onChangeHandler={() => {setCheckboxCellState((prev) => !prev)}} value={CheckboxCellState} />
        </Container>
    );
};

export default UiPage;