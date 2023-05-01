import { useState } from "react";
import TaskPrompt from "../components/Input/PopupWindow";
import taskListPage from "../styles/taskListPage.module.scss";

interface Task {
  id: Number | null;
  taskTitle: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, taskTitle: "Task 1" },
    { id: 2, taskTitle: "Task 2" },
    { id: 3, taskTitle: "Task 3" },
  ]);

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [taskItem, setTaskItem] = useState<Task>({ id: null, taskTitle: "" });

  function handleButtonClick() {
    setIsInputVisible(true);
  }

  function handleSubmit(inputValue: Task) {
    // Do something with the inputValue, like submit it to a server or display it on the page
    console.log("Input value:", inputValue);
    if (inputValue.id === null) handleAddTask(inputValue);
    else handleTaskEdit(inputValue);
    setIsInputVisible(false);
    setTaskItem({ id: null, taskTitle: "" })
  }

  function handleAddTask(task: Task) {
    //const newTask = 'This is a new message';
    console.log(task);
    const newTask = {
      id: tasks.length+1,
      taskTitle: task.taskTitle,
    };
    setTasks([...tasks, newTask]);
  }

  function handleCancel() {
    // Reset the input value and hide the input box
    setIsInputVisible(false);
  }

  function handleDoubleClick(task: Task) {
    console.log("Double-clicked item:", task);
    setTaskItem(task);
    setIsInputVisible(true);
  }

  function handleTaskEdit(task: Task) {
    console.log(task);
    const tasksCopy = tasks.slice();
    const index = tasksCopy.findIndex((t) => t.id === task.id);
    tasksCopy[index] = { ...task /*updated properties here*/ };
    setTasks(tasksCopy);
  }

  return (
    <div className={taskListPage.mainbox}>
      <button onClick={handleButtonClick}>Add Task</button>
      {isInputVisible && (
        <TaskPrompt
          task={taskItem}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      )}
      <ol className={taskListPage.gradientlist}>
        {tasks.map((task, index) => (
          <li onDoubleClick={() => handleDoubleClick(task)} key={index}>
            {task.taskTitle}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
