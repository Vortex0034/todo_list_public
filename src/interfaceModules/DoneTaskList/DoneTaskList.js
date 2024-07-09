import {getListOfTaskNodes} from "../../services/services.js";

export default function DoneTaskList() {
    let taskNodes = getListOfTaskNodes(true, null);

    return (
        <section className="done-tasks-container">
            <h2>Выполненные задачи</h2>
            <section className="done-tasks">
                {taskNodes}
            </section>
        </section>
    );
}