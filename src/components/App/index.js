import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import ContentComponent from "../ContentComponent";

import { theme } from "../../theme";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.containerBgGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.mainTextColor};
`;

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: 800px;
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${(props) => props.tabWrapperShadowColor};
  border: 4px solid ${(props) => props.deviceBorderColor};

  .device {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${(props) => props.deviceBgColor};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
  }
`;

const ButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 16px;
  top: 16px;
  color: ${(props) => props.mainBorderColor};
  background-color: ${(props) => props.buttonBgColor};
  border: 1px solid ${(props) => props.mainBorderColor};
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

let initTasks = [];

const App = () => {
  const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState(initTasks);
  const [activeTab, setActiveTab] = useState("all");
  const [isAddTaskFormOpen, setAddTaskFormOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

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

  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <Container
      containerBgGradientColor={selectedTheme.containerBgGradientColor}
      mainTextColor={selectedTheme.mainTextColor}
    >
      <ButtonWrapper
        mainBorderColor={selectedTheme.mainBorderColor}
        buttonBgColor={selectedTheme.buttonBgColor}
        onClick={() => {
          setDarkMode(!isDarkMode);
        }}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="fa" />
      </ButtonWrapper>

      <DeviceWrapper
        deviceBorderColor={selectedTheme.deviceBorderColor}
        deviceBgColor={selectedTheme.deviceBgColor}
        mainBorderColor={selectedTheme.mainBorderColor}
        tabWrapperShadowColor={selectedTheme.tabWrapperShadowColor}
      >
        <div className="device">
          <HeaderComponent
            deviceBorderColor={selectedTheme.deviceBorderColor}
          />

          <ContentComponent
            tasks={tasks}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            changeTaskStatus={changeTaskStatus}
            changeTaskStatusDelete={changeTaskStatusDelete}
            tabWrapperBgColor={selectedTheme.tabWrapperBgColor}
            tabWrapperShadowColor={selectedTheme.tabWrapperShadowColor}
            borderBottomTaskDivColor={selectedTheme.borderBottomTaskDivColor}
            removeTaskTextColor={selectedTheme.removeTaskTextColor}
            doneTaskTextColor={selectedTheme.doneTaskTextColor}
          />

          <FooterComponent
            setAddTaskFormOpen={setAddTaskFormOpen}
            newTask={newTask}
            enterNewTask={enterNewTask}
            keyBoardHandler={keyBoardHandler}
            isAddTaskFormOpen={isAddTaskFormOpen}
            addButtonWrapperBgColor={selectedTheme.addButtonWrapperBgColor}
            addTaskFormWrapperBgColor={selectedTheme.addTaskFormWrapperBgColor}
            hrBgColor={selectedTheme.hrBgColor}
            inputUnderLineColor={selectedTheme.inputUnderLineColor}
            mainTextColor={selectedTheme.mainTextColor}
          />
        </div>
      </DeviceWrapper>
    </Container>
  );
};

export default App;
