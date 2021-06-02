import React, { useState, useEffect } from "react";
import "./style.scss";

import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import ContentComponent from "../ContentComponent";

let initTasks = [];

const App = () => {
  const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState(initTasks);
  const [activeTab, setActiveTab] = useState("all");
  const [isAddTaskFormOpen, setAddTaskFormOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, title: "Wake up", done: true, delete: true },
        { id: 2, title: "Go to the bath", done: true, delete: false },
        { id: 3, title: "Make the breakfast", done: false, delete: false },
        { id: 4, title: "Brush your teeth", done: false, delete: false },
        { id: 5, title: "Dress your self", done: false, delete: false },
        { id: 6, title: "Take the laptop", done: false, delete: false },
      ]);
    }, 2000);
  }, []);

  const changeTaskStatus = (el) => {
    setTasks(
      tasks.map((item) =>
        item.id === el.id ? { ...item, done: !item.done } : item
      )
    );
  };

  const changeTaskStatusDelete = (el) => {
    setTasks(
      tasks.map((item) =>
        item.id === el.id ? { ...item, delete: !item.delete } : item
      )
    );
  };

  const enterNewTask = (e) => {
    setNewTasks(e.target.value);
  };

  const addNewTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, done: false }]);
    setNewTasks("");
  };

  const keyBoardHandler = (e) => {
    if (e.keyCode === 13) {
      addNewTask();
      setNewTasks("");
      setAddTaskFormOpen(false);
    }
    if (e.keyCode === 27) {
      setNewTasks("");
      setAddTaskFormOpen(false);
    }
  };

  return (
    <div className="device__wrapper">
      <div className="device">
        <HeaderComponent />

        <ContentComponent
          tasks={tasks}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          changeTaskStatus={changeTaskStatus}
          changeTaskStatusDelete={changeTaskStatusDelete}
        />

        <FooterComponent
          setAddTaskFormOpen={setAddTaskFormOpen}
          newTask={newTask}
          enterNewTask={enterNewTask}
          keyBoardHandler={keyBoardHandler}
          isAddTaskFormOpen={isAddTaskFormOpen}
        />
      </div>
    </div>
  );
};

export default App;
