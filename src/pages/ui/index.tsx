import { Badge, Button, Container, Seo, Text } from '@/components';
import { SizeEnum, TextColorEnum } from '@/enums';

const UiPage = () => {

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
            </Container>
        </Container>
    );
};

export default UiPage;