import Task from "../components/Task";
import {getTaskList} from "../components/task_controller.js";

export default function DeadlineTaskList() {

    return (
        <section className="deadline-tasks-container">
            <h2>Задачи с истёкшим сроком</h2>
            <section className="deadline-tasks">
            </section>
        </section>
    );
}