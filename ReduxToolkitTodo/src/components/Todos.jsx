import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-primary">My Todo List</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item mb-2 d-flex justify-content-between align-items-center">
            {todo.text}
            <button 
              onClick={() => dispatch(removeTodo(todo.id))} 
              className="btn btn-sm btn-danger"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
