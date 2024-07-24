import { useState } from 'react';

import {saveLastId, getLastId, saveTask} from "../../services/task_controller.js";
import { toNormHTMLDateFormat } from "../../services/time_services.js";

export default function AddChangeTaskWindow({ isVision, setVisionFunction, toChange, currTask, onChangeDelete }) {

    function submitHandlerChange(task) {
        let title = document.getElementById(`task-title-${ task.id }`).value;
        let description = document.getElementById(`task-description-${ task.id }`).value;
        let deadlineDateMs = Date.parse(document.getElementById(`task-deadline-${ task.id }`).value);

        
        let id = task.id;
        let doneStatus = task.done;
        let createDateMs = task.createTime;
        saveTask(id, title, description, deadlineDateMs, createDateMs, doneStatus);
        
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

    function AddChangeTaskForm({ task }) {

        const [title, setTitle] = useState(task ? task.title : undefined);
        const [description, setDescription] = useState(task ? task.description : undefined);
        const [deadlineTime, setDeadlineTime] = useState(task ? toNormHTMLDateFormat(task.deadlineTime) : undefined);

        let titleChangeHandler = task ? e => setTitle(e.target.value) : undefined;
        let descriptionChangeHandler = task ? e =>  setDescription(e.target.value) : undefined;
        let datetimeChangeHandler = task ? e => setDeadlineTime(e.target.value) : undefined;

        let label = task ? "Сохранить" : "Создать";

        return (
            <form className="change-add-form">
                    Заголовок:
                    <input id={task ? `task-title-${task.id}` : `task-title`} value={title} onChange={titleChangeHandler}></input>
                    Описание:
                    <textarea id={task ? `task-description-${task.id}` : `task-description`} onChange={descriptionChangeHandler} value={description} />
                    Выполнить до:
                    <input type='datetime-local' id={task ? `task-deadline-${task.id}` : "task-deadline"} onChange={datetimeChangeHandler} value={deadlineTime}></input>
                    <button onClick={e => { task ? submitHandlerChange(task) : submitHandlerSave();
                                            onChangeDelete();
                     }}>{ label }</button>
                    <button onClick={submitHandlerCancel}>Отмена</button>
            </form>
        );
    }

    return (
            <section className={!isVision ? "add-window-none" : "add-window"} >
                <AddChangeTaskForm task={currTask}/>
            </section>
    );

}