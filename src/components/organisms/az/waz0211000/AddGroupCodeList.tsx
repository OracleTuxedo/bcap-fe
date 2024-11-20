import { Dropdown } from '@/components/atoms';
import { dropdownOptionsInterface } from '@/types';
import { useState } from 'react';
import { useForm, UseFormHandleSubmit } from 'react-hook-form';

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

export const AddGroupCodeList = ({
  open,
  onClose,
  onConfirm,
}: AddGroupCodeListProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addNewGroupCode>();

  const onSubmit = (data: addNewGroupCode) => {
    console.log(data);
  };

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
