function saveLastId(id) {
    localStorage.setItem('lastId', String(id));
}

function getLastId() {
    let lastId = localStorage.getItem('lastId');
    if (lastId === null)
        lastId = 0;
    return lastId;
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

function saveTask(id, title, description, createTime, deadlineTime) {
    let currentTask = {"id": id,
                       "title": title,
                       "descriplion": description,
                       "createTime": createTime,
                       "deadlineTime": deadlineTime,
                       "done": false
    };
    let taskList = getTaskList();
    taskList[id] = currentTask;
    let taskListJSON = JSON.stringify(taskList);
    console.log(taskListJSON);
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

export {getTaskList, deleteTask, saveTask, saveLastId, getLastId};