import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import { buttonVariantEnum, labelVariantEnum, textFieldVariantEnum } from '@/enums';
import { CustomButton, InputDate, Label } from '@/components/atoms';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());

  return (
    <Box>
      <Label variant={labelVariantEnum.SUBTITLE1}>TEST</Label>
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
