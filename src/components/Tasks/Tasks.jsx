import {React, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'

function Tasks() {

  // const taskName = "";
  const [taskName, setTaskName] = useState("");
  // const dueDate = "";
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks) {
      return JSON.parse(localTasks);
    }
    else {
      return [];
    }
  });

  function resetForm() {
    setTaskName("");
    setDueDate("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const task = {"id": uuidv4(), "name": taskName, "dueDate": dueDate, "completed": false}
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
    resetForm();
  }

  function changeTaskName(e) {
    setTaskName(e.target.value);
  }

  function changeDueDate(e) {
    setDueDate(e.target.value);
  }

  function toggleComplete(id) {
    setTasks(currentTasks => {
      return currentTasks.map(function(task) {
        return task.id === id ? {...task, completed: !task.completed} : task
      })
    })
  }

  function deleteTask(id) {
    setTasks(() => {
      return tasks.filter((task) => {
        return task.id !== id;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
 
  return (

    <main className="main">
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="input" name="name" placeholder="What do you want to do today?" value={taskName} onChange={changeTaskName}></input>
        </div>
        <div className="form-group">
          <input type="date" className="input" name="dueDate" value={dueDate} onChange={changeDueDate}></input>
        </div>

        <button className="gumb" type="submit">Add</button>
      </form>

      <section className="task-list">
        {tasks.map(function(task) {
          return <TaskItem task={task} toggleComplete={toggleComplete} deleteTask={deleteTask}></TaskItem>
        })}
      </section>

    </main>
    
  )
}

export default Tasks