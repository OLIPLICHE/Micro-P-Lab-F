import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Inject,
  Filter, Resize, Sort, Page, ExcelExport, PdfExport, Edit, ContextMenu,
} from '@syncfusion/ej2-react-grids';

// Export { ordersData, contextMenuItems, ordersGrid } '../data/core';
import { ordersData, ordersGridData } from '../data/core';
import { Header } from '../components';

const Orders = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders" />
    {/* Now we CREATE the table item using syncfusion */}
    <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {ordersGridData.map((item, index) => (<ColumnDirective key={index.id} {...item} />
        ))}
      </ColumnsDirective>
      <Inject service={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    </GridComponent>
  </div>
);

export default Orders;
