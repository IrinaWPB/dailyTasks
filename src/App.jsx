import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = (todo) => {
    saveData([...todos, todo])
    setTodos([...todos, todo])
  }

  const deleteTodo = (taskToDelete) => {
    const newTodos = todos.filter((todo) => todo !== taskToDelete);
    saveData(newTodos);
    setTodos(newTodos);
  }

  const updateTodo = (taskToUpdate) => {
    setTodo(taskToUpdate)
    deleteTodo(taskToUpdate);
  }

  const saveData = (newData) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newData}))
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);
  }, []);

  return (
    <>
      <Input addTodo={addTodo} todo={todo} setTodo={setTodo}/>
      <ToDoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </>
  )
}

export default App
