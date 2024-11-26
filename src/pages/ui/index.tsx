import {
  Badge,
  Container,
  Checkbox,
  Seo,
  Text,
  Date,
  InputText,
  CustomButton,
} from '@/components';
import { InputCell } from '@/components/molecules';
import { InputTypeEnum, SizeEnum, TextColorEnum } from '@/enums';
import { DateValue } from '@nextui-org/react';
import { useState } from 'react';

const UiPage = () => {
  const [CheckboxState, setCheckboxState] = useState<boolean>(false);
  const [CheckboxCellState, setCheckboxCellState] =
    useState<boolean>(false);
  const [DateState, setDateState] = useState<string>('');
  const [InputState, setInputState] = useState<string>('');
  const [InputCellState, setInputCellState] = useState<string>('');

  return (
    <Container>
      <Seo title="MAAS UI" />
      <Container>
        <Text>MAAS Web Front End and UI Page</Text>

        <CustomButton
          onClickHandler={() => console.log('button is pressed')}
        >
          <Text color={TextColorEnum.WHITE} size={SizeEnum.NORMAL}>
            TEST
          </Text>
        </CustomButton>

        <Badge>
          <Text>Tester</Text>
        </Badge>

        <Checkbox
          name="test"
          value={CheckboxState}
          onChangeHandler={() => {
            setCheckboxState((prev) => !prev);
          }}
        />

        <Date
          name="date-test"
          value={DateState}
          onChangeHandler={(e: DateValue) => console.log(e)}
        />

        <InputText
          name="input-test"
          type={InputTypeEnum.TEXT}
          value={InputState}
          onChangeHandler={(e: React.FormEvent<HTMLInputElement>) =>
            setInputState(e.currentTarget.value)
          }
        />

        <Container gap>
          <InputCell label="Test Checkbox" required>
            <Checkbox
              name="test-checkbox-cell"
              onChangeHandler={() => {
                setCheckboxCellState((prev) => !prev);
              }}
              value={CheckboxCellState}
            />
          </InputCell>

          <InputCell label="Test Input">
            <InputText
              name="input-test-cell"
              type={InputTypeEnum.TEXT}
              value={InputCellState}
              onChangeHandler={(e: React.FormEvent<HTMLInputElement>) =>
                setInputCellState(e.currentTarget.value)
              }
            />
          </InputCell>
        </Container>
      </Container>
    </Container>
  );
};

export default UiPage;
