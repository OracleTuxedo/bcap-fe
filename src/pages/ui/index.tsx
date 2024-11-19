import { Button, Dropdown, InputText, Loading } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, useState } from 'react';

const systemDivisionData : dropdownOptionsInterface[] = [
  {value : '', label : "All"},
  {value : 'SFA', label : 'SFA'},
  {value : 'MER', label : 'Merchant'},
  {value : 'MMP', label : 'MMP'},
  {value : 'TMS', label : 'TMS'},
  {value : 'WDS', label : 'WDS'},
  {value : 'AUT', label : 'Authorization'},
  {value : 'C&S', label : 'Clearing & Settlement'},
  {value : 'MET', label : 'Metering'},
  {value : 'ADM', label : 'Admin & Common'},
  {value : 'EXT', label : 'External'},
];

const useStatusData : dropdownOptionsInterface[] = [
  {value : '', label : "All"},
  {value : 'U', label : 'Valid'},
  {value : 'D', label : 'Not Valid'},
];

const UiPage = () => {
  const screenId = "WAZ0211000";
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
    console.log("SEARCH");
    console.log("groupCode", groupCode);
    console.log("groupCodeName", groupCodeName);
    console.log("systemDivision", systemDivision);
    console.log("useStatus", useStatus);
  };

  if (loading) {
    return(
      <Loading/>
    )
  } else {
    return (
      <MainLayout
        screenId='AZ0211000'
        screenName='Common Code Management'
        isFavorite={isFavorite}
        favoriteHandler={favoriteHandler}
      >
        <div
          id="content"
          className={`
            w-full
          `}
        >
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
              <div id='system-division'
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
                >System Division</label>
                <Dropdown name='system-division' options={systemDivisionData} value={systemDivision} onChangeHandler={(e) => setSystemDivision(e.target.value)} />
              </div>
              <div id='group-code'
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
                >Group Code</label>
                <InputText
                  name='group-code'
                  value={groupCode}
                  onChangeHandler={(e : ChangeEvent<HTMLInputElement>) => setGroupCode(e.target.value)}
                />
              </div>
              <div id='group-code-name'
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
                >Group Code Name</label>
                <InputText
                  name='group-code-name'
                  value={groupCodeName}
                  onChangeHandler={(e : ChangeEvent<HTMLInputElement>) => setGroupCodeName(e.target.value)}
                />
              </div>
              <div id='use-status'
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
                >Use Status</label>
                <Dropdown name='use-status' options={useStatusData} value={useStatus} onChangeHandler={(e) => setUseStatus(e.target.value)} />
              </div>
            </div>

            <div
              id="searchButton"
              className={`
                mx-2
              `}
            >
              <Button
                type={ButtonTypeEnum.DEFAULT}
                onClickHandler={onClickSearch}
                white
              >
                Search
              </Button>
            </div>
          </div>
  
        </div>
      </MainLayout>
    );
  }

};

export default UiPage;
