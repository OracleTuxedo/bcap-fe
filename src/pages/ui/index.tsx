import { Badge, Button, Container, Checkbox, Seo, Text, Date } from '@/components';
import { SizeEnum, TextColorEnum } from '@/enums';
import { useState } from 'react';

const UiPage = () => {
    const [CheckboxState, setCheckboxState] = useState<boolean>(false);
    const [DateState, setDateState] = useState<string>('');

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
            </Container>
        </Container>
    );
};

export default UiPage;