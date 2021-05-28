import React, { useState } from "react";
import "./style.css";

let initTasks = [
  { id: 1, title: "do somthing", done: true },
  { id: 2, title: "check smartphone", done: false },
  { id: 3, title: "clear shoose", done: false },
];

const App = () => {
  const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState(initTasks);

  const changeTaskStatus = (el) => {
    console.log(el);
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
        <input type="text" value={newTask} onChange={enterNewTask} />
        <button onClick={addNewTask}>Add to task</button>
      </div>
      <div className="box">
        <ul className="tasks-list">
          {tasks.map((el) => (
            <li
              key={el.id}
              className={el.done ? "task-done" : ""}
              onClick={() => changeTaskStatus(el)}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
