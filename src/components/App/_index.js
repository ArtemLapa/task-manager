import React, { useState, useEffect } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

let initTasks = [];

const App = () => {
  const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState(initTasks);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, title: "do somthing", done: true, delete: true },
        { id: 2, title: "check smartphone", done: true, delete: false },
        { id: 3, title: "clear shoose", done: false, delete: false },
      ]);
    }, 2000);
  }, []);

  const changeTaskStatus = (el) => {
    // console.log(el);
    setTasks(
      tasks.map((item) =>
        item.id === el.id ? { ...item, done: !item.done } : item
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

  return (
    <div className="container">
      <div className="box">
        <ul className="tabs-select">
          <li
            className={`tab-select-item ${activeTab === "all" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("all");
            }}
          >
            All
          </li>
          <li
            className={`tab-select-item ${
              activeTab === "todo" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("todo");
            }}
          >
            ToDo
          </li>
          <li
            className={`tab-select-item ${
              activeTab === "done" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("done");
            }}
          >
            Done
          </li>
          <li
            className={`tab-select-item ${
              activeTab === "delete" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("delete");
            }}
          >
            Delete
          </li>
        </ul>
      </div>

      <div className="box">
        <input type="text" value={newTask} onChange={enterNewTask} />
        <button onClick={addNewTask}>Add to task</button>
      </div>

      {activeTab === "all" && (
        <div className="box">
          <ul className="tasks-list all">
            {tasks.length ? (
              tasks.map((el) => (
                <li
                  key={el.id}
                  onClick={() => changeTaskStatus(el)}
                  className={el.delete ? "task-delete" : ""}
                >
                  <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare} />{" "}
                  {el.title} <FontAwesomeIcon icon={faTrash} />
                </li>
              ))
            ) : (
              <div>Task not found</div>
            )}
          </ul>
        </div>
      )}

      {activeTab === "todo" && (
        <div className="box">
          <ul className="tasks-list todo">
            {tasks
              .filter((el) => {
                return !el.done && !el.delete;
              })
              .map((el) => (
                <li
                  key={el.id}
                  onClick={() => changeTaskStatus(el)}
                  className={el.delete ? "task-delete" : ""}
                >
                  <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare} />{" "}
                  {el.title} <FontAwesomeIcon icon={faTrash} />
                </li>
              ))}
          </ul>
        </div>
      )}

      {activeTab === "done" && (
        <div className="box">
          <ul className="tasks-list done">
            {tasks
              .filter((el) => {
                return el.done && el.delete;
              })
              .map((el) => (
                <li
                  key={el.id}
                  onClick={() => changeTaskStatus(el)}
                  className={el.delete ? "task-delete" : ""}
                >
                  <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare} />{" "}
                  {el.title} <FontAwesomeIcon icon={faTrash} />
                </li>
              ))}
          </ul>
        </div>
      )}

      {activeTab === "delete" && (
        <div className="box">
          <ul className="tasks-list delete">
            {tasks
              .filter((el) => {
                return el.delete;
              })
              .map((el) => (
                <li
                  key={el.id}
                  onClick={() => changeTaskStatus(el)}
                  className={el.delete ? "task-delete" : ""}
                >
                  <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare} />{" "}
                  {el.title} <FontAwesomeIcon icon={faTrash} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
