import { dropdownOptionsInterface } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/organisms/Loading';
import { SAZ02F111UInSub1Vo, SAZ02F111UInSub2Vo, SAZ02F111UInVo } from '@/dto';
import { callSAZ02F111U } from '@/services';

export type GroupCodeMessageList = {
  biz_cd: string;
  msg_id: string;
  lang_clcd: string[];
  msg_nm: string[];
  data_stat_cd: string;
};

export type GroupCodeList = {
  biz_cd: string;
  biz_ctgo_cd: string;
  grup_cd_id: string;
  data_stat_cd: string;
  cd_expl: string;
};

export type messageList = {
  label: string;
  value: string;
};

export type addNewGroupCode = Pick<
  GroupCodeList,
  'biz_ctgo_cd' | 'grup_cd_id' | 'cd_expl' | 'data_stat_cd'
> &
  Pick<GroupCodeMessageList, 'msg_nm'>;

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
  onClose: () => void;
  screenId: string;
  codeType?: string;
  groupCodeList?: GroupCodeList;
  groupCodeMessageList?: GroupCodeMessageList[];
}

export const AddGroupCodeList = ({
  open,
  screenId,
  onClose,
}: AddGroupCodeListProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addNewGroupCode>();

  const onSubmit = async (value: addNewGroupCode) => {
    setLoading(true);
    try {
      const groupCodeList = new SAZ02F111UInSub1Vo();
      groupCodeList.biz_clcd = 'I';
      groupCodeList.biz_ctgo_cd = value.biz_ctgo_cd;
      groupCodeList.grup_cd_id = value.grup_cd_id;
      groupCodeList.data_stat_cd = value.data_stat_cd;
      groupCodeList.cd_expl = value.cd_expl;

      const groupCodeMessageEn = new SAZ02F111UInSub2Vo();
      groupCodeMessageEn.biz_clcd = 'I';
      groupCodeMessageEn.msg_id = value.biz_ctgo_cd + value.grup_cd_id;
      groupCodeMessageEn.lang_clcd = 'EN';
      groupCodeMessageEn.msg_nm = value.msg_nm[0];
      groupCodeMessageEn.data_stat_cd = value.data_stat_cd;

      const groupCodeMessageId = new SAZ02F111UInSub2Vo();
      groupCodeMessageId.biz_clcd = 'I';
      groupCodeMessageId.msg_id = value.biz_ctgo_cd + value.grup_cd_id;
      groupCodeMessageId.lang_clcd = 'ID';
      groupCodeMessageId.msg_nm = value.msg_nm[1];
      groupCodeMessageId.data_stat_cd = value.data_stat_cd;

      const inVo = new SAZ02F111UInVo();
      inVo.sub1_vos = [groupCodeList];
      inVo.sub2_vos = [groupCodeMessageEn, groupCodeMessageId];
      inVo.sub3_vos = null;
      inVo.sub4_vos = null;

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
                <label className={labelStyle}>System Division</label>
                <input
                  id="biz_ctgo_cd"
                  className={inputStyle}
                  type="text"
                  {...register('biz_ctgo_cd', {
                    required: 'required',
                  })}
                />
                <label>
                  {errors['biz_ctgo_cd'] ? errors['biz_ctgo_cd'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle}>Grup Code</label>
                <input
                  id="grup_cd_id"
                  className={inputStyle}
                  type="text"
                  {...register('grup_cd_id', {
                    required: 'required',
                  })}
                />
                <label>
                  {errors['grup_cd_id'] ? errors['grup_cd_id'].message : ''}
                </label>
              </div>

              <div>
                <label className={labelStyle}>Group Code Name</label>
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
