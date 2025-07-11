/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [btnOpen, setBtnOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ btnOpen, setBtnOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context === undefined)
    throw new Error(
      "MenuContext is being used outside of the context provider",
    );

  return context;
};

export { useMenuContext, MenuProvider };
