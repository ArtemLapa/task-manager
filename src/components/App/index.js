import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { ThemeContext } from "../../store/ThemeContext";
import { UserContextProvider } from "../../store/UserContext";
import ChangeThemeButtonComponent from "../ChangeThemeButtonComponent";
import DeviceComponent from "../../components/DeviceComponent";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.containerBgGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.mainTextColor};
`;

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        isDarkMode,
        toggleTheme: setDarkMode,
      }}
    >
      <UserContextProvider>
        <Container
          containerBgGradientColor={selectedTheme.containerBgGradientColor}
          mainTextColor={selectedTheme.mainTextColor}
        >
          <ChangeThemeButtonComponent />

          <DeviceComponent />
        </Container>
      </UserContextProvider>
    </ThemeContext.Provider>
  );
};

export default App;
