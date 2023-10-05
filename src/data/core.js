import React from 'react';
import {
  AiOutlineShopping, AiOutlineTeam,
  AiOutlineAreaChart,
}
  from 'react-icons/ai';
import {
  FiEdit, FiPieChart, FiBarChart2,
} from 'react-icons/fi';
import { BsKanban, BsCalendarDay } from 'react-icons/bs';
import { FcSalesPerformance } from 'react-icons/fc';
import { CgColorBucket } from 'react-icons/cg';
import { GiBallPyramid } from 'react-icons/gi';
import {
  MdOutlineBusinessCenter, MdMap, MdStackedLineChart,
} from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';
import { BiLineChart, BiPackage } from 'react-icons/bi';
import { GrMoney } from 'react-icons/gr';
import { HiOutlineRefresh, HiOutlineUserGroup } from 'react-icons/hi';
// import { RiStockLine } from 'react-icons/ri';

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <MdOutlineBusinessCenter />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShopping />,
      },
      {
        name: 'employees',
        icon: <AiOutlineTeam />,
      },
      {
        name: 'customers',
        icon: <FaPeopleCarry />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendra',
        icon: <BsCalendarDay />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <CgColorBucket />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <BiLineChart />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },
      {
        name: 'bar',
        icon: <FiBarChart2 />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <GrMoney />,
      },
      {
        name: 'color-mapping',
        icon: <MdMap />,
      },
      {
        name: 'pyramid',
        icon: <GiBallPyramid />,
      },
      {
        name: 'stacked',
        icon: <MdStackedLineChart />,
      },
    ],
  },
];

export const profitData = [
  {
    icon: <HiOutlineUserGroup />,
    amount: '68,245',
    percentage: '-4%',
    title: 'Customers',
    inconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BiPackage />,
    amount: '2,345',
    percentage: '+19%',
    title: 'Product',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FcSalesPerformance />,
    amount: '3,345',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '40,345',
    percentage: '-8%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 115.2 },
    { x: 'Feb', y: 134.1 },
    { x: 'Jan', y: 139.6 },
    { x: 'Jan', y: 151.1 },
    { x: 'Jan', y: 161.3 },
    { x: 'Jan', y: 165.1 },
    { x: 'Jan', y: 169.9 },
  ],
  [
    { x: 'Jan', y: 115.2 },
    { x: 'Feb', y: 134.1 },
    { x: 'Jan', y: 139.6 },
    { x: 'Jan', y: 151.1 },
    { x: 'Jan', y: 161.3 },
    { x: 'Jan', y: 165.1 },
    { x: 'Jan', y: 169.9 },
  ],
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const pieChart = [
  { x: '2020', y: 18, text: '30%' },
  { x: '2020', y: 18, text: '20%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2020', y: 18, text: '25%' },
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTckLines: { width: 0 },
  minorTckLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};
