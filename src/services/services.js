import {getTaskList} from "./task_controller.js";
import Task from "../interfaceModules/components/Task.js";

function getListOfTaskNodes(isDoneTasks, timeIsUpTasks) {
    let taskList = getTaskList();
    let taskNodes = Object.keys(taskList).reduce(function(result, key) {
        let task = taskList[key];
        let timeIsUp = Number(task.deadlineTime) < Date.now();

        let filter = null;


        if (!isDoneTasks && timeIsUpTasks)
            filter = (!task.done && timeIsUp)
        else if (!isDoneTasks && !timeIsUpTasks)
            filter = (!task.done && !timeIsUp)
        else if (isDoneTasks)
            filter = (task.done);

        if (filter)
            result.push(<Task id={task.id} />);

        return result;
    }, []);

    return taskNodes;
}

export {getListOfTaskNodes}