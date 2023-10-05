import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, Inject, Legend, StackingColumnSeries,
  Tooltip, Category, SeriesDirective,
} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/core';

const Stacked = ({ width, height }) => (
  <div>
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index.id} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>
);

export default Stacked;
