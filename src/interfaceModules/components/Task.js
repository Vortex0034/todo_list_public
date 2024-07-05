import {getTaskList, deleteTask, editTask} from "./task_controller.js"

function Time({task}) {
    return (
    <section className="time-container">
        <span>Дата создания: {String(new Date(Number(task.createTime)))}</span>
        <span>Крайний срок: {String(new Date(Number(task.deadlineTime)))}</span>
    </section>
    );
}

function deleteTaskHandler(event) {
    let taskId = event.currentTarget.id;
    deleteTask(taskId);
}

function ChangeButton({task}) {
    return <button className="change-button">Изменить</button>
}

function DeleteButton({task, handler}) {
    return <button className="delete-button" id={task.id} onClick={handler}>Удалить</button>
}

function Description({task}) {
    let text = task.description;
    return (<section className="description">
        {text};
    </section>);
}

export default function Task({id}) {
    let taskList = getTaskList();
    let task = taskList[String(id)];
    return (<section className="task">
    <h2>{task.title}</h2>
        <section className="task-body">
            <Description task={task} />
            <DeleteButton task={task} handler={deleteTaskHandler} />
            <ChangeButton task={task} />
            <Time task={task} />
        </section>
    </section>);
}