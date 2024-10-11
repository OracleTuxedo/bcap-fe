import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import { buttonVariantEnum, textFieldVariantEnum } from '@/enums';
import { CustomButton, InputDate } from '@/components/atoms';
import Header from '@/components/molucules/header';

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
      <Header />
      <InputDate
        title="input"
        onChangeHandler={(e) => setDate(e.target.value)}
        date={date}
        variant={textFieldVariantEnum.OUTLINED}
      />
      <CustomButton
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
