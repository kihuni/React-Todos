import React from 'react'
import './Todo.css'

function Todo(props) {
  return (
    <div className='todo'> 
        <input type="text" placeholder='Enter task' />
        <button>Add</button>
       {
        props.todos.map((todo) =>
            <p>{todo}</p>
        )
       }
    </div>
  )
}

export default Todo