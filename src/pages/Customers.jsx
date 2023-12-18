import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Page, Inject,
  Toolbar, Sort, Filter, Edit, Selection,
} from '@syncfusion/ej2-react-grids';

import { CustomersData, CustomersGrid } from '../data/core';
import { Header } from '../components';

const Customers = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    {/* Now we CREATE the table item using syncfusion */}
    <GridComponent
      dataSource={CustomersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width="auto"
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {CustomersGrid.map((item, index) => (<ColumnDirective key={index.id} {...item} />))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
    </GridComponent>
  </div>
);

export default Customers;
