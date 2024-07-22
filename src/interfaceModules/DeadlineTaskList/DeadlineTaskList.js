import Task from "../components/Task.js";

export default function DeadlineTaskList({ tasks, onChangeDelete }) {
    let tasksNodes = tasks.map((task) => 
        <Task id={task.id} key={task.id} onChangeDelete={onChangeDelete}/>
    );

    return (
        <section className="deadline-tasks-container">
            <h2>Задачи с истёкшим сроком</h2>
            <section className="deadline-tasks">
                {tasksNodes}
            </section>
        </section>
    );
}