import React from "react";

import TaskElementComponent from "../TaskElementComponent";

const TabComponent = ({
  tasks,
  activeTab,
  setActiveTab,
  changeTaskStatus,
  changeTaskStatusDelete,
  nameTab,
  tabTitle,
  tabDescription,
}) => {
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
      <div
        className={`tasks__list__wrapper ${
          activeTab === nameTab ? "active" : ""
        }`}
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
      </div>
    </div>
  );
};

export default TabComponent;
