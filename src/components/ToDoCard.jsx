
export default function ToDoCard({task, deleteTodo, updateTodo}) {
  const handleDeletingTask = () => {
    deleteTodo(task)
  }
  const handleUpdatingTask = () => {
    updateTodo(task)
  }

  return (
    <div className="task-card">
      <div className="task-text">
        {task}
      </div>
      <div className='actions'>
        <i className="fa-regular fa-pen-to-square" onClick={handleUpdatingTask}></i>
        <i className="fa-solid fa-trash" onClick={handleDeletingTask}></i>
      </div>
          
    </div>
  )
}
