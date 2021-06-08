import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/ThemeContext";
import { useUserContext } from "../../store/UserContext";
import { authUser } from "../../services/authService";
import { useLoginContext } from "../../store/LoginContext";

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
  const { loginAction } = useUserContext();
  const loginData = useLoginContext();

  const loginHandler = async () => {
    try {
      const result = await authUser({
        email: loginData.email,
        password: loginData.password,
      });
      console.log(result);
      loginAction();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ButtonWrapper
      onClick={loginHandler}
      tabWrapperBgColor={theme.containerBgColor}
      tabWrapperShadowColor={theme.tabWrapperShadowColor}
      mainTextColor={theme.mainTextColor}
    >
      {children}
    </ButtonWrapper>
  );
};

export default ButtonComponent;
