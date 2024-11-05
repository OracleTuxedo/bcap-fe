import { Button, Container, Seo, Text } from '@/components';

const UiPage = () => {

return (
        <Container>
            <Seo title="MAAS" />
            <div>MAAS Web Front End and UI Page</div>
            <Button onClickHandler={() => console.log('button is pressed')}>
                <Text>TEST</Text>
            </Button>
        </Container>
    );
};

export default UiPage;