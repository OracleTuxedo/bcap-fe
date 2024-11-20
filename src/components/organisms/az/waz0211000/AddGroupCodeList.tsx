import { dropdownOptionsInterface } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading';
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
  biz_ctgo_id: string;
  group_cd_id: string;
  data_stat_cd: string;
  cd_expl: string;
};

export type messageList = {
  label: string;
  value: string;
};

export type addNewGroupCode = Pick<
  GroupCodeList,
  'biz_ctgo_id' | 'group_cd_id' | 'cd_expl' | 'data_stat_cd'
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
      groupCodeList.biz_ctgo_cd = value.biz_ctgo_id;
      groupCodeList.grup_cd_id = value.group_cd_id;
      groupCodeList.data_stat_cd = value.data_stat_cd;
      groupCodeList.cd_expl = value.cd_expl;

      const groupCodeMessageEn = new SAZ02F111UInSub2Vo();
      groupCodeMessageEn.biz_clcd = 'I';
      groupCodeMessageEn.msg_id = value.biz_ctgo_id + value.group_cd_id;
      groupCodeMessageEn.lang_clcd = 'EN';
      groupCodeMessageEn.msg_nm = value.msg_nm[0];
      groupCodeMessageEn.data_stat_cd = value.data_stat_cd;

      const groupCodeMessageId = new SAZ02F111UInSub2Vo();
      groupCodeMessageId.biz_clcd = 'I';
      groupCodeMessageId.msg_id = value.biz_ctgo_id + value.group_cd_id;
      groupCodeMessageId.lang_clcd = 'ID';
      groupCodeMessageId.msg_nm = value.msg_nm[1];
      groupCodeMessageId.data_stat_cd = value.data_stat_cd;

      const inVo = new SAZ02F111UInVo();
      inVo.sub1_vos = [groupCodeList];
      inVo.sub2_vos = [groupCodeMessageEn, groupCodeMessageId];

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

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[30rem]">
            <form>
              <div>
                <label>System Division</label>
                <input
                  id="biz_ctgo_cd"
                  className="border"
                  type="text"
                  {...register('biz_ctgo_id', {
                    required: 'required',
                  })}
                />
                <label>
                  {errors['biz_ctgo_id'] ? errors['biz_ctgo_id'].message : ''}
                </label>
              </div>
              <div>
                <label>Grup Code</label>
                <input
                  id="group_cd_id"
                  className="border"
                  type="text"
                  {...register('group_cd_id', {
                    required: 'required',
                  })}
                />
                <label>
                  {errors['group_cd_id'] ? errors['group_cd_id'].message : ''}
                </label>
              </div>
              <div>
                <label>Group Code Name</label>
                {languageCode.map((item, index) => (
                  <div key={item.label + index}>
                    <label>{item.label}</label>
                    <input
                      className="border"
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
              <div>
                <label>Use Status</label>
                <select
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
              <div>
                <label>Description</label>
                <input
                  id="cd_expl"
                  className="border"
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

            <div className="flex justify-end space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
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
