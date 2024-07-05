import { useState } from 'react';

import Task from "../components/Task";
import {getTaskList} from "../components/task_controller.js";
import AddTaskWindow from "./AddTaskWindow.js";

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
        <AddTaskWindow isVision={isWindowShowed} setVisionFunction={changeWindow}/>
        </>
    );
}

export default function MainTaskList() {
    let taskList = getTaskList();
    let taskNodes = Object.keys(taskList).reduce(function(result, key) {
        let task = taskList[key];
        result.push(<Task id={task.id} />);
        return result;
    }, []);
    let newtaskNodes = taskNodes;

    return (
        <section className="main-tasks-container">
            <h2>Поставленные задачи</h2>
            <AddTaskButton />
            <section className="main-tasks">
                {newtaskNodes}
            </section>
        </section>
    );
}