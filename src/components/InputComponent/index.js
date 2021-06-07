import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/ThemeContext";
import { useLoginContext } from "../../store/LoginContext";

const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.inputUnderLineColor};
  height: 20px;
  background-color: transparent;
  color: ${(props) => props.mainTextColor};
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const InputComponent = ({ type, placeholder, name }) => {
  const { theme } = useContext(ThemeContext);
  const loginData = useLoginContext();
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      name={name}
      inputUnderLineColor={theme.mainBorderColor}
      addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
      mainTextColor={theme.mainTextColor}
      value={loginData[name]}
      onChange={(e) =>
        loginData.setInputValue({ key: name, value: e.target.value })
      }
    />
  );
};

export default InputComponent;
