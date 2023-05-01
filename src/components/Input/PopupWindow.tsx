import {useState} from 'react'

interface Task {
  id: Number | null;
  taskTitle: string;
}

interface Props{
    task:Task,
    handleSubmit:(task:Task)=>void,
    handleCancel:()=>void
};


function TaskPrompt({task,handleSubmit,handleCancel}:Props) {

    const [inputValue, setInputValue] = useState(task);
    

    function handleInputChange(event:any) {
        setInputValue({id:task.id,taskTitle:event.target.value});
    }

    function onSubmit(){
        handleSubmit(inputValue)
    }


  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',zIndex:'2'}}>
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>Enter Task Title</h2>
      <input type="text" value={inputValue.taskTitle} onChange={handleInputChange} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

export default TaskPrompt