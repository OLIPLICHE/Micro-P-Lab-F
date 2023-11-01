import React from 'react';
// import { GridComponent, ColumnsDirective, CoumnDirective, Resize, Sort, ContextMenu,
// Filter, Page, ExcelEport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// Export { ordersData, contextMenuItems, ordersGrid } '../data/core';
import { Header } from '../components';

const Orders = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders" />
  </div>
);

export default Orders;
