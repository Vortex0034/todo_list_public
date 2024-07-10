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
        <button className="add-button" onClick={addTaskController}>
            Добавить задачу
        </button>
        <AddChangeTaskWindow toChange={null} currTask={null} isVision={isWindowShowed} setVisionFunction={changeWindow}/>
        </>
    );
}

function MainTasks({ sortValue }) {
    

    let taskNodes = getListOfTaskNodes(sortValue, false, false);
    return (
        <section className="main-tasks">
            {taskNodes}
        </section>
    );
}

export default function MainTaskList() {
    const [sortValue, setSortValue] = useState("createTime");

    function selectValueHandler() {
        let sortSelect = document.getElementById("sort-select").value;
        setSortValue(sortSelect);
    }

    function SortSelector() {
        return (
            <select onChange={selectValueHandler} name="sort-select" id="sort-select">
                <option value="deadlineTime">По дате дедлайна</option>
                <option value="createTime">По дате создания</option>
            </select>
        );
    }

    return (
        <section className="main-tasks-container">
            <h2>Поставленные задачи</h2>
            <section className='main_control'>
                <AddTaskButton />
                <SortSelector />
            </section>
            
            <MainTasks sortValue={sortValue}/>
        </section>
    );
}