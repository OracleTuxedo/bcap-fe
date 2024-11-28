import { InputParameterWMC0302500 } from '@/features/mc/mc03/wmc0302500/InputParameter';
import { SMC03F054RInVo } from '@/service/mc/mc03/SMC03F054R';
import { ReactElement, useState } from 'react';

const WMC0302500 = () => {
  const [next_key_val, set_next_key_val] = useState<string>(' ');

  const onClickSearch = async (value: SMC03F054RInVo) => {
    console.log(value);

    // setLoading(() => true);
    // try {
    //   const listData = await callSMC03F054R({
    //     screenId,
    //     mid,
    //     startDate: queryDate.start,
    //     endDate: queryDate.end,
    //     pageSize,
    //   }).catch((err) => {
    //     throw new Error(err);
    //   });

    //   setOutVoSMC03F054R(listData);
    //   setLoading(() => false);
    // } catch (error) {
    //   setLoading(() => false);
    //   console.log(error);
    // }
  };

  return (
    <div>
      <InputParameterWMC0302500
        page_size={20}
        next_key_val={next_key_val}
        onClickSearch={onClickSearch}
      />
    </div>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
