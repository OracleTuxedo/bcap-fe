import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import { buttonVariantEnum, textFieldVariantEnum } from '@/enums';
import { CustomButton, InputDate } from '@/components/atoms';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());

  return (
    <Box>
      <InputDate
        title="input"
        onChangeHandler={(e) => setDate(e.target.value)}
        date={date}
        variant={textFieldVariantEnum.FILLED}
      />
      <CustomButton
        title="search"
        variant={buttonVariantEnum.OUTLINED}
        onClickHandler={() => console.log('test')}
      />
    </Box>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Ui;
