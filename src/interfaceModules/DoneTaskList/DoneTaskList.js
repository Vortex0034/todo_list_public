import Task from "../components/Task.js";

export default function DoneTaskList({ tasks, onChangeDelete }) {

    let tasksNodes = tasks.map((task) => 
        <Task id={task.id} key={task.id} onChangeDelete={onChangeDelete}/>
    );

    return (
        <section className="done-tasks-container">
            <h2>Выполненные задачи</h2>
            <section className="done-tasks">
                {tasksNodes}
            </section>
        </section>
    );
}