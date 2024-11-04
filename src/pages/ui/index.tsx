import { Button, Container, Seo, Text } from '@/components';
import { BorderRadiusEnum } from '@/enums/tailwind.enum';

const UiPage = () => {

return (
        <Container>
            <Seo title="MAAS" />
            <div>MAAS Web Front End and UI Page</div>
            <Button>
                <Text>TEST</Text>
            </Button>
        </Container>
    );
};

export default UiPage;