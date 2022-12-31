import React, { createContext, useContext, useState } from 'react';

// Implement react context API to keep track the state of Navigation bar
const StateContext = createContext();

// define a initial state which is a simple object
// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

const [activeMenu, setActiveMenu] = useState(true);
export const ContextProvider = ({ children }) => (
  <div>
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      { children }
    </StateContext.Provider>
  </div>
);

// How to use the activeMenu inside of a sidebar or App component
export const useStateContext = () => useContext(StateContext);
