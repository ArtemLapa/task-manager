import React from "react";
import { theme } from "../theme/index";

const ThemeContext = React.createContext({
  theme: theme.dark,
  isDarkMode: true,
  toggleTheme: () => {},
});
ThemeContext.displayName = "ThemeContext";

export { ThemeContext };
