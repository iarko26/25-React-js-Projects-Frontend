import { createContext } from "react";

const UseThemeContext = createContext({
  thememode: "light",
  changeTheme: () => {}
});

export default UseThemeContext;