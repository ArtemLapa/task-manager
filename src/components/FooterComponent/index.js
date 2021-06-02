import React from "react";

const FooterComponent = ({
  isAddTaskFormOpen,
  setAddTaskFormOpen,
  newTask,
  enterNewTask,
  keyBoardHandler,
}) => {
  return (
    <div className={`footer ${isAddTaskFormOpen ? "active" : ""}`}>
      <div
        className="add__button__wrapper"
        onClick={() => {
          setAddTaskFormOpen(!isAddTaskFormOpen);
        }}
      >
        <span className="hr"></span>
        <span className={`hr ${isAddTaskFormOpen ? "" : "vr"}`}></span>
      </div>
      <div className="add__task__form__wrapper">
        <label /*for="task_input"*/>Add new task for today</label>
        <input
          id="task_input"
          type="text"
          placeholder="Enter smth here"
          value={newTask}
          onChange={enterNewTask}
          onKeyUp={keyBoardHandler}
        />
      </div>
    </div>
  );
};

export default FooterComponent;
