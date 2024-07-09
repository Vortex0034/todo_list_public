import Task from "../components/Task";
import {getTaskList} from "../components/task_controller.js";

export default function DoneTaskList() {
    let taskList = getTaskList();
    let taskNodes = Object.keys(taskList).reduce(function(result, key) {
        let task = taskList[key];
        if (task.done)
            result.push(<Task id={task.id} />);
        return result;
    }, []);
    let newtaskNodes = taskNodes;

    return (
        <section className="done-tasks-container">
            <h2>Выполненные задачи</h2>
            <section className="done-tasks">
                {newtaskNodes}
            </section>
        </section>
    );
}