import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Inject,
  Page, Search, Toolbar,
} from '@syncfusion/ej2-react-grids';

// Export { ordersData, contextMenuItems, ordersGrid, employeesData,employeesGrid }  '../data/core';
import { employeesData, employeesGrid } from '../data/core';
import { Header } from '../components';

const Employees = () => (

  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Employees" />
    {/* Now we CREATE the table item using syncfusion */}
    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {employeesGrid.map((item, index) => (<ColumnDirective key={index.id} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar]} />
    </GridComponent>
  </div>
);

export default Employees;
