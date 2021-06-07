import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { FooterStyledComponent } from "./index.styled";

const FooterComponent = ({
  isAddTaskFormOpen,
  setAddTaskFormOpen,
  newTask,
  enterNewTask,
  keyBoardHandler,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterStyledComponent
      className={isAddTaskFormOpen ? "active" : ""}
      addButtonWrapperBgColor={theme.addButtonWrapperBgColor}
      addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
      hrBgColor={theme.hrBgColor}
      inputUnderLineColor={theme.inputUnderLineColor}
      mainTextColor={theme.mainTextColor}
    >
      <div
        className="add__button__wrapper"
        onClick={() => {
          setAddTaskFormOpen(!isAddTaskFormOpen);
        }}
      >
        <span className="hr" />
        <span className={`hr ${isAddTaskFormOpen ? "" : "vr"}`} />
      </div>
      <div className="add__task__form__wrapper">
        <label>Add new task for today</label>
        <input
          id="task_input"
          type="text"
          placeholder="Enter smth here"
          value={newTask}
          onChange={enterNewTask}
          onKeyUp={keyBoardHandler}
        />
      </div>
    </FooterStyledComponent>
  );
};

export default FooterComponent;
