import { dropdownOptionsInterface } from '@/types';
import { useState } from 'react';
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

export type addNewDetailCode = Pick<
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
export interface AddGroupCodeListProps {
  open: boolean;
  biz_ctgo_cd: string;
  grup_cd_id: string;
  onClose: () => void;
  screenId: string;
}

export const AddDetailCodeList = ({
  open,
  screenId,
  onClose,
}: AddGroupCodeListProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addNewDetailCode>();

  const onSubmit = async (value: addNewDetailCode) => {
    setLoading(true);
    try {
      const detailCodeList = new SAZ02F111UInSub3Vo();
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
      detailCodeMessageEn.biz_clcd = 'I';
      detailCodeMessageEn.msg_id =
        detailCodeList.cmmn_cd_id + detailCodeList.dtl_cd_id;
      detailCodeMessageEn.lang_clcd = 'EN';
      detailCodeMessageEn.msg_nm = value.msg_nm[0];
      detailCodeMessageEn.data_stat_cd = value.data_stat_cd;

      const detailCodeMessageId = new SAZ02F111UInSub4Vo();
      detailCodeMessageId.biz_clcd = 'I';
      detailCodeMessageId.msg_id =
        detailCodeList.cmmn_cd_id + detailCodeList.dtl_cd_id;
      detailCodeMessageId.lang_clcd = 'ID';
      detailCodeMessageId.msg_nm = value.msg_nm[1];
      detailCodeMessageId.data_stat_cd = value.data_stat_cd;

      const inVo = new SAZ02F111UInVo();
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
                  type="text"
                  {...register('cmmn_cd_id', {
                    required: 'required',
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
                  type="text"
                  {...register('dtl_cd_id', {
                    required: 'required',
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
                        id={`msg_nm_${index}`}
                        {...register(`msg_nm.${index}`, {
                          required: 'required',
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
                  type="text"
                  {...register('sort_req', {
                    required: 'required',
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
                  type="text"
                  {...register('cd_expl', {
                    required: 'required',
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
                  type="text"
                  {...register('clss_info_val1', {
                    required: 'required',
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
                  type="text"
                  {...register('clss_info_val2', {
                    required: 'required',
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
                  type="text"
                  {...register('clss_info_val3', {
                    required: 'required',
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