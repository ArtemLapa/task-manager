import React from "react";

const TabHeader = ({
  tasks,
  tabTitle,
  tabDescription,
  nameTab,
  setActiveTab,
}) => {
  return (
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
  );
};

export default TabHeader;
