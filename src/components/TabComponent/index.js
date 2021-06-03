import React from "react";
import TaskElementComponent from "../TaskElementComponent";
import styled, { keyframes } from "styled-components";

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

const TabComponent = ({
  tasks,
  activeTab,
  setActiveTab,
  changeTaskStatus,
  changeTaskStatusDelete,
  nameTab,
  tabTitle,
  tabDescription,
  taskListHeight,
}) => {
  console.log(nameTab, taskListHeight);
  return (
    <div className={`tasks ${activeTab === nameTab ? "active" : ""}`}>
      <div
        className="tasks__tab__wrapper"
        onClick={() => {
          setActiveTab(nameTab);
        }}
      >
        <div className="title__wrapper">
          <div className="title">{tabTitle}</div>
          <div className="description">{tabDescription}</div>
        </div>
        <div className="task__counter">{tasks.length}</div>
      </div>
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
    </div>
  );
};

export default TabComponent;
