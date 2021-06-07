import React, { useContext, useReducer } from "react";
import { LOGIN_ACTION, LOGOUT_ACTION } from "./constans";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const initState = {
    isLogin: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case LOGIN_ACTION:
        return { ...state, isLogin: true };
      case LOGOUT_ACTION:
        return { ...state, isLogin: false };
      default:
        return { ...state, isLogin: false };
    }
  };

  const [state, dispach] = useReducer(reducer, initState);

  const loginAction = () => {
    return dispach({
      type: LOGIN_ACTION,
    });
  };

  const logoutAction = () => {
    console.log("LogoutAction");
    return dispach({
      type: LOGOUT_ACTION,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        loginAction,
        logoutAction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
