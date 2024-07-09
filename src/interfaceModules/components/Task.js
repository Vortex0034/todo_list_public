import {getTaskList, deleteTask, setTaskStatus} from "./task_controller.js"
import { useState } from 'react';
import AddTaskWindow from "../MainTaskList/AddTaskWindow.js";

function TimeBlock({ms}) {
    function leadingZero(token) {
        return ("0" + token).slice(-2)
    }

    let date = new Date(ms);
    let year = date.getFullYear();
    let month = leadingZero(date.getMonth());
    let day = leadingZero(date.getDate());
    let hours = leadingZero(date.getHours());
    let minutes = leadingZero(date.getMinutes());

    return (
        <span>{day}.{month}.{year} {hours}:{minutes}</span>
    );
}

function Time({task}) {
    return (
    <section className="time-container">
        <span>Дата создания: <TimeBlock ms={Number(task.createTime)} /></span>
        <span>Крайний срок: <TimeBlock ms={Number(task.deadlineTime)} /></span>
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
            <AddTaskWindow setVisionFunction={changeWindow} isVision={isWindowShowed} toChange={true} currTask={task} />
        </>
    );
}

function DeleteButton({task}) {
    return <button className="delete-button" id={task.id} onClick={(e) => (deleteTask(task.id))}>Удалить</button>
}

function Description({task}) {
    let text = task.description;
    return (<section className="description">
        {text};
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

export default function Task({id}) {
    let taskList = getTaskList();
    let task = taskList[String(id)];
    return (<section className="task">
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