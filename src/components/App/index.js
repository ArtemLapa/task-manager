import React, { useState, useEffect } from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

let initTasks = [];

const App = () => {
  // const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState(initTasks);
  const [activeTab, setActiveTab] = useState("all");

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

  // const enterNewTask = (e) => {
  //   setNewTasks(e.target.value);
  // };

  // const addNewTask = () => {
  //   setTasks([...tasks, { id: tasks.length + 1, title: newTask, done: false }]);
  //   setNewTasks("");
  // };

  return (
    <div className="device__wrapper">
      <div className="device">
        <div className="header">
          <div className="iphone__x"></div>
          <h1>Hello, Artem</h1>
          <div className="greeting">Today, Sat 27 Jun</div>
        </div>

        <div className="content">
          <div
            className={`tasks all__tasks ${
              activeTab === "all" ? "active" : ""
            }`}
          >
            <div
              className="tasks__tab__wrapper"
              onClick={() => {
                setActiveTab("all");
              }}
            >
              <div className="title__wrapper">
                <div className="title">All tasks</div>
                <div className="description">Here you can manage all tasks</div>
              </div>
              <div className="task__counter">{tasks.length}</div>
            </div>
            <div
              className={`tasks__list__wrapper ${
                activeTab === "all" ? "show" : ""
              }`}
            >
              <ul className="tasks__list">
                {tasks.map((el) => {
                  const cssClass = el.delete
                    ? "removed"
                    : el.done
                    ? "done"
                    : "";
                  return (
                    <li className={`task__element ${cssClass}`} key={el.id}>
                      <FontAwesomeIcon
                        icon={el.done ? faCheckSquare : faSquare}
                        className="fa"
                        onClick={() => changeTaskStatus(el)}
                      />
                      <span className="task__text">{el.title}</span>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="fa"
                        onClick={() => changeTaskStatusDelete(el)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className={`tasks todo__tasks ${
              activeTab === "todo" ? "active" : ""
            }`}
          >
            <div
              className="tasks__tab__wrapper"
              onClick={() => {
                setActiveTab("todo");
              }}
            >
              <div className="title__wrapper">
                <div className="title">Todo tasks</div>
                <div className="description">
                  Here you can manage tasks to be completed
                </div>
              </div>
              <div className="task__counter">
                {
                  tasks.filter((el) => {
                    return !el.done && !el.delete;
                  }).length
                }
              </div>
            </div>
            <div
              className={`tasks__list__wrapper ${
                activeTab === "todo" ? "show" : ""
              }`}
            >
              <ul className="tasks__list">
                {tasks
                  .filter((el) => {
                    return !el.done && !el.delete;
                  })
                  .map((el) => {
                    const cssClass = el.delete
                      ? "removed"
                      : el.done
                      ? "done"
                      : "";
                    return (
                      <li className={`task__element ${cssClass}`} key={el.id}>
                        <FontAwesomeIcon
                          icon={el.done ? faCheckSquare : faSquare}
                          className="fa"
                          onClick={() => changeTaskStatus(el)}
                        />
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="fa"
                          onClick={() => changeTaskStatusDelete(el)}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div
            className={`tasks done__tasks ${
              activeTab === "done" ? "active" : ""
            }`}
          >
            <div
              className="tasks__tab__wrapper"
              onClick={() => {
                setActiveTab("done");
              }}
            >
              <div className="title__wrapper">
                <div className="title">Done tasks</div>
                <div className="description">
                  Here you manage the tasks that you have already done
                </div>
              </div>
              <div className="task__counter">
                {
                  tasks.filter((el) => {
                    return el.done && !el.delete;
                  }).length
                }
              </div>
            </div>
            <div
              className={`tasks__list__wrapper ${
                activeTab === "done" ? "show" : ""
              }`}
            >
              <ul className="tasks__list">
                {tasks
                  .filter((el) => {
                    return el.done && !el.delete;
                  })
                  .map((el) => {
                    const cssClass = el.delete
                      ? "removed"
                      : el.done
                      ? "done"
                      : "";
                    return (
                      <li className={`task__element ${cssClass}`} key={el.id}>
                        <FontAwesomeIcon
                          icon={el.done ? faCheckSquare : faSquare}
                          className="fa"
                          onClick={() => changeTaskStatus(el)}
                        />
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="fa"
                          onClick={() => changeTaskStatusDelete(el)}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div
            className={`tasks removed__tasks ${
              activeTab === "removed" ? "active" : ""
            }`}
          >
            <div
              className="tasks__tab__wrapper"
              onClick={() => {
                setActiveTab("removed");
              }}
            >
              <div className="title__wrapper">
                <div className="title">Removed tasks</div>
                <div className="description">
                  Here you can see the tasks that you have been removed
                </div>
              </div>
              <div className="task__counter">
                {
                  tasks.filter((el) => {
                    return el.delete;
                  }).length
                }
              </div>
            </div>
            <div
              className={`tasks__list__wrapper ${
                activeTab === "removed" ? "show" : ""
              }`}
            >
              <ul className="tasks__list">
                {tasks
                  .filter((el) => {
                    return el.delete;
                  })
                  .map((el) => {
                    const cssClass = el.delete
                      ? "removed"
                      : el.done
                      ? "done"
                      : "";
                    return (
                      <li className={`task__element ${cssClass}`} key={el.id}>
                        <FontAwesomeIcon
                          icon={el.done ? faCheckSquare : faSquare}
                          className="fa"
                          onClick={() => changeTaskStatus(el)}
                        />
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="fa"
                          onClick={() => changeTaskStatusDelete(el)}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="add__button__wrapper">
            <span className="hr"></span>
            <span className="hr vr"></span>
          </div>
          <div className="add__task__form__wrapper">
            <label /*for="task_input"*/>Add new task for today</label>
            <input id="task_input" type="text" placeholder="Enter smth here" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
