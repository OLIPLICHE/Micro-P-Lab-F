import React from 'react';
import {
  KanbanComponent, ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { kanbanGrid, kanbanData } from '../data/core';
import { Header } from '../components';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
  rounded-3xl"
  >
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      keyField="Status"
      enablePersistence="true"
      swimlaneSettings={{ keyField: 'Assignee' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => (<ColumnDirective key={index.id} {...item} />))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
