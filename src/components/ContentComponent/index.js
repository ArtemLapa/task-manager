import React from "react";
import TabComponent from "../TabComponent";

const ContentComponent = ({
  tasks,
  activeTab,
  setActiveTab,
  changeTaskStatus,
  changeTaskStatusDelete,
}) => {
  return (
    <div className="content">
      <TabComponent
        tasks={tasks}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        changeTaskStatus={changeTaskStatus}
        changeTaskStatusDelete={changeTaskStatusDelete}
        nameTab="all"
        tabTitle="All tasks"
        tabDescription="Here you can manage all tasks"
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
      />
    </div>
  );
};

export default ContentComponent;
