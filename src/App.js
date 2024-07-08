import MainTaskList from "./interfaceModules/MainTaskList/MainTaskList.js";
import DeadlineTaskList from "./interfaceModules/DeadlineTaskList/DeadlineTaskList.js";
import DoneTaskList from "./interfaceModules/DoneTaskList/DoneTaskList.js";

export default function Interface() {
    return (
    <section className="interface-container">
      <MainTaskList />
      <section className="ofther-tasks-container">
        <DeadlineTaskList />
        <DoneTaskList />
      </section>
    </section>
    );
  }