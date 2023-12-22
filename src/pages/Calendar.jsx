import React from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day,
//  Week, WorkWeek, Month, Agenda, Inject,
//   Resize, DragAndDrop } from '@Syncfusion/ej2-react-schedule';
// import { DatePickerComponent } from '@Syncfusion/ej2-react-calendars

import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
  Resize, DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { scheduledate } from '../data/core';
import { Header } from '../components';

const Calendar = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
  rounded-3xl"
  >
    <Header category="App" title="Calendar" />
    <ScheduleComponent
      height="650px"
      eventSettings={{ dataSource: scheduledate }}
      selectedDate={new Date(2020, 9, 10)}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda,
        Resize, DragAndDrop]}
      />
    </ScheduleComponent>
  </div>
);

export default Calendar;
