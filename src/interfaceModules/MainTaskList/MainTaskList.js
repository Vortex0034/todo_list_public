import { getListOfTaskNodes } from "../../services/services.js";
import Task from "../components/Task.js";

export default function MainTaskList({ tasks, tasksSetter, onChangeDelete }) {

    function selectValueHandler(e) {
        let sortSelect = e.target.name;
        let newTaskList = getListOfTaskNodes(sortSelect, false, false);
        tasksSetter(newTaskList);
    }

    function SortSelector() {
        return (
            <section className='select-buttons-container'>
                <button name='createTime' onClick={selectValueHandler}>По дате создания</button>
                <button name='deadlineTime' onClick={selectValueHandler}>По дате дедлайна</button>
            </section>
        );
    }

    let tasksNodes = tasks.map((task) => 
        <Task id={task.id} key={task.id} onChangeDelete={onChangeDelete}/>
    );

    return (
        <section className="main-tasks-container">
            <h2>Поставленные задачи</h2>
            <SortSelector />
            
            <section className="main-tasks">
                {tasksNodes}
            </section>
        </section>
    );
}