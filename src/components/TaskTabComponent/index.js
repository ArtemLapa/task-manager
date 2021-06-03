import React from "react";
import styled from "styled-components";

const TaskTabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .title__wrapper {
    .title {
      font-weight: bold;
      text-transform: uppercase;
    }

    .description {
      font-weight: 100;
      font-size: 12px;
    }
  }
`;

const TaskTabComponent = ({
  nameTab,
  tabTitle,
  tabDescription,
  setActiveTab,
  tasks,
}) => {
  return (
    <TaskTabWrapper
      onClick={() => {
        setActiveTab(nameTab);
      }}
    >
      <div className="title__wrapper">
        <div className="title">{tabTitle}</div>
        <div className="description">{tabDescription}</div>
      </div>
      <div className="task__counter">{tasks.length}</div>
    </TaskTabWrapper>
  );
};

export default TaskTabComponent;
