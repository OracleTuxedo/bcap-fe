import { Button, Dropdown, InputText, Loading } from '@/components';
import {
  AddGroupCodeList,
  addNewGroupCode,
} from '@/pages/az/waz0211000/AddGroupCodeList';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, useState } from 'react';
import { useForm, UseFormHandleSubmit } from 'react-hook-form';

const UiPage = () => {
  const screenId = 'WAZ0211000';
  const [loading, setLoading] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [groupCode, setGroupCode] = useState<string>('');
  const [groupCodeName, setGroupCodeName] = useState<string>('');
  const [systemDivision, setSystemDivision] = useState<string>('');
  const [useStatus, setUseStatus] = useState<string>('');

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const onClickSearch = async () => {
    console.log('SEARCH');
    console.log('groupCode', groupCode);
    console.log('groupCodeName', groupCodeName);
    console.log('systemDivision', systemDivision);
    console.log('useStatus', useStatus);
  };

  const [open, setOpen] = useState<boolean>(true);

  const handlerCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    console.log(open);

    setOpen(true);
  };

  const onSubmit = (data: addNewGroupCode) => {
    console.log(data);
    setOpen(false);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <MainLayout
        screenId="AZ0211000"
        screenName="Common Code Management"
        isFavorite={isFavorite}
        favoriteHandler={favoriteHandler}
      >
        <button onClick={() => handleOpenModal()}>open</button>
        <AddGroupCodeList
          open={open}
          onClose={handlerCloseModal}
          // onConfirm={onSubmit}
        />

        <div
          id="content"
          className={`
            w-full
          `}
        ></div>
      </MainLayout>
    );
  }
};

export default UiPage;
