import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import {
  buttonVariantEnum,
  labelVariantEnum,
  textFieldVariantEnum,
} from '@/enums';
import { BaseButton, Header, InputDate, InputText, Label } from '@/components';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());
  const [text, setText] = useState<string>('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        margin: 0,
      }}
    >
      <Header title='Header' />
      <Label variant={labelVariantEnum.SUBTITLE1}>Label</Label>
      <InputDate
        title="DateInput"
        onChangeHandler={(e) => setDate(e.target.value)}
        date={date}
        variant={textFieldVariantEnum.OUTLINED}
      />
      <InputText
        title='TextInput'
        onChangeHandler={(e) => setText(e.target.value)}
        value={text}
        variant={textFieldVariantEnum.FILLED}
        full
      />
      <BaseButton
        title="Button"
        variant={buttonVariantEnum.CONTAINED}
        onClickHandler={() => console.log('button is pressed')}
      />
    </Box>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Ui;
