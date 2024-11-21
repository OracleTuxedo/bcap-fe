import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/organisms/Loading';
import { SAZ02F111UInSub3Vo, SAZ02F111UInSub4Vo, SAZ02F111UInVo } from '@/dto';
import { callSAZ02F111U } from '@/services';

export type DetailCodeMessageList = {
  biz_cd: string;
  msg_id: string;
  lang_clcd: string[];
  msg_nm: string[];
  data_stat_cd: string;
};

export type DetailCodeList = {
  biz_clcd: string;
  cmmn_cd_id: string;
  dtl_cd_id: string;
  msg_nm: string;
  sort_req: number;
  data_stat_cd: string;
  clss_info_val1: string;
  clss_info_val2: string;
  clss_info_val3: string;
  cd_expl: string;
};

export type messageList = {
  label: string;
  value: string;
};

export type UpdateNewDetailCode = Pick<
  DetailCodeList,
  | 'cmmn_cd_id'
  | 'dtl_cd_id'
  | 'sort_req'
  | 'data_stat_cd'
  | 'clss_info_val1'
  | 'clss_info_val2'
  | 'clss_info_val3'
  | 'cd_expl'
> &
  Pick<DetailCodeMessageList, 'msg_nm'>;

const useStatusData: dropdownOptionsInterface[] = [
  { value: 'U', label: 'Valid' },
  { value: 'D', label: 'Not Valid' },
];

const languageCode: messageList[] = [
  {
    label: 'English',
    value: 'EN',
  },
  { label: 'Bahasa Indonesia', value: 'ID' },
];
export interface UpdateGroupCodeListProps {
  open: boolean;
  biz_ctgo_cd: string;
  grup_cd_id: string;
  onClose: () => void;
  screenId: string;
  data : UpdateNewDetailCode;
}

export const UpdateDetailCodeList = ({
  open,
  screenId,
  onClose,
  data,
}: UpdateGroupCodeListProps) => {
  console.log('data', data);
  const [loading, setLoading] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<UpdateNewDetailCode>(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateNewDetailCode>({
    defaultValues: {
      cmmn_cd_id: updateValue.cmmn_cd_id,
      cd_expl : updateValue.cd_expl,
      data_stat_cd : updateValue.data_stat_cd,
      dtl_cd_id : updateValue.dtl_cd_id,
      sort_req : updateValue.sort_req,
      msg_nm : updateValue.msg_nm,
      clss_info_val1 : updateValue.clss_info_val1,
      clss_info_val2 : updateValue.clss_info_val2,
      clss_info_val3 : updateValue.clss_info_val3,
    },
  });

  const onSubmit = async (value: UpdateNewDetailCode) => {
    setLoading(true);
    try {
      const detailCodeList = new SAZ02F111UInSub3Vo();
      detailCodeList.biz_clcd = 'U';
      detailCodeList.cmmn_cd_id = value.cmmn_cd_id;
      detailCodeList.dtl_cd_id = value.dtl_cd_id;
      detailCodeList.msg_nm = '';
      detailCodeList.sort_req = value.sort_req;
      detailCodeList.data_stat_cd = value.data_stat_cd;
      detailCodeList.clss_info_val1 = value.clss_info_val1;
      detailCodeList.clss_info_val2 = value.clss_info_val2;
      detailCodeList.clss_info_val3 = value.clss_info_val3;
      detailCodeList.cd_expl = value.cd_expl;

      const detailCodeMessageEn = new SAZ02F111UInSub4Vo();
      detailCodeMessageEn.biz_clcd = 'U';
      detailCodeMessageEn.msg_id =  detailCodeList.cmmn_cd_id + detailCodeList.dtl_cd_id;
      detailCodeMessageEn.lang_clcd = 'EN';
      detailCodeMessageEn.msg_nm = value.msg_nm[0];
      detailCodeMessageEn.data_stat_cd = value.data_stat_cd;

      const detailCodeMessageId = new SAZ02F111UInSub4Vo();
      detailCodeMessageId.biz_clcd = 'U';
      detailCodeMessageId.msg_id =  detailCodeList.cmmn_cd_id + detailCodeList.dtl_cd_id;
      detailCodeMessageId.lang_clcd = 'ID';
      detailCodeMessageId.msg_nm = value.msg_nm[1];
      detailCodeMessageId.data_stat_cd = value.data_stat_cd;

      const inVo = new SAZ02F111UInVo();
      inVo.sub1_vos = null;
      inVo.sub2_vos = null;
      inVo.sub3_vos = [detailCodeList];
      inVo.sub4_vos = [detailCodeMessageEn, detailCodeMessageId];

      await callSAZ02F111U(inVo, screenId).catch((err) => {
        throw new Error(err);
      });
      setLoading(false);
      onClose();
    } catch (err: unknown) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const containerStyle = `
    flex flex-row
    justify-between
    my-1
  `;

  const labelStyle = `
    flex flex-1
    mx-2
    items-center
  `;

  const inputStyle = `
    mx-2 p-1
    flex flex-1
    border border-sidebar-normal
    shadow-sm
  `;

  return (
    <div>
      {open && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div className={`bg-white p-6 rounded shadow-lg w-[30rem]`}>
            <form className="flex flex-1 flex-col">
              <div className={containerStyle}>
                <label className={labelStyle}>Group Code ID</label>
                <input
                  id="cmmn_cd_id"
                  className={inputStyle}
                  value={updateValue.cmmn_cd_id}
                  type="text"
                  {...register('cmmn_cd_id', {
                    required: 'required',
                    onChange: (e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, cmmn_cd_id : e.target.value}))
                  })}
                />
                <label>
                  {errors['cmmn_cd_id'] ? errors['cmmn_cd_id'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Detail Code ID</label>
                <input
                  id="dtl_cd_id"
                  className={inputStyle}
                  value={updateValue.dtl_cd_id}
                  type="text"
                  {...register('dtl_cd_id', {
                    required: 'required',
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, dtl_cd_id : e.target.value}))
                  })}
                />
                <label>
                  {errors['dtl_cd_id'] ? errors['dtl_cd_id'].message : ''}
                </label>
              </div>

              <div>
                <label className={labelStyle}>Code Name</label>
                <div>
                  {languageCode.map((item, index) => (
                    <div className={containerStyle} key={item.label + index}>
                      <label className={labelStyle}>{item.label}</label>
                      <input
                        className={inputStyle}
                        type="text"
                        value={updateValue.msg_nm[index]}
                        id={`msg_nm_${index}`}
                        {...register(`msg_nm.${index}`, {
                          required: 'required',
                          onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => {
                              const updatedMsgNm = [...prev.msg_nm];
                              updatedMsgNm[index] = e.target.value;
                              return {...prev, msg_nm : updatedMsgNm}
                          })
                        })}
                      />
                      <label>
                        {errors['msg_nm'] ? errors['msg_nm'].message : ''}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Sort No</label>
                <input
                  id="sort_req"
                  className={inputStyle}
                  value={updateValue.sort_req}
                  type="text"
                  {...register('sort_req', {
                    required: 'required',
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, sort_req : +e.target.value}))
                  })}
                />
                <label>
                  {errors['sort_req'] ? errors['sort_req'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Use Status</label>
                <select
                  className={inputStyle}
                  value={updateValue.data_stat_cd}
                  {...register('data_stat_cd', {
                    required: 'required',
                  })}
                >
                  {useStatusData.map((item, index) => (
                    <option key={item.label + index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <label>
                  {errors['data_stat_id'] ? errors['data_stat_id'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Description</label>
                <input
                  id="cd_expl"
                  className={inputStyle}
                  value={updateValue.cd_expl}
                  type="text"
                  {...register('cd_expl', {
                    required: 'required',
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, cd_expl : e.target.value}))
                  })}
                />
                <label>
                  {errors['cd_expl'] ? errors['cd_expl'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Ext 1</label>
                <input
                  id="clss_info_val1"
                  className={inputStyle}
                  value={updateValue.clss_info_val1}
                  type="text"
                  {...register('clss_info_val1', {
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, clss_info_val1 : e.target.value}))
                  })}
                />
                <label>
                  {errors['clss_info_val1']
                    ? errors['clss_info_val1'].message
                    : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Ext 2</label>
                <input
                  id="clss_info_val2"
                  className={inputStyle}
                  value={updateValue.clss_info_val2}
                  type="text"
                  {...register('clss_info_val2', {
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, biz_ctgo_id : e.target.value}))
                  })}
                />
                <label>
                  {errors['clss_info_val2']
                    ? errors['clss_info_val2'].message
                    : ''}
                </label>
              </div>
              <div className={containerStyle}>
                <label className={labelStyle}>Display Option</label>
                <input
                  id="clss_info_val3"
                  className={inputStyle}
                  value={updateValue.clss_info_val3}
                  type="text"
                  {...register('clss_info_val3', {
                    required: 'required',
                    onChange:(e: ChangeEvent<HTMLInputElement>) => setUpdateValue((prev) => ({...prev, clss_info_val3 : e.target.value}))
                  })}
                />
                <label>
                  {errors['clss_info_val3']
                    ? errors['clss_info_val3'].message
                    : ''}
                </label>
              </div>
            </form>

            <div className={`flex justify-end space-x-2`}>
              <button
                onClick={onClose}
                className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400`}
              >
                Close
              </button>
              <button
                onClick={handleSubmit(onSubmit)}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
