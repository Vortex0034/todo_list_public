import MainTaskList from "./interfaceModules/MainTaskList/MainTaskList.js";
import AddChangeTaskWindow from "./interfaceModules/components/AddChangeTaskWindow.js";
import DeadlineTaskList from "./interfaceModules/DeadlineTaskList/DeadlineTaskList.js";
import { useState } from "react";
import DoneTaskList from "./interfaceModules/DoneTaskList/DoneTaskList.js";

function AddTaskButton() {

    const [isWindowShowed, changeWindow] = useState(false);

    function addTaskController() {
        changeWindow(true);
    }

    return (
        <>
        <button className="add-button" onClick={addTaskController}>
            Добавить задачу
        </button>
        <AddChangeTaskWindow toChange={null} currTask={null} isVision={isWindowShowed} setVisionFunction={changeWindow}/>
        </>
    );
}

export default function Interface() {
    const [mainTasks, setMainTasks] = useState([]);

    return (
      <section className="container">
        <AddTaskButton />
        <section className="interface-container">
            <MainTaskList tasks={mainTasks} tasksSetter={setMainTasks}/>
            <section className="ofther-tasks-container">
                <DeadlineTaskList />
                <DoneTaskList />
            </section>
        </section>
      </section>
    
    );
  }