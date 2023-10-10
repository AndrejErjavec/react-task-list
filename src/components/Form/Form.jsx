import React from 'react'
import './Form.css'

function Form() {
  return (
    <form action="" className="form">
      <div className="form-group">
        <label htmlFor="name">Task name</label>
        <input type="text" className="input" name="name"></input>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" className="input" name="dueDate"></input>
      </div>

      <button className="gumb">Add</button>
    </form>
  )
}

export default Form