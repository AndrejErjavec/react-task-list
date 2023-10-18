import React from 'react';
import './TaskItem.css';
import {FaTrash} from 'react-icons/fa';


function TaskItem({task, toggleComplete, deleteTask}) {
  return (
    <div className="task">
      <div className="left">
        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)}></input>
        <div>{task.name}</div>
      </div>
      <div>{task.dueDate}</div>
      <FaTrash onClick={() => deleteTask(task.id)}></FaTrash>
    </div>
  )
}

export default TaskItem