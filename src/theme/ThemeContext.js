import React from "react";
import { theme } from "./index";

const ThemeContext = React.createContext({
  theme: theme.dark,
  isDarkMode: true,
});
ThemeContext.displayName = "ThemeContext";

export { ThemeContext };
