import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);
  const [toggleCreateShop, setToggleCreateShop] = useState(false);

  // User -----------------------start-------------------------------------
  const [user, setUser] = useState(null);
  // User -----------------------end---------------------------------------

  // Cart ----------------------start--------------------------------------
  const [cart, setCart] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // Cart ----------------------end----------------------------------------

  // Theme -----------------------start------------------------------------
  const [theme, setTheme] = useState("light");

  function changeTheme(theme) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  // Theme -----------------------end------------------------------------

  return (
    <GlobalContext.Provider
      value={{
        changeTheme,
        toggleLogin,
        setToggleLogin,
        toggleSignup,
        setToggleSignup,
        toggleCreateShop,
        setToggleCreateShop,
        cart,
        setCart,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);
export default useGlobalContext;
