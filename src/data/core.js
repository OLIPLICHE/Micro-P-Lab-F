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
import { GrMoney, GrLocation } from 'react-icons/gr';
import { HiOutlineRefresh, HiOutlineUserGroup } from 'react-icons/hi';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { RiStockLine } from 'react-icons/ri';
import Banana from './images/Banana.jpg';
import tomato from './images/tomato.jpg';
import products1 from './images/products1.png';
import Mango from './images/Mango.jpg';
import product7 from './images/product7.jpg';
import Loarding from './images/Loarding.jpg';
import product1 from './images/product1.jpg';
import avatar3 from './images/good.jpg';
import owner from './images/owner.jpg';

const customerGridImage = (props) => (
  <div className="image flex gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="customer"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

// const dateValue = () => (
//   <div>
//     <DatePickerComponent
//       value={dateValue}
//       format="yyyy-MM-dd"
//       placeholder="Enter date"
//     />
//   </div>
// );

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
        name: 'calendar',
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
    OrderID: 10238,
    CustomerName: 'Brell',

    TotalAmount: 22.18,
    OrderItems: 'Pineapple',
    Location: 'CONGO',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: products1,

  },
  {
    OrderID: 345353,
    CustomerName: 'Noel-Yk',
    TotalAmount: 56.43,
    OrderItems: 'Mango',
    Location: 'Ivory Coast',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: Mango,

  },
  {
    OrderID: 390757,
    CustomerName: 'Rose',
    TotalAmount: 120,
    OrderItems: 'Candy Gucci',
    Location: 'Kentuky',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,

  },
  {
    OrderID: 88489,
    CustomerName: 'Augustin',
    TotalAmount: 2,
    OrderItems: 'Poultry',
    Location: 'Togo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/AgFS_AnimalScience_Poultry_5.jpg?itok=V-oEoeij',

  },
  {
    OrderID: 350457,
    CustomerName: 'Loarding',
    TotalAmount: 100,
    OrderItems: 'Loarding',
    Location: 'Loarding',
    Status: 'loarding...',
    StatusBg: '#03C9D7',
    ProductImage: Loarding,

  },
  {
    OrderID: 89381,
    CustomerName: 'Anita',
    TotalAmount: 14,
    OrderItems: 'Banana',
    Location: 'Brazil',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: Banana,

  },
  {
    OrderID: 79579,
    CustomerName: 'Victor',
    TotalAmount: 345,
    OrderItems: 'Healthcare Erbology',
    Location: 'Mexico',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,

  },
  {
    OrderID: 39375,
    CustomerName: 'canada',
    TotalAmount: 3450,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 69374,
    CustomerName: 'Amour',
    TotalAmount: 124,
    OrderItems: 'Headphone',
    Location: 'China',
    Status: 'Pending',
    StatusBg: '#FB9678',
    ProductImage: 'https://m.media-amazon.com/images/I/51JdBWMXfWL._AC_UF1000,1000_QL80_.jpg',

  },
  {
    OrderID: 49345,
    CustomerName: 'Sam',
    TotalAmount: 34,
    OrderItems: 'Night Lamp',
    Location: 'Ghana',
    Status: 'Canceled',
    StatusBg: '#FF5C8E',
    ProductImage: 'https://m.media-amazon.com/images/I/51ZIHj6kEaL.jpg',

  },
  {
    OrderID: 79875,
    CustomerName: 'Henry',
    TotalAmount: 50,
    OrderItems: 'Fresh Tomato',
    Location: 'Kentucky, USA',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: tomato,

  },
  {
    OrderID: 89375,
    CustomerName: 'Daniel',
    TotalAmount: 123,
    OrderItems: 'Bible KJV',
    Location: 'Ghana',
    Status: 'Active',
    StatusBg: '#03C9D7',
    ProductImage: 'https://m.media-amazon.com/images/I/91-D37-2VVL._AC_UF1000,1000_QL80_.jpg',

  },
  {
    OrderID: 89375,
    CustomerName: 'PAKA',
    TotalAmount: 34500,
    OrderItems: 'Toyota',
    Location: 'Mexico',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://news-site-za.s3.af-south-1.amazonaws.com/images/2023/07/hilux-rs.jpg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },
  {
    OrderID: 89375,
    CustomerName: 'canada',
    TotalAmount: 34500,
    OrderItems: 'Flight ticket',
    Location: 'Canada',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    ProductImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',

  },

];

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center',
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Title',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry,
  },
  // {
  //   field: 'HireDate',
  //   headerText: 'Hire Date',
  //   width: '135',
  //   format: 'yMd',
  //   textAlign: 'Right',
  // },
  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center',
  },

];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Augustin',
    Title: 'Sales Manager',
    HireData: new Date(8364186e5),
    Country: 'GHANA',
    ReportsTo: '3',
    EmployeeImage: owner,
  },
  {
    EmployeeID: 2,
    Name: 'Fuller',
    Title: 'Senior Engineer',
    HireData: new Date(713764800000),
    Country: 'CONGO-BZ',
    ReportsTo: '1',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 20,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 19,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 18,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 17,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 16,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 15,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 14,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 13,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 12,
    Name: 'Sharon',
    Title: 'Medical Doctor',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Luxin',
    Title: 'Head Master',
    HireData: '2021/02/21',
    Country: 'USA',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 4,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 5,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 5,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 7,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 8,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 9,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 10,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 11,
    Name: 'Naval',
    Title: 'Senior Engineer',
    HireData: '2021/02/21',
    Country: 'CONGO-BZ',
    ReportsTo: 'Paka',
    EmployeeImage: avatar3,
  },

];

export const CustomersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center',
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus,
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center',
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
];

export const CustomersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Frederic',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'France',
  },
  {
    CustomerID: 1002,
    CustomerName: 'Nancy',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Pending',
    StatusBg: '#FB9678',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1003,
    CustomerName: 'Elison',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Coasta',
  },
  {
    CustomerID: 1004,
    CustomerName: 'Eliza',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ukraine',
  },
  {
    CustomerID: 1005,
    CustomerName: 'Tabita',
    CustomerEmail: 'mio@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'CONGO',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Oli',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Canada',
  },
  {
    CustomerID: 1007,
    CustomerName: 'Akwesi',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ghana',
  },
  {
    CustomerID: 1008,
    CustomerName: 'Wintechson',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1009,
    CustomerName: 'Chacoson',
    CustomerEmail: 'mio@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Senegal',
  },
  {
    CustomerID: 1010,
    CustomerName: 'Tatison',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'uk',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Stock',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Canada',
  },
  {
    CustomerID: 1012,
    CustomerName: 'Frederic',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'France',
  },
  {
    CustomerID: 1013,
    CustomerName: 'Nell',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Pending',
    StatusBg: '#FB9678',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1014,
    CustomerName: 'Soso',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Coasta',
  },
  {
    CustomerID: 1015,
    CustomerName: 'Nelli',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ukraine',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Noel',
    CustomerEmail: 'mio@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'CONGO',
  },
  {
    CustomerID: 1017,
    CustomerName: 'Brell',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Canada',
  },
  {
    CustomerID: 1018,
    CustomerName: 'Tati',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Congo',
  },
  {
    CustomerID: 1019,
    CustomerName: 'Techson',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Hosting Press HTML',
    Status: 'Cancelled',
    StatusBg: '#FF5C8E',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1020,
    CustomerName: 'Koson',
    CustomerEmail: 'mio@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Venezuela',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Tison',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Germany',
  },
  {
    CustomerID: 1022,
    CustomerName: 'Stock',
    CustomerEmail: 'my@gmail.com',
    CustomerImage: avatar3,
    ProjectName: 'Building a virtual P',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'USA',
  },
];

export const scheduledate = [
  {
    Id: 1,
    Subject: 'Extradition of my dog',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 3,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 4,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 5,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 6,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 7,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 9,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 10,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 11,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 12,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 13,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 15,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 16,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 17,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 18,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 19,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 20,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 21,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 22,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 23,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 24,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 25,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 26,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 27,
    Subject: 'Extradition of my dog FROM John farmer',
    Location: 'Napoli',
    StartTime: '2020-09-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
];

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true,
  },
  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true,
  },
  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
  },
  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true,
  },
];

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 38483',
    Status: 'Open',
    Summary: 'Transfer the data back to the client',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02895B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 38484',
    Status: 'Open',
    Summary: 'Working on the new requirements and data collected FROM my client',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Peter Davloio',
    RankId: 1,
    Color: '#02895B',
    ClassName: 'e-story, e-low, e-peter-davloio',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 28483',
    Status: 'Open',
    Summary: 'Analyse The content and make a sum up',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Eloit',
    RankId: 1,
    Color: '#02823B',
    ClassName: 'e-story, e-low, e-eloit',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 28483',
    Status: 'Open',
    Summary: 'Improve Application Performance',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Eloit',
    RankId: 1,
    Color: '#02823B',
    ClassName: 'e-story, e-low, e-eloit',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 38483',
    Status: 'Open',
    Summary: 'Fixe the issue reported in the binding',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02895B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
];

export const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', 'Formats',
    'Alignments', 'OrderedList', 'UnorderedList', 'Outdent',
    'Indent', 'CreateLink', 'Image', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', 'Undo', 'Redo',
  ],
};

export const EditorSetting = {
  image: [
    'Replace', 'Align', 'Caption', 'Remove', 'InsertLink',
    'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink',
    'Display', 'AltText', 'Dimension',
  ],
};
