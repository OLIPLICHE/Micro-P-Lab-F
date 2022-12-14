import React from 'react';
// To switch from different pages and application
import { Link } from 'react-router-dom';
// import icons
import { GiWolfHowl } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';
// Popups syncfusion
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { links } from '../data/core';
const activeMenu = true;
const Sidebar = () => (
  <div className="ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10"
  >
    {activeMenu && (
    <>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={() => {}}
          className="items-center flex mt-4 gap-2 ml-2 text-xl
          font-bold tracking-tight dark:text-white
          text-slate-900"
        >
          <GiWolfHowl />
          <span>Sideba</span>
        </Link>
        <TooltipComponent
          content="Menu"
          position="BottomCenter"
        >
          <button
            type="button"
            onClick={() => {}}
            className="text-xl p-3 mt-2 md:hidden
            block hover:bg-light-gray"
          >
            <FaRegWindowClose />
          </button>
        </TooltipComponent>
      </div>
    </>
    )}
  </div>
);

export default Sidebar;
