import React from "react";
import styled from "styled-components";
// import { ThemeContext } from "../../theme/ThemeContext";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";

const ContentWrapper = styled.div`
  padding: 0 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1Wrapper = styled.h1`
  margin: 24px 0;
  text-align: center;
`;

const InputBlockWrapper = styled.div`
  margin: 0 0 16px;
  &:last-child {
    margin: 0 0 24px;
  }
`;

const LoginPageComponent = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <ContentWrapper>
      <H1Wrapper>Login to Task Manager</H1Wrapper>

      <InputBlockWrapper>
        <InputComponent
          type="email"
          placeholder="Enter your email"
          name="email"
        />
      </InputBlockWrapper>

      <InputBlockWrapper>
        <InputComponent
          type="password"
          placeholder="Enter your password"
          name="password"
        />
      </InputBlockWrapper>

      <ButtonComponent>Login</ButtonComponent>
    </ContentWrapper>
  );
};

export { LoginPageComponent };
