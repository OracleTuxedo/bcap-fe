import { CustomButton, Date, InputText } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { SMC03F054RInVo } from '@/service/mc/mc03/SMC03F054R';
import { DateValue } from '@nextui-org/react';
import { useState } from 'react';

type InputParameterWMC0302500Props = {
  onClickSearch: (value: SMC03F054RInVo) => void;
  next_key_val: string;
  page_size: number;
};

export const InputParameterWMC0302500 = ({
  onClickSearch,
  next_key_val,
  page_size,
}: InputParameterWMC0302500Props) => {
  const [mid, setMid] = useState<string>('');
  const [std_date, set_std_date] = useState<string>('');
  const [end_date, set_end_date] = useState<string>('');
  const [apfm_pgrs_stat_cd, set_apfm_pgrs_stat_cd] =
    useState<string>('70');

  const onChangeStartDate = (e: DateValue) => {
    const value = `${e.year}${e.month}${e.day}`;
    set_std_date(value);
  };

  const onChangeEndDate = (e: DateValue) => {
    const value = `${e.year}${e.month}${e.day}`;
    set_end_date(value);
  };

  const searchHandler = () => {
    const value = new SMC03F054RInVo();
    value.apfm_pgrs_stat_cd = apfm_pgrs_stat_cd;
    value.mid = mid;
    value.std_date = std_date;
    value.end_date = end_date;
    value.page_size = page_size;
    value.next_key_val = next_key_val;

    onClickSearch(value);
  };

  return (
    <div
      id="search"
      className={`
            mx-2 py-2
            flex flex-row
            border
            text-md
            justify-between
            bg-sidebar-active
          `}
    >
      <div id="input" className="flex">
        <div
          id="inputDate"
          className={`
                flex flex-row
                font-medium
                items-center
              `}
        >
          <label
            className={`
                  mx-2
                `}
          >
            Approval Date
          </label>
          <Date name="start date" onChangeHandler={onChangeStartDate} />
          <div>~</div>
          <Date name="start date" onChangeHandler={onChangeEndDate} />
        </div>

        <div
          id="mid"
          className={`
                mx-2
                flex
                items-center
                font-medium
              `}
        >
          <InputText
            name="mid"
            label="MID"
            value={mid}
            onChangeHandler={(e) => setMid(e.target.value)}
          />
        </div>
      </div>

      <div
        id="searchButton"
        className={`
              mx-2
            `}
      >
        <CustomButton
          type={ButtonTypeEnum.DEFAULT}
          onClickHandler={searchHandler}
        >
          Search
        </CustomButton>
      </div>
    </div>
  );
};
