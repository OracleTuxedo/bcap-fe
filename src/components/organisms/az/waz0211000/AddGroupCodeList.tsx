import { Dropdown, InputText } from '@/components/atoms';
import { dropdownOptionsInterface } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading';
import { SAZ02F111UInSub1Vo } from '@/dto';

export type GroupCodeMessageList = {
  biz_cd: string;
  msg_id: string;
  lang_clcd: string[];
  msg_nm: string[];
  data_stat_id: string;
};

export type GroupCodeList = {
  biz_cd: string;
  biz_ctgo_id: string;
  group_cd_id: string;
  data_stat_id: string;
  cd_expl: string;
};

export type messageList = {
  label: string;
  value: string;
};

export type addNewGroupCode = Pick<
  GroupCodeList,
  'biz_ctgo_id' | 'group_cd_id' | 'cd_expl' | 'data_stat_id'
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
  codeType?: string;
  groupCodeList?: GroupCodeList;
  groupCodeMessageList?: GroupCodeMessageList[];
}

export const AddGroupCodeList = ({ open, onClose }: AddGroupCodeListProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addNewGroupCode>();

  const onSubmit = async (value: addNewGroupCode) => {
    setLoading(true);
    try {
      // const data: SAZ02F111UInSub1Vo;

      // setload;
      console.log('value', value);
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
  `

  return (
    <div>
      {open && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
          <div className={`bg-white p-6 rounded shadow-lg w-[30rem]`}>
            <form className='flex flex-1 flex-col'>

              <div  className={containerStyle} >
                <label className={labelStyle} >System Division</label>
                <input
                  id="biz_ctgo_cd"
                  className={inputStyle}
                  type="text"
                  {...register('biz_ctgo_id', {
                    required: 'required',
                  })}
                />
                <label>
                  {errors['biz_ctgo_id'] ? errors['biz_ctgo_id'].message : ''}
                </label>
              </div>

              <div className={containerStyle}>
                <label className={labelStyle} >Grup Code</label>
                <input
                  id="group_cd_id"
                  className={inputStyle}
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
                <label className={labelStyle} >Group Code Name</label>
                <div>
                  {languageCode.map((item, index) => (
                    <div className={containerStyle} key={item.label + index}>
                      <label className={labelStyle} >{item.label}</label>
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
                <label className={labelStyle} >Use Status</label>
                <select className={inputStyle}
                  {...register('data_stat_id', {
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
                <label className={labelStyle} >Description</label>
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
