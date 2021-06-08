import React, { useContext, useReducer } from "react";
import { SET_LOGIN_INPUT_VALUE } from "./constans";

const LoginContext = React.createContext();
LoginContext.displayName = "LoginContext";

const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = ({ children }) => {
  const initState = { email: "", password: "" };

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_LOGIN_INPUT_VALUE:
        return { ...state, [action.payload.key]: action.payload.value };
      default:
        return { ...state };
    }
  };

  const [state, dispach] = useReducer(reducer, initState);

  const setInputValue = (payload) =>
    dispach({
      type: SET_LOGIN_INPUT_VALUE,
      payload,
    });

  return (
    <LoginContext.Provider value={{ ...state, setInputValue }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, useLoginContext };
