import { Button, Header } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { ReactElement, useState } from 'react';

const onClickSearch = () => {
  console.log('test');
};

const handlerDownloadButton = () => {};

const WMC0302500 = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favoriteHandler = () => {
      setIsFavorite((prev) => !prev);
  };

  return (
    <MainLayout
      screenId='MC0302500'
      screenName='Merchant Info. Change History'
      isFavorite={isFavorite}
      favoriteHandler={favoriteHandler}
    >
      <div
        id='content'
        className={`
          bg-danger-normal
          w-full
        `}
      >
        <div
          id="search"
          className={`
            mx-2
            py-2
            flex flex-row
            border
            text-md
            justify-between
            bg-sidebar-active
          `}
        >
          <div id="input" className="flex">
            <div
              id="inputDate"
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
                >
                  Approval Date
                </label>

              <input
                type="date"
                className={`
                  mx-2
                  p-1
                  h-fit
                  border border-sidebar-normal
                  shadow-sm
                `}
              />

              <label
                className={`
                  mx-2
                `}
              >
                ~
              </label>

              <input
                type="date"
                className={`
                  mx-2
                  p-1
                  h-fit
                  border border-sidebar-normal
                  shadow-sm
                `}
              />

            </div>

            <div
              id="mid"
              className={`
                mx-2
                flex flex-row
                items-center
                font-medium
                text-gray-700
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                MID
              </label>
              
              <input
                type="search"
                className={`
                  mx-2
                  p-1
                  border border-sidebar-normal
                  shadow-sm
                `}
              />
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
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
