import { Badge, Button, Container, Checkbox, Seo, Text } from '@/components';
import { SizeEnum, TextColorEnum } from '@/enums';
import { useState } from 'react';

const UiPage = () => {
    const [CheckboxState, setCheckboxState] = useState<boolean>(false);

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
                <Checkbox name='test' value={CheckboxState} onClickHandler={() => {setCheckboxState((prev) => !prev)}}/>
            </Container>
        </Container>
    );
};

export default UiPage;