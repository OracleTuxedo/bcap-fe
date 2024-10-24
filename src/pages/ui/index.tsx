import { Box, SelectChangeEvent } from '@mui/material';
import { ReactElement, useState } from 'react';
import { getToday } from '@/utils/date';
import {
  ButtonVariantEnum,
  LabelVariantEnum,
  TextFieldVariantEnum,
} from '@/enums';
import {
  BaseButton,
  Dropdown,
  Header,
  InputDate,
  InputRow,
  InputText,
  InputTextSearch,
  Label,
  Seo,
} from '@/components';
import { selectOption } from '@/types';
import { Search } from '@mui/icons-material';
import PopupHeader from '@/components/molecules/PopupHeader';
import { PM0202201 } from '@/components/organism/mc02/pmc0202201';

const Ui = () => {
  const [date, setDate] = useState<string>(getToday());
  const [text, setText] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const selectOptions: selectOption[] = [
    {
      label: 'test 1',
      value: '1',
    },
    {
      label: 'test 2',
      value: '2',
    },
    {
      label: 'test 3',
      value: '3',
    },
    {
      label: 'test 4',
      value: '4',
    },
    {
      label: 'test 5',
      value: '5',
    },
  ];
  const [inputRowValue, setInputRowValue] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Seo title="MAAS UI" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          margin: 0,
        }}
      >
        <Header
          screenId="MC0201100"
          title="Merchant Registration"
          isFavorite={isFavorite}
          onClickHandler={favoriteHandler}
        />
        <PopupHeader title="MCC Code Search" />
        <Label variant={LabelVariantEnum.SUBTITLE1}>Label</Label>
        <InputDate
          id="date"
          title="DateInput"
          onChangeHandler={(e) => setDate(e.target.value)}
          date={date}
          variant={TextFieldVariantEnum.OUTLINED}
        />
        <InputText
          id="InputText"
          onChangeHandler={(e) => setText(e.target.value)}
          value={text}
          variant={TextFieldVariantEnum.OUTLINED}
        />
        <InputTextSearch
          id="InputTextSearch"
          onChangeHandler={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          variant={TextFieldVariantEnum.OUTLINED}
          icon={<Search />}
        />
        <Dropdown
          id="Dropdown"
          value={selectedOption}
          data={selectOptions}
          onChangeHandler={(event: SelectChangeEvent) =>
            setSelectedOption(event.target.value)
          }
        />
        <InputRow
          id="InputRow"
          name="Input Row"
          value={inputRowValue}
          onChangeHandler={(event) => setInputRowValue(event.target.value)}
        />
        <BaseButton
          title="Button"
          variant={ButtonVariantEnum.CONTAINED}
          onClickHandler={() => handleOpenModal()}
        />
        <PM0202201
          open={openModal}
          mccCode={selectOptions}
          inquiryType={selectOptions}
          onSearch={() => console.log('searching test')}
          onCancel={() => handleCloseModal()}
        />
      </Box>
    </>
  );
};

Ui.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Ui;
