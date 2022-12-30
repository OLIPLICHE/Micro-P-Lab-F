import React from 'react';
import {
  AiOutlineShopping, AiOutlineTeam,
  AiOutlineAreaChart,
}
  from 'react-icons/ai';
import { FiEdit, FiPieChart, FiBarChart2 } from 'react-icons/fi';
import { BsKanban, BsCalendarDay } from 'react-icons/bs';
import { CgColorBucket } from 'react-icons/cg';
import { GiBallPyramid } from 'react-icons/gi';
import { MdOutlineBusinessCenter, MdMap, MdStackedLineChart } from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';
import { BiLineChart } from 'react-icons/bi';
import { GrMoney } from 'react-icons/gr';
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
