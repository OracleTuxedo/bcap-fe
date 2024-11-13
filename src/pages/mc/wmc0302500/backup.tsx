import { Button } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { ReactElement } from 'react';

const onClickSearch = () => {
  console.log('test');
};

const handlerDownloadButton = () => {};

const WMC0302500 = () => {
  return (
        <div
        id="body"
        className="relative border-box flex flex-col w-screen y-screen font-sans"
      >
        <div
          id="header"
          className="relative flex flex-row w-screen my-4 pb-2 border-b"
        >
          <div
            id="titleId"
            className="flex border-2 rounded-xl border-inherit justify-center items-center w-36 h-10 ml-12 text-white bg-[#2196F3] text-lg shadow-lg"
          >
            <p>MC0302500</p>
          </div>
          <div
            id="titleName"
            className="flex justify-center items-center w-64 h-10 text-lg"
          >
            <p>Merchant Info. Change History</p>
          </div>
        </div>
        <div
          id="content"
          className="relative flex flex-col w-screen my-2 mx-12 justify-center"
        >
          <div
            id="search"
            className="flex flex-row justify-between border rounded-md w-[95%] h-20 items-center text-lg bg-[#e8e8e8]"
          >
            <div id="input" className="flex basis-3/4">
              <div
                id="inputDate"
                className="block flex flex-row basis-1/2 items-center font-medium text-gray-700 ml-10"
              >
                <label className="mr-4">Approval Date</label>
                <input
                  type="date"
                  className="mt-1 block w-[12rem] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <label className="mx-2">~</label>
                <input
                  type="date"
                  className="mt-1 block w-[12rem] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div
                id="mid"
                className="block flex flex-row basis-1/2 mr-[10rem] items-center font-medium text-gray-700"
              >
                <label className="mr-2"> MID</label>
                <input
                  type="text"
                  className="mt-1 block w-[12rem] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div id="searchButton" className="mx-[4rem] px-12">
              <Button
                type={ButtonTypeEnum.DEFAULT}
                onClickHandler={onClickSearch}
              >
                Search
              </Button>
            </div>
          </div>
          <div
            id="list"
            className="relative flex flex-col justify-start border rounded-md w-[95%] h-[20rem] mt-8  text-lg"
          >
            <div id="table-header" className="flex flex-row justify-between mt-4">
              <label className="basis-1/2 ml-8">List</label>
              <div id="download-button" className="mx-4 px-12 ba">
                <Button
                  type={ButtonTypeEnum.SUCCESS}
                  onClickHandler={handlerDownloadButton}
                >
                  Download
                </Button>
              </div>
            </div>
            <table
              id="table-list"
              className="table-auto my-4 overflow-y-auto overflow-x-auto"
            >
              <thead>
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
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            id="detail-list"
            className="relative flex flex-col justify-start border rounded-md w-[95%] h-[20rem] mt-8  text-lg"
          >
            <label className="mt-4 ml-8">Detail List</label>
            <table
              id="table-detail-list"
              className="table auto my-4 overflow-x-auto"
            >
              <thead>
                <tr>
                  <th>Change Type</th>
                  <th>Old Value</th>
                  <th>New Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
