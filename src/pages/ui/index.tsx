import { Button, InputText, Loading } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { ChangeEvent, useState } from 'react';

const UiPage = () => {
  const screenId = "WAZ0211000";
  const [loading, setLoading] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [groupCode, setGroupCode] = useState<string>('');
  const [groupCodeName, setGroupCodeName] = useState<string>('');

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const onClickSearch = async () => {
    console.log("SEARCH");
    console.log("groupCode", groupCode);
    console.log("groupCodeName", groupCodeName);
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
                <input name='system-division'/>
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
                <input name='use-status' />
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
