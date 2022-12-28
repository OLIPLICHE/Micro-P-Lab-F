import React from 'react';
// To switch from different pages and application
import { Link, NavLink } from 'react-router-dom';
// import icons
import { GiWolfHowl } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';
// Popups syncfusion
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/core';

const activeMenu = true;
const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
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
            className="text-xl p-3 mt-4 md:hidden
            block hover:bg-light-gray"
          >
            <FaRegWindowClose />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10">
        {/* Loop over the Links */}
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={() => { }}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </>
    )}
  </div>
);

export default Sidebar;
