import React from "react";
import TabComponent from "../TabComponent";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 0 20px;
  flex: 1;
`;

const taskHeight = 50;

const ContentComponent = ({
  tasks,
  activeTab,
  setActiveTab,
  changeTaskStatus,
  changeTaskStatusDelete,
}) => {
  return (
    <ContentWrapper>
      <TabComponent
        tasks={tasks}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab="all"
        tabTitle="All tasks"
        tabDescription="Here you can manage all tasks"
        taskListHeight={tasks.length * taskHeight}
      />

      <TabComponent
        tasks={tasks.filter((el) => {
          return !el.done && !el.delete;
        })}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab="todo"
        tabTitle="Todo tasks"
        tabDescription="Here you can manage tasks to be completed"
        taskListHeight={
          tasks.filter((el) => {
            return !el.done && !el.delete;
          }).length * taskHeight
        }
      />

      <TabComponent
        tasks={tasks.filter((el) => {
          return el.done && !el.delete;
        })}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab="done"
        tabTitle="Done tasks"
        tabDescription="Here you manage the tasks that you have already done"
        taskListHeight={
          tasks.filter((el) => {
            return el.done && !el.delete;
          }).length * taskHeight
        }
      />

      <TabComponent
        tasks={tasks.filter((el) => {
          return el.delete;
        })}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab="removed"
        tabTitle="Removed tasks"
        tabDescription="Here you can see the tasks that you have been removed"
        taskListHeight={
          tasks.filter((el) => {
            return el.delete;
          }).length * taskHeight
        }
      />
    </ContentWrapper>
  );
};

export default ContentComponent;
