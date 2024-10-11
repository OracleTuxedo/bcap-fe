import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import {
  buttonVariantEnum,
  labelVariantEnum,
  textFieldVariantEnum,
} from '@/enums';
import { BaseButton, InputDate, Label } from '@/components/atoms';
import { Header } from '@/components/molecules';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '8vw',
        margin: 0,
      }}
    >
      <Header title='Header' />
      <Label variant={labelVariantEnum.SUBTITLE1}>TEST</Label>
      <InputDate
        title="input"
        onChangeHandler={(e) => setDate(e.target.value)}
        date={date}
        variant={textFieldVariantEnum.OUTLINED}
      />
      <BaseButton
        title="search"
        variant={buttonVariantEnum.CONTAINED}
        onClickHandler={() => console.log('test')}
      />
    </Box>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Ui;
