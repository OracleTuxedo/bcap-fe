import { Box } from '@mui/material';
import { CustomContainer, InputDate } from '../../components/atoms';
import { ReactElement } from 'react';
import { getToday } from '@/utils/date';
import { textFieldVariantEnum } from '@/enums';
const today: string = getToday();

const Ui = () => {
  return (
    <CustomContainer>
      <InputDate
        title="input"
        onChangeHandler={(e) => console.log(e.target.value)}
        date={today}
        variant={textFieldVariantEnum.FILLED}
      />
    </CustomContainer>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Ui;
