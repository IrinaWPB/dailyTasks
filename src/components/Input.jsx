import { useState } from "react"

export default function Input({addTodo, todo, setTodo}) {
  const handleAddingNewTodo = () => {
    if (todo.length > 3) {
      addTodo(todo)
      setTodo('')
    }
  }
  return (
    <header>
      <input placeholder="Enter task..." value={todo} onChange={e => setTodo(e.target.value)}/>
      <button className="add-button" onClick={handleAddingNewTodo}>Add</button>
    </header>
  )
}