import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const ButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 16px;
  top: 16px;
  color: ${(props) => props.mainBorderColor};
  background-color: ${(props) => props.buttonBgColor};
  border: 1px solid ${(props) => props.mainBorderColor};
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ChangeThemeButtonComponent = () => {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <ButtonWrapper
      mainBorderColor={theme.mainBorderColor}
      buttonBgColor={theme.buttonBgColor}
      onClick={() => {
        toggleTheme(!isDarkMode);
      }}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="fa" />
    </ButtonWrapper>
  );
};

export default ChangeThemeButtonComponent;
