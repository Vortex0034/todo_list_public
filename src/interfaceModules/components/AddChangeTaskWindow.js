import { useState } from 'react';

import {saveLastId, getLastId, saveTask} from "../../services/task_controller.js";
import { toNormHTMLDateFormat } from "../../services/time_services.js";

export default function AddChangeTaskWindow({ isVision, setVisionFunction, toChange, currTask }) {

    function submitHandlerChange(task) {
        let title = document.getElementById(`task-title-${ task.id }`).value;
        let description = document.getElementById(`task-description-${ task.id }`).value;
        let deadlineDateMs = Date.parse(document.getElementById(`task-deadline-${ task.id }`).value);

        
        let id = task.id;
        let createDateMs = task.createTime;
        saveTask(id, title, description, deadlineDateMs, createDateMs);
        
        setVisionFunction( (state) => {state = false});
    }

    function submitHandlerSave() {
        // isVision = changeVision(false);
        let title = document.getElementById('task-title').value;
        let description = document.getElementById('task-description').value;
        let deadlineDateMs = Date.parse(document.getElementById('task-deadline').value);
        let createDateMs = Date.now();
        let lastId = getLastId();

        saveTask(lastId, title, description, deadlineDateMs, createDateMs, false);
        saveLastId(lastId + 1);  
        
        setVisionFunction( (state) => {state = false});
    }

    function submitHandlerCancel() {
        // isVision = changeVision(false);
        setVisionFunction( (state) => {state = false});
    }

    function ChangeTaskForm({ task }) {

        const [title, setTitle] = useState(task.title);
        const [description, setDescription] = useState(task.description);
        const [deadlineTime, setDeadlineTime] = useState(toNormHTMLDateFormat(task.deadlineTime));

        return (
            <form className="change-add-form">
                    Заголовок:
                    <input id={`task-title-${task.id}`} value={title} onChange={e => setTitle(e.target.value)}></input>
                    Описание:
                    <textarea id={`task-description-${task.id}`} onChange={e => setDescription(e.target.value)} value={description} />
                    Выполнить до:
                    <input type='datetime-local' id={`task-deadline-${task.id}`} onChange={e => setDeadlineTime(e.target.value)} value={deadlineTime}></input>
                    <button onClick={e => submitHandlerChange(task)}>Сохранить</button>
                    <button onClick={submitHandlerCancel}>Отмена</button>
            </form>
        );
    }

    function AddTaskForm() {
        return (
            <form className="change-add-form">
                    Заголовок:
                    <input id="task-title"></input>
                    Описание:
                    <textarea id="task-description" />
                    Выполнить до:
                    <input type='datetime-local' id="task-deadline"></input>
                    <button onClick={submitHandlerSave}>Создать</button>
                    <button onClick={submitHandlerCancel}>Отмена</button>
            </form>
        );
    }

    if (isVision && !toChange)
        return (
            <section className="add-window" >
                <AddTaskForm />
            </section>
        )
    else if (isVision && toChange)
        return (
            <section className="add-window" >
                <ChangeTaskForm task={currTask}/>
            </section>
        );
    else 
        return (
            <section className="add-window-none" >
                <AddTaskForm />
            </section>
        );

}