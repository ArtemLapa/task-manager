import React from "react";
import styled, { keyframes } from "styled-components";
import TaskElementComponent from "../TaskElementComponent";

const hide = (h) => keyframes`
  0% {
    height: ${h}px;
  }
  100% {
    height: 0;
  }
`;
const show = (h) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${h}px;
  }
`;

const TaskListWrapper = styled.div`
  margin: 10px 0px;
  animation: ${(props) => hide(props.taskListHeight)} 1s;
  animation-fill-mode: forwards;
  overflow: hidden;

  &.active {
    animation: ${(props) => show(props.taskListHeight)} 1s;
    animation-fill-mode: forwards;
  }
`;

const TaskListComponent = ({
  tasks,
  activeTab,
  changeTaskStatus,
  changeTaskStatusDelete,
  nameTab,
  taskListHeight,
}) => {
  return (
    <TaskListWrapper
      className={activeTab === nameTab ? "active" : ""}
      taskListHeight={taskListHeight}
    >
      <ul className="tasks__list">
        {tasks.map((el) => {
          const cssClass = el.delete ? "removed" : el.done ? "done" : "";
          return (
            <TaskElementComponent
              cssClass={cssClass}
              el={el}
              changeTaskStatus={changeTaskStatus}
              changeTaskStatusDelete={changeTaskStatusDelete}
            />
          );
        })}
      </ul>
    </TaskListWrapper>
  );
};

export default TaskListComponent;
