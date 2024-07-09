import Task from "../components/Task";
import {getTaskList} from "../components/task_controller.js";

export default function DeadlineTaskList() {
    let taskList = getTaskList();
    let taskNodes = Object.keys(taskList).reduce(function(result, key) {
        let task = taskList[key];
        let timeIsUp = Number(task.deadlineTime) < Date.now();
        if (!task.done && timeIsUp)
            result.push(<Task id={task.id} />);
        return result;
    }, []);
    let newtaskNodes = taskNodes;

    return (
        <section className="deadline-tasks-container">
            <h2>Задачи с истёкшим сроком</h2>
            <section className="deadline-tasks">
                {newtaskNodes}
            </section>
        </section>
    );
}