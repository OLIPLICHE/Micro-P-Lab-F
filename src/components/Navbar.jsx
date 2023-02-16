/* eslint-disable react/prop-types */
import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification4Line } from 'react-icons/ri';
// import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { Cart, Chat } from '.';
// import { UserProfile } from '.';
import owner from '../data/owner.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({
  title, customFunc, icon, color, dotColor,
}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { handleClick, setActiveMenu } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<CgMenuGridR />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification4Line />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hoher:bg-light-gray rounded-lg "
        >
          <TooltipComponent
            content="Profile"
            position="BottomCenter"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full"
              alt="owner"
              src={owner}
            />
            <p>
              <span className="text-zinc-900 text-14">Hello,</span>
              {' '}
              <span className="text-zinc-900 font-bold ml-1 text-14">
                Paka
              </span>
            </p>
          </TooltipComponent>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
