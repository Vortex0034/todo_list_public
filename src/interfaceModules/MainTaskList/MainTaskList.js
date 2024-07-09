import { useState } from 'react';
import { getListOfTaskNodes } from "../../services/services.js";
import AddChangeTaskWindow from "./AddChangeTaskWindow.js";

function AddTaskButton() {

    const [isWindowShowed, changeWindow] = useState(false);

    function addTaskController() {
        changeWindow(true);
    }

    return (
        <>
        <button onClick={addTaskController}>
            Добавить задачу
        </button>
        <AddChangeTaskWindow toChange={null} currTask={null} isVision={isWindowShowed} setVisionFunction={changeWindow}/>
        </>
    );
}

export default function MainTaskList() {
    let taskNodes = getListOfTaskNodes(false, false);

    return (
        <section className="main-tasks-container">
            <h2>Поставленные задачи</h2>
            <AddTaskButton />
            <section className="main-tasks">
                {taskNodes}
            </section>
        </section>
    );
}