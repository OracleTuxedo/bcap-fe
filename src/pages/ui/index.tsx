import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import {
  buttonVariantEnum,
  iconEnum,
  labelVariantEnum,
  textFieldVariantEnum,
} from '@/enums';
import { BaseButton, Header, InputDate, InputText, InputTextSearch, Label, Seo } from '@/components';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());
  const [text, setText] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');

  return (
    <>
      <Seo title='MAAS UI' />
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
        <InputTextSearch
          title='InputTextSearch'
          onChangeHandler={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          variant={textFieldVariantEnum.FILLED}
          full
          icon={iconEnum.SEARCH}
        />
        <BaseButton
          title="Button"
          variant={buttonVariantEnum.CONTAINED}
          onClickHandler={() => console.log('button is pressed')}
        />
      </Box>
    </>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Ui;
