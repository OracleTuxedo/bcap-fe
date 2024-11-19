import { Button, Dropdown, InputText, Loading } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, useState } from 'react';

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
        <div
          id="content"
          className={`
            w-full
          `}
        >
        </div>
      </MainLayout>
    );
  }
};

export default UiPage;
