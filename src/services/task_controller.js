function setTaskStatus(done, task) {
    task.done = done;
    saveTask(task.id, task.title, task.description, task.deadlineTime, task.createTime, task.done);
}

function saveLastId(id) {
    localStorage.setItem('lastId', String(id));
}

function getLastId() {
    let lastId = localStorage.getItem('lastId');
    if (lastId === null)
        lastId = 0;
    return Number(lastId);
}

function getTaskList() {
    try {
        let taskListJSON = localStorage.getItem("taskList");
        let taskList = JSON.parse(taskListJSON);
        return taskList;
    }
    catch(err) {
        alert(`Ошибка возвращения списка задач ${err.name}`);
    }
}

function saveTask(id, title, description, deadlineTime, createTime, doneStatus) {
    let currentTask = {"id": id,
                       "title": title,
                       "description": description,
                       "createTime": createTime,
                       "deadlineTime": deadlineTime,
                       "done": doneStatus
    };
    let taskList = getTaskList();
    taskList[id] = currentTask;
    let taskListJSON = JSON.stringify(taskList);
    localStorage.setItem("taskList", taskListJSON);
}

function deleteTask(id) {
    try {
        let taskList = getTaskList();
        delete taskList[id];
        let taskListJSON = JSON.stringify(taskList);
        localStorage.setItem('taskList', taskListJSON);
    }
    catch {
        alert("Ошибка удаления задачи")
    };
    
}

export {getTaskList, deleteTask, saveTask, saveLastId, getLastId, setTaskStatus};