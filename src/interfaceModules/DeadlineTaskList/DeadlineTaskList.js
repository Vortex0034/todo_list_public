import {getListOfTaskNodes} from "../../services/services.js";

export default function DeadlineTaskList() {
    let taskNodes = getListOfTaskNodes(null, false, true);

    return (
        <section className="deadline-tasks-container">
            <h2>Задачи с истёкшим сроком</h2>
            <section className="deadline-tasks">
                {taskNodes}
            </section>
        </section>
    );
}