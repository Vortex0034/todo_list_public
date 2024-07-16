import { useEffect } from 'react';
import { updateList } from "../../services/services.js";

export default function MainTaskList({ tasks, tasksSetter }) {

    function selectValueHandler(e) {
        let sortSelect = e.target.name;
        updateList(sortSelect, false, false, tasksSetter);
    }

    useEffect(() => {
        updateList("createTime", false, false, tasksSetter);
    }, []);

    function SortSelector() {
        return (
            <section className='select-buttons-container'>
                <button name='createTime' onClick={selectValueHandler}>По дате создания</button>
                <button name='deadlineTime' onClick={selectValueHandler}>По дате дедлайна</button>
            </section>
        );
    }

    return (
        <section className="main-tasks-container">
            <h2>Поставленные задачи</h2>
            <SortSelector />
            
            <section className="main-tasks">
                {tasks}
            </section>
        </section>
    );
}