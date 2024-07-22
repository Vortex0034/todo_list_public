import {getTaskList} from "./task_controller.js";

function getListOfTaskNodes(sortValue, isDoneTasks, timeIsUpTasks) {
    let tasksObject = getTaskList();
    let tasksList = Object.keys(tasksObject).reduce(function(result, key) {
        let task = tasksObject[key];

        let timeIsUp = Number(task.deadlineTime) < Date.now();

        let filter = null;

        if (!isDoneTasks && timeIsUpTasks)
            filter = (!task.done && timeIsUp)
        else if (!isDoneTasks && !timeIsUpTasks)
            filter = (!task.done && !timeIsUp)
        else if (isDoneTasks)
            filter = (task.done);

        if (filter)
            result.push(task);
        
        return result;
    }, []);
    
    if (sortValue == "deadlineTime")
        tasksList.sort((first, second) => first.deadlineTime > second.deadlineTime ? 1 : -1)
    else if (sortValue == "createTime")
        tasksList.sort((first, second) => first.createTime > second.createTime ? 1 : -1)

    


    return tasksList;
}

export {getListOfTaskNodes}