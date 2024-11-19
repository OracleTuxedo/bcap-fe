import { Seo } from '@/components';
import { DataTable, DataTableProps } from '@/components/atoms/DataTable';
import { Navbar, Sidebar } from '@/components/organisms';
import { TabEnum } from '@/enums';
import { useState } from 'react';

type dataColumns = {
  id: string;
  name: string;
  age: string;
};

const UiPage = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.MERCHANT);

  const data: dataColumns[] = [
    { id: '1', name: 'Alice', age: '25' },
    { id: '2', name: 'Bob', age: '30' },
    { id: '3', name: 'John', age: '28' },
  ];

  const columns: DataTableProps<dataColumns>['columns'] = [
    {
      title: 'id',
      field: 'id',
    },
    {
      title: 'name',
      field: 'name',
    },
    {
      title: 'age',
      field: 'age',
    },
  ];

  const handleOnRowClick = (data: dataColumns) => {
    console.log(data);
  };

  return (
    <div
      className={`
            flex flex-1 flex-col
            h-screen
        `}
    >
      <Seo title="MAAS UI" />
      <Navbar activeTab={activeTab} setState={setActiveTab} />
      <div
        className={`
                flex flex-1 flex-row
            `}
      >
        <Sidebar />
        <DataTable
          data={data}
          columns={columns}
          handleOnRowClick={handleOnRowClick}
        />
        {/* <div
                className={`
                    flex flex-1
                `}
            >
                content
                
            </div> */}
      </div>
    </div>
  );
};

export default UiPage;
