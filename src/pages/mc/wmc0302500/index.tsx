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

        <div
          id="list"
          className={`
            flex flex-col
            justify-start
            border
            h-72
            m-2
            text-lg
          `}
        >
          <div
            id="table-header"
            className={`
              mt-4
              flex flex-row
              justify-between
              items-center
            `}
          >

            <label
              className={`
                mx-8
              `}
            >
              List
            </label>

            <div 
              id="download-button"
              className={`
                px-8
              `}
            >

              <Button
                type={ButtonTypeEnum.SUCCESS}
                onClickHandler={handlerDownloadButton}
                white
              >
                Download
              </Button>

            </div>
          </div>

            <table
              id="table-list"
              className={`
                m-2
                table-fixed
                text-left
                text-wrap
                border-collapse
              `}
            >
              <thead
                className={`
                  bg-main-normal
                `}
              >
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>No</th>
                  <th>Apply Sequence No</th>
                  <th>MID</th>
                  <th>Request Date</th>
                  <th>Request PIC</th>
                  <th>Memo</th>
                  <th>Status</th>
                  <th>Authorization Status</th>
                  <th>Complete Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`
                    even:bg-main-active
                  `}
                >
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>1</td>
                  <td>1231251342</td>
                  <td>0980708679</td>
                  <td>14-11-2024</td>
                  <td>14-11-2024</td>
                  <td className={`text-wrap`}>This memo content</td>
                  <td>status value</td>
                  <td>auth status value</td>
                  <td>14-11-2024</td>
                </tr>
                <tr
                  className={`
                    even:bg-main-active
                  `}
                >
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>2</td>
                  <td>1231251342</td>
                  <td>0980708679</td>
                  <td>14-11-2024</td>
                  <td>14-11-2024</td>
                  <td className={`text-wrap`}>This memo content is long.</td>
                  <td>status value</td>
                  <td>auth status value</td>
                  <td>14-11-2024</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div
          id="detail-list"
          className={`
            flex flex-col
            justify-start
            border
            h-72
            m-2
            text-lg
          `}
        >
          <div
            id="table-header"
            className={`
              mt-4
              flex flex-row
              justify-between
              items-center
            `}
          >

            <label
              className={`
                mx-8
              `}
            >
              Detail List
            </label>
          </div>

            <table
              id="table-detail"
              className={`
                m-2
                table-fixed
                text-left
                text-wrap
                border-collapse
              `}
            >
              <thead
                className={`
                  bg-main-normal
                `}
              >
                <tr>
                  <th>Change Type</th>
                  <th>Old Value</th>
                  <th>New Value</th>
                </tr>
              </thead>
              <tbody>
              <tr
                  className={`
                    even:bg-main-active
                  `}
                >
                  <td>change</td>
                  <td>old</td>
                  <td>new</td>
                </tr>
                <tr
                  className={`
                    even:bg-main-active
                  `}
                >
                  <td>type</td>
                  <td>old</td>
                  <td>new</td>
                </tr>
              </tbody>
            </table>
        </div>

      </div>
    </MainLayout>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
