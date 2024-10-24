import { BaseButton, Dropdown, Label } from '@/components/atoms';
import PopupHeader from '@/components/molecules/PopupHeader';
import { ButtonVariantEnum } from '@/enums';
import { selectOption } from '@/types';
import { Box, Fade, Modal, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

// type tableData = {
//   brand: string;
//   mccCode: string;
//   mccCodeName: string;
//   codeDefinition: string;
// };

type pm0202201Props = {
  inquiryType: selectOption[];
  mccCode: selectOption[];
  open: boolean;
  // data: tableData;
  onSearch: () => void;
  // onSave: () => void;
  onCancel?: () => void;
};

export const PM0202201 = ({
  inquiryType,
  mccCode,
  open,
  // data,
  onSearch,
  // onSave,
  onCancel,
}: pm0202201Props) => {
  const [selectMccTypeOption, setSelectMccTypeOption] = useState<string>('');
  const [selectInquiryTypeOption, setSelectInquiryTypeOption] =
    useState<string>('');
  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Box
          sx={{
            // borderRadius: '28px',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '48em',
            height: 'wrap-content',
            background: '#ECE6F0',
            boxShadow: 12,
            // p: 3,
          }}
        >
          <PopupHeader title="MCC Code Search" onClickHandler={onCancel} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              bgcolor: '#645F5F80',
              justifyItems: 'right',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '0.5em',
              }}
            >
              <Label>Inquiry Type</Label>
              <Dropdown
                id="inquiryType"
                data={inquiryType}
                value={selectInquiryTypeOption}
                onChangeHandler={(e: SelectChangeEvent) =>
                  setSelectInquiryTypeOption(e.target.value)
                }
              />
            </Box>
            <Box>
              <Label>MCC Code</Label>
              <Dropdown
                id="mccType"
                data={mccCode}
                value={selectMccTypeOption}
                onChangeHandler={(e: SelectChangeEvent) =>
                  setSelectMccTypeOption(e.target.value)
                }
              />
            </Box>
            <Box
              sx={{
                marginLeft: 'auto',
                alignContent: 'center',
                marginRight: '2em',
              }}
            >
              <BaseButton
                title="Search"
                variant={ButtonVariantEnum.CONTAINED}
                onClickHandler={onSearch}
              />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
