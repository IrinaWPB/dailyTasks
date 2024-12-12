import ToDoCard from "./ToDoCard";

export default function ToDoList({todos, deleteTodo, updateTodo}) {

  return (
    <>
      <div className="header">My List</div>
      <div>
        {todos.length > 0 
        ?
          todos.map(task => <ToDoCard key={task} task={task} deleteTodo={deleteTodo} updateTodo={updateTodo}/>)
        :
        'No tasks for today.'}
      </div>
    </>
  )
}
