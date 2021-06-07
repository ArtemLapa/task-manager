import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/ThemeContext";

const ButtonWrapper = styled.button`
  border: none;
  padding: 16px;
  cursor: pointer;
  background-color: ${(props) => props.tabWrapperBgColor};
  box-shadow: 0px 2px 6px 0px ${(props) => props.tabWrapperShadowColor};
  color: ${(props) => props.mainTextColor};
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const ButtonComponent = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ButtonWrapper
      tabWrapperBgColor={theme.tabWrapperBgColor}
      tabWrapperShadowColor={theme.tabWrapperShadowColor}
      mainTextColor={theme.mainTextColor}
    >
      {children}
    </ButtonWrapper>
  );
};

export default ButtonComponent;
