import Task from "../components/Task";
import {getTaskList} from "../components/task_controller.js";

export default function DoneTaskList() {

    return (
        <section className="done-tasks-container">
            <h2>Выполненные задачи</h2>
            <section className="done-tasks">
            </section>
        </section>
    );
}