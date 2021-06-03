import React from "react";
import TaskListComponent from "../TaskListComponent";
import TaskTabComponent from "../TaskTabComponent";
import styled from "styled-components";

const TabWrapper = styled.div`
  margin: 8px 0px;
  min-height: 90px;
  background-color: ${(props) => props.tabWrapperBgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px 0px ${(props) => props.tabWrapperShadowColor};
  cursor: pointer;
  transition: all 0.3s ease-in;

  &.active {
    cursor: default;
  }

  &:hover:not(.active) {
    transform: scale(1.04);
    transition: transform 0.3s ease-in;
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
  return (
    <TabWrapper className={activeTab === nameTab ? "active" : ""}>
      <TaskTabComponent
        tasks={tasks}
        nameTab={nameTab}
        tabTitle={tabTitle}
        tabDescription={tabDescription}
        setActiveTab={setActiveTab}
        tabWrapperBgColor="#fff"
        tabWrapperShadowColor="rgba(0, 0, 0, 0.125)"
      />
      <TaskListComponent
        tasks={tasks}
        activeTab={activeTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab={nameTab}
        taskListHeight={taskListHeight}
      />
    </TabWrapper>
  );
};

export default TabComponent;
