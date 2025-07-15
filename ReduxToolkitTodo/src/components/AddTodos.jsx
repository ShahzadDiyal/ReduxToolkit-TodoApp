import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input.trim()))
    setInput('')
  }

  return (
    <div className="container mt-4">
      <form onSubmit={addTodoHandler} className="row g-2 align-items-center">
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-3 text-end">
          <button type="submit" className="btn btn-primary w-100">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodos
