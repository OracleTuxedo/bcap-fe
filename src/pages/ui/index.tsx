import { Box, SelectChangeEvent } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import {
  buttonVariantEnum,
  iconEnum,
  labelVariantEnum,
  textFieldVariantEnum,
} from '@/enums';
import { BaseButton, Dropdown, Header, InputDate, InputRow, InputText, InputTextSearch, Label, Seo } from '@/components';
import { selectOption } from '@/types';
import { Search } from '@mui/icons-material';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());
  const [text, setText] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const selectOptions : selectOption[] = [
    {
      label : 'test 1',
      value : '1'
    },
    {
      label : 'test 2',
      value : '2'
    },
    {
      label : 'test 3',
      value : '3'
    },
    {
      label : 'test 4',
      value : '4'
    },
    {
      label : 'test 5',
      value : '5'
    },
  ]
  const [inputRowValue, setInputRowValue] = useState<string>('');

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
          id='date'
          title="DateInput"
          onChangeHandler={(e) => setDate(e.target.value)}
          date={date}
          variant={textFieldVariantEnum.OUTLINED}
        />
        <InputText
          id='InputText'
          onChangeHandler={(e) => setText(e.target.value)}
          value={text}
          variant={textFieldVariantEnum.OUTLINED}
          full
        />
        <InputTextSearch
          id='InputTextSearch'
          onChangeHandler={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          variant={textFieldVariantEnum.OUTLINED}
          full
          icon={<Search/>}
        />
        <Dropdown
          id='Dropdown'
          value={selectedOption}
          data={selectOptions}
          onChangeHandler={(event : SelectChangeEvent) => setSelectedOption(event.target.value)}
          full
        />
        <InputRow id='InputRow' name='Input Row' value={inputRowValue} onChangeHandler={(event) => setInputRowValue(event.target.value)} />
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
