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
import products1 from './products1.png';
import Mango from './Mango.jpg';
import product7 from './product7.jpg';
import Loarding from './Loarding.jpg';
import Banana from './Banana.jpg';
import product1 from './product1.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    className="rounded-2xl py-1 px-2 text-white capitalize text-md md:ml-3"
    style={{ background: props.StatusBg }}
    type="button"
  >
    {props.Status}
  </button>
);

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

export const ordersGridData = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',

  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',

  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',

  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    width: '150',
    editType: 'numericedit',
    textAlign: 'Center',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    width: '120',
    textAlign: 'Center',

  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },

];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Brell',

    TotalAmount: 22.18,
    OrderItems: 'Pineapple',
    Location: 'CONGO',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: products1,

  },
  {
    OrderID: 345653,
    CustomerName: 'Noel-Yk',
    TotalAmount: 56.43,
    OrderItems: 'Mango',
    Location: 'Ivory Coast',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: Mango,

  },
  {
    OrderID: 390457,
    CustomerName: 'Rose',
    TotalAmount: 120,
    OrderItems: 'Candy Gucci',
    Location: 'Kentuky',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,

  },
  {
    OrderID: 38489,
    CustomerName: 'Augustin',
    TotalAmount: 2,
    OrderItems: 'Poultry',
    Location: 'Togo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/AgFS_AnimalScience_Poultry_5.jpg?itok=V-oEoeij',

  },
  {
    OrderID: 390457,
    CustomerName: 'Loarding',
    TotalAmount: 100,
    OrderItems: 'Loarding',
    Location: 'Loarding',
    Status: 'loarding...',
    StatusBg: '#03C9D7',
    ProductImage: Loarding,

  },
  {
    OrderID: 89389,
    CustomerName: 'Anita',
    TotalAmount: 14,
    OrderItems: 'Banana',
    Location: 'Brazil',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: Banana,

  },
  {
    OrderID: 79379,
    CustomerName: 'Victor',
    TotalAmount: 345,
    OrderItems: 'Healthcare Erbology',
    Location: 'Mexico',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,

  },
  {
    OrderID: 89379,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },

];
