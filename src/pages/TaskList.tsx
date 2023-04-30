import {useState} from 'react'
import TaskPrompt from '../components/Task/TaskPrompt'
import taskListPage from '../styles/taskListPage.module.scss'

function TaskList() {

  const [tasks, setTasks] = useState([
    'Hello',
    'How are you?',
    'What are you up to today?',
  ]);
  
  const [isInputVisible, setIsInputVisible] = useState(false);

  function handleButtonClick() {
    setIsInputVisible(true);
  }

  function handleSubmit(inputValue:string) {
    // Do something with the inputValue, like submit it to a server or display it on the page
    console.log('Input value:', inputValue);
    handleAddTask(inputValue)
    setIsInputVisible(false);
}
  

  function handleAddTask(task:string) {
    //const newTask = 'This is a new message';
    setTasks([...tasks, task]);
  }
 
  function handleCancel() {
    // Reset the input value and hide the input box
    setIsInputVisible(false);
  }
 
  

  return (
    <div className={taskListPage.mainbox}>
      <button onClick={handleButtonClick}>Add Task</button>
      {isInputVisible && (
        <TaskPrompt handleSubmit={handleSubmit} handleCancel={handleCancel}/>
      )}
      <ol className={taskListPage.gradientlist}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
