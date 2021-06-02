import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

const TaskElementComponent = ({
  cssClass,
  el,
  changeTaskStatus,
  changeTaskStatusDelete,
}) => {
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
};

export default TaskElementComponent;
