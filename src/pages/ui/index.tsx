import { Box } from '@mui/material';
import { InputDate } from '../../components/atoms/InputDate';
import { ReactElement } from 'react';
import { getToday } from '@/utils/date';
import { textFieldVariantEnum } from '@/enums';
const today: string = getToday();

const Ui = () => {
  return (
    <Box>
      <InputDate
        title="input"
        onChangeHandler={(e) => console.log(e.target.value)}
        date={today}
        variant={textFieldVariantEnum.FILLED}
      />
    </Box>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Ui;
