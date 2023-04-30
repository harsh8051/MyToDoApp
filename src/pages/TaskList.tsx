import {useState} from 'react'
import taskListPage from '../styles/taskListPage.module.scss'

function TaskList() {

  const [tasks, setTasks] = useState([
    'Hello',
    'How are you?',
    'What are you up to today?',
    'bdasjhhhhhhhabjdbhvajkshvdjvfvdHFJGBDJASgvdhjagsVDHJASGVDHVAbgh'
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  function handleSubmit() {
    // Do something with the inputValue, like submit it to a server or display it on the page
    console.log('Input value:', inputValue);
    handleAddTask(inputValue)
    setInputValue('');
    setIsInputVisible(false);
  }

  function handleButtonClick() {
    setIsInputVisible(true);
  }

  function handleInputChange(event:any) {
    setInputValue(event.target.value);
  }

  function handleAddTask(task:string) {
    //const newTask = 'This is a new message';
    setTasks([...tasks, task]);
  }

  function handleCancel() {
    // Reset the input value and hide the input box
    setInputValue('');
    setIsInputVisible(false);
  }

  return (
    <div className={taskListPage.mainbox}>
      <button onClick={handleButtonClick}>Add Task</button>
      {isInputVisible && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',zIndex:'2'}}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h2>Enter Task Title</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <ol className={taskListPage.gradientlist}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
