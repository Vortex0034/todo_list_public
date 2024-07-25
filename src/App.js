import MainTaskList from "./interfaceModules/MainTaskList/MainTaskList.js";
import AddChangeTaskWindow from "./interfaceModules/components/AddChangeTaskWindow.js";
import DeadlineTaskList from "./interfaceModules/DeadlineTaskList/DeadlineTaskList.js";
import { getListOfTaskNodes } from "./services/services.js"
import { useState } from "react";
import DoneTaskList from "./interfaceModules/DoneTaskList/DoneTaskList.js";
import { Analytics } from "@vercel/analytics/react"

function AddTaskButton({onChangeDelete}) {

    const [isWindowShowed, changeWindow] = useState(false);

    function addTaskController() {
        changeWindow(true);
    }

    return (
        <>
        <button className="add-button" onClick={addTaskController}>
            Добавить задачу
        </button>
        <AddChangeTaskWindow toChange={null} currTask={null} isVision={isWindowShowed} setVisionFunction={changeWindow} onChangeDelete={onChangeDelete}/>
        </>
    );
}

export default function Interface() {
    const [mainTasks, setMainTasks] = useState(getListOfTaskNodes("deadlineTasks", false, false));
    const [doneTasks, setDoneTasks] = useState(getListOfTaskNodes(null, true, false));
    const [deadlineTisks, setDeadlineTasks] = useState(getListOfTaskNodes(null, false, true));

    function onChangeDelete() {
        setDeadlineTasks(getListOfTaskNodes(null, false, true));
        setDoneTasks(getListOfTaskNodes(null, true, false));
        setMainTasks(getListOfTaskNodes("deadlineTasks", false, false));
    }

    return (
      <section className="container">
        <AddTaskButton onChangeDelete={onChangeDelete}/>
        <section className="interface-container">
            <MainTaskList tasks={mainTasks} tasksSetter={setMainTasks} onChangeDelete={onChangeDelete}/>
            <section className="ofther-tasks-container">
                <DeadlineTaskList tasks={deadlineTisks} onChangeDelete={onChangeDelete}/>
                <DoneTaskList tasks={doneTasks} onChangeDelete={onChangeDelete}/>
                <Analytics />
            </section>
        </section>
      </section>
    
    );
  }