import {getTaskList, deleteTask, setTaskStatus} from "../../services/task_controller.js"
import { useState } from 'react';
import {TimeBlock} from "./time_blocks.js"
import AddChangeTaskWindow from "../components/AddChangeTaskWindow.js";

function Time({task}) {
    let date = Date.now();
    let isSoonLate = task.deadlineTime - date <= 86400000 && task.deadlineTime - date >= 0
    return (
    <section className="time-container">
        <span>Дата создания: <TimeBlock ms={Number(task.createTime)} /></span>
        <span>Крайний срок: <TimeBlock ms={Number(task.deadlineTime)}  isDone={task.done} isSoonLate={isSoonLate}/></span>
    </section>
    );
}

function ChangeButton({task}) {

    const [isWindowShowed ,changeWindow] = useState(false);

    function changeTaskHandler(event) {
        changeWindow(true);
    };

    return ( 
        <>
            <button className="change-button" onClick={changeTaskHandler}>Изменить</button>
            <AddChangeTaskWindow setVisionFunction={changeWindow} isVision={isWindowShowed} toChange={true} currTask={task} />
        </>
    );
}

function DeleteButton({task}) {
    return <button className="delete-button" id={task.id} onClick={(e) => (deleteTask(task.id))}>Удалить</button>
}

function Description({task}) {
    let text = task.description;
    return (<section className="description">
        {text}
    </section>);
}

function DoneButton({ task }) {

    if (!task.done)
        return (
            <button className="done-button" id={task.id} onClick={(e) => (setTaskStatus(true, task))}>Отметить выполненным</button>
        );
    else
        return (
            <button className="done-button" id={task.id} onClick={(e) => (setTaskStatus(false, task))}>Отметить невыполненным</button>
        );
}

export default function Task({ id }) {
    let taskList = getTaskList();
    let task = taskList[String(id)];
    return (<section className="task" >
    <h2 className="task-title">{task.title}</h2>
        <section className="task-body">
            <Description task={task} />
            <section className="task-buttons-time">
                <DeleteButton task={task} />
                <ChangeButton task={task} />
                <Time task={task} />
                <DoneButton task={task}/>
            </section>
        </section>
    </section>);
}