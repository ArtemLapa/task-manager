import React, { useState, useEffect } from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
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
    <div className="device__wrapper">
      <div className="device">
        <div className="header">
          <div className="iphone__x"></div>
          <h1>Hello, Artem</h1>
          <div className="greeting">Today, Sat 27 Jun</div>
        </div>

        <div className="content">
          <div className="tasks all__tasks active">
            <div className="tasks__tab__wrapper">
              <div className="title__wrapper">
                <div className="title">All tasks</div>
                <div className="description">Here you can manage all tasks</div>
              </div>
              <div className="task__counter">12</div>
            </div>

            <div className="tasks__list__wrapper show">
              <ul className="tasks__list">
                {tasks.map((el) => (
                  <li className="task__element" key={el.id}>
                    <FontAwesomeIcon icon={faSquare} />
                    <span className="task__text">{el.title}</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tasks todo__tasks">
            <div className="tasks__tab__wrapper">
              <div className="title__wrapper">
                <div className="title">Todo tasks</div>
                <div className="description">
                  Here you can manage tasks to be completed
                </div>
              </div>
              <div className="task__counter">10</div>
            </div>
          </div>

          <div className="tasks done__tasks">
            <div className="tasks__tab__wrapper">
              <div className="title__wrapper">
                <div className="title">Done tasks</div>
                <div className="description">
                  Here you manage the tasks that you have already done
                </div>
              </div>
              <div className="task__counter">1</div>
            </div>
          </div>

          <div className="tasks done__tasks">
            <div className="tasks__tab__wrapper">
              <div className="title__wrapper">
                <div className="title">Removed tasks</div>
                <div className="description">
                  Here you can see the tasks that you have been removed
                </div>
              </div>
              <div className="task__counter">1</div>
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
