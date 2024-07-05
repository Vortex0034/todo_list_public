import { useState } from 'react';

import {getTaskList, saveLastId, getLastId, saveTask} from "../components/task_controller.js";

export default function AddTaskWindow({ isVision, setVisionFunction }) {

    function submitHandlerSave() {
        // isVision = changeVision(false);
        let title = document.getElementById('task-title').value;
        let description = document.getElementById('task-description').value;
        let deadlineDateMs = Date.parse(document.getElementById('task-deadline').value);
        let createDateMs = Date.now();
        let lastId = getLastId();

        saveTask(lastId, title, description, deadlineDateMs, createDateMs);
        saveLastId(lastId + 1);
        
        
        setVisionFunction( (state) => {state = false});
    }

    function submitHandlerCancel() {
        // isVision = changeVision(false);
        setVisionFunction( (state) => {state = false});
    }

    function AddTaskForm() {
        return (
            <form className="add-form">
                    Заголовок:
                    <input id="task-title"></input>
                    Описание:
                    <textarea id="task-description"></textarea>
                    Выполнить до:
                    <input type='datetime-local' id="task-deadline"></input>
                    <button onClick={submitHandlerSave}>Создать</button>
                    <button onClick={submitHandlerCancel}>Отмена</button>
            </form>
        );
    }

    if (isVision)
        return (
            <section className="add-window" >
                <AddTaskForm />
            </section>
        )
    else 
        return (
            <section className="add-window-none" >
                <AddTaskForm />
            </section>
        )
}