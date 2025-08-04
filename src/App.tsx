import { useState } from 'react'
import './App.css'

function App() {


  const [tasks, setTasks] = useState<string[]>([]);
  const [values, setValue] = useState<string>("")


    const AddTask = ()=> {
      if(values.trim() === "") return;
      setTasks([...tasks, values]);
      setValue("");
    }


    const DeleteTask = (index:number)=> {
      const deletedTask = tasks.filter((_, i)=> i !== index)
      setTasks(deletedTask)
    }

    const UpdateTask = (taxt: string , index:number)=> {
     setValue(taxt)
   
       
       const deletedTask = tasks.filter((_, i)=> i !== index)
      setTasks(deletedTask)
      
    
    }
  return (
    <>
    <div className="div">
      <input type="text" placeholder='Add a Task'  
        value={values}
        onChange={(e)=> setValue(e.target.value)}
      />
      <button onClick={AddTask}>Add</button>
    </div>

    <ul>

      {tasks.map((task, index)=> {
        return(
          <li key={index}> <span>{task}</span> <button onClick={()=> DeleteTask(index)}>Delete</button> <button onClick={()=> UpdateTask(task, index)}>Update</button></li>
        )
      })}
    </ul>
    </>
  )
}

export default App
